import React from 'react';
import {useExamsContext} from "@/providers/ExamProvider";
import {Textarea} from "@heroui/react";
import Image from "next/image";

const Writing = () => {
    const {data, formRef} = useExamsContext();
    const {description, medias, question_text, title,id} = data.questions[0]

    const [wordCount, setWordCount] = React.useState(0);
    const typingTimeoutRef = React.useRef(null);

    const handleTextChange = (e) => {
        const value = e.target.value;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const words = value.trim().split(/\s+/).filter(Boolean);
            setWordCount(words.length);
        }, 3000);
    };

    return (
        <>
            <div className="font-Inner my-10 py-10 px-6 border border-natural_gray-200 rounded-2xl flex flex-col gap-6">
                <h1 className='font-bold text-2xl'>{title}</h1>
                <div className="p-6 border border-natural_gray-200 rounded-xl flex flex-col gap-2">
                    <p className="text-sm font-bold">Directions</p>
                    <p className="text-sm whitespace-break-spaces">{description}</p>
                </div>
                <div className="whitespace-break-spaces">{question_text}</div>
                {!!medias.length && medias.map(e => (
                    <div className="flex flex-col gap-4">
                        <div className="centerOfParent w-full">
                            <Image alt={title} src={e.media_path} width={100} height={100}
                                   className="w-fit h-fit object-contain"/>
                        </div>
                        {e.description && <p className="text-sm">{e.description}</p>}
                    </div>
                ))}
                <form ref={formRef}>
                    <Textarea
                        isRequired
                        errorMessage={" "}
                        description={`${wordCount} words`}
                        minRows={6}
                        dir={"auto"}
                        name={id}
                        maxRows={40}
                        className="max-w-full w-full font-iransans"
                        variant={"bordered"}
                        placeholder="write here"
                        onChange={handleTextChange}
                    />
                </form>
            </div>
        </>
    );
};

export default Writing;