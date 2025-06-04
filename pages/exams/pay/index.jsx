import React from 'react';
import {BreadcrumbItem, Breadcrumbs, Select, SelectItem} from "@heroui/react";
import Book from "@icons/book2.svg";
import Verify from "@icons/verified.svg";
import Link from "next/link";

const Pay = () => {
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
                            <p className="text-natural_gray-950">در این بخش نیازی نیست که شما درگیر روند ثبت نام آزمون ها شوید و فقط با پرداخت به ما ، ما این روند را برای شما طی می کنیم.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Verify className='fill-success-700'/>
                            <p className="text-natural_gray-950">اینجا پرداخت به صورت کاملا امن بوده و اگر مشکلی در روند ثبت نام پیش بیاید ما پول را به شما برمیگردانیم.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Verify className='fill-success-700'/>
                            <p className="text-natural_gray-950">اطلاعات آزمون و نحوه ثبت نام در پنل کاربری شما اطلاع رسانی خواهد شد.</p>
                        </div>
                    </div>
                </div>
            </div>
            <form className="flex flex-col gap-10 py-10 px-6 rounded-2xl bg-white border border-natural_gray-200">
                <p  className="font-bold text-lg">برای پرداخت آزمون ها اطلاعات زیر را پر کنید.</p>
                <Select
                    isRequired
                    errorMessage={' '}
                    labelPlacement="outside"
                    className="w-full"
                    label="نوع آژمون"
                    // selectedKeys={[data.teaching_type]}
                    // onChange={e => setData(prev => ({
                    //     ...prev,
                    //     teaching_type: e.target.value
                    // }))}
                    placeholder='TOFEL'
                    name='country'
                    variant="bordered"
                    radius="sm"
                    classNames={{
                        label: 'text-xs font-semibold',
                        input: 'text-xs',
                        listbox: '[&>ul>li>span>svg]:w-3 [&>ul>li>span>svg]:h-3'
                    }}
                >
                    <SelectItem
                        key="1"
                        className="flex-row-reverse"
                        textValue="tofel">
                        <p className="flex items-center justify-end w-full">TOFEL</p>
                    </SelectItem>
                </Select>
                <div className="self-end">
                    <Link
                        href="/" className="bg-primary-600 rounded text-white py-2 px-6 text-sm">وارد کردن اطلاعات</Link>
                </div>
            </form>
        </div>
    );
};

export default Pay;