import React from 'react';
import Verify from "@icons/verified.svg";
import Right from "@icons/arrow-left.svg";
import Link from "next/link";

const Success = () => {
    return (
        <>
            <div className="centerOfParent my-10" dir='auto'>
                <div className="centerOfParent flex-col gap-6 p-6 max-w-[616px] shadow rounded-lg bg-white">
                    <Verify className='fill-success-700 w-16 h-16'/>
                    <div className="flex flex-col items-center gap-10">
                        <p className='text-success-700 text-lg'>پرداخت آزمون با موفقیت انجام شد.</p>
                        <p className='text-natural_gray-950 text-center'>پرداخت آزمون با موفقیت رزرو شد. شما می توانید
                            از طریق پنل کاربری خود وضعیت و روز و ساعت برگزاری آزمون را مشاهده کنید.</p>
                        <p className='text-primary-950'>با احترام لینگومسترز</p>
                        <Link href='/profile' className='bg-primary-600 rounded centerOfParent px-6 py-2 text-white w-full'>ورود
                            به
                            پنل</Link>
                        <div className="">
                            اگر می خواهید قبل از آزمون آمادگی لازم را داشته باشید می توانید از قسمت <span
                            className='font-semibold text-primary-700'>آزمون پلاس</span> ما (ماک های آزمون ها) را انجام
                            دهید.
                        </div>
                        <Link href="/exams/plus" className="centerOfParent gap-4 text-primary-700">
                            ورود به آزمون پلاس
                            <Right className='fill-primary-700'/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Success;