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
import PayCheckout from "@/features/exams/PayCheckout";
import Payment from "@/components/Payment";

const stepsList = ['تکمیل سفارش', "تاییدیه", "پرداخت"]
const Exam = () => {
    const {query, push, asPath} = useRouter()
    const [steps, setSteps] = useState(1)
    const [selected, setSelected] = useState('1')
    const [state, setState] = useState({})
    const [data = {}, , , , , loading] = useGetRequest(true, query.id && `/exam-payments/${query.id}/info`)
    const {sendPostRequest, isLoading} = usePostRequest()

    const handlePay = async () => {
        const {
            data: Data,
            status,
            success,
            successMessage,
            errorMessage
        } = await sendPostRequest("POST", `/exam-payments/pay${selected === '2' ? "/wallet" : ""}/${state.id}`, {})
        if (success) {
            if (selected === '1')
                push(Data.url)
            else {
                addToast({
                    title: 'پرداخت با موفقیت انجام شد',
                    description: successMessage,
                    color: 'success',
                })
                push(`/exams/pay/success`)
            }
        } else
            addToast({
                title: 'خطا',
                description: errorMessage,
                color: 'danger',
                endContent: status === 400 ? <Link href={`/profile/wallet?backUrl=${asPath}`}
                                                   className="border border-rose-600 text-sm whitespace-nowrap p-1 rounded">افزایش
                    موجودی</Link> : undefined
            })
    }

    const handleSubmit = async () => {
        const {
            data,
            status,
            success,
            errorMessage
        }
            = await sendPostRequest("POST", `/exam-payments`, {...state, exam_payment_id: query.id})
        if (success) {
            setSteps(2)
            setState(prev => ({...prev, id: data.response.data.id}))
        } else
            addToast({
                title: 'مشکلی به وجود آمد',
                description: status === 401 ? "لطفا ابتدا وارد حساب خود شوید" : errorMessage,
                color: 'danger',
                endContent: status === 401 &&
                    <Link href={`/auth/login?backUrl=${asPath}`}
                          className="border border-rose-600 text-sm whitespace-nowrap p-1 rounded">ورود</Link>
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
                                <BreadcrumbItem>{data?.name}</BreadcrumbItem>
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
                                                alt={data.name}
                                            />
                                        </div>
                                        <h1 className='sm:text-xl text-base'>{data.title}</h1>
                                    </div>
                                    <div className="gap-2 w-full lg: flex flex-col">
                                        <div className="bg-natural_gray-50 px-3 py-2  flex items-center justify-between">
                                            <p className="text-natural_gray-950 text-xs">قیمت لار</p>
                                            <p className="text-primary-700 text-sm text-left hasToman">{data.DollarPrice?.toLocaleString()}</p>
                                        </div>
                                        <div className="bg-natural_gray-50 px-3 py-2  flex items-center justify-between">
                                            <p className="text-natural_gray-950 text-xs">مالیات</p>
                                            <p className="text-secondary-600 text-sm text-left hasToman">{data.tax?.toLocaleString()}</p>
                                        </div>
                                        <div className="bg-natural_gray-50 px-3 py-2  flex items-center justify-between">
                                            <p className="text-natural_gray-950 text-xs">کارمزد</p>
                                            <p className="text-secondary-600 text-sm text-left hasToman">{data.wage?.toLocaleString()}</p>
                                        </div>
                                        <div className="bg-natural_gray-50 px-3 py-2  flex items-center justify-between">
                                            <p className="text-natural_gray-950 text-xs font-semibold">مبلغ نهایی</p>
                                            <p className="text-success-700 text-sm text-left hasToman">{data.total?.toLocaleString()}</p>
                                        </div>
                                    </div>
                                    {steps === 2 ?
                                        <Payment price={data.total} isLoading={isLoading} handlePay={handlePay}
                                                 selected={selected} setSelected={setSelected}/>
                                        : <Button
                                            onPress={handleSubmit}
                                            isLoading={isLoading}
                                            color="success"
                                            style={{
                                                "--heroui-success": "220 69% 53%",
                                            }}
                                            className="text-white max-w-full w-full" radius='sm'>تایید</Button>}
                                </div>
                                {steps === 2 ?
                                    state.id && <PayCheckout id={state.id} setSteps={setSteps}/>
                                    : <div
                                        className="col-span-3 h-fit py-6 sm:px-4 px-3 border rounded-lg border-natural_gray-100 bg-white grid sm:grid-cols-2 grid-cols-1 gap-6">
                                        <Input label="نام کاربری" placeholder="نام کاربری"
                                               value={state.username}
                                               onValueChange={e => setState(p => ({...p, username: e}))}
                                               radius='sm' labelPlacement='outside' variant='bordered'
                                               classNames={{base: 'max-w-1/2', label: 'text-sm'}}/>
                                        <Input label="رمز عبور" placeholder="رمز عبور"
                                               value={state.password}
                                               onValueChange={e => setState(p => ({...p, password: e}))}
                                               radius='sm' labelPlacement='outside' variant='bordered'
                                               classNames={{base: 'max-w-1/2', label: 'text-sm'}}/>
                                        <Input label="محل آزمون" placeholder="محل آزمون"
                                               value={state.exam_location}
                                               onValueChange={e => setState(p => ({...p, exam_location: e}))}
                                               radius='sm' labelPlacement='outside' variant='bordered'
                                               classNames={{
                                                   base: 'max-w-1/2 sm:col-span-2 col-span-1',
                                                   label: 'text-sm'
                                               }}/>
                                        <div className="flex w-full flex-col justify-between gap-2 relative">
                                            <label className='text-xs font-semibold text-natural_gray-950'>تاریخ
                                                آزمون</label>
                                            <DatePicker
                                                value={state.exam_date}
                                                onChange={e => setState(prev => ({...prev, exam_date: e.toDate()}))}
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
                                                value={state.exam_time}
                                                onChange={(e, i) => setState(prev => ({
                                                    ...prev,
                                                    exam_time: e.toDate()
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