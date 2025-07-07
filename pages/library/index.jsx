import React, {useState} from 'react';
import Filters from '@/features/Library/Filters';
import Filter from '@/features/Library/Filter';
import BookIcon from '@icons/books.svg'
import BookItems from "@/features/Library/BookItems";

const Library = () => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <>
            <section className='py-12' dir="rtl">
                <div className="container">
                    <div className="lg:flex hidden items-center justify-center gap-2 mb-10">
                        <div className="centerOfParent"><BookIcon className='fill-primary-600 w-8 h-8'/></div>
                        <h1 className='text-2xl text-primary-950 font-semibold'>کتابخانه</h1>
                    </div>
                    <div className='lg:hidden flex items-center justify-between mb-10'>
                        <div className="flex items-center gap-4">
                            <BookIcon className='fill-primary-600 w-6 h-6'/>
                            <h1 className="font-semibold text-primary-950">کتابخانه</h1>
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
                            <BookItems currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Library;