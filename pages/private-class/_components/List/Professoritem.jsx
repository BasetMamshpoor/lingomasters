import React, { useState } from 'react';
import Star from '@icons/magic-star.svg'
import EyeIcon from "@icons/eye-right.svg";
import HeartIcon from "@icons/heart.svg";
import Image from "next/image";
import { Card, CardBody, ScrollShadow, Tab, Tabs } from "@nextui-org/react";
import Link from "next/link";
import Video from "@icons/video.svg";
import UserIcon from "@icons/user-tick.svg";
import DownIcon from "@icons/arrow-down.svg";
import CardVideo from "@/components/Video/Card";

const List = (r) => (
    <div className="grid gap-4 grid-cols-2 [&>div]:h-8 w-full [&>div]:rounded-md [&>div]:bg-primary-50 [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:gap-1 text-xs [&>div>span]:whitespace-nowrap">
        <div className='col-span-1'>
            <span className="text-natural_gray-700">نوع تدریس</span>
            <span className="text-black">{r.teaching_types.join(' | ')}</span>
        </div>
        <div className='col-span-1'>
            <span className="text-natural_gray-700">تعداد زبان آموز</span>
            <span className="text-black">{r.students_count}</span>
        </div>
        <div className='col-span-1'>
            <span className="text-natural_gray-700">کشور</span>
            <span className="text-black">{r.country}</span>
        </div>
        <div className='col-span-1'>
            <span className="text-natural_gray-700">شهر</span>
            <span className="text-black">{r.city}</span>
        </div>
        <div className='col-span-1'>
            <span className="text-natural_gray-700">منطقه</span>
            <span className="text-black">{r.region}</span>
        </div>
        <div className='col-span-1'>
            <span className="text-natural_gray-700">تدریس برای</span>
            <span className="text-black">{r.genders.join(' | ')}</span>
        </div>
        <div className='col-span-1'>
            <span className="text-natural_gray-700">تعیین سطح</span>
            <span className="text-black">{r.teaching_types.join(' | ')}</span>
        </div>
        <div className='col-span-1'>
            <span className="text-natural_gray-700">کلاس آزمایشی</span>
            <span className="text-black">{r.teaching_types.join(' | ')}</span>
        </div>
        <div className='col-span-1'>
            <span className="text-natural_gray-700">میزان حضور استاد</span>
            <span className="text-black">{r.attendance}</span>
        </div>
        <div className='col-span-1'>
            <span className="text-natural_gray-700">جلسه ۲۵ دقیقه‌ای</span>
            <span className="text-black hasToman">{r.price}</span>
        </div>
        <div className='col-span-2 sm:col-span-1'>
            <span className="text-natural_gray-700">کلاس های خصوصی برگزار شده</span>
            <span className="text-black">{r.private_classes_count}</span>
        </div>
        <div className='col-span-2 sm:col-span-1'>
            <span className="text-natural_gray-700">کلاس های گروهی برگزار شده</span>
            <span className="text-black">{r.group_classes_count}</span>
        </div>
        <div className='col-span-2 sm:col-span-1'>
            <span className="text-natural_gray-700">گروه سنی</span>
            <span className="text-black">{r.age_groups.join(' | ')}</span>
        </div>
        <div className='col-span-2 sm:col-span-1'>
            <span className="text-natural_gray-700">سطح زبان</span>
            <span className="text-black">{r.language_levels.join(' | ')}</span>
        </div>
        <div className='col-span-2 sm:col-span-1'>
            <span className="text-natural_gray-700">وبینارهای برگزار شده</span>
            <span className="text-black">{r.private_classes_count}</span>
        </div>
        <div className='col-span-2 sm:col-span-1'>
            <span className="text-natural_gray-700">ورکشاپ های برگزار شده</span>
            <span className="text-black">{r.private_classes_count}</span>
        </div>
    </div>
)

const ProfessorItem = ({ r = { languages: [], teaching_types: [], genders: [], teaching_types: [], age_groups: [], language_levels: [] } }) => {
    const [detail, setDetail] = useState(false);
    return (
        <>
            <div className="w-full py-8 px-6 bg-white rounded-xl border border-natural_gray-100 grid grid-cols-1 md:grid-cols-12 items-stretch md:gap-6">
                <div className="flex flex-col col-span-7 w-full gap-6">
                    <div className="flex flex-col gap-6 justify-between">
                        {/* head */}
                        <div className="flex items-start gap-3 justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 rounded-full overflow-hidden">
                                    <Image src={r?.profile || '/images/image 144.png'} alt={r.name} width={0} height={0} sizes="100vw" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col justify-between gap-1">
                                    <h6 className="sm:text-lg">{r.name}</h6>
                                    <div className="gap-1 flex items-center">
                                        <div className="centerOfParent"><Star className="w-4 h-4" /></div>
                                        <p className="text-xs text-natural_gray-900">۴.۸</p>
                                        <span className="text-[10px] text-natural_gray-500">از ۸۰ نظر</span>
                                    </div>
                                    <div className="gap-2 flex items-center">
                                        {r.languages.length && r.languages.map(l => <div key={l} className="centerOfParent w-5 h-5"><Image src={l} width={0} height={0} sizes="100vw" className="w-full h-full object-contain" /></div>)}
                                    </div>
                                </div>
                            </div>
                            <div className="flex sm:flex-row flex-col sm:h-fit h-full sm:justify-start justify-between items-center gap-6">
                                <div className="gap-1 flex items-center">
                                    <div className="centerOfParent">
                                        <EyeIcon className="fill-primary-800 w-4 h-4" />
                                    </div>
                                    <div className="text-sm">5K</div>
                                </div>
                                <div className="centerOfParent">
                                    <HeartIcon />
                                </div>
                            </div>
                        </div>
                        {/* body */}
                        <div className="flex-col flex gap-6">
                            <div className="gap-8 h-full w-full hidden md:flex flex-col items-center">
                                {List(r)}
                            </div>
                            <div className="flex xs:gap-6 gap-2 w-full md:hidden">
                                <div className="px-3 cursor-pointer py-2 border text-sm border-secondary-300 rounded text-secondary-500 flex justify-center gap-2 w-full" onClick={() => setDetail(!detail)}>
                                    جزئیات بیشتر
                                    <div className="centerOfParent">
                                        <DownIcon className={`w-5 h-5 fill-secondary-500 `} />
                                    </div>
                                </div>
                                <Link href={`/professor/${r.id}`} className="px-4 py-2.5 text-sm border-1 text-white rounded bg-primary-600 text-center w-full">
                                    انتخاب استاد
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link href={`/professor/${r.id}`} className="w-full h-8 effect-2 bg-primary-700 text-white items-center md:flex hidden justify-center rounded py-4">
                        انتخاب استاد
                    </Link>
                </div>
                {/* tabs video & description */}
                <div className={`flex-col md:col-span-5 col-span-1 md:gap-14 gap-4 ${detail ? "flex" : "hidden md:flex"}`}>
                    <Tabs
                        aria-label="Options"
                        color="primary"
                        variant="underlined"
                        className="justify-center flex"
                        classNames={{
                            tabList: "sm:gap-6 relative",
                            cursor: "w-full bg-primary-800 h-px",
                            tab: "max-w-fit sm:px-4 h-12",
                            panel: 'py-0 [&>div]:shadow-none [&>div>div]:!p-0',
                            tabContent: "group-data-[selected=true]:[&>div>span]:text-primary-800 group-data-[selected=true]:[&>div>div>svg]:fill-primary-800"
                        }}
                    >
                        <Tab
                            key="video"
                            title={
                                <div className="flex items-center gap-2">
                                    <div className="centerOfParent">
                                        <Video />
                                    </div>
                                    <span className="text-sm text-natural_gray-800">
                                        ویدیو
                                    </span>
                                </div>
                            }
                        >
                            <Card>
                                <CardBody><CardVideo bgSrc='/images/image 144.png' movie='j' className='!max-h-full h-full w-full' /></CardBody>
                            </Card>
                        </Tab>
                        <Tab
                            key="description"
                            title={
                                <div className="flex items-center gap-2">
                                    <div className="centerOfParent">
                                        <UserIcon />
                                    </div>
                                    <span className="text-sm text-natural_gray-800">
                                        معرفی
                                    </span>
                                </div>
                            }
                        >
                            <Card>
                                <CardBody>
                                    <ScrollShadow hideScrollBar className="max-h-96">
                                        <p className="font-normal text-justify">{r.about_text}</p>
                                    </ScrollShadow>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                    <div className="gap-8 h-full w-full md:hidden flex flex-col items-center">
                        {List(r)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfessorItem;