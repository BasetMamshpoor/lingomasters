import React, {useState} from 'react';
import {Alert, Spinner, Tab, Tabs} from "@heroui/react";
import PaginationApp from "@/components/Pagination";
import Link from "next/link";
import Left from "@icons/arrow-left.svg";
import useGetRequest from "@/hooks/useGetRequest";
import WebinarCard from "@/features/profile/classes/WebinarCard";
import WorkshopItem from "@/features/workshop/List/WorkshopItem";

const Index = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [selected, setSelected] = useState("reserved");
    const [data, , , pagination, , isLoading] = useGetRequest(true, `/student/workshop?type=${selected}`, currentPage);
    const [data2, , , , , isLoading2] = useGetRequest(true, `/student/workshop/suggestion`);
    return (
        <div className="flex flex-col gap-8">
            <Tabs
                variant="underlined"
                fullWidth
                classNames={{
                    tabList: 'grow gap-0 items-center justify-center',
                    tab: ' h-16 border-b w-full',
                    cursor: "w-full bg-warning",
                    tabContent: "sm:text-sm text-xs group-data-[selected=true]:text-warning"
                }}
                selectedKey={selected}
                onSelectionChange={setSelected}
                aria-label="Options">
                <Tab key="reserved" title="رزرو شده"/>
                <Tab key="confirmed" title="خاتمه یافته"/>
                <Tab key="canceled" title="حذف شده"/>
            </Tabs>
            <div className="flex flex-col gap-6">
                {isLoading ?
                    <div className=" w-full centerOfParent"><Spinner color='success'/></div>
                    : data.length ?
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-5 gap-4">
                            {data.map(e => <WebinarCard isWorkShop={true} link={'workshop'} selected={selected} key={e.id} {...e}  />)}
                        </div> : <Alert description="کلاسی وجود ندارد" color="warning"/>}
                {pagination && <div className="flex items-center justify-center">
                    <PaginationApp total={pagination.total} per_page={pagination.per_page}
                                   onChange={setCurrentPage}/>
                </div>}
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6 justify-between">
                    <p className="text-primary-950 font-bold">ورکشاپ های بیشتر</p>
                    <Link href='/workshop'
                          className="flex items-center gap-3 text-sm text-primary-600">
                        مشاهده همه ورکشاپ ها
                        <Left className="fill-primary-600"/>
                    </Link>
                </div>
                {isLoading2 ?
                    <div className=" w-full centerOfParent"><Spinner color='success'/></div>
                    : data2.length ?
                        <div
                            className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-5 gap-4">
                            {data2.map(e => <WorkshopItem key={e.id} r={e}/>)}
                        </div> : <Alert description="کلاسی وجود ندارد" color="warning"/>}
            </div>
        </div>
    );
};

export default Index;