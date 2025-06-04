import React from 'react';
import {useExamsContext} from "@/providers/ExamProvider";
import QuestionRenderer from "@/features/exams/QuestionRenderer";
import Image from "next/image";

const Reading = () => {
    const {data,formRef} = useExamsContext();
    return (
        <>
            <div className="rounded-2xl bg-primary-50 py-10 px-6 flex flex-col gap-10">
                <h1 className="font-bold text-lg uppercase">{data.questionType}</h1>
                {data.description && <div className="p-6 border border-natural_gray-200 rounded-xl flex flex-col gap-2">
                    <p className="text-sm font-bold">Directions</p>
                    <p className="text-sm whitespace-break-spaces">{data.description}</p>
                </div>}
                {!!data.medias.length && data.medias.map(e => (
                    <div className="flex flex-col gap-4">
                        <div className="centerOfParent w-full">
                            <Image alt={title} src={e.media_path} width={100} height={100}
                                   className="w-fit h-fit object-contain mix-blend-multiply"/>
                        </div>
                        {e.description && <p className="text-sm">{e.description}</p>}
                    </div>
                ))}
                <div className="relative py-6 px-2 rounded-xl bg-white max-h-[1000px] flex gap-6 overflow-y-auto">
                    <div className="p-2 sticky top-0 w-1/2">
                        {data.passenger_title && <p className="font-bold">{data.passenger_title}</p>}
                        <p className="text-sm select-none text-justify whitespace-break-spaces">{data.passenger}</p>
                    </div>
                    <form ref={formRef} className="p-2 flex flex-col gap-6  w-1/2 mb-4">
                        {data.questions_title && <p className="whitespace-break-spaces">{data.questions_title}</p>}
                        {data.questions.map((e, i) => <QuestionRenderer key={e.id} question={e} index={i}/>)}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Reading;