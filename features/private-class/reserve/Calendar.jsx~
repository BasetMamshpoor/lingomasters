import React, {useEffect, useState} from 'react';
import generateWeeklyScheduleForPeriod from '@/func/generateWeeklyScheduleForPeriod';
import Icon from '@icons/calendar.svg';
import Arrow from '@icons/arrow-left.svg';
import {Accordion, AccordionItem, addToast, Checkbox, Spinner} from "@heroui/react";
import useGetRequest from '@/hooks/useGetRequest';
import weekDaysJson from 'func/Calendar.json'
import usePostRequest from "@/hooks/usePostRequest";
import Login from "@/pages/auth/login";

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

const Calendar = ({setState, state, setSteps, id}) => {
    const [weekDays, setWeekDays] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState(new Set(["بامداد"]))
    const [saturday, setSaturday] = useState(getStartOfWeek(new Date()));

    const [data, s, r, p, sp, isLoading] = useGetRequest(false, `/teachers/1/time-slots?start_date=${formatDate(saturday)}`)
    const {sendPostRequest, isLoading: isLoading2} = usePostRequest()

    useEffect(() => {
        generateWeekDays(saturday);
    }, [saturday]);

    const generateWeekDays = (date) => {
        date.setDate(date.getDate() - ((date.getDay() + 1) % 7));
        const days = [];

        for (let i = 0; i < 7; i++) {
            const day = new Date(date);
            day.setDate(date.getDate() + i);
            days.push(day);
        }

        setWeekDays(days);
    };

    const handleNext = () => {
        const nextWeek = new Date(saturday);
        nextWeek.setDate(saturday.getDate() + 7);
        setSaturday(nextWeek);
    };

    const isToday = (date) => {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    };

    const toJalaliDate = (date) => {
        const options = {month: 'numeric', day: 'numeric'};
        const formattedDate = new Date(date).toLocaleDateString('fa-IR', options);
        const weekDays = new Date(date).toLocaleDateString('fa-IR', {weekday: 'long'});
        return (
            <div className='flex sm:flex-row flex-col items-center gap-1'>
                <span className='sm:block hidden text-xs font-bold'>{weekDays}</span>
                <span className='sm:hidden block text-xs font-bold'>{weekDays[0]}</span>
                <span className='text-xs'>{formattedDate}</span>
            </div>
        );
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

    const handleSubmit = async () => {
        if (state.times < 1) {
            addToast({
                color: 'danger',
                description: 'لطفا حداقل یک زمان را انتخاب کنید.',
            })
            return;
        }
        const {
            success,
            successMessage,
            errorMessage,
            data
        } = await sendPostRequest('POST', `/private-reserve/${id}`, state, !!state.evidence, true)
        if (success) {
            addToast({
                color: 'success',
                description: successMessage,
            })
            setState(prev => ({...prev, id: data.response.data}))
            setSteps(p => p + 1)
        } else
            addToast({
                color: 'danger',
                description: errorMessage,
            })
    }

    return (
        <>
            <div className="col-span-3 flex flex-col gap-6">
                <div
                    className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-24"
                    id='calendar'>
                    <div className="centerOfParent gap-2 w-fit">
                        <div className="centerOfParent"><Icon className='w-5 h-5 fill-primary-700'/></div>
                        <span className='sm:text-base text-sm text-primary-950'>تقویم آموزشی</span>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex justify-between items-center w-full">
                            <button type='button' className='flex items-center gap-2 text-primary-500'
                                    onClick={handlePrev}>
                                <div className="centerOfParent"><Arrow className='fill-primary-600 rotate-180'/></div>
                                هفته قبل
                            </button>
                            <p className='text-black'>{new Date(saturday).toLocaleDateString('fa-IR', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            })}</p>
                            <button type='button' className='flex items-center gap-2 text-primary-500'
                                    onClick={handleNext}>
                                هفته بعد
                                <div className="centerOfParent"><Arrow className='fill-primary-600'/></div>
                            </button>
                        </div>
                    </div>
                    {!isLoading && <div className="flex items-center justify-between gap-0.5 border-b mx-2">
                        {weekDays.map((day, index) => (
                            <div
                                key={index}
                                className={`flex flex-col gap-2 items-center p-3 border-b sm:border-x-0 sm:border-t-0 sm:rounded-none border-t border-l
                                                                            ${index === 0 ? 'border-r rounded-r-lg' : index === 6 ? 'rounded-l-lg' : ''}
                                                                            ${
                                    isToday(day)
                                        ? 'sm:bg-natural_gray-50 bg-white text-primary-800 sm:border-primary-800'
                                        : 'bg-white text-natural_gray-900 border-natural_gray-200'
                                }`}
                            >
                                {toJalaliDate(day)}
                            </div>
                        ))}
                    </div>}
                    {isLoading ? <div className='centerOfParent'><Spinner size='lg' color="success"/>
                    </div> : <Accordion
                        itemClasses={{
                            heading: 'bg-primary-50 py-2 px-4 rounded-lg [&>button>div>span]:text-center text-natural_gray-900 h-12',
                            indicator: 'hidden',
                            base: 'mb-4'
                        }}
                        selectedKeys={selectedKeys}
                        showDivider={false}
                        onSelectionChange={setSelectedKeys}>
                        {Object.keys(weekDaysJson.periods).map(d => {
                            return <AccordionItem key={d} aria-label="weekday" title={d}>
                                <div className="flex items-center justify-between sm:gap-0.5">
                                    {weeklySchedule.map((d, i) => {
                                        return (
                                            <table className="w-[88px] table-auto lg:text-base sm:text-xs text-[10px]"
                                                   key={i}>
                                                <tbody>
                                                {d.schedule.map((t, index, array) => {
                                                    const nextItem = array[index + 1];
                                                    const shouldAddBorder = !nextItem || nextItem.status === 'inactive' || nextItem.status === 'reserved'

                                                    return <tr key={t.time}>
                                                        <td
                                                            className={`py-2 sm:border-l border-t border-r centerOfParent sm:gap-1 border-natural_gray-300 sm:text-sm text-[10px] ${shouldAddBorder ? 'border-b' : ''}
                                                        ${t.status == 'inactive' ? '!bg-natural_gray-50 text-natural_gray-50 border-none'
                                                                : t.status == 'reserved' ? '!bg-neutral-50 text-natural_gray-700' : ''}`}>
                                                            {(t.status == 'open') ?
                                                                <Checkbox
                                                                    isSelected={state.times.includes(t.id)}
                                                                    onValueChange={isSelected => setState(prev => ({
                                                                        ...prev,
                                                                        times: isSelected
                                                                            ? [...prev.times, t.id]
                                                                            : prev.times.filter(timeId => timeId !== t.id)
                                                                    }))}
                                                                    className='py-2'
                                                                    classNames={{icon: 'text-white'}} size='sm'
                                                                    color="success" radius='sm'
                                                                    style={{
                                                                        "--heroui-success": "196 94% 25%",
                                                                    }}>
                                                                <span
                                                                    className='text-center sm:text-sm text-[10px]'>{t.time}</span></Checkbox> : t.status === 'reserved' ? "رزرو شده" : '-'}
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
                    </Accordion>}
                </div>
                <div className="flex items-end self-end gap-6">
                    <button
                        onClick={() => setSteps(prev => prev - 1)} type='button'
                        className='w-44 effect-1 sm:text-base text-xs flex-[1_0_0] sm:px-6 px-4 sm:py-4 py-2 rounded border-secondary-500 sm:border-[1.5px] border text-secondary-500 centerOfParent'>بازگشت
                    </button>
                    <button
                        disabled={isLoading2}
                        onClick={handleSubmit} type='button'
                        className="w-44 effect-2 sm:py-4 py-2 sm:px-6 px-4 sm:text-base text-xs rounded disabled:bg-natural_gray-700 text-white bg-primary-600 sm:w-[140px] self-end">{isLoading2 ? 'در حال ثبت' : 'ثبت'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Calendar;