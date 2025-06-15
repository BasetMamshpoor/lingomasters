import React from 'react';
import formatNumber from "@/helpers/formatNumber";
import Eye from "@icons/eye-right.svg";
import Question from "@icons/question-circle.svg";
import Book from "@icons/book2.svg";
import Calendar from "@icons/calendar.svg";
import Timer from "@icons/stopwatch.svg";
import Image from "next/image";
import useGetRequest from "@/hooks/useGetRequest";
import {useRouter} from "next/router";
import {Accordion, AccordionItem, Chip, Spinner} from "@heroui/react";
import Comments from "@/components/Comments";
import Like from "@/components/Like";
import Link from "next/link";
import ExamItem from "@/features/exams/ExamItem";

const Exam = () => {
        const {query} = useRouter()
        const [data, , , , , loading] = useGetRequest(true, query.id && `/exams/${query.id}/detail`)

        return (
            <>
                {loading ?
                    <Spinner className="w-full my-10 centerOfParent" color='success'/>
                    : data &&
                    <div className="flex flex-col gap-8">
                        <div dir="rtl" className='grid lg:grid-cols-12 grid-cols-1 my-10 gap-6'>
                            <div className="lg:col-span-3 flex flex-col gap-6">
                                <div
                                    className="px-4 py-6 bg-white rounded border border-natural_gray-200 flex flex-col items-center gap-6">
                                    <p className="text-natural_gray-950 lg:text-lg sm:text-base text-sm">آزمون {data.name} چیست</p>
                                    <p className="text-natural_gray-900 sm:text-sm text-xs">از سیر تا پیاز در مورد آزمون
                                        {data.name} </p>
                                    <Link href={`/exams/plus/${data.exam_id}/checkout`}
                                          className='text-white bg-primary-600 rounded py-2 px-4 w-full text-sm centerOfParent'>رزرو
                                        آزمون</Link>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <p className="lg:text-lg sm:text-base text-sm">در این مقاله</p>
                                    <ul className="flex flex-col gap-2.5 text-natural_gray-900 sm:text-sm text-xs [&>li]:py-2.5 [&>li]:px-5 [&>li]:text-natural_gray-950">
                                        {data.summaries?.map((e, i) => (
                                            <li key={i}>{e}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 lg:col-span-9">
                                <div
                                    className="relative sm:min-h-[638px] min-h-[260px] w-full overflow-hidden sm:rounded-2xl rounded-lg centerOfParent">
                                    <Like isLike={data.Is_liked} id={data.exam_id} url='exams'
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
                                                {data.tags?.map((e, i) => <Chip size="sm" className="sm:text-xs text-[10px]"
                                                                                key={i}>{e}</Chip>)}
                                            </div>
                                            <div
                                                className="sm:self-start flex items-center gap-2 sm:text-xs text-[10px] text-white whitespace-nowrap">
                                                <div className="centerOfParent gap-2">
                                                    <Eye className="fill-secondary-300 sm:w-4 sm:h-4 w-3 h-3"/>
                                                    <p>{formatNumber(data.count_views)}</p>
                                                </div>
                                                <div className="centerOfParent gap-2">
                                                    <Calendar className="fill-secondary-300 sm:w-4 sm:h-4 w-3 h-3"/>
                                                    <p>{(data.created_at &&
                                                        new Date(data.created_at)).toLocaleDateString('fa-IR', {
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
                                            <h3 className="sm:text-base text-sm">{data.about}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className={`text-justify ql-editor`}
                                     dangerouslySetInnerHTML={{__html: data.description}}/>
                                <Comments url="exams" id={data.exam_id}/>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <Question/>
                                        <p className="text-primary-950 sm:text-lg">سوالات</p>
                                    </div>
                                    <Accordion
                                        variant="splitted"
                                    >
                                        {data.questions?.map((question, index) => (
                                                <AccordionItem
                                                    classNames={{
                                                        base: 'shadow-none border rounded-lg border-natural_gray-100',
                                                        content: 'bg-natural_gray-50 mb-4 p-4 text-sm'
                                                    }}
                                                    key={index}
                                                    aria-label={question.question}
                                                    title={question.question}>
                                                    {question.answer}
                                                </AccordionItem>
                                            )
                                        )}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 items-center">
                            <div className="flex items-center gap-4">
                                <p className="sm:text-lg">آزمون‌های مشابه</p>
                                <Book className="fill-primary-600"/>
                            </div>
                            <div
                                className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-5 gap-4">
                                {data.exams?.map(e => <ExamItem key={e.id} {...e}/>)}
                            < /div>
                        </div>
                    </div>}
            </>
        );
    }
;

export default Exam;