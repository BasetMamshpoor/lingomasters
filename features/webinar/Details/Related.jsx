import React from 'react';
import Book from '@icons/webinar.svg'
import WebinarItem from "@/features/webinar/List/WebinarItem";

const Related = ({data, title}) => {
    return (
        <>
            <div className="flex flex-col gap-6  mt-6">
                <div className="flex items-center gap-3">
                    <Book/>
                    <p className="text-primary-950 font-semibold sm:text-base text-sm">{title}</p>
                </div>
                <div className="w-full grid  lg:grid-cols-2 grid-cols-1 gap-4">
                    {data.map(item => <WebinarItem key={item.id} r={item}/>)}
                </div>
            </div>
        </>
    );
};

export default Related;