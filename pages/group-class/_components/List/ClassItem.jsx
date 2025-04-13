import React from "react";
import EyeIcon from "@icons/eye-right.svg";
import BookIcon from "@icons/book-open.svg";
import PersonsIcon from "@icons/users.svg";
import ClockIcon from "@icons/clock.svg";
import CalendarIcon from "@icons/calendar.svg";
import CoinIcon from "@icons/coin-stack.svg";
import UnitedKingdomFlag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import Image from "next/image";
import Link from "next/link";
import formatNumber from "@/helpers/formatNumber";
import getPersianDateRange from "@/helpers/getPersianDateRange";

import Like from "@/components/Like";

function ClassItem({data}) {
    return (
        <div
            className="col-span-1 flex flex-col gap-4 py-6 px-4 bg-white rounded-lg border border-natural_gray-100 overflow-hidden">
            <div className="flex justify-between items-center">
                <div className="flex items-center py-1 px-2 bg-natural_gray-50 rounded-lg -mr-6 gap-2 ">
                    <div className="centerOfParent">
                        <EyeIcon className="w-6 h-3"/>
                    </div>
                    <span className="text-xs text-primary-900 uppercase ">{formatNumber(data.view)}</span>
                </div>
                <Like id={data.id} isLike={data.is_like} url='/group_reserve'/>
            </div>
            <div className="w-full h-[127px] rounded-2xl ">
                <Image
                    width="0"
                    height="0"
                    className="w-full h-full object-cover"
                    about={data.title}
                    src={data.image || "/images/image 144.png"}
                />
            </div>
            <div className="flex flex-col gap-2 grow">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <div className="centerOfParent">
                            <BookIcon className="w-5 h-5 fill-primary-800"/>
                        </div>
                        <p className="text-xs text-natural_gray-900">نام دوره</p>
                    </div>
                    <p className="text-sm">{data.title}</p>
                </div>
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
                        <p className="text-xs text-natural_gray-900">روز/ساعت</p>
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
                <div className="flex items-start justify-between">
                    <div className="flex items-center  gap-1">
                        <div className="flex items-center">
                            <CoinIcon className="w-5 h-5 fill-primary-800"/>
                        </div>
                        <p className="text-xs text-natural_gray-900">قیمت</p>
                    </div>
                    <div className="flex grow justify-end gap-2">
                        {data.price !== data.price_discount &&
                            <div className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-sm">
                                {data.discount}٪
                            </div>}
                        <div className="flex flex-col">
                            <p className="text-sm hasToman">{data.price?.toLocaleString()}</p>
                            {data.price !== data.price_discount && <del
                                className="text-sm text-natural_gray-500 hasToman">{data.price_discount?.toLocaleString()}</del>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-3 mt-10">
                <Link href={`/group-class/${data.id}`}
                      className="py-2 px-4 border-1.5 border-secondary-500 text-secondary-500 text-center w-full rounded-md text-sm">
                    جزئیات
                </Link>
                <Link href={`/group-class/${data.id}/reserve-class`}
                      className="py-2 px-4 border bg-blue-600 text-white text-center w-full rounded-md effect-2 text-sm">
                    رزرو کلاس
                </Link>
            </div>
        </div>
    );
}

export default ClassItem;
