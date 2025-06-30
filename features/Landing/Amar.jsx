import React from 'react';
import Private from "@icons/users.svg";
import People from "@icons/people.svg"
import Quiz from "@icons/Quiz.svg";
import Frame from "@icons/frame.svg";
import User from "@icons/user-tick.svg";
import Webinar from "@icons/Webinar2.svg";

const Amar = () => {
    return (
        <>
            <div
                className="grid grid-cols-2 lg:grid-cols-4 gap-y-7 gap-x-4 px-5 lg:pl-24 lg:pr-36 py-12 w-full  bg-[url('/images/Achievements.svg')]">
                <div className="flex items-center gap-4">
                    <User className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col gap-1 text-white">
                        <p className="font-bold text-base sm:text-lg md:text-2xl">4000+</p>
                        <p className="text-xs sm:text-sm lg:text-base">زبان‌آموزان فعال</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Frame className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col gap-1 text-white">
                        <p className="font-bold text-base sm:text-lg md:text-2xl">100+</p>
                        <p className="text-xs sm:text-sm lg:text-base">اساتید فعال</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Frame className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col gap-1 text-white">
                        <p className="font-bold text-base sm:text-lg md:text-2xl">200+</p>
                        <p className="text-xs sm:text-sm lg:text-base">فروشندگان فعال</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Quiz className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col gap-1 text-white">
                        <p className="font-bold text-base sm:text-lg md:text-2xl">4000+</p>
                        <p className="text-xs sm:text-sm lg:text-base">خرید آزمون</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Private className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col gap-1 text-white">
                        <p className="font-bold text-base sm:text-lg md:text-2xl">12000+</p>
                        <p className="text-xs sm:text-sm lg:text-base">رزرو کلاس های خصوصی</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <People className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col gap-1 text-white">
                        <p className="font-bold text-base sm:text-lg md:text-2xl">9000+</p>
                        <p className="text-xs sm:text-sm lg:text-base">رزرو کلاس های گروهی</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Webinar className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col gap-1 text-white">
                        <p className="font-bold text-base sm:text-lg md:text-2xl">5000+</p>
                        <p className="text-xs sm:text-sm lg:text-base">خرید وبینار</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Private className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col gap-1 text-white">
                        <p className="font-bold text-base sm:text-lg md:text-2xl">4000+</p>
                        <p className="text-xs sm:text-sm lg:text-base">خرید ورکشاپ</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Amar;