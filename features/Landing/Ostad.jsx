import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Ostad = () => {
    return (
        <>
            <div className="flex items-center flex-col sm:flex-row justify-between w-full gap-7 px-5">
                <div className="">
                    <Image unoptimized src="/images/intresect.png" alt="" width={100} height={100} className="w-full"/>
                </div>
                <div className="flex flex-col gap-32">
                    <div className="flex flex-col gap-4">
                        <p className="text-sm sm:text-xl md:text-2xl">استاد زبان هستی؟</p>
                        <p className="text-xs sm:text-base md:text-lg">علاقه داری که تو مجوعه ما تدریس کنی؟</p>

                        <p className="text-xs sm:text-sm md:text-base">تو مشاوره تلفنی نیازهای خودت رو بگو یا آزمون
                            تعیین سطح بده
                            به ما اجازه بده تا سریع یک استاد خیلی خوب رو برات پیدا کنیم.</p>
                        <div>
                            <p className="text-xs sm:text-sm md:text-base">
                                <br/> ۱. رئیس خودتون باشید
                                <br/> ۲. قیمت کلاس هارو خودتون تعیین کنید.
                                <br/> ۳. از خونه و طبق برنامه خودتون کار کنید.
                                <br/> ۴. با آزادی بیشتر درآمد بیشتری کسب کنید.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex items-center sm:flex-col md:flex-row gap-5 justify-between text-sm sm:text-base">
                        <p className="flex items-center text-xs sm:text-base md:text-lg">برای شروع تدریس با ماُ همین
                            الان درخواست بدید!</p>
                        <Link href="https://professor.lingomasters.ir/auth/register" target="_blank"
                              className="flex items-center self-end px-5 sm:px-14 py-3 text-white bg-primary-600 border-1.5  border-primary-600 rounded-md whitespace-nowrap"> ثبت
                            نام استاد
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ostad;