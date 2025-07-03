import React from 'react';
import KingdomFlag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import Dollar from "@icons/dollar.svg";
import AddUser from "@icons/user-add.svg";
import RakingIcon from "@icons/ranking.svg";
import GrowthIcon from "@icons/growth.svg";
import File from "@icons/file.svg";
import LaptopIcon from "@icons/laptop.svg";
import Watch from "@icons/watch.svg";
import CalendarIcon from "@icons/calendar.svg";
import History from "@icons/history.svg";
import BookIcon from "@icons/book-open.svg";

import {useRouter} from "next/router";
import useGetRequest from "@/hooks/useGetRequest";
import BookItem from "@/components/Books/BookItem";
import {Button} from "@heroui/react";
import Link from "next/link";
import Message from "@icons/message-alt.svg";

const Webinar = () => {
    const router = useRouter();
    const {id} = router.query
    const [data] = useGetRequest(true, `/student/webinar/show/${id}`)
    return (
        <>
            {data &&
                <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-between md:flex-nowrap flex-wrap gap-4">
                        <div className="sm:hidden flex gap-4">
                            {data.status === 2 &&
                                <Button className="bg-primary-600 text-white" radius='sm'>صدور گواهینامه</Button>

                            }
                        </div>
                        <div
                            className="flex items-center gap-6 sm:justify-end justify-between w-full  sm:relative fixed  bottom-0 sm:z-0 z-50 left-0 right-0 sm:p-0 p-4">
                            {data.status === 0 &&
                                <Link
                                    href={data.is_certificate ? '/pages/profile/certificate/index.jsx' : `/pages/profile/certificate/index.jsx/new?id=${data.id}`}
                                    className="text-white centerOfParent gap-2 border-1.5 sm:text-base text-xs text-center bg-primary-600 border-primary-600 rounded py-2 px-4 sm:w-fit w-full"
                                    radius='sm'>{data.is_certificate ? "مشاهده" : "صدور"} گواهینامه</Link>
                            }
                            {data.status === 0 && <>
                                <Link href={`/messages?user=${data.user_id}`}
                                      className='text-primary-600 centerOfParent gap-2 border-1.5 sm:text-base text-xs text-center bg-white border-primary-600 rounded py-2 px-4 sm:w-fit w-full'>
                                    <Message className={'fill-primary-600'}/>
                                    پیام به استاد
                                </Link>
                                {!data.teaching_type_id &&
                                    <button
                                        className={`flex sm:p-4 py-2 px-3 sm:h-12 h-8 flex-col justify-center items-center gap-2.5 bg-primary-600 rounded `}>
                                        <p className=" sm:text-base text-xs text-white text-center whitespace-nowrap">ورود
                                            به کلاس</p>
                                    </button>}
                            </>}
                        </div>
                    </div>

                    <div className="border rounded-xl border-natural_gray-200 w-full py-8 px-4 flex flex-col gap-5">
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <KingdomFlag/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">زبان</p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">
                                {data.language}
                            </p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <CalendarIcon className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    تاریخ
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">
                                {new Date(data.date).toLocaleDateString('fa-IR', {
                                    day: '2-digit',
                                    month: 'long',
                                    weekday: 'long'
                                })}
                            </p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <Watch className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    ساعت
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">
                                {data.hour}
                            </p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <Dollar className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    مبلغ
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">
                                {data.total_price?.toLocaleString()} تومان
                            </p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <AddUser/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    ظرفیت
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">
                                {data.max_capacity} نفر
                            </p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <RakingIcon/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    سطح زبان
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">
                                {data.level}
                            </p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <GrowthIcon/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    گروه سنی
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">
                                {data.ageGroup}
                            </p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <LaptopIcon className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    نوع کلاس
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">آنلاین</p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <File className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    هدف از یادگیری
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">
                                {data.subject}
                            </p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center col-span-3">
                                <div className="centerOfParent ml-2">
                                    <BookIcon className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    کتاب‌های تدریسی استاد
                                </p>
                            </div>
                        </div>
                        <div className="flex md:justify-start items-center gap-3 flex-wrap">
                            {data.books.map(book => (
                                <BookItem key={book.id} {...book} withSelect={false}/>
                            ))}
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default Webinar;