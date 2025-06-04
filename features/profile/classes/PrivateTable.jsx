import React, {useState} from 'react';
import {Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/react";
import Link from "next/link";
import Left from "@icons/arrow-left.svg";
import useGetRequest from "@/hooks/useGetRequest";
import {useRouter} from "next/router";
import PaginationApp from "@/components/Pagination";

const PrivateTable = () => {
    const router = useRouter()
    const {class_id, id} = router.query
    const [currentPage, setCurrentPage] = useState(1)
    const [data, , , pagination, , isLoading] = useGetRequest(true, class_id && `/student/private-list/${class_id}`, currentPage);

    return (
        <>
            <Table
                fullWidth
                isStriped={true}
                aria-label="Example static collection table"
                className="sm:flex hidden"
                classNames={{
                    wrapper: 'p-0',
                    th: 'bg-primary-100 !rounded-none text-primary-700 text-center',
                    td: 'text-center whitespace-nowrap',
                }}
            >
                <TableHeader>
                    <TableColumn width={60}>جلسه</TableColumn>
                    <TableColumn>کلاس</TableColumn>
                    <TableColumn>استاد</TableColumn>
                    <TableColumn>تاریخ</TableColumn>
                    <TableColumn>ساعت</TableColumn>
                    <TableColumn>جزئیات</TableColumn>
                </TableHeader>
                <TableBody
                    isLoading={isLoading}
                    loadingContent={<Spinner color="success"/>}
                    loadingState={isLoading}
                >
                    {data?.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{item.number}</TableCell>
                            <TableCell>{item.subject}</TableCell>
                            <TableCell>{item.professor}</TableCell>
                            <TableCell>{new Intl.DateTimeFormat('fa-IR', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit'
                            }).format(new Date(item.date))}</TableCell>
                            <TableCell>
                                {item.time}
                            </TableCell>
                            <TableCell>
                                <Link href={`/students/${id}/class-detail/show-score?classId=${item.id}`}
                                      className="centerOfParent gap-2 text-primary-600">
                                    جزئیات گزارش
                                    <Left className='fill-primary-800 w-5 h-5'/>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div
                className="sm:hidden flex flex-col gap-6 rounded-xl border-2 border-natural_gray-200 bg-natural_gray-50 py-6 px-4">
                {
                    isLoading ? (
                        <div className="w-full centerOfParent"><Spinner color="success"/></div>
                    ) : data?.length > 0 ? (
                        data.map(item => (
                            <React.Fragment key={item.id}>
                                <div className="flex flex-col gap-4 w-full">
                                    <div className="flex items-center gap-2 justify-between">
                                        <div className="flex flex-col gap-2 flex-1">
                                            <span className="text-natural_gray-800 text-xs">جلسه</span>
                                            <span
                                                className="text-natural_gray-950 font-semibold text-xs">{item.number}</span>
                                        </div>
                                        <div className="flex flex-col gap-2 flex-1">
                                            <span className="text-natural_gray-800 text-xs">کلاس</span>
                                            <span
                                                className="text-natural_gray-950 font-semibold text-xs">{item.subject}</span>
                                        </div>
                                        <div className="flex flex-col gap-2 flex-1">
                                            <span className="text-natural_gray-800 text-xs">استاد</span>
                                            <span
                                                className="text-natural_gray-950 font-semibold text-xs">{item.professor}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 justify-between">
                                        <div className="flex flex-col gap-2 flex-1">
                                            <span className="text-natural_gray-800 text-xs">تاریخ</span>
                                            <span className="text-natural_gray-950 font-semibold text-xs">
                                           {new Intl.DateTimeFormat('fa-IR', {
                                               year: 'numeric',
                                               month: '2-digit',
                                               day: '2-digit'
                                           }).format(new Date(item.date))}
                                       </span>
                                        </div>
                                        <div className="flex flex-col gap-2 flex-1">
                                            <span className="text-natural_gray-800 text-xs">ساعت</span>
                                            <span
                                                className="text-natural_gray-950 font-semibold text-xs">{item.time}</span>
                                        </div>
                                    </div>
                                    <Link
                                        href={`/students/${id}/class-detail/show-score?classId=${item.id}`}
                                        className="centerOfParent gap-2 w-full border-1.5 border-primary-600 text-primary-600 py-1.5 px-3 rounded text-sm"
                                    >
                                        جزئیات گزارش
                                        <Left className='fill-primary-600 w-5 h-5'/>
                                    </Link>
                                </div>
                                <hr/>
                            </React.Fragment>
                        ))
                    ) : (
                        <div className="text-center text-natural_gray-600">هیچ داده‌ای برای نمایش وجود ندارد.</div>
                    )
                }
            </div>
            {!isLoading && pagination &&
                <div className="flex items-center justify-center">
                    <PaginationApp
                        total={pagination.total}
                        per_page={pagination.per_page}
                        onChange={setCurrentPage}/>
                </div>}
        </>
    );
};

export default PrivateTable;