import React from 'react';
import {formatTextToJSX} from "@/helpers/formatText";
import {Checkbox, CheckboxGroup} from "@heroui/react";
import Image from "next/image";
import {useExamsContext} from "@/providers/ExamProvider";

const TestQuestions = ({data, number}) => {
    const {data: Data, state, setState} = useExamsContext()
    const {title, description, variants, medias, multiple_correct, question_text} = data
    const isReading = Data.questionType === 'reading'
    return (
        <>
            <div className="flex flex-col gap-6">
                {title && <p className="text-sm font-bold">{title}</p>}
                {description && <p className="text-sm">{description}</p>}
                {!!medias.length && medias.map(e => (
                    <div className="flex flex-col gap-4">
                        <div className="centerOfParent w-full">
                            <Image alt={title} src={e.media_path} width={100} height={100}
                                   className="w-fit h-fit object-contain"/>
                        </div>
                        {e.description && <p className="text-sm">{e.description}</p>}
                    </div>
                ))}
                {variants.length > 1 ?
                    <div className="flex flex-col gap-4 px-6">
                        <div className="flex flex-col gap-2">
                            {variants.map((item, index) => (
                                <div key={item.id} className="flex items-center gap-2">
                                    <p className='text-sm'>{index === 0 && number + '.'} {formatTextToJSX(item.question, false, undefined, index + 1)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            {variants.map((item, index) => (
                                <CheckboxGroup
                                    key={item.id}
                                    label={"i".repeat(index + 1)}
                                    color="success"
                                    style={{
                                        "--heroui-success": "196 94% 25%",
                                    }}
                                    value={state[item.id] || []}
                                    onValueChange={e => {
                                        setState(prev => ({
                                            ...prev,
                                            [item.id]: multiple_correct ? e : [e[e.length - 1]]
                                        }))
                                    }}
                                    classNames={{base: "flex flex-col gap-2"}}
                                >
                                    {item.options.map(item2 => (
                                        <Checkbox
                                            radius="sm"
                                            key={item2.id}
                                            value={item2.id}
                                            classNames={{label: 'flex items-center gap-2', icon: "text-white"}}>
                                            {item2.text}
                                        </Checkbox>
                                    ))}
                                </CheckboxGroup>
                            ))}
                        </div>
                    </div> :
                    <div className={`flex flex-col gap-4 px-6 ${isReading ? "!px-0" : ""}`}>
                        <p className='text-sm'>{number}. {formatTextToJSX(variants[0]?.question, true, number)}</p>
                        <CheckboxGroup
                            color="success"
                            style={{
                                "--heroui-success": "196 94% 25%",
                            }}
                            value={state[variants[0]?.id] || []}
                            onValueChange={e => {
                                setState(prev => ({
                                    ...prev,
                                    [variants[0]?.id]: multiple_correct ? e : [e[e.length - 1]]
                                }))
                            }}
                            classNames={{base: "flex flex-col gap-2"}}
                        >
                            {variants[0]?.options.map((item, i) => (
                                <Checkbox
                                    radius="sm"
                                    key={item.id}
                                    value={item.id}
                                    classNames={{
                                        label: `flex items-center gap-2 ${isReading ? "text-sm" : ""}`,
                                        icon: "text-white"
                                    }}>
                                    {String.fromCharCode(65 + i)}. {item.text}
                                </Checkbox>
                            ))}
                        </CheckboxGroup>
                    </div>
                }
            </div>
        </>
    );
};

export default TestQuestions;