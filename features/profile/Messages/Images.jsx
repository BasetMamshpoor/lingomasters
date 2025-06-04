import React, {useState} from 'react';
import {Image, Spinner} from "@heroui/react";
import NextImage from "next/image";

const Images = ({data = [], isLoading}) => {
    // State برای پیگیری وضعیت دانلود هر تصویر
    const [downloaded, setDownloaded] = useState(new Array(data.length).fill(false));

    // تابع برای مدیریت کلیک دکمه دانلود
    const handleDownload = (index) => {
        setDownloaded((prev) => {
            const newDownloaded = [...prev];
            newDownloaded[index] = true;
            return newDownloaded;
        });
    };

    return (
        <>  {isLoading ?
            <div className="centerOfParent w-ful h-[30vh]"><Spinner variant='dots' color='success' size="lg"/>
            </div> :
            <div className="grid lg:grid-cols-4 grid-cols-3 gap-2">
                {data.length ? (
                    data.map((item, index) => (
                        <div key={item.id} className="relative">
                            {downloaded[index] ? (
                                <Image
                                    onClick={() => window.open(item.path, '_blank')}
                                    as={NextImage}
                                    alt="HeroUI hero Image"
                                    src={item.path}
                                    width={0}
                                    height={0}
                                    radius="none"
                                    loading="lazy" // غیرفعال کردن بارگذاری خودکار
                                    classNames={{
                                        img: "w-full lg:h-[151px] h-[110px] object-cover cursor-pointer",
                                        wrapper: '!max-w-full'
                                    }}
                                />
                            ) : (
                                <button
                                    onClick={() => handleDownload(index)}
                                    className="w-full lg:h-[151px] h-[110px] bg-gray-200 flex flex-col items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors"
                                >
                                    <span className="text-sm"> دانلود تصویر</span>
                                    <span className="text-xs" dir='ltr'>{item.file_size}</span>
                                </button>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-center text-sm lg:col-span-4 col-span-3">هیچ عکسی وجود ندارد</p>
                )}
            </div>}

        </>
    );
};

export default Images;