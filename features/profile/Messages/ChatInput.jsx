import React, {useRef, useState} from 'react';
import {addToast, Button, Spinner, Textarea} from "@heroui/react";
import usePostRequest from "@/hooks/usePostRequest";
import Close from '@icons/close.svg'
import Upload from '@icons/file-upload.svg'
import dynamic from "next/dynamic";

const AudioRecorder = dynamic(() => import('./VoiceRecorder'), {ssr: false});

const ChatInput = ({id, refView}) => {
    const {sendPostRequest, isLoading, progress} = usePostRequest();
    const [input, setInput] = useState('');
    const [file, setFile] = useState(null);
    const [voice, setVoice] = useState(null);
    const fileInputRef = useRef();
    const containerRef = useRef();

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() && !file && !voice) return;

        const formData = new FormData();
        if (file || voice) {
            if (file) formData.append('file', file);
            if (voice) formData.append('voice', voice);
        } else if (input.trim()) {
            formData.append('message', input);
        }

        const {
            success,
            errorMessage
        } = await sendPostRequest("POST", `/send-message/${id}`, formData, true, true);

        if (!success) {
            addToast({
                title: 'خطا',
                description: errorMessage || 'اتصال اینترنت خود را بررسی کنید',
                color: 'danger',
            });
        } else {
            setInput('');
            setFile(null);
            setVoice(null);
        }
    };

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            sendMessage({
                preventDefault: () => {
                },
            });
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFile(e.target.files[0]);
            setInput('')
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <form ref={refView} className="p-4 border-t bg-white flex flex-row-reverse gap-2 items-center"
                  onSubmit={sendMessage}>
                <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                />
                {!file && <AudioRecorder onRecordingComplete={setVoice} voice={voice} containerRef={containerRef}/>}
                <div className={`w-full border rounded ${!voice ? 'hidden' : ''}`}
                     ref={containerRef}/>
                {!voice && <Textarea
                    isReadOnly={file}
                    dir="auto"
                    name="message"
                    variant="bordered"
                    classNames={{input: "lg:text-base sm:text-sm text-xs"}}
                    radius="sm"
                    minRows={1}
                    maxRows={6}
                    className="flex-1"
                    value={file ? file.name : input}
                    onKeyDown={onEnterPress}
                    onValueChange={setInput}
                    endContent={file ? <Close className="cursor-pointer fill-natural_gray-600 w-5 h-5 flex-shrink-0"
                                              onClick={() => isLoading ? null : setFile(null)}/> :
                        <Upload className="cursor-pointer fill-natural_gray-600 w-5 h-5 flex-shrink-0"
                                onClick={triggerFileInput}/>}
                />}

                <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary-700 text-white px-3 py-2.5 rounded-lg h-fit hover:bg-primary-900"
                >
                    {isLoading ?
                        <div className="flex items-center gap-2">
                            <span className="flex items-center">
                                %
                                {progress}
                            </span>
                            <Spinner variant="dots" size="sm" color="white"/>
                        </div> : 'ارسال'}
                </Button>
            </form>
        </>
    );
};

export default ChatInput;