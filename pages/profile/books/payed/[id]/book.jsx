import React from 'react';
import Link from "next/link";
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
import {Avatar, AvatarGroup, Spinner} from "@heroui/react";
import Image from "next/image";
import Comments from "@/components/Comments";
import {useRouter} from "next/router";
import useGetRequest from "@/hooks/useGetRequest";

const FreeBookDetails = () => {
    const {query} = useRouter()
    const [data, , , , , isLoading] = useGetRequest(true, query.id && `/student/book/show/${query.id}`)
    return (
        isLoading ?
            <div className="centerOfParent w-full"><Spinner color="success"/></div>
            : data &&
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col lg:flex-row  lg:justify-between">
                        <div className=""></div>
                        <div className="hidden md:flex justify-end w-full">
                            <Link href={data.file || "/"} download
                                  className="flex items-center justify-center px-8 py-2 text-base rounded-md bg-primary-600 text-white ">مشاهده
                                کتاب</Link>
                        </div>
                    </div>
                    <div
                        className="flex flex-col-reverse gap-6 lg:flex-row w-full p-6 border border-natural_gray-100 rounded-xl ">
                        <div className="flex flex-col gap-6 w-full lg:w-1/2">
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-2 w-1/2">
                                    <Open className="fill-primary-700 w-4 h-4"/>
                                    <p className="text-xs md:text-base">نام کتاب</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.title}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-2 w-1/2">
                                    <Group className="fill-primary-700 w-4 h-4"/>
                                    <p className="text-xs md:text-base">نویسنده</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.author}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-2 w-1/2">
                                    <File className="fill-primary-700 w-4 h-4"/>
                                    <p className="text-xs md:text-base">انتشارات</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.publication}</p>
                            </div>
                            {/*<div className="flex items-center w-full">*/}
                            {/*    <div className="flex items-center gap-2 w-1/2">*/}
                            {/*        <Edite className="fill-primary-700 w-4 h-4"/>*/}
                            {/*        <p className="text-xs md:text-base">ویرایش</p>*/}
                            {/*    </div>*/}
                            {/*    <p className="text-xs md:text-base w-1/2">اول</p>*/}
                            {/*</div>*/}
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-2 w-1/2">
                                    <USA className="fill-primary-700 w-4 h-4"/>
                                    <p className="text-xs md:text-base">زبان</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.language}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-2 w-1/2">
                                    <Dollar className="fill-primary-700 w-4 h-4"/>
                                    <p className="text-xs md:text-base">قیمت</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.price?data.price.toLocaleString():"رایگان"}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-2 w-1/2">
                                    <File2 className="fill-primary-700 w-4 h-4"/>
                                    <p className="text-xs md:text-base">موضوع</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.subject}</p>
                            </div>
                            {/*<div className="flex items-center w-full">*/}
                            {/*    <div className="flex items-center gap-2 w-1/2">*/}
                            {/*        <Laptop className="fill-primary-700 w-4 h-4"/>*/}
                            {/*        <p className="text-xs md:text-base">نوع فایل</p>*/}
                            {/*    </div>*/}
                            {/*    <p className="text-xs md:text-base w-1/2">PDF</p>*/}
                            {/*</div>*/}
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-2 w-1/2">
                                    <Growth className="fill-primary-700 w-4 h-4"/>
                                    <p className="text-xs md:text-base">گروه سنی</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.age_group}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-2 w-1/2">
                                    <Note className=" w-4 h-4"/>
                                    <p className="text-xs md:text-base">تعداد جلد</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.volume_number} جلدی</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-2 w-1/2">
                                    <Ranking className=" w-4 h-4"/>
                                    <p className="text-xs md:text-base">سطح کتاب</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.language_level}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-2 w-1/2">
                                    <Group className="fill-primary-700 w-4 h-4"/>
                                    <p className="text-xs md:text-base">اساتیدی که کتاب را تدریس می‌کنند</p>
                                </div>
                                <div dir="ltr">
                                    <AvatarGroup max={5} total={data.professors?.length > 5 ? data.professors?.length : 0} dir="ltr"
                                                 classNames={{count: "w-7 h-7 text-tiny border-3 border-white"}}>
                                        {data.professors?.map(el => (
                                            <Avatar
                                                key={el}
                                                classNames={{base: "w-7 h-7 text-tiny border-3 border-white"}}
                                                showFallback
                                                src={el}/>
                                        ))}
                                    </AvatarGroup>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full lg:w-1/2 lg:justify-end justify-center">
                            <Image src={data.image||"/Images/product.png"} alt={data.title} width={100} height={100}
                                   className="lg:max-w-64 max-w-[50%] w-full h-fit object-cover"/>
                        </div>
                    </div>
                    <Comments justForm url='product' id={data.id}/>
                </div>
                <div className="md:hidden bg-white fixed bottom-0 left-0 right-0 p-4">
                    <Link href={data.file || "/"} download
                          className="w-full centerOfParent px-8 py-2 text-base rounded-md bg-primary-700 text-white ">مشاهده
                        کتاب</Link>
                </div>
            </div>
    );
};

export default FreeBookDetails;