import React from 'react';
import Link from "next/link";
import Chevron_right from "@icons/chevron-right.svg";
import USA from "@icons/Flags/Country=United States of America, Style=Flag, Radius=On.svg";
import Open from "@icons/book-open.svg"
import Group from "@icons/users.svg"
import File from "@icons/file-alt.svg"
import Edite from "@icons/edit-icon.svg"
import Dollar from "@icons/dollar.svg"
import File2 from "@icons/file.svg"
import Laptop from "@icons/laptop.svg"
import Growth from "@icons/growth.svg"
import Note from "@icons/note-2.svg"
import Ranking from "@icons/ranking.svg"
import {Avatar, AvatarGroup } from "@heroui/react";
import Image from "next/image";

const FreeBookDetails = () => {
    return (
        <>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col lg:flex-row  lg:justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <Chevron_right className="h-5 w-5 fill-primary-600"/>
                            <p className="hidden lg:flex text-primary-500 text-base">بازگشت</p>
                            <p className=" flex lg:hidden text-primary-500 text-xs md:text-base">کتابخانه ( کتاب‌های
                                رایگان _ جزئیات )</p>
                        </Link>
                        <div className="hidden md:flex justify-end w-full">
                            <Link href="/"
                                  className="flex items-center justify-center px-8 py-2 text-base rounded-md bg-primary-600 text-white ">مشاهده
                                کتاب</Link>
                        </div>
                    </div>
                    <div
                        className="flex flex-col-reverse gap-6 lg:flex-row w-full p-6 border border-natural_gray-100 rounded-xl ">
                        <div className="flex flex-col gap-6 w-full lg:w-1/2">
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <Open className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                    <p className="text-xs md:text-base">نام کتاب</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">How to learn English</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <Group className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                    <p className="text-xs md:text-base">نویسنده</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">Jesica Merry</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <File className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                    <p className="text-xs md:text-base">انتشارات</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">ققنوس</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <Edite className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                    <p className="text-xs md:text-base">ویرایش</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">اول</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <USA className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                    <p className="text-xs md:text-base">زبان</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">انگلیسی</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <Dollar className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                    <p className="text-xs md:text-base">قیمت</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">رایگان</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <File2 className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                    <p className="text-xs md:text-base">موضوع</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">فنون زبان ( مکالمه )</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <Laptop className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                    <p className="text-xs md:text-base">نوع فایل</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">PDF</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <Growth className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                    <p className="text-xs md:text-base">گروه سنی</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">بزرگسال</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <Note className=" w-3 h-3 md:w-4 md:h-4"/>
                                    <p className="text-xs md:text-base">تعداد جلد</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">تک جلدی</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <Ranking className=" w-3 h-3 md:w-4 md:h-4"/>
                                    <p className="text-xs md:text-base">سطح کتاب</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">متوسط</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <Group className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                    <p className="text-xs md:text-base">اساتیدی که کتاب را تدریس می‌کنند</p>
                                </div>
                                <div dir="ltr">
                                    <AvatarGroup isBordered max={5} size='sm'>
                                        <Avatar src="" showFallback/>
                                        <Avatar src="" showFallback/>
                                        <Avatar src="" showFallback/>
                                        <Avatar src="" showFallback/>
                                        <Avatar src="" showFallback/>
                                        <Avatar src="" showFallback/>
                                        <Avatar src="" showFallback/>
                                    </AvatarGroup>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full lg:w-1/2 lg:justify-end">
                            <Image src="/Images/product.png" alt={"Book"} width={50} height={50}
                                   className="w-56 h-52 "/>
                        </div>
                    </div>
                </div>
                <Link href="/"
                      className="md:hidden w-full flex items-center justify-center px-8 py-2 text-base rounded-md bg-primary-700 text-white ">مشاهده
                    کتاب</Link>
            </div>
        </>
    );
};

export default FreeBookDetails;