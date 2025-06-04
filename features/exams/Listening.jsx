import React from 'react';
import Image from "next/image";
import {useExamsContext} from "@/providers/ExamProvider";
import SoundPlayer from "@/features/exams/SoundPlayer";
import QuestionRenderer from "@/features/exams/QuestionRenderer";
import {formatTextToJSX} from "@/helpers/formatText";

const Listening = () => {
    const {data, formRef} = useExamsContext();
    return (
        <>
            <div className="flex flex-col gap-14">
                <div className="flex flex-col gap-12">
                    {!!data.medias.length && data.medias.map(e => (
                        e.media_type === 'image' ? <div className="flex flex-col gap-4">
                                <div className="centerOfParent w-full">
                                    <Image alt={e.description} src={e.media_path} width={100} height={100}
                                           className="w-fit h-fit object-contain"/>
                                </div>
                                {e.description && <p className="text-sm">{e.description}</p>}
                            </div> :
                            <SoundPlayer audio_url={e.media_path}/>
                    ))}
                    <div className="flex flex-col gap-4">
                        {data.part_title &&
                            <p className="whitespace-break-spaces font-bold text-xl">{data.part_title}</p>}
                        {data.description &&
                            <p className="whitespace-break-spaces">{formatTextToJSX(data.description)}</p>}
                        {data.center_message && <p className="text-center">{data.center_message}</p>}
                        <form ref={formRef}>
                            {data.questions.map((e, i) => <QuestionRenderer key={e.id} question={e} index={i}/>)}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Listening;