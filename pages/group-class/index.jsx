import React, { useState } from 'react';
import Filters from './_components/List/Filters';
import Filter from './_components/List/Filter';
import ClassItems from './_components/List/Items';
import Pepole from '@icons/book-close.svg'
import { Tab, Tabs } from '@nextui-org/react';

const GroupClass = () => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
        <>
            <section className='py-12' dir="rtl">
                <div className="container">
                    <div className="lg:flex hidden items-center justify-center gap-2">
                        <div className="centerOfParent"><Pepole className='w-8 h-8' /></div>
                        <h1 className='text-2xl text-primary-800' >کلاس های گروهی</h1>
                    </div>
                    <div className='lg:hidden flex items-center justify-between'>
                        <div className="flex items-center gap-4">
                            <Pepole className='fill-[#243464] w-6 h-6' />
                            <h1 className="font-semibold text-primary-900">کلاس های گروهی</h1>
                        </div>
                        <div className="centerOfParent">
                            <Filter setCurrentPage={setCurrentPage} />
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
                        // selectedKey={query.is_inside || 'in'}
                        // onSelectionChange={handleChange}
                        aria-label="Options">
                        <Tab key="in" title="اساتید داخل ایران"> </Tab>
                        <Tab key="out" title="اساتید خارج ایران"> </Tab>
                    </Tabs>
                    <div className="w-full flex sm:flex-row flex-col items-start gap-4 rounded-lg bg-[#FFFBEB] p-6 sm:text-base text-sm text-[#F3A218] mb-6">
                        <div className="flex items-center gap-4">
                            <div className="centerOfParent rounded-full h-6 w-6 warningDots"></div>
                            <p className='whitespace-nowrap'>توجه داشته باشید:</p>
                        </div>
                        <p>برای رزرو کلاس آنلاین حداقل یک ساعت قبل از کلاس برای رزرو اقدام نمایید. و همچنین برای رزرو کلاس حضوری حداقل 2 ساعت قبل از کلاس باید رزرو کنید.</p>
                    </div>
                    <div className='grid lg:grid-cols-12 grid-cols-1'>
                        <div className='hidden lg:block lg:col-span-3 bg-white'>
                            <Filters setCurrentPage={setCurrentPage} />
                        </div>
                        <div className='flex flex-col lg:col-span-9 gap-4 sm:px-4'>
                            <ClassItems currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GroupClass;