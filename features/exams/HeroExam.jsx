import React from 'react';
import {useExamsContext} from "@/providers/ExamProvider";

const HeroExam = () => {
    const {initialData, setPart} = useExamsContext();
    return (
        <>
            <div className="w-full rounded-2xl bg-primary-50 flex flex-col items-center justify-center gap-14 p-20">
                <h1 className='text-primary-950 text-4xl font-bold'>{initialData.part_title}</h1>
                <p className="whitespace-break-spaces">{initialData.description}</p>
                <button
                    onClick={() => setPart(2)}
                    className="w-44 effect-2 sm:py-3 py-2 sm:px-6 self-center px-4 sm:text-base text-xs rounded disabled:bg-natural_gray-700 text-white bg-primary-600 sm:w-[140px]">start
                    exam
                </button>
            </div>
        </>
    );
};

export default HeroExam;