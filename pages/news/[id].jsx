import React from 'react';
import {BreadcrumbItem, Breadcrumbs, Chip, Spinner} from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import Chalendar from "@icons/calendar.svg";
import Youtube from "@icons/youtube.svg";
import Facebook from "@icons/facebook.svg";
import Whatsapp from "@icons/whatsapp.svg"
import useGetRequest from "@/hooks/useGetRequest";
import {useRouter} from "next/router";
import Insta from "@icons/instagram.svg";
import Whats from "@icons/whatsapp.svg";
import Tel from "@icons/telegram.svg";
import Apa from "@icons/aparat.svg";
import Tik from "@icons/tik_tok.svg";
import Pi from "@icons/pinterest.svg";
import Fac from "@icons/facebook.svg";
import X from "@icons/x.svg";

const News = () => {
    const {query} = useRouter()
    const [data, , , , , isLoading] = useGetRequest(true, query.id && `/news/show/${query.id}`)
    return (
        <>{isLoading ?
            <Spinner className="w-full my-10 centerOfParent" color='success'/>
            : data &&
            <div dir="rtl" className="container flex flex-col gap-20 my-8">
                <Breadcrumbs
                    separator='/'
                    classNames={{list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600'}}
                    itemClasses={{
                        separator: "px-2 text-natural_gray-600"
                    }}>
                    <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                    <BreadcrumbItem href="/news">اخبار و اطلاعیه ها</BreadcrumbItem>
                    <BreadcrumbItem>{data.title}</BreadcrumbItem>
                </Breadcrumbs>
                <div className="flex flex-col lg:flex-row gap-6 w-full">
                    <div className="flex flex-col gap-10 w-full lg:w-3/4">
                        <div className="rounded-2x w-full flex flex-col gap-8">
                            <div
                                className="flex flex-col items-center relative justify-end rounded-2xl overflow-hidden shrink-0 w-full">
                                <Image src={data.image || "/images/futuristic-business.png"} alt={data.title}
                                       width={100}
                                       height={100}
                                       className="w-full h-full object-cover"/>
                                <div
                                    className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-50%"></div>
                                <div className="absolute  backdrop-filter w-full ">
                                    <div
                                        className="flex items-center justify-between gap-4 py-8 px-4 backdrop-filter backdrop-blur-xl w-full">
                                        <p className="text-sm md:text-2xl text-white line-clamp-1">{data.title}</p>
                                        <div className="flex items-center gap-2">
                                            <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                            <p className="text-xs text-white">{new Date(data.created_at).toLocaleDateString('fa-IR', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: '2-digit'
                                            })}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: data.text}}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 w-full lg:w-1/4">
                        <div
                            className="flex flex-col gap-6 px-3 py-4 rounded-lg border border-natural_gray-100 bg-[#FBFCFE]">
                            <p className="text-lg font-bold lg:font-medium ">جدیدترین خبرها</p>
                            {data.news?.map((item, i) => <Link key={item.id} href={`/news/${item.id}`}
                                                               className="flex items-center gap-2">
                                <Image
                                    src={item.image || "/images/blogger-communicating-with-followers-laptop-online.png"}
                                    alt={item.title}
                                    width={100} height={100} className="rounded-xl object-cover"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm">{item.title}</p>
                                    <div className="flex items-center gap-2 ">
                                        <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-[10px] sm:text-[8px]">{new Date(item.created_at).toLocaleDateString('fa-IR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: '2-digit'
                                        })}</p>
                                    </div>
                                </div>
                            </Link>)}
                        < /div>
                        <div
                            className="flex flex-col gap-6 px-3 py-4 rounded-lg border border-natural_gray-100 bg-[#FBFCFE]">
                            <p className="text-lg font-bold lg:font-medium ">پربازدیدترین خبرها</p>
                            {data.most_viewed?.map((item, i) => <Link key={item.id} href={`/news/${item.id}`}
                                                                      className="flex items-center gap-2">
                                <Image
                                    src={item.image || "/images/blogger-communicating-with-followers-laptop-online.png"}
                                    alt={item.title}
                                    width={100} height={100} className="rounded-xl object-cover"/>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className="text-sm">{item.title}</p>
                                    <div className="flex items-center gap-2 ">
                                        <Chalendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-[10px] sm:text-[8px]">{new Date(item.created_at).toLocaleDateString('fa-IR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: '2-digit'
                                        })}</p>
                                    </div>
                                </div>
                            </Link>)}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 bg-primary-50 rounded-lg px-5 py-4">
                            {data.tags?.map((tag, i) => <Chip size="sm" key={i}
                                                              className=" bg-primary-200 text-primary-950">{tag}</Chip>)}
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default News;