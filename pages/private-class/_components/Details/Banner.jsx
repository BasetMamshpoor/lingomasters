import Image from "next/image";
import React, {useEffect} from "react";
import Link from "next/link";
import {
    addToast,
    BreadcrumbItem,
    Breadcrumbs,
    Popover,
    PopoverContent,
    PopoverTrigger, Radio,
    RadioGroup
} from "@heroui/react";

import Right from '@icons/chevron-right.svg'
import Clock from "@icons/clock.svg";
import Share from '@icons/share.svg'
import Eye from '@icons/eye-right.svg'
import Star from '@icons/magic-star.svg'
import Info from '@icons/info-circle.svg'
import RuleOfCancle from "@/components/RuleOfCancle";
import Offer from "@icons/division.svg";
import Timer from "@/components/Timer";
import Like from "@/components/Like";
import formatNumber from "@/helpers/formatNumber";
import {useRouter} from "next/router";
import Rate from "@/components/Rate";


function Banner({data = {}}) {
    const {about = {}} = data
    const {query, asPath, replace} = useRouter()

    const handleChange = (value) => {
        replace({pathname: asPath.split('?')[0], query: {...query, language: value}},
            undefined,
            {shallow: true}
        );
    }
    useEffect(() => {
        handleChange(about.languages[0].id)
    }, []);
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
                            href='/private-class'>کلاس های خصوصی</BreadcrumbItem>
                        <BreadcrumbItem
                            className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'>{about.name}</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <div className="py-3 flex items-center gap-2 cursor-pointer">
                    <div className="centerOfParent"><Right className='fill-primary-600'/></div>
                    <span className='sm:text-base text-sm font-semibold'>بازگشت</span>
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
                        <div className="flex items-center gap-1 self-end">
                            <div className="centerOfParent"><Eye className='w-4 h-4 fill-primary-700'/></div>
                            <span
                                className='sm:text-base text-sm text-primary-950'>{formatNumber(about.views_count)}</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <Like isLike={about.is_like}/>
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
                            <div
                                className="overflow-hidden rounded-full lg:w-[148px] sm:w-[80px] lg:h-[148px] sm:h-[80px] w-[68px] h-[68px]">
                                <Image
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-full object-cover"
                                    src={about.profile || '/images/image 144.png'}
                                    alt={about.name}
                                />
                            </div>
                            <h1 className="font-semibold lg:block hidden my-2">{about.name}</h1>
                            <div className="centerOfParent flex-col gap-2 lg:hidden w-full">
                                <h1 className='sm:text-xl text-base font-semibold '>{about.name}</h1>
                                <p className='text-natural_gray-600 text-xs'>(کد استاد: {data.id})</p>
                                <RadioGroup
                                    value={query.language}
                                    onValueChange={handleChange}
                                    color='success'
                                    style={{"--heroui-success": "196 94% 25%"}}
                                    orientation="horizontal">
                                    {about.languages.map(e => (
                                        <Radio value={e.id.toString()} classNames={{label: 'flex items-center gap-2'}}>
                                            <div className="centerOfParent w-fit">
                                                <Image width={24} height={24} alt='flag'
                                                       src={e.flag}/></div>
                                            <span>{e.title}</span>
                                        </Radio>
                                    ))}
                                </RadioGroup>
                                <div className="flex items-center gap-1">
                                    <Rate rate={about.rate} id={data.id} url='/private-reserve'/>
                                    <div className="flex items-center gap-2">
                                        <span className='text-natural_gray-950 text-xs'>{about.rate}</span>
                                        <span className='text-neutral-700 text-[10px]'>از {about.rate_count} نفر</span>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-2 w-full lg:flex hidden flex-col">
                                <div className=" bg-natural_gray-50 px-3 py-2 h-10 flex items-center justify-between">
                                    <p className="text-natural_gray-950 text-xs">جلسه 25 دقیقه ای</p>
                                    <p className="text-green-600 text-sm hasToman">{data.price?.toLocaleString()}</p>
                                </div>
                                <div className="bg-natural_gray-50 px-3 py-2  flex items-center justify-between">
                                    <p className="text-natural_gray-950 text-xs">تعیین سطح</p>
                                    <p className="text-red-500 text-md">{about.placement_test}</p>
                                </div>
                                <div className="bg-natural_gray-50 px-3 py-2  flex items-center justify-between">
                                    <p className="text-natural_gray-950 text-xs">کلاس آزمایشی</p>
                                    <p className="text-primary-700 text-md">{about.trial_class}</p>
                                </div>
                            </div>
                        </div>
                        <div className="gap-6 w-full flex flex-col">
                            <div className="flex items-center w-full gap-5">
                                <div className="w-full flex flex-col items-center gap-2">
                                    <span
                                        className="lg:hidden font-semibold text-primary-700 sm:text-base text-sm">{about.placement_test}</span>
                                    <div className="overflow-hidden w-full">
                                        <Link href={`/private-class/${data.id}/reserve-class?type=2`}
                                              className="effect-1 w-full lg:h-12 sm:h-10 h-8 lg:py-4 py-2 text-center whitespace-nowrap lg:text-base sm:text-sm text-xs border text-secondary-500 border-secondary-500 rounded flex flex-col justify-center">
                                            تعیین سطح
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col items-center gap-2">
                                    <span
                                        className="lg:hidden font-semibold text-rose-500  sm:text-base text-sm">{about.trial_class}</span>
                                    <div className="overflow-hidden w-full">
                                        <Link href={`/private-class/${data.id}/reserve-class?type=1`}
                                              className="effect-1 w-full lg:h-12 sm:h-10 h-8 lg:py-4 py-2 text-center whitespace-nowrap lg:text-base sm:text-sm text-xs border text-secondary-500 border-secondary-500 rounded flex flex-col justify-center">
                                            رزرو آزمایشی
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:flex hidden">
                                <Link
                                    href={`/private-class/${data.id}/reserve-class?type=4`}
                                    className="bg-primary-600 effect-2 w-full h-12 text-white py-4 px-6 text-center rounded flex flex-col justify-center"
                                >
                                    رزرو کلاس
                                </Link>
                            </div>
                            <div
                                className="z-[49] w-full border-t border-natural_gray-200 lg:hidden fixed bottom-0 right-0 left-0 p-6 bg-white">
                                <div className="container gap-6 flex items-center justify-between">
                                    <Link
                                        href={`/group-class/${data.id}/reserve-class?type=4`}
                                        className="bg-primary-600 effect-2 xs:w-1/3 w-1/2 h-12 text-white py-2 px-4 text-center rounded text-sm centerOfParent"
                                    >
                                        رزرو کلاس
                                    </Link>
                                    <div className="flex flex-col items-center gap-4">
                                        <p className="text-natural_gray-900 text-xs">قیمت کلاس</p>
                                        <div className="flex  justify-end gap-2">
                                            {data.price !== data.price_discount &&
                                                <div
                                                    className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-xs">
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
                </div>
            </div>
            <div
                className="lg:hidden flex items-center justify-between bg-white border border-natural_gray-100 rounded-lg w-full py-4 px-3">
                <p className="text-xs font-semibold">قوانین لغو کلاس</p>
                <Popover backdrop='blur' className='absolute top-0 left-0 transladte-x-1/2 -translate-y-1/2 w-[90vw]'>
                    <PopoverTrigger>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <div className="centerOfParent"><Info/></div>
                            <span className='text-rose-700 text-xs'>مشاهده قوانین لغو کلاس استاد</span>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent><RuleOfCancle/></PopoverContent>
                </Popover>
            </div>
        </>
    );
}

export default Banner;
