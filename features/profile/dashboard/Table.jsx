import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {Avatar} from "@heroui/react";

const Table = ({data}) => {
    return (
        <>
            <div className="flex flex-col gap-2">
                {data?.map(e => {
                    return <div key={e.id}
                                className="hidden md:flex justify-between items-center border-b last:border-0 border-natural_gray-200 pb-6">
                        <div className="flex items-center gap-2 ">
                            <Avatar src={e.image} alt={e.professor_name} showFallback/>
                            <div className="flex flex-col gap-1">
                                <p className="text-xs text-natural_gray-800">استاد</p>
                                <p className="text-xs lg:text-sm">{e.professor_name}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-xs text-natural_gray-800">کلاس</p>
                            <p className="text-xs lg:text-sm">{e.class}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-xs text-natural_gray-800">نوع</p>
                            <p className="text-xs lg:text-sm">{e.teachingType}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-xs text-natural_gray-800">تاریخ</p>
                            <p className="text-xs lg:text-sm">{new Date(e.date).toLocaleDateString('fa-IR', {
                                month: "long",
                                weekday: "long",
                                day: "2-digit"
                            })}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-xs text-natural_gray-800">ساعت</p>
                            <p className="text-xs lg:text-sm">{e.time}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-xs text-natural_gray-800">وضعیت</p>
                            {e.status === "reserved" && (
                                <div
                                    className="flex items-center justify-center px-2 py-1 bg-success-700 rounded-[10px] text-xs text-white">
                                    رزرو شده
                                </div>
                            )}
                            {e.status === "progress" && (
                                <div
                                    className="flex items-center justify-center px-2 py-1 bg-warning-400 rounded-[10px] text-xs">
                                    در حال گذراندن
                                </div>
                            )}
                            {e.status === "completed" && (
                                <div
                                    className="flex items-center justify-center px-2 py-1 bg-natural_gray-300 rounded-[10px] text-xs text-natural_gray-700">
                                    خاتمه یافته
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <p className="text-xs text-natural_gray-800">جزئیات</p>
                            <Link href={`/profile/classes/${e.model}/${e.id}`}
                                  className="text-[#2D59C8] items-center ">...</Link>
                        </div>
                        {e.status === "progress" && (
                            <Link href={e.classroomLink || "#"}
                                  className="flex items-center justify-center px-4 py-2 bg-primary-600 rounded text-xs text-white">
                                ورود به کلاس
                            </Link>
                        )}
                        {e.status === "completed" && (
                            <>
                                <Link href='/profile/certificate'
                                      className="flex items-center justify-center px-4 py-2 bg-primary-600 rounded text-xs text-white">
                                    صدور گواهینامه
                                </Link>
                            </>
                        )}
                        {e.status === "reserved" && (
                            <div className="flex items-center justify-center px-4 py-2 text-xs">
                                لطفا در روز و ساعت<br/>مشخص در موقعیت<br/>حضور داشته باشید
                            </div>
                        )}
                    </div>
                })}
                {data?.map(e => {
                    return <div key={e.id}
                                className="flex md:hidden gap-4 flex-col items-center border-b border-natural_gray-200 px-4 pb-6 w-full">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2 w-1/3 ">
                                <Avatar src={e.image} alt={e.professor_name} showFallback size='sm'/>
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs text-natural_gray-800">استاد</p>
                                    <p className="text-xs">{e.professor_name}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 w-1/3">
                                <p className="text-xs text-natural_gray-800">کلاس</p>
                                <p className="text-xs">{e.class}</p>
                            </div>
                            <div className="flex flex-col gap-1 w-1/3">
                                <p className="text-xs text-natural_gray-800">نوع</p>
                                <p className="text-xs">{e.teachingType}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col gap-1 w-1/3">
                                <p className="text-xs text-natural_gray-800">تاریخ</p>
                                <p className="text-xs lg:text-sm">{new Date(e.date).toLocaleDateString('fa-IR', {
                                    month: "long",
                                    weekday: "long",
                                    day: "2-digit"
                                })}</p>
                            </div>
                            <div className="flex flex-col gap-1 w-1/3">
                                <p className="text-xs text-natural_gray-800">ساعت</p>
                                <p className="text-xs lg:text-sm">{e.time}</p>
                            </div>
                            <div className="flex flex-col gap-1 w-1/3">
                                <p className="text-xs text-natural_gray-800">وضعیت</p>
                                {e.status === "reserved" && (
                                    <div
                                        className="flex items-center justify-center px-2 py-1 bg-success-700 rounded-[10px] text-xs text-white w-fit">
                                        رزرو شده
                                    </div>
                                )}
                                {e.status === "progress" && (
                                    <div
                                        className="flex items-center justify-center px-2 py-1 bg-warning-400 rounded-[10px] text-xs w-fit">
                                        در حال گذراندن
                                    </div>
                                )}
                                {e.status === "completed" && (
                                    <div
                                        className="flex items-center justify-center px-2 py-1 bg-natural_gray-300 rounded-[10px] w-fit text-xs text-natural_gray-700">
                                        خاتمه یافته
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center gap-4 w-full">
                            <Link href={`/profile/classes/${e.model}/${e.id}`}
                                  className="flex items-center justify-center px-4 py-2 rounded-s text-xs border border-secondary-300 flex-1 text-secondary-300">جزِئیات</Link>
                            <Link href=""
                                  className="flex items-center justify-center px-4 py-2 bg-primary-600 rounded-s text-xs text-white flex-1">رزرو
                                شده</Link>
                        </div>
                    </div>
                })}
            </div>
        </>
    );
};

export default Table;