import React, {useState} from 'react';
import Filters from './_components/List/Filters';
import Filter from './_components/List/Filter';
import WebinarIcon from '@icons/webinar.svg'
import Webinars from "./_components/List/Webinars";

const Webinar = () => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
        <>
            <section className='py-12' dir="rtl">
                <div className="container flex flex-col gap-6">
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