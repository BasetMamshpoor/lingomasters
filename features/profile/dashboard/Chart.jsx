'use client';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';
import useMediaQuery from "@/hooks/useMediaQuery";
import DatePicker, {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import React from "react";

const CustomTooltip = ({active, payload, label,}) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white shadow-md rounded px-3 py-1 border border-orange-400 text-sm">
                <p>{`روز ${label}: ${payload[0].value} هزار تومان`}</p>
            </div>
        );
    }
    return null;
};

export default function Chart({data, onChange, title, date, withFilter = true}) {
    const isMatch = useMediaQuery('(max-width: 639.98px)')
    return (
        <div className='flex flex-col gap-4'>
            {withFilter && <div className="flex w-full flex-col gap-1 relative">
                <label className='text-xs font-normal text-natural_gray-950'>تاریخ</label>
                <DatePicker
                    onlyMonthPicker
                    name='date'
                    value={date ? new DateObject(date) : null}
                    onChange={e => onChange(new DateObject(e.toDate()).format('YYYY-MM-DD'))}
                    inputClass={' w-full h-full py-1.5 px-2 text-primary-950 outline-none border-2 border-default-200 rounded-md appearance-none text-sm'}
                    containerClassName={'sm:w-1/4 w-full !height-full'}
                    editable={false}
                    monthYearSeparator="|"
                    placeholder='ماه'
                    format="YYYY-MM-DD"
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="auto"/>
            </div>}
            <div className="w-full bg-white rounded-lg border border-natural_gray-200 p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-right lg:text-lg text-sm  font-bold text-gray-700 border-b-2 border-[#EA8616] w-fit pb-1">درآمد-
                        {title}</h2>
                </div>

                <ResponsiveContainer width="103%" height={328}>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#EA8616" stopOpacity={1}/>
                                <stop offset="100%" stopColor="#F5F5F5" stopOpacity={0.5}/>
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="1 1"/>
                        <XAxis className='text-sm' dataKey="label"/>
                        <YAxis tickMargin={20}/>
                        <Tooltip content={<CustomTooltip/>}/>

                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="#EA8616"
                            strokeWidth={isMatch ? 1 : 2}
                            fill="url(#revenueGradient)"
                            dot={isMatch ? null : {
                                r: 6,
                                stroke: '#f97316',
                                strokeWidth: 0,
                                fill: '#EA8616',
                            }}
                            activeDot={isMatch ? null : {
                                r: 8,
                                stroke: '#f97316',
                                strokeWidth: 2,
                                fill: '#fff',
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
