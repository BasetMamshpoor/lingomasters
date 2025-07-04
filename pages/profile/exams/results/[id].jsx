import React from 'react';
import Right from "@icons/chevron-right.svg";
import {useRouter} from "next/router";
import Download from "@icons/download.svg";
import {Button} from "@heroui/react";

const ExamScore = () => {
    const {back, query} = useRouter()
    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between md:flex-nowrap flex-wrap gap-4">
                    <div className=""></div>
                    <Button className="bg-primary-700 text-white" radius='sm' startContent={<Download className="fill-white"/>}>دانلود
                        کارنامه</Button>
                </div>
                <div
                    className="relative border rounded-xl border-natural_gray-200 w-full py-8 px-4 flex flex-col gap-5 sm:mb-0 mb-10">
                    <div className="grid grid-cols-3 items-center">
                        <p className="text-natural_gray-950 sm:text-base text-[10px]">
                            نام آژمون
                        </p>
                        <p className="sm:text-base text-xs col-span-2">
                            آزمون پلاس ارشد
                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <p className="text-natural_gray-950 sm:text-base text-[10px]">
                            کشور
                        </p>
                        <p className="sm:text-base text-xs col-span-2">
                            داخل ایران
                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <p className="text-natural_gray-950 sm:text-base text-[10px]">
                            حالت
                        </p>
                        <div
                            className={`${'data.student_status' === 'passed' ? 'bg-green-500' : 'bg-rose-600'} col-span-2 rounded-lg py-1 px-2.5 text-white font-semibold w-fit sm:text-sm text-xs`}>{'data.student_status' === 'passed' ? 'پاس شده' : 'رد شده'}</div>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <p className="text-natural_gray-950 sm:text-base text-[10px]">
                            تاریخ
                        </p>
                        <p className="sm:text-base text-xs col-span-2">

                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <p className="text-natural_gray-950 sm:text-base text-[10px]">
                            نمره
                        </p>
                        <p className="sm:text-base text-xs col-span-2">

                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <p className="text-natural_gray-950 sm:text-base text-[10px]">
                            زبان
                        </p>
                        <p className="sm:text-base text-xs col-span-2">

                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <p className="text-natural_gray-950 sm:text-base text-[10px]">
                            مقطع
                        </p>
                        <p className="sm:text-base text-xs col-span-2">

                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <p className="text-natural_gray-950 sm:text-base text-[10px]">
                            نوع
                        </p>
                        <p className="sm:text-base text-xs col-span-2">

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExamScore;