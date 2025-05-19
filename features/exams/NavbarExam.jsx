import React from 'react';
import Watch from '@icons/stopwatch.svg'
import TimerCountdown from "@/helpers/timer";
import {addToast} from "@heroui/react";
import {useExamsContext} from "@/providers/ExamProvider";

const NavbarExam = () => {
    const {data, setPart} = useExamsContext();

    return (
        <>
            <div className="p-4 flex items-center justify-between gap-4 bg-primary-50 rounded-lg mb-6">
                <div className="flex items-center gap-4">
                    <Watch className='fill-primary-700 w-10 h-10'/>
                    <span className="text-xl font-semibold">
                        {TimerCountdown(data.duration, (isComplete) => {
                            if (isComplete) {
                                addToast({
                                    description: 'زمان آزمون به پایان رسید',
                                    color: 'warning',
                                })
                                setPart(2)
                            }
                        })}
                    </span>
                </div>
                <p>{data.questions?.length} Questions</p>
            </div>
        </>
    );
};

export default React.memo(NavbarExam);