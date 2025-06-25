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
import {Select, SelectItem, Spinner} from "@heroui/react";

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


export default function SessionChart() {
    const router = useRouter();
    const {class_id, type, id} = router.query
    const [session, setSession] = useState(null);
    const [information, , , , , isLoading] = useGetRequest(true, `/student/report?mode=session&classId=${class_id}&${session ? `session=${session}` : ''}`);
    if (isLoading)
        return <div className="w-full centerOfParent"><Spinner color="success"/></div>

    const data = categories.map((label, index) => ({
        name: label,
        [`جلسه ${session === null ? 'آخر' : (information.sessions.find(e => e.slotId == session)?.number)}`]: information.skills[index],
    }));

    return (
        <div className='flex flex-col gap-4'>
            <Select
                selectedKeys={[session]}
                onChange={e => setSession(e.target.value)}
                placeholder="آخرین جلسه"
                name='country'
                variant="bordered"
                radius="sm"
                classNames={{
                    base: 'lg:max-w-[30%] max-w-full',
                    label: 'text-xs font-semibold',
                    input: 'text-xs',
                    listbox: '[&>ul>li>span>svg]:w-3 [&>ul>li>span>svg]:h-3'
                }}
            >
                {information.sessions.map((session, index) => (
                    <SelectItem
                        key={session.slotId}
                        className="flex-row-reverse"
                        textValue={` جلسه ${session.number}`}>
                        <p className="flex items-center justify-end w-full">جلسه {session.number}</p>
                    </SelectItem>
                ))}
            </Select>
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
                        <Line type="monotone"
                              dataKey={`جلسه ${session === null ? 'آخر' : (information.sessions.find(e => e.slotId == session)?.number)}`}
                              stroke="#3b82f6"
                              strokeWidth={2} dot={{r: 4}}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
