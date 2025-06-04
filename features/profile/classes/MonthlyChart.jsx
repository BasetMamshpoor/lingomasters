import {
    LineChart,
    Legend,
    XAxis,
    YAxis,
    Line,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';
import React, {useState} from "react";
import DatePicker, {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {useRouter} from "next/router";
import useGetRequest from "@/hooks/useGetRequest";
import {Spinner} from "@heroui/react";

const categories = [
    'لغت',
    'گرامر',
    'گفتاری',
    'املا',
    'انشا',
    'شنیداری',
    'صحبت کردن',
    'میزان تمرکز',
    'میزان حوصله',
    'میزان مشارکت',
];

const levels = ["", 'بد', 'نیاز به تلاش', 'متوسط', 'خوب', 'عالی'];

export default function MonthlyChart() {
    const router = useRouter();
    const {class_id, type, id} = router.query
    const [date, setDate] = useState(null);
    const [information, , , , , isLoading] = useGetRequest(true,`/student/report?mode=monthly&classId=${class_id}&${date ? `date=${date}` : ''}`);

    if (isLoading)
        return <div className="w-full centerOfParent"><Spinner color="success"/></div>

    const data = categories.map((label, index) => {
        const entry = {name: label};
        information.forEach(item => {
            entry[`جلسه ${item.number}`] = item.skills[index];
        });
        return entry;
    });

    return (
        <div className='flex flex-col gap-4'>
            <div className="flex w-full flex-col gap-1 relative">
                <label className='text-xs font-normal text-natural_gray-950'>تاریخ</label>
                <DatePicker
                    onlyMonthPicker
                    name='date'
                    value={date ? new DateObject(date) : null}
                    onChange={e => setDate(new DateObject(e.toDate()).format('YYYY-MM-DD'))}
                    inputClass={' w-full h-full py-1.5 px-2 text-primary-950 outline-none border-2 border-default-200 rounded-md appearance-none text-sm'}
                    containerClassName={'sm:w-1/4 w-full !height-full'}
                    editable={false}
                    monthYearSeparator="|"
                    placeholder='ماه'
                    format="YYYY-MM-DD"
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="auto"/>
            </div>
            <div className="w-full bg-white rounded-lg border border-natural_gray-200 p-4">
                <ResponsiveContainer width="103%" height={328}>
                    <LineChart data={data} margin={{top: 20, right: 20, left: 20, bottom: 40}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis
                            dataKey="name"
                            tick={{fontSize: 12, textAnchor: 'start', dx: -10}}
                            interval={0}
                            angle={-30}
                        />
                        <YAxis
                            width={100}
                            domain={[0, 5]}
                            ticks={[0, 1, 2, 3, 4, 5]}
                            tickFormatter={(value) => levels[value]}
                            tick={{fontSize: 12, textAnchor: 'start', dx: -10}}
                        />
                        <Legend/>
                        {information.map((item, index) => (
                            <Line
                                key={index}
                                type="monotone"
                                dataKey={`جلسه ${item.number}`}
                                stroke={`hsl(${(index * 36) % 360}, 60%, 60%)`}
                                strokeWidth={1.5}
                                dot={{r: 2}}
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
