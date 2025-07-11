import React from 'react';
import Growth from "@icons/growth.svg";
import Image from "next/image";
import Link from "next/link";

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
                    <Link href={`/group-class?age_group=1`}
                          className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-20 w-full h-full flex-grow">
                        <div className="w-full h-full">
                            <Image unoptimized src="/images/group-childrens2.jpg" alt="" width={100} height={100}
                                   className="w-full h-full"/>
                        </div>
                        <p className="text-base md:text-xl">کودکان</p>
                    </Link>
                    <Link href={`/group-class?age_group=2`}
                        className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-20 flex-grow w-full h-full">
                        <div className="w-full h-full">
                            <Image unoptimized src="/images/young-girl2.jpg" alt="" width={100} height={100}
                                   className="w-full h-full"/>
                        </div>
                        <p className="text-base md:text-xl">نوجوانان</p>
                    </Link>
                    <Link href={`/group-class?age_group=3`}
                        className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-20 flex-grow w-full h-full">
                        <div className="w-full h-full">
                            <Image unoptimized src="/images/Adults2.jpg" alt="" width={100} height={100}
                                   className="w-full h-full"/>
                        </div>
                        <p className="text-base md:text-xl">بزرگسالان</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AgeGroup;