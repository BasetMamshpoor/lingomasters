import React from 'react';
import {Radio, RadioGroup} from "@heroui/react";

const TabSimple = ({title, selected, setSelected, data, defaultState}) => {
    const handleChange = (e) => {
        setSelected(prev => {
            const {language, ageGroup, ...other} = prev
            return {
                ...defaultState, language, ageGroup, level: e
            }
        })
    }
    return (
        <>
            <div className="flex flex-col gap-4 lg:border-none border-b pb-4">
                <label className='sm:text-lg text-sm text-primary-950'>انتخاب سطح زبان</label>
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
                        <Radio value={t.id} name={t.title}
                               classNames={{label: 'flex items-center gap-2', base: 'min-w-32'}}>
                            {t.title}
                        </Radio>
                    ))}
                </RadioGroup>
            </div>
        </>
    );
};

export default TabSimple;