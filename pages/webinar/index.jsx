import React, {useState} from 'react';
import Filters from '@/features/webinar/List/Filters';
import Filter from '@/features/webinar/List/Filter';
import WebinarIcon from '@icons/webinar.svg'
import Webinars from "@/features/webinar/List/Webinars";
import {Alert} from "@heroui/react";

const Webinar = () => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
        <>
            <section className='py-12' dir="rtl">
                <div className="container flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <Alert color="warning" variant="faded"
                               description="وبینارهای تعریف شده توسط اساتید لینگومسترز، در صورت عدم تکمیل ظرفیت تا ۲۴ ساعت قبل از شروع، توسط لینگومسترز لغو خواهند شد و کل شهریه پرداختی، به کیف پول شما برگشت داده می شود."/>
                        <Alert color="warning" variant="faded"
                               description="وبینارهای تعریف شده توسط اساتید لینگومسترز، صرفاً تا ۲۴ ساعت قبل از شروع، بدون کسر هیچ هزینه ای قابل انصراف هستند
و کل شهریه پرداختی، به کیف پول شما برگشت داده می شود ولی کمتر از ۲۴ ساعت قبل از شروع، قابلیت انصراف ندارند."/>
                        {/*<div*/}
                        {/*    className="w-full flex items-start gap-4 rounded-lg bg-[#FFFBEB] p-6 sm:text-base text-sm text-[#F3A218] mb-6">*/}
                        {/*    <div className="centerOfParent rounded-full h-6 w-6 warningDots"></div>*/}
                        {/*    <p>حداقل زمان رزرو وبینارها، تا یک روز قبل از شروع می باشد مگر اینکه جهت تکمیل ظرفیت تا یک ساعت قبل از شروع. زمان ثبت نام تمدید شود.</p>*/}
                        {/*</div>*/}
                    </div>
                    <div className="lg:flex hidden items-center justify-center gap-2">
                        <div className="centerOfParent"><WebinarIcon className='w-8 h-8'/></div>
                        <h1 className='text-2xl'>وبینارها (آنلاین)</h1>
                    </div>
                    <div className='lg:hidden flex items-center justify-between'>
                        <div className="flex items-center gap-4">
                            <WebinarIcon className='w-6 h-6'/>
                            <h1 className="font-semibold">وبینارها (آنلاین)</h1>
                        </div>
                        <div className="centerOfParent">
                            <Filter setCurrentPage={setCurrentPage}/>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-12 grid-cols-1'>
                        <div className='hidden lg:block lg:col-span-3 bg-white'>
                            <Filters setCurrentPage={setCurrentPage}/>
                        </div>
                        <div className='flex flex-col lg:col-span-9 gap-4 sm:px-4'>
                            <Webinars currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Webinar;