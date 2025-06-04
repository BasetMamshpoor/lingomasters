import React from 'react';
import {Avatar} from "@heroui/react";
import Link from "next/link";

const ClassesTableMobile = () => {
    return (
        <>
            <div className="flex flex-col gap-4 py-3">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-2">
                        <div className='flex gap-1 items-center'>
                            <Avatar src={"image"} size='sm' showFallback/>
                            <div className="flex flex-col gap2">
                                <span className='text-natural_gray-800 text-sm'>زبان آموز</span>
                                <p className='font-semibold text-sm'>{"language"}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap2">
                            <span className='text-natural_gray-800 text-sm'>زبان آموز</span>
                            <p className='font-semibold text-sm'>{"language"}</p>
                        </div>
                        <Link href="/students/1" className="text-primary-700 text-sm">پروفایل زبان
                            آموز</Link>
                    </div>
                    <div className="flex items-center justify-between gap-1">
                        <div className="flex flex-col gap2">
                            <span className='text-natural_gray-800 text-sm'>نوع</span>
                            <p className='font-semibold text-sm'>{"language"}</p>
                        </div>
                        <div className="flex flex-col gap2">
                            <span className='text-natural_gray-800 text-sm'>تاریخ</span>
                            <p className='font-semibold text-sm'>{"language"}</p>
                        </div>
                        <div className="flex flex-col gap2">
                            <span className='text-natural_gray-800 text-sm'>ساعت</span>
                            <p className='font-semibold text-sm'>{"language"}</p>
                        </div>
                        <div className="flex flex-col gap2">
                            <span className='text-natural_gray-800 text-sm'>وضعیت</span>
                            <p className='font-semibold text-sm'>{"language"}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className='w-full rounded border border-secondary-500 text-secondary-500 py-3 text-sm'>
                        جزئیات
                    </button>
                    <button className='w-full rounded bg-primary-600 text-white py-3 text-sm'>ورود به کلاس</button>
                </div>
            </div>
        </>
    );
};

export default ClassesTableMobile;