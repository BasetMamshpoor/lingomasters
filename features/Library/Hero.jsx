import {Breadcrumbs, BreadcrumbItem, addToast} from "@heroui/react";
//icons
import Share from '@icons/share.svg'
import Like from "@/components/Like";
import Rate from "@/components/Rate";
import Image from "next/image";
import Eye from "@icons/eye-right.svg";
import formatNumber from "@/helpers/formatNumber";
import React from "react";

const Hero = ({product = {}}) => {
    const {
        title,
        rate = 0,
        id,
        language,
        is_like,
        views_count,
        rate_count,
        subject,
        age_group,
        page_number, flag,
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
                                    <BreadcrumbItem href={`/library`}>کتابخانه</BreadcrumbItem>
                                    <BreadcrumbItem>{title}</BreadcrumbItem>
                                </Breadcrumbs>
                                <button
                                    type="button"
                                    className="centerOfParent cursor-pointer"
                                    aria-label="اشتراک‌گذاری"
                                    onClick={() => {
                                        if (window.innerWidth < 1024 && navigator.share) {
                                            navigator.share({
                                                title: title,
                                                url: window.location.href,
                                            }).then(() => {
                                                addToast({
                                                    description: 'لینک محصول با موفقیت به اشتراک گذاشته شد.',
                                                    color: 'success',
                                                });
                                            }).catch(() => {
                                                addToast({
                                                    description: 'اشتراک‌گذاری لغو شد یا پشتیبانی نمی‌شود.',
                                                    color: 'warning',
                                                });
                                            });
                                        } else if (navigator.clipboard && window.location) {
                                            navigator.clipboard.writeText(window.location.href);
                                            addToast({
                                                description: 'لینک محصول در کلیپ بورد شما کپی شد.',
                                                color: 'success',
                                            });
                                        }
                                    }}
                                >
                                    <Share/>
                                </button>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <h1 className='text-2xl font-semibold'>{title}</h1>
                                </div>
                                <div className="flex flex-col items-end gap-3">
                                    <Like isLike={is_like} url='/product' id={id}/>
                                    <div className="centerOfParent gap-1">
                                        <div className="centerOfParent"><Eye className='w-4 h-4 fill-primary-700'/>
                                        </div>
                                        <span className="text-sm">{formatNumber(views_count)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="centerOfParent w-fit">
                                    <Image src={flag} width={24} height={24}
                                           alt={language}/></div>
                                <div className="flex items-center gap-1">
                                    <Rate rate={rate} id={id} url='/product'/>
                                    <div className="flex items-center gap-1 text-xs">
                                        <strong>{rate}</strong>
                                        از {rate_count} نفر
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full absolute -bottom-5 left-0 flex gap-4 items-center px-10">
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>زبان کتاب</p>
                                <h4 className='text-sm font-semibold'>{language}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                            <p className='text-natural_gray-700 text-xs'>سطح کتاب</p>
                                <h4 className='text-sm font-semibold'>{book_level}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>موضوع کتاب</p>
                                <h4 className='text-sm font-semibold'>{subject}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>گروه سنی</p>
                                <h4 className='text-sm font-semibold'>{age_group}</h4>
                            </div>
                            <div
                                className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>تعداد جلد</p>
                                <h4 className='text-sm font-semibold'>{page_number}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;