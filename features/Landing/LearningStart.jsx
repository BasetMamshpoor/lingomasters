import React from 'react';
import Question from "@icons/question-circle.svg";
import Arrow5 from "@icons/Arrow 5.svg";
import Arrow6 from "@icons/Arrow 6.svg";
import Image from "next/image";
import Link from "next/link";

const LearningStart = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-16 w-full px-5">
                <div className="flex items-center justify-center gap-3">
                    <Question className="w-10 h-10"/>
                    <p className="text-2xl">برای یادگیری زبان در لینگومسترز از کجا شروع کنم؟</p>
                </div>
                <div className="hidden lg:flex items-center justify-between bg-primary-950 w-full gap-3">
                    <div
                        className="flex justify-center items-center text-lg sm:text-[32px] md:text-[76px] bg-white rounded-l-[40px] px-10 h-[440px]">
                        1
                    </div>
                    <div className="flex flex-col gap-6 relative py-5">
                        <p className="text-sm sm:text-2xl md:text-[32px] text-white">مرحله اول</p>
                        <p className="text-sm sm:text-2xl md:text-[32px] text-white whitespace-nowrap">ثبت نام در
                            لینگومسترز</p>
                        <Arrow5 className="w-32 h-36 hidden sm:block absolute -bottom-32 -left-3 "/>
                        <Arrow6 className="w-20 h-20 sm:hidden absolute -bottom-10 -left-20 "/>
                    </div>
                    <div className="py-12 ">
                        <Image src="/images/Register.png" alt="" width={100} height={100}
                               className="w-full h-full"/>
                    </div>
                    <div className="flex self-end pl-10 pb-10">
                        <Link href="/auth/login"
                              className=" self-end px-12 py-3 text-white border-1.5  border-white rounded-md whitespace-nowrap text-xs sm:text-base">بزن
                            بریم</Link>
                    </div>
                </div>
                <div className="hidden md:flex lg:hidden items-center bg-primary-950 w-full gap-3">
                    <div
                        className="flex justify-center items-center text-lg sm:text-[32px] md:text-[76px] bg-white rounded-l-[40px] px-10 h-[570px]">
                        1
                    </div>
                    <div className="flex flex-col py-5 w-full px-3">
                        <div className="flex items-center justify-center gap-6">
                            <div className="flex flex-col gap-6 relative py-5">
                                <p className="text-2xl text-white">مرحله اول</p>
                                <p className="text-xl text-white whitespace-nowrap">ثبت
                                    نام
                                    در لینگومسترز</p>
                                <Arrow5 className="w-32 h-36 hidden sm:block absolute -bottom-32 -left-3 "/>
                                <Arrow6 className="w-20 h-20 sm:hidden absolute -bottom-10 -left-20 "/>
                            </div>
                            <div className="py-12 ">
                                <Image src="/images/Register.png" alt="" width={100} height={100}
                                       className="w-full h-full"/>
                            </div>
                        </div>
                        <div className="flex self-end pl-10 pb-10">
                            <Link href="/auth/login"
                                  className=" self-end px-9 py-3 text-white border-1.5  border-white rounded-md whitespace-nowrap text-xs sm:text-base">بزن
                                بریم</Link>
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden items-center bg-primary-950 w-full gap-1">
                    <div
                        className="flex justify-center items-center text-[32px] md:text-[76px] bg-white rounded-l-[40px] px-3 sm:px-5 h-[800px]">
                        1
                    </div>
                    <div className="flex flex-col py-5 w-full px-3">
                        <div className="flex flex-col gap-6 relative py-5">
                            <p className=" text-white">مرحله اول</p>
                            <p className="text-sm text-white whitespace-nowrap">ثبت
                                نام
                                در لینگومسترز</p>
                            <Arrow6 className="w-20 h-20 absolute -bottom-10 right-28"/>
                        </div>
                        <div className="py-12 ">
                            <Image src="/images/Register.png" alt="" width={100} height={100}
                                   className="w-full h-full"/>
                        </div>
                        <div className="flex self-end pl-10 pb-10">
                            <Link href="/auth/login"
                                  className=" self-end px-8 py-2 text-white border-1.5  border-white rounded-md whitespace-nowrap text-base">بزن
                                بریم</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LearningStart;