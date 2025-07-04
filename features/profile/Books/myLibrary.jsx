import React from 'react';
import Cards from "./Card.jsx";
import Books from "@icons/books.svg";
import Chevron from "@icons/arrow-down.svg";
import Link from "next/link";
import Chevron_right from "@icons/chevron-right.svg";
import Chevron_left from "@icons/arrow-left.svg"
import Details from "./MyLibraryDetails"
const MyLibrary = () => {
    return (
        <>
            <div dir="rtl" className="container flex flex-col gap-16 md:gap-20">
                <div className="flex flex-col gap-6">
                    <p className="hidden lg:flex font-bold">لیست کتاب‌های خریداری شده</p>
                    <Link href="/" className="hidden md:flex lg:hidden items-center gap-2">
                        <Chevron_right className="h-5 w-5 fill-primary-600"/>
                        <p className="text-primary-500 text-base">کتابخانه ( کتاب‌های خریداری شده )</p>
                    </Link>
                    <div className="md:hidden flex items-center gap-2">
                        <Books className="fill-primary-700"/>
                        <p className="text-sm font-bold text-primary-700">کتابخانه (کتاب‌های رایگان)</p>
                    </div>
                    <div className="flex flex-col gap-10 md:gap-8 lg:gap-10">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                            <Cards/>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="flex items-center justify-center gap-2 w-fit">
                                <p className="text-primary-500 text-xs md:text-base ">مشاهده همه</p>
                                <Chevron className="h-5 w-5 fill-primary-600"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between w-full">
                        <p className="lg:text-base font-bold">خرید کتاب‌های بیشتر</p>
                        <Link href="/" className="flex items-center gap-2">
                            <p className="text-primary-500 text-xs md:text-base">مشاهده همه کتاب‌ها</p>
                            <Chevron_left className="h-5 w-5 fill-primary-600"/>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                        <Cards/>
                    </div>
                </div>
                <Details/>
            </div>
        </>
    );
};

export default MyLibrary;