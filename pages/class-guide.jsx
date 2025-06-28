import React from 'react';
import Laptop from '@icons/laptop.svg';
import {BreadcrumbItem, Breadcrumbs, input} from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import Calendar from "@icons/calendar.svg"
import Chevron from "@icons/chevron-right.svg";
import Task from "@icons/task-square.svg";

const ClassGuide = () => {
    return (
        <>
            <div dir="rtl" className="container flex flex-col gap-20 ">
                <Breadcrumbs
                    separator='/'
                    classNames={{list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600'}}
                    itemClasses={{
                        separator: "px-2 text-natural_gray-600"
                    }}>
                    <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                    <BreadcrumbItem>راهنمای کلاس ها</BreadcrumbItem>
                </Breadcrumbs>
                <div className="flex flex-col sm:gap-20 gap-8">
                    <div className="flex gap-2">
                        <Link href="/" className="sm:hidden flex gap-2 items-center">
                            <Chevron className=" w-5 h-5"/>
                            <p className="text-lg">راهنمای کلاس های آنلاین</p>
                        </Link>
                        <div className="hidden sm:flex gap-2 items-center mx-auto ">
                            <Laptop className=" w-8 h-8"/>
                            <p className="text-2xl">راهنمای کلاس های آنلاین</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2">
                        <Image unoptimized width={100} height={100} alt={"image"} className="w-full h-full "
                               src="/images/class-guide.png"/>
                        <div className="flex flex-col gap-24 ">
                            <p className="text-sm sm:text-xl">
                                ما در لینگومسترز کلای های حضوری و آنلاین داریم.
                                <br/>
                                لینگومسترز کلاس های آنلاین خصوصی و گروهی خود را در بستر نرم افزارهای VooV, Skype, Zoom و
                                Google Meet اجرا میکند.
                                <br/>
                                شما می توانید با نصب هر یک از این برنامه ها از کلاس های ما استفاده کنید و در فضای آنلاین
                                به
                                راحتی با اساتید و همکلاسی های خود در ارتباط باشید.
                            </p>
                            <div className="flex items-center gap-4 mx-auto ">
                                <Link href="/private-class"
                                      className="px-6 py-3 text-white bg-primary-600 border-1.5  border-primary-600 rounded-md">کلاس
                                    های آنلاین خصوصی</Link>
                                <Link href="/group-class"
                                      className="px-6 py-3 text-secondary-500 rounded-md border-1.5 border-secondary-500">کلاس
                                    های آنلاین گروهی</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-20">
                    <div className="flex items-center gap-2 m-auto">
                        <Laptop className="w-8 h-8"/>
                        <p className="text-lg sm:text-2xl ">ویژگی کلاس زبان آنلاین</p>
                    </div>
                    <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="relative mx-auto h-56">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0"></div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <Image unoptimized src="/images/class-gluide-box.png" width={60} height={60} alt=""
                                       className="absolute -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-10">
                                    <p className="text-lg">آسودگی با تکنولوژی</p>
                                    <p>یادگیری بی‌دغدغه زبان انگلیسی به کمک تکنولوژی در فضای امن</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative mx-auto h-56">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0"></div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <Image unoptimized src="/images/class-gluide-web.png" width={60} height={60} alt=""
                                       className="absolute -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-10">
                                    <p className="text-lg">جلسات آفلاین و آنلاین</p>
                                    <p>شما می توانید ضبط کلاس های خود را بعد از مدتی تماشا کنید</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative mx-auto h-56">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0"></div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <Image unoptimized src="/images/class-gluide-box.png" width={60} height={60} alt=""
                                       className="absolute -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-10">
                                    <p className="text-lg">یادگیری در همه جا</p>
                                    <p>شرکت در کلاس‌ها از هر مکانی و دسترسی به تمامی منابع کلاس</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-20">
                    <div className="flex items-center gap-2 m-auto">
                        <Calendar className="w-8 h-8 fill-primary-700"/>
                        <p className="text-lg sm:text-2xl">تقویم آموزشی آنلاین</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div className="flex flex-col gap-24 ">
                            <p className="text-base sm:text-xl">
                                ما در لینگومسترز کلای های حضوری و آنلاین داریم. <br/>
                                لینگومسترز کلاس های آنلاین خصوصی و گروهی خود را در بستر نرم افزارهای VooV, Skype, Zoom و
                                Google Meet اجرا میکند. <br/>
                                شما می توانید با نصب هر یک از این برنامه ها از کلاس های ما استفاده کنید و در فضای آنلاین
                                به
                                راحتی با اساتید و همکلاسی های خود در ارتباط باشید. </p>
                            <div className="flex items-center gap-4 ">
                                <Link href="/private-class"
                                      className="px-6 py-3 text-white bg-primary-600 border-1.5  border-primary-600 rounded-md">رزرو
                                    کلاس خصوصی</Link>
                            </div>
                        </div>
                        <Image unoptimized width={50} height={50} alt={"image"} className="w-full h-full "
                               src="/images/class-gluide-longomasters.png"/>
                    </div>
                </div>
                <p className="text-base sm:text-xl">برای شرکت در کلاس های گروهی از طریق صفحه کلاس های گروهی می توانید
                    دوره مورد نظر خود را انتخاب کنید که دوره های ما در 3 حالت زیر برگزار میشود.</p>
                <div className="flex flex-col gap-6 p-5">
                    <Image unoptimized width={100} height={100} alt="" src="/images/class-gluide-Frame.png"
                           className="w-full h-full hidden sm:flex"/>
                    <Image unoptimized width={100} height={100} alt=""
                           src="/images/class-gluide-longomasters-mobile.png"
                           className="w-full h-full  flex sm:hidden"/>
                    <Image unoptimized width={100} height={100} alt=""
                           src="/images/class-gluide-longomasters--mobile.png"
                           className="w-full h-full  flex sm:hidden"/>
                </div>
                <div className="flex lg:items-center justify-between gap-6 lg:flex-row flex-col">
                    <p className="text-2xl">برنامه این دوره ها بر اساس برنامه استاد چیده میشود.</p>
                    <Link href="/group-class"
                          className="self-end px-6 text-center py-2 w-44 text-white bg-primary-600 border-1.5  border-primary-600 rounded-md">رزرو
                        کلاس گروهی</Link>
                </div>
                {/*<div className="flex flex-col gap-20">*/}
                {/*    <div className="flex items-center gap-2 m-auto">*/}
                {/*        <Laptop className="w-8 h-8 fill-primary-700"/>*/}
                {/*        <p className="text-2xl">برنامه های کلاس آنلاین</p>*/}
                {/*    </div>*/}
                {/*    <div className="grid grid-cols-1 py-4 px-10 gap-6 bg-primary-50 sm:grid-cols-2 lg:grid-cols-4">*/}
                {/*        <div className="flex flex-col items-center gap-3">*/}
                {/*            <p className="text-xl">برنامه Zoom</p>*/}
                {/*            <div className="flex flex-col items-center gap-3">*/}
                {/*                <div className="flex gap-6 items-center">*/}
                {/*                    <p className="text-sm">برای زبان آموز</p>*/}
                {/*                    <Link href="/public" className="text-primary-500">عنوان</Link>*/}
                {/*                </div>*/}
                {/*                <div className="flex gap-6 items-center">*/}
                {/*                    <p className="text-sm">برای اساتید</p>*/}
                {/*                    <Link href="/public" className="text-primary-500">عنوان</Link>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="flex flex-col items-center gap-3">*/}
                {/*            <p className="text-xl">برنامه Skype</p>*/}
                {/*            <div className="flex flex-col items-center gap-3">*/}
                {/*                <div className="flex gap-6 items-center">*/}
                {/*                    <p className="text-sm">برای زبان آموز</p>*/}
                {/*                    <Link href="/public" className="text-primary-500">عنوان</Link>*/}
                {/*                </div>*/}
                {/*                <div className="flex gap-6 items-center">*/}
                {/*                    <p className="text-sm">برای اساتید</p>*/}
                {/*                    <Link href="/public" className="text-primary-500">عنوان</Link>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="flex flex-col items-center gap-3">*/}
                {/*            <p className="text-xl">برنامه VooV</p>*/}
                {/*            <div className="flex flex-col items-center gap-3">*/}
                {/*                <div className="flex gap-6 items-center">*/}
                {/*                    <p className="text-sm">برای زبان آموز</p>*/}
                {/*                    <Link href="/public" className="text-primary-500">عنوان</Link>*/}
                {/*                </div>*/}
                {/*                <div className="flex gap-6 items-center">*/}
                {/*                    <p className="text-sm">برای اساتید</p>*/}
                {/*                    <Link href="/public" className="text-primary-500">عنوان</Link>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="flex flex-col items-center gap-3">*/}
                {/*            <p className="text-xl">برنامه Google Meet</p>*/}
                {/*            <div className="flex flex-col items-center gap-3">*/}
                {/*                <div className="flex gap-6 items-center">*/}
                {/*                    <p className="text-sm">برای زبان آموز</p>*/}
                {/*                    <Link href="/public" className="text-primary-500">عنوان</Link>*/}
                {/*                </div>*/}
                {/*                <div className="flex gap-6 items-center">*/}
                {/*                    <p className="text-sm">برای اساتید</p>*/}
                {/*                    <Link href="/public" className="text-primary-500">عنوان</Link>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
};

export default ClassGuide;