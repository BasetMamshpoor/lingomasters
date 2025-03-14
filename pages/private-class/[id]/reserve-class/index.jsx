import Progress from '@/components/Progress';
import Image from 'next/image';
import React, { useState } from 'react';
import TabsComponent from '../../_components/reserve/Tabs';
import db from 'db/reserve.json'
import ChooseBook from '../../_components/reserve/ChooseBook';
import { Input, Textarea } from "@heroui/react";
import Link from 'next/link';
import Calendar from '../../_components/reserve/Calendar';
import ReserveCheckout from '../../_components/reserve/ProfessorReserve';
const stepsList = [
    'وارد کردن اطلاعات',
    'تقویم آموزشی',
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
                                <div className="centerOfParent rounded-full overflow-hidden w-28 h-28">
                                    <Image src={'/images/image 144.png'} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                                </div>
                                <div className="flex flex-col gap-2 items-center">
                                    <h1 className='sm:text-xl text-base'>احسان علیزاده</h1>
                                    <p className='text-natural_gray-600 text-xs'>(کد استاد: 587848)</p>
                                </div>
                            </div>
                            <div className="flex items-center w-full justify-between py-2 px-3 bg-neutral-50">
                                <p className="text-xs text-natural_gray-950">جلسه ۲۵ دقیقه‌ای</p>
                                <p className='sm:text-sm text-xs text-green-700'> ۲۰۰ هزار تومان</p>
                            </div>
                        </div>
                        {steps == 3 ? <ReserveCheckout setSteps={setSteps} />
                            : steps == 2 ?
                                <div className="col-span-3 flex flex-col gap-6">
                                    <Calendar />
                                    <div className="flex items-end self-end gap-6">
                                        <button
                                            onClick={() => setSteps(steps - 1)} type='button'
                                            className='w-44 effect-1 sm:text-base text-xs flex-[1_0_0] sm:px-6 px-4 sm:py-4 py-2 rounded border-secondary-500 sm:border-[1.5px] border text-secondary-500 centerOfParent'>بازگشت</button>
                                        <button
                                            onClick={() => setSteps(steps + 1)} type='button'
                                            className="w-44 effect-2 sm:py-4 py-2 sm:px-6 px-4 sm:text-base text-xs rounded text-white bg-primary-600 sm:w-[140px] self-end">ثبت</button>
                                    </div>
                                </div>
                                : <div className="col-span-3 py-6 sm:px-4 px-3 gap-20 border rounded-lg border-natural_gray-100 bg-white flex flex-col">
                                    <div className="flex flex-col gap-14">
                                        <TabsComponent title='انتخاب جلسات' tabs={db.class} >
                                            <div className="centerOfParent">
                                                <input type='number' radius='sm'
                                                    className='appearance:textfield] [&::-webkit-outer-spin-button]:!appearance-auto [&::-webkit-inner-spin-button]:!appearance-auto bg-white w-20 px-2 py-1' />
                                            </div>
                                        </TabsComponent>
                                        <TabsComponent title='انتخاب زبان' tabs={db.lang} />
                                        <TabsComponent title='گروه سنی' tabs={db.age} />
                                        <TabsComponent title='انتخاب سطح زبان' tabs={db.lang_level} />
                                        <TabsComponent title='نوع کلاس' tabs={db.class_type} />
                                        <TabsComponent title='هدف از یادگیری' tabs={db.point} ><TabsComponent tabs={db.exams} /></TabsComponent>
                                        <ChooseBook />
                                        <Input label="در صورتی که کد تخفیف دارید آن را وارد کنید." type="number" radius='sm' labelPlacement='outside' variant='bordered' className='sm:w-[448px]' />
                                        <Textarea label="در صورتی که پیامی برای استاد دارید بنویسید." type="number" radius='sm' labelPlacement='outside' variant='bordered' />
                                    </div>
                                    <div className="flex items-end sm:self-end gap-6">
                                        <Link href='/private-class' className='sm:w-[140px] w-full effect-1 sm:text-base text-xs sm:flex-[1_0_0] sm:px-6 px-4 sm:py-4 py-2 rounded border-secondary-500 sm:border-[1.5px] border text-secondary-500 centerOfParent'>انصراف</Link>
                                        <button
                                            onClick={() => setSteps(steps + 1)}
                                            className="w-full effect-2 sm:py-4 py-2 sm:px-6 px-4 sm:text-base text-xs rounded text-white bg-primary-600 sm:w-[140px] self-end">ارسال</button>
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