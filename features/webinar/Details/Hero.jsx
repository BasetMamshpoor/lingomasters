import {Breadcrumbs, BreadcrumbItem, addToast} from "@heroui/react";
import Image from "next/image";
import Like from "@/components/Like";
import React from "react";
import Rate from "@/components/Rate";
import Share from "@/components/Share";

const Hero = ({product = {}}) => {
    const {
        title,
        rate = 0,
        id,
        is_like,
        language,
        flag,
        rate_av,
        rate_count,
        level,
        subject,
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
                                    <BreadcrumbItem href="/webinar">وبینارها</BreadcrumbItem>
                                    <BreadcrumbItem>{title}</BreadcrumbItem>
                                </Breadcrumbs>
                                <Share title={title}/>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <h1 className='text-2xl font-semibold'>{title}</h1>
                                </div>
                                <Like id={id} isLike={is_like} url='/webinar-reserve'/>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="centerOfParent w-fit">
                                    <Image width={24} height={24} alt='flag'
                                           src={flag}/></div>
                                <div className="flex items-center gap-1 self-end">
                                    <Rate rate={rate} id={product.id} url='/webinar-reserve'/>
                                    <div className="flex items-center gap-1 text-xs">
                                        <strong>{rate_av}</strong>
                                        از {rate_count} نفر
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full absolute -bottom-5 left-0 flex gap-4 items-center px-10">
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>نوع</p>
                                <h4 className='text-sm font-semibold'>وبینار</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>زبان</p>
                                <h4 className='text-sm font-semibold'>{language}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>موضوع</p>
                                <h4 className='text-sm font-semibold'>{subject}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>سطح</p>
                                <h4 className='text-sm font-semibold'>{level}</h4>
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