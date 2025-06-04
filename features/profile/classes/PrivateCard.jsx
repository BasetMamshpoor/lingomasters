import React from 'react';
import Image from "next/image";
import Flag from "@icons/Flags/Country=Austria, Style=Flag, Radius=On.svg";
import Calendar from "@icons/calendar.svg";
import Watch from "@icons/watch.svg";
import Laptop from "@icons/laptop.svg";
import Link from "next/link";

const PrivateCard =
    ({
         teaching_type,
         teaching_type_id,
         class_link,
         link,
         id,
         language,
         name,
         image,
         date,
         time,
         professor_id,
         className,
         selected
     }) => {
        return (
            <>
                <div
                    className={`relative sm:max-w-[338px] max-w-[280px] w-full overflow-hidden flex flex-col items-center gap-10 rounded-lg border border-natural_gray-200 bg-white ${className}`}>
                    <div className="flex flex-col py-6 px-4 items-center gap-10 h-full w-full">
                        <div className="flex flex-col items-center gap-4 self-stretch grow">
                            <div className="centerOfParent w-24 h-24 rounded-full overflow-hidden">
                                <Image
                                    className="h-full w-full object-cover"
                                    src={image || "/images/group-class.png"}
                                    width={100}
                                    height={100}
                                    alt=""/>
                            </div>
                            <div className="flex flex-col items-center gap-3 self-stretch grow">
                                <div className="flex flex-col gap-3 items-center">
                                    <p className="font-bold sm:text-lg text-base">{name}</p>
                                    <Link href={`/private-class/${professor_id}`}
                                          className="text-primary-700 text-center sm:text-m text-xs">مشاهده پروفایل
                                        استاد</Link>
                                </div>
                                <div className="flex flex-col gap-2 self-stretch items-start">
                                    <div className="flex justify-between gap-1 items-center self-stretch">
                                        <div className="flex justify-end items-center gap-1">
                                            <Flag className='fill-primary-700 w-4 h-4'/>
                                            <p className="sm:text-sm text-xs text-natural_gray-900">زبان</p>
                                        </div>
                                        <p className="text-sm ">{language}</p>
                                    </div>
                                    <div className="flex justify-between gap-1 items-center self-stretch">
                                        <div className="flex justify-end items-center gap-1">
                                            <Calendar className='fill-primary-700 w-4 h-4'/>
                                            <p className="sm:text-sm text-xs text-natural_gray-900">تاریخ</p>
                                        </div>
                                        <p className="text-sm whitespace-nowrap line-clamp-1">{new Date(date).toLocaleDateString('fa-IR', {
                                            day: '2-digit',
                                            month: 'long',
                                            weekday: 'long'
                                        })}</p>
                                    </div>
                                    <div className="flex justify-between gap-1 items-center self-stretch">
                                        <div className="flex justify-end items-center gap-1">
                                            <Watch className='fill-primary-700 w-4 h-4'/>
                                            <p className="sm:text-sm text-xs text-natural_gray-900">ساعت</p>
                                        </div>
                                        <p className="text-sm text-left">{time}</p>
                                    </div>
                                    <div className="flex justify-between gap-1 items-center self-stretch">
                                        <div className="flex justify-end items-center gap-1">
                                            <Laptop className='fill-primary-700 w-4 h-4'/>
                                            <p className="sm:text-sm text-xs text-natural_gray-900">نوع تدریس</p>
                                        </div>
                                        <p className="text-sm ">{teaching_type}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 self-stretch">
                            <Link href={`${link}/${id}`}
                                  className="sm:py-3 py-2 px-0.5 sm:h-12 h-8 centerOfParent flex-1 border-1.5 border-secondary-300 rounded ">
                                <p className=" sm:text-sm text-xs text-secondary-500 text-center whitespace-nowrap">مشاهده
                                    جزئیات</p>
                            </Link>
                            {teaching_type_id === 2 && selected === 'reserved' && selected === 'progress' &&
                                <Link href={class_link || "/"}
                                      className="centerOfParent sm:py-3 py-2 px-0.5 sm:h-12 h-8 flex-1 border-1.5 border-primary-600 bg-primary-600 rounded sm:text-sm text-xs text-white whitespace-nowrap">ورود
                                    به کلاس</Link>}
                        </div>
                    </div>
                </div>
            </>
        );
    };

export default PrivateCard;