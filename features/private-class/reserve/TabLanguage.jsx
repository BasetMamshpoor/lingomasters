import React from 'react';
import {Radio, RadioGroup} from "@heroui/react";
import Image from "next/image";

const TabLanguage = ({data, selected, setSelected, defaultState}) => {

    const handleChange = (e) => {
        setSelected(prev => {
            return {...defaultState, language: e}
        })
    }
    return (
        <>
            <div className="flex flex-col gap-4 lg:border-none border-b pb-4">
                <label className='sm:text-lg text-sm text-primary-950'>انتخاب زبان</label>
                <RadioGroup
                    isRequired
                    errorMessage=" "
                    value={selected}
                    onValueChange={handleChange}
                    color="default"
                    style={{"--heroui-default-500": "196 94% 25%"}}
                    classNames={{wrapper: 'gap-6'}}
                    orientation="horizontal">
                    {data.map(t => (
                        <Radio value={t.id} name={t.title} key={t.id}
                               classNames={{label: 'flex items-center gap-2', base: 'min-w-32'}}>
                            {t.flag && <div className="centerOfParent w-5 h-5">
                                <Image
                                    alt={t.title}
                                    src={t.flag}
                                    width={24}
                                    height={24}
                                    sizes="100vw"
                                    className="w-full h-full object-contain"/>
                            </div>}
                            <span className="sm:text-base text-xs">{t.title}</span>
                        </Radio>
                    ))}
                </RadioGroup>
            </div>
        </>
    );
};

export default TabLanguage;