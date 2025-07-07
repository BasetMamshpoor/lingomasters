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

const SmallDaily = ({date, selected, update}) => {
    const [weekDays, setWeekDays] = useState([]);
    const [classes, , , , , isLoading] = useGetRequest(true, `/student/calendar/daily?date=${date}&type=${selected}`);
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
            <>
                <span className='text-xs font-bold'>{weekDays[0]}</span>
                <span className='text-[8px]'>{formattedDate}</span>
            </>
        );
    };

    const isCurrentDay = (_date) => {
        const today = new Date(date);
        return (
            _date.getDate() === today.getDate() &&
            _date.getMonth() === today.getMonth() &&
            _date.getFullYear() === today.getFullYear()
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
            {!dataLoading &&
                <div className="grid grid-cols-7">
                    {weekDays.map((day, index) => (
                        <div
                            key={index} onClick={() => update(null, day)}
                            className={`flex flex-col gap-2 cursor-pointer items-center p-2 border-y border-l  ${index === 0 ? 'border-r rounded-r-lg' : index === 6 ? 'rounded-l-lg' : ''} ${isCurrentDay(day) ? 'bg-primary-600 text-white border-transparent' : 'bg-white text-natural_gray-900 border-natural_gray-200'}`}
                        >
                            {toJalaliDate(day)}
                        </div>
                    ))}
                </div>
            }
            {
                (!isLoading && !dataLoading)
                    ?
                    <div className="flex gap-2">
                        <div className="flex flex-col border rounded-lg w-[84px]">
                            {times.map((time, ind) => (
                                <div key={time} dir='auto'
                                     className={`centerOfParent text-[10px] whitespace-nowrap py-2 px-1 h-12 text-natural_gray-950 font-semibold ${ind !== times.length - 1 ? 'border-b' : ''}`}>{time} - {add30Minutes(time)}</div>
                            ))}
                        </div>
                        <div
                            className="w-full border border-natural_gray-200 rounded-lg overflow-hidden">
                            {(() => {
                                const _date = formatDatePhp(new Date(date));
                                let skipCount = 0;

                                return (
                                    <div className="flex flex-col">
                                        {times.map((time, timeIndex) => {
                                            if (skipCount > 0) {
                                                skipCount--;
                                                return null;
                                            }

                                            const key = `${_date}-${time}`;
                                            const currentClass = classMap.get(key);

                                            if (currentClass) {
                                                let span = 1;
                                                for (let j = timeIndex + 1; j < times.length; j++) {
                                                    const nextKey = `${_date}-${times[j]}`;
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
                                                        key={time}
                                                        className="flex items-center px-1 bg-white text-xs border-b"
                                                        style={{height: `${span * 3}rem`}}
                                                    >
                                                        <div
                                                            className={`border w-full ${currentClass.past ? "border-transparent bg-success-50" : "border-natural_gray-200"} rounded-lg flex items-center justify-between p-2 ${span > 1 ? "gap-4" : ""}`}
                                                        >
                                                            <div className="flex flex-col gap-4">
                                                                <div
                                                                    className="flex items-center justify-between gap-4">
                                                                    <span
                                                                        className="text-[8px] whitespace-nowrap text-natural_gray-800">
                                                                        {currentClass.type}
                                                                    </span>
                                                                    <span className="text-[10px] line-clamp-1">
                                                                        {currentClass.title}
                                                                    </span>
                                                                </div>
                                                                {span > 1 && (
                                                                    <div
                                                                        className=" flex items-center justify-between gap-4">
                                                                        <span
                                                                            className="text-[8px] text-natural_gray-800">جلسه</span>
                                                                        <span
                                                                            className="text-[10px]">{currentClass.session || 'سوم'}</span>
                                                                    </div>
                                                                )}
                                                            </div>

                                                            {(currentClass.teachingType === 2 && !currentClass.past) ? (
                                                                <div className="flex gap-1">
                                                                    <Button isIconOnly size="sm" variant="bordered"
                                                                            href={'/'}
                                                                            className="border-secondary-500">
                                                                        <ThreeDots
                                                                            className="fill-secondary-500 rotate-90"/>
                                                                    </Button>

                                                                    <Link
                                                                        className="text-white centerOfParent bg-primary-700 rounded-lg px-2 py-1"
                                                                        href={currentClass.class_link || "/"}
                                                                        target="_blank">ورود به کلاس</Link>
                                                                </div>
                                                            ) : (
                                                                <Link href={'/'}
                                                                      className="centerOfParent border-1.5 rounded text-xs border-secondary-500 font-semibold text-secondary-500 px-4 py-1 w-20">جزئیات</Link>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            }

                                            return (
                                                <div
                                                    key={time}
                                                    className="h-12 border-b bg-natural_gray-50"
                                                />
                                            );
                                        })}
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                    : <Spinner variant='dots' color='success'/>
            }
        </div>
    </>);
};

export default SmallDaily;