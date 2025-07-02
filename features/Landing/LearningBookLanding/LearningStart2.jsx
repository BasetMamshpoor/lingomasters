import React from 'react';
import Question from "@icons/question-circle.svg";
import Arrow5 from "@icons/Arrow-5.svg";
import Arrow6 from "@icons/Arrow-6.svg";
import Image from "next/image";
import Link from "next/link";

const LearningStart2 = ({ onSelect }) => {
    return (
        <>
            <div className="flex flex-col items-center gap-16 w-full px-5">
                <div className="hidden lg:flex items-center justify-between bg-white w-full gap-3">
                    <div
                        className="flex justify-center text-white items-center text-lg text-[76px] bg-primary-950 rounded-l-[40px] rounded-r-2xl px-10 h-[440px]">
                        2
                    </div>
                    <div className="flex flex-col gap-6 relative py-5">
                        <p className="text-3xl">مرحله دوم</p>
                        <p className="text-3xl whitespace-nowrap">تعیین میزان تسلط</p>
                        <Arrow5 className="fill-primary-950 w-32 h-36 absolute -bottom-20 -left-20 "/>
                    </div>
                    <div className="flex flex-col gap-6 ">
                        <p className="text-3xl">زبان مورد نظرت رو چقدر بلدی؟</p>
                        <div className="flex items-center justify-center gap-6">
                            <button onClick={() => onSelect("none")}
                                    className=" px-12 py-3 text-white bg-primary-600 rounded-md whitespace-nowrap text-xs">هیچی بلد نیستم</button>
                            <button onClick={() => onSelect("some")}
                                  className=" px-12 py-3 text-secondary-500 bg-white border border-secondary-500 rounded-md whitespace-nowrap text-xs">یه چیزایی بلدم</button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex lg:hidden items-center bg-white w-full gap-3">
                    <div
                        className="flex justify-center items-center text-3xl text-white bg-primary-950 rounded-r-2xl rounded-l-[40px] px-10 h-[380px]">
                        2
                    </div>
                    <div className="flex flex-col py-5 w-full px-3">
                        <div className="flex items-center justify-center gap-6">
                            <div className="flex flex-col gap-6 relative py-5">
                                <p className="text-2xl ">مرحله دوم</p>
                                <p className="text-xl whitespace-nowrap">تعیین میزان تسلط</p>
                                <Arrow5 className="fill-primary-950 w-24 h-28 absolute -bottom-16 -left-3 "/>
                            </div>
                            <div className="flex items-center flex-col gap-6 ">
                                <p className="text-xl">زبان مورد نظرت رو چقدر بلدی؟</p>
                                <div className="flex items-center justify-center gap-6">
                                    <button onClick={() => onSelect("none")}
                                          className=" px-12 py-3 text-white bg-primary-600 rounded-md whitespace-nowrap text-xs">هیچی بلد نیستم</button>
                                    <button onClick={() => onSelect("some")}
                                          className=" px-12 py-3 text-secondary-500 bg-white border border-secondary-500 rounded-md whitespace-nowrap text-xs">یه چیزایی بلدم</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden items-center  w-full gap-1">
                    <div
                        className="flex justify-center items-center text-lg text-white bg-primary-950 rounded-r-2xl  rounded-l-[40px] px-3 sm:px-5 h-[320px]">
                        2
                    </div>
                    <div className="flex flex-col gap-24 py-5  w-full px-3">
                        <div className="flex flex-col gap-6 relative py-5">
                            <p className=" ">مرحله دوم</p>
                            <p className="text-sm  whitespace-nowrap">تعیین میزان تسلط</p>
                            <Arrow6 className="fill-primary-950 w-20 h-20 absolute -bottom-10 right-28"/>
                        </div>
                        <div className="flex items-center flex-col gap-6 ">
                            <p className="text-sm">زبان مورد نظرت رو چقدر بلدی؟</p>
                            <div className="flex items-center justify-center gap-6 w-full">
                                <button onClick={() => onSelect("none")}
                                      className=" px-3 w-1/2 py-3 text-white bg-primary-600 rounded-md whitespace-nowrap text-xs">هیچی بلد نیستم</button>
                                <button onClick={() => onSelect("some")}
                                      className=" px-3 w-1/2 py-3 text-secondary-500 bg-white border border-secondary-500 rounded-md whitespace-nowrap text-xs">یه چیزایی بلدم</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LearningStart2;