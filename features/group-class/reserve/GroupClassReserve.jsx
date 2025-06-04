import React from "react";
import KingdomFlag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import HistoryIcon from "@icons/history.svg";
import Users from "@icons/users.svg";
import Add from "@icons/user-add.svg";
import GrowthIcon from "@icons/growth.svg";
import RakingIcon from "@icons/ranking.svg";
import LaptopIcon from "@icons/laptop.svg";
import Icon from "@icons/button-icon.svg";
import Map from "@icons/map-marker.svg";
import Clock from "@icons/clock.svg";
import BookIcon from "@icons/book-open.svg";
import PercentageIcon from "@icons/percentage-square.svg";
import CalendarIcon from "@icons/calendar.svg";
import EditIcon from "@icons/edit-icon.svg";
import TrashIcon from "@icons/bin.svg";

import BookItem from "@/components/Books/BookItem";
import getPersianDateRange from "@/helpers/getPersianDateRange";
import Link from "next/link";

function ReserveCheckout({data, setSteps}) {
    return (
        <div className="col-span-3 rounded-lg border border-natural_gray-100 bg-white py-4 px-3 flex flex-col gap-5 ">
            <div className="grid sm:grid-cols-3 items-center">
                <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
                    <div className="flex items-center">
                        <div className="centerOfParent ml-2">
                            <Users className='fill-primary-700'/>
                        </div>
                        <p className="text-natural_gray-950 sm:text-base text-[10px]">
                            استاد
                        </p>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-xs">
                        {data.professor}
                    </p>
                </div>
                <div className="flex sm:order-1 -order-1 items-center justify-end gap-3">
                    <Link href='/group-class'
                          className="flex gap-2 items-center py-1 px-3 text-sm rounded-md border-2 border-red-600 text-red-600">
                        <TrashIcon className="w-5 h-5 fill-red-600"/>
                        <p className="md:block hidden">حذف</p>
                    </Link>
                    <button type='button' onClick={() => setSteps(1)}
                            className="flex gap-2 items-center py-1 px-3 text-sm rounded-md border-2 border-primary-600 text-primary-600">
                        <EditIcon className="w-5 h-5"/>
                        <p className="md:block hidden">ویرایش</p>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <div className="centerOfParent ml-2">
                        <HistoryIcon className="w-5 h-5"/>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        مدت دوره
                    </p>
                </div>
                <p className="text-natural_gray-950 sm:text-base text-xs">
                    {data.sessions_count} جلسه
                </p>
            </div>
            <div className="grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <div className="centerOfParent ml-2">
                        <Add className="w-5 h-5"/>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        ظرفیت
                    </p>
                </div>
                <p className="text-natural_gray-950 sm:text-base text-xs">
                    {data.max_capacity} نفر
                </p>
            </div>
            <div className="grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <div className="centerOfParent ml-2">
                        <KingdomFlag className="w-5 h-5"/>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        زبان
                    </p>
                </div>
                <p className="text-natural_gray-950 sm:text-base text-xs">
                    {data.language}
                </p>
            </div>
            <div className="grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <div className="centerOfParent ml-2">
                        <GrowthIcon className="w-5 h-5"/>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        گروه سنی
                    </p>
                </div>
                <p className="text-natural_gray-950 sm:text-base text-xs">
                    {data.ageGroup}
                </p>
            </div>
            <div className="grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <div className="centerOfParent ml-2">
                        <RakingIcon className="fill-primary-600 w-5 h-5"/>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        سطح زبان
                    </p>
                </div>
                <p className="text-natural_gray-950 text-start sm:text-base text-xs">
                    {data.level}
                </p>
            </div>
            <div className="grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <div className="centerOfParent ml-2">
                        <LaptopIcon className="fill-primary-600 w-5 h-5"/>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        نوع کلاس
                    </p>
                </div>
                <p className="text-natural_gray-950 text-start sm:text-base text-xs">
                    {data.teachingType}
                </p>
            </div>
            <div className="grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <div className="centerOfParent ml-2">
                        <Icon className="fill-primary-600 w-5 h-5"/>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        موقعیت
                    </p>
                </div>
                <p className="text-natural_gray-950 text-start sm:text-base text-xs">
                    ایران _ تهران _ منطقه ۶
                </p>
            </div>
            <div className="grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <div className="centerOfParent ml-2">
                        <Map className="fill-primary-600 w-5 h-5"/>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        آدرس
                    </p>
                </div>
                <p className="text-natural_gray-950 text-start sm:text-base text-xs">
                    {data.place}
                </p>
            </div>
            <div className="grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <div className="centerOfParent ml-2">
                        <Clock className="fill-primary-600 w-5 h-5"/>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        روز/ساعت
                    </p>
                </div>
                <p className="text-natural_gray-950 text-start sm:text-base text-xs">
                    {data.time}
                </p>
            </div>
            <div className="grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <div className="centerOfParent ml-2">
                        <CalendarIcon className="fill-primary-600 w-5 h-5"/>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        تاریخ
                    </p>
                </div>
                <p className="text-natural_gray-950 text-start sm:text-base text-xs">
                    {getPersianDateRange(data.start_date, data.end_date, 10)}
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center">
                    <div className="centerOfParent ml-2">
                        <BookIcon className="fill-primary-600 w-5 h-5"/>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        کتاب‌های تدریسی
                    </p>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                    {data.books.map(book => <BookItem key={book.id} {...book} />)}
                </div>
            </div>
            <div className="grid grid-cols-3 items-center">
                <div className="flex items-center">
                    <div className="centerOfParent ml-2">
                        <PercentageIcon className="w-5 h-5"/>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        کد تخفیف
                    </p>
                </div>
                <p className="text-natural_gray-950 sm:text-base text-xs">
                    {data.discount_code}
                </p>
            </div>
        </div>
    );
}

export default ReserveCheckout;
