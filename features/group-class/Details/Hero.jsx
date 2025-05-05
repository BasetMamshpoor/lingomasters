import {Breadcrumbs, BreadcrumbItem, addToast, PopoverTrigger, PopoverContent, Popover} from "@heroui/react";
import Share from '@icons/share.svg'
import View from '@icons/eye-right.svg'
import formatNumber from "@/helpers/formatNumber";
import Image from "next/image";
import Alert from "@icons/info-circle.svg";
import RuleOfCancle from "@/components/RuleOfCancle";
import Like from "@/components/Like";
import React from "react";
import Rate from "@/components/Rate";

const Hero = ({product = {}}) => {
    const {
        title,
        rate = 0,
        id,
        is_like,
        view,
        teachingType,
        flag,
        rate_av,
        rate_count,
        gender,
        level,
        address,
        ageGroup
    } = product

    return (
        <>
            <div className="hidden lg:block mb-20">
                <div className="container">
                    <div className="relative bg-gradient-to-t from-[#2D59C826] to-[#89C9FF14] h-[294px] py-8 px-10">
                        <div className="">
                            <div className="flex items-center justify-between mb-10">
                                <Breadcrumbs
                                    separator='/'
                                    classNames={{list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600'}}
                                    itemClasses={{
                                        separator: "px-2 text-natural_gray-600"
                                    }}>
                                    <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                                    <BreadcrumbItem href="/group-class">کلاس های گروهی</BreadcrumbItem>
                                    <BreadcrumbItem>{title}</BreadcrumbItem>
                                </Breadcrumbs>
                                <div className="centerOfParent cursor-pointer" onClick={() => {
                                    navigator.clipboard.writeText(location.href)
                                    addToast({
                                        title: 'کپی شد',
                                        description: 'لینک با موفقیت کپی شد',
                                        color: 'success',
                                    })
                                }}><Share/></div>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <h1 className='text-2xl font-semibold'>{title}</h1>
                                    <span className='text-natural_gray-600 text-xs'>(کد دوره: {id})</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Like id={id} isLike={is_like} url='/group_reserve'/>
                                    <div className="flex items-center gap-2"><View
                                        className='w-4 h-4 fill-primary-700'/> {formatNumber(view)}</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="centerOfParent w-fit"><Image width={24} height={24} alt='flag'
                                                                             src={flag}/></div>
                                <div className="flex items-center gap-1 self-end">
                                    <Rate rate={rate} id={product.id} url='/group_reserve'/>
                                    <div className="flex items-center gap-1 text-xs">
                                        <strong>{rate_av}</strong>
                                        از {rate_count} نفر
                                    </div>
                                </div>
                            </div>
                            <Popover backdrop='blur'
                                     className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[40vw]'>
                                <PopoverTrigger>
                                    <div className="flex items-center gap-1 cursor-pointer">
                                        <div className="centerOfParent"><Alert/></div>
                                        <span className='text-rose-700 text-xs'>مشاهده قوانین لغو کلاس استاد</span>
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent><RuleOfCancle/></PopoverContent>
                            </Popover>
                        </div>
                        <div className="w-full absolute -bottom-5 left-0 flex gap-4 items-center px-10">
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>نوع تدریس</p>
                                <h4 className='text-sm font-semibold'>{teachingType}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>سطح</p>
                                <h4 className='text-sm font-semibold'>{level}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>نوع دوره</p>
                                <h4 className='text-sm font-semibold'>{title}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>شهر</p>
                                <h4 className='text-sm font-semibold'>{address}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>تدریس برای</p>
                                <h4 className='text-sm font-semibold'>{gender}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>گروه سنی</p>
                                <h4 className='text-sm font-semibold'>{ageGroup}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;