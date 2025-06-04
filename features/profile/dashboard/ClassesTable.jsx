import React from 'react';
import {Avatar, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/react";
import Link from "next/link";
import Dots from "@icons/threedots.svg";

const ClassesTable = ({data}) => {
    return (
        <>
            <Table
                aria-label="Example static collection table"
                classNames={{
                    wrapper: 'p-0',
                    td: 'text-sm whitespace-nowrap',
                }}
                hideHeader
            >
                <TableHeader>
                    <TableColumn>1</TableColumn>
                    <TableColumn>2</TableColumn>
                    <TableColumn>3</TableColumn>
                    <TableColumn>4</TableColumn>
                    <TableColumn>5</TableColumn>
                    <TableColumn>6</TableColumn>
                    <TableColumn>7</TableColumn>
                    <TableColumn>8</TableColumn>
                    <TableColumn>9</TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map(e => (
                        <TableRow key={e.id}>
                            <TableCell>
                                <div className='flex gap-1 items-center'>
                                    <Avatar src={e.student_profile} size='sm' showFallback/>
                                    <div className="flex flex-col gap2">
                                        <span className='text-natural_gray-800'>زبان آموز</span>
                                        <p className='font-semibold'>{e.student_name}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Link href={`/students/${e.student_id}`} className="text-primary-700">پروفایل زبان
                                    آموز</Link></TableCell>
                            <TableCell>
                                <div className="flex flex-col gap2">
                                    <span className='text-natural_gray-800'>مهارت</span>
                                    <p className='font-semibold'>{"language"}</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col gap2">
                                    <span className='text-natural_gray-800'>نوع</span>
                                    <p className='font-semibold'>{e.teachingType}</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col gap2">
                                    <span className='text-natural_gray-800'>تاریخ</span>
                                    <p className='font-semibold'>{new Date(e.date)?.toLocaleString('fa-IR', {
                                        weekday: 'long',
                                        day: '2-digit',
                                        month: 'long',
                                    })}</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col gap2">
                                    <span className='text-natural_gray-800'>ساعت</span>
                                    <p className='font-semibold'>{e.time}</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col gap2">
                                    <span className='text-natural_gray-800'>وضعیت</span>
                                    <p className='font-semibold'>{e.status === 'progress' ? 'رزرو شده' : 'درحال برگزاری'}</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col gap2">
                                    <span className='text-natural_gray-800'>جزئیات</span>
                                    <div className="centerOfParent"><Dots className='rotate-90 fill-primary-700'/></div>
                                </div>
                            </TableCell>
                            <TableCell className='whitespace-pre-line min-w-[140px]'>{`لطفا در روز و ساعت
                         مشخص در موقعیت
                          حضور داشته باشید`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default ClassesTable;