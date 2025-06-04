import React, {useState} from 'react';
import {
    addToast,
    BreadcrumbItem,
    Breadcrumbs,
    Button,
    Input,
    Radio,
    RadioGroup,
    Spinner,
    Textarea
} from "@heroui/react";
import Progress from "@/components/Progress";
import {useRouter} from "next/router";
import useGetRequest from "@/hooks/useGetRequest";
import usePostRequest from "@/hooks/usePostRequest";
import Image from "next/image";
import DatePicker, {DateObject} from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Calendar from "@icons/calendar.svg";
import Watch from "@icons/watch.svg";
import Link from "next/link";
import TrashIcon from "@icons/bin.svg";
import EditIcon from "@icons/edit-icon.svg";

const stepsList = ['تکمیل سفارش', "تاییدیه", "پرداخت"]
const Exam = ({title}) => {
    const {query, push} = useRouter()
    const [steps, setSteps] = useState(1)
    const [selected, setSelected] = useState('1')
    const [state, setState] = useState({})
    const [data = {}, setData, setReload, paginations, setPaginations, loading] = useGetRequest(false, query.id && `/exam/pay/${query.id}`)
    const {sendPostRequest, isLoading} = usePostRequest()

    const handlePay = async () => {
        const id = data?.id
        const {
            data: Data,
            success,
            errorMessage
        } = await sendPostRequest("POST", `/exam/pay/${id}`, {}, false, true)
        if (success) {
            push(Data.url)
        } else
            addToast({
                title: 'مشکلی به وجود آمد',
                description: errorMessage,
                color: 'danger',
            })
    }
    return (
        <>
            <main className='my-6' dir='rtl'>
                {!loading ? <div className="container">
                        {data ? <div className="flex flex-col gap-16">
                            <Breadcrumbs
                                separator='/'
                                classNames={{
                                    base: 'w-full lg:flex hidden',
                                    list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600 text-xs'
                                }}
                                itemClasses={{
                                    separator: "px-2 text-natural_gray-600"
                                }}>
                                <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                                <BreadcrumbItem>آزمون ها</BreadcrumbItem>
                                <BreadcrumbItem href="/exams/pay">آزمون پرداخت</BreadcrumbItem>
                                <BreadcrumbItem>{title}</BreadcrumbItem>
                            </Breadcrumbs>
                            <Progress withBreadcrumb={false} steps={stepsList} active={steps}/>
                            <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-y-6 my-10">
                                <div
                                    className="col-span-1 h-fit lg:order-1 sm:p-4 py-4 px-3 rounded-lg border border-natural_gray-100 bg-white flex flex-col gap-6 items-center">
                                    <div className="flex flex-col gap-6">
                                        <div className="overflow-hidden rounded-2xl w-full max-h-64">
                                            <Image
                                                width="24"
                                                height="24"
                                                sizes="100vw"
                                                className="w-full h-full object-cover"
                                                src={data.image || '/images/image 144.png'}
                                                alt={'data.name'}
                                            />
                                        </div>
                                        <h1 className='sm:text-xl text-base'>{data.title}</h1>
                                    </div>
                                    <div className="gap-2 w-full lg: flex flex-col">
                                        <div className="bg-natural_gray-50 px-3 py-2  flex items-center justify-between">
                                            <p className="text-natural_gray-950 text-xs">قیمت لار</p>
                                            <p className="text-primary-700 text-sm text-left hasToman">{data.professor}</p>
                                        </div>
                                        <div className="bg-natural_gray-50 px-3 py-2  flex items-center justify-between">
                                            <p className="text-natural_gray-950 text-xs">مالیات</p>
                                            <p className="text-secondary-600 text-sm text-left hasToman">{data.professor}</p>
                                        </div>
                                        <div className="bg-natural_gray-50 px-3 py-2  flex items-center justify-between">
                                            <p className="text-natural_gray-950 text-xs">کارمزد</p>
                                            <p className="text-secondary-600 text-sm text-left hasToman">{data.professor}</p>
                                        </div>
                                        <div className="bg-natural_gray-50 px-3 py-2  flex items-center justify-between">
                                            <p className="text-natural_gray-950 text-xs font-semibold">مبلغ نهایی</p>
                                            <p className="text-success-700 text-sm text-left hasToman">{data.professor}</p>
                                        </div>
                                    </div>
                                    {steps === 2 ? <>
                                        <div
                                            className="z-[100] gap-6 w-full border-t border-natural_gray-200 lg:hidden flex items-center justify-between fixed bottom-0 p-6 bg-white">
                                            <Button
                                                isLoading={isLoading}
                                                type='button'
                                                onPress={handlePay}
                                                color="success" style={{
                                                "--heroui-success": "140 82% 33%",
                                            }} className="text-white" radius='sm'>پرداخت آنلاین</Button>
                                            <div className="flex  justify-end gap-2">
                                                {data.price !== data.price_discount &&
                                                    <div
                                                        className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-xs">
                                                        {data.discount}٪
                                                    </div>}
                                                <div className="flex flex-col">
                                                    {data.price !== data.price_discount && <del
                                                        className="text-sm text-natural_gray-500 hasToman">{data.price?.toLocaleString()}</del>}
                                                    <p className="text-sm hasToman text-green-600 hasToman">{data.price_discount?.toLocaleString()}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <RadioGroup
                                            className='w-full'
                                            color='success'
                                            style={{
                                                "--heroui-success": "196 94% 25%",
                                            }}
                                            value={selected}
                                            onValueChange={setSelected}>
                                            <Radio value="1" classNames={{label: 'text-xs'}}>پرداخت آنلاین</Radio>
                                            <Radio isDisabled value="2" classNames={{label: 'text-xs'}}>پرداخت با
                                                کیف‌پول</Radio>
                                        </RadioGroup>
                                        <Button
                                            isLoading={isLoading}
                                            type='button'
                                            onPress={handlePay}
                                            color="success" style={{
                                            "--heroui-success": "140 82% 33%",
                                        }} className="w-full text-white" radius='sm'>پرداخت آنلاین</Button>
                                    </> : <Button
                                        type='button'
                                        onPress={() => setSteps(2)}
                                        color="success"
                                        style={{
                                            "--heroui-success": "220 69% 53%",
                                        }}
                                        className="text-white max-w-full w-full" radius='sm'>تایید</Button>}
                                </div>
                                {steps === 2 ?
                                    <div
                                        className="col-span-3 rounded-lg border border-natural_gray-100 bg-white py-10 px-3 flex flex-col gap-5">
                                        <div className="grid sm:grid-cols-3 items-center">
                                            <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
                                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                                    نام و نام خانوادگی
                                                </p>
                                                <p className="text-natural_gray-950 sm:text-base text-xs">
                                                    {data.name}
                                                </p>
                                            </div>
                                            <div className="flex sm:order-1 -order-1 items-center justify-end gap-3">
                                                <Link href='/exams/pay'
                                                      className="flex gap-2 items-center py-1 px-3 text-sm rounded-md border-2 border-red-600 text-red-600">
                                                    <TrashIcon className="w-5 h-5 fill-red-600"/>
                                                    <p className="md:block hidden">حذف</p>
                                                </Link>
                                                <button type='button' onClick={() => setSteps(1)}
                                                        className="flex gap-2 items-center py-1 px-3 text-sm rounded-md border-2 border-primary-600 text-primary-600">
                                                    <EditIcon className="w-5 h-5"/>
                                                    <p className="md:block hidden">ویرایش</p>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 items-center">
                                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                                شماره تلفن </p>
                                            <p
                                                className="text-natural_gray-950 text-start sm:text-base text-xs">
                                                {data.mobile}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-3 items-center">
                                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                                ایمیل
                                            </p>
                                            <p
                                                className="text-natural_gray-950 text-start sm:text-base text-xs">
                                                {data.email}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-3 items-center">
                                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                                محل آزمون
                                            </p>
                                            <p
                                                className="text-natural_gray-950 text-start sm:text-base text-xs">
                                                {state.place}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-3 items-center">
                                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                                تاریخ آزمون
                                            </p>
                                            <p className="text-natural_gray-950 text-start sm:text-base text-xs">
                                                {new Date(state.date).toLocaleDateString('fa-IR', {
                                                    month: 'long',
                                                    day: '2-digit',
                                                    weekday:'long'
                                                })}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-3 items-center">
                                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                                ساعت آزمون
                                            </p>
                                            <p className="text-natural_gray-950 text-start sm:text-base text-xs">
                                                {new Date(state.time).toLocaleTimeString('en-US', {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    hour12:false
                                                })}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-3 items-center">
                                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                                توضیحات
                                            </p>
                                            <p className="text-natural_gray-950 text-start sm:text-base text-xs">
                                                {state.description}
                                            </p>
                                        </div>
                                    </div>
                                    : <div
                                        className="col-span-3 h-fit py-6 sm:px-4 px-3 border rounded-lg border-natural_gray-100 bg-white grid sm:grid-cols-2 grid-cols-1 gap-6">
                                        <Input label="نام کاربری" placeholder="نام کاربری"
                                               value={state.user_name}
                                               onValueChange={e => setState(p => ({...p, user_name: e}))}
                                               radius='sm' labelPlacement='outside' variant='bordered'
                                               classNames={{base: 'max-w-1/2', label: 'text-sm'}}/>
                                        <Input label="رمز عبور" placeholder="رمز عبور"
                                               value={state.password}
                                               onValueChange={e => setState(p => ({...p, password: e}))}
                                               radius='sm' labelPlacement='outside' variant='bordered'
                                               classNames={{base: 'max-w-1/2', label: 'text-sm'}}/>
                                        <Input label="محل آژمون" placeholder="محل آزمون"
                                               value={state.place}
                                               onValueChange={e => setState(p => ({...p, place: e}))}
                                               radius='sm' labelPlacement='outside' variant='bordered'
                                               classNames={{
                                                   base: 'max-w-1/2 sm:col-span-2 col-span-1',
                                                   label: 'text-sm'
                                               }}/>
                                        <div className="flex w-full flex-col justify-between gap-2 relative">
                                            <label className='text-xs font-semibold text-natural_gray-950'>تاریخ
                                                تولد</label>
                                            <DatePicker
                                                value={state.date}
                                                onChange={e => setState(prev => ({...prev, date: e.toDate()}))}
                                                inputClass={' w-full h-full py-1.5 px-2 text-primary-950 outline-none border-2 border-default-200 rounded-md appearance-none text-sm'}
                                                containerClassName={'w-full !height-full max-w-1/2'}
                                                editable={false}
                                                placeholder='تاریخ'
                                                monthYearSeparator="|"
                                                format="YYYY/MM/DD"
                                                calendar={persian}
                                                locale={persian_fa}
                                                calendarPosition="auto"/>
                                            <Calendar className='fill-natural_gray-600 absolute left-3 bottom-1.5'/>
                                        </div>
                                        <div className="flex w-full flex-col gap-2 relative justify-between">
                                            <label
                                                className='text-xs font-normal text-natural_gray-950'>ساعت</label>
                                            <DatePicker
                                                name='time'
                                                value={state.time}
                                                onChange={(e, i) => setState(prev => ({
                                                    ...prev,
                                                    time: e.toDate()
                                                }))}
                                                disableDayPicker
                                                format="HH:mm"
                                                inputClass={' w-full h-full py-1.5 px-2 text-primary-950 outline-none border-2 border-default-200 rounded-md appearance-none text-sm'}
                                                containerClassName={'w-full !height-full max-w-1/2'}
                                                plugins={[
                                                    <TimePicker key={1} hideSeconds/>
                                                ]}
                                                placeholder='ساعت'
                                                calendar={persian}
                                                locale={persian_fa}
                                                calendarPosition="bottom-right"
                                            />
                                            <Watch className='fill-natural_gray-600 absolute left-4 bottom-1.5'/>
                                        </div>
                                        <Textarea
                                            value={state.description}
                                            onValueChange={e => setState(p => ({...p, description: e}))}
                                            radius='sm'
                                            classNames={{
                                                base: "sm:col-span-2 col-span-1",
                                                label: "text-sm"
                                            }}
                                            labelPlacement='outside'
                                            label="توضیحات"
                                            placeholder="توضیحات"
                                            variant='bordered'/>
                                    </div>}
                            </div>
                        </div> : "آزمون مورد نظر پیدا نشد"}
                    </div>
                    : <div className='centerOfParent mx-auto'><Spinner size='lg' color='success'/></div>
                }
            </main>
        </>
    );
};

export default Exam;