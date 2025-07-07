import React, {useMemo, useState} from 'react';
import {BreadcrumbItem, Breadcrumbs, Spinner, Tab, Tabs} from "@heroui/react";
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

    const [exams, set, reload, pagination, , isLoading] = useGetRequest(true, `/exams/user-exams`, currentPage, filters)

    const handleChange = (value) => {
        router.replace({pathname: router.asPath.split('?')[0], query: {...query, is_foreign: value},},
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
                        <Book className="w-10 h-10 fill-primary-700"/>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl">آزمون پلاس</h1>
                            <span className='text-xl'>( شبیه ساز آزمون )</span>
                        </div>
                    </div>
                    <div className="whitespace-break-spaces text-natural_gray-950" dir='auto'>
                        {`🎯 آزمون پلاس (شبیه‌ساز آزمون) (ماک تست) (Mock Test)
                        
آزمون پلاس، یک پلتفرم حرفه‌ای برای شبیه‌سازی آزمون‌های زبان داخلی و بین‌المللی است که به شما کمک می‌کند با کمترین هزینه، در شرایطی مشابه آزمون اصلی، خود را محک بزنید و برای موفقیت آماده شوید.

📘 انواع آزمون‌هایی که در آزمون پلاس پوشش داده می‌شود:
🔹 آزمون‌های بین‌المللی زبان:

IELTS – TOEFL – PTE – Duolingo

آزمون‌های کمبریج مانند KET، PET، FCE، CAE

آزمون‌های مهاجرتی و آکادمیک زبان انگلیسی

🔹 آزمون‌های داخلی زبان:

MSRT – EPT – TOLIMO – UTEPT

آزمون‌های زبان ویژه داوطلبان دکتری و تحصیلات تکمیلی

🔹 آزمون‌های زبان ویژه مدارس (مقاطع ابتدایی، متوسطه اول و دوم):
برای زبان‌های زیر در سطوح متناسب با سن و پایه دانش‌آموزان:

🔵 زبان عربی
🔴 زبان آلمانی
⚪️ زبان روسی
🟣 زبان فارسی
🟡 زبان فرانسه
🟢 زبان انگلیسی

📌 آزمون‌های طراحی‌شده شامل درک مطلب، واژگان، دستور زبان، شنیداری و نوشتاری هستند که مطابق با استانداردهای آموزشی مدارس و سطح سنی دانش‌آموزان تنظیم شده‌اند.

💡 چرا آزمون پلاس؟
✅ تحلیل نقاط ضعف و ارائه بازخورد آموزشی
✅ بررسی خودکار پاسخ‌ها و ارائه نمره تخمینی
✅ محیط کاملاً شبیه‌سازی‌شده با شرایط آزمون واقعی
✅ قابل استفاده به‌ صورت آنلاین از سراسر ایران و خارج از کشور
✅ مناسب برای زبان‌آموزان، دانش‌آموزان، داوطلبان آزمون‌های رسمی و متقاضیان مهاجرت

🎯 آزمون پلاس انتخاب هوشمندانه برای سنجش واقعی توانایی زبانی شما پیش از آزمون اصلی است.`}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className='lg:hidden flex items-center justify-between'>
                        <div className="flex items-center gap-4">
                            <Pepole className='fill-primary-700 w-6 h-6'/>
                            <h1 className="font-semibold text-primary-700">اساتید</h1>
                        </div>
                        <div className="centerOfParent">
                            <Filter setCurrentPage={setCurrentPage}/>
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
                        selectedKey={query.is_foreign || '0'}
                        onSelectionChange={handleChange}
                        aria-label="Options">
                        <Tab key="0" title="آزمون های داخل ایران"/>
                        <Tab key="1" title="آزمون های خارج ایران"/>
                    </Tabs>
                    <div className='grid lg:grid-cols-12 grid-cols-1 lg:gap-6'>
                        <div className='hidden lg:block lg:col-span-3 h-fit'>
                            <Filters setCurrentPage={setCurrentPage}/>
                        </div>
                        {isLoading ?
                            <div className="w-full lg:col-span-9 col-span-1 centerOfParent"><Spinner color="success"/>
                            </div>
                            : <div
                                className='lg:col-span-9 col-span-1 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-6 sm:gap-y-10 gap-6'>
                                {exams?.length ? exams.map((e, i) => <ExamItem key={e.id} {...e}/>) :
                                    <p>آزمونی پیدا نشد</p>}
                            </div>}
                    </div>
                    <div className="w-full centerOfParent mt-6">
                        <PaginationApp
                            currentPage={currentPage}
                            total={pagination?.total}
                            onChange={setCurrentPage}
                            per_page={pagination?.per_page}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;