import React from 'react';
import Link from "next/link";
import TrashIcon from "@icons/bin.svg";
import EditIcon from "@icons/edit-icon.svg";
import useGetRequest from "@/hooks/useGetRequest";

const PayCheckout = ({id,setSteps}) => {
    const [data = {}, , , , , loading] = useGetRequest(true, id && `/exam-payments/order/${id}`)
    return (
        <>
            <div
                className="col-span-3 rounded-lg border border-natural_gray-100 bg-white py-10 px-3 flex flex-col gap-5">
                <div className="grid sm:grid-cols-3 items-center">
                    <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
                        <p className="text-natural_gray-950 sm:text-base text-[10px]">
                            نام و نام خانوادگی
                        </p>
                        <p className="text-natural_gray-950 sm:text-base text-xs">
                            {data.name}
                        </p>
                    </div>
                    <div className="flex sm:order-1 -order-1 items-center justify-end gap-3">
                        <Link href='/exams/pay'
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
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        شماره تلفن </p>
                    <p
                        className="text-natural_gray-950 text-start sm:text-base text-xs">
                        {data.mobile}
                    </p>
                </div>
                <div className="grid grid-cols-3 items-center">
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        ایمیل
                    </p>
                    <p
                        className="text-natural_gray-950 text-start sm:text-base text-xs">
                        {data.email}
                    </p>
                </div>
                <div className="grid grid-cols-3 items-center">
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        محل آزمون
                    </p>
                    <p
                        className="text-natural_gray-950 text-start sm:text-base text-xs">
                        {data.exam_location}
                    </p>
                </div>
                <div className="grid grid-cols-3 items-center">
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        تاریخ آزمون
                    </p>
                    <p className="text-natural_gray-950 text-start sm:text-base text-xs">
                        {new Date(data.exam_date).toLocaleDateString('fa-IR', {
                            month: 'long',
                            day: '2-digit',
                            weekday: 'long'
                        })}
                    </p>
                </div>
                <div className="grid grid-cols-3 items-center">
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        ساعت آزمون
                    </p>
                    <p className="text-natural_gray-950 text-start sm:text-base text-xs">
                        {new Date(data.exam_time).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false
                        })}
                    </p>
                </div>
                <div className="grid grid-cols-3 items-center">
                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                        توضیحات
                    </p>
                    <p className="text-natural_gray-950 text-start sm:text-base text-xs">
                        {data.description}
                    </p>
                </div>
            </div>

        </>
    );
};

export default PayCheckout;