import React from 'react';
import Question from "@icons/question-circle.svg";
import Image from "next/image";

const GeneralQuestions = () => {
    return (
        <>
            <div className="flex flex-col gap-20">
                <div className="flex items-center justify-center gap-1 md:gap-3">
                    <Question className="w-6 h-6 sm:w-10 sm:h-10"/>
                    <p className="text-md sm:text-lg md:text-3xl">چرا لینگومسترز بهترین گزینه ممکن برای یادگیری انواع زبان هاست؟</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-20 px-4">
                    <div className="relative flex justify-center h-56">
                        <div
                            className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0">
                        </div>
                        <div
                            className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full w-full shadow-lg z-10">
                            <Image src="/images/teacher-Home-page.png" width={60} height={60} alt=""
                                   className="absolute -top-7 left-1/2 -translate-x-1/2 z-20 "/>
                            <div
                                className="flex flex-col items-center gap-10 h-full pt-14 pb-8 px-4 text-center">
                                <p className="text-sm sm:text-base lg:text-lg">جامع ترین وبسایت اساتید زبان های
                                    خارجی</p>
                                <p className="text-xs sm:text-sm lg:text-base">شما می تونید استادتون رو از بین کلی
                                    استاد مجرب انتخاب کنید</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center h-56">
                        <div
                            className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0">
                        </div>
                        <div
                            className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full w-full shadow-lg z-10">
                            <Image src="/images/cheque_Home-page.png" width={60} height={60} alt=""
                                   className="absolute -top-7 left-1/2 -translate-x-1/2 z-20"/>
                            <div
                                className="flex flex-col items-center gap-10 h-full pt-14 pb-8 px-4 text-center">
                                <p className="text-sm sm:text-base lg:text-lg">برنامه ریزی انعطاف پذیر</p>
                                <p className="text-xs sm:text-sm lg:text-base">کلاس هاتون رو طبق برنامه خاص خودتون
                                    رزرو میکنید</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center h-56">
                        <div
                            className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0">
                        </div>
                        <div
                            className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full w-full shadow-lg z-10">
                            <Image src="/images/learning_Home-page.png" width={60} height={60} alt=""
                                   className="absolute -top-7 left-1/2 -translate-x-1/2 z-20"/>
                            <div
                                className="flex flex-col items-center gap-10 h-full pt-14 pb-8 px-4 text-center">
                                <p className="text-sm sm:text-base lg:text-lg">دروس اختصاصی سفارشی شده توسط شما</p>
                                <p className="text-xs sm:text-sm lg:text-base">شما می تونید مطالب درسی رو براساس
                                    نیاز و علاقه تون انتخاب کنید</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center h-56">
                        <div
                            className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0">
                        </div>
                        <div
                            className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full w-full shadow-lg z-10">
                            <Image src="/images/money-Home-page.png" width={60} height={60} alt=""
                                   className="absolute -top-7 left-1/2 -translate-x-1/2 z-20"/>
                            <div
                                className="flex flex-col items-center gap-10 h-full pt-14 pb-8 px-4 text-center">
                                <p className="text-sm sm:text-base lg:text-lg">پرداخت تدریجی و درس به درس</p>
                                <p className="text-xs sm:text-sm lg:text-base">شما می تونید فقط وقتی که به کلاس نیاز
                                    دارید رزرو کنید</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center h-56">
                        <div
                            className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0">
                        </div>
                        <div
                            className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full w-full shadow-lg z-10">
                            <Image src="/images/calendar-Home-page.png" width={60} height={60} alt=""
                                   className="absolute -top-7 left-1/2 -translate-x-1/2 z-20"/>
                            <div
                                className="flex flex-col items-center gap-10 h-full pt-14 pb-8 px-4 text-center">
                                <p className="text-sm sm:text-base lg:text-lg">امکان لغو و رزرو مجدد</p>
                                <p className="text-xs sm:text-sm lg:text-base">تا 24 ساعت قبل از شروع کلاس خودتون رو لغو و یا مجددا بدون کسر هزینه رزرو کنید</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center h-56">
                        <div
                            className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0">
                        </div>
                        <div
                            className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full w-full shadow-lg z-10">
                            <Image src="/images/transfer-Home-page.png" width={60} height={60} alt=""
                                   className="absolute -top-7 left-1/2 -translate-x-1/2 z-20"/>
                            <div
                                className="flex flex-col items-center gap-10 h-full pt-14 pb-8 px-4 text-center">
                                <p className="text-sm sm:text-base lg:text-lg">امکان ارسال پیام به استاد قبل از
                                    کلاس</p>
                                <p className="text-xs sm:text-sm lg:text-base">شما می توانید خواسته هاتون رو قبل
                                    کلاس به استادتون با ارسال پیام اطلاع بدید.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GeneralQuestions;