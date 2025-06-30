import React from 'react';
import Link from "next/link";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const HeroBanner = () => {
    return (
        <>
            <div className="py-6 sm:px-12 px-3 flex items-center bg-success-200 justify-between w-full">
                <p className="text-primary-900 w-2/3 sm:text-sm text-xs font-semibold">دعوت به تدریس از زبان آموزان سطح متوسط به بالا و پیشرفته پس از شرکت در دوره‌های آموزشی لینگومسترز و
                    دریافت گواهینامه‌های پایان دوره، در پلتفرم لینگومسترز و پلتفرم‌های بین المللی!</p>
                <Link href={process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP} className="border sm:px-6 px-2 font-semibold sm:text-sm text-xs py-2 rounded border-primary-950 text-primary-900 whitespace-nowrap" target="_blank">کلیک کنید</Link>
            </div>
        </>
    );
};

export default HeroBanner;