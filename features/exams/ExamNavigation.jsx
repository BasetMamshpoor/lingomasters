import React from 'react';
import {useExamsContext} from "@/providers/ExamProvider";

const ExamNavigation = () => {
    const {part, setPart, NextPart, PrevPart} = useExamsContext()
    return (
        <>
            <div className="flex items-center gap-6 justify-between mt-6">
                <button type="button"
                        onClick={PrevPart}
                        className="w-44 effect-2 sm:py-3 py-2 sm:px-6 px-4 sm:text-base text-xs rounded disabled:bg-natural_gray-700 text-white bg-primary-600 sm:w-[140px]">previous
                </button>
                <button type="button"
                        onClick={NextPart}
                        className="w-44 effect-2 sm:py-3 py-2 sm:px-6 px-4 sm:text-base text-xs rounded disabled:bg-natural_gray-700 text-white bg-primary-600 sm:w-[140px]">next
                </button>
            </div>
        </>
    );
};

export default ExamNavigation;