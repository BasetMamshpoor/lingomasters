import React from 'react';
import Download from '@icons/download.svg';


const Files = () => {
    return (
        <>
            <div className="flex flex-col gap-4">
                {Array.from({length: 10}).map((_, index) => (
                    <div className="py-1 px-8 flex items-center gap-2 w-full" key={index}>
                        <div className="centerOfParent rounded-xl bg-rose-50 text-rose-700 w-10 h-10 text-xs">
                            file
                        </div>
                        <div className="flex flex-col grow">
                            <p className="text-sm text-primary-950">فایل {index + 1}</p>
                            <div className="flex items-center gap-1">
                                <p dir={'auto'} className="text-xs text-natural_gray-500">2.5 MB</p>
                                <span className="text-natural_gray-500 text-xs">PDF</span>
                            </div>
                        </div>
                        <div className="centerOfParent"><Download className="fill-primary-600"/></div>
                    </div>
                ))}

            </div>
        </>
    );
};

export default Files;