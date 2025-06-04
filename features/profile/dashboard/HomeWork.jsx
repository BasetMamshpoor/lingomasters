import React, {useState, useRef, useEffect} from 'react';
import {addToast, Checkbox, CheckboxGroup, Spinner} from "@heroui/react";
import Close from "@icons/close.svg";
import Upload from "@icons/upload-cloud-02.svg";
import axios from "axios";
import Cookies from "js-cookie";

const HomeWork = ({is_reading, homework_status, id}) => {
    const newHomeworkStatus = homework_status === 1 ? '1' : '0';
    const [state, setState] = useState(newHomeworkStatus);
    const prevStatusRef = useRef(newHomeworkStatus);
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const inputRef = useRef();
    const token = Cookies.get('token');

    useEffect(() => {
        if (is_reading && prevStatusRef.current !== state) {
            const postData = async () => {
                setIsLoading(true)
                try {
                    const headers = {
                        'Content-Type': 'application/json',
                        ...(token && {
                            'Authorization': `${JSON.parse(token).token_type} ${JSON.parse(token).access_token}`
                        })
                    };
                    const response = await axios.post(`/student/dashboard/store/${id}`, { doing_homework: state }, { headers });

                    addToast({
                        title: 'موفق',
                        description: response.data.message || 'وضعیت تمرین با موفقیت به‌روزرسانی شد.',
                        color: 'success'
                    });

                    prevStatusRef.current = state;

                } catch (error) {
                    addToast({
                        title: 'ناموفق',
                        description: error.response?.data?.message || 'خطایی در به‌روزرسانی وضعیت تمرین رخ داد.',
                        color: 'danger'
                    });
                } finally {
                    setIsLoading(false)
                }
            };

            postData();
        }
    }, [is_reading, state, token, id]);


    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        if (selected) setFile(selected);
    };

    const startUpload = async () => {
        if (!file) return;
        setUploading(true);
        setProgress(0);
        try {
            await axios.post(`/student/dashboard/store/${id}`, {answer: file}, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `${JSON.parse(token).token_type} ${JSON.parse(token).access_token}`
                },
                onUploadProgress: (progressEvent) => {
                    const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setProgress(percent);
                }
            });
            setUploading(false);
            setFile(null);
            setProgress(0);
            addToast({
                title: 'موفق',
                description: 'فایل با موفقیت آپلود شد.',
                color: 'success'
            })

        } catch (err) {
            addToast({
                title: 'خطا',
                description: err.response?.data?.message || 'خطایی در آپلود فایل رخ داد.',
                color: 'danger'
            })
            setUploading(false);
            setProgress(0);
        }
    };

    const cancelUpload = () => {
        setUploading(false);
        setProgress(0);
        setFile(null);
    };

    return (
        <div className="centerOfParent w-full">
            {is_reading ? (
                (isLoading ? <Spinner color="success" variant="dots"/>
                    : <CheckboxGroup
                        value={[state]}
                        color='success'
                        onValueChange={e => setState(e[e.length - 1])}
                        style={{
                            "--heroui-success": "196 94% 25%",
                        }}
                        orientation="horizontal"
                    >
                        <Checkbox
                            value='1'
                            radius='sm'
                            color='success'
                            classNames={{icon: 'text-white', label: 'text-sm'}}
                            style={{
                                "--heroui-success": "196 94% 25%",
                            }}>انجام دادم</Checkbox>
                        <Checkbox
                            value='0'
                            radius='sm'
                            color='success'
                            classNames={{icon: 'fill-white w-4 h-4', label: 'text-sm'}}
                            icon={<Close/>}
                            style={{
                                "--heroui-success": "2 74% 48%",
                            }}>انجام ندادم</Checkbox>
                    </CheckboxGroup>)
            ) : (
                <div
                    className={`flex flex-col items-center cursor-pointer transition w-full max-w-sm mx-auto`}
                >
                    <input
                        type="file"
                        ref={inputRef}
                        hidden
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    {!file && !uploading && (
                        <>
                            <div className="flex items-center gap-2" onClick={() => inputRef.current.click()}>
                                <div className="centerOfParent"><Upload/></div>
                                <div className="flex flex-col items-center">
                                    <p className="text-xs text-natural_gray-950">بارگذاری کنید</p>
                                    <p className="text-[10px] text-natural_gray-400">SVG, PNG, JPG, GIF | 10MB
                                        max.</p>
                                </div>
                            </div>
                        </>
                    )}

                    {file && !uploading && (
                        <>
                            <p className="text-sm text-gray-700 mb-2 line-clamp-1">{file.name}</p>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={startUpload}
                                    className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                                >
                                    ارسال
                                </button>
                                <button
                                    onClick={() => setFile(null)}
                                    className="px-4 py-1 bg-rose-600 text-white text-sm rounded hover:bg-rose-700"
                                >
                                    حذف
                                </button>
                            </div>
                        </>
                    )}

                    {uploading && (
                        <>
                            <div className="w-full bg-gray-200 rounded h-3 mb-1 mt-2">
                                <div
                                    className="bg-green-500 h-3 rounded transition-all duration-300"
                                    style={{width: `${progress}%`}}
                                />
                            </div>
                            <p className="text-xs text-gray-600 mb-1">در حال آپلود... {progress}%</p>
                            <button
                                onClick={cancelUpload}
                                className="text-red-600 text-sm hover:underline"
                            >
                                کنسل
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default HomeWork;
