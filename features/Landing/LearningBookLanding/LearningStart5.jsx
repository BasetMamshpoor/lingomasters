import React from 'react';
import Link from "next/link";
import Chevron from "@icons/chevron-right.svg";
import Arrow5 from "@icons/Arrow-5.svg";
import Arrow6 from "@icons/Arrow-6.svg";
import {Button, Input} from "@heroui/react";
import {white} from "next/dist/lib/picocolors";

const LearningStart5 = ({onBack}) => {
    return (
        <>
            <div className="flex flex-col items-center gap-16 w-full px-5">
                <div className="hidden lg:flex  bg-primary-950 w-full gap-3">
                    <div
                        className="flex justify-center items-center text-lg sm:text-[32px] md:text-[76px] bg-white rounded-l-[40px] px-3 h-[440px]">
                        5
                    </div>
                    <div className="flex  w-full">
                        <div className="flex flex-col justify-between h-72 pt-6 pr-4 w-1/3">
                            <button onClick={onBack} className="flex items-center gap-2">
                                <Chevron className="w-5 h-5 fill-white"/>
                                <p className="text-white">بازگشت</p>
                            </button>
                            <div className="flex flex-col gap-6 relative py-5">
                                <p className="text-3xl text-white">مرحله پنجم</p>
                                <p className="text-3xl text-white whitespace-nowrap">پر کردن فرم تماس :)</p>
                                <Arrow5 className="fill-white w-32 h-36 absolute -bottom-16 -left-20 "/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 w-2/3">
                            <p className="text-3xl text-white">اطلاعاتت رو بذار تا باهات تماس بگیریم!</p>
                            <div className="flex  flex-col items-center justify-center gap-2 w-2/3">
                                <Input
                                    description=""
                                    label="نام و نام خانوادگی"
                                    labelPlacement="outside"
                                    type="text"
                                    placeholder="متن"
                                    classNames={{label: "text-xs text-white", input: "text-sm "}}
                                    color="text-white"
                                    radius="sm"
                                />
                                <Input
                                    description=""
                                    label="شماره موبایل"
                                    labelPlacement="outside"
                                    type="text"
                                    placeholder="متن"
                                    classNames={{label: "text-xs text-white", input: "text-sm "}}
                                    color="text-white"
                                    radius="sm"
                                />
                                <Input
                                    description=""
                                    label="ساعت پاسخگویی"
                                    labelPlacement="outside"
                                    type="text"
                                    placeholder="متن"
                                    classNames={{label: "text-xs text-white", input: "text-sm "}}
                                    color="text-white"
                                    radius="sm"
                                />
                            </div>
                            <div className="flex justify-end w-2/3">
                                <Button className="text-white text-sm bg-primary-600 px-20 rounded-md">ارسال</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex lg:hidden  bg-primary-950 w-full gap-3">
                    <div
                        className="flex justify-center items-center text-3xl bg-white rounded-l-[40px] px-3 h-[460px]">
                        5
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-between h-[260px] pt-4 pr-4 w-1/3">
                            <button onClick={onBack} className="flex items-center gap-2">
                                <Chevron className="w-5 h-5 fill-white"/>
                                <p className="text-white">بازگشت</p>
                            </button>
                            <div className="flex flex-col gap-6 relative py-5">
                                <p className="text-2xl text-white">مرحله پنجم</p>
                                <p className="text-2xl text-white whitespace-nowrap">پر کردن فرم تماس :)</p>
                                <Arrow5 className="fill-white w-36 h-36 absolute -bottom-32 -left-5 "/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 w-2/3">
                            <p className="text-lg text-white">اطلاعاتت رو بذار تا باهات تماس بگیریم!</p>
                            <div className="flex  flex-col items-center justify-center gap-2 w-2/3">
                                <Input
                                    description=""
                                    label="نام و نام خانوادگی"
                                    labelPlacement="outside"
                                    type="text"
                                    placeholder="متن"
                                    classNames={{label: "text-xs text-white", input: "text-sm "}}
                                    color="text-white"
                                    radius="sm"
                                />
                                <Input
                                    description=""
                                    label="شماره موبایل"
                                    labelPlacement="outside"
                                    type="text"
                                    placeholder="متن"
                                    classNames={{label: "text-xs text-white", input: "text-sm "}}
                                    color="text-white"
                                    radius="sm"
                                />
                                <Input
                                    description=""
                                    label="ساعت پاسخگویی"
                                    labelPlacement="outside"
                                    type="text"
                                    placeholder="متن"
                                    classNames={{label: "text-xs text-white", input: "text-sm "}}
                                    color="text-white"
                                    radius="sm"
                                />
                            </div>
                            <div className="flex justify-end w-2/3">
                                <Button className="text-white text-sm bg-primary-600 px-20 rounded-md">ارسال</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden bg-primary-950 w-full gap-1">
                    <div
                        className="flex justify-center items-center text-[32px] md:text-[76px] bg-white rounded-l-[40px] px-3 sm:px-5 h-[460px]">
                        5
                    </div>
                    <div className="flex flex-col justify-between py-5 pr-6  h-[460px] w-full">
                        <div className="flex flex-col gap-0 ">
                            <button onClick={onBack} className="flex items-center gap-2">
                                <Chevron className="w-4 h-4 fill-white"/>
                                <p className="text-white text-xs">بازگشت</p>
                            </button>
                            <div className="flex flex-col gap-2 relative py-5">
                                <p className=" text-white">مرحله پنجم</p>
                                <p className="text-sm text-white whitespace-nowrap">پر کردن فرم تماس :)</p>
                                <Arrow6 className="fill-white w-16 h-16 absolute -bottom-0 right-32 "/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3 w-full">
                            <p className="text-sm text-white">اطلاعاتت رو بذار تا باهات تماس بگیریم!</p>
                            <div className="flex  flex-col items-center justify-center gap-2 w-2/3">
                                <Input
                                    description=""
                                    label="نام و نام خانوادگی"
                                    labelPlacement="outside"
                                    type="text"
                                    placeholder="متن"
                                    classNames={{label: "text-xs text-white", input: "text-sm "}}
                                    color="text-white"
                                    radius="sm"
                                />
                                <Input
                                    description=""
                                    label="شماره موبایل"
                                    labelPlacement="outside"
                                    type="text"
                                    placeholder="متن"
                                    classNames={{label: "text-xs text-white", input: "text-sm "}}
                                    color="text-white"
                                    radius="sm"
                                />
                                <Input
                                    description=""
                                    label="ساعت پاسخگویی"
                                    labelPlacement="outside"
                                    type="text"
                                    placeholder="متن"
                                    classNames={{label: "text-xs text-white", input: "text-sm "}}
                                    color="text-white"
                                    radius="sm"
                                />
                            </div>
                            <div className="flex justify-end w-2/3">
                                <Button className="text-white text-sm bg-primary-600 px-20 rounded-md">ارسال</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LearningStart5;