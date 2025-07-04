import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return (
        <>
            <div className="relative max-w-80 rounded-lg ">
                <Image src="/images/webinar.png" alt="" width={400} height={400}/>
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-3 w-[90%] p-2 bg-white rounded-lg  ">
                    <Link href="/"
                          className="flex items-center justify-center text-xs md:text-sm w-1/2 px-4 py-2 border-1.5 border-secondary-500 rounded-md whitespace-nowrap text-secondary-500">اطلاعات
                        بیشتر
                    </Link>
                    <Link href="/"
                          className="flex items-center justify-center text-xs md:text-sm w-1/2 px-4 py-2 bg-primary-600 text-white rounded-md whitespace-nowrap">رزرو آزمون
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Card;