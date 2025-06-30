import React from 'react';
import Image from "next/image";
import Link from "next/link";

const LandingBook = () => {
    return (
        <>
            <div
                className="flex items-center justify-between gap-4 w-full bg-[#F0F6FE99] relative px-5">
                <div className="w-full">
                    <div className="rounded-r-3xl w-full z-0">
                        <Image unoptimized src="/images/Frame.png" alt="" width={100} height={100}
                               className="absolute w-36 sm:w-72 md:w-96 z-20 top-0"/>
                        <Image unoptimized src="/images/Union.png" alt="" width={100} height={100}
                               className="absolute w-36 sm:w-72 md:w-96 z-10 top-0"/>
                        <Image unoptimized src="/images/product.png" alt="" width={100} height={100}
                               className="absolute w-32 top-0 sm:right-5 sm:w-48 md:w-60 z-30 md:top-10 md:right-14"/>
                    </div>
                    <div
                        className="centerOfParent gap-2 sm:gap-4 md:gap-6 px-2 py-2 absolute z-40 -bottom-10 right-5 sm:right-20 md:right-80 bg-white rounded-xl">
                        <Link href="https://store.lingomastres.ir"
                              className="text-xs sm:text-base self-end px-4 md:px-12 py-2 text-white bg-primary-600 border-1.5  border-primary-600 rounded-md whitespace-nowrap">
                            خرید کتاب ها </Link>
                        <a href={'/public/book samples.pdf'} download='/public/book samples.pdf'
                           className="text-xs sm:text-base self-end px-4 py-2 text-secondary-500 border-1.5  border-secondary-500 rounded-md whitespace-nowrap">مشاهده
                            نمونه صفحات
                        </a>
                    </div>
                </div>
                <div className="centerOfParent flex-col gap-6 sm:text-base text-sm md:text-lg pr-3 text-center py-6">
                    <p className=""> برای یادگیری زبان انگلیسی به صورت خودآموز و با کتاب های چاپی، پیشنهاد ما این پک
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