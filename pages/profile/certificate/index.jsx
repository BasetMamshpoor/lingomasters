import React, {useState} from 'react';
import {Spinner, Tab, Tabs} from "@heroui/react";
import File from "@icons/file-alt.svg"
import useGetRequest from "@/hooks/useGetRequest";
import PaginationApp from "@/components/Pagination";
import Link from "next/link";

const Index = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [selected, setSelected] = useState('webinar')
    const [data, , , pagination, , isLoading] = useGetRequest(true, `/student/certificate?type=${selected}`, currentPage);
    return (
        <div className="flex w-full flex-col gap-10">
            <Link className="bg-primary-600 text-white rounded py-2 px-4 self-end text-center text-sm"
                  href='/profile/certificate/new'>درخواست گواهینامه</Link>
            <Tabs
                aria-label="Options"
                fullWidth
                classNames={{
                    tabList: "justify-between w-full relative rounded-none p-0 border-b border-natural_gray-200",
                    cursor: "w-full bg-secondary-500",
                    tab: " px-0 h-12 w-full ",
                    tabContent: "group-data-[selected=true]:text-secondary-500",
                }}
                color="primary"
                selectedKey={selected}
                onSelectionChange={setSelected}
                variant="underlined"
            >
                <Tab
                    key="webinar"
                    title="وبینارها"
                />
                <Tab
                    key="workshop"
                    title="ورکشاپ‌ها"
                />
                <Tab
                    key="group"
                    title="کلاس‌های گروهی"
                />
                <Tab
                    key="private"
                    title="کلاس‌های خصوصی"
                />
            </Tabs>
            {isLoading ?
                <div className="w-full centerOfParent mt-6">
                    <Spinner color='success'/>
                </div> : !data.length ? <div className="flex flex-col items-center gap-4 md:gap-6">
                        <File className="w-16 h-16 md:w-24 md:h-24"/>
                        <p className="text-sm text-natural_gray-700">هیچ گواهینامه‌ای ثبت نشده است.</p>
                        <p className="text-xs lg:text-sm text-primary-800">
                            برای درخواست گواهینامه کلاس‌هایی که در آن شرکت کرده‌اید، لازم است از قسمت <span
                            className="md:font-bold">کلاس‌ها , کلاس‌های خاتمه یافته دکمه درخواست گواهینامه را بزنید.</span>
                        </p>
                    </div> :
                    <div className="flex flex-col gap-6">
                        {data.map(e => (
                            <div  key={e.id}
                                className="flex items-center justify-between border border-natural_gray-200 rounded-lg bg-white w-full px-6 py-3">
                                <div className="flex items-center flex-col md:flex-row gap-3">
                                    <p className="text-xs md:text-base font-bold text-natural_gray-950">گواهینامه ‌
                                         {e.model}‌
                                         {e.title} </p>
                                    <div
                                        className="flex items-center justify-center py-1 px-3 bg-primary-50 rounded-xl text-xs md:text-sm whitespace-nowrap">گواهینامه {e.delivery_type === 'online' ? "الکترونیکی" : "چاپی"}
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-3">
                                    {e.status !== 'approved' ? <div className="flex items-center gap-1">
                                            <p className="text-xs">گواهینامه:</p>
                                            <p className={`text-xs text-${e.status === 'pending' ? "secondary" : "rose"}-500`}>{e.status === 'pending' ? "درحال بررسی" : "رد شده"}</p>
                                        </div> :
                                        e.delivery_type === 'online' ?
                                            <a download href={e.file} target="_blank"
                                               className="px-4 md:px-6 py-2 text-white text-xs md:text-sm bg-primary-600 rounded-md cursor-pointer">مشاهده
                                                و دانلود
                                            </a>
                                            :

                                            <div className="flex items-center gap-1">
                                                <p className="text-xs">کد رهگیری:</p>
                                                <p className="text-xs ">{e.tracking_code}</p>
                                            </div>
                                    }
                                </div>

                            </div>
                        ))}
                    </div>}
            {pagination && <div className="flex items-center justify-center">
                <PaginationApp total={pagination.total} per_page={pagination.per_page}
                               onChange={setCurrentPage}/>
            </div>}
        </div>
    );
};

export default Index;