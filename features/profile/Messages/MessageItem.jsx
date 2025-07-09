import React, {useEffect, useState} from 'react';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    addToast,
    Spinner,
} from "@heroui/react";
import Dots from '@icons/threedots.svg';
import axios from "axios";
import VideoPlayer from "@/features/profile/Messages/VideoPlayer";
import Downloading from "@/features/profile/Messages/Downloading";
import AudioPlayer from "@/features/profile/Messages/AudioPlayer";
import Linkify from "linkify-react";

export default function MessageItem({message, isSender, onReply, onPin, ref}) {
    const [isFileDownloaded, setIsFileDownloaded] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState(0);
    const [cancelTokenSource, setCancelTokenSource] = useState(null);


    const isTextMessage = message.message_type === 'text' && message.text;
    const isAudioMessage = message.message_type === 'file' && message.file_type === 'audio';
    const isImageMessage = message.message_type === 'file' && message.file_type === 'image';
    const isVoiceMessage = message.message_type === 'voice' && message.voice_path
    const isVideoMessage = message.message_type === 'file' && message.file_type === 'video';
    const isFileMessage = message.message_type === 'file' && message.file_type === 'file';

    const handleDownload = async () => {
        if (isFileDownloaded || isDownloading) return;

        setIsDownloading(true);
        setDownloadProgress(0);

        const source = axios.CancelToken.source();
        setCancelTokenSource(source);

        try {
            const response = await axios.get(
                    message.file_path,
                    {
                        responseType: 'blob',
                        cancelToken:
                        source.token,
                        onDownloadProgress:
                            (progressEvent) => {
                                if (progressEvent.total) {
                                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                                    setDownloadProgress(percentCompleted);
                                }
                            },
                    }
                )
            ;
            const fileUrl = URL.createObjectURL(response.data);
            setIsFileDownloaded(fileUrl);
        } catch (error) {
            if (axios.isCancel(error)) {
                addToast({
                    title: 'دانلود لغو شد',
                    description: 'دانلود فایل توسط کاربر لغو شد.',
                    color: 'warning',
                });
            } else {
                addToast({
                    title: 'خطا در دانلود فایل',
                    description: 'لطفا دوباره تلاش کنید.',
                    color: 'danger',
                });
            }
        } finally {
            setIsDownloading(false);
            setDownloadProgress(0);
            setCancelTokenSource(null);
        }
    };

    const handleCancelDownload = () => {
        if (cancelTokenSource) {
            cancelTokenSource.cancel('Download cancelled by user');
        }
    };

    // آزادسازی URL هنگام unmount
    useEffect(() => {
        return () => {
            if (isFileDownloaded) {
                URL.revokeObjectURL(isFileDownloaded);
            }
        };
    }, [isFileDownloaded]);

    // استخراج نام فایل از URL برای فایل‌های عمومی
    const getFileName = (url) => {
        if (!url) return 'فایل';
        return url.split('/').pop().split('?')[0] || 'فایل';
    };

    return (
        <div
            ref={ref}
            className={`group min-w-[120px] sm:max-w-xl max-w-full pt-2 pb-5 rounded-t-lg text-sm relative 
            ${
                (isFileDownloaded && isImageMessage) ? '!p-0' : ''
            }
             ${
                isSender
                    ? 'bg-primary-700 text-white ml-auto pr-2 pl-5 rounded-l-lg'
                    : 'bg-primary-100 text-primary-950 mr-auto pl-2 pr-5 rounded-r-lg'
            }`}
        >
            {message.replyTo && (
                <div
                    className="flex items-center gap-1 text-xs text-primary-950 mb-1 italic border-l-2 pl-2 border-natural_gray-200 bg-primary-400">
                    <span className=''>پاسخ به:</span>
                    <p className='text-justify'>{message.replyTo.text.slice(0, 20)}</p>
                </div>
            )}

            {isTextMessage && (
                <p dir="auto" className="whitespace-break-spaces md:text-sm  text-xs">
                    <Linkify options={{className: 'whitespace-break-spaces md:text-sm  text-xs', target: '_blank'}}
                    >{message.text}</Linkify>
                </p>
            )}

            {isAudioMessage && (
                <div>
                    {!isFileDownloaded ? (
                        <Downloading
                            title={'دانلود فایل صوتی'}
                            isDownloading={isDownloading}
                            isSender={isSender}
                            handleDownload={handleDownload}
                            downloadProgress={downloadProgress}
                            handleCancelDownload={handleCancelDownload}
                        />
                    ) : (
                        <AudioPlayer isSender={isSender} audio_url={isFileDownloaded}/>
                    )}
                </div>
            )}

            {isVoiceMessage && (
                <AudioPlayer isSender={isSender} audio_url={message.voice_path}/>
            )}

            {isImageMessage && (
                <div>
                    {!isFileDownloaded ? (
                        <Downloading
                            title={'نمایش تصویر'}
                            isDownloading={isDownloading}
                            isSender={isSender}
                            handleDownload={handleDownload}
                            downloadProgress={downloadProgress}
                            handleCancelDownload={handleCancelDownload}
                        />
                    ) : (
                        <img
                            onClick={() => window.open(message.file_path)}
                            src={isFileDownloaded}
                            alt="پیوست"
                            className="max-w-full h-auto rounded-lg max-h-64 object-cover"
                        />
                    )}
                </div>
            )}

            {isVideoMessage && (
                <div>
                    {!isFileDownloaded ? (
                        <Downloading
                            title={'دانلود ویدیو'}
                            isDownloading={isDownloading}
                            isSender={isSender}
                            handleDownload={handleDownload}
                            downloadProgress={downloadProgress}
                            handleCancelDownload={handleCancelDownload}
                        />
                    ) : (
                        <VideoPlayer trigger={
                            <button
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
                                    isSender
                                        ? 'bg-primary-700 text-white hover:bg-primary-800'
                                        : 'bg-primary-200 text-primary-950 hover:bg-primary-300'
                                } ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isDownloading ? (
                                    <Spinner color="white" variant="dots"/>
                                ) : (
                                    <span>نمایش ویدیو</span>
                                )}
                            </button>
                        } movie={isFileDownloaded}/>
                    )}
                </div>
            )}

            {isFileMessage && (
                <div>
                    {!isFileDownloaded ? (
                        <Downloading
                            title={`دانلود فایل`}
                            isDownloading={isDownloading}
                            isSender={isSender}
                            handleDownload={handleDownload}
                            downloadProgress={downloadProgress}
                            handleCancelDownload={handleCancelDownload}
                        />
                    ) : (
                        <a
                            href={isFileDownloaded}
                            download={getFileName(message.file_path)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
                                isSender
                                    ? 'bg-primary-700 text-white hover:bg-primary-800'
                                    : 'bg-primary-200 text-primary-950 hover:bg-primary-300'
                            }`}
                        >
                            دانلود فایل ({getFileName(message.file_path)})
                        </a>
                    )}
                </div>
            )}

            {/*<div className={`absolute ${!isSender ? 'right-1 ' : 'left-1'} top-1.5`}>*/}
            {/*    <Dropdown dir='rtl' placement={isSender ? 'left-start' : 'right-start'}>*/}
            {/*        <DropdownTrigger>*/}
            {/*            <div className={`centerOfParent w-fit cursor-pointer`}>*/}
            {/*                <Dots className={`${isSender ? 'fill-white' : ''} w-4 h-4`}/></div>*/}
            {/*        </DropdownTrigger>*/}
            {/*        <DropdownMenu aria-label="WoW">*/}
            {/*            <DropdownItem key="replay" onPress={() => onReply(message)}>ریپلای</DropdownItem>*/}
            {/*            <DropdownItem key="pin" onPress={() => onPin(message)}>پین کردن</DropdownItem>*/}
            {/*            {!isVoiceMessage && !isTextMessage && <DropdownItem key="download" onPress={() => {*/}
            {/*                if (isFileDownloaded) {*/}
            {/*                    window.open(message.file_path, '_blank');*/}
            {/*                } else {*/}
            {/*                    addToast({*/}
            {/*                        title: 'دانلود فایل',*/}
            {/*                        description: 'فایل هنوز دانلود نشده است.',*/}
            {/*                        color: 'warning',*/}
            {/*                    });*/}
            {/*                }*/}
            {/*            }}>دانلود</DropdownItem>}*/}
            {/*        </DropdownMenu>*/}
            {/*    </Dropdown>*/}
            {/*</div>*/}
            <p className={`absolute flex items-center gap-1 bottom-0 ${isSender ? 'left-2 text-white' : 'right-2 flex-row-reverse'} text-[10px] select-none`}>
                {!isTextMessage && <div className={`flex items-center gap-1 ${isSender ? '' : ' flex-row-reverse'}`}>
                    <span dir="ltr">{message.file_size}</span>
                    <span>|</span>
                </div>}

                {new Date(message.sent_at).toLocaleTimeString('fa-IR', {hour: '2-digit', minute: '2-digit'})}
            </p>
            {
                !isImageMessage && (isSender ? <div
                        className="absolute -right-2 bottom-0 bg-primary-700 w-3 h-3 [clip-path:polygon(0_0,_0_100%,_100%_100%)]"></div>
                    : <div
                        className="absolute -left-2 bottom-0 bg-primary-100 w-3 h-3 [clip-path:polygon(100%_0,_0_100%,_100%_100%)]"></div>)
            }
        </div>
    );
}
