import React from 'react';
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Spinner,
    Chip,
    Accordion,
    AccordionItem
} from "@heroui/react";
import Verify from "@icons/verified.svg";
import Link from "next/link";
import Dots from '@icons/threedots.svg'
import useGetRequest from "@/hooks/useGetRequest";

const ExamScore = () => {
    const [data, , , , , isLoading] = useGetRequest(true, '/exams')
    return (
        <>
            <Table
                fullWidth
                removeWrapper
                isStriped={true}
                className="sm:flex hidden"
                classNames={{
                    wrapper: 'p-0',
                    th: 'bg-primary-50 text-natural_gray-950 text-center',
                    td: 'text-center whitespace-nowrap',
                }}
            >
                <TableHeader>
                    <TableColumn width={20}></TableColumn>
                    <TableColumn>نام کلاس</TableColumn>
                    <TableColumn>استاد</TableColumn>
                    <TableColumn>نام آزمون</TableColumn>
                    <TableColumn>تاریخ</TableColumn>
                    <TableColumn>حالت</TableColumn>
                    <TableColumn>نمره</TableColumn>
                    <TableColumn>جزئیات</TableColumn>
                </TableHeader>
                <TableBody
                    isLoading={isLoading}
                    loadingContent={<Spinner color="success"/>}
                    loadingState={isLoading}
                >
                    {data?.map(item => (
                        <TableRow key={item.id}>
                            <TableCell width={20}><Verify className="w-4 h-4"/></TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.professor}</TableCell>
                            <TableCell>{item.exam_name}</TableCell>
                            <TableCell>{new Intl.DateTimeFormat('fa-IR', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit'
                            }).format(new Date(item.created_at))}</TableCell>
                            <TableCell><Chip
                                color={item.status === 'pass' ? 'success' : 'danger'}
                                radius='sm'
                                className={`font-semibold text-xs ${
                                    item.status === 'pass' ? 'text-success-700 bg-success-50' :
                                        'text-danger-700 bg-danger-50'
                                }`}>
                                {item.status === 'pass' ? 'پاس شده' : 'پاس نشده'}
                            </Chip></TableCell>
                            <TableCell>
                                <div className="font-Inner">{item.score || 0}/100</div>
                            </TableCell>
                            <TableCell><Link href={`/students/${id}/exam-score?exam_id=${item.id}`}
                                             className="centerOfParent"><Dots className="rotate-90"/></Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {isLoading ?
                <div className="w-full centerOfParent"><Spinner color="success"/></div>
                : data?.length > 0 ?
                    <Accordion
                        itemClasses={{
                            content: 'bg-natural_gray-50 py-3 px-4 mt-2 grid grid-cols-3 gap-2 text-xs',
                            heading: 'bg-primary-50 rounded-lg',
                            trigger: 'px-4 py-3',
                            indicator: '-rotate-90 data-[open=true]:rotate-90 rtl:-rotate-90 rtl:data-[open=true]:rotate-90 text-primary-950',
                        }}
                        dir={'rtl'} isCompact showDivider={false} className="sm:hidden flex flex-col gap-4">
                        {data.map(item => (
                            <AccordionItem
                                key={item.id}
                                textValue={item.description}
                                title={
                                    <div className="grid grid-cols-3 gap-2 text-xs">
                                        <span className="text-natural_gray-950">نام کلاس</span>
                                        <span
                                            className="col-span-2 text-black font-semibold flex items-center gap-3"><Verify
                                            className="fill-primary-600"/>{item.name}</span>
                                    </div>
                                }>
                                <p className="text-natural_gray-950">استاد</p>
                                <p className="col-span-2 font-semibold">{item.professor}</p>
                                <p className="text-natural_gray-950">نام آزمون</p>
                                <p className="col-span-2 font-semibold">{item.exam_name}</p>
                                <p className="text-natural_gray-950">تاریخ</p>
                                <p className="col-span-2 font-semibold">{new Intl.DateTimeFormat('fa-IR', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit'
                                }).format(new Date(item.created_at))}</p>
                                <p className="text-natural_gray-950">حالت</p>
                                <div className="col-span-2">
                                    <Chip
                                        color={item.status === 'pass' ? 'success' : 'danger'}
                                        radius='sm'
                                        className={`font-semibold text-xs ${
                                            item.status === 'pass' ? 'text-success-700 bg-success-50' :
                                                'text-danger-700 bg-danger-50'
                                        }`}>
                                        {item.status === 'pass' ? 'پاس شده' : 'پاس نشده'}
                                    </Chip>
                                </div>
                                <p className="text-natural_gray-950">نمره</p>
                                <p className="col-span-2 font-semibold">{item.score || 0}/100</p>
                                <p className="text-natural_gray-950">جزئیات</p>
                                <Link href={`/profile/classes/exams/${item.id}`}
                                      className="flex items-center"><Dots className="rotate-90"/></Link>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    : <div className="text-center text-natural_gray-600">هیچ داده‌ای برای نمایش وجود ندارد.</div>
            }
        </>
    );
};

export default ExamScore;