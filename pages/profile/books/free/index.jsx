import React from 'react';
import Book from '/features/profile/Books/Book';
import Link from "next/link";
import Chevron from "@icons/arrow-down.svg"
import ChevronLeft from "@icons/arrow-left.svg"
import Books from "@icons/books.svg"
import useGetRequest from "@/hooks/useGetRequest";
import {Spinner} from "@heroui/react";

const Index = () => {
    const [data = [1, 2, 3, 4, 5, 6], , , , , isLoading] = useGetRequest(true, '/student/books')
    return (
        <>
            <div dir="rtl" className="container flex flex-col gap-16 md:gap-20">
                <div className="flex flex-col gap-6">
                    <p className="hidden lg:flex font-bold text-primary-950">لیست کتاب‌های رایگان </p>
                    <div className="lg:hidden flex items-center gap-2">
                        <Books className="fill-primary-700"/>
                        <p className="text-sm md:text-base font-bold text-primary-700">کتابخانه</p>
                    </div>
                    <div className="flex flex-col gap-10 md:gap-8 lg:gap-10">
                        {isLoading ?
                            <div className="centerOfParent w-full"><Spinner color="success"/></div>
                            : data?.length ?
                                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 md:gap-5 lg:gap-6">
                                    {data?.map(book => <Book {...book} key={book.id}/>)}
                                </div> : <p>موردی برای نمایش وجود ندارد</p>}
                        {data?.length > 6 && <div className="centerOfParent">
                            <button className="centerOfParent gap-2 w-fit">
                                <p className="text-primary-500 text-xs md:text-base ">مشاهده همه</p>
                                <Chevron className="h-5 w-5 fill-primary-600"/>
                            </button>
                        </div>}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between w-full">
                        <p className="lg:text-base font-bold text-primary-950">دانلود کتاب‌های بیشتر</p>
                        <Link href="/public" className="flex items-center gap-2">
                            <p className="text-primary-500 text-xs md:text-base">مشاهده همه کتاب‌ها</p>
                            <ChevronLeft className="h-5 w-5 fill-primary-600"/>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-6">
                        <Book/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;