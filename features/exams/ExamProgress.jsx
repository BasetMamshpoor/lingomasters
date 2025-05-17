import React from 'react';
import {Progress} from "@heroui/react";
import {useExamsContext} from "@/providers/ExamProvider";

const ExamProgress = () => {
    const {data, initialData, part} = useExamsContext();
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="">{`${part + 1}/${initialData.total} section`}</div>
                    <p className="text-2xl">{data.title}</p>
                </div>
                <Progress aria-label={"progress"} color="warning" minValue={1} maxValue={initialData.total_part}
                          value={part}/>
            </div>
        </>
    );
};

export default ExamProgress;