import React, {useState} from 'react';
import Pepole from "@icons/clipboard-tick.svg";
import Filters from "@/features/Blogs/Filters";
import Filter from "@/features/Blogs/Filter";
import useGetRequest from "@/hooks/useGetRequest";
import PaginationApp from "@/components/Pagination";
import {Spinner} from "@heroui/react";
import Icon from '@icons/calendar.svg'
import Link from "next/link";
import Image from "next/image";


const Blogs = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [blogs, setBlogs, reload, pagination, , isLoading] = useGetRequest(true, `/blogs`, currentPage,);
    return (
        <>
            <section className='py-12' dir="rtl">
                <div className="container">
                    <div className="lg:flex hidden items-center justify-center gap-2 mb-5">
                        <div className="centerOfParent"><Pepole className='w-8 h-8 fill-primary-700'/></div>
                        <h1 className='text-2xl text-primary-800'>وبلاگ</h1>
                    </div>
                    <div className='lg:hidden flex items-center justify-between mb-6'>
                        <div className="flex items-center gap-4">
                            <Pepole className='w-6 h-6 fill-primary-700'/>
                            <h1 className="font-semibold text-primary-900">وبلاگ</h1>
                        </div>
                        <div className="centerOfParent">
                            <Filter setCurrentPage={setCurrentPage}/>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-12 grid-cols-1'>
                        <div className='hidden lg:block lg:col-span-3 bg-white'>
                            <Filters setCurrentPage={setCurrentPage}/>
                        </div>
                        <div className='flex flex-col gap-6 lg:col-span-9 sm:px-4'>
                            {!isLoading ? <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                                {blogs?.length ? blogs.map((b, i) => (
                                    <Link href={`/blogs/${b.id}`}
                                          className="rounded-xl h-[302px] bg-[#0D0A2C] overflow-hidden relative"
                                          key={b.id}>
                                        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-gradient-to-t from-black from-0%  to-50% to-transparent"/>
                                        {b.image ?
                                            <Image src={b.image} alt={b.title} width={100} height={100}
                                                   className="w-full h-full object-cover"/>
                                            : <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full">
                                                <img src="/images/Ellipse%2024.png"
                                                     className="w-full absolute top-0 left-0"/>
                                                <img src="/images/Ellipse%2025.png"
                                                     className="w-full absolute top-0 right-0"/>
                                                <img src="/images/Ellipse%2026.png"
                                                     className="w-full absolute bottom-0 right-0"/>
                                                <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-10 text-xl">آزمون
                                                    MSRT</p>
                                            </div>}
                                        <div
                                            className="p-4 w-full absolute bottom-0 z-[1] bg-white bg-opacity-5 backdrop-blur-[5px] flex flex-col gap-2">
                                            <p className="text-white sm:text-base text-sm line-clamp-1">{b.title}</p>
                                            <div className="flex items-center gap-2">
                                                <Icon className="fill-secondary-300 w-4 h-4"/>
                                                <span
                                                    className="text-natural_gray-200 sm:text-xs text-[10px]">{new Date(b.created_at).toLocaleDateString('fa-IR', {
                                                    month: 'long',
                                                    day: '2-digit',
                                                    year: 'numeric'
                                                })}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )) : <div className="lg:col-span-3 sm:col-span-2 col-span-1">وبلاگی وجود ندارد.</div>}
                            </div> : <Spinner variant="dots" color='success'/>}
                            {pagination && <div className="centerOfParent">
                                <PaginationApp total={pagination.total} per_page={pagination.per_page}
                                               onChange={(page) => setCurrentPage(page)}/>
                            </div>}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;