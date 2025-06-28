import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import Link from 'next/link';
import {Skeleton} from "@heroui/react";
import Left from '@icons/arrow-left.svg'

const Slider = ({loop, data, isLoading, Component, children, to, Icon, title}) => {
    return (
        <>
            <div className="flex flex-col items-center lg:gap-10 gap-6 w-full">
                <div className="flex flex-col items-center gap-6 w-full">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2">
                            <Icon className='  lg:w-10 lg:h-10'/>
                            <h3 className="text-2xl">{title}</h3>
                        </div>
                        <Link href={to}
                              className="centerOfParent gap-2 text-primary-600 fill-primary-600 lg:text-base text-sm">
                            مشاهده همه کلاس ها
                            <Left className="w-5 h-5"/>
                        </Link>
                    </div>
                    {children}
                </div>
                <div className="w-full relative slider px-1">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={1.2}
                        centeredSlides={false}
                        loop={loop ? true : false}
                        navigation
                        breakpoints={{
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
                                slidesPerView: 2.3,
                            },
                            640: {
                                slidesPerView: 2.1,
                            },
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
                            1080: {
                                slidesPerView: 3.5,
                            },
                            1160: {
                                slidesPerView: 3.8,
                            },
                            1230: {
                                slidesPerView: 4.05,
                            },
                        }}
                    >
                        {(isLoading) ? [...Array(5)].map((_, i) => {
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
                            : data?.map(p => <SwiperSlide key={p.id} className='!h-auto'>
                                <Component {...p}/>
                            </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Slider;