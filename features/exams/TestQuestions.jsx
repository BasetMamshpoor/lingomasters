import React from 'react';
import {formatTextToJSX} from "@/helpers/formatText";
import {Checkbox, CheckboxGroup} from "@heroui/react";
import Image from "next/image";

const TestQuestions = ({data, number}) => {
    const {title, description, variants, medias} = data
    return (
        <>
            <div className="flex flex-col gap-6">
                {title && <p className="text-sm font-bold">{title}</p>}
                {description && <p className="text-sm">{description}</p>}
                {!!medias.length && medias.map(e => (
                    <div className="flex flex-col gap-4">
                        <div className="centerOfParent w-full">
                            <Image alt={title} src={e.media_path} width={100} height={100}
                                   className="w-fit h-fit object-contain mix-blend-multiply"/>
                        </div>
                        {e.description && <p className="text-sm">{e.description}</p>}
                    </div>
                ))}
                {variants.length > 1 ?
                    <div className="flex flex-col gap-4 px-6">
                        <div className="flex flex-col gap-2">
                            {variants.map((item, index) => (
                                <div key={item.id} className="flex items-center gap-2">
                                    <p className='text-sm'>{index === 0 && number + '.'} {formatTextToJSX(item.question, false, number, index + 1)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            {variants.map(item => (
                                <CheckboxGroup
                                    key={item.id}
                                    label={"i".repeat(item.id)}
                                    color="success"
                                    style={{
                                        "--heroui-success": "196 94% 25%",
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
                    <div className="flex flex-col gap-4 px-6">
                        <p className='text-sm'>{number}. {formatTextToJSX(variants[0].question, true, number)}</p>
                        <CheckboxGroup
                            color="success"
                            style={{
                                "--heroui-success": "196 94% 25%",
                            }}
                            classNames={{base: "flex flex-col gap-2"}}
                        >
                            {variants[0].options.map(item => (
                                <Checkbox
                                    radius="sm"
                                    key={item.id}
                                    value={item.id}
                                    classNames={{label: 'flex items-center gap-2', icon: "text-white"}}>
                                    {item.text}
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