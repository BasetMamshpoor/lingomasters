import React, {useState,} from 'react';
import {BreadcrumbItem, Breadcrumbs} from "@heroui/react";
import Book from "@icons/book.svg"
import Cart from "@/features/exams/Placement/Cart";
import Item from "@/features/exams/Placement/Item"
import Image from "next/image";
import LingomastersItem from "@/features/exams/Placement/LingomastersItem";
import ProfessorItem from "@/features/exams/Placement/ProfessorItem";
import CambridgeItem from "@/features/exams/Placement/CambridgeItem";

const cart = [
    {
        id: 1,
        title: "تعیین سطح آنلاین ",
        title1: "لینگومسترز",
        text: "تعیین سطح همه زبان‌ها",
        text1: "تنها با ۳ مرحله",
    },
    {
        id: 2,
        title: "تعیین سطح آنلاین توسط",
        title1: "اساتید لینگومسترز",
        text: "تعیین سطح همه زبان‌ها",
        text1: "تنها با ۴ مرحله",
    },
    {
        id: 3,
        title: "تعیین سطح آنلاین توسط ",
        title1: "دانشگاه کمبریج",
        text: "تعیین سطح همه زبان‌ها\n",
        text1: "تنها با ۱ مرحله",
    }
]

const items = [
    {
        id: 0,
        component: Item
    },
    {
        id: 1,
        component: LingomastersItem
    },
    {
        id: 2,
        component: ProfessorItem
    },
    {
        id: 3,
        component: CambridgeItem
    },
]
const Index = () => {
    const [selectedId, setSelectedId] = useState(0);

    const handleClick = (id) => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        if (selectedId === id) {
            setSelectedId(0);

        } else {
            setSelectedId(id);
        }
    }
    const selectedItem = items.find(item => item.id === selectedId);
    return (
        <>
            <div dir="rtl" className="container flex flex-col gap-10 w-full">
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
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
                    <div className="flex flex-col gap-6 order-2 md:order-1">
                        {cart.map(item => <Cart key={item.id} {...item} handleClick={handleClick}/>)}
                    </div>
                    <div className="order-1 md:order-2 flex flex-col w-full centerOfParent">
                        <selectedItem.component/>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-20">
                    <p className="text-3xl">چرا تعیین سطح لینگومسترز</p>
                    <div
                        className="grid items-center justify-center gap-y-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative flex justify-center h-56">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0">
                            </div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <Image src="/images/data.png" width={60} height={60} alt=""
                                       className="absolute -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-10">
                                    <p className="text-sm sm:text-base md:text-lg">راحت</p>
                                    <p className="text-xs sm:text-sm md:text-base">در لینگومسترز به صورت ساده و راحت
                                        میتونی آزمون تعیین سطح را به صورت آنلاین در هر مکان و هر زمان انجام بده </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-center h-56">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0">
                            </div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <Image src="/images/web-conference.png" width={60} height={60} alt=""
                                       className="absolute -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-10">
                                    <p className="text-sm sm:text-base md:text-lg">سریع</p>
                                    <p className="text-xs sm:text-sm md:text-base">با لینگومسترز نتیجه تعیین سطحت رو با
                                        انتخاب هر کدام از سه روش تعیین سطح، پس از آزمون می‌تونی داشته باشی.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center h-56">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0">
                            </div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <Image src="/images/money-Home-page.png" width={60} height={60} alt=""
                                       className="absolute -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-10">
                                    <p className="text-sm sm:text-base md:text-lg">مقرون به صرفه</p>
                                    <p className="text-xs sm:text-sm md:text-base">با هر بودجه‌ای که داری میتونی با
                                        لینگومسترز تعیین سطح کنی! حتی به صورت رایگان</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className=" bg-[url('/images/Achievements.svg')] rounded-2xl flex flex-col items-center gap-10 pt-12 w-full mb-28 md:h-[350px] lg:h-[350px] p-6">
                    <p className="text-sm font-medium sm:text-xl sm:font-bold md:font-medium md:text-3xl text-white">پلن‌های
                        تعیین سطح زبان لینگومسترز</p>
                    <div
                        className="flex flex-col md:flex-row items-center justify-between gap-5 lg:justify-center lg:gap-10 pb-7 w-full">
                        <div
                            className="flex flex-col justify-center p-4 lg:p-6 gap-14 items-center bg-white border-[10px] border-primary-200 rounded-2xl w-full md:min-w-[200px] lg:max-w-[302px]">
                            <div className="flex flex-col items-center justify-center gap-6 md:gap-10 w-full lg:px-4">
                                <div
                                    className="flex flex-row gap-1 md:flex-col text-sm font-bold md:font-medium md:text-lg lg:text-2xl text-primary-950 whitespace-nowrap">
                                    <p>تعیین سطح آنلاین </p>
                                    <p>دانشگاه کمبریج</p>
                                </div>
                                <div
                                    className="text-center text-xs md:text-base lg:text-lg text-natural_gray-950 whitespace-nowrap">
                                    <p>تعیین سطح زبان انگلیسی </p>
                                    <p>تنها در ۱ مرحله</p>
                                </div>
                            </div>
                            <button onClick={() => handleClick(3)}
                                    className="px-4 py-2 text-white text-base bg-primary-600 rounded w-full">بزن
                                بریم
                            </button>
                        </div>
                        <div
                            className="flex flex-col justify-center p-4 lg:p-6 gap-14 items-center bg-white border-[10px] border-primary-200 rounded-2xl w-full md:min-w-[200px] lg:max-w-[302px]">
                            <div
                                className="flex flex-col items-center justify-center gap-6 md:gap-10 w-full lg:px-4 whitespace-nowrap">
                                <div
                                    className="flex flex-row gap-1 md:flex-col text-primary-950 text-sm font-bold md:font-medium md:text-lg lg:text-2xl">
                                    <p>تعیین سطح آنلاین با</p>
                                    <p>اساتید لینگومسترز</p>
                                </div>
                                <div
                                    className="text-center text-xs md:text-base lg:text-lg text-natural_gray-950">
                                    <p>تعیین سطح همه زبان‌ها</p>
                                    <p>تنها با ۴ مرحله</p>
                                </div>
                            </div>
                            <button onClick={() => handleClick(2)}
                                    className="px-4 py-2 text-white text-base bg-primary-600 rounded w-full">بزن
                                بریم
                            </button>
                        </div>
                        <div
                            className="flex flex-col justify-center p-4 lg:p-6 gap-14 items-center bg-white border-[10px] border-primary-200 rounded-2xl w-full md:min-w-[200px] lg:max-w-[302px]">
                            <div className="flex flex-col items-center justify-center gap-6 md:gap-10 w-full px-4">
                                <div
                                    className="flex flex-row gap-1 md:flex-col text-sm font-bold md:font-medium md:text-lg lg:text-2xl text-primary-950 whitespace-nowrap">
                                    <p>تعیین سطح آنلاین </p>
                                    <p>با لینگومسترز</p>
                                </div>
                                <div
                                    className="text-center text-xs md:text-base lg:text-lg text-natural_gray-950 whitespace-nowrap">
                                    <p>تعیین
                                        سطح همه زبان‌ها</p>
                                    <p>تنها
                                        با 3 مرحله</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleClick(1)}
                                className="px-4 py-2 text-white text-base bg-primary-600 rounded w-full">بزن
                                بریم
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;