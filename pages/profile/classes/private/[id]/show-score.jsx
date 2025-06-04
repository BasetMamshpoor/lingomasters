import React from 'react';
import Right from "@icons/chevron-right.svg";
import Link from "next/link";
import Edit from "@icons/edit-icon.svg";
import Download from "@icons/download.svg";
import useGetRequest from "@/hooks/useGetRequest";
import {useRouter} from "next/router";
import {Checkbox, CheckboxGroup} from "@heroui/react";

const skills = [
    'لغت',
    'گرامر',
    'گفتاری',
    'املا',
    'انشا',
    'شنیداری',
    'صحبت کردن',
    'میزان تمرکز',
    'میزان حوصله',
    'میزان مشارکت',
];

const ShowScore = () => {
    const {back, query, push} = useRouter()
    const [data] = useGetRequest(query.class && `/report/show/${query.class}`)

    return (
        data && <>
            <div className="flex flex-col gap-8 mb-8">
                <div onClick={back} className='text-primary-700 flex items-center gap-2 cursor-pointer'>
                    <Right className='fill-primary-700 w-5 h-5'/>
                    بازگشت
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-6 border border-natural_gray-200 rounded-xl p-6">
                        <div className="flex items-center justify-between">
                            <p className='text-primary-950 sm:text-base text-sm'>ثبت غیبت و تاخیر زبان‌آموز</p>
                            <Link href={`/classes/private/${query.id}/record-score?class=${query.class}`}><Edit
                                className='fill-primary-800'/></Link>
                        </div>
                        <div className="flex items-center gap-1 text-natural_gray-950 font-semibold">
                            <p>زبان آموز در این جلسه</p>
                            {data.absence === 'presence' ? 'حضور' : data.absence === 'absence' ? 'غیبت' : `تاخیر ${data.absence_time} دقیقه`}
                            <p>داشت</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 border border-natural_gray-200 rounded-xl p-6">
                        <div className="flex items-center justify-between">
                            <p className='text-primary-950 sm:text-base text-sm'>ثبت اطلاعات کتاب تدریسی در جلسه دوم</p>
                            <Link href={`/classes/private/${query.id}/record-score?class=${query.class}`}><Edit
                                className='fill-primary-800'/></Link>
                        </div>
                        <div className="flex flex-col gap-6">
                            {data.books.map(e => <div key={e.id} className="flex items-center gap-4 flex-wrap">
                                <div className="flex flex-col gap-2">
                                    <span className='text-sm text-natural_gray-950'>عنوان کتاب درسی</span>
                                    <div
                                        className="bg-primary-50 rounded-lg py-1 px-2.5 text-primary-950 font-semibold w-fit sm:text-sm text-xs">{e.title}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className='text-sm text-natural_gray-950'>صفحه شروع کتاب</span>
                                    <div
                                        className="bg-primary-50 rounded-lg py-1 px-2.5 text-primary-950 font-semibold w-fit sm:text-sm text-xs">{e.start}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className='text-sm text-natural_gray-950'>صفحه پایان کتاب</span>
                                    <div
                                        className="bg-primary-50 rounded-lg py-1 px-2.5 text-primary-950 font-semibold w-fit sm:text-sm text-xs">{e.end}
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 border border-natural_gray-200 rounded-xl p-6">
                        <div className="flex items-center justify-between">
                            <p className='text-primary-950 sm:text-base text-sm'>ثبت تکالیف و تمرین‌ها</p>
                            <Link href={`/classes/private/${query.id}/record-score?class=${query.class}`}><Edit
                                className='fill-primary-800'/></Link>
                        </div>
                        <div className="flex flex-col gap-6">
                            {data.home_works.map((e, i) => <div key={e.id} className="flex flex-col gap-2">
                                <p className="text-natural_gray-950 text-sm">تمرین {i + 1}</p>
                                <div
                                    className="bg-primary-50 rounded-lg py-1 px-2.5 text-primary-950 font-semibold w-fit sm:text-sm text-xs">{e.title}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-natural_gray-950 text-sm">جواب تمرین</p>
                                    <div
                                        className="bg-natural_gray-50 rounded-lg py-3 px-6 flex items-center justify-between">
                                        <div
                                            className="border-dashed border-natural_gray-300 bg-white rounded-lg px-4 py-5 max-w-xs flex items-center gap-4">
                                            <div className="grow flex items-center gap-2">
                                                <div className="centerOfParent bg-natural_gray-50 rounded-full w-8 h-8">
                                                    <Download/>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-natural_gray-950 text-sm">دانلود کنید</p>
                                                </div>
                                            </div>
                                            <a download
                                               className='text-white bg-primary-950 rounded py-2 px-4'>دانلود</a>
                                        </div>
                                        <Checkbox
                                            color="success"
                                            style={{
                                                "--heroui-success": "196 94% 25%",
                                            }}
                                            radius='none'
                                            classNames={{icon: 'text-white', label: 'text-primary-950 text-xs'}}
                                        >تصحیح کردم</Checkbox>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <div className="p-6 flex flex-col gap-6 border border-natural_gray-200 rounded-xl">
                        <div className="flex items-center justify-between">
                            <p className='text-primary-950 sm:text-base text-sm'>ثبت آزمون‌های کلاسی</p>
                            <Link href={`/classes/private/${query.id}/record-score?class=${query.class}`}><Edit
                                className='fill-primary-800'/></Link>
                        </div>
                        <Checkbox
                            isSelected={true}
                            color="success"
                            style={{
                                "--heroui-success": "196 94% 25%",
                            }}
                            radius='sm'
                            classNames={{icon: 'text-white', label: 'text-primary-950 font-semibold'}}
                        >این جلسه آزمون گرفتم</Checkbox>
                        <div className="flex flex-col gap-2">
                            <span className='text-sm text-natural_gray-950'>نام آزمون</span>
                            <div
                                className="bg-primary-50 rounded-lg py-1 px-2.5 text-primary-950 font-semibold w-fit sm:text-sm text-xs">{data.exam_name}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-natural_gray-950 sm:text-sm text-xs'>بخش‌های موجود در آزمون</p>
                            <div dir='auto'
                                 className="bg-primary-50 rounded-lg py-1 px-2.5 text-primary-950 font-semibold w-fit lg:text-base sm:text-sm text-xs">{data.exam_part?.map(skill => skill.charAt(0).toUpperCase() + skill.slice(1)).join(' _ ')}</div>
                        </div>
                        <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4">
                            {data.exam_part?.map(e => {
                                return (
                                    <div key={e} className='flex flex-col gap-2'>
                                        <p className='text-natural_gray-950 sm:text-sm text-xs'>نمره {e.charAt(0).toUpperCase() + e.slice(1)}</p>
                                        <div
                                            className="bg-primary-50 rounded-lg py-1 px-2.5 text-primary-950 font-semibold w-fit sm:text-sm text-xs">{data[e]}/10
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4">
                            <div className='flex flex-col gap-2'>
                                <p className='text-natural_gray-950 sm:text-sm text-xs'>نمره کل</p>
                                <div
                                    className="bg-primary-50 rounded-lg py-1 px-2.5 text-primary-950 font-semibold w-fit sm:text-sm text-xs">{data.final}/100
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-natural_gray-950 sm:text-sm text-xs'>وضعیت</p>
                                <div
                                    className={`${data.student_status === 'passed' ? 'bg-green-500' : 'bg-rose-600'}  rounded-lg py-1 px-2.5 text-white font-semibold w-fit sm:text-sm text-xs`}>{data.student_status === 'passed' ? 'پاس شده' : 'رد شده'}</div>
                            </div>
                        </div>
                        {data.exam_solutions.map((e, i) => (
                            <div key={e.id} className='flex flex-col gap-2'>
                                <p className='text-natural_gray-950 sm:text-sm text-xs'>راهکار {i + 1}</p>
                                <div
                                    className="bg-primary-50 rounded-lg py-1 px-2.5 text-primary-950 font-semibold w-fit sm:text-sm text-xs whitespace-pre-line">{e.value}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-6 border border-natural_gray-200 rounded-xl p-6">
                        <div className="flex items-center justify-between">
                            <p className='text-primary-950 sm:text-base text-sm'>ثبت نقاط قوت زبان‌آموز</p>
                            <Link href={`/classes/private/${query.id}/record-score?class=${query.class}`}><Edit
                                className='fill-primary-800'/></Link>
                        </div>
                        <div className="flex flex-col gap-6">
                            {data.strengths.map((e, i) => <div key={i} className="flex flex-col gap-2">
                                <p className="text-natural_gray-950 text-sm">نقطه قوت {i + 1}</p>
                                <div
                                    className="bg-success-600 rounded-lg py-1 px-2.5 text-white font-semibold w-fit sm:text-sm text-xs">{e.value}
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 border border-natural_gray-200 rounded-xl p-6">
                        <div className="flex items-center justify-between">
                            <p className='text-primary-950 sm:text-base text-sm'>ثبت نقاط ضعف زبان‌آموز</p>
                            <Link href={`/classes/private/${query.id}/record-score?class=${query.class}`}><Edit
                                className='fill-primary-800'/></Link>
                        </div>
                        <div className="flex flex-col gap-6">
                            {data.strengths.map((e, i) => <div key={i} className="flex flex-col gap-2">
                                <p className="text-natural_gray-950 text-sm">نقطه ضعف {i + 1}</p>
                                <div
                                    className="rounded-lg py-1 px-2.5 text-secondary-600 bg-secondary-200 font-semibold w-fit sm:text-sm text-xs">{e.value}
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 border border-natural_gray-200 rounded-xl p-6">
                        <div className="flex items-center justify-between">
                            <p className='text-primary-950 sm:text-base text-sm'>ثبت راهکارهای پیشنهادی به زبان‌آموز</p>
                            <Link href={`/classes/private/${query.id}/record-score?class=${query.class}`}><Edit
                                className='fill-primary-800'/></Link>
                        </div>
                        {data.solutions.map((e, i) => (
                            <div key={e.id} className='flex flex-col gap-2'>
                                <p className='text-natural_gray-950 sm:text-sm text-xs'>راهکار {i + 1}</p>
                                <div
                                    className="bg-primary-50 rounded-lg py-1 px-2.5 text-primary-950 font-semibold w-fit sm:text-sm text-xs whitespace-pre-line">{e.value}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <p className="text-primary-950 font-semibold ">برای این جلسه زبان‌آموز به هرکدام از
                                توانایی‌هاش
                                در
                                کلاس نمره دهید.</p>
                            <Link href={`/classes/private/${query.id}/record-score?class=${query.class}`}><Edit
                                className='fill-primary-800'/></Link>
                        </div>
                        <div className="flex flex-col">
                            <div
                                className="grid grid-cols-6 bg-primary-100 border border-natural_gray-200 rounded-t-lg py-3">
                                <div className="centerOfParent text-xs">معیار ها</div>
                                <div className="centerOfParent text-xs">عالی</div>
                                <div className="centerOfParent text-xs">خوب</div>
                                <div className="centerOfParent text-xs">متوسط</div>
                                <div className="centerOfParent text-xs">نیاز به تلاش بیشتر</div>
                                <div className="centerOfParent text-xs">بد</div>
                            </div>
                            {skills.map((e, i) => (
                                <div key={e}
                                     className={`grid grid-cols-6 py-3 border-x border-natural_gray-200 border-b ${skills.length - 1 === i ? "rounded-b-lg" : ""}`}>
                                    <div className="centerOfParent text-xs">{e}</div>
                                    <CheckboxGroup
                                        color='success'
                                        style={{
                                            "--heroui-success": "196 94% 25%",
                                        }}
                                        classNames={{wrapper: 'grid grid-cols-5 gap-0', base: 'col-span-5',}}
                                        value={data.skills[i] ? [data.skills[i]] : []}
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <>
                                                <Checkbox radius="sm" classNames={{
                                                    base: 'centerOfParent max-w-full px-0 m-0',
                                                    wrapper: 'ml-0',
                                                    icon: 'text-white'
                                                }} value={i + 1}/>
                                            </>
                                        ))}
                                    </CheckboxGroup>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowScore;