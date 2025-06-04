import React from 'react';
import Link from "next/link";
import Image from "next/image";

const ExamItem = () => {
    return (
        <>
            <div className="relative w-full max-h-[195px]">
                <Image alt="/" src="/images/exam4.png" width={100} height={100}
                       className="w-full h-full object-cover rounded-xl"/>
                <div className="absolute -bottom-4 left-2 right-2 flex items-center gap-4 p-2 bg-white rounded-lg">
                    <Link href="/exams/plus/1" className="centerOfParent w-full border border-secondary-200 rounded text-secondary-500 py-1 text-sm effect-1">
                        اطلاعات بیشتر
                    </Link>
                    <Link href="/exams/plus/1" className="centerOfParent w-full border border-primary-600 bg-primary-600 text-white rounded py-1 text-sm effect-2">
                        رزرو آزمون
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ExamItem;