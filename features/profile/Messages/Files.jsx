import React from 'react';
import Download from '@icons/download.svg';
import {Spinner} from "@heroui/react";

const Files = ({data = [], isLoading}) => {
    return (
        <>
            {isLoading ?
                <div className="centerOfParent w-ful h-[30vh]"><Spinner variant='dots' color='success' size="lg"/>
                </div> :
                <div className="flex flex-col gap-4">
                    {data.length ? data.map((f, index) => (
                        <a href={f.path} download={f.path} targe='_blank'
                           className="py-1 px-8 flex items-center gap-2 w-full cursor-pointer" key={f.id}>
                            <div className="centerOfParent rounded-xl bg-rose-50 text-rose-700 w-10 h-10 text-xs">
                                {f.file_extension}
                            </div>
                            <div className="flex flex-col grow">
                                <p className="text-sm text-primary-950">فایل {index + 1}</p>
                                <p className="text-xs text-natural_gray-500 text-right" dir='ltr'>{f.file_size}</p>
                            </div>
                            <div className="centerOfParent"><Download className="fill-primary-600"/></div>
                        </a>
                    )) : <p className="text-center text-sm  lg:col-span-4 col-span-3">هیچ لینکی وجود ندارد</p>}
                </div>}
        </>
    );
};

export default Files;