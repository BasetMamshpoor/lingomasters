import React from 'react';
import Download from "@icons/download.svg";
import {Checkbox, CheckboxGroup} from "@heroui/react";
import Close from "@icons/close.svg";

const AwaitingCorrectionMobile = ({title, professor, homework}) => {
    return (
        <>
            <div className="flex flex-col gap-3 border-b border-natural_gray-200 py-3 text-xs">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col gap-2">
                        <span className='text-natural_gray-800'>کلاس</span>
                        <p className='font-semibold'>{title}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className='text-natural_gray-800'>زبان آموز</span>
                        <p className='font-semibold'>{professor}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <p>تمرین ها</p>
                    <a href="#" className="flex items-center gap-2">
                        <div className="centerOfParent bg-natural_gray-200 rounded-full p-2">
                            <Download className='w-5 h-5'/>
                        </div>
                        <div className="flex flex-col items-start gap-1 text-right text-xs">
                            <p className="text-natural_gray-950 font-semibold">دانلود کنید</p>
                            <p className="text-natural_gray-900 line-clamp-1">{homework}</p>
                        </div>
                    </a>
                </div>
                <div className="flex flex-col gap-1">
                    <p>عملیات</p>
                    <CheckboxGroup
                        color='success'
                        style={{
                            "--heroui-success": "196 94% 25%",
                        }}
                        orientation="horizontal"
                    >
                        <Checkbox
                            value='1'
                            radius='sm'
                            color='success'
                            classNames={{icon: 'text-white', wrapper: 'bg-white', label: 'text-xs'}}
                            style={{
                                "--heroui-success": "196 94% 25%",
                            }}>تصحیح کردم</Checkbox>
                        <Checkbox
                            value='2'
                            radius='sm'
                            color='success'
                            classNames={{icon: 'fill-white w-4 h-4', wrapper: 'bg-white', label: 'text-xs'}}
                            icon={<Close/>}
                            style={{
                                "--heroui-success": "2 74% 48%",
                            }}>تصحیح نکردم</Checkbox>
                    </CheckboxGroup>
                </div>
            </div>
        </>
    );
};

export default AwaitingCorrectionMobile;