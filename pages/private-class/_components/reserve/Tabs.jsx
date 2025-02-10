import { Checkbox, CheckboxGroup, Input, Radio, RadioGroup, Tab, Tabs } from '@nextui-org/react';
import Image from 'next/image';
import React, { useState } from 'react';
import db from 'db/reserve.json'

const TabsComponent = ({ title, tabs = [], children }) => {
    const [selected, setSelected] = useState("");
    const [value, setValue] = useState()
    const [accent, setAccent] = useState()
    return (
        <>
            <div className="flex flex-col gap-4 lg:border-none border-b pb-4">
                {title && <label className='sm:text-lg text-sm text-primary-950'>{title}</label>}
                <div className='flex flex-col gap-6'>
                    <Tabs
                        classNames={{ tab: "[&>span]:hidden w-fit min-w-32 justify-start", panel: 'py-0 [&>div]:shadow-none [&>div>div]:!p-0', tabList: 'flex-wrap' }}
                        aria-label="Tabs variants"
                        variant="underlined"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                    >
                        {tabs.map(t => {
                            return <Tab
                                key={t.id}
                                title={
                                    <RadioGroup
                                        value={selected}
                                        onValueChange={setSelected}
                                        color="default"
                                        style={{ "--nextui-default-500": "196 94% 25%" }}
                                        aria-label={t.title}
                                    >
                                        <Radio value={t.id} name={t.title} classNames={{ label: 'flex items-center gap-2' }}>
                                            {t.flag && <div className="centerOfParent w-5 h-5"><Image src={t.flag} width={0} height={0} sizes="100vw" className="w-full h-full object-contain" /></div>}
                                            <span className="sm:text-base text-xs">{t.title}</span>
                                        </Radio>
                                    </RadioGroup>
                                }
                            >
                                {t.content &&
                                    <div className='rounded-lg flex flex-col p-3 gap-8 bg-primary-50'>
                                        {Array.isArray(t.content) ? t.content.map(l => (
                                            <div className={`flex lg:flex-row flex-col lg:gap-8 gap-4 ${Array.isArray(l.data) ? '' : 'items-center'}`} key={l.id}>
                                                <label className='text-sm text-natural_gray-950 min-w-32'>{l.title}</label>
                                                {Array.isArray(l.data) ? <CheckboxGroup
                                                    aria-label=" "
                                                    orientation="horizontal"
                                                    style={{
                                                        "--nextui-success": "196 94% 25%",
                                                    }}
                                                    color='success'
                                                    value={[value]}
                                                    onValueChange={(e) => {
                                                        if (e.length === 0) {
                                                            setValue(''); // Handle unselecting all checkboxes
                                                        } else {
                                                            setValue(e[e.length - 1]); // Use the last selected value
                                                        }
                                                    }}
                                                    classNames={{ wrapper: 'flex flex-wrap [&>label]:min-w-44', base: 'grow' }}
                                                >
                                                    {l.data.map(c => <Checkbox classNames={{ icon: 'text-white', label: 'text-xs' }} key={c.id} value={c.id}>{c.title}</Checkbox>)}
                                                </CheckboxGroup> : children}
                                            </div>
                                        )) : children}
                                    </div>
                                }
                            </Tab>
                        })}
                    </Tabs>
                </div>
            </div>
            {value == 'accent' && <div className="flex flex-col gap-4">
                <label className='text-lg'>لهجه</label>
                <div className='flex flex-col gap-6'>
                    <CheckboxGroup
                        aria-label=" "
                        orientation="horizontal"
                        style={{
                            "--nextui-success": "196 94% 25%",
                        }}
                        color='success'
                        value={[accent]}
                        onValueChange={(e) => {
                            if (e.length === 0) {
                                setAccent(''); // Handle unselecting all checkboxes
                            } else {
                                setAccent(e[e.length - 1]); // Use the last selected value
                            }
                        }}
                        classNames={{ wrapper: 'grid grid-cols-4', base: 'grow' }}
                    >
                        {db.accent.map(c => <Checkbox classNames={{ icon: 'text-white', label: 'text-xs' }} key={c.id} value={c.id}>{c.title}</Checkbox>)}
                    </CheckboxGroup>
                </div>
            </div>}
            {(value == 'offline' || value == 'offline2') && <div className="flex flex-col gap-6">
                <Input label="آدرس دقیق خود را وارد کنید" placeholder='منطقه/خیابان اصلی/فرعی/کوی/پلاک/طبقه/واحد' type="number" radius='sm' labelPlacement='outside' variant='bordered' className='' />
                <div className="flex flex-col gap-3">
                    <label className='text-sm'>انتخاب موقعیت از روی نقشه</label>
                    <div className="centerOfParent">
                        <Image src={'/images/map.png'} width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                    </div>
                    <div className="flex items-center gap-6">
                        <Input label="تلفن ثابت محل کار/ منزل" type="text" radius='sm' labelPlacement='outside' variant='bordered' className='' />
                        <Input label="تلفن همراه" type="text" radius='sm' labelPlacement='outside' variant='bordered' className='' />
                    </div>
                </div>
            </div>}
        </>
    );
};

export default TabsComponent;