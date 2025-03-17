import React from 'react';

import Calendar from "@icons/calendar.svg";
import Info from "@icons/info-circle.svg";
import {
    Accordion,
    AccordionItem,
    addToast,
    Autocomplete,
    AutocompleteItem,
    Input,
    Select,
    SelectItem
} from "@heroui/react";
import DatePicker, {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import dynamic from "next/dynamic";
import Hero from "@/pages/profile/_components/Hero";

const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
});

const UserInformation = ({ data = {}}) => {
    const inputClass = {
        inputWrapper: 'bg-white group-data-[focus=true]:bg-white',
        label: 'text-xs text-natural_gray-950 font-semibold',
    }
    return (
        <>
            <div className="flex flex-col sm:gap-10 gap-7">
                <Hero/>
                <form className='flex flex-col gap-10'>
                    <Accordion
                        selectionMode='multiple'
                        showDivider={false}
                        itemClasses={{
                            base: 'bg-natural_gray-50 rounded-xl p-6 my-6 flex flex-col gap-6',
                            trigger: 'p-0',
                            title: 'text-sm text-primary-950 font-semibold',
                        }}>
                        <AccordionItem key="1" aria-label="Accordion 1"
                                       title='اطلاعات شخصی'>
                            <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-x-6 gap-y-4">
                                <Input isRequired errorMessage=' ' label='نام' labelPlacement='outside' radius='sm'
                                       value={data.first_name}
                                       classNames={inputClass}/>
                                <Input isRequired errorMessage=' ' label='نام خانوادگی' labelPlacement='outside'
                                       radius='sm' value={data.last_name}
                                       classNames={inputClass}/>
                                <Input isRequired errorMessage=' ' label='نام کاربری' labelPlacement='outside'
                                       value={data.username} radius='sm'
                                       classNames={inputClass}/>
                                <Input isRequired errorMessage=' ' label='سن' labelPlacement='outside' radius='sm'
                                       value={data.age}
                                       classNames={inputClass}/>
                                <Select
                                    isRequired
                                    errorMessage=' '
                                    labelPlacement="outside"
                                    label="جنسیت"
                                    // selectedKeys={[data.gender]}
                                    // onChange={e => setData(prev => ({
                                    //     ...prev,
                                    //     gender: e.target.value
                                    // }))}
                                    radius="sm"
                                    classNames={{
                                        listbox: '[&>ul>li>span>svg]:w-3 [&>ul>li>span>svg]:h-3',
                                        trigger: 'bg-white',
                                        label: 'text-xs text-natural_gray-950 font-semibold',
                                    }}
                                >
                                    <SelectItem
                                        key='آقا'
                                        className="flex-row-reverse"
                                        textValue='آقا'>
                                        <p className="flex items-center justify-end w-full">آقا</p>
                                    </SelectItem>
                                    <SelectItem
                                        key='خانم'
                                        className="flex-row-reverse"
                                        textValue='خانم'>
                                        <p className="flex items-center justify-end w-full">خانم</p>
                                    </SelectItem>
                                </Select>
                                <Input isRequired errorMessage=' ' label='کدملی  زبان آموز' labelPlacement='outside'
                                       radius='sm' value={data.national_code}
                                       classNames={inputClass}/>
                                <Input isRequired errorMessage=' ' label='کدملی والدین' labelPlacement='outside'
                                       radius='sm' value={data.parent_national_code}
                                       classNames={inputClass}/>
                                <Input isRequired errorMessage=' ' label='محل تولد' labelPlacement='outside' radius='sm'
                                       value={data.birth_place}
                                       classNames={inputClass}/>
                                <div className="flex w-full flex-col justify-between gap-2 relative">
                                    <label className='text-xs font-semibold text-natural_gray-950'>تاریخ تولد</label>
                                    <DatePicker
                                        name='birthday'
                                        // value={data.start_date}
                                        // onChange={setDateState}
                                        inputClass={' w-full h-full py-1.5 px-2 text-primary-950 outline-none  rounded-md appearance-none text-sm'}
                                        containerClassName={'w-full !height-full grow'}
                                        editable={false}
                                        monthYearSeparator="|"
                                        format="DD/MMMM/YYYY"
                                        minDate={new DateObject({calendar: persian}).subtract(0, "days")}
                                        placeholder={new Date().toLocaleDateString('fa-IR')}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="auto"/>
                                    <Calendar className='fill-natural_gray-600 absolute left-3 bottom-1.5'/>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2"
                                       title="تلفن">
                            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-x-6 gap-y-4">
                                <Input label='تلفن ثابت' labelPlacement='outside'
                                       radius='sm' value={data.phone}
                                       classNames={{...inputClass, base: 'sm:col-span-2'}}/>
                                <Input label='تلفن همراه زبان‌آموز' labelPlacement='outside'
                                       radius='sm' value={data.mobile} classNames={inputClass}/>
                                <Input label='ایمیل زبان‌آموز' labelPlacement='outside' radius='sm' type='email'
                                       value={data.email} classNames={inputClass}/>
                                <Input isRequired errorMessage=' ' label='تلفن همراه والدین' labelPlacement='outside'
                                       radius='sm'
                                       value={data.parent_phone} classNames={inputClass}/>
                                <Input label='ایمیل والدین' labelPlacement='outside' radius='sm' type='email'
                                       value={data.parent_email} classNames={inputClass}/>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3"
                                       title="لینک برنامه ها">
                            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-x-6 gap-y-4">
                                <Input isRequired errorMessage=' ' label='نام کاربری در Voov' labelPlacement='outside'
                                       radius='sm'
                                       value={data.voov} classNames={inputClass}/>
                                <Input isRequired errorMessage=' ' label='نام کاربری در Zoom' labelPlacement='outside'
                                       radius='sm'
                                       value={data.zoom} classNames={inputClass}/>
                                <Input isRequired errorMessage=' ' label='نام کاربری در Skype' labelPlacement='outside'
                                       radius='sm'
                                       value={data.skype} classNames={inputClass}/>
                                <Input isRequired errorMessage=' ' label='نام کاربری در Google Meet'
                                       labelPlacement='outside' radius='sm'
                                       value={data.googlemeet} classNames={inputClass}/>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Accordion 4"
                                       title="آدرس ها">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <Info className='fill -secondary-600'/>
                                    <p className='text-secondary-600 text-sm'>در صورتی که تمایل به شرکت در کلاس‌های
                                        حضوری در منزل خود و یا تمایل به دریافت گواهینامه چاپی دارید فیلدهای زیر را پر
                                        کنید.</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className='text-sm'>انتخاب موقعیت از روی نقشه</label>
                                    <div className="centerOfParent">
                                        <Map setLocation={() => {
                                        }} location={[54 || data.latitude, 31 || data.longitude]}/>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Select
                                        labelPlacement="outside"
                                        className="w-full"
                                        label="کشور محل سکونت"
                                        name='country'
                                        onChange={(e) => {
                                            handleChange(e)
                                            setCountry(e.target.value)
                                            setLocation(prev => ({...prev, city: []}))
                                        }}
                                        variant="bordered"
                                        radius="sm"
                                        classNames={{
                                            label: 'text-xs font-semibold',
                                            input: 'text-xs',
                                            listbox: '[&>ul>li>span>svg]:w-3 [&>ul>li>span>svg]:h-3',
                                            trigger: 'bg-white',
                                        }}
                                    >
                                        {[].map((gender) => (
                                            <SelectItem key={gender.id} className="flex-row-reverse"
                                                        textValue={gender.title}>
                                                <p className="flex items-center justify-end w-full">{gender.title}</p>
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    <Autocomplete
                                        labelPlacement="outside"
                                        className="w-full"
                                        label="شهر محل سکونت"
                                        name='city'
                                        // defaultItems={location.city}
                                        // isLoading={loading}
                                        variant="bordered"
                                        // onChange={handleChange}
                                        radius="sm"
                                        inputProps={{
                                            classNames: {
                                                inputWrapper: 'bg-white'
                                            },
                                        }}
                                    >
                                        {[].map(item => (
                                            <AutocompleteItem key={item.id} className="flex-row-reverse"
                                                              textValue={item.name}>
                                                <p className="flex items-center justify-end w-full">{item.name}</p>
                                            </AutocompleteItem>
                                        ))}
                                    </Autocomplete>
                                    <Input
                                        className="w-full"
                                        label="منطقه محل سکونت"
                                        radius="sm"
                                        type="text"
                                        isRequired
                                        name='district'
                                        // onChange={handleChange}
                                        labelPlacement="outside"
                                        variant="bordered"
                                        classNames={inputClass}
                                    />
                                </div>
                                <Input
                                    className="w-full"
                                    label="آدرس محل سکونت"
                                    radius="sm"
                                    type="text"
                                    isRequired
                                    name='address'
                                    // onChange={handleChange}
                                    labelPlacement="outside"
                                    placeholder='تهران...'
                                    variant="bordered"
                                    classNames={inputClass}
                                />
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Input
                                        className="w-full"
                                        label="پلاک"
                                        radius="sm"
                                        type="text"
                                        isRequired
                                        name='plate'
                                        // onChange={handleChange}
                                        labelPlacement="outside"
                                        placeholder='11'
                                        variant="bordered"
                                        classNames={inputClass}
                                    />
                                    <Input
                                        radius="sm"
                                        className="w-full"
                                        label="واحد"
                                        type="text"
                                        name='unit'
                                        isRequired
                                        placeholder='1'
                                        labelPlacement="outside"
                                        variant="bordered"
                                        // onChange={handleChange}
                                        classNames={inputClass}
                                    />
                                    <Input
                                        className="w-full"
                                        radius="sm"
                                        label="کد پستی"
                                        type="number"
                                        name='postal_code'
                                        // onChange={handleChange}
                                        placeholder='57'
                                        isRequired
                                        labelPlacement="outside"
                                        variant="bordered"
                                        classNames={inputClass}
                                    />
                                </div>
                            </div>
                        </AccordionItem>
                    </Accordion>
                    <div className="flex justify-end sm:ml-6">
                        <button className='rounded bg-primary-600 text-white px-4 py-2 h-12 sm:w-1/5 w-full'>ذخیره
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserInformation;