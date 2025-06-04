import React from 'react';
import {useExamsContext} from "@/providers/ExamProvider";
import QuestionRenderer from "@/features/exams/QuestionRenderer";

const Others = () => {
    const {data, formRef} = useExamsContext();

    return (
        <>
            <div className="font-Inner my-10 py-10 px-6 border border-natural_gray-200 rounded-2xl flex flex-col gap-6">
                <h1 className='font-bold text-2xl'>{data.part_title}</h1>
                <div className="p-6 border border-natural_gray-200 rounded-xl flex flex-col gap-2">
                    <p className="text-sm font-bold">Directions</p>
                    <p className="text-sm whitespace-break-spaces">{data.description}</p>
                </div>
                <form ref={formRef}>
                    {data.questions?.map((e, index) => <QuestionRenderer key={e.id} question={e} index={index}/>)}
                </form>
            </div>
        </>
    );
};

export default Others;