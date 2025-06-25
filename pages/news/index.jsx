import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';

import Menu from "@icons/menu-board.svg"
import Image from "next/image";
import Calendar from "@icons/calendar.svg";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/pagination';
import Chevron from "@icons/chevron-right.svg";
import {addToast} from "@heroui/react";
import axios from "axios";
import PaginationApp from "@/components/Pagination";

const date = (d) => new Date(d).toLocaleDateString('fa-IR', {year: 'numeric', month: 'long', day: '2-digit'})
const Index = () => {
    const [firstData, setFirstData] = useState({});
    const {1: o, 2: t, 3: th, 4: f} = firstData;
    const [secondData, setSecondData] = useState({fixed: [], news: {}});
    const [thirdData, setThirdData] = useState({fixed: [], news: {}});

    const [page2, setPage2] = useState(1);
    const [page3, setPage3] = useState(1);

    useEffect(() => {
        const fetchFirstData = async () => {
            try {
                const res = await axios.get(`/news`);
                setFirstData(res.data.response.data);
            } catch (error) {
                console.error("Error fetching first data:", error);
            }
        };

        fetchFirstData();
    }, []);

    useEffect(() => {
        const fetchSecondData = async () => {
            try {
                const res = await axios.get(`/news/level_1?page=${page2}`);
                setSecondData(res.data.response.data);
            } catch (error) {
                console.error("Error fetching second data:", error);
            }
        };

        fetchSecondData();
    }, [page2]);

    useEffect(() => {
        const fetchThirdData = async () => {
            try {
                const res = await axios.get(`/news/level_2?page=${page3}`);
                setThirdData(res.data.response.data);
            } catch (error) {
                console.error("Error fetching third data:", error);
            }
        };

        fetchThirdData();
    }, [page3]);
    return (
        <>
            <div dir="rtl" className="container flex flex-col gap-28 mt-10">
                <div className="flex flex-col gap-10">
                    <Link href={`/news/${o?.id}`} className="sm:hidden flex gap-2 ">
                        <Chevron className=" w-5 h-5"/>
                        <p className="text-lg">اخبار و اطلاعیه ها</p>
                    </Link>
                    <div className="hidden sm:flex gap-2 items-center">
                        <Menu className="w-8 h-8 "/>
                        <p className="text-2xl">اخبار و اطلاعیه ها</p>
                    </div>
                    <div className="sm:grid hidden grid-cols-4 gap-5">
                        <Link href={`/news/${o?.id}`}
                              className="relative col-span-2 row-span-2 rounded-[10px] overflow-hidden">
                            <Image src={o?.image} alt={o?.title} width={100} height={100}
                                   className="w-full h-full object-cover"/>
                            <div
                                className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-100% z-[2]"></div>
                            <div className="absolute bottom-3 flex flex-col gap-2 px-4 lg:py-7 w-full z-[3]">
                                <p className=" md:text-base lg:text-xl text-white">{o?.title}</p>
                                <div className="flex items-center gap-2 ">
                                    <Calendar className="w-4 h-4 fill-secondary-300"/>
                                    <p className="text-xs text-white">{date(o?.created_at)}</p>
                                </div>
                            </div>
                        </Link>
                        <Link href={`/news/${t?.id}`}
                              className="relative col-span-2 row-span-1 rounded-xl overflow-hidden">
                            <Image src={t?.image} alt={t?.title}
                                   width={100} height={100} className="w-full h-full object-cover"/>
                            <div
                                className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-100% z-[2]"></div>
                            <div className="absolute bottom-3 flex flex-col gap-2 px-2 lg:py-5 w-full z-[3]">
                                <p className="md:text-sm lg:text-lg text-white">{t?.title}</p>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 fill-secondary-300"/>
                                    <p className="text-xs text-white">{date(t?.created_at)}</p>
                                </div>
                            </div>
                        </Link>
                        <Link href={`/news/${th?.id}`} className="relative rounded-xl overflow-hidden">
                            <Image src={th?.image} alt={th?.title} width={100} height={100}
                                   className="w-full h-full object-cover"/>
                            <div
                                className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-100% z-[2]"></div>
                            <div className="absolute bottom-3 flex flex-col gap-2 px-2 lg:px-3 w-full z-[3]">
                                <p className="text-sm lg:text-lg text-white lg:line-clamp-2 line-clamp-1">{th?.title}</p>
                                <div className="flex items-center gap-2">
                                    <Calendar className="lg:w-4 lg:h-4 w-3 h-3 fill-secondary-300"/>
                                    <p className="text-[10px] lg:text-xs text-white">{date(th?.created_at)}</p>
                                </div>
                            </div>
                        </Link>
                        <Link href={`/news/${f?.id}`} className="relative rounded-xl overflow-hidden ">
                            <Image src={f?.image} alt={f?.title}
                                   width={100} height={100} className="w-full h-full object-cover"/>
                            <div
                                className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-100% z-[2]"></div>
                            <div className="absolute bottom-3 flex flex-col gap-2 px-2 lg:px-3 w-full z-[3]">
                                <p className="text-sm text-white lg:text-lg lg:line-clamp-2 line-clamp-1">{f?.title}</p>
                                <div className="flex items-center gap-2">
                                    <Calendar className="lg:w-4 lg:h-4 w-3 h-3 fill-secondary-300"/>
                                    <p className="text-[10px] lg:text-xs text-white">{date(f?.created_at)}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="relative sm:hidden w-full h-full">
                        <Swiper
                            pagination={{
                                clickable: true,
                                el: '.swiper-pagination',
                                bulletClass: 'w-2 h-2 bg-primary-100 rounded-full duration-300',
                                bulletActiveClass: 'w-6 bg-primary-950 rounded-md'
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="w-full h-full rounded-2xl">
                            {Object.values(firstData).map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Link href={`/news/${item.id}`} className="relative">
                                        <Image src={item.image} alt={item.title} width={100} height={100}
                                               className="w-full h-full object-cover"/>
                                        <div
                                            className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-100% z-[2]"></div>
                                        <div className="absolute bottom-3 flex flex-col gap-2 px-7 py-5 w-full z-[3]">
                                            <p className="md:text-base lg:text-xl text-white">{item.title}</p>
                                            <div className="flex items-center gap-2 ">
                                                <Calendar className="w-4 h-4 fill-secondary-300"/>
                                                <p className="text-xs text-white">{item.created_at ? date(item.created_at) : '-'}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div
                            className="swiper-pagination centerOfParent gap-2 !-bottom-6 !left-1/2 !-translate-x-1/2"></div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-10">
                    <div className="flex items-center justify-center px-4 py-2 w-full rounded-lg bg-primary-200">
                        <p className="text-xs font-bold sm:font-medium md:text-lg "> جدیدترین اخبار</p>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href={`/news/${secondData.fixed[0]?.id}`} className="flex flex-col gap-6 w-full">
                                <Image src={secondData.fixed[0]?.image} alt={secondData.fixed[0]?.title} width={100}
                                       height={100} className="w-full h-full object-cover max-h-[360px] rounded-xl"/>
                                <div className="flex flex-col gap-2 w-full">
                                    <p className="text-xs font-bold md:text-base lg:text-xl lg:font-medium">{secondData.fixed[0]?.title}</p>
                                    <div className="flex items-center gap-2 ">
                                        <Calendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-xs">{date(secondData.fixed[0]?.created_at)}</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href={`/news/${secondData.fixed[1]?.id}`} className="flex flex-col gap-6 w-full">
                                <Image src={secondData.fixed[1]?.image} alt={secondData.fixed[1]?.title}
                                       width={100} height={100}
                                       className="w-full h-full object-cover max-h-[360px] rounded-xl"/>
                                <div className="flex flex-col gap-2 w-full">
                                    <p className="text-xs font-bold md:text-base lg:text-xl lg:font-medium">{secondData.fixed[1]?.title}</p>
                                    <div className="flex items-center gap-2 ">
                                        <Calendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-xs">{date(secondData.fixed[0]?.created_at)}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {secondData.news.data?.map(e => (
                                <Link href={`/news/${e.id}`} key={e.id} className="flex items-center gap-6">
                                    <Image src={e.image}
                                           alt={e.title}
                                           width={100} height={100}
                                           className="w-1/3 sm:w-1/2 rounded-xl max-h-36 object-cover"/>
                                    <div className="flex flex-col gap-2 w-full">
                                        <p className="text-xs font-bold md:text-base lg:font-medium">{e.title}</p>
                                        <div className="flex items-center gap-2 ">
                                            <Calendar className="w-4 h-4 fill-secondary-300"/>
                                            <p className="text-xs">{date(e.created_at)}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="centerOfParent">
                            <PaginationApp total={secondData.news.total} per_page={secondData.news.per_page}
                                           currentPage={page2} onChange={setPage2}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-10">
                    <div className="flex items-center justify-center px-4 py-2 w-full rounded-lg bg-primary-200">
                        <p className="text-xs font-bold sm:font-medium md:text-lg ">پربازدیدترین اخبار</p>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href={`/news/${thirdData.fixed[0]?.id}`} className="flex flex-col gap-6 w-full">
                                <Image src={thirdData.fixed[0]?.image} alt={thirdData.fixed[0]?.title} width={100}
                                       height={100} className="w-full h-full object-cover max-h-[360px] rounded-xl"/>
                                <div className="flex flex-col gap-2 w-full">
                                    <p className="text-xs font-bold md:text-base lg:text-xl lg:font-medium">{thirdData.fixed[0]?.title}</p>
                                    <div className="flex items-center gap-2 ">
                                        <Calendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-xs">{date(thirdData.fixed[0]?.created_at)}</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href={`/news/${thirdData.fixed[1]?.id}`} className="flex flex-col gap-6 w-full">
                                <Image src={thirdData.fixed[1]?.image} alt={thirdData.fixed[1]?.title}
                                       width={100} height={100}
                                       className="w-full h-full object-cover max-h-[360px] rounded-xl"/>
                                <div className="flex flex-col gap-2 w-full">
                                    <p className="text-xs font-bold md:text-base lg:text-xl lg:font-medium">{thirdData.fixed[1]?.title}</p>
                                    <div className="flex items-center gap-2 ">
                                        <Calendar className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-xs">{date(thirdData.fixed[0]?.created_at)}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {thirdData.news.data?.map(e => (
                                <Link href={`/news/${e.id}`} key={e.id} className="flex items-center gap-6">
                                    <Image src={e.image}
                                           alt={e.title}
                                           width={100} height={100}
                                           className="w-1/3 sm:w-1/2 rounded-xl max-h-36 object-cover"/>
                                    <div className="flex flex-col gap-2 w-full">
                                        <p className="text-xs font-bold md:text-base lg:font-medium">{e.title}</p>
                                        <div className="flex items-center gap-2 ">
                                            <Calendar className="w-4 h-4 fill-secondary-300"/>
                                            <p className="text-xs">{date(e.created_at)}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="centerOfParent">
                            <PaginationApp total={thirdData.news.total} per_page={thirdData.news.per_page}
                                           currentPage={page3} onChange={setPage3}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;


