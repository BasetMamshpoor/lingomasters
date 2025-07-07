import React from 'react';
import Link from "next/link";
import ChevronLeft from "@icons/arrow-left.svg";
import useGetRequest from "@/hooks/useGetRequest";
import {Spinner} from "@heroui/react";
import Card from "@/features/profile/Books/Card";

const SuggestionStoreBooks = () => {
    const [data, , , , , isLoading] = useGetRequest(true, '/student/book/suggestedBooks')

    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between w-full">
                    <p className="lg:text-base font-bold">خرید کتاب‌های بیشتر</p>
                    <Link href="https://store.lingomasters.ir" className="flex items-center gap-2">
                        <p className="text-primary-500 text-xs md:text-base">مشاهده همه کتاب‌ها</p>
                        <ChevronLeft className="h-5 w-5 fill-primary-600"/>
                    </Link>
                </div>
                {isLoading ?
                    <div className="centerOfParent w-full"><Spinner color="success"/></div>
                    : data?.length ?
                        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 md:gap-5 lg:gap-6">
                            {data?.map(book => <Card isSuggestion {...book} link='/library' key={book.id}/>)}
                        </div> : <p>موردی برای نمایش وجود ندارد</p>}
            </div>
        </>
    );
};

export default SuggestionStoreBooks;