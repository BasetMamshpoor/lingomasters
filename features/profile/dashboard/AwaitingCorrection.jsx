import React from 'react';
import {Checkbox, CheckboxGroup, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/react";
import Upload from '@icons/upload-cloud-02.svg'
import Close from '@icons/close.svg'
import HomeWork from "@/features/profile/dashboard/HomeWork";


const AwaitingCorrection = ({data}) => {
    return (
        <>
            <Table
                aria-label="Example static collection table"
                classNames={{
                    wrapper: 'p-0',
                    th: 'bg-primary-100 !rounded-none text-primary-700 text-center',
                    td: 'text-center whitespace-nowrap',
                }}
                isStriped
            >
                <TableHeader>
                    <TableColumn width={60}>ردیف</TableColumn>
                    <TableColumn>کلاس</TableColumn>
                    <TableColumn>استاد</TableColumn>
                    <TableColumn>جلسه</TableColumn>
                    <TableColumn>تمرین‌ها</TableColumn>
                    <TableColumn>عملیات</TableColumn>
                </TableHeader>
                <TableBody>
                    {data?.map((item, index) => (
                        <TableRow key={item.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.professor}</TableCell>
                            <TableCell>{item.number}</TableCell>
                            <TableCell>
                                <p className="line-clamp-1" title={item.homework}>{item.homework}</p>
                            </TableCell>
                            <TableCell>
                                <HomeWork {...item} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default AwaitingCorrection;