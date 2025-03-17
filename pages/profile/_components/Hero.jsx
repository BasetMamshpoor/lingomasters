import React from 'react';
import Link from "next/link";
import Rectangle from "@icons/rectangle.svg";
import Right from "@icons/chevron-right.svg";
import Verified from "@icons/verified.svg";
import Left from "@icons/arrow-left.svg";
import {addToast, Alert} from "@heroui/react";
import Copy from "@icons/copy.svg";
import ProfileImage from "@/pages/profile/_components/ImageProfile";

const Hero = ({level, children}) => {
    return (
        <>
            <div className="flex flex-col gap-6 self-center items-center w-full">
                <div className="flex flex-col gap-3 items-center">
                    <div className="flex flex-col gap-2">
                        <ProfileImage />
                        <p className='flex items-center gap-2'>
                            <span className='text-xs text-natural_gray-950'>کد زبان‌آموزی:</span>
                            <span className='text-sm'>123456</span>
                        </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='text-rose-700 text-xs'>توجه: عکس پروفایل حتما باید با زمینه سفید باشد</p>
                        <Link href='/public' className='text-primary-700 text-xs'>(لینک حذف زمینه)</Link>
                    </div>
                </div>
                {!level ? <div className='flex flex-col gap-2 p-6 border border-natural_gray-200 rounded-xl bg-white w-full'>
                        <Alert color="warning"  classNames={{title:'whitespace-pre-line',base:'items-center'}}
                               title={"در حال حاضر سطح زبان شما مشخص نمی‌باشد. پینشهاد لینگومسترز به شما این است که از آزمون تعیین سطح لینگومسترز استفاده کنید.\n" +
                                   "برای شروع می‌توانید بر روی دکمه رزرو تعیین سطح کلیک کنید و تعیین سطح زبان خود را در کمترین زمان انجام دهید. \n" +
                                   "در غیر این صورت می‌توانید از اساتید و کلاس‌های گروهی سطح پایه استفاده کنید."}/>
                        <Link href='/'
                              className='bg-primary-600 text-white rounded px-4 py-2 self-end sm:text-base text-sm'>
                            رزرو تعیین سطح لینگومسترز
                        </Link>
                    </div> :
                    <>
                        <div className="lg:flex hidden items-center h-fit">
                            {['pre A1', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'].reverse().map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="centerOfParent">
                                        <Rectangle
                                            className={`w-28 h-10 ${
                                                item === level
                                                    ? 'fill-primary-700'
                                                    : index < ['pre A1', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'].reverse().indexOf(level)
                                                        ? 'fill-natural_gray-200'
                                                        : 'fill-primary-100'
                                            }`}
                                        />
                                    </div>
                                    {item === level ? (
                                        <Link href='/profile/user-information/suggestion-class'
                                              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
                                            <Right className='w-4 h-4 fill-white'/>
                                            <span className="font-semibold font-Inner text-white">{item}</span>
                                            <Verified className='w-4 h-4'/>
                                        </Link>
                                    ) : (
                                        <span
                                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold font-Inner">
                                        {item}
                                    </span>
                                    )}
                                </div>
                            ))}
                        </div>
                        <Link href='/profile/user-information/suggestion-class'
                              className="lg:hidden flex text-white text-sm font-Inner items-center gap-1 bg-[#3E2DE1] rounded-lg px-3 py-1">
                            <Verified/>
                            سطح {level}
                            <Left className='fill-white w-4 h-4'/>
                        </Link>
                    </>
                }
                <div
                    className="flex items-center justify-between h-10 py-2 px-4 rounded bg-natural_gray-100 max-w-[411px] w-full">
                    <p className='sm:text-sm text-xs'>کد دعوت شما</p>
                    <div className="flex items-center gap-3">
                        <p className='sm:text-sm text-xs text-natural_gray-950'>123456</p>
                        <button
                            onClick={() => {
                                window.navigator.clipboard.writeText(`https://lingomasters.ir/auth/register?code=${123456}`);
                                addToast({
                                    title: 'کپی شد',
                                    description: 'لینک دعوت شما با موفقیت کپی شد',
                                    color: 'success',
                                })
                            }}
                            className="centerOfParent"><Copy/></button>
                    </div>
                </div>
                {children}
            </div>
        </>
    );
};

export default Hero;