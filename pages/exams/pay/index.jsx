import React from 'react';
import {BreadcrumbItem, Breadcrumbs, Select, SelectItem, Spinner} from "@heroui/react";
import Book from "@icons/book2.svg";
import Verify from "@icons/verified.svg";
import Link from "next/link";
import useGetRequest from "@/hooks/useGetRequest";
import Image from "next/image";

const Pay = () => {
    const [data, , , , , isLoading] = useGetRequest(false, '/exam-payments')
    return (
        <div className="container my-10 space-y-6" dir="rtl">
            <Breadcrumbs
                separator='/'
                classNames={{
                    base: 'w-full lg:flex hidden',
                    list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600 text-xs'
                }}
                itemClasses={{
                    separator: "px-2 text-natural_gray-600"
                }}>
                <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                <BreadcrumbItem>آزمون ها</BreadcrumbItem>
                <BreadcrumbItem>آزمون پرداخت</BreadcrumbItem>
            </Breadcrumbs>
            <div className="centerOfParent gap-4">
                <Book className="w-10 h-10 fill-primary-700"/>
                <h1 className="text-2xl">آزمون پرداخت</h1>
            </div>
            <div
                className="p-10 bg-gradient-to-t from-[#E9EEF9] to-[#F5F9FE] rounded-2xl flex flex-col gap-12 items-center">
                <div className="flex flex-col gap-6">
                    <p className="text-lg">در این بخش شما می توانید برای پرداخت آزمون هایی که با ارز خارجی هستند ، در
                        این قسمت پرداخت کرده و اطلاعات خود را وارد کنید سپس ما برای شما این آزمون را پرداخت کرده و شما
                        را ثبت نام می کنیم.</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <Verify className='fill-success-700'/>
                            <p className="text-natural_gray-950">در این بخش نیازی نیست که شما درگیر روند ثبت نام آزمون
                                ها شوید و فقط با پرداخت به ما ، ما این روند را برای شما طی می کنیم.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Verify className='fill-success-700'/>
                            <p className="text-natural_gray-950">اینجا پرداخت به صورت کاملا امن بوده و اگر مشکلی در روند
                                ثبت نام پیش بیاید ما پول را به شما برمیگردانیم.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Verify className='fill-success-700'/>
                            <p className="text-natural_gray-950">اطلاعات آزمون و نحوه ثبت نام در پنل کاربری شما اطلاع
                                رسانی خواهد شد.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 py-10 px-6 rounded-2xl bg-white border border-natural_gray-200">
                <p className="font-bold text-lg">آزمون مورد نظر خود را انتخاب کنید.</p>
                {isLoading ?
                    <div className="centerOfParent w-full"><Spinner color="success" label="در حال بارگزاری"/></div>
                    : <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-5 gap-4">
                        {data?.map(e => (
                            <div className="relative w-full max-h-[195px]" key={e.id}>
                                <Image alt={e.name} src={e.image || "/images/exam4.png"} width={100} height={100}
                                       className="w-full h-full object-cover rounded-xl"/>
                                <div
                                    className="absolute -bottom-4 left-2 right-2 flex items-center gap-4 p-2 bg-white rounded-lg">
                                    <Link href={`/exams/pay/${e.id}`}
                                          className="centerOfParent w-full border border-primary-600 bg-primary-600 text-white rounded py-1 text-sm effect-2">
                                           رزرو آزمون {e.name}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>}
            </div>
        </div>
    );
};

export default Pay;