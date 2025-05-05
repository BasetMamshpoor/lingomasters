import React from 'react';
import {Input, Radio, RadioGroup, Tab, Tabs} from "@heroui/react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
});

const TabTeachingType = ({data, selected, setSelected, address, platforms}) => {

    const validTypes = [
        {value: "inPersonAtSchool", label: "حضوری در آموزشگاه"},
        {value: "inPersonAtStudentPlace", label: "حضوری در مکان زبان‌آموز"},
        {value: "inPersonAtTeacherHome", label: "حضوری در منزل استاد"},
    ];

    const handleChange = (e, key) => {
        setSelected(prv => ({...prv, [key]: e.toString()}))
    }
    const handleTabChange = (e, key) => {
        setSelected(prv => ({...prv, address_id: null, platform: null, [key]: e.toString()}))
    }

    const handlePlaceChange = (e, key) => {
        setSelected(prv => ({
            ...prv, address: null, phone: null, mobile: null, [key]: e.toString()
        }))
    }
    return (
        <>
            <div className="flex flex-col gap-4 lg:border-none border-b pb-4">
                <label className='sm:text-lg text-sm text-primary-950'>نوع کلاس</label>
                <div className='flex flex-col gap-6'>
                    <Tabs
                        classNames={{
                            tab: "[&>span]:hidden w-fit min-w-32 justify-start",
                            panel: 'py-0 [&>div]:shadow-none [&>div>div]:!p-0',
                            tabList: 'flex-wrap'
                        }}
                        aria-label="Tabs variants"
                        variant="underlined"
                        selectedKey={selected.teaching_types}
                        onSelectionChange={e => handleTabChange(e, 'teaching_types')}
                    >
                        {data.map(t => {
                            return <Tab
                                key={t.id}
                                title={
                                    <RadioGroup
                                        value={selected.teaching_types}
                                        onValueChange={e => handleTabChange(e, 'teaching_types')}
                                        color="default"
                                        style={{"--heroui-default-500": "196 94% 25%"}}
                                        aria-label={t.title}
                                    >
                                        <Radio value={t.id} name={t.title}
                                               classNames={{label: 'flex items-center gap-2'}}>
                                            <span className="sm:text-base text-xs">{t.title}</span>
                                        </Radio>
                                    </RadioGroup>
                                }
                            >
                                <div className='rounded-lg flex flex-col p-3 gap-8 bg-primary-50'>
                                    {selected.teaching_types === '1' ? <div
                                            className={`flex lg:flex-row flex-col lg:gap-8 gap-4 items-center`}>
                                            <label className='text-sm text-natural_gray-950 min-w-32'>کلاس حضوری</label>
                                            <RadioGroup
                                                isRequired
                                                errorMessage=" "
                                                aria-label=" "
                                                orientation="horizontal"
                                                style={{
                                                    "--heroui-success": "196 94% 25%",
                                                }}
                                                color='success'
                                                value={selected.address_id}
                                                onValueChange={e => handlePlaceChange(e, 'address_id')}
                                                classNames={{
                                                    wrapper: 'flex flex-wrap [&>label]:min-w-44',
                                                    base: 'grow'
                                                }}
                                            >
                                                {address
                                                    .filter(e => validTypes.some(type => type.value === e.type))
                                                    .map(e => {
                                                        const typeInfo = validTypes.find(type => type.value === e.type);
                                                        return (
                                                            <Radio
                                                                classNames={{icon: 'text-white', label: 'text-xs'}}
                                                                key={typeInfo?.value + '-' + e.id}
                                                                value={typeInfo?.value + '-' + e.id}
                                                            >
                                                                {typeInfo?.label}
                                                            </Radio>
                                                        );
                                                    })}
                                            </RadioGroup>
                                        </div>
                                        : <div className={`flex lg:flex-row flex-col lg:gap-8 gap-4 items-center`}>
                                            <label className='text-sm text-natural_gray-950 min-w-32'>کلاس
                                                آنلاین</label>
                                            <RadioGroup
                                                isRequired
                                                errorMessage=" "
                                                aria-label=" "
                                                orientation="horizontal"
                                                style={{
                                                    "--heroui-success": "196 94% 25%",
                                                }}
                                                color='success'
                                                value={selected?.platform}
                                                onValueChange={e => handleChange(e, 'platform')}
                                                classNames={{
                                                    wrapper: 'flex flex-wrap [&>label]:min-w-44',
                                                    base: 'grow'
                                                }}
                                            >
                                                {platforms.map(c => <Radio
                                                    classNames={{icon: 'text-white', label: 'text-xs'}} key={c}
                                                    value={c}>{c}</Radio>)}
                                            </RadioGroup>
                                        </div>
                                    }
                                </div>
                            </Tab>
                        })}
                    </Tabs>
                </div>
            </div>
            {(selected.teaching_types === "1" && selected.address_id?.split('-')[0] === "inPersonAtStudentPlace") &&
                <div className="flex flex-col gap-6">
                    <Input isRequired errorMessage=" " label="آدرس دقیق خود را وارد کنید"
                           placeholder='منطقه/خیابان اصلی/فرعی/کوی/پلاک/طبقه/واحد'
                           radius='sm' labelPlacement='outside' variant='bordered' value={selected.address}
                           onValueChange={e => handleChange(e, 'address')}/>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <label className='text-sm'>انتخاب موقعیت از روی نقشه</label>
                            <div className="centerOfParent">
                                <Map setLocation={setSelected} location={[selected.latitude, selected.longitude]}/>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <Input isRequired errorMessage=" " label="تلفن ثابت محل کار/ منزل" type="text" radius='sm'
                                   labelPlacement='outside'
                                   variant='bordered' value={selected.phone}
                                   onValueChange={e => handleChange(e, 'phone')}/>
                            <Input isRequired errorMessage=" " label="تلفن همراه" type="text" radius='sm'
                                   labelPlacement='outside'
                                   variant='bordered'
                                   value={selected.mobile}
                                   onValueChange={e => handleChange(e, 'mobile')}/>
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default TabTeachingType;