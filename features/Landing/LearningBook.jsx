import React from 'react';
import Image from "next/image";
import Link from "next/link";

const LandingBook = () => {
    return (
        <>
            <div
                className="flex flex-col md:flex-row md:justify-between gap-48 md:gap-20 w-full md:h-[235px] bg-[#F0F6FE99] relative px-3 lg:px-5">
                <div className="w-full md:w-1/4 h-full">
                    <div className="rounded-r-3xl w-full z-0">
                        <Image unoptimized src="/images/Frame.png" alt="" width={100} height={100}
                               className="absolute w-60 md:w-64 lg:w-80 z-20 top-0"/>
                        <Image unoptimized src="/images/Union.png" alt="" width={100} height={100}
                               className="absolute w-60 md:w-64 lg:w-80 z-10 top-0"/>
                        <Image unoptimized src="/images/product.png" alt="" width={100} height={100}
                               className="absolute w-44 top-5 right-8 md:right-10 md:top-5 md:w-48 lg:w-60 z-30 lg:top-10 lg:right-10"/>
                    </div>
                    <div
                        className="centerOfParent gap-2 w-fit h-fit sm:gap-4 md:gap-6 px-2 py-2 absolute z-40 top-40 sm:top-32 left-5 md:top-44 md:right-0 lg:top-44 lg:right-72 bg-white rounded-xl">
                        <Link href="https://store.lingomastres.ir"
                              className="text-xs sm:text-base self-end px-4 md:px-12 py-2 text-white bg-primary-600 border-1.5  border-primary-600 rounded-md whitespace-nowrap">
                            خرید کتاب ها </Link>
                        <a href="/book%20samples.pdf" download
                           className="text-xs sm:text-base self-end px-4 py-2 text-secondary-500 border-1.5  border-secondary-500 rounded-md whitespace-nowrap">مشاهده
                            نمونه صفحات
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 sm:text-base text-sm md:text-base md:pr-5 text-center py-7 w-full md:w-3/4">
                    <p> برای یادگیری زبان انگلیسی به صورت خودآموز و با کتاب های چاپی، پیشنهاد ما این پک
                        ویژه است!</p>
                    <p>مکان رفع اشکال آنلاین رایگان با نویسنده</p>
                    <p>امکان تدریس انگلیسی در لینگومسترز برای زبان آموزان ایرانی و پلتفرم های خارجی برای زبان آموزان بین
                        المللی پس از تسلط کامل به کتاب های طلسم مکالمه و شرکت در آزمون</p>
                </div>
            </div>
        </>
    );
};

export default LandingBook;