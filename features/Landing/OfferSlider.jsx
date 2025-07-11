import {Navigation, Pagination, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css/navigation'
import 'swiper/css';
import {Skeleton} from '@heroui/react';
import {useMemo, useState} from "react";
import GroupCard from "@/features/Landing/GroupCard";
import PrivateCard from "@/features/Landing/PrivateCard";
import Group from "@icons/offerslider-main.svg"
import Image from "next/image";

const Slider = ({data}) => {
    const [type, setType] = useState("all")

    const filteredData = useMemo(() => {
        if (!data) return [];
        if (type === "all") return data;
        return data.filter(item => item.type === type);
    }, [data, type]);

    return (
        <>
            <div className="slider relative w-full">
                <div
                    className="w-full lg:rounded-lg lg:py-12 pb-8 lg:pr-0 pr-1 bg-secondary-100">
                    <div dir='rtl' className='z-[1] w-full flex items-center lg:flex-row flex-col lg:gap-0 gap-4'>
                        <div
                            className='lg:w-[311px] w-full flex-shrink-0 flex flex-col lg:gap-10 gap-2 justify-between items-center'>
                            <div
                                className="relative z-[1] w-full sm:px-8 px-4 flex items-center sm:py-4 pt-5 justify-between flex-col gap-3 md:gap-4 lg:gap-10">
                                <div className="flex flex-col gap-2 md:gap-4 lg:gap-8">

                                    <div className="flex items-center justify-between w-full">
                                        <Group className="w-5 h-5 md:w-7 md:h-8 lg:w-10 lg:h-10"/>
                                        <Group className="w-5 h-5 md:w-7 md:h-8 lg:w-10 lg:h-10 scale-x-[-1]"/>
                                    </div>
                                    <p className='text-xl md:text-3xl lg:text-4xl text-secondary-600 '>تخفیف دارها</p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <button
                                        className="px-4 py-2 flex justify-center items-center bg-secondary-600 rounded-lg text-xs md:text-base text-white"
                                        onClick={() => setType('professor')}>کلاس های خصوصی
                                    </button>
                                    <button
                                        className="px-4 py-2 flex justify-center items-center bg-secondary-600 rounded-lg text-xs md:text-base text-white"
                                        onClick={() => setType('group_class')}>کلاس های گروهی
                                    </button>
                                </div>
                                <div className="lg:flex hidden ">
                                    <Image src="/images/offer slider.png" alt="" width={100} height={100}
                                           className="w-32 h-52"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full overflow-hidden">
                            <Swiper
                                modules={[Navigation, Pagination, A11y]}
                                navigation
                                spaceBetween={10}
                                centeredSlides={false}
                                className="[&>.swiper-wrapper]:items-stretch"
                                breakpoints={{
                                    0: {
                                        slidesPerView: 0.8,
                                    },
                                    300: {
                                        slidesPerView: 1.2,
                                    },
                                    319: {
                                        slidesPerView: 1.25,
                                    },
                                    400: {
                                        slidesPerView: 1.5,
                                    },
                                    460: {
                                        slidesPerView: 1.8,
                                    },
                                    500: {
                                        slidesPerView: 2,
                                    },
                                    570: {
                                        slidesPerView: 2,
                                    },
                                    // 640: {
                                    //     slidesPerView: 2.1,
                                    // },
                                    700: {
                                        slidesPerView: 2.3,
                                    },
                                    768: {
                                        slidesPerView: 2.5,
                                    },
                                    825: {
                                        slidesPerView: 2.7,
                                    },
                                    910: {
                                        slidesPerView: 3,
                                    },
                                    975: {
                                        slidesPerView: 3.2,
                                    },
                                    1024: {
                                        slidesPerView: 2.2,
                                    },
                                    1080: {
                                        slidesPerView: 2.5,
                                    },
                                    1160: {
                                        slidesPerView: 2.7,
                                    },
                                    1230: {
                                        slidesPerView: 3,
                                    },
                                    1270: {
                                        slidesPerView: 3.1,
                                    },
                                }}
                            >
                                {!data ? [...Array(5)].map((_, i) => {
                                        return (
                                            <SwiperSlide key={i} dir='ltr'
                                                         className={`relative select-none overflow-hidden flex flex-col items-stretch sm:gap-3 gap-4 sm:max-w-[302px] w-full h-[405px] sm:h-[528px] flex-shrink-0 rounded-lg md:p-6 p-4 bg-white`}>
                                                <Skeleton
                                                    className="sm:max-w-[254px] max-w-[210px] w-full sm:h-[250px] h-[200px] flex-shrink-0 rounded-lg mix-blend-darken"/>
                                                <div className="grow flex flex-col gap-4 mt-4">
                                                    <Skeleton className='rounded w-1/2 h-6 self-end'/>
                                                    <Skeleton className='rounded w-1/4 h-6'/>
                                                    <div
                                                        className="flex items-center sm:gap-6 gap-4 sm:max-w-64 max-w-52 w-full">
                                                        <Skeleton className="p-4 sm:w-[60px] w-11 sm:h-12 h-8 rounded-md"/>
                                                        <Skeleton
                                                            className='sm:text-base text-xs sm:h-12 h-8 flex-[1_0_0] sm:px-6 px-4 sm:py-4 py-2 rounded '/>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                    : filteredData.map(p => (
                                        <SwiperSlide key={p.id} className="!h-auto">
                                            {p.type === 'professor' ? <PrivateCard {...p}/> : <GroupCard {...p}/>}
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slider;