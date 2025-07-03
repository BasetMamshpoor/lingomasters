import React from 'react';
import Link from "next/link";
import Chevron from "@icons/chevron-right.svg";
import Arrow5 from "@icons/Arrow-5.svg";
import Arrow6 from "@icons/Arrow-6.svg";

const LearningStart4 = ({path, knowsLevel, onNeedHelp,onBack}) => {
    return (
        <>
            {path === "some" && knowsLevel === "yes" ?
                (<div className="flex flex-col items-center gap-16 w-full px-5">
                    <div className="hidden lg:flex   w-full gap-3">
                        <div
                            className="flex justify-center items-center text-lg text-white bg-primary-950 sm:text-[32px] md:text-[76px]  rounded-l-[40px] px-3 h-[380px]">
                            4
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col justify-between h-80 pt-4 pr-6">
                                <button onClick={onBack} className="flex items-center gap-2">
                                    <Chevron className="w-5 h-5 fill-primary-600"/>
                                    <p className="text-primary-600">بازگشت</p>
                                </button>
                                <div className="flex flex-col gap-6 relative py-5">
                                    <p className="text-3xl">مرحله چهارم</p>
                                    <p className="text-xl whitespace-nowrap">مشاهده پروفایل اساتید</p>
                                    <p className="text-xl whitespace-nowrap">مشاهده دوره های آموزشی</p>
                                    <p className="text-xl whitespace-nowrap">رزرو کلاس و شروع یادگیری</p>
                                    <Arrow5 className="fill-primary-950 w-32 h-36 absolute -bottom-10 -left-44 "/>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-6 ml-10">
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-2xl">چون سطح زبانت رو میدونی</p>
                                    <p className="text-2xl"> پس میتونی کلاس رزرو کنی و یادگیری رو شروع کنی</p>
                                </div>
                                <div className="flex items-center justify-center gap-6">
                                    <Link href="/private-class"
                                          className=" px-12 py-3 w-1/2 flex items-center justify-center text-white bg-primary-600 rounded-md whitespace-nowrap ">انتخاب
                                        کلاس خصوصی</Link>
                                    <Link href="/group-class"
                                          className=" px-12 py-3 w-1/2 flex items-center justify-center text-secondary-500  border border-secondary-500 rounded-md whitespace-nowrap ">انتخاب
                                        کلاس گروهی</Link>
                                </div>
                                <button onClick={onNeedHelp} className="text-primary-500 text-xs">نیاز به مشاوره دارم</button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex lg:hidden  bg-white w-full gap-3">
                        <div
                            className="flex justify-center items-center text-3xl text-white bg-primary-950  rounded-l-[40px] px-3 h-[350px]">
                            4
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col justify-between h-72 pt-4 pr-4">
                                <button onClick={onBack} className="flex items-center gap-2">
                                    <Chevron className="w-5 h-5 fill-primary-600"/>
                                    <p className="text-primary-600">بازگشت</p>
                                </button>
                                <div className="flex flex-col gap-6 relative py-5">
                                    <p className="text-2xl">مرحله چهارم</p>
                                    <p className="text-lg whitespace-nowrap">مشاهده پروفایل اساتید</p>
                                    <p className="text-lg whitespace-nowrap">مشاهده دوره های آموزشی</p>
                                    <p className="text-lg whitespace-nowrap">رزرو کلاس و شروع یادگیری</p>
                                    <Arrow5 className="fill-primary-950 w-32 h-32 absolute -bottom-20 -left-20 "/>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-6 ml-10">
                                <div className="flex flex-col items-center justify-center">
                                    <p>چون سطح زبانت رو میدونی</p>
                                    <p className="text-lg whitespace-nowrap"> پس میتونی کلاس رزرو کنی و یادگیری رو شروع
                                        کنی</p>
                                </div>
                                <div className="flex items-center justify-center gap-6 w-full">
                                    <Link href="/private-class"
                                          className=" px-3 py-3 w-1/2 flex items-center justify-center text-white bg-primary-600 rounded-md whitespace-nowrap text-sm">انتخاب
                                        کلاس خصوصی</Link>
                                    <Link href="/group-class"
                                          className=" px-3 py-3 w-1/2 flex items-center justify-center text-secondary-500 border border-secondary-500 rounded-md whitespace-nowrap text-xs">انتخاب
                                        کلاس گروهی</Link>
                                </div>
                                <button onClick={onNeedHelp} className="text-primary-500 text-xs">نیاز به مشاوره دارم</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:hidden bg-white w-full gap-1">
                        <div
                            className="flex justify-center items-center text-[32px] md:text-[76px] bg-primary-950 text-white rounded-l-[40px] px-3 sm:px-5 h-[420px]">
                            4
                        </div>
                        <div className="flex flex-col justify-between py-5 px-3 h-[460px] w-full">
                            <div className="flex flex-col justify-between gap-5 pt-4 pr-3">
                                <button onClick={onBack} className="flex items-center gap-2">
                                    <Chevron className="w-4 h-4 fill-primary-600"/>
                                    <p className="text-primary-600 text-xs">بازگشت</p>
                                </button>
                                <div className="flex flex-col gap-2 relative py-5">
                                    <p className=" ">مرحله چهارم</p>
                                    <p className="text-sm whitespace-nowrap">مشاهده پروفایل اساتید</p>
                                    <p className="text-sm whitespace-nowrap">مشاهده دوره های آموزشی</p>
                                    <p className="text-sm whitespace-nowrap">رزرو کلاس و شروع یادگیری</p>
                                    <Arrow6 className="fill-primary-950 w-20 h-20 absolute -bottom-12 right-36 "/>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-4 mb-10">
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-sm">چون سطح زبانت رو میدونی</p>
                                    <p className="text-sm whitespace-nowrap"> پس میتونی کلاس رزرو کنی و یادگیری رو شروع
                                        کنی</p>
                                </div>
                                <div className="flex items-center justify-center gap-4">
                                    <Link href="/private-class"
                                          className=" px-3 py-2 text-white bg-primary-600 rounded-md whitespace-nowrap text-xs">انتخاب
                                        کلاس خصوصی</Link>
                                    <Link href="/group-class"
                                          className=" px-3 py-2 text-secondary-500  border border-secondary-500 rounded-md whitespace-nowrap text-xs">انتخاب
                                        کلاس گروهی</Link>
                                </div>
                                <button onClick={onNeedHelp} className="text-primary-500 text-xs">نیاز به مشاوره دارم</button>
                            </div>
                        </div>
                    </div>
                </div>) :
                (<div className="flex flex-col items-center gap-16 w-full px-5">
                    <div className="hidden lg:flex   w-full gap-3">
                        <div
                            className="flex justify-center items-center text-lg text-white bg-primary-950 sm:text-[32px] md:text-[76px]  rounded-l-[40px] px-3 h-[440px]">
                            4
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col gap-20 h-80 pt-4 pr-6">
                                <button onClick={onBack} className="flex items-center gap-2">
                                    <Chevron className="w-5 h-5 fill-primary-600"/>
                                    <p className="text-primary-600">بازگشت</p>
                                </button>
                                <div className="flex flex-col gap-6 relative py-5">
                                    <p className="text-3xl">مرحله چهارم</p>
                                    <p className="text-3xl">انتخاب روش تعیین سطح آنلاین</p>
                                    <Arrow5 className="fill-primary-950 w-32 h-36 absolute -bottom-32 -left-10 "/>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-6 ">
                                <p className="text-3xl">ما سه روش داریم میتونی یکی رو انتخاب کنی!</p>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-lg">تعیین سطح آنلاین با اساتید لینگومسترز</p>
                                    <Link href="/exams/placement"
                                          className=" px-8 py-4 text-white bg-primary-600 rounded-md whitespace-nowrap text-xs">کلیک
                                        کنید</Link>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-lg">تعیین سطح آنلاین با لینگومسترز</p>
                                    <Link href="/"
                                          className=" px-8 py-4 text-white bg-primary-600 rounded-md whitespace-nowrap text-xs">کلیک
                                        کنید</Link>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-lg">تعیین سطح آنلاین دانشگاه کمبریج</p>
                                    <Link href="/"
                                          className=" px-8 py-4 text-white bg-primary-600 rounded-md whitespace-nowrap text-xs">کلیک
                                        کنید</Link>
                                </div>
                                <button onClick={onNeedHelp} className="text-primary-500 text-xs">نیاز به مشاوره دارم</button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex lg:hidden  bg-white w-full gap-3">
                        <div
                            className="flex justify-center items-center text-3xl text-white bg-primary-950  rounded-l-[40px] px-3 h-[450px]">
                            4
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col justify-between h-80 pt-4 pr-4">
                                <button onClick={onBack} className="flex items-center gap-2">
                                    <Chevron className="w-5 h-5 fill-primary-600"/>
                                    <p className="text-primary-600">بازگشت</p>
                                </button>
                                <div className="flex flex-col gap-6 relative py-5">
                                    <p className="text-2xl">مرحله چهارم</p>
                                    <p className="text-xl">انتخاب روش <br/>تعیین سطح آنلاین</p>
                                    <Arrow5 className="fill-primary-950 w-32 h-32 absolute -bottom-32 -left-20 "/>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-5 w-1/2">
                                <p className="text-lg">ما سه روش داریم میتونی یکی رو انتخاب کنی!</p>
                                <div className="flex items-center justify-between w-full">
                                    <p className="">تعیین سطح آنلاین با اساتید لینگومسترز</p>
                                    <Link href="/"
                                          className=" px-2 py-2 text-white bg-primary-600 rounded-md whitespace-nowrap text-xs">کلیک
                                        کنید</Link>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="">تعیین سطح آنلاین با لینگومسترز</p>
                                    <Link href="/"
                                          className=" px-2 py-2 text-white bg-primary-600 rounded-md whitespace-nowrap text-xs">کلیک
                                        کنید</Link>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="">تعیین سطح آنلاین دانشگاه کمبریج</p>
                                    <Link href="/"
                                          className=" px-2 py-2 text-white bg-primary-600 rounded-md whitespace-nowrap text-xs">کلیک
                                        کنید</Link>
                                </div>
                                <button onClick={onNeedHelp} className="text-primary-500 text-xs">نیاز به مشاوره دارم</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:hidden bg-white w-full gap-1">
                        <div
                            className="flex justify-center items-center text-[32px] md:text-[76px] bg-primary-950 text-white rounded-l-[40px] px-3 sm:px-5 h-[420px]">
                            4
                        </div>
                        <div className="flex flex-col justify-between py-5 pr-5 h-[460px] w-full">
                            <div className="flex flex-col justify-between gap-5 pt-4">
                                <button onClick={onBack} className="flex items-center gap-2">
                                    <Chevron className="w-4 h-4 fill-primary-600"/>
                                    <p className="text-primary-600 text-xs">بازگشت</p>
                                </button>
                                <div className="flex flex-col gap-2 relative py-5">
                                    <p>مرحله چهارم</p>
                                    <p className="text-sm">انتخاب روش تعیین سطح آنلاین</p>
                                    <Arrow6 className="fill-primary-950 w-16 h-16 absolute -bottom-9 right-44 "/>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-4 mb-10">
                                <p className="text-sm">ما سه روش داریم میتونی یکی رو انتخاب کنی!</p>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-xs">تعیین سطح آنلاین با اساتید لینگومسترز</p>
                                    <Link href="/"
                                          className=" px-2 py-2 text-white bg-primary-600 rounded-md whitespace-nowrap text-[10px]">کلیک
                                        کنید</Link>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-xs">تعیین سطح آنلاین با لینگومسترز</p>
                                    <Link href="/"
                                          className=" px-2 py-2 text-white bg-primary-600 rounded-md whitespace-nowrap text-[10px]">کلیک
                                        کنید</Link>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-xs">تعیین سطح آنلاین دانشگاه کمبریج</p>
                                    <Link href="/"
                                          className=" px-2 py-2 text-white bg-primary-600 rounded-md whitespace-nowrap text-[10px]">کلیک
                                        کنید</Link>
                                </div>
                                <button onClick={onNeedHelp} className="text-primary-500 text-xs">نیاز به مشاوره دارم</button>
                            </div>
                        </div>
                    </div>
                </div>)}
        </>
    );
};

export default LearningStart4;