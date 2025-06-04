import {
    LineChart,
    Legend,
    XAxis,
    YAxis,
    Line,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';
import React from "react";
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

export default function YearlyChart() {
    const router = useRouter();
    const {class_id, type, id} = router.query
    const [information, , , , , isLoading] = useGetRequest(true,`/student/report?mode=yearly&classId=${class_id}`);

    if (isLoading)
        return <div className="w-full centerOfParent"><Spinner color="success"/></div>

    const data = categories.map((label, index) => {
        const entry = {name: label};
        information.forEach(item => {
            entry[item.month] = item.averages[index];
        });
        return entry;
    });
    return (
        <>
            <div className="w-full bg-white rounded-lg border border-natural_gray-200 p-4">
                <ResponsiveContainer width="103%" height={428}>
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
                                dataKey={item.month}
                                stroke={`hsl(${(index * 36) % 360}, 60%, 60%)`}
                                strokeWidth={1.5}
                                dot={{r: 2}}
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}
