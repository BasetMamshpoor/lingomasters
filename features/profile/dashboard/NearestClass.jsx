import React from 'react';
import Link from "next/link";
import {Avatar} from "@heroui/react";

const NearestClass = ({title, date,head, time, type, language,image,}) => {
    return (
        <>
            <div
                className="flex flex-col gap-4 rounded-lg border border-natural_gray-200 bg-white py-6 px-3 sm:text-sm text-xs">
                <p className='lg:text-base text-sm'>نزدیک ترین <span className="font-bold">{head}</span></p>
                <div className="flex flex-col gap-8 py-6 border-y border-natural_gray-200">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <p>{new Date(date)?.toLocaleString('fa-IR', {
                                weekday: 'long',
                                month: 'long',
                                day: '2-digit'
                            })}</p>
                            <p>{time}</p>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex flex-col gap-2">
                                <span className='text-natural_gray-800'>نوع کلاس</span>
                                <p className='font-semibold'>{type}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className='text-natural_gray-800'>موضوع</span>
                                <p className='font-semibold'>{title}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className='text-natural_gray-800'>زبان</span>
                                <p className='font-semibold'>{language}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                         <div className='flex gap-1 items-center'>
                            <Avatar src={image} size='sm' showFallback/>
                            <div className="flex flex-col gap2">
                                <span className='text-natural_gray-800'>استاد</span>
                                <p className='font-semibold'>{name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className='w-full rounded border border-secondary-500 text-secondary-500 py-3'>کنسل کردن
                    </button>
                    {type === 'آنلاین' &&
                        <button className='w-full rounded bg-primary-600 text-white py-3'>ورود به کلاس</button>}
                </div>
            </div>
        </>
    );
};

export default NearestClass;