import React from 'react';
import Image from "next/image";
import Map from "@icons/map-marker.svg";
import Global from "@icons/calendar.svg";
import Clock from "@icons/clock.svg";
import Link from "next/link";

const ExamPay = () => {
    return (
        <>
            <div dir="rtl"
                 className="relative flex flex-col justify-between p-3 gap-3 border border-gray-100 rounded-lg max-w-[338px] overflow-hidden">
                <div className="w-full flex mt-0 justify-center max-h-36  rounded-lg overflow-hidden">
                    <Image src="/images/webinar.png" alt="swiper" width={140} height={140}
                           className="w-full"/>
                </div>
                <div className="flex flex-col gap-6 md:gap-10">
                    <div className="flex flex-col items-center gap-2 md:gap-3 w-full">
                        <p className="text-base md:text-lg font-bold">آزمون TOFEL</p>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-1">
                                <Map className="w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-xs">محل برگزاری آزمون</p>
                            </div>
                            <p className="text-xs md:text-sm font-medium">احسان علیزاده</p>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-1">
                                <Global className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-xs">تاریخ آزمون</p>
                            </div>
                            <p className="text-xs md:text-sm font-medium">{new Date().toLocaleString(`fa-IR`, {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            })}</p>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-1">
                                <Clock className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-xs">ساعت</p>
                            </div>
                            <p className="text-xs md:text-sm font-medium">11:30 - 12:00</p>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-1">
                                <Clock className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-xs">وضعیت</p>
                            </div>
                            <p className="text-xs md:text-sm font-medium">حضوری(تهران_منطقه 5)</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/"
                              className="flex items-center justify-center text-xs md:text-base w-full py-3 border-1.5 border-secondary-500 rounded-md text-secondary-500">
                            مشاهده جزئیات
                        </Link>
                        {/*<Link href="/"*/}
                        {/*      className="flex items-center justify-center text-xs md:text-base w-full py-3 bg-primary-600 text-white rounded-md">تکرار سفارش*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExamPay;