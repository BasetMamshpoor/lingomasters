import React from "react";
import useGetRequest from "@/hooks/useGetRequest";
import PaginationApp from "@/components/Pagination";
import ProfessorItem from "./Professoritem";

function Professor({ currentPage, setCurrentPage }) {
    const [data, setData, setReload, pagination] = useGetRequest(`/professor`)

    return (
        <>
            <div className="w-full flex flex-col gap-4">
                {data
                    ? <>
                        {!!data.length
                            ?
                            data.map(r => <ProfessorItem r={r} key={r.id} />)
                            : <p className='w-full'>استادی پیدا نشد لطفا فیلتر ها را تغییر دهید</p>}
                        <div className="centerOfParent">
                            <PaginationApp total={pagination.total} per_page={pagination.per_page} currentPage={currentPage} onChange={(e) => setCurrentPage(e)} />
                        </div>
                    </>
                    : ''}
            </div>
        </>
    );
}

export default Professor;
