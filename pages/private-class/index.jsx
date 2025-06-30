import React, {useState} from 'react';
import Filters from '@/features/private-class/List/Filters';
import Filter from '@/features/private-class/List/Filter';
import ProfessorItem from '@/features/private-class/List/Professors';
import Pepole from '@icons/users.svg'
import {Alert, Tab, Tabs} from "@heroui/react";
import {useRouter} from 'next/router';

const PrivateClass = () => {
    const router = useRouter()
    const {query} = router
    const [currentPage, setCurrentPage] = useState(1)

    const handleChange = (value) => {
        router.replace({pathname: router.asPath.split('?')[0], query: {...query, is_inside: value},},
            undefined,
            {shallow: false}
        );
    }

    return (
        <>
            <section className='py-12' dir="rtl">
                <div className="container">
                    <div className="flex flex-col gap-2 mb-6">
                        <Alert color="warning" variant="faded"
                               description={"محتوای کلاس های آنلاین خصوصی، صرفا برای مرور و یا تمرین بیشتر خود زبان آموز و نه شخص یا اشخاص ثالث دیگری با هماهنگی استاد قابل ضبط هستند \n" +
                                   "ولی زبان آموز حق انتشار آن را به هیچ عنوان و به هیچ شکلی ندارد و در صورت تخلف، حساب کاربری او بلافاصله مسدود و بایستی در مراجع قانونی پاسخگو باشد. "}/>
                        <Alert color="warning" variant="faded"
                               description={"کلاس های خصوصی، صرفاً تا ۲۴ ساعت قبل از شروع، بدون کسر هیچ هزینه ای قابل لغو هستند و کل شهریه پرداختی، به کیف پول شما برگشت داده می شود \n" +
                                   "ولی کمتر از ۲۴ ساعت قبل از شروع، با کسر مبلغی با توجه به مدت زمان باقی مانده تا شروع کلاس، قابل لغو هستند و شهریه پرداختی شما از بابت کلاس، \n" +
                                   "پس از کسر جریمه، به کیف پول شما، برگشت داده می شود."}/>
                    </div>
                    <div className="lg:flex hidden items-center justify-center gap-2">
                        <div className="centerOfParent"><Pepole className='w-8 h-8 fill-primary-700'/></div>
                        <h1 className='text-2xl'>کلاس های خصوصی</h1>
                    </div>
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
                        selectedKey={query.is_inside || 'in'}
                        onSelectionChange={handleChange}
                        aria-label="Options">
                        <Tab key="in" title="اساتید داخل ایران"> </Tab>
                        <Tab key="out" title="اساتید خارج ایران"> </Tab>
                    </Tabs>
                    {/*<div*/}
                    {/*    className="w-full flex items-start gap-4 rounded-lg bg-[#FFFBEB] p-6 sm:text-base text-sm text-[#F3A218] mb-6">*/}
                    {/*    <div className="centerOfParent rounded-full h-6 w-6 warningDots"></div>*/}
                    {/*    <p>زبان آموز گرامی، لطفاً هنگام رزرو کلاس های خصوصی چه آنلاین و چه حضوری به حداقل زمان قبول کلاس، توسط استاد توجه نمایید.</p>*/}
                    {/*</div>*/}
                    <div className='grid lg:grid-cols-12 grid-cols-1'>
                        <div className='hidden lg:block lg:col-span-3 bg-white'>
                            <Filters setCurrentPage={setCurrentPage}/>
                        </div>
                        <div className='flex flex-col lg:col-span-9 gap-4 sm:px-4'>
                            <ProfessorItem currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivateClass;