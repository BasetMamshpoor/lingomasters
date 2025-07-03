import React from 'react';
import Question from "@icons/question-circle.svg";
import Arrow5 from "@icons/Arrow-5.svg";
import Arrow6 from "@icons/Arrow-6.svg";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@heroui/react";

const LearningStart = ({ onNext }) => {
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
                        <Arrow5 className="fill-white w-32 h-36 hidden sm:block absolute -bottom-32 -left-3 "/>
                        <Arrow6 className="fill-white w-20 h-20 sm:hidden absolute -bottom-10 -left-20 "/>
                    </div>
                    <div className="py-12 ">
                        <Image unoptimized src="/images/Register.png" alt="" width={100} height={100}
                               className="w-full h-full"/>
                    </div>
                    <div className="flex self-end pl-10 pb-10">
                        <button  onClick={onNext}
                                 className=" self-end px-12 py-3 text-white border-1.5  border-white rounded-md whitespace-nowrap text-xs sm:text-base">بزن
                            بریم</button>
                    </div>
                </div>
                <div className="hidden md:flex lg:hidden items-center bg-primary-950 w-full gap-3">
                    <div
                        className="flex justify-center items-center text-lg sm:text-[32px] md:text-[76px] bg-white rounded-l-[40px] px-7 h-[570px]">
                        1
                    </div>
                    <div className="flex flex-col py-5 w-full px-3">
                        <div className="flex items-center justify-center gap-6">
                            <div className="flex flex-col gap-6 relative py-5">
                                <p className="text-2xl text-white">مرحله اول</p>
                                <p className="text-xl text-white whitespace-nowrap">ثبت
                                    نام
                                    در لینگومسترز</p>
                                <Arrow5 className="fill-white w-32 h-36 hidden sm:block absolute -bottom-32 -left-3 "/>
                                <Arrow6 className="fill-white w-20 h-20 sm:hidden absolute -bottom-10 -left-20 "/>
                            </div>
                            <div className="py-12 ">
                                <Image unoptimized src="/images/Register.png" alt="" width={100} height={100}
                                       className="w-full h-full"/>
                            </div>
                        </div>
                        <div className="flex self-end pl-10 pb-10">
                            <button  onClick={onNext}
                                  className=" self-end px-9 py-3 text-white border-1.5  border-white rounded-md whitespace-nowrap text-xs sm:text-base">بزن
                                بریم</button>
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden bg-primary-950 w-full gap-1">
                    <div
                        className="flex justify-center items-center text-[32px] md:text-[76px] bg-white rounded-l-[40px] px-3 sm:px-5">
                        1
                    </div>
                    <div className="flex flex-col py-3 w-full px-3">
                        <div className="flex flex-col gap-6 relative py-5">
                            <p className=" text-white">مرحله اول</p>
                            <p className="text-sm text-white whitespace-nowrap">ثبت
                                نام
                                در لینگومسترز</p>
                            <Arrow6 className="fill-white w-20 h-20 absolute -bottom-10 right-28"/>
                        </div>
                        <div className="py-12 ">
                            <Image unoptimized src="/images/Register.png" alt="" width={100} height={100}
                                   className="w-full h-full"/>
                        </div>
                        <div className="flex self-end pl-2 pb-10">
                            <button  onClick={onNext}
                                  className=" self-end px-6 py-1 text-white border-1.5  border-white rounded-md whitespace-nowrap text-base">بزن
                                بریم</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LearningStart;