import Image from "next/image";
import React from "react";
import Link from "next/link";
import {addToast, BreadcrumbItem, Breadcrumbs} from "@heroui/react";

import Right from '@icons/chevron-right.svg'
import Clock from "@icons/clock.svg";
import Share from '@icons/share.svg'
import Offer from '@icons/division.svg'
import Like from "@/components/Like";
import Rate from "@/components/Rate";
import Timer from "@/components/Timer";

function Banner({data = {}, setReload}) {
    return (
        <>
            <div className="lg:hidden flex flex-col">
                <div className="py-3">
                    <Breadcrumbs
                        separator='/'
                        classNames={{list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600'}}
                        itemClasses={{
                            separator: "px-2 text-natural_gray-600"
                        }}>
                        <BreadcrumbItem
                            className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'
                            href="/">صفحه اصلی</BreadcrumbItem>
                        <BreadcrumbItem
                            className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'
                            href='/webinar'>وبینارها</BreadcrumbItem>
                        <BreadcrumbItem
                            className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'>{data.title}</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <div className="py-3 flex items-center gap-2 cursor-pointer">
                    <div className="centerOfParent"><Right className='fill-primary-700'/></div>
                    <span className='sm:text-base text-sm text-primary-700 font-semibold'>بازگشت</span>
                </div>
            </div>
            {data.discount_type === 3 && <div
                className="bg-red-200 text-rose-700 sm:text-sm text-xs flex items-center px-4 py-3.5 w-full mb-4 justify-between rounded">
                <div className="flex items-center gap-2">
                    {data.discount_count !== data.discount_all_count &&
                        <del className="text-rose-950">{data.discount_all_count}نفر اول </del>}
                    <p>{data.discount_count} نفر باقی‌مانده</p>
                </div>
                <div className="flex items-center">
                    <span>{data.discount} درصد تخفیف</span>
                    <Offer className="mr-3 fill-rose-700"/>
                </div>
            </div>}
            {data.discount_type === 4 && <div
                className="bg-red-200 text-rose-700 flex items-center px-4 py-3.5 w-full mb-4 justify-between rounded">
                <p>به مناسبت روز {data.discount_for}</p>
                <div className="flex items-center">
                    <span>{data.discount} درصد تخفیف</span>
                    <Offer className="mr-3 fill-rose-700"/>
                </div>
            </div>}
            {data.discount_type === 2 && <div
                className="bg-red-200 text-rose-700 flex items-center px-4 py-3.5 w-full mb-4 justify-between rounded">
                <p>تا پایان تخفیف</p>
                <p className="flex items-center ">
                    <Timer
                        targetDate={data.discount_end_date}
                        message="تخفیف تموم شد!"
                        dangerColor="text-rose-700"
                        normalColor="text-rose-700"
                        withSound={true}
                        onExpire={() => setReload(Math.random())}
                    />
                    <Clock className="mr-3 fill-rose-700"/>
                </p>
            </div>}
            <div className="flex flex-col gap-10 sm:p-4 px-3 py-4 bg-white border border-neutral-100 rounded-lg">
                <div className="flex flex-col gap-2">
                    <div className="lg:hidden flex items-center lg:justify-end justify-between">
                        <div className="flex items-center gap-6">
                            <Like isLike={data.is_like} id={data.id} url='/group_reserve'/>
                            <div className="centerOfParent cursor-pointer" onClick={() => {
                                navigator.clipboard.writeText(location.href)
                                addToast({
                                    title: 'کپی شد',
                                    description: 'لینک با موفقیت کپی شد',
                                    color: 'success',
                                })
                            }}><Share/></div>
                        </div>
                    </div>
                    <div className="gap-10 flex flex-col items-center">
                        <div className="gap-2 w-full flex flex-col items-center">
                            <div className="overflow-hidden rounded-2xl w-full max-h-64">
                                <Image
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-full object-cover"
                                    src={data.image || '/images/image 144.png'}
                                    alt={data.name}
                                />
                            </div>
                            <h1 className="lg:block hidden font-semibold">{data.title}</h1>
                            <div className="lg:hidden flex items-center justify-center  flex-col gap-2 w-full">
                                <h1 className='sm:text-xl text-base font-semibold'>{data.title}</h1>
                                <div className="centerOfParent w-fit">
                                    <Image width={24} height={24} alt='flag'
                                           src={data.flag}/></div>
                                <div className="flex items-center gap-1">
                                    <Rate rate={data.rate} id={data.id} url='/group_reserve'/>
                                    <div className="flex items-center gap-2">
                                        <span className='text-natural_gray-950 text-xs'>{data.rate_av}</span>
                                        <span className='text-neutral-700 text-[10px]'>از {data.rate_count} نفر</span>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-2 w-full lg:flex hidden flex-col">
                                <div className=" bg-natural_gray-50 px-3 py-2 h-fit flex items-center justify-between">
                                    <p className="text-natural_gray-950 text-xs">قیمت</p>
                                    <div className="flex  justify-end gap-2">
                                        {data.price !== data.price_discount &&
                                            <div
                                                className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-xs">
                                                {data.discount}٪
                                            </div>}
                                        <div className="flex flex-col">
                                            {data.price !== data.price_discount && <del
                                                className="text-sm text-natural_gray-500 hasToman">{data.price?.toLocaleString()}</del>}
                                            <p className="text-sm hasToman text-green-600">{data.price_discount?.toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gap-6 w-full lg:flex hidden flex-col">
                            <Link
                                href={`/webinar/${data.id}/reserve`}
                                className="bg-primary-600 effect-2 w-full h-12 text-white py-4 px-6 text-center rounded flex flex-col justify-center"
                            >
                                رزرو
                            </Link>
                        </div>
                        <div
                            className="z-[100] gap-6 w-full border-t border-natural_gray-200 lg:hidden flex items-center justify-between fixed bottom-0 p-6 bg-white">
                            <Link
                                href={`/webinar/${data.id}/reserve`}
                                className="bg-primary-600 effect-2 xs:w-1/3 w-1/2 h-12 text-white py-2 px-4 text-center rounded text-sm centerOfParent"
                            >
                                رزرو
                            </Link>
                            <div className="flex flex-col items-center gap-4">
                                <p className="text-natural_gray-900 text-xs">قیمت </p>
                                <div className="flex  justify-end gap-2">
                                    {data.price !== data.price_discount &&
                                        <div className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-xs">
                                            {data.discount}٪
                                        </div>}
                                    <div className="flex flex-col">
                                        {data.price !== data.price_discount && <del
                                            className="text-sm text-natural_gray-500 hasToman">{data.price?.toLocaleString()}</del>}
                                        <p className="text-sm hasToman text-green-600 hasToman">{data.price_discount?.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
