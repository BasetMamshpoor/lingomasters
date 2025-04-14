import React from 'react';
import Verify from '@icons/verified.svg'
import Link from "next/link";

const Success = () => {
    return (
        <>
            <div className="centerOfParent my-10" dir='auto'>
                <div className="centerOfParent flex-col gap-6 p-6 max-w-[616px] shadow rounded-lg bg-white">
                    <Verify className='fill-success-700 w-16 h-16'/>
                    <div className="flex flex-col items-center gap-10">
                        <p className='text-success-700 text-lg'>پرداخت شما با موفقیت انجام شد.</p>
                        <p className='text-natural_gray-950 text-center'>وبینار برای شما ثبت شد . شما می توانید از طریق پنل خود در وبینار در روز و ساعت مشخص شرکت کنید.</p>
                        <p className='text-primary-950'>با احترام لینگومسترز</p>
                        <Link href='/' className='bg-primary-600 rounded centerOfParent px-6 py-2 text-white'>بازگشت به
                            صفحه
                            اصلی</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Success;