import React from 'react';
import Download from "@icons/download.svg";
import {Checkbox, CheckboxGroup} from "@heroui/react";
import Close from "@icons/close.svg";
import HomeWork from "@/features/profile/dashboard/HomeWork";

const AwaitingCorrectionMobile = ({title, professor, homework, number, ...other}) => {
    return (
        <>
            <div className="flex flex-col gap-3 border-b border-natural_gray-200 py-3 text-xs">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col gap-2">
                        <span className='text-natural_gray-800'>کلاس</span>
                        <p className='font-semibold'>{title}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className='text-natural_gray-800'>استاد</span>
                        <p className='font-semibold'>{professor}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className='text-natural_gray-800'>جلسه</span>
                        <p className='font-semibold'>{number}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <p>تمرین ها</p>
                    <p className="font-semibold" title={homework}>{homework}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p>عملیات</p>
                    <HomeWork {...{title, professor, homework, number, ...other}} />
                </div>
            </div>
        </>
    );
};

export default AwaitingCorrectionMobile;