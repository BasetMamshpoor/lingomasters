import React from 'react';
import Private from "@icons/users.svg";
import Group from "@icons/book open.svg";
import Quiz from "@icons/Quiz.svg";
import User from "@icons/user-tick.svg";
import Webinar from "@icons/Webinar2.svg";

const Amar = () => {
    return (
        <>
            <div
                className="grid justify-between grid-cols-2 lg:grid-cols-4 gap-y-7 px-5 lg:px-24 py-12 w-full  bg-[url('/images/Achievements.svg')]">
                <div className="flex items-center gap-4">
                    <User className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col items-center justify-center gap-1 text-white">
                        <p className="font-bold text-base sm:text-lg md:text-2xl">1,926,436</p>
                        <p className="text-xs sm:text-sm md:text-base">زبان‌آموزان فعال</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Group className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col items-center justify-center gap-1 text-white">
                        <p dir="ltr" className="font-bold text-base sm:text-lg md:text-2xl">1,926,436</p>
                        <p className="text-xs sm:text-sm md:text-base">اساتید فعال</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Group className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col items-center justify-center gap-1 text-white">
                        <p dir="ltr" className="font-bold text-base sm:text-lg md:text-2xl">1,926,436</p>
                        <p className="text-xs sm:text-sm md:text-base">فروشندگان فعال</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Quiz className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col items-center justify-center gap-1 text-white">
                        <p className="font-bold text-base sm:text-lg md:text-2xl">+4000</p>
                        <p className="text-xs sm:text-sm md:text-base">خرید آزمون</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Private className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col items-center justify-center gap-1 text-white">
                        <p className="font-bold text-base sm:text-lg md:text-2xl">1,926,436</p>
                        <p className="text-xs sm:text-sm md:text-base">رزرو کلاس های خصوصی</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Group className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col items-center justify-center gap-1 text-white">
                        <p dir="ltr" className="font-bold text-base sm:text-lg md:text-2xl">+800</p>
                        <p className="text-xs sm:text-sm md:text-base">رزرو کلاس های گروهی</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Webinar className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col items-center justify-center gap-1 text-white">
                        <p className="font-bold text-base sm:text-lg md:text-2xl">46,328</p>
                        <p className="text-xs sm:text-sm md:text-base">خرید وبینار</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Quiz className="w-12 h-12 fill-primary-200"/>
                    <div className="flex flex-col items-center justify-center gap-1 text-white">
                        <p dir="ltr" className="font-bold text-base sm:text-lg md:text-2xl">46,328</p>
                        <p className="text-xs sm:text-sm md:text-base">خرید ورکشاپ</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Amar;