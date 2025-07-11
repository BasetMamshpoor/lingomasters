import React from 'react';
import CalendarIcon from "@icons/calendar.svg";

const Calendar = ({date, time}) => {
    return (
        <>
            <div
                className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-52 withYellowCircel"
                id='calendar'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><CalendarIcon className='w-5 h-5 fill-primary-800'/></div>
                    <span className='sm:text-base text-sm text-primary-950'>تقویم</span>
                </div>
                <ul className="space-y-4 list-inside text-sm w-full">
                    <li className="text-sm">
                        {new Date(date)?.toLocaleString('fa-IR', {
                            weekday: 'long',
                            month: 'long',
                            day: '2-digit'
                        })}
                    </li>
                    <li className="text-sm">
                        {time}
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Calendar;