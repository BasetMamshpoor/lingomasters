import React, {useState} from 'react';
import Image from "next/image";
import {formatTextToJSXInput} from "@/helpers/formatText";
import {useExamsContext} from "@/providers/ExamProvider";

const ShortAnswer = ({data, number}) => {
    const {state} = useExamsContext()
    const {title, description, question_text, medias} = data;

    return (
        <>
            <div className="flex flex-col gap-6">
                {title && <p className="text-sm font-bold">{title}</p>}
                {description && <p className="text-sm break-words whitespace-break-spaces">{description}</p>}
                {!!medias.length && medias.map(e => (
                    <div className="flex flex-col gap-4">
                        <div className="centerOfParent w-full">
                            <Image alt={title} src={e.media_path} width={100} height={100}
                                   className="w-fit h-fit object-contain mix-blend-multiply"/>
                        </div>
                        {e.description && <p className="text-sm">{e.description}</p>}
                    </div>
                ))}
                <p className='text-sm'>{number}. {formatTextToJSXInput(question_text, data.id, state[data.id])}</p>
            </div>
        </>
    );
};

export default ShortAnswer;