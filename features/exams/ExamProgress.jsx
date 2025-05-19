import React from 'react';
import {Progress} from "@heroui/react";
import {useExamsContext} from "@/providers/ExamProvider";

const ExamProgress = () => {
    const {data, initialData, part} = useExamsContext();
    return (
        <>
            <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center justify-between">
                    <div className="">{`${part + 1}/${data.total_part} section`}</div>
                    <p className="text-2xl">{data.questionType}</p>
                </div>
                <Progress aria-label={"progress"} color="warning" minValue={1} maxValue={data.total_part}
                          value={part}/>
            </div>
        </>
    );
};

export default ExamProgress;