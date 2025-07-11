import React, {useState} from 'react';
import generateWeeklyScheduleForPeriod from '@/func/generateWeeklyScheduleForPeriod';
import Icon from '@icons/calendar.svg';
import Arrow from '@icons/arrow-left.svg';
import {Accordion, AccordionItem} from "@heroui/react";
import useGetRequest from '@/hooks/useGetRequest';
import weekDays from '@/func/Calendar.json'

const getStartOfWeek = (date) => {
    const currentDay = date.getDay();
    const diffToSaturday = (currentDay + 1) % 7;
    const saturdayDate = new Date(date);
    saturdayDate.setDate(date.getDate() - diffToSaturday);
    return saturdayDate;
};
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

const Calendar = ({id}) => {
    const [selectedKeys, setSelectedKeys] = useState(new Set(["بامداد"]))
    const [saturday, setSaturday] = useState(getStartOfWeek(new Date()));

    const [data] = useGetRequest(false, `/teachers/${id}/time-slots?start_date=${formatDate(saturday)}`)


    const handleNext = () => {
        const nextWeek = new Date(saturday);
        nextWeek.setDate(saturday.getDate() + 7);
        setSaturday(nextWeek);
    };


    const handlePrev = () => {
        const previousWeek = new Date(saturday);
        previousWeek.setDate(saturday.getDate() - 7);
        setSaturday(previousWeek);
    };

    if (!data) {
        return
    }

    const weeklySchedule = generateWeeklyScheduleForPeriod(selectedKeys.values().next().value, data)

    return (
        <>
            <div
                className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-52"
                id='calendar'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Icon className='w-5 h-5 fill-primary-700'/></div>
                    <span className='sm:text-base text-sm text-primary-950'>تقویم آموزشی</span>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex justify-between items-center w-full">
                        <button type='button' className='flex items-center gap-2 text-primary-500' onClick={handlePrev}>
                            <div className="centerOfParent"><Arrow className='fill-primary-600 rotate-180'/></div>
                            هفته قبل
                        </button>
                        <p className='text-black'>{new Date(saturday).toLocaleDateString('fa-IR', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        })}</p>
                        <button type='button' className='flex items-center gap-2 text-primary-500' onClick={handleNext}>
                            هفته بعد
                            <div className="centerOfParent"><Arrow className='fill-primary-600'/></div>
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-0.5 border-b mx-2">
                    <div className="py-4 w-[88px] text-center px-2 bg-natural_gray-50 text-primary-800">
                        <span className='sm:block hidden'>شنبه</span>
                        <span className='sm:hidden'>ش</span>
                    </div>
                    <div className="py-4 w-[88px] text-center px-2 text-natural_gray-900">
                        <span className='sm:block hidden'>یکشنبه</span>
                        <span className='sm:hidden'>ی</span>
                    </div>
                    <div className="py-4 w-[88px] text-center px-2 text-natural_gray-900">
                        <span className='sm:block hidden'>دوشنبه</span>
                        <span className='sm:hidden'>د</span>
                    </div>
                    <div className="py-4 w-[88px] text-center px-2 text-natural_gray-900">
                        <span className='sm:block hidden'>سه‌شنبه</span>
                        <span className='sm:hidden'>س</span>
                    </div>
                    <div className="py-4 w-[88px] text-center px-2 text-natural_gray-900">
                        <span className='sm:block hidden'>چهارشنبه</span>
                        <span className='sm:hidden'>چ</span>
                    </div>
                    <div className="py-4 w-[88px] text-center px-2 text-natural_gray-900">
                        <span className='sm:block hidden'>پنج‌شنبه</span>
                        <span className='sm:hidden'>پ</span>
                    </div>
                    <div className="py-4 w-[88px] text-center px-2 text-natural_gray-900">
                        <span className='sm:block hidden'>جمعه</span>
                        <span className='sm:hidden'>ج</span>
                    </div>
                </div>
                <Accordion
                    itemClasses={{
                        heading: 'bg-primary-50 py-2 px-4 rounded-lg [&>button>div>span]:text-center text-natural_gray-900 h-12',
                        indicator: 'hidden',
                        base: 'mb-4'
                    }}
                    selectedKeys={selectedKeys}
                    showDivider={false}
                    onSelectionChange={setSelectedKeys}>
                    {Object.keys(weekDays.periods).map(d => {
                        return <AccordionItem key={d} aria-label="weekday" title={d}>
                            <div className="flex items-center justify-between sm:gap-0.5">
                                {weeklySchedule.map((d, i) => {
                                    return (
                                        <table className="w-[88px] table-auto lg:text-base sm:text-xs text-[10px]"
                                               key={i}>
                                            <tbody>
                                            {d.schedule.map((t, index, array) => {
                                                const leftColumn = weeklySchedule[i + 1];
                                                const leftCell =
                                                    leftColumn?.schedule[index];

                                                const shouldKeepLeftBorder =
                                                    leftCell && ["open", "reserved"].includes(leftCell.status);

                                                const nextItem = array[index + 1];
                                                const shouldAddBorder = !nextItem || nextItem.status === 'inactive'
                                                return <tr key={t.time}>
                                                    <td
                                                        className={`py-2 border-t border-r centerOfParent sm:gap-1 border-natural_gray-300 sm:text-sm text-[8px] border-l ${shouldAddBorder ? 'border-b' : ''} ${shouldKeepLeftBorder ? "sm:border-l border-l-0" : ""}
                                                        ${t.status == 'inactive' ? '!bg-natural_gray-50 text-natural_gray-50 border-natural_gray-50'
                                                            : t.status == 'reserved' ? '!bg-neutral-50 text-natural_gray-700' : ''}`}>
                                                        {t.status == 'reserved' ? ('رزرو شده') : t.status == 'inactive' ? '-' :
                                                            <span className='text-center'>{t.time}</span>}
                                                    </td>
                                                </tr>
                                            })}
                                            </tbody>
                                        </table>
                                    )
                                })}
                            </div>
                        </AccordionItem>
                    })}
                </Accordion>
            </div>
        </>
    );
};

export default Calendar;