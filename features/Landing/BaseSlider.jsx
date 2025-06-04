import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules';
import Left from '@icons/arrow-left.svg';
import Right from '@icons/chevron-right.svg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const BaseSlider = ({data,renderItem}) => {
    return (
        <>
            <Swiper
                centeredSlides={false}
                spaceBetween={100}
                initialSlide={1}
                slidesPerView={1}
                navigation={{
                    nextEl: '.custom-main-next',
                    prevEl: '.custom-main-prev',
                }}
                loop
                pagination={{
                    el: '.custom-main-pagination',
                    clickable: true,
                    bulletClass: 'w-4 h-4 bg-primary-200 rounded-full',
                    bulletActiveClass: 'bg-primary-950',
                }}
                modules={[Pagination, Navigation]}
                className="w-full h-full max-w-[500px]"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className="flex justify-between items-center w-full lg:max-w-96 max-w-[300px]">
                <div className="custom-main-prev cursor-pointer text-gray-700 hover:text-black text-xl">
                    <Right className="fill-white w-8 h-8 p-2 rounded-full bg-primary-700"/>
                </div>

                <div className="custom-main-pagination flex gap-2 justify-center"/>

                <div className="custom-main-next cursor-pointer text-gray-700 hover:text-black text-xl">
                    <Left className="fill-white w-8 h-8 p-2 rounded-full bg-primary-700"/>
                </div>
            </div>
        </>
    );
};

export default BaseSlider;