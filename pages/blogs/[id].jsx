import React from 'react';
import formatNumber from "@/helpers/formatNumber";
import Eye from "@icons/eye-right.svg";
import Calendar from "@icons/calendar.svg";
import Timer from "@icons/stopwatch.svg";
import Image from "next/image";
import useGetRequest from "@/hooks/useGetRequest";
import {useRouter} from "next/router";
import {Chip, Spinner} from "@heroui/react";
import Comments from "@/components/Comments";
import Like from "@/components/Like";

const Blog = () => {
    const {query} = useRouter()
    const [data, , , , , loading] = useGetRequest(true, query.id && `/blogs/${query.id}`)

    return (
        <>
            {loading ?
                <Spinner className="w-full my-10 centerOfParent" color='success'/>
                : data && <div dir="rtl" className='grid lg:grid-cols-12 grid-cols-1 my-10'>
                <div className="lg:col-span-3"></div>
                <div className="flex flex-col gap-6 lg:col-span-9">
                    <div
                        className="relative sm:min-h-[638px] min-h-[260px] w-full overflow-hidden sm:rounded-2xl rounded-lg centerOfParent">
                        <Like isLike={data.is_like} id={data.id} url='blog'
                              className="absolute top-4 left-4 z-10 fill-white"/>
                        <Image
                            src={data.image}
                            width={100}
                            height={100}
                            alt={data.title}
                            className="object-cover w-full h-full"
                        />
                        <div
                            className="sm:pb-8 sm:pt-4 p-2 sm:px-6 flex flex-col sm:gap-6 gap-4 absolute bottom-0 w-full left-0 right-0 sm:rounded-b-2xl rounded-b-lg backdrop-blur-md bg-[rgba(36,52,100,0.10)]">
                            <div className="flex sm:items-center sm:justify-between sm:flex-row flex-col gap-2">
                                <div className="flex flex-wrap gap-2">
                                    {data.tags.map((e, i) => <Chip size="sm" className="sm:text-xs text-[10px]"
                                                                   key={i}>{e}</Chip>)}
                                </div>
                                <div
                                    className="sm:self-start flex items-center gap-2 sm:text-xs text-[10px] text-white whitespace-nowrap">
                                    <div className="centerOfParent gap-2">
                                        <Eye className="fill-secondary-300 sm:w-4 sm:h-4 w-3 h-3"/>
                                        <p>{formatNumber(data.view)}</p>
                                    </div>
                                    <div className="centerOfParent gap-2">
                                        <Calendar className="fill-secondary-300 sm:w-4 sm:h-4 w-3 h-3"/>
                                        <p>{(data.created_at ? new Date(data.created_at) : new Date()).toLocaleDateString('fa-IR', {
                                            day: 'numeric',
                                            month: 'long'
                                        })}</p>
                                    </div>
                                    <div className="centerOfParent gap-2">
                                        <Timer className="fill-secondary-300 sm:w-4 sm:h-4 w-3 h-3"/>
                                        <p>زمان خواندن {data.time_for_read}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 text-white">
                                <h1 className="sm:text-xl text-base font-bold">{data.title}</h1>
                                <h3 className="sm:text-base text-sm">{data.about_blog}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={`text-justify ql-editor`}
                         dangerouslySetInnerHTML={{__html: data.text}}/>
                    {/*<Comments url="blogs" id={data.id}/>*/}
                </div>
            </div>}
        </>
    );
};

export default Blog;