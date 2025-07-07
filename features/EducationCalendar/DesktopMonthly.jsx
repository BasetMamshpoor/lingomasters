import React, {useEffect, useRef} from 'react';
import useGetRequest from "@/hooks/useGetRequest";
import {Calendar, DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {Spinner} from "@heroui/react";

const DesktopMonthly = ({selected, date}) => {
    const calendarRef = useRef();
    const [data, , , , , isLoading] = useGetRequest(true, `/student/calendar/monthly?date=${date}&type=${selected}`);

    useEffect(() => {
        const cal = calendarRef.current;
        if (cal) {
            const cD = new DateObject({
                date,
                format: 'YYYY-MM-DD'
            }).convert(persian, persian_fa);
            cal.set("year", cD.year)
            cal.set("month", cD.month)
            cal.set("day", cD.day)
        }
    }, [date, calendarRef.current]);

    return (
        <>
            {!isLoading && <Calendar
                value={
                    isLoading ? [] : data
                        ?.filter(d => d.classes.length > 0)
                        .map(d => new DateObject({
                            date: d.date,
                            format: 'YYYY-MM-DD',
                            calendar: persian,
                            locale: persian_fa
                        }))
                }
                ref={calendarRef}
                highlightToday={false}
                buttons={false}
                readOnly
                className="education-calendar"
                calendar={persian}
                locale={persian_fa}
            />}
            <div className="grid grid-cols-7">
                {!isLoading ? data?.map(e => {
                    return (
                        <div key={e.date}
                             className={`p-2 border border-natural_gray-200 min-h-[258px] flex flex-col gap-4 ${e.classes.length ? 'bg-white' : 'bg-natural_gray-50'}`}>
                            <div className="flex flex-col gap-1 items-center w-full">
                                <span className="text-xs text-natural_gray-700">{e.day_name}</span>
                                <span className="text-xs text-natural_gray-700">
                                    {new DateObject({
                                        date: e.date,
                                        format: "YYYY-MM-DD",
                                        calendar: persian,
                                        locale: persian_fa
                                    }).format('DD MMMM')}
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                {e.classes.map(f => (
                                    <div key={e.id}
                                         className={`flex items-center justify-between gap-2 border w-full px-1 py-2 rounded-lg border-natural_gray-200 ${e.past ? "bg-success-50 border-transparent" : ""}`}>
                                        <div className="text-xs whitespace-nowrap">
                                            {f.type}
                                        </div>
                                        <div className="text-xs line-clamp-1">
                                            {f.title}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }) : <div className="centerOfParent col-span-7 my-10"><Spinner color='success'/></div>}
            </div>
        </>
    );
};

export default DesktopMonthly;