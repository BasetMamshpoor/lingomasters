import React from 'react';
import Question from "@icons/question-circle.svg";
import Arrow5 from "@icons/Arrow-5.svg";
import Arrow6 from "@icons/Arrow-6.svg";
import Image from "next/image";
import Link from "next/link";
import Chevron from "@icons/chevron-right.svg"

const LearningStart3 = ({path, onSelect,onBack}) => {
    return (
        <>
            {path === "none" ? (<div className="flex flex-col items-center gap-16 w-full px-5">
                <div className="hidden lg:flex  bg-primary-950 w-full gap-3">
                    <div
                        className="flex justify-center items-center text-lg sm:text-[32px] md:text-[76px] bg-white rounded-l-[40px] px-3 h-[440px]">
                        3
                    </div>
                    <div className="flex justify-between w-full pr-6 pt-3">
                        <div className="flex flex-col justify-between h-80 pt-4">
                            <button onClick={onBack}  className="flex items-center gap-2">
                                <Chevron className="w-5 h-5 fill-white"/>
                                <p className="text-white">بازگشت</p>
                            </button>
                            <div className="flex flex-col gap-6 relative py-5">
                                <p className="text-3xl text-white">مرحله سوم</p>
                                <p className="text-xl text-white whitespace-nowrap">مشاهده پروفایل اساتید</p>
                                <p className="text-xl text-white whitespace-nowrap">مشاهده دوره های آموزشی</p>
                                <p className="text-xl text-white whitespace-nowrap">رزرو کلاس و شروع یادگیری</p>
                                <Arrow5 className="fill-white w-32 h-36 absolute -bottom-5 -left-32 "/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 ml-10">
                            <p className="text-3xl text-white">چون هیچی بلد نیستی باید از صفر شروع کنی</p>
                            <div className="flex items-center justify-center gap-6">
                                <Link href="/private-class"
                                      className=" px-12 py-3 w-1/3 flex items-center justify-center text-white bg-primary-600 rounded-md whitespace-nowrap ">انتخاب
                                    کلاس خصوصی</Link>
                                <Link href="/group-class"
                                      className=" px-12 py-3 w-1/3 flex items-center justify-center text-white  border border-white rounded-md whitespace-nowrap ">انتخاب
                                    کلاس گروهی</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex lg:hidden  bg-primary-950 w-full gap-3">
                    <div
                        className="flex justify-center items-center text-3xl bg-white rounded-l-[40px] px-3 h-[570px]">
                        3
                    </div>
                    <div className="flex justify-between w-full pr-5 pt-3">
                        <div className="flex flex-col justify-between h-96 pt-4">
                            <button onClick={onBack}  className="flex items-center gap-2">
                                <Chevron className="w-5 h-5 fill-white"/>
                                <p className="text-white">بازگشت</p>
                            </button>
                            <div className="flex flex-col gap-6 relative py-5">
                                <p className="text-2xl text-white">مرحله سوم</p>
                                <p className="text-lg text-white whitespace-nowrap">مشاهده پروفایل اساتید</p>
                                <p className="text-lg text-white whitespace-nowrap">مشاهده دوره های آموزشی</p>
                                <p className="text-lg text-white whitespace-nowrap">رزرو کلاس و شروع یادگیری</p>
                                <Arrow5 className="fill-white w-32 h-32 absolute -bottom-20 -left-20 "/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 ml-10">
                            <p className="text-xl text-white whitespace-nowrap">چون هیچی بلد نیستی باید از صفر شروع
                                کنی</p>
                            <div className="flex items-center justify-center gap-6">
                                <Link href="/private-class"
                                      className=" px-3 py-2 text-white bg-primary-600 rounded-md whitespace-nowrap ">انتخاب
                                    کلاس خصوصی</Link>
                                <Link href="/group-class"
                                      className=" px-3 py-2 text-white  border border-white rounded-md whitespace-nowrap ">انتخاب
                                    کلاس گروهی</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden bg-primary-950 w-full gap-1">
                    <div
                        className="flex justify-center items-center text-[32px] md:text-[76px] bg-white rounded-l-[40px] px-3 sm:px-5 h-[420px]">
                        3
                    </div>
                    <div className="flex flex-col justify-between py-5 px-3  h-[420px] w-full">
                        <div className="flex flex-col justify-between gap-5 pt-4 pr-4">
                            <button onClick={onBack}  className="flex items-center gap-2">
                                <Chevron className="w-4 h-4 fill-white"/>
                                <p className="text-white text-xs">بازگشت</p>
                            </button>
                            <div className="flex flex-col gap-2 relative py-5">
                                <p className=" text-white">مرحله سوم</p>
                                <p className="text-sm text-white whitespace-nowrap">مشاهده پروفایل اساتید</p>
                                <p className="text-sm text-white whitespace-nowrap">مشاهده دوره های آموزشی</p>
                                <p className="text-sm text-white whitespace-nowrap">رزرو کلاس و شروع یادگیری</p>
                                <Arrow6 className="fill-white w-20 h-20 absolute -bottom-12 right-36 "/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 mb-10">
                            <p className="text-sm text-white whitespace-nowrap">چون هیچی بلد نیستی باید از صفر شروع
                                کنی</p>
                            <div className="flex items-center justify-center gap-4">
                                <Link href="/private-class"
                                      className=" px-3 py-2 text-white bg-primary-600 rounded-md whitespace-nowrap text-xs">انتخاب
                                    کلاس خصوصی</Link>
                                <Link href="/group-class"
                                      className=" px-3 py-2 text-white  border border-white rounded-md whitespace-nowrap text-xs">انتخاب
                                    کلاس گروهی</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>) : (<div className="flex flex-col items-center gap-16 w-full px-5">
                <div className="hidden lg:flex  bg-primary-950 w-full gap-3">
                    <div
                        className="flex justify-center items-center text-lg sm:text-[32px] md:text-[76px] bg-white rounded-l-[40px] px-3 h-[440px]">
                        3
                    </div>
                    <div className="flex  w-full">
                        <div className="flex flex-col justify-between h-72 pt-6 pr-6 w-1/3">
                            <button onClick={onBack}  className="flex items-center gap-2">
                                <Chevron className="w-5 h-5 fill-white"/>
                                <p className="text-white">بازگشت</p>
                            </button>
                            <div className="flex flex-col gap-6 relative py-5">
                                <p className="text-3xl text-white">مرحله سوم</p>
                                <p className="text-xl text-white whitespace-nowrap">سطح زبان</p>
                                <Arrow5 className="fill-white w-32 h-36 absolute -bottom-14 -left-20 "/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 ml-10 w-2/3">
                            <p className="text-3xl text-white">آیا سطح زبانت رو دقیق میدونی؟</p>
                            <div className="flex items-center justify-center gap-6 w-3/2">
                                <button onClick={() => onSelect("yes")}
                                      className=" px-12 py-3 text-white bg-primary-600 rounded-md whitespace-nowrap w-1/2">آره
                                    میدونم</button>
                                <button onClick={() => onSelect("no")}
                                      className=" px-12 py-3 text-white  border border-white rounded-md whitespace-nowrap w-1/2">نه
                                    ولی میخوام بدونم</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex lg:hidden  bg-primary-950 w-full gap-3">
                    <div
                        className="flex justify-center items-center text-3xl bg-white rounded-l-[40px] px-3 h-[570px]">
                        3
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-between h-[340px] pt-5 pr-6 w-1/3">
                            <button onClick={onBack}  className="flex items-center gap-2">
                                <Chevron className="w-5 h-5 fill-white"/>
                                <p className="text-white">بازگشت</p>
                            </button>
                            <div className="flex flex-col gap-6 relative py-5">
                                <p className="text-2xl text-white">مرحله سوم</p>
                                <p className="text-lg text-white whitespace-nowrap">سطح زبان</p>
                                <Arrow5 className="fill-white w-32 h-32 absolute -bottom-16 -left-5 "/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 ml-10 w-2/3">
                            <p className="text-xl text-white whitespace-nowrap">آیا سطح زبانت رو دقیق میدونی؟</p>
                            <div className="flex items-center justify-center gap-6">
                                <button  onClick={() => onSelect("yes")}
                                      className=" px-8 py-2 flex items-center justify-center text-white bg-primary-600 rounded-md whitespace-nowrap  w-1/2">آره
                                    میدونم</button>
                                <button  onClick={() => onSelect("no")}
                                      className=" px-8 py-2 flex items-center justify-center text-white  border border-white rounded-md whitespace-nowrap w-1/2">نه
                                    ولی میخوام بدونم</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden bg-primary-950 w-full gap-1">
                    <div
                        className="flex justify-center items-center text-[32px] md:text-[76px] bg-white rounded-l-[40px] px-3 sm:px-5 h-[420px]">
                        3
                    </div>
                    <div className="flex flex-col justify-between py-5  h-[420px] w-full">
                        <div className="flex flex-col justify-between gap-5 pt-4 pr-6">
                            <button onClick={onBack}  className="flex items-center gap-2">
                                <Chevron className="w-4 h-4 fill-white"/>
                                <p className="text-white text-xs">بازگشت</p>
                            </button>
                            <div className="flex flex-col gap-2 relative py-5">
                                <p className=" text-white">مرحله سوم</p>
                                <p className="text-sm text-white whitespace-nowrap">سطح زبان</p>
                                <Arrow6 className="fill-white w-20 h-20 absolute -bottom-12 right-20 "/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 mb-10">
                            <p className="text-sm text-white whitespace-nowrap">آیا سطح زبانت رو دقیق میدونی؟</p>
                            <div className="flex items-center justify-center gap-2">
                                <button onClick={() => onSelect("yes")}
                                      className=" px-3 py-2 w-1/2 flex items-center justify-center text-white bg-primary-600 rounded-md whitespace-nowrap text-xs">آره
                                    میدونم</button>
                                <button onClick={() => onSelect("no")}
                                      className=" px-8 py-2 w-1/2 flex items-center justify-center text-white  border border-white rounded-md whitespace-nowrap text-xs">نه
                                    ولی میخوام بدونم</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    );
};

export default LearningStart3;