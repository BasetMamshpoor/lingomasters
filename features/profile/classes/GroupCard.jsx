import React from "react";
import PersonsIcon from "@icons/users.svg";
import ClockIcon from "@icons/clock.svg";
import CalendarIcon from "@icons/calendar.svg";
import UnitedKingdomFlag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import Image from "next/image";
import Link from "next/link";
import getPersianDateRange from "@/helpers/getPersianDateRange";

function GroupCard({data, selected}) {
    return (
        <div
            className="col-span-1 flex flex-col gap-4 py-6 px-4 bg-white rounded-lg border border-natural_gray-100 overflow-hidden">
            <div className="w-full h-[127px] rounded-2xl">
                <Image
                    width="0"
                    height="0"
                    className="w-full h-full object-cover"
                    alt={data.title}
                    src={data.image || "/images/image 144.png"}
                />
            </div>
            <p className="font-bold text-lg text-center">{data.title}</p>
            <div className="flex flex-col gap-2 grow">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <div className="centerOfParent">
                            <UnitedKingdomFlag className="w-5 h-5"/>
                        </div>
                        <p className="text-xs text-natural_gray-900">زبان</p>
                    </div>
                    <p className="text-sm">{data.language}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <div className="centerOfParent">
                            <PersonsIcon className="w-5 h-5 fill-primary-800"/>
                        </div>
                        <p className="text-xs text-natural_gray-900">استاد</p>
                    </div>
                    <p className="text-sm text-left line-clamp-1">{data.professor}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <div className="centerOfParent">
                            <ClockIcon className="w-5 h-5 fill-primary-800"/>
                        </div>
                        <p className="text-xs text-natural_gray-900">ساعت</p>
                    </div>
                    <p className="text-sm">{data.day}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <div className="centerOfParent">
                            <CalendarIcon className="w-5 h-5 fill-primary-800"/>
                        </div>
                        <p className="text-xs text-natural_gray-900">تاریخ</p>
                    </div>
                    <p className="text-sm md:block hidden line-clamp-1 text-left">{getPersianDateRange(data.start_date, data.end_date, 10)}</p>
                    <p className="text-sm md:hidden line-clamp-1 text-left">{getPersianDateRange(data.start_date, data.end_date, 4)}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <div className="centerOfParent">
                            <PersonsIcon className="w-5 h-5 fill-primary-800"/>
                        </div>
                        <p className="text-xs text-natural_gray-900">نوع تدریس</p>
                    </div>
                    <p className="text-sm text-left line-clamp-1">{data.teaching_type}</p>
                </div>
            </div>
            <div className="w-full flex gap-3 mt-10">
                <Link href={`group/${data.id}`}
                      className="sm:py-3 py-2 px-0.5 sm:h-12 h-8 centerOfParent flex-1 border-[1.5px] border-secondary-300 rounded ">
                    <p className=" sm:text-sm text-xs text-secondary-500 text-center whitespace-nowrap">مشاهده
                        جزئیات</p>
                </Link>
                {data.teaching_type_id === 2 && selected === 'reserved' && selected === 'progress' &&
                    <Link href={data.class_link || '/'}
                          className="py-2 px-4 border bg-blue-600 text-white text-center centerOfParent flex-1 rounded-md effect-2 text-sm">
                        ورود به کلاس
                    </Link>}
            </div>
        </div>
    );
}

export default GroupCard;