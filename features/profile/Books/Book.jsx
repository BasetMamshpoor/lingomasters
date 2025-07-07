import React from 'react';
import Image from "next/image";
import USA from "@icons/Flags/Country=United States of America, Style=Flag, Radius=On.svg"
import Chat from "@icons/chat-alt.svg"
import Note from "@icons/note-2.svg"
import Private from "@icons/users.svg"
import Link from "next/link";
import Coin from "@icons/coin-stack.svg"
import {Avatar, AvatarGroup} from "@heroui/react";
import EyeIcon from "@icons/eye-right.svg";
import formatNumber from "@/helpers/formatNumber";
import Like from "@/components/Like";

const Book = ({
                  professors,
                  language,
                  title,
                  image,
                  category,
                  file_type,
                  volum,
                  is_like,
                  view,
                  price,
                  link,
                  id,
                  isSuggestion
              }) => {
    return (
        <>
            <div
                className="relative flex flex-col px-4 py-6 gap-6 md:gap-10 border bg-white border-natural_gray-100 rounded-2xl">
                {isSuggestion && <div className="absolute top-4 w-full lef-0 right-0 flex justify-between items-center">
                    <div className="flex items-center py-1 px-2 bg-natural_gray-50 rounded-l-lg  gap-2">
                        <div className="centerOfParent">
                            <EyeIcon className="w-6 h-3"/>
                        </div>
                        <span className="text-xs text-primary-900 uppercase ">{formatNumber(view)}</span>
                    </div>
                    <Like id={id} isLike={is_like} url='/product' className='ml-4'/>
                </div>}
                <div className="flex flex-col gap-3 w-full grow">
                    <div className="centerOfParent grow">
                        <Image src={image || "/images/product.png"} alt={title} width={100} height={100}
                               className="w-full h-full object-contain  max-w-44"/>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3">
                        <p className="centerOfParent text-sm md:text-lg">{title}</p>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <USA className="w-4 h-4"/>
                                    <p className="text-xs">زبان</p>
                                </div>
                                <p className="text-xs md:text-sm">{language}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Chat className="fill-primary-700 w-4 h-4"/>
                                    <p className="text-xs">موضوع</p>
                                </div>
                                <p className="text-xs md:text-sm">{category}</p>
                            </div>
                            {/*<div className="flex items-center justify-between">*/}
                            {/*    <div className="flex items-center gap-1">*/}
                            {/*        <Boook className="fill-primary-700 w-4 h-4"/>*/}
                            {/*        <p className="text-xs">نوع فایل</p>*/}
                            {/*    </div>*/}
                            {/*    <p className="text-xs md:text-sm">{file_type}</p>*/}
                            {/*</div>*/}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Note className="w-4 h-4"/>
                                    <p className="text-xs">تعداد جلد</p>
                                </div>
                                <p className="text-xs md:text-sm">{volum} جلدی</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Private className=" fill-primary-700 w-4 h-4"/>
                                    <p className="text-xs">اساتید</p>
                                </div>
                                <div dir="ltr">
                                    <AvatarGroup max={5} total={professors?.length > 5 ? professors?.length : 0} dir="ltr"
                                                 classNames={{count: "w-7 h-7 text-tiny border-3 border-white"}}>
                                        {professors?.map(el => (
                                            <Avatar
                                                key={el}
                                                classNames={{base: "w-7 h-7 text-tiny border-3 border-white"}}
                                                showFallback
                                                src={el}/>
                                        ))}
                                    </AvatarGroup>
                                </div>
                            </div>
                            {isSuggestion && <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Coin className=" fill-primary-700 w-4 h-4"/>
                                    <p className="text-xs">قیمت</p>
                                </div>
                                <p className="text-xs md:text-sm">{price}</p>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href={`${link}/${id}`}
                          className="centerOfParent flex-1 py-2 sm:text-sm text-xs lg:text-base rounded-md border-1.5 border-secondary-500 text-secondary-500 ">جزئیات</Link>
                    <Link href={`${link}/${id}`}
                          className="centerOfParent flex-1 py-2 sm:text-sm text-xs lg:text-base rounded-md bg-primary-600 text-white whitespace-nowrap">مشاهده
                        کتاب</Link>
                </div>
                {/*<div className="flex items-center gap-4">*/}
                {/*    <Link href="/" className="centerOfParent w-1/2 py-2 text-xs md:text-base rounded-md border-1.5 border-secondary-500 text-secondary-500 ">مشاهده</Link>*/}
                {/*    <Link href="/" className="centerOfParent w-1/2 py-2 text-xs md:text-base rounded-md bg-primary-600 text-white ">دانلود</Link>*/}
                {/*</div>*/}
            </div>
        </>
    );
};

export default Book;