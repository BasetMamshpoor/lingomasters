import React, {useState} from 'react';
import {BreadcrumbItem, Breadcrumbs} from "@heroui/react";
import Book from "@icons/book.svg"
import Cart from "pages/exams/placement/Cart.jsx";
import Item from "pages/exams/placement/Item.jsx"
import Image from "next/image";
import Link from "next/link";
import Calendar from "@icons/calendar.svg";

const cart = [
    {
        id: 1,
        title: "تعیین سطح آنلاین  لینگومسترز",
        text: "تعیین سطح همه زبان‌ها\n" +
            "تنها با ۳ مرحله",
    },
    {
        id: 2,
        title: "تعیین سطح آنلاین توسط اساتید لینگومسترز",
        text: "تعیین سطح همه زبان‌ها\n" +
            "تنها با ۴ مرحله",
    },
    {
        id: 3,
        title: "تعیین سطح آنلاین توسط دانشگاه کمبریج",
        text: "تعیین سطح همه زبان‌ها\n" +
            "تنها با ۱ مرحله",
    }
]

const items = [
    {
        id: 0,
        levelDetermination: "✦تعیین سطح آنلاین",
        title: "همین امروز مهارت زبانت رو بسنج!",
        text: "با لینگومسترز در هر زمان و با هر بودجه‌ای میتونی تعیین سطح زبانت را با چند مرحله ساده و سریع انجام بدی.",
        ul: [
            "انتخاب زبان هدف",
            "انتخاب مهارت ‌( گفتاری - شنیداری - نوشتاری - خواندن و درک متون )",
            "انتخاب گروه سنی ( کودک - نوجوان - بزرگسال )",
            "انتخاب سطح تخمینی ( مبتدی - متوسط - پیشرفته )",
            "انتخاب استاد از اساتید لینگومسترز",
        ],
        button: "پلن‌های تعیین سطح لینگومسترز",
    },
    {
        id: 1,
        levelDetermination: "✦تعیین سطح آنلاین توسط لینگومسترز",
        title: "تعیین سطح همه زبان‌ها تنها با ۳ مرحله",
        text: "",
        ul: [
            "انتخاب زبان هدف",
            "انتخاب گروه سنی ( کودک - نوجوان - بزرگسال )",
            "انتخاب تخمینی سطح زبان( مبتدی - متوسط - پیشرفته )",
            "نمره‌دهی تعیین سطح آنلاین توسط لینگومسترز",
        ],
        titleImage: "ارزیابی تعیین سطح آنلاین توسط لینگومسترز",
        image: "/images/exams-cart.png",
        button: "ادامه",
    },
    {
        id: 2,
        levelDetermination: "✦تعیین سطح آنلاین توسط اساتید لینگومسترز",
        title: "تعیین سطح همه زبان‌ها تنها با ۴ مرحله",
        ul: [
            "انتخاب زبان هدف",
            "انتخاب مهارت ‌( گفتاری - شنیداری - نوشتاری - خواندن و درک متون )",
            "انتخاب گروه سنی ( کودک - نوجوان - بزرگسال )",
            "انتخاب استاد از اساتید لینگومسترز",
            "نمره‌دهی تعیین سطح آنلاین توسط اساتید لینگومسترز",
        ],
        titleImage: "ارزیابی تعیین سطح آنلاین توسط لینگومسترز",
        button: "ادامه",
    },
    {
        id: 3,
        levelDetermination: "✦تعیین سطح آنلاین توسط دانشگاه کمبریج",
        attention: "توجه: توجه داشته باشید که پس از اتمام آزمون تعیین سطح آنلاین دانشگاه کمبریج نتیجه آزمون بلافاصله به شما نمایش داده می‌شود و شما باسد این نتیجه را ذخیره کنید، لینگومسترز به نتیجه این آزمون دسترسی نخواهد داشت.",
        title: "تعیین سطح زبان انگلیسی تنها با ۱ مرحله",
        text: "در این تعیین سطح شما می‌توانید هدف خود را از تعیین سطح زبان انگلیسی انتخاب کنید و با توجه به چارچوب‌های دانشگاه کمبریج سطح زبان انگلیسی خود را سریعا تشخیص دهید.",
        ul: [
            "انتخاب آزمون انگلیسی (عمومی - مدرسه - تجاری - کودکان)",
        ],
        titleImage: "نمره‌دهی آزمون دانشگاه کمبریج",
        image: "/images/exams-cart.png",
        button: "ادامه",
    },
]
const Index = () => {
    const [selectedId, setSelectedId] = useState(0);

    const handleClick = (id) => {
        if (selectedId === id) {
            setSelectedId(0);
        } else {
            setSelectedId(id);
        }
    }
    return (
        <>
            <div dir="rtl" className="container flex flex-col gap-10 ">
                <Breadcrumbs
                    separator='/'
                    classNames={{list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600'}}
                    itemClasses={{
                        separator: "px-2 text-natural_gray-600"
                    }}>
                    <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                    <BreadcrumbItem>آزمون ها</BreadcrumbItem>
                    <BreadcrumbItem>آزمون تعیین سطح</BreadcrumbItem>
                </Breadcrumbs>
                <div className="hidden sm:flex gap-2 justify-center">
                    <Book className="w-8 h-8"/>
                    <p className="text-2xl">آزمون تعیین سطح</p>
                </div>
                <div className="flex flex-col md:flex-row items-c enter justify-between gap-5">
                    <div className="flex flex-col gap-6 order-2 md:order-1">
                        {cart.map(item => <Cart key={item.id} {...item} handleClick={handleClick}/>)}
                    </div>
                    <div className="order-1 md:order-2 flex flex-col md:w-5/6">
                        {items.filter(item => item.id === selectedId)
                            .map(item => (<Item key={item.id} {...item}/>))}
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-20">
                    <p className="text-3xl">چرا تعیین سطح لینگومسترز</p>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="relative flex justify-center h-56">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0">
                            </div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <Image unoptimized src="/images/data.png" width={60} height={60} alt=""
                                       className="absolute -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-10">
                                    <p className="text-sm sm:text-base md:text-lg">راحت</p>
                                    <p className="text-xs sm:text-sm md:text-base">در لینگومسترز به صورت ساده و راحت میتونی آزمون تعیین سطح را به صورت آنلاین در هر مکان و هر زمان انجام بده </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-center h-56">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0">
                            </div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <Image unoptimized src="/images/web-conference.png" width={60} height={60} alt=""
                                       className="absolute -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-10">
                                    <p className="text-sm sm:text-base md:text-lg">سریع</p>
                                    <p className="text-xs sm:text-sm md:text-base">با لینگومسترز نتیجه تعیین سطحت رو با انتخاب هر کدام از سه روش تعیین سطح، پس از آزمون می‌تونی داشته باشی.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-center h-56">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0">
                            </div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <Image unoptimized src="/images/money-Home-page.png" width={60} height={60} alt=""
                                       className="absolute -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-10">
                                    <p className="text-sm sm:text-base md:text-lg">مقرون به صرفه</p>
                                    <p className="text-xs sm:text-sm md:text-base">با هر بودجه‌ای که داری میتونی با لینگومسترز تعیین سطح کنی!  حتی به صورت رایگان</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-[url('/images/Achievements2.svg')] rounded-2xl flex flex-col items-center gap-10 pt-12 px-12 w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
                    <p className="text-sm font-medium sm:text-xl sm:font-bold md:font-medium md:text-3xl text-white">پلن‌های تعیین سطح زبان لینگومسترز</p>
                    <div className="flex flex-col sm:flex-row items-center justify-end gap-5 pb-7">
                        <div className="rounded-2xl shadow-lg border-[10px] border-[rgba(255,255,255,0.10)]">
                            <Link href="/"
                                  className="flex flex-col items-center relative justify-end rounded-2xl overflow-hidden shrink-0 w-full">
                                <Image unoptimized src="/images/english-book.png" alt="" width={100} height={100} className="w-full h-full "/>
                                <div className="absolute shadow-lg backdrop-filter w-full ">
                                    <div className="flex flex-col gap-4 p-4 backdrop-filter backdrop-blur-xl w-full">
                                        <p className="text-sm sm:text-xl text-white line-clamp-1">زبان خارجی را در کجا استفاده کنیم؟</p>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 fill-secondary-300"/>
                                            <p className="text-xs text-white">۲۹ اردیبهشت ۱۴۰۳</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="rounded-2xl shadow-lg border-[10px] border-[rgba(255,255,255,0.10)]">
                            <Link href="/"
                                  className="flex flex-col items-center relative justify-end rounded-2xl overflow-hidden shrink-0 w-full">
                                <Image unoptimized src="/images/futuristic-business.png" alt="" width={100} height={100} className="w-full h-full"/>
                                <div className="absolute shadow-lg backdrop-filter w-full ">
                                    <div className="flex flex-col gap-4 p-4 backdrop-filter backdrop-blur-xl w-full">
                                        <p className="text-sm sm:text-xl text-white line-clamp-1">چطور برای آزمون زبان خود از هوش مصنوعی استفاده کنیم؟</p>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 fill-secondary-300"/>
                                            <p className="text-xs text-white">۲۹ اردیبهشت ۱۴۰۳</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="rounded-2xl shadow-lg border-[10px] border-[rgba(255,255,255,0.10)] sm:hidden lg:block">
                            <Link href="/"
                                  className="flex flex-col items-center relative justify-end rounded-2xl overflow-hidden shrink-0 w-full">
                                <Image unoptimized src="/images/english-book.png" alt="" width={100} height={100} className="w-full h-full "/>
                                <div className="absolute shadow-lg backdrop-filter w-full ">
                                    <div className="flex flex-col gap-4 p-4 backdrop-filter backdrop-blur-xl w-full">
                                        <p className="text-sm sm:text-xl text-white line-clamp-1">زبان خارجی را در کجا استفاده کنیم؟</p>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 fill-secondary-300"/>
                                            <p className="text-xs text-white">۲۹ اردیبهشت ۱۴۰۳</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;