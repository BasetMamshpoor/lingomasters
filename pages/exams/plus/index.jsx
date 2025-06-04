import React, {useMemo, useState} from 'react';
import {BreadcrumbItem, Breadcrumbs, Tab, Tabs} from "@heroui/react";
import Book from '@icons/book2.svg';
import Pepole from "@icons/users.svg";
import {useRouter} from "next/router";
import Filter from "@/features/exams/Filter";
import Filters from "@/features/exams/Filters";
import ExamItem from "@/features/exams/ExamItem";
import PaginationApp from "@/components/Pagination";
import useGetRequest from "@/hooks/useGetRequest";

const Index = () => {
    const router = useRouter()
    const {query} = router
    const [currentPage, setCurrentPage] = useState(1)

    const filters = useMemo(() => query, [JSON.stringify(query)]);

    useGetRequest(true, `/user-exams`,currentPage,filters)

    const handleChange = (value) => {
        router.replace({pathname: router.asPath.split('?')[0], query: {...query, is_inside: value},},
            undefined,
            {shallow: false}
        );
    }

    return (
        <>
            <div dir='rtl' className="flex flex-col gap-10 my-10 container">
                <div
                    className="p-10 bg-gradient-to-t from-[#E9EEF9] to-[#F5F9FE] rounded-2xl flex flex-col gap-12 items-center">
                    <Breadcrumbs
                        separator='/'
                        classNames={{
                            base: 'w-full lg:flex hidden',
                            list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600 text-xs'
                        }}
                        itemClasses={{
                            separator: "px-2 text-natural_gray-600"
                        }}>
                        <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                        <BreadcrumbItem>آزمون ها</BreadcrumbItem>
                        <BreadcrumbItem>آزمون پلاس</BreadcrumbItem>
                    </Breadcrumbs>
                    <div className="self-center centerOfParent gap-6">
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl">آزمون پلاس</h1>
                            <span className='text-xl'>( شبیه ساز آزمون )</span>
                        </div>
                        <Book className="w-10 h-10 fill-primary-700"/>
                    </div>
                    <p className="whitespace-break-spaces text-natural_gray-950" dir='auto'>آزمون پلاس شبیه ساز
                        آزمون‌های مختلف است که با پرداخت مبلغ کمی می‌ توانید همانند آزمون مدنظر خود
                        را انجام دهید. آزمون پلاس شبیه ساز آزمون‌های مختلف است که با پرداخت مبلغ کمی می‌‌توانید همانند
                        آزمون مدنظر خود را انجام دهید. آزمون پلاس شبیه ساز آزمون‌های مختلف است که با پرداخت مبلغ کمی می‌
                        توانید همانند آزمون مدنظر خود را انجام دهید. آزمون پلاس شبیه ساز آزمون‌های مختلف است که با
                        پرداخت مبلغ کمی می‌‌توانید همانند آزمون مدنظر خود را انجام دهید.
                        آزمون پلاس شبیه ساز آزمون‌های مختلف است که با پرداخت مبلغ کمی می‌ توانید همانند آزمون مدنظر خود
                        را انجام دهید. آزمون پلاس شبیه ساز آزمون‌های مختلف است که با پرداخت مبلغ کمی می‌‌توانید همانند
                        آزمون مدنظر خود را انجام دهید.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className='lg:hidden flex items-center justify-between'>
                        <div className="flex items-center gap-4">
                            <Pepole className='fill-primary-700 w-6 h-6'/>
                            <h1 className="font-semibold text-primary-700">اساتید</h1>
                        </div>
                        <div className="centerOfParent">
                            {/*<Filter setCurrentPage={setCurrentPage}/>*/}
                        </div>
                    </div>
                    <Tabs
                        variant="underlined"
                        fullWidth
                        classNames={{
                            tabList: 'grow gap-0 items-center justify-center',
                            tab: 'sm:w-1/4 h-16 border-b w-full',
                            panel: 'px-0 [&>div>div]:px-0',
                            cursor: "w-full bg-warning",
                            tabContent: "sm:text-sm text-xs group-data-[selected=true]:text-warning"
                        }}
                        selectedKey={query.is_inside || 'in'}
                        onSelectionChange={handleChange}
                        aria-label="Options">
                        <Tab key="in" title="آزمون های داخل ایران"/>
                        <Tab key="out" title="آزمون های خارج ایران"/>
                    </Tabs>
                    <div className='grid lg:grid-cols-12 grid-cols-1 lg:gap-6'>
                        <div className='hidden lg:block lg:col-span-3 h-fit'>
                            {/*<Filters setCurrentPage={setCurrentPage}/>*/}
                        </div>
                        <div
                            className='lg:col-span-9 col-span-1 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-6 sm:gap-y-10 gap-6'>
                            {[...Array(14)].map((_, i) => <ExamItem/>)}
                        </div>
                    </div>
                    <div className="w-full centerOfParent mt-6">
                        <PaginationApp currentPage={1} total={10} per_page={1}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;