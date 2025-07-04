import React from 'react';
import Book from './Book';
import Link from "next/link";
import Chevron from "@icons/arrow-down.svg"
import Chevron_left from "@icons/arrow-left.svg"
import Details from "./FreeBookDetails";
import Books from "@icons/books.svg"

const FreeBooks = () => {
    return (
        <>
            <div dir="rtl" className="container flex flex-col gap-16 md:gap-20">
                <div className="flex flex-col gap-6">
                    <p className="hidden lg:flex font-bold">لیست کتاب‌های رایگان </p>
                    <div className="lg:hidden flex items-center gap-2">
                        <Books className="fill-primary-700"/>
                        <p className="text-sm md:text-base font-bold text-primary-700">کتابخانه (کتاب‌های رایگان)</p>
                    </div>
                    <div className="flex flex-col gap-10 md:gap-8 lg:gap-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-6">
                            <Book/>
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
                        <p className="lg:text-base font-bold">دانلود کتاب‌های بیشتر</p>
                        <Link href="/" className="flex items-center gap-2">
                            <p className="text-primary-500 text-xs md:text-base">مشاهده همه کتاب‌ها</p>
                            <Chevron_left className="h-5 w-5 fill-primary-600"/>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-6">
                        <Book/>
                    </div>
                </div>
                <Details/>
            </div>
        </>
    );
};

export default FreeBooks;