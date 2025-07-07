import React from 'react';
import Book from '/features/profile/Books/Book';
import Chevron from "@icons/arrow-down.svg"
import Books from "@icons/books.svg"
import useGetRequest from "@/hooks/useGetRequest";
import {Spinner} from "@heroui/react";
import SuggestionBooks from "@/features/profile/Books/SuggestionBooks";

const Index = () => {
    const [data, , , , , isLoading] = useGetRequest(true, '/student/book/index_dow')
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
                <SuggestionBooks/>
            </div>
        </>
    );
};

export default Index;