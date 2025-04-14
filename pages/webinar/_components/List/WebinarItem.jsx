import React from 'react';
import Star from '@icons/magic-star.svg'
import Image from "next/image";
import Link from "next/link";
import Like from "@/components/Like";

const List = (r) => (
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
            <span>{new Date(r.data)?.toLocaleString('fa-IR', {month: 'long', day: '2-digit'})}</span>
        </div>
        <div className='col-span-1'>
            <span className="text-natural_gray-700">ساعت</span>
            <span>{r.time}</span>
        </div>
        <div className='col-span-1'>
            <span className="text-natural_gray-700">ظرفیت</span>
            <span>{r.max_capitalicy}</span>
        </div>
        <div className='col-span-1'>
            <span className="text-natural_gray-700">قیمت</span>
            <span className='hasToman '>{r.price?.toLocaleString()}</span>
        </div>
    </div>
)

const WebinarItem = ({r = {languages: [], genders: [], teaching_types: [], age_groups: [], language_levels: []}}) => {
    return (
        <>
            <div
                className="w-full py-8 px-6 bg-white rounded-xl border border-natural_gray-100 grid grid-cols-1 md:grid-cols-12 items-stretch md:gap-6 gap-4">
                <div className="flex flex-col md:col-span-7 w-full gap-6">
                    <div className="flex flex-col gap-6 justify-between">
                        {/* head */}
                        <div className="flex items-start gap-3 justify-between">
                            <div className="flex flex-col justify-between gap-1">
                                <h6 className="sm:text-lg">{r.name}</h6>
                                <div className="gap-1 flex items-center">
                                    <div className="centerOfParent"><Star className="w-4 h-4"/></div>
                                    <p className="text-xs text-natural_gray-900">{r.rate}</p>
                                    <span className="text-[10px] text-natural_gray-500">از {r.rate_count} نظر</span>
                                </div>
                                <div className="gap-2 flex items-center">
                                    {r.languages.length ? r.languages.map(l => <div key={l}
                                                                                    className="centerOfParent w-5 h-5">
                                        <Image src={l} width={0} height={0} sizes="100vw"
                                               className="w-full h-full object-contain"/></div>) : null}
                                </div>
                            </div>
                            <Like id={r.id} isLike={r.is_like} url='/private-reserve'/>
                        </div>
                        <div className="gap-8 h-full w-full flex flex-col items-center">
                            {List(r)}
                        </div>
                    </div>
                    <Link href={`/webinar/${r.id}`}
                          className="w-full h-8 effect-2 bg-primary-600 text-white items-center flex justify-center rounded py-2">
                        ثبت نام وبینار
                    </Link>
                </div>
                <div
                    className={`flex flex-col md:col-span-5 col-span-1 md:gap-14 gap-4 md:order-1 -order-1`}>
                    <div className="centerOfParent overflow-hidden">
                        <Image src={r.image} alt={r.title} width={100} height={100} sizes='100vw'
                               className='w-full h-full object-cover'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WebinarItem;