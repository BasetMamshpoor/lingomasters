import React, {useContext, useEffect, useState} from 'react';

import Calendar from "@icons/calendar.svg";
import {
    Accordion,
    AccordionItem,
    Autocomplete,
    AutocompleteItem,
    Input,
    Select,
    SelectItem,
    Alert,
    addToast
} from "@heroui/react";
import DatePicker, {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import dynamic from "next/dynamic";
import Hero from "@/features/profile/Hero";
import useGetRequest from "@/hooks/useGetRequest";
import usePostRequest from "@/hooks/usePostRequest";
import MyLanguages from "@/features/profile/MyLanguages";

const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
});
const platforms = ["voov", "teams", "zoom", "googleMeet", "Class in", "Big Blue Button", "Adobe Connect", "whatsapp"];

const UserInformation = () => {
    const [data, setData] = useState({})
    const [country, setCountry] = useState()
    const inputClass = {
        inputWrapper: 'bg-white group-data-[focus=true]:bg-white',
        label: 'text-xs text-natural_gray-950 font-semibold',
    }
    const [initData] = useGetRequest(true, '/student-panel')
    const [location, setLocation, Q, W, E, loading] = useGetRequest(false, `/countries?country=${country || data.country_id}`)
    const {sendPostRequest, isLoading} = usePostRequest()

    useEffect(() => {
        if (initData) {
            setData(initData)
        }
    }, [initData]);

    const setDateState = (e, b) => setData(prev => {
        return {...prev, [b.input.name]: e.toDate()}
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {errorMessage, success, successMessage} = await sendPostRequest('POST', '/student-panel/store', data)
        if (success) {
            addToast({
                title: successMessage,
                color: 'success'
            })
        } else {
            addToast({
                title: errorMessage,
                color: 'danger'
            })
        }
    }
    return (
        <>
            <div className="flex flex-col sm:gap-10 gap-6">
                <MyLanguages/>
                <Hero level={data.level} imageSrc={data.profile}/>
                <form className='flex flex-col gap-10' onSubmit={handleSubmit}>
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
                                       name='first_name'
                                       value={data.first_name}
                                       onChange={handleChange}
                                       classNames={inputClass}/>
                                <Input isRequired errorMessage=' ' label='نام خانوادگی' labelPlacement='outside'
                                       name='last_name'
                                       radius='sm' value={data.last_name}
                                       onChange={handleChange}
                                       classNames={inputClass}/>
                                <Select
                                    isRequired
                                    errorMessage=' '
                                    labelPlacement="outside"
                                    name='gender_id'
                                    label="جنسیت"
                                    selectedKeys={[data.gender_id]}
                                    onChange={handleChange}
                                    radius="sm"
                                    classNames={{
                                        listbox: '[&>ul>li>span>svg]:w-3 [&>ul>li>span>svg]:h-3',
                                        trigger: 'bg-white',
                                        label: 'text-xs text-natural_gray-950 font-semibold',
                                    }}
                                >
                                    <SelectItem
                                        key='1'
                                        className="flex-row-reverse"
                                        textValue='آقا'>
                                        <p className="flex items-center justify-end w-full">آقا</p>
                                    </SelectItem>
                                    <SelectItem
                                        key='2'
                                        className="flex-row-reverse"
                                        textValue='خانم'>
                                        <p className="flex items-center justify-end w-full">خانم</p>
                                    </SelectItem>
                                </Select>
                                <Input isRequired errorMessage=' ' label='کدملی  زبان آموز' labelPlacement='outside'
                                       radius='sm' value={data.national_code}
                                       name='national_code'
                                       onChange={handleChange}
                                       classNames={inputClass}/>
                                {!data.is_above_18 &&
                                    <Input isRequired errorMessage=' ' label='کدملی والدین' labelPlacement='outside'
                                           radius='sm' value={data.parents_national_code}
                                           name='parents_national_code'
                                           onChange={handleChange}
                                           classNames={inputClass}/>}
                                <Input isRequired errorMessage=' ' label='محل تولد' labelPlacement='outside' radius='sm'
                                       value={data.place_of_birth}
                                       name='place_of_birth'
                                       onChange={handleChange}
                                       classNames={inputClass}/>
                                <div className="flex w-full flex-col justify-between gap-2 relative">
                                    <label className='text-xs font-semibold text-natural_gray-950'>تاریخ تولد</label>
                                    <DatePicker
                                        name='date_of_birth'
                                        value={data.date_of_birth ? new Date(data.date_of_birth) : undefined}
                                        onChange={setDateState}
                                        inputClass={' w-full h-full py-1.5 px-2 outline-none  rounded-md appearance-none text-sm'}
                                        containerClassName={'w-full !height-full grow'}
                                        editable={false}
                                        monthYearSeparator="|"
                                        format="YYYY/MM/DD"
                                        maxDate={new DateObject({calendar: persian}).subtract(0, "days")}
                                        placeholder={new Date(data.date_of_birth).toLocaleDateString('fa-IR')}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="auto"/>
                                    <Calendar className='fill-natural_gray-600 absolute left-3 bottom-1.5'/>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2"
                                       title="تلفن و ایمیل">
                            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-x-6 gap-y-4">
                                <Input label='تلفن ثابت' labelPlacement='outside'
                                       name='Landline'
                                       radius='sm' value={data.Landline}
                                       onChange={handleChange}
                                       classNames={{...inputClass, base: 'sm:col-span-2'}}/>
                                <Input label='تلفن همراه زبان‌آموز' labelPlacement='outside'
                                       name='mobile'
                                       onChange={handleChange}
                                       radius='sm' value={data.mobile} classNames={inputClass}/>
                                <Input label='ایمیل زبان‌آموز' labelPlacement='outside' radius='sm' type='email'
                                       name='email'
                                       onChange={handleChange}
                                       value={data.email} classNames={inputClass}/>
                                {!data.is_above_18 && <>
                                    <Input isRequired errorMessage=' ' label='تلفن همراه والدین'
                                           name='parents_mobile'
                                           labelPlacement='outside'
                                           onChange={handleChange}
                                           radius='sm'
                                           value={data.parents_mobile} classNames={inputClass}/>
                                    <Input label='ایمیل والدین' labelPlacement='outside' radius='sm' type='email'
                                           name='parents_email'
                                           onChange={handleChange}
                                           value={data.parents_email} classNames={inputClass}/>
                                </>}
                                {data.is_above_18 && <Input
                                    isRequired errorMessage=' ' label='تلفن محل کار'
                                    name='work_Landline'
                                    onChange={handleChange}
                                    labelPlacement='outside'
                                    radius='sm'
                                    value={data.work_Landline} classNames={inputClass}/>}
                            </div>
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Accordion 4"
                                       title="آدرس ها">
                            <div className="flex flex-col gap-6">
                                <Alert color='warning' title='در صورتی که تمایل به شرکت در کلاس‌های
                                        حضوری در منزل خود و یا تمایل به دریافت گواهینامه چاپی دارید فیلدهای زیر را پر
                                        کنید.'/>
                                <div className="flex flex-col gap-1">
                                    <label className='text-sm'>انتخاب موقعیت از روی نقشه</label>
                                    <div className="centerOfParent">
                                        <Map setLocation={setData}
                                             location={[data.latitude || 0, data.longitude || 0]}/>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {location && <>
                                        <Select
                                            isRequired
                                            labelPlacement="outside"
                                            className="w-full"
                                            label="کشور محل سکونت"
                                            name='country_id'
                                            selectedKeys={data.country_id?.toString()}
                                            onChange={(e) => {
                                                setLocation(prev => ({...prev, city: []}))
                                                handleChange(e)
                                                setCountry(e.target.value)
                                            }}
                                            variant="bordered"
                                            radius="sm"
                                            items={location.countries}
                                            classNames={{
                                                label: 'text-xs font-semibold',
                                                input: 'text-xs',
                                                listbox: '[&>ul>li>span>svg]:w-3 [&>ul>li>span>svg]:h-3',
                                                trigger: 'bg-white',
                                            }}
                                        >
                                            {(c) => (
                                                <SelectItem key={c.value} className="flex-row-reverse"
                                                            textValue={c.name}>
                                                    <p className="flex items-center justify-end w-full">{c.name}</p>
                                                </SelectItem>
                                            )}
                                        </Select>
                                        <Autocomplete
                                            isRequired
                                            labelPlacement="outside"
                                            className="w-full"
                                            label="شهر محل سکونت"
                                            name='city_id'
                                            defaultItems={location.city}
                                            selectedKey={data.city_id?.toString()}
                                            isLoading={loading}
                                            variant="bordered"
                                            onSelectionChange={e => setData(prev => ({...prev, city_id: e}))}
                                            radius="sm"
                                            inputProps={{
                                                classNames: {
                                                    inputWrapper: 'bg-white'
                                                },
                                            }}
                                        >
                                            {(item => (
                                                <AutocompleteItem key={item.value} className="flex-row-reverse"
                                                                  textValue={item.name}>
                                                    <p className="flex items-center justify-end w-full">{item.name}</p>
                                                </AutocompleteItem>
                                            ))}
                                        </Autocomplete>
                                    </>}
                                    <Input
                                        className="w-full"
                                        label="منطقه محل سکونت"
                                        radius="sm"
                                        type="text"
                                        isRequired
                                        name='district'
                                        onChange={handleChange}
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
                                    onChange={handleChange}
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
                                        onChange={handleChange}
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
                                        onChange={handleChange}
                                        classNames={inputClass}
                                    />
                                    <Input
                                        className="w-full"
                                        radius="sm"
                                        label="کد پستی"
                                        type="number"
                                        name='postal_code'
                                        onChange={handleChange}
                                        placeholder='57'
                                        isRequired
                                        labelPlacement="outside"
                                        variant="bordered"
                                        classNames={inputClass}
                                    />
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3"
                                       title="لینک برنامه ها">
                            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-x-6 gap-y-4">
                                {platforms.map((platform) => (
                                    <Input
                                        key={platform}
                                        label={`نام کاربردی در ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
                                        labelPlacement='outside'
                                        name={`${platform}_user_name`}
                                        defaultValue={data[platform] || ""}
                                        onChange={handleChange}
                                        radius="sm"
                                        classNames={inputClass}
                                    />
                                ))}
                            </div>
                        </AccordionItem>
                    </Accordion>
                    <div className="flex justify-end sm:ml-6">
                        <button disabled={isLoading}
                                className='rounded disabled:bg-natural_gray-400 bg-primary-700 text-white px-4 py-2 h-12 sm:w-1/5 w-full'>{isLoading ? 'لطفا صبر کنید...' : 'ذخیره تغییرات'}</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserInformation;