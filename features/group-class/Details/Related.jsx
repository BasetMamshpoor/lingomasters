import React from 'react';
import Book from '@icons/book-close.svg'
import ClassItem from "@/features/group-class/List/ClassItem";

const Related = ({data}) => {
    return (
        <>
            <div className="flex flex-col gap-10 items-center mt-6">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-3">
                        <Book/>
                        <p className="text-primary-950 font-semibold sm:text-base text-sm">کلاس های گروهی
                            مشابه</p>
                    </div>
                    <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4">
                        {data.map(item => <ClassItem key={item.id} data={item}/>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Related;