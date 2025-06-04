import React, {useEffect, useRef} from 'react';
import useGetRequest from "@/hooks/useGetRequest";
import {Calendar, DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {Spinner} from "@heroui/react";

const SmallMonthly = ({date, selected}) => {
    const calendarRef = useRef();
    const [data, , , , , isLoading] = useGetRequest(true, `/calendar/monthly?date=${date}&type=${selected}`);

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
            <div className="flex flex-col">
                {!isLoading ? data?.map(e => {
                    return (
                        !!e.classes.length &&
                        <div key={e.date}
                             className={`py-4 px-3 flex flex-col gap-2 `}>
                            <div className="px-2 py-4 centerOfParent rounded-lg bg-primary-50 text-xs">
                                {new DateObject({
                                    date: e.date,
                                    format: "YYYY-MM-DD",
                                    calendar: persian,
                                    locale: persian_fa
                                }).format('dddd DD MMMM')}
                            </div>
                            {e.classes.map(f => (
                                <div key={e.id}
                                     className={`flex items-center justify-between gap-2 border w-full p-2 rounded-lg border-natural_gray-200 ${e.past ? "bg-success-50 border-transparent" : ""}`}>
                                    <div className="text-xs whitespace-nowrap">
                                        {f.type}
                                    </div>
                                    <div className="text-xs line-clamp-1">
                                        {f.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }) : <div className="centerOfParent w-full my-10"><Spinner color='success'/></div>}
            </div>
        </>
    );
};

export default SmallMonthly;