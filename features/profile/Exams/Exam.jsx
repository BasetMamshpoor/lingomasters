import React from 'react';
import Link from 'next/link';
import USA from "@icons/Flags/Country=United States of America, Style=Flag, Radius=On.svg"
import Global from "@icons/clock.svg";
import Clock from "@icons/clock.svg";
import Image from "next/image";
const Exam = () => {
    return (
        <>
            <div dir="rtl"
                 className="relative flex flex-col justify-between p-3 gap-3 border border-gray-100 rounded-lg max-w-[338px] overflow-hidden">
                <div className="w-full flex mt-0 justify-center max-h-36  rounded-lg overflow-hidden">
                    <Image src="/images/webinar.png" alt="swiper" width={140} height={140}
                           className="w-full"/>
                </div>
                <div className="flex flex-col gap-6 md:gap-10">
                    <div className="flex flex-col items-center gap-2 md:gap-3 w-full">
                        <p className="text-base md:text-lg font-bold">طلسم مکالمه</p>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-1">
                                <USA className="w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-xs">زبان</p>
                            </div>
                            <p className="text-xs md:text-sm font-semibold">انگلیسی</p>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-1">
                                <Global className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-xs">نوع آزمون</p>
                            </div>
                            <p className="text-xs md:text-sm font-semibold">خارج ایران</p>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-1">
                                <Clock className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-xs">مدت زمان باقی مانده</p>
                            </div>
                            <p className="text-xs md:text-sm font-semibold">۲ ماه</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/profile/exams/plus/1"
                              className="flex items-center justify-center text-xs md:text-base w-full py-3 border-1.5 border-secondary-500 rounded-md text-secondary-500">
                            جزئیات
                        </Link>
                        <Link href="/"
                              className="flex items-center justify-center text-xs md:text-base w-full py-3 bg-primary-600 text-white rounded-md">شروع آزمون
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Exam;