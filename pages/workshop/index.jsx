import React, {useState} from 'react';
import Filters from './_components/List/Filters';
import Filter from './_components/List/Filter';
import WebinarIcon from '@icons/webinar.svg'
import Workshops from "./_components/List/Workshops";
import {Tab, Tabs} from "@heroui/react";
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