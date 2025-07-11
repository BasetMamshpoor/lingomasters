import React from "react";
import useGetRequest from "@/hooks/useGetRequest";
import PaginationApp from "@/components/Pagination";
import {useRouter} from "next/router";
import Book from "@/features/profile/Books/Book";

function BookItems({currentPage, setCurrentPage}) {
    const {query} = useRouter()
    const [data, setData, setReload, pagination] = useGetRequest(true, `/library`, currentPage, query);

    return (
        <>
            <div className="w-full flex flex-col gap-4">
                {data
                    ? <>
                        {!!data.length
                            ?
                            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full">
                                {data.map(r =>
                                    <Book link="/library" isSuggestion {...r} key={r.id}/>)}</div>
                            : <p className='w-full'>کتابی پیدا نشد لطفا فیلتر ها را تغییر دهید</p>}
                        <div className="centerOfParent">
                            <PaginationApp total={pagination.total} per_page={pagination.per_page}
                                           currentPage={currentPage} onChange={(e) => setCurrentPage(e)}/>
                        </div>
                    </>
                    : ''}
            </div>
        </>
    );
}

export default BookItems;
