import React from 'react';
import Clipboard from "@icons/clipboard-tick.svg";
import Link from "next/link";
import Chevron from "@icons/arrow-left.svg";
import Image from "next/image";
import Calendar from "@icons/calendar.svg";

const Blogs = ({data}) => {
    return (
        <>
            <div className="flex flex-col gap-5 items-center w-full px-5 mb-12">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <Clipboard className="w-6 h-6 md:w-10 md:h-10 fill-primary-700"/>
                        <p className="text-sm font-bold sm:text-lg md:font-medium md:text-3xl">وبلاگ</p>
                    </div>
                    <Link href="/blogs" className="flex items-center gap-2">
                        <p className="text-xs sm:text-base text-primary-500">مشاهده همه وبلاگ ها</p>
                        <Chevron className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-primary-500"/>
                    </Link>
                </div>
                <div
                    className=" bg-[url('/images/Achievements.svg')] rounded-2xl flex flex-col items-center gap-10 pt-12 px-12 w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
                    <p className="text-sm font-medium sm:text-xl sm:font-bold md:font-medium md:text-3xl text-white">وبلاگ
                        لینگومسترز</p>
                    <div className="flex flex-col sm:flex-row items-center justify-end gap-5 pb-7">
                        {data?.map((e, i) => {
                            if ((window.innerWidth >= 1024 && i > 2) || (window.innerWidth >= 640 && window.innerWidth < 1024 && i > 1) || (window.innerWidth < 640 && i > 2)) return null;
                            return <div key={e.id}
                                        className="rounded-2xl shadow-lg border-[10px] border-white border-opacity-10 h-[370px]">
                                <Link href={`/blogs/${e.id}`}
                                      className="relative justify-end shrink-0 w-full">
                                    <Image src={e.image} alt={e.title} width={100} height={100}
                                           className="w-full h-full object-cover rounded-2xl"/>
                                    <div
                                        className="absolute shadow-lg rounded-b-2xl overflow-hidden backdrop-filter w-full bottom-0">
                                        <div
                                            className="flex flex-col gap-4 p-4 backdrop-filter backdrop-blur-xl w-full">
                                            <p className="text-sm sm:text-base text-white line-clamp-1">{e.title}</p>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 fill-secondary-300"/>
                                                <p className="text-xs text-white">{new Date(e.created_at).toLocaleDateString('fa-IR', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: "2-digit"
                                                })}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;