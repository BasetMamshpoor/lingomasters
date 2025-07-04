import React from 'react';
import {Tab, Tabs} from "@heroui/react";
import ExamPay from "features/profile/Exams/ExamPay"
import Link from "next/link";
import Chevron from "@icons/chevron-right.svg"
import Card from "features/profile/Exams/Card"

const Index = () => {
    return (
        <>
            <div dir="rtl" className="container flex flex-col gap-20">
                <div className="flex flex-col gap-6 ">
                    <p className="text-base font-bold text-primary-950">لیست آزمون پرداخت‌ها</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                        <ExamPay/>
                    </div>
                </div>
                <div className="flex flex-col gap-6 ">
                    <div className="flex items-center justify-between w-full">
                        <p className="text-sm md:text-base font-bold text-primary-950 whitespace-nowrap">آزمون پرداخت‌های بیشتر</p>
                        <Link href="/" className="flex items-center gap-2">
                            <p className="text-sm md:text-base text-primary-600 whitespace-nowrap">مشاهده همه
                                آزمون‌ها</p>
                            <Chevron className="fill-primary-600 rotate-180 w-5 h-5"/>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;