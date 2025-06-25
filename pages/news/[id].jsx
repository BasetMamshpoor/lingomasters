import React from 'react';
import {BreadcrumbItem, Breadcrumbs, Chip} from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import Chalendar from "@icons/calendar.svg";
import Youtube from "@icons/youtube.svg";
import Facebook from "@icons/facebook.svg";
import Whatsapp from "@icons/whatsapp.svg"
const News = () => {
    return (
        <>
            <div dir="rtl" className="container flex flex-col gap-20 ">
                <Breadcrumbs
                    separator='/'
                    classNames={{list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600'}}
                    itemClasses={{
                        separator: "px-2 text-natural_gray-600"
                    }}>
                    <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                    <BreadcrumbItem href="/news">اخبار و اطلاعیه ها</BreadcrumbItem>
                    <BreadcrumbItem>چطور برای آزمون خود از هوش مصنوعی استفاده کنیم؟</BreadcrumbItem>
                </Breadcrumbs>
                <div className="flex flex-col lg:flex-row gap-6 w-full">
                    <div className="flex flex-col gap-10 w-full lg:w-3/4">
                        <div className="rounded-2x w-full">
                            <div
                                className="flex flex-col items-center relative justify-end rounded-2xl overflow-hidden shrink-0 w-full">
                                <Image src="/images/futuristic-business.png" alt="" width={100} height={100}
                                       className="w-full h-full "/>
                                <div
                                    className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-50%"></div>
                                <div className="absolute  backdrop-filter w-full ">
                                    <div
                                        className="flex items-center justify-between gap-4 py-8 px-4 backdrop-filter backdrop-blur-xl w-full">
                                        <p className="text-sm md:text-2xl text-white line-clamp-1">چطور برای آزمون زبان
                                            خود از هوش مصنوعی استفاده کنیم</p>
                                        <div className="flex items-center gap-2">
                                            <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                            <p className="text-xs text-white">۲۹ اردیبهشت ۱۴۰۳</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                            {/*dynamic*/}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 w-full lg:w-1/4">
                        <div className="flex flex-col gap-6 px-3 py-4 rounded-lg border border-natural_gray-100 bg-[#FBFCFE]">
                            <p className="text-lg font-bold lg:font-medium ">جدیدترین خبرها</p>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/images/blogger-communicating-with-followers-laptop-online.png" alt="news"
                                       width={100} height={100} className="rounded-xl"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm">زبان خارجی را در کجا استفاده کنیم؟</p>
                                    <div className="flex items-center gap-2 ">
                                        <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-[10px] sm:text-[8px]">۲۹ اردیبهشت ۱۴۰۳</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/images/blogger-communicating-with-followers-laptop-online.png" alt="news"
                                       width={100} height={100} className="rounded-xl"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm">زبان خارجی را در کجا استفاده کنیم؟</p>
                                    <div className="flex items-center gap-2 ">
                                        <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-[10px] sm:text-[8px]">۲۹ اردیبهشت ۱۴۰۳</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/images/blogger-communicating-with-followers-laptop-online.png" alt="news"
                                       width={100} height={100} className="rounded-xl"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm">زبان خارجی را در کجا استفاده کنیم؟</p>
                                    <div className="flex items-center gap-2 ">
                                        <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-[10px] sm:text-[8px]">۲۹ اردیبهشت ۱۴۰۳</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/images/blogger-communicating-with-followers-laptop-online.png" alt="news"
                                       width={100} height={100} className="rounded-xl"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm">زبان خارجی را در کجا استفاده کنیم؟</p>
                                    <div className="flex items-center gap-2 ">
                                        <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-[10px] sm:text-[8px]">۲۹ اردیبهشت ۱۴۰۳</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/images/blogger-communicating-with-followers-laptop-online.png" alt="news"
                                       width={100} height={100} className="rounded-xl"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm">زبان خارجی را در کجا استفاده کنیم؟</p>
                                    <div className="flex items-center gap-2 ">
                                        <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-[10px] sm:text-[8px]">۲۹ اردیبهشت ۱۴۰۳</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/images/blogger-communicating-with-followers-laptop-online.png" alt="news"
                                       width={100} height={100} className="rounded-xl"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm">زبان خارجی را در کجا استفاده کنیم؟</p>
                                    <div className="flex items-center gap-2 ">
                                        <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-[10px] sm:text-[8px]">۲۹ اردیبهشت ۱۴۰۳</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-6 px-3 py-4 rounded-lg border border-natural_gray-100 bg-[#FBFCFE]">
                            <p className="text-lg font-bold lg:font-medium ">پربازدیدترین خبرها</p>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/images/blogger-communicating-with-followers-laptop-online.png" alt="news"
                                       width={100} height={100} className="rounded-xl"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm">زبان خارجی را در کجا استفاده کنیم؟</p>
                                    <div className="flex items-center gap-2 ">
                                        <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-[10px] sm:text-[8px]">۲۹ اردیبهشت ۱۴۰۳</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/images/blogger-communicating-with-followers-laptop-online.png" alt="news"
                                       width={100} height={100} className="rounded-xl"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm">زبان خارجی را در کجا استفاده کنیم؟</p>
                                    <div className="flex items-center gap-2 ">
                                        <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-[10px] sm:text-[8px]">۲۹ اردیبهشت ۱۴۰۳</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/images/blogger-communicating-with-followers-laptop-online.png" alt="news"
                                       width={100} height={100} className="rounded-xl"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm">زبان خارجی را در کجا استفاده کنیم؟</p>
                                    <div className="flex items-center gap-2 ">
                                        <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-[10px] sm:text-[8px]">۲۹ اردیبهشت ۱۴۰۳</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/images/blogger-communicating-with-followers-laptop-online.png" alt="news"
                                       width={100} height={100} className="rounded-xl"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm">زبان خارجی را در کجا استفاده کنیم؟</p>
                                    <div className="flex items-center gap-2 ">
                                        <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-[10px] sm:text-[8px]">۲۹ اردیبهشت ۱۴۰۳</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/images/blogger-communicating-with-followers-laptop-online.png" alt="news"
                                       width={100} height={100} className="rounded-xl"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm">زبان خارجی را در کجا استفاده کنیم؟</p>
                                    <div className="flex items-center gap-2 ">
                                        <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-[10px] sm:text-[8px]">۲۹ اردیبهشت ۱۴۰۳</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/images/blogger-communicating-with-followers-laptop-online.png" alt="news"
                                       width={100} height={100} className="rounded-xl"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm">زبان خارجی را در کجا استفاده کنیم؟</p>
                                    <div className="flex items-center gap-2 ">
                                        <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-[10px] sm:text-[8px]">۲۹ اردیبهشت ۱۴۰۳</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-[10px] justify-center bg-primary-50 rounded-lg px-3 py-5">
                            <p className="text-base">به اشتراک بگذارید</p>
                            <div className="flex justify-between ">
                                <Youtube />
                                <Image width={100} height={100} className="w-6 h-6" alt="" src="/images/instagram.png"/>
                                <Whatsapp/>
                                <Image width={100} height={100} className="w-6 h-6" alt="" src="/images/telegram.png"/>
                                <Image width={100} height={100} className="w-6 h-6" alt="" src="/images/image 236.png"/>
                                <Image width={100} height={100} className="w-6 h-6" alt="" src="/images/tik_tok.png"/>
                                <Image width={100} height={100} className="w-6 h-6" alt="" src="/images/pinterest.png"/>
                                <Facebook />
                                <Image width={100} height={100} className="w-6 h-6" alt="" src="/images/x.png"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 bg-primary-50 rounded-lg px-5 py-4">
                            <Chip size="sm" className=" bg-primary-200 text-primary-950">هوش مصنوعی</Chip>
                            <Chip size="sm" className=" bg-primary-200 text-primary-950">زبان</Chip>
                            <Chip size="sm" className=" bg-primary-200 text-primary-950">آزمون</Chip>
                            <Chip size="sm" className=" bg-primary-200 text-primary-950">ChatGPT</Chip>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;