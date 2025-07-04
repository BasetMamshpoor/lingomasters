import React, {useState} from 'react';
import {Tab, Tabs} from "@heroui/react";
import TableExams from "features/profile/Exams/TableExams";
import {useRouter} from "next/router";
import useGetRequest from "@/hooks/useGetRequest";
import PaginationApp from "@/components/Pagination";
import TableExamsPlus from "features/profile/Exams/TableExamsPlus";

const TabExams = () => {
    const router = useRouter()
    const {id} = router.query
    const [currentPage, setCurrentPage] = useState(1)
    const [selected, setSelected] = useState('exam')
    const [data, , , pagination, , isLoading] = useGetRequest(true,`/student/exam/${id}?type=${selected}`, currentPage)
    return (
        <>
            <div className="flex flex-wrap gap-8 w-full">
                <Tabs
                    aria-label="Tabs variants"
                    variant='underlined'
                    selectedKey={selected}
                    onSelectionChange={e => {
                        setSelected(e);
                        setCurrentPage(1);
                    }}
                    fullWidth
                    classNames={{
                        tabList: 'border-b pb-0 gap-2 w-full',
                        cursor: "shadow-none w-full",
                        tabContent: 'w-full sm:text-sm text-xs',
                        tab: "py-4 h-fit ",
                        panel: "w-full"
                    }}
                    style={{
                        "--heroui-success": "38 87% 56%",
                    }}
                    color='success'>
                    <Tab key="exam" title="آزمون پلاس">
                        <TableExamsPlus id={id} data={data} isLoading={isLoading}/>
                    </Tab>
                    <Tab key="placement" title="آزمون تعیین سطح">
                        <TableExams id={id} data={data} isLoading={isLoading}/>
                    </Tab>
                </Tabs>
                {!isLoading && pagination &&
                    <div className="flex items-center justify-center">
                        <PaginationApp
                            total={pagination.total}
                            per_page={pagination.per_page}
                            onChange={setCurrentPage}/>
                    </div>}
            </div>
        </>
    );
};

export default TabExams;