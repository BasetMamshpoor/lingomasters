import React from 'react';
import Image from "next/image";
import USA from "@icons/Flags/Country=United States of America, Style=Flag, Radius=On.svg"
import Chat from "@icons/chat-alt.svg"
import Boook from "@icons/book2.svg"
import Note from "@icons/note-2.svg"
import Private from "@icons/users.svg"
import Link from "next/link";
import Coin from "@icons/coin-stack.svg"
import {Avatar,AvatarGroup} from "@heroui/react";

const Book = () => {
    return (
        <>
            <div
                className="flex flex-col px-4 py-6 gap-6 md:gap-10 border bg-white border-natural_gray-100 rounded-2xl">
                <div className="flex flex-row md:flex-col gap-3 w-full">
                    <div className="flex items-center flex-col gap-3 w-1/2 md:w-full">
                        <Image src="/Images/product.png" alt={"Book"} width={50} height={50} className="min-w-44 "/>
                    </div>
                    <div className="flex flex-col gap-2 ite md:gap-3 w-1/2 md:w-full">
                        <p className="flex items-center justify-center text-sm md:text-lg">American Englisg file</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <USA className="w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-xs">زبان</p>
                            </div>
                            <p className="text-xs md:text-sm">انگلیسی</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <Chat className="fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-xs">موضوع</p>
                            </div>
                            <p className="text-xs md:text-sm">مکالمه</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <Boook className="w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-xs">نوع فایل</p>
                            </div>
                            <p className="text-xs md:text-sm">pdf</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <Note className="w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-xs">تعداد جلد</p>
                            </div>
                            <p className="text-xs md:text-sm">تک جلدی</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <Private className=" fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-xs">اساتید</p>
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
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <Coin className=" fill-primary-700 w-3 h-3 md:w-4 md:h-4"/>
                                <p className="text-xs">قیمت</p>
                            </div>
                            <p className="text-xs md:text-sm">رایگان</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/"
                          className="flex items-center justify-center w-1/2 py-2 text-xs md:text-base rounded-md border-1.5 border-secondary-500 text-secondary-500 ">جزئیات</Link>
                    <Link href="/"
                          className="flex items-center justify-center w-1/2 py-2 text-xs md:text-base rounded-md bg-primary-600 text-white ">مشاهده
                        کتاب</Link>
                </div>
                {/*<div className="flex items-center gap-4">*/}
                {/*    <Link href="/" className="flex items-center justify-center w-1/2 py-2 text-xs md:text-base rounded-md border-1.5 border-secondary-500 text-secondary-500 ">مشاهده</Link>*/}
                {/*    <Link href="/" className="flex items-center justify-center w-1/2 py-2 text-xs md:text-base rounded-md bg-primary-600 text-white ">دانلود</Link>*/}
                {/*</div>*/}
            </div>
        </>
    );
};

export default Book;