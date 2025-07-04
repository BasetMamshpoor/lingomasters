import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Index = () => {
    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row  lg:justify-between">
                    <div className="hidden md:flex justify-end w-full">
                        <Link href="/"
                              className="flex items-center justify-center px-8 py-2 text-base rounded-md bg-primary-600 text-white ">شروع آزمون</Link>
                    </div>
                </div>
                <div
                    className="flex flex-col-reverse gap-6 lg:flex-row w-full p-6 border border-natural_gray-100 rounded-xl ">
                    <div className="flex flex-col gap-6 w-full lg:w-1/2">
                        <div className="flex items-center w-full">
                            <div className="flex items-center gap-1 w-1/2">
                                <p className="text-xs md:text-base text-natural_gray-900">نام آزمون</p>
                            </div>
                            <p className="text-xs md:text-base w-1/2">آزمون پلاس ارشد</p>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="flex items-center gap-1 w-1/2">
                                <p className="text-xs md:text-base text-natural_gray-900">کشور</p>
                            </div>
                            <p className="text-xs md:text-base w-1/2">داخل ایران</p>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="flex items-center gap-1 w-1/2">
                                <p className="text-xs md:text-base text-natural_gray-900">زبان</p>
                            </div>
                            <p className="text-xs md:text-base w-1/2">انگلیسی</p>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="flex items-center gap-1 w-1/2">
                                <p className="text-xs md:text-base text-natural_gray-900">مقطع</p>
                            </div>
                            <p className="text-xs md:text-base w-1/2">ارشد</p>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="flex items-center gap-1 w-1/2">
                                <p className="text-xs md:text-base text-natural_gray-900">نوع</p>
                            </div>
                            <p className="text-xs md:text-base w-1/2">عمومی</p>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="flex items-center gap-1 w-1/2">
                                <p className="text-xs md:text-base text-natural_gray-900">مدت زمان باقی‌مانده</p>
                            </div>
                            <p className="text-xs md:text-base w-1/2">2 ماه</p>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="flex items-center gap-1 w-1/2">
                                <p className="text-xs md:text-base text-natural_gray-900">مبلغ</p>
                            </div>
                            <p className="text-xs md:text-base w-1/2 hasToman">{(40000).toLocaleString()}</p>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="flex items-center gap-1 w-1/2">
                                <p className="text-sm md:text-base text-primary-950 font-semibold">اطلاعات خرید آزمون</p>
                            </div>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="flex items-center gap-1 w-1/2">
                                <p className="text-xs md:text-base text-natural_gray-900">تاریخ خرید</p>
                            </div>
                            <p className="text-xs md:text-base w-1/2">{new Date().toLocaleString(`fa-IR`, {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            })}</p>
                        </div>
                        <div className="flex items-center w-full">
                            <div className="flex items-center gap-1 w-1/2">
                                <p className="text-xs md:text-base text-natural_gray-900">ساعت خرید</p>
                            </div>
                            <p className="text-xs md:text-base w-1/2">11:30-12:00</p>
                        </div>
                    </div>
                    <div className="flex w-full lg:w-1/2 lg:justify-end justify-center">
                        <Image src="/Images/product.png" alt={"Book"} width={100} height={100}
                               className="lg:max-w-64 max-w-[50%] w-full h-fit object-cover"/>
                    </div>
                </div>
                <Link href="/"
                      className="md:hidden w-full flex items-center justify-center px-8 py-2 text-base rounded-md bg-primary-700 text-white ">شروع
                    آزمون</Link>
            </div>
        </>
    );
};

export default Index;