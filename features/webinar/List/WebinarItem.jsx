import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Like from "@/components/Like";

const WebinarItem = ({r}) => {
    return (
        <>
            <div
                className="w-full py-8 px-6 bg-white rounded-xl border border-natural_gray-100 grid grid-cols-1 md:grid-cols-12 items-stretch md:gap-6 gap-4">
                <div className="flex flex-col md:col-span-7 w-full gap-6">
                    <div className="flex flex-col gap-6 justify-between">
                        {/* head */}
                        <div className="flex items-start gap-3 justify-between">
                            <div className="flex flex-col justify-between gap-1">
                                <h6 className="sm:text-lg">{r.title}</h6>
                                <div
                                    className="centerOfParent w-5 h-5">
                                    <Image src={r.flag} width={24} height={24} sizes="100vw" alt={r.language}
                                           className="w-full h-full object-contain"/>
                                </div>
                            </div>
                            <Like id={r.id} isLike={r.is_like} url='/webinar-reserve'/>
                        </div>
                        <div className="gap-8 h-full w-full flex flex-col items-center">
                            <div
                                className="grid gap-4 grid-cols-2 [&>div]:h-8 w-full [&>div]:rounded-md [&>div]:bg-primary-50 [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:gap-1 text-xs [&>div>span]:whitespace-nowrap">
                                <div className='col-span-1'>
                                    <span className="text-natural_gray-700">استاد</span>
                                    <span>{r.professor}</span>
                                </div>
                                <div className='col-span-1'>
                                    <span className="text-natural_gray-700">موضوع</span>
                                    <span>{r.title}</span>
                                </div>
                                <div className='col-span-1'>
                                    <span className="text-natural_gray-700">تاریخ</span>
                                    <span>{new Date(r.date)?.toLocaleString('fa-IR', {
                                        month: 'long',
                                        day: '2-digit'
                                    })}</span>
                                </div>
                                <div className='col-span-1'>
                                    <span className="text-natural_gray-700">ساعت</span>
                                    <span>{r.time}</span>
                                </div>
                                <div className='col-span-1'>
                                    <span className="text-natural_gray-700">ظرفیت</span>
                                    <span>{r.max_capacity}</span>
                                </div>
                                <div className='col-span-1'>
                                    <span className="text-natural_gray-700">قیمت</span>
                                    <span className='hasToman '>{r.price_discount?.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href={`/webinar/${r.id}`}
                          className="w-full h-8 effect-2 bg-primary-600 text-white items-center flex justify-center rounded py-2">
                        {r.is_over ? 'مشاهده' : "ثبت نام"} وبینار
                    </Link>
                </div>
                <div
                    className={`flex flex-col md:col-span-5 col-span-1 md:gap-14 gap-4 md:order-1 -order-1`}>
                    <div className="centerOfParent overflow-hidden">
                        <Image src={r.image || '/images/webinar.png'} alt={r.title} width={100} height={100}
                               sizes='100vw'
                               className='w-full h-full object-cover'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WebinarItem;