import React from 'react';
import {Tabs, Tab, RadioGroup, Radio, CheckboxGroup, Checkbox, NumberInput} from "@heroui/react";

const TabSkill = ({data, setState, state}) => {

    const handleTabContentChange = (value) => {
        setState(prev => {
            const updatedState = {...prev};
            updatedState.skill = value;
            return updatedState;
        });
    };

    const tab = data?.find(e => e.id === '2')
    return (
        <div className="flex flex-col gap-4 lg:border-none border-b pb-4">
            <label className='sm:text-lg text-sm text-primary-950'>انتخاب مهارت</label>
            {tab.content && (
                <div className='rounded-lg flex flex-col p-3 gap-8 bg-primary-50'>
                    {tab.content.map(content => (
                        <div
                            className={`flex lg:flex-row flex-col lg:gap-8 gap-4 ${Array.isArray(content.data) ? '' : 'items-center'}`}
                            key={content.title}>
                            <CheckboxGroup
                                isRequired
                                errorMessage=" "
                                aria-label=" "
                                orientation="horizontal"
                                style={{
                                    "--heroui-success": "196 94% 25%",
                                }}
                                color='success'
                                value={[state.skill]}
                                onValueChange={(e) => {
                                    if (e.length === 0)
                                        handleTabContentChange(null);
                                    else
                                        handleTabContentChange(e[e.length - 1]);
                                }}
                                classNames={{
                                    wrapper: 'flex flex-wrap [&>label]:min-w-44',
                                    base: 'grow'
                                }}
                            >
                                {content.data.map(c => (
                                    <Checkbox
                                        classNames={{icon: 'text-white', label: 'text-xs'}}
                                        key={c.id}
                                        value={c.id}>{c.title}</Checkbox>
                                ))}
                            </CheckboxGroup>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TabSkill;