import Progress from '@/components/Progress';
import Image from 'next/image';
import React, { useState } from 'react';
import { Input, Textarea } from '@nextui-org/react';
import Link from 'next/link';
import ReserveCheckout from '../../_components/reserve/GroupClassReserve';
const stepsList = [
    'وارد کردن اطلاعات',
    'تاییدیه',
    'پرداخت'
];
const Reserve = () => {
    const [steps, setSteps] = useState(1)
    return (
        <>
            <main className='my-6' dir='rtl'>
                <div className="container">
                    <Progress active={steps} steps={stepsList} page='احسان علیزاده' />
                    <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-y-6 my-10">
                        <div className="col-span-1 h-fit lg:order-1 sm:p-4 py-4 px-3 rounded-lg border border-natural_gray-100 bg-white flex flex-col gap-10 items-center">
                            <div className="flex flex-col gap-6">
                                <div className="overflow-hidden rounded-2xl w-full max-h-64">
                                    <Image
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="w-full h-full object-cover"
                                        src={'/images/image 144.png'}
                                        alt={'data.name'}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 items-center">
                                    <h1 className='sm:text-xl text-base'>احسان علیزاده</h1>
                                    <p className='text-natural_gray-600 text-xs'>(کد استاد: 587848)</p>
                                </div>
                            </div>
                            <div className="gap-2 w-full lg:flex hidden flex-col">
                                <div className="bg-natural_gray-50 px-3 py-2  flex items-center justify-between">
                                    <p className="text-natural_gray-950 text-xs">مدت دوره</p>
                                    <p className="text-primary-700 text-sm">20 جلسه</p>
                                </div>
                                <div className=" bg-natural_gray-50 px-3 py-2 h-10 flex items-center justify-between">
                                    <p className="text-natural_gray-950 text-xs">قیمت دوره</p>
                                    <p className="text-green-600 text-sm hasToman">20</p>
                                </div>
                            </div>
                        </div>
                        {steps == 2 ?
                                 <ReserveCheckout />
                                : <div className="col-span-3 py-6 sm:px-4 px-3 gap-20 border rounded-lg border-natural_gray-100 bg-white flex flex-col">
                                    <div className="flex flex-col gap-14">
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                            <Input label="سن دقیق زبان آموز" type="number" radius='sm' labelPlacement='outside' variant='bordered' className='max-w-1/2' />
                                            <Input label="در صورتی که کد تخفیف دارید آن را وارد کنید." type="number" radius='sm' labelPlacement='outside' variant='bordered' className='max-w-1/2' />
                                        </div>
                                        <Textarea label="در صورتی که پیامی برای استاد دارید بنویسید." type="number" radius='sm' labelPlacement='outside' variant='bordered' />
                                    </div>
                                    <div className="flex items-center self-end gap-6">
                                        <Link href='/group-class' className='sm:w-44 effect-1 sm:text-base text-xs sm:px-6 px-4 sm:py-4 py-2 rounded border-secondary-500 sm:border-[1.5px] border text-secondary-500 centerOfParent'>انصراف</Link>
                                        <button
                                            onClick={() => setSteps(steps + 1)}
                                            className="sm:w-44 effect-2 sm:py-4 py-2 sm:px-6 px-4 sm:text-base text-xs rounded text-white bg-primary-600 self-end">ثبت</button>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </main>
        </>
    );
};

export default Reserve;