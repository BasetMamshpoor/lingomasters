import {Tabs, Tab, Alert, Spinner} from "@heroui/react";
import DiscountCard from "@/features/profile/DiscountCard";
import useGetRequest from "@/hooks/useGetRequest";
import React, {useState} from "react";
import PaginationApp from "@/components/Pagination";

export default function App() {
    const [currentPage, setCurrentPage] = useState(1)
    const [selected, setSelected] = useState('all')
    const [data, , , pagination, , isLoading] = useGetRequest(true, `/student/discount?type=${selected}`,currentPage)
    return (
        <div className="flex w-full flex-col gap-6">
            <Tabs
                aria-label="Options"
                fullWidth
                classNames={{
                    tabList: "justify-between w-full relative rounded-none p-0 border-b border-natural_gray-200",
                    cursor: "w-full bg-[#F3B944]",
                    tab: " px-0 h-12 w-full ",
                    tabContent: "group-data-[selected=true]:text-[#F3B944]",
                }}
                color="primary"
                selectedKey={selected}
                onSelectionChange={setSelected}
                variant="underlined"
            >
                <Tab
                    key="all"
                    title="همه"
                />
                <Tab
                    key="classes"
                    title="کلاس ها"
                />
                <Tab
                    key="products"
                    title="کتاب ها"
                />
                <Tab
                    key="exams"
                    title="آزمون ها"
                />
            </Tabs>
            {
                isLoading ?
                    <div className="centerOfParent w-full mt-10"><Spinner color='success' label="درحال بارگزاری"/>
                    </div> :
                    data.length ? <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.map(item => (
                            <DiscountCard key={item.id} {...item}/>
                        ))}
                    </div> : <Alert description="کد تخفیفی وجود ندارد"/>
            }
            {pagination && <div className="flex items-center justify-center">
                <PaginationApp total={pagination.total} per_page={pagination.per_page}
                               onChange={setCurrentPage}/>
            </div>}
        </div>
    );
}
