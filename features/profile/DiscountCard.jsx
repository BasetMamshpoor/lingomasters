import React from 'react';
import Copy from "@icons/copy.svg"
import Image from "next/image";
import {addToast} from "@heroui/react";

const DiscountCard = ({code, expires_at, id, limit, percentage, title}) => {
    const isExpired = new Date(expires_at) < new Date();
    return (
        <>
            <div dir="rtl" id={id}
                 className="flex items-center flex-col lg:flex-row bg-white rounded-xl p-4 gap-4 w-full max-w-2xl border border-gray-200 h-fit">
                <div
                    className="w-full  h-1/2 lg:h-full lg:w-1/3 bg-blue-50 flex items-center justify-center rounded-xl overflow-hidden">
                    <Image src="/images/offer.png" alt="" width={100} height={100} className="w-full h-full"/>
                </div>
                <div
                    className="w-full lg:w-2/3 flex flex-col border-t-2 lg:border-r-2 lg:border-t-0 border-dashed pt-5 lg:p-0 lg:pr-5 gap-6">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex items-center justify-between">
                            <h4 className="text-sm md:text-base">{title}</h4>
                            <div
                                className="bg-[#3E2DE1] text-white text-xs rounded-full px-3 py-1 w-fit mb-2">{percentage}٪
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <p className="text-xs">برای:</p>
                                <p className="text-xs text-primary-700">{limit} نفر اول</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <span
                                className="border border-yellow-500 text-yellow-600 rounded-full px-3 py-1 text-[10px]">
                               {isExpired
                                   ? "منقضی شده"
                                   : (() => {
                                       const diffMs = new Date(expires_at) - new Date();
                                       const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                                       if (diffDays < 1) {
                                           const diffHours = Math.ceil(diffMs / (1000 * 60 * 60));
                                           return `قابل استفاده تا ${diffHours} ساعت دیگر`;
                                       }
                                       return `قابل استفاده تا ${diffDays} روز دیگر`;
                                   })()
                               }
                            </span>
                            {/*<span*/}
                            {/*    className="border border-yellow-500 text-yellow-600 rounded-full px-3 py-1 text-[10px]">۳ بار مصرف</span>*/}
                        </div>
                    </div>
                    {isExpired ? (
                        <div
                            className="flex items-center justify-center border rounded-xl p-3 w-full bg-gray-100 gap-3">
                            <p className="text-red-500 text-xs md:text-sm whitespace-nowrap">کد منقضی شده است</p>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center border rounded-xl p-3 w-full bg-white gap-3">
                            <div
                                className="flex items-center justify-center bg-primary-50 px-3 py-1 rounded-md text-blue-600 font-medium w-2/3 text-xs md:text-sm">{code}
                            </div>
                            <button
                                className="flex items-center justify-center gap-1 mr-3"
                                onClick={() => {
                                    navigator.clipboard.writeText(code);
                                    addToast({
                                        title: "کد تخفیف کپی شد",
                                        description: "کد تخفیف با موفقیت کپی شد.",
                                        color: "success",
                                    })
                                }}
                            >
                                <Copy className="fill-primary-600 w-5 h-5"/>
                                <p className="text-blue-600 text-xs md:text-sm whitespace-nowrap">کپی کردن</p>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default DiscountCard;