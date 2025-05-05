import React from "react";
import useGetRequest from "@/hooks/useGetRequest";
import PaginationApp from "@/components/Pagination";
import WebinarItem from "./WebinarItem";
import {Skeleton} from "@heroui/react";
import {useRouter} from "next/router";

function Webinars({currentPage, setCurrentPage}) {
    const router = useRouter()

    const [data, setData, setReload, pagination] = useGetRequest(false, `/webinar-reserve`, currentPage, router.query)

    return (
        <>
            <div className="w-full flex flex-col gap-4">
                {data
                    ? <>
                        {!!data.length
                            ?
                            data.map(r => <WebinarItem r={r} key={r.id}/>)
                            : <p className='w-full'>وبیناری پیدا نشد لطفا فیلتر ها را تغییر دهید</p>}
                        <div className="centerOfParent">
                            <PaginationApp total={pagination.total} per_page={pagination.per_page}
                                           currentPage={currentPage} onChange={setCurrentPage}/>
                        </div>
                    </>
                    : <div className="flex flex-col gap-6">
                        {[...Array(3)].map((_, i) => {
                            return <div key={i} dir='ltr'
                                        className={`relative select-none overflow-hidden flex flex-col items-stretch sm:gap-3 gap-4 w-full h-fit flex-shrink-0 rounded-lg md:p-6 p-4 bg-white`}>
                                <Skeleton
                                    className=" w-full sm:h-[250px] h-[200px] flex-shrink-0 rounded-lg mix-blend-darken"/>
                            </div>
                        })}
                    </div>}
            </div>
        </>
    );
}

export default Webinars;
