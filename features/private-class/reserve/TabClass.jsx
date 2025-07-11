import React from 'react';
import {Tabs, Tab, RadioGroup, Radio, CheckboxGroup, Checkbox, NumberInput} from "@heroui/react";

const TabClass = ({data, setState, state}) => {

    const handleTabContentChange = (key, value) => {
        setState(prev => {
            const updatedState = {...prev};
            if (key === "2") {
                updatedState.skill = value;
                updatedState.offer = null;
                updatedState.session_count = null;
            } else if (key === "3") {
                updatedState.offer = value;
                updatedState.skill = null;
                updatedState.session_count = null;
            } else if (key === "4") {
                updatedState.session_count = value;
                updatedState.skill = null;
                updatedState.offer = null;
            } else {
                updatedState.skill = null;
                updatedState.offer = null;
                updatedState.session_count = null;
            }
            return updatedState;
        });
    };

    const handleTabChange = (key) => {
        setState(prev => ({
            ...prev,
            class_type: key,
            skill: null,
            offer: null,
            session_count: null,
        }));
    };
    return (
        <div className="flex flex-col gap-4 lg:border-none border-b pb-4">
            <label className='sm:text-lg text-sm text-primary-950'>انتخاب جلسات</label>
            <div className='flex flex-col gap-6'>
                <Tabs
                    classNames={{
                        tab: "[&>span]:hidden w-fit min-w-32 justify-start",
                        panel: 'py-0 [&>div]:shadow-none [&>div>div]:!p-0',
                        tabList: 'grid xl:grid-cols-4 grid-cols-2'
                    }}
                    aria-label="Tabs variants"
                    variant="underlined"
                    selectedKey={state.class_type}
                    onSelectionChange={(key) => setState(prev => ({...prev, class_type: key}))}
                >
                    {data.map(tab => (
                        <Tab
                            key={tab.id}
                            title={
                                <RadioGroup
                                    value={state.class_type}
                                    onValueChange={() => handleTabChange(tab.id, null)}
                                    color="default"
                                    style={{"--heroui-default-500": "196 94% 25%"}}
                                    aria-label={tab.title}
                                >
                                    <Radio value={tab.id} name={tab.title} key={tab.id}
                                           classNames={{label: 'flex items-center gap-2'}}>
                                        <span className="sm:text-base text-xs">{tab.title}</span>
                                    </Radio>
                                </RadioGroup>
                            }
                        >
                            {tab.content && (
                                <div className='rounded-lg flex flex-col p-3 gap-8 bg-primary-50'>
                                    {tab.content.map(content => (
                                        <div
                                            className={`flex lg:flex-row flex-col lg:gap-8 gap-4 ${Array.isArray(content.data) ? '' : 'items-center'}`}
                                            key={content.title}>
                                            <label
                                                className='text-sm text-natural_gray-950 min-w-32'>{content.title}</label>
                                            {Array.isArray(content.data) ? (
                                                <CheckboxGroup
                                                    isRequired
                                                    errorMessage=" "
                                                    aria-label=" "
                                                    orientation="horizontal"
                                                    style={{
                                                        "--heroui-success": "196 94% 25%",
                                                    }}
                                                    color='success'
                                                    value={[tab.id === "2" ? state.skill : tab.id === '3' ? state.offer : null]}
                                                    onValueChange={(e) => {
                                                        if (e.length === 0)
                                                            handleTabContentChange(tab.id, null);
                                                        else
                                                            handleTabContentChange(tab.id, e[e.length - 1]);
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
                                            ) : (
                                                <div className="centerOfParent">
                                                    <NumberInput step={1} radius='sm' variant='bordered'
                                                                 value={state.session_count}
                                                                 onValueChange={(value) => handleTabContentChange("4", value)}
                                                                 classNames={{inputWrapper: 'bg-white'}}/>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default TabClass;