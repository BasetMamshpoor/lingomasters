import React from 'react';
import {useExamsContext} from "@/providers/ExamProvider";
import {formatTextToJSX, formatTextToJSXCloze} from "@/helpers/formatText";
import {Checkbox, CheckboxGroup} from "@heroui/react";

const Cloze = () => {
    const {data, formRef} = useExamsContext();
    const {question_text, id, blanks} = data.question
    return (
        <>
            <div className="font-Inner my-10 py-10 px-6 border border-natural_gray-200 rounded-2xl flex flex-col gap-6">
                <h1 className='font-bold text-2xl'>{data.part_title}</h1>
                <div className="p-6 border border-natural_gray-200 rounded-xl flex flex-col gap-2">
                    <p className="text-sm font-bold">Directions</p>
                    <p className="text-sm whitespace-break-spaces">{data.description}</p>
                </div>
                <form ref={formRef} className="flex flex-col gap-6">
                    <div
                        className="whitespace-break-spaces">{formatTextToJSXCloze(question_text, true, id)}</div>
                    {blanks.map((item, i) => (
                        <CheckboxGroup
                            key={item.id}
                            label={i + 1 + "."}
                            color="success"
                            style={{
                                "--heroui-success": "196 94% 25%",
                            }}
                            classNames={{base: "flex flex-col gap-2", label: 'text-black'}}
                        >
                            {item.options.map(item2 => (
                                <Checkbox
                                    radius="sm"
                                    key={item2.id}
                                    value={item2.id}
                                    classNames={{label: 'flex items-center gap-2 text-black', icon: "text-white"}}>
                                    {item2.text}
                                </Checkbox>
                            ))}
                        </CheckboxGroup>
                    ))}
                </form>
            </div>
        </>
    );
};

export default Cloze;