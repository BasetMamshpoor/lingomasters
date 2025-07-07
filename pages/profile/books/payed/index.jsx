import React, {useState} from 'react';
import Card from "/features/profile/Books/Card.jsx";
import Books from "@icons/books.svg";
import Chevron from "@icons/arrow-down.svg";
import {Spinner} from "@heroui/react";
import useGetRequest from "@/hooks/useGetRequest";
import SuggestionStoreBooks from "@/features/profile/Books/SuggestionStoreBooks";
import PaginationApp from "@/components/Pagination";

const Index = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [data, , , pagination, , isLoading] = useGetRequest(true, '/student/book', currentPage)
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    };

    return (
        <>
            <div dir="rtl" className="container flex flex-col gap-16 md:gap-20">
                <div className="flex flex-col gap-6">
                    <p className="hidden lg:flex font-bold">لیست کتاب‌های خریداری شده</p>
                    <div className="md:hidden flex items-center gap-2">
                        <Books className="fill-primary-700"/>
                        <p className="text-sm font-bold text-primary-700">کتابخانه</p>
                    </div>
                    <div className="flex flex-col gap-10 md:gap-8 lg:gap-10">
                        {isLoading ?
                            <div className="centerOfParent w-full"><Spinner color="success"/></div>
                            : data?.length ?
                                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 md:gap-5 lg:gap-6">
                                    {(showAll ? data : data.slice(0, 6)).map(book => <Card {...book} key={book.id}/>)}
                                </div> : <p>موردی برای نمایش وجود ندارد</p>}
                        {!showAll ? (data?.length > 6 && (
                                <div className="centerOfParent">
                                    <button
                                        className="centerOfParent gap-2 w-fit"
                                        onClick={handleShowAll}
                                    >
                                        <p className="text-primary-500 text-xs md:text-base">
                                            مشاهده همه
                                        </p>
                                        <Chevron className="h-5 w-5 fill-primary-600"/>
                                    </button>
                                </div>
                            )) :
                            <div className="centerOfParent">
                                <PaginationApp total={pagination?.total} per_page={pagination?.per_page}
                                               currentPage={currentPage} onChange={setCurrentPage}/>
                            </div>
                        }
                    </div>
                </div>
                <SuggestionStoreBooks/>
            </div>
        </>
    );
};

export default Index;