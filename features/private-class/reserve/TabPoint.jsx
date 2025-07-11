import React, {useState} from 'react';
import {Radio, RadioGroup, Tab, Tabs} from "@heroui/react";

const TabPoint = ({data, selected, setSelected, children}) => {
    const [tab, setTab] = useState()
    const handleChange = (e) => {
        setSelected(prev => {
            return {...prev, books: [], subject_id: e}
        })
    }
    return (
        <>
            <div className="flex flex-col gap-4 lg:border-none border-b pb-4">
                <label className='sm:text-lg text-sm text-primary-950'>هدف از یادگیری</label>
                <div className='flex flex-col gap-6'>
                    <Tabs
                        classNames={{
                            tab: "[&>span]:hidden w-fit min-w-32 justify-start",
                            panel: 'py-0 [&>div]:shadow-none [&>div>div]:!p-0',
                            tabList: 'flex-wrap'
                        }}
                        aria-label="Tabs variants"
                        variant="underlined"
                        selectedKey={tab?.toString()}
                        onSelectionChange={setTab}
                    >
                        {data.map(t => {
                            return <Tab
                                key={t.id}
                                title={
                                    <RadioGroup
                                        value={tab?.toString()}
                                        onValueChange={setTab}
                                        color="default"
                                        style={{"--heroui-default-500": "196 94% 25%"}}
                                        aria-label={t.title}
                                    >
                                        <Radio value={t.id} name={t.title} key={t.id}
                                               classNames={{label: 'flex items-center gap-2'}}>
                                            <span className="sm:text-base text-xs">{t.title}</span>
                                        </Radio>
                                    </RadioGroup>
                                }
                            >
                                <div className='rounded-lg flex flex-col p-3 gap-8 bg-primary-50'>
                                    {Array.isArray(t.content) ? t.content.map(l => (
                                        <div
                                            className={`flex lg:flex-row flex-col lg:gap-8 gap-4 `}
                                            key={l.id}>
                                            <label
                                                className='text-sm text-natural_gray-950 min-w-32'>{l.title}</label>
                                            <RadioGroup
                                                isRequired
                                                errorMessage=" "
                                                aria-label=" "
                                                orientation="horizontal"
                                                style={{
                                                    "--heroui-success": "196 94% 25%",
                                                }}
                                                color='success'
                                                value={selected}
                                                onValueChange={handleChange}
                                                classNames={{
                                                    wrapper: 'flex flex-wrap [&>label]:min-w-44',
                                                    base: 'grow'
                                                }}
                                            >
                                                {l.data.map(c => <Radio
                                                    classNames={{icon: 'text-white', label: 'text-xs'}} key={c.id}
                                                    value={c.id}>{c.title}</Radio>)}
                                            </RadioGroup>
                                        </div>
                                    )) : children}
                                </div>
                            </Tab>
                        })}
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default TabPoint;