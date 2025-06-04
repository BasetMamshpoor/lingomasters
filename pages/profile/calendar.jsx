import React, {useState} from 'react';
import DesktopMonthly from "@/features/EducationCalendar/DesktopMonthly";
import {Input, Select, SelectItem, Tab, Tabs} from "@heroui/react";
import {useRouter} from "next/router";
import {DateObject} from "react-multi-date-picker";
import Right from "@icons/chevron-right.svg";
import Left from "@icons/arrow-left.svg";
import Search from "@icons/search.svg";
import useMediaQuery from "@/hooks/useMediaQuery";
import SmallMonthly from "@/features/EducationCalendar/SmallMonthly";
import DesktopWeekly from "@/features/EducationCalendar/DesktopWeekly";
import DesktopDaily from "@/features/EducationCalendar/DesktopDaily";
import SmallDaily from "@/features/EducationCalendar/SmallDaily";

const EducationCalendar = () => {
    const router = useRouter()
    const [selected, setSelected] = useState('all')
    const [date, setDate] = useState(new DateObject().format('YYYY-MM-DD'));
    const isNotDesktop = useMediaQuery('(max-width: 1023.98px)')

    const update = (value, _date) => {
        const Date = new DateObject(date)
        let time = router.query.time;

        if (_date) {
            const Date = new DateObject(_date)

            setDate(Date.format('YYYY-MM-DD'));
            return;
        }
        if (value === 1) {
            Date.add(time === 'week' ? 7 : 1, time === 'week' ? 'days' : time);
        } else {
            Date.subtract(time === 'week' ? 7 : 1, time === 'week' ? 'days' : time);
        }
        setDate(Date.format('YYYY-MM-DD'));
    }

    return (
        <>
            <div className="flex flex-col gap-10">
                <Tabs
                    aria-label="Tabs variants"
                    variant='underlined'
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                    fullWidth
                    classNames={{
                        tabList: 'border-b pb-0 gap-2 w-full',
                        cursor: "shadow-none w-full",
                        tabContent: 'w-full sm:text-sm text-xs',
                        tab: "py-4 h-fit ",
                        panel: 'w-full'
                    }}
                    style={{
                        "--heroui-success": "38 87% 56%",
                    }}
                    color='success'>
                    <Tab key="all" title="همه"/>
                    <Tab key="private" title="کلاس‌های خصوصی"/>
                    <Tab key="group" title="کلاس‌های گروهی"/>
                    <Tab key="vebinar" title="وبینار"/>
                    <Tab key="workshop" title="ورکشاپ"/>
                </Tabs>
                <div className="flex flex-col gap-6">
                    <div
                        className="flex sm:flex-row flex-col-reverse sm:items-center sm:justify-between sm:gap-4 gap-6 sm:bg-[#FBFCFE] sm:px-6 sm:py-3 sm:rounded-xl">
                        <div className="flex items-center gap-3 grow">
                            <Select
                                selectedKeys={[router.query.time || 'month']}
                                onChange={(el) => {
                                    const time = el.target.value;
                                    router.push({
                                        pathname: router.pathname,
                                        query: {
                                            ...router.query,
                                            time
                                        }
                                    })
                                }}
                                classNames={{
                                    label: 'text-xs font-semibold',
                                    input: 'text-xs',
                                    listbox: '[&>ul>li>span>svg]:w-3 [&>ul>li>span>svg]:h-3',
                                    base: 'max-w-[90px] bg-white'
                                }}
                                defaultValue="month"
                                radius="sm"
                                variant='bordered'
                            >
                                <SelectItem
                                    key="days"
                                    className="flex-row-reverse"
                                    textValue="روز">
                                    <p className="flex items-center flex-row-reverse justify-end w-full"
                                       dir={'auto'}>روز</p>
                                </SelectItem>
                                {!isNotDesktop && <SelectItem
                                    key="week"
                                    className="flex-row-reverse"
                                    textValue="هفته">
                                    <p className="flex items-center flex-row-reverse justify-end w-full"
                                       dir={'auto'}>هفته</p></SelectItem>}
                                <SelectItem
                                    key="month"
                                    className="flex-row-reverse"
                                    textValue="ماه">
                                    <p className="flex items-center flex-row-reverse justify-end w-full"
                                       dir={'auto'}>ماه</p></SelectItem>
                            </Select>
                            <Input
                                classNames={{base: 'sm:max-w-[220px] w-full bg-white', input: 'text-sm'}}
                                startContent={<Search className="fill-natural_gray-400"/>}
                                placeholder='جستجو'
                                variant="bordered"
                                radius="sm"
                            />
                        </div>
                        <div className="sm:flex hidden items-center gap-4">
                            <p className="font-bold text-primary-900">{new Date(date).toLocaleDateString('fa-IR', {month: 'long'})}</p>
                            <div className="flex items-center gap-2 cursor-pointer" onClick={() => update(-1)}>
                                <Right className="fill-primary-700 w-5 h-5"/>
                                <span className="text-primary-700 text-sm">قبل</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer" onClick={() => update(1)}>
                                <span className="text-primary-700 text-sm">بعد</span>
                                <Left className="fill-primary-700 w-5 h-5"/>
                            </div>
                        </div>
                        <div className="sm:hidden flex items-center justify-between gap-4 w-full">
                            <div className="flex items-center gap-2 cursor-pointer" onClick={() => update(-1)}>
                                <Right className="fill-primary-700 w-4 h-4"/>
                                <span className="text-primary-700 text-xs">قبل</span>
                            </div>
                            <p className="font-bold text-xs text-primary-900"
                               dir="ltr">{new Date(date).toLocaleDateString('fa-IR', {
                                year: router.query.time === 'month' ? 'numeric' : undefined,
                                month: 'long',
                                day: router.query.time === 'days' ? 'numeric' : undefined,
                                weekday: router.query.time === 'days' ? 'long' : undefined
                            })}</p>
                            <div className="flex items-center gap-2 cursor-pointer" onClick={() => update(1)}>
                                <span className="text-primary-700 text-xs">بعد</span>
                                <Left className="fill-primary-700 w-4 h-4"/>
                            </div>
                        </div>
                    </div>
                    {
                        router.query.time === 'days' && (!isNotDesktop ?
                            <DesktopDaily update={update} selected={selected} date={date}/>
                            : <SmallDaily update={update} date={date} selected={selected}/>)
                    }
                    {
                        router.query.time === 'week' && (!isNotDesktop ?
                            <DesktopWeekly selected={selected} date={date}/> :
                            <div className="centerOfParent w-full my-8">این مورد در حالت موبایل پشتیبانی نمی شود.</div>)
                    }
                    {
                        (router.query.time === 'month' || (router.query.time !== 'days' && router.query.time !== 'week')) && (!isNotDesktop ?
                            <DesktopMonthly selected={selected} date={date}/> :
                            <SmallMonthly date={date} selected={selected}/>)
                    }
                </div>
            </div>
        </>
    );
};

export default EducationCalendar;