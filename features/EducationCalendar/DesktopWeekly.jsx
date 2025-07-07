import React, {useEffect, useMemo, useState} from 'react';
import {Button, Spinner,} from "@heroui/react";
import ThreeDots from '@icons/threedots.svg';
import useGetRequest from "@/hooks/useGetRequest";
import formatDatePhp from "@/utils/formatDate";
import Link from "next/link";

const add30Minutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + 30;
    const newHours = Math.floor(totalMinutes / 60)
        .toString()
        .padStart(2, '0');
    const newMinutes = (totalMinutes % 60).toString().padStart(2, '0');
    return `${newHours}:${newMinutes}`;
};

const DesktopWeekly = ({date, selected}) => {
    const [weekDays, setWeekDays] = useState([]);
    const [classes, , , , , isLoading] = useGetRequest(true, `/student/calendar/weekly?date=${date}&type=${selected}`);
    const [data, , , , , dataLoading] = useGetRequest(true, '/reservation')

    useEffect(() => {
        generateWeekDays(new Date(date));
    }, [date]);

    const generateWeekDays = (_date) => {
        _date.setDate(_date.getDate() - ((_date.getDay() + 1) % 7));
        const days = [];

        for (let i = 0; i < 7; i++) {
            const day = new Date(_date);
            day.setDate(_date.getDate() + i);
            days.push(day);
        }

        setWeekDays(days);
    };

    const toJalaliDate = (date) => {
        const options = {month: 'numeric', day: 'numeric', year: 'numeric'};
        const formattedDate = new Date(date).toLocaleDateString('fa-IR', options);
        const weekDays = new Date(date).toLocaleDateString('fa-IR', {weekday: 'long'});
        return (
            <div className='flex flex-col items-center gap-1'>
                <span className='sm:block hidden text-xs font-bold'>{weekDays}</span>
                <span className='text-xs'>{formattedDate}</span>
            </div>
        );
    };

    const isToday = (date) => {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    };

    const classMap = new Map(
        classes?.map(item => [`${item.date}-${item.time}`, item])
    );
    const times = useMemo(() => {
        if (data)
            return Object.values(data.periods).flatMap(period =>
                Object.keys(period)
            )
    }, [data]);

    return (<>
        <div className="flex flex-col gap-6 mb-10">
            {!dataLoading && <div className="w-[84%] grid grid-cols-7 self-end">
                {weekDays.map((day, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-2 items-center p-3 border-b border-t border-l ${index === 0 ? 'border-r rounded-r-lg' : index === 6 ? 'rounded-l-lg' : ''} ${isToday(day) ? 'bg-white text-primary-800' : 'bg-white text-natural_gray-900 border-natural_gray-200'}`}
                    >
                        {toJalaliDate(day)}
                    </div>
                ))}
            </div>}
            {(!isLoading && !dataLoading) ?
                <div className="flex gap-6">
                    <div className="flex flex-col grow border rounded-lg">
                        {times.map((time, ind) => (
                            <div key={time} dir='auto'
                                 className={`centerOfParent text-sm py-4 px-1 h-16 text-natural_gray-950 font-semibold ${ind !== times.length - 1 ? 'border-b' : ''}`}>{time} - {add30Minutes(time)}</div>
                        ))}
                    </div>
                    <div
                        className="w-[84%] grid grid-cols-7 border border-natural_gray-200 rounded-lg overflow-hidden">
                        {weekDays.map((day, dayIndex) => {
                            const date = formatDatePhp(day);
                            let skipCount = 0;
                            return (
                                <div
                                    key={dayIndex}
                                    className={`flex flex-col ${dayIndex !== weekDays.length - 1 ? 'border-l' : ''}`}
                                >
                                    {times.map((time, timeIndex) => {
                                        if (skipCount > 0) {
                                            skipCount--;
                                            return null;
                                        }

                                        const key = `${date}-${time}`;
                                        const currentClass = classMap.get(key);

                                        if (currentClass) {

                                            let span = 1;
                                            for (let j = timeIndex + 1; j < times.length; j++) {
                                                const nextKey = `${date}-${times[j]}`;
                                                const nextClass = classMap.get(nextKey);

                                                if (nextClass && nextClass.title === currentClass.title) {
                                                    span++;
                                                } else {
                                                    break;
                                                }
                                            }
                                            skipCount = span - 1;
                                            return (
                                                <div
                                                    key={key}
                                                    className={`flex items-center px-1 bg-white text-xs`}
                                                    style={{
                                                        height: `${span * 4}rem`,
                                                    }}
                                                >
                                                    <div
                                                        className={`border w-full  ${currentClass.past ? " border-transparent bg-success-50" : "border-natural_gray-200"} rounded-lg flex flex-col py-2 px-1 ${span > 1 ? "gap-4" : ""}`}>
                                                        <div className="flex flex-col gap-4">
                                                            <div className="flex items-center justify-between">
                                                                <span
                                                                    className="whitespace-nowrap text-natural_gray-800">{currentClass.type}</span>
                                                                <span
                                                                    className="line-clamp-1">{currentClass.title}</span>
                                                            </div>
                                                            {span > 1 &&
                                                                <div className="flex items-center justify-between">
                                                                <span
                                                                    className="text-natural_gray-800">جلسه</span>
                                                                    <span
                                                                        className="">{currentClass.sesion || 'سوم'}</span>
                                                                </div>}
                                                        </div>
                                                        {(currentClass.teachingType === 2 && !currentClass.past) ?
                                                            <div className="flex gap-1">
                                                                <Button isIconOnly size="sm" variant="bordered"
                                                                        href={'/'}
                                                                        className="border-secondary-500"><ThreeDots
                                                                    className="fill-secondary-500 rotate-90"/></Button>

                                                                <Link
                                                                    className="text-white centerOfParent bg-primary-700 rounded-lg px-2 py-1"
                                                                    href={currentClass.class_link || "/"}
                                                                    target="_blank">ورود
                                                                    به
                                                                    کلاس</Link>
                                                            </div> :
                                                            <Link href={'/'}
                                                                  className="centerOfParent border rounded border-secondary-500 text-secondary-500">جزئیات</Link>}
                                                    </div>
                                                </div>
                                            );
                                        }

                                        return (
                                            <div
                                                key={key}
                                                className="h-16 border-b bg-natural_gray-50"
                                            />
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div> : <Spinner variant='dots' color='success'/>
            }
        </div>
    </>);
};

export default DesktopWeekly;