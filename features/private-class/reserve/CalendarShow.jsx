import React, {useState} from 'react';
import Arrow from '@icons/arrow-left.svg';
import useGetRequest from '@/hooks/useGetRequest';
import formatDatePhp from "@/helpers/formatDate";
import generateWeeklyScheduleForPeriod from "@/helpers/generateWeeklyScheduleForPeriod";

const getStartOfWeek = (date) => {
    const currentDay = date.getDay();
    const diffToSaturday = (currentDay + 1) % 7;
    const saturdayDate = new Date(date);
    saturdayDate.setDate(date.getDate() - diffToSaturday);
    return saturdayDate;
};
const days = [
    {full: "شنبه", short: "ش"},
    {full: "یکشنبه", short: "ی"},
    {full: "دوشنبه", short: "د"},
    {full: "سه‌شنبه", short: "س"},
    {full: "چهارشنبه", short: "چ"},
    {full: "پنج‌شنبه", short: "پ"},
    {full: "جمعه", short: "ج"}
];
const CalendarShow = ({id}) => {
    const [selectedKeys, setSelectedKeys] = useState(new Set(["بامداد"]))
    const [saturday, setSaturday] = useState(getStartOfWeek(new Date()));

    const [data] = useGetRequest(true, `/private-reserve/calender/${id}?start_date=${formatDatePhp(saturday)}`)


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
                className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-52 col-span-2">
                <div className="flex justify-between items-center w-full">
                    <button type='button' className='flex items-center gap-2 text-primary-500 text-xs'
                            onClick={handlePrev}>
                        <div className="centerOfParent"><Arrow className='fill-primary-600 rotate-180 w-4 h-4'/></div>
                        هفته قبل
                    </button>
                    <p className='text-xs'>{new Date(saturday).toLocaleDateString('fa-IR', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    })}</p>
                    <button type='button' className='flex items-center gap-2 text-primary-500 text-xs'
                            onClick={handleNext}>
                        هفته بعد
                        <div className="centerOfParent"><Arrow className='fill-primary-600 w-4 h-4'/></div>
                    </button>
                </div>
                <div
                    className="flex items-center justify-between sm:gap-0.5 *:border-b *:py-4 *:flex-1 *:text-center *:px-2 *:text-xs">
                    {days.map((day, index) => (
                        <div
                            key={index}
                            className={`${
                                index === (new Date().getDay() === 6 ? 0 : new Date().getDay() + 1)
                                    ? "bg-natural_gray-50 text-primary-600 border-primary-800"
                                    : "text-natural_gray-900"
                            }`}
                        >
                            <span className="md:block hidden">{day.full}</span>
                            <span className="md:hidden">{day.short}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-start justify-between sm:gap-0.5">
                    {weeklySchedule.map((d, i) => {
                        return (
                            <table className="flex-1 table-auto lg:text-base sm:text-xs text-[10px]"
                                   key={i}>
                                <tbody>
                                {d.schedule.map(t => {
                                    return <tr key={t.time}>
                                        <td
                                            className={`sm:border-l centerOfParent border border-natural_gray-300 py-2 lg:text-xs sm:text-[10px] text-[8px] whitespace-nowrap ${t.time !== "N/A" ? '!bg-natural_gray-50 text- white ' : '!bg-natural_gray-50 text-natural_gray-50 border-natural_gray-50'}`}>
                                            {t.time === "N/A" ? '-' : t.time}
                                        </td>
                                    </tr>
                                })}
                                </tbody>
                            </table>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default CalendarShow;