import React, {useState} from 'react';
import Filters from '@/features/workshop/List/Filters';
import Filter from '@/features/workshop/List/Filter';
import WebinarIcon from '@icons/webinar.svg'
import Workshops from "@/features/workshop/List/Workshops";
import {Alert, Tab, Tabs} from "@heroui/react";
import {useRouter} from "next/router";
import {useSearchParams} from "next/navigation";

const Workshop = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const {query} = useRouter()
    const [currentPage, setCurrentPage] = useState(1)

    const handleChange = (value) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value === 'in') {
            params.set('is_inside', 'in');
        } else {
            params.set('is_inside', 'out');
        }

        router.push(`?${params.toString()}`);
    };

    return (
        <>
            <section className='py-12' dir="rtl">
                <div className="container flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <Alert color="warning" variant="faded"
                               description={"ورکشاپ های تعریف شده توسط اساتید لینگومسترز، در صورت عدم تکمیل ظرفیت تا ۲۴ ساعت قبل از شروع، توسط لینگومسترز لغو خواهند شد و کل شهریه پرداختی، به کیف پول شما برگشت داده می شود."}/>
                        <Alert color="warning" variant="faded"
                               description={"ورکشاپ های تعریف شده توسط اساتید لینگومسترز، صرفاً تا ۲۴ ساعت قبل از شروع، بدون کسر هیچ هزینه ای قابل انصراف هستند \n" +
                                   "و کل شهریه پرداختی، به کیف پول شما برگشت داده می شود ولی کمتر از ۲۴ ساعت قبل از شروع، قابلیت انصراف ندارند."}/>
                        {/*<div*/}
                        {/*    className="w-full flex items-start gap-4 rounded-lg bg-[#FFFBEB] p-6 sm:text-base text-sm text-[#F3A218] mb-6">*/}
                        {/*    <div className="centerOfParent rounded-full h-6 w-6 warningDots"></div>*/}
                        {/*    <p>حداقل زمان رزرو ورکشاپ ها، تا یک روز قبل از شروع می باشد مگر اینکه جهت تکمیل ظرفیت تا یک ساعت قبل از شروع. زمان ثبت نام تمدید شود.</p>*/}
                        {/*</div>*/}
                    </div>
                    <div className="lg:flex hidden items-center justify-center gap-2">
                        <div className="centerOfParent"><WebinarIcon className='w-8 h-8'/></div>
                        <h1 className='text-2xl'>ورکشاپ‌ها (حضوری )</h1>
                    </div>
                    <div className='lg:hidden flex items-center justify-between'>
                        <div className="flex items-center gap-4">
                            <WebinarIcon className='w-6 h-6'/>
                            <h1 className="font-semibold">ورکشاپ‌ها (حضوری )</h1>
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
                        selectedKey={query.is_inside || 'in'}
                        onSelectionChange={handleChange}
                        aria-label="Options">
                        <Tab key="in" title="اساتید داخل ایران"/>
                        <Tab key="out" title="اساتید خارج ایران"/>
                    </Tabs>
                    <div className='grid lg:grid-cols-12 grid-cols-1'>
                        <div className='hidden lg:block lg:col-span-3 bg-white'>
                            <Filters setCurrentPage={setCurrentPage}/>
                        </div>
                        <div className='flex flex-col lg:col-span-9 gap-4 sm:px-4'>
                            <Workshops currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Workshop;