import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Moshavere = () => {
    return (
        <>
            <div className="flex items-center flex-col sm:flex-row justify-between w-full gap-7 px-5">
                <div className="flex flex-col items-center gap-10 order-2 sm:order-1">
                    <div className="flex flex-col gap-4">
                        <p className="text-sm sm:text-xl md:text-2xl">زبان آموز هستی؟</p>
                        <p className="text-xs sm:text-base md:text-lg">برای پیدا کردن استاد وقت نداری؟</p>
                        <p className="text-xs sm:text-sm md:text-base">تو مشاوره تلفنی نیازهای خودت رو بگو یا آزمون
                            تعیین سطح بده
                            به ما اجازه بده تا سریع یک استاد خیلی خوب رو برات پیدا کنیم.</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm sm:text-base">
                        <Link href="/exams/placement"
                              className="self-end px-14 py-3 text-white bg-primary-600 border-1.5  border-primary-600 rounded-md whitespace-nowrap">تعیین
                            سطح
                        </Link>
                        <a href="#moshavere"
                              className="self-end px-14 py-3 text-secondary-500 border-1.5  border-secondary-500 rounded-md whitespace-nowrap">مشاوه
                            تلفنی
                        </a>
                    </div>
                </div>
                <div className="order-1 sm:order-2">
                    <Image src="/images/young-man.png" alt="" width={100} height={100} className="w-full"/>
                </div>
            </div>
        </>
    );
};

export default Moshavere;