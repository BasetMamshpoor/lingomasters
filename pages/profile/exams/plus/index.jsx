import React from 'react';
import {Tab, Tabs} from "@heroui/react";
import Exam from "features/profile/Exams/Exam"
import Link from "next/link";
import Chevron from "@icons/chevron-right.svg"
import Card from "features/profile/Exams/Card"

const Index = () => {
    return (
        <>
            <div dir="rtl" className="container flex flex-col gap-20">
                <div className="flex flex-col gap-6 ">
                    <p className="text-base font-bold text-primary-950">لیست آزمون پلاس‌ها</p>
                    <Tabs
                        aria-label="Options"
                        classNames={{
                            tabList: "gap-6 w-full border-b relative rounded-none p-0",
                            cursor: "w-full bg-secondary-400",
                            tab: "w-full px-2 h-12 ",
                            tabContent: "group-data-[selected=true]:text-secondary-400 ",
                        }}
                        variant="underlined"
                    >
                        <Tab
                            key="1"
                            title={
                                <span>رزرو شده</span>
                            }
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                                <Exam/>
                            </div>
                        </Tab>
                        <Tab
                            key="2"
                            title={
                                <span>خاتمه یافته</span>
                            }
                        >
                        </Tab>
                    </Tabs>
                </div>
                <div className="flex flex-col gap-6 ">
                    <div className="flex items-center justify-between w-full">
                        <p className="text-sm md:text-base font-bold text-primary-950 whitespace-nowrap">آزمون پلاس‌های بیشتر</p>
                        <Link href="/exams" className="flex items-center gap-2">
                            <p className="text-sm md:text-base text-primary-600 whitespace-nowrap">مشاهده همه آزمون‌ها</p>
                            <Chevron className="fill-primary-600 rotate-180 w-5 h-5"/>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
                        <Card/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;