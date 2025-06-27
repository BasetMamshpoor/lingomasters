import React from 'react';
import Image from "next/image";
import Link from "next/link";

const LandingBook = () => {
    return (
        <>
            <div
                className="flex items-center justify-between gap-4 w-full bg-[#F0F6FE99] h-36 sm:h-56 md:h-[275px] relative px-5">
                <div className="w-full ">
                    <div className="rounded-r-3xl w-full z-0">
                        <Image unoptimized src="/images/Frame.png" alt="" width={100} height={100}
                               className="absolute w-36 sm:w-72 md:w-96 z-20 top-0"/>
                        <Image unoptimized src="/images/Union.png" alt="" width={100} height={100}
                               className="absolute w-36 sm:w-72 md:w-96 z-10 top-0"/>
                        <Image unoptimized src="/images/product.png" alt="" width={100} height={100}
                               className="absolute w-32 top-0 sm:right-5 sm:w-48 md:w-60 z-30 md:top-10 md:right-14"/>
                    </div>
                    <div
                        className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 px-2 py-2 absolute z-40 bottom-0 right-5 sm:right-20 md:bottom-10 md:right-80 bg-white rounded-xl">
                        <Link href="/group-class"
                              className="text-xs sm:text-base self-end px-4 md:px-12 py-2 text-white bg-primary-600 border-1.5  border-primary-600 rounded-md whitespace-nowrap">
                            خرید کتاب ها </Link>
                        <Link href="/group-class"
                              className="text-xs sm:text-base self-end px-4 py-2 text-secondary-500 border-1.5  border-secondary-500 rounded-md whitespace-nowrap">مشاهده
                            نمونه صفحات
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center text-[10px] sm:text-base md:text-lg pr-3 text-center">
                    برای یادگیری زبان انگلیسی به صورت خودآموز و با کتاب های چاپی، پیشنهاد ما این پک ویژه است!
                </div>
            </div>
        </>
    );
};

export default LandingBook;