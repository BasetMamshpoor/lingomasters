import React from 'react';
import Growth from "@icons/growth.svg";
import Image from "next/image";

const AgeGroup = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-16 w-full px-5">
                <div className="flex items-center justify-center gap-3">
                    <Growth className="w-6 h-6 md:w-10 md:h-10"/>
                    <p className="text-sm font-bold sm:text-lg md:font-medium md:text-3xl flex items-center justify-center">رده
                        های سنی که می توانند با ما یاد
                        بگیرند.</p>
                </div>
                <div className="flex items-center justify-between w-full gap-4 md:gap-6 lg:gap-14">
                    <div
                        className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-20 w-full h-full flex-grow">
                        <div className="relative w-full h-full">
                            <Image unoptimized src="/images/group-childrens.png" alt="" width={100} height={100}
                                   className="w-full  z-20"/>
                        </div>
                        <p className="text-base md:text-xl">کودکان</p>
                    </div>
                    <div
                        className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-20 flex-grow w-full h-full">
                        <div className="relative w-full h-full">
                            <Image unoptimized src="/images/young-girl.png" alt="" width={100} height={100}
                                   className="w-full z-20"/>
                        </div>
                        <p className="text-base md:text-xl">نوجوانان</p>
                    </div>
                    <div
                        className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-20 flex-grow w-full h-full">
                        <div className="relative w-full h-full">
                            <Image unoptimized src="/images/Adults.png" alt="" width={100} height={100}
                                   className="w-full h-full "/>
                        </div>
                        <p className="text-base md:text-xl">بزرگسالان</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AgeGroup;