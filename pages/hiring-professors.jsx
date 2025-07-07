import React from 'react';
import {BreadcrumbItem, Breadcrumbs} from "@heroui/react";
import Private from "@icons/users.svg";
import Chevron from "@icons/chevron-right.svg"
import Link from "next/link";
import Image from "next/image";
import Verified from "@icons/verified.svg";
import Income from "@/features/Landing/Income";


const HiringProfessors = () => {
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
                    <BreadcrumbItem>استخدام اساتید</BreadcrumbItem>
                </Breadcrumbs>
                <div className="flex flex-col lg:items-center">
                    <div className="flex items-center gap-3">
                        <Private className="hidden lg:flex w-10 h-10 fill-primary-700"/>
                        <Chevron className="flex lg:hidden fill-primary-700"/>
                        <p className="text-sm md:text-base lg:text-2xl">استخدام اساتید</p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full">
                        <div className="flex flex-col gap-6 md:gap-10 lg:gap-40 order-2 lg:order-1 lg:w-1/2">
                            <div className="flex flex-col gap-2 md:gap-4 lg:gap-10">
                                <p className="text-base font-bold md:font-black md:text-xl lg:font-medium lg:text-3xl">اساتید
                                    محترم به جمع مدرسان ما بپیوندید.</p>
                                <p className="text-xs md:text-base lg:text-lg">شما میتوانید با توجه به شرایط خودتون تو
                                    سایت ما درس بدید و برنامه کلاسی خودتون رو داشته باشید و در/امد کسب کنید. ما تو این
                                    سایت کلی زبان مختلف داریم که تو هر کدومشون که توانایی دارید می توانید مدرس بشید.</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-[10px] md:text-sm lg:text-lg">اگر می خوای درس بدی شروع کن!</p>
                                <Link href=""
                                      className="px-4 py-2 lg:px-6 lg:py-3 flex items-center justify-center rounded-md bg-primary-600 text-xs md:text-md lg:text-base text-white">
                                    شروع تدریس
                                </Link>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <Image unoptimized src="/images/intresect.png" alt="" width={100} height={100}
                                   className="w-full h-full"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-20 items-center">
                    <div className="flex items-center gap-1 lg:gap-6">
                        <Verified className="fill-primary-800 w-5 h-5 md:w-6 md:h-6 lg:w-10 lg:h-10"/>
                        <p className="text-sm font-bold md:text-lg lg:font-medium lg:text-3xl">مزایایی که لینگومسترز
                            برای اساتید داره</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-6 w-full">
                        <div className="relative mx-auto h-56 flex-grow w-full">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0"></div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <Image src="/images/cheque_Home-page.png" width={100} height={100}
                                       alt="cheque_Home-page"
                                       className="absolute w-[60px] h-[60px] -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-4 lg:gap-10">
                                    <p className="text-sm font-bold lg:font-medium lg:text-lg">ساعت کاری شناور و بدون
                                        محدودیت</p>
                                    <p className="text-xs md:text-sm lg:text-base">زمان کلاس ها با توجه به وقت آزاد
                                        اساتید برگزار میشود.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative mx-auto h-56 flex-grow w-full">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0"></div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <Image src="/images/cheque_Home-page.png" width={100} height={100}
                                       alt="cheque_Home-page"
                                       className="absolute w-[60px] h-[60px] -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-4 lg:gap-10">
                                    <p className="text-sm font-bold lg:font-medium lg:text-lg">درآمدی نامحدود در صورت
                                        عملکرد خوب</p>
                                    <p className="text-xs md:text-sm lg:text-base">سقفی برای درآمد اساتید وجود ندارد و
                                        آنها با توجه به عملکرد خوب خودشان درآمد کسب می کنند.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-20">
                    <div className="flex items-center gap-3 w-full justify-center">
                        <Private className=" w-6 h-6 lg:w-10 lg:h-10 fill-primary-700"/>
                        <p className="text-sm md:text-base lg:text-2xl">نحوه ورود اساتید</p>
                    </div>
                    <p className="text-xs md:text-sm lg:text-lg">۱. اول از همه دکمه ورود اساتید رو میزنید و صفحه زیر
                        براتون باز میشه.</p>
                    <Image unoptimized src="/images/ProfessorRegistration.png" alt="ProfessorRegistration" width={100}
                           height={100}
                           className="w-full"/>
                    <div className="flex flex-col gap-5">
                        <p className="text-xs md:text-sm lg:text-lg">تمام اطلاعات بالا رو به صورت کامل پر میکنید و دکمه
                            ثبت رو میزنید. این اطلاعات برای ادمین ارسال میشن تا بررسی بشن و شما وارد پنلتون میشید. تا
                            زمانی که ادمین اطلاعات شما رو تایید کنه شما فرصت دارید تا پروفایلتونو تکمیل کنید.تمام
                            اطلاعات که هست را کاملا پر میکنید تا بتونید احراز هویت بشید و بتونید به پنلتون به طور کامل
                            دسترسی داشته باشید.</p>
                        <p className="text-xs md:text-sm lg:text-lg">توجه داشته باشید که اگر اطلاعاتتون به صورت کامل پر
                            نشه ما بهتون اجازه دسترسی به کلاس ها و پنل رو نمیتونیم بدیم.</p>
                        <p className="text-xs md:text-sm lg:text-lg">بعد اینکه ادمین اطلاعات رو تایید کرد شما کاملا به
                            پنلتون دسترسی دارید و می تونید کلاس هاتون رو معرفی کنید و تقویم آموزشی خودتون رو درست کنید و
                            روزها و ساعت هایی که هستید رو تو پنلتون قرار بدید.</p>
                        <p className="text-xs md:text-sm lg:text-lg">یه بخش هم داریم برای اساتید فعال سایتمون که برامون
                            ویدیوهای آموزشی بگیرن و فیلم بگیرن از خودشون تا بیشتر دیده بشن تو سایت ما و کلی هم هدیه از
                            ما دریافت کنند.</p>
                        <p className="text-xs md:text-sm lg:text-lg">شما می تونید کد معرف رو برای همکارای دیگه بفرستید و
                            مارو بهشون معرفی کنید و از ما هدیه دریافت کنید و همچنین می توانید برای کلاس هاتون تخفیف ویژه
                            بزارید تا استقبال بیشتری از کلاس هاتون بشه.</p>
                        <p className="text-xs md:text-sm lg:text-lg">ما کلی امتیاز ویژه به اساتیدمون میدیم که اگه میخوای
                            ازشون بهره مند بشی همین الان همکاریتو با ما شروع کن!!!</p>

                        <div className="flex items-center justify-center w-full">
                            <Link href=""
                                  className="px-4 py-2 lg:px-6 lg:py-3 w-fit flex items-center justify-center rounded-md bg-primary-600 text-xs md:text-md lg:text-base text-white">
                                ثبت نام اساتید
                            </Link>
                        </div>
                    </div>
                </div>
                <Income />
            </div>
        </>
    );
};

export default HiringProfessors;