import React, {useState} from 'react';
import {
    addToast,
    BreadcrumbItem,
    Breadcrumbs,
    Button,
    Spinner,
} from "@heroui/react";
import Progress from "@/components/Progress";
import {useRouter} from "next/router";
import useGetRequest from "@/hooks/useGetRequest";
import usePostRequest from "@/hooks/usePostRequest";
import Image from "next/image";
import Link from "next/link";
import TrashIcon from "@icons/bin.svg";
import Payment from "@/components/Payment";

const stepsList = ["تاییدیه", "پرداخت"]
const Reserve = ({title}) => {
    const {query, push} = useRouter()
    const [selected, setSelected] = useState('1')
    const [data = {}, , , , , loading] = useGetRequest(true, query.id && `/exams/examCheckout/${query.id}`)
    const {sendPostRequest, isLoading} = usePostRequest()

    const handlePay = async () => {
        const id = data?.id
        const {
            data: Data,
            status,
            success,
            successMessage,
            errorMessage
        } = await sendPostRequest("POST", `/exams/pay${selected === '2' ? "/wallet" : ""}/${id}`, {code: coupon?.code || null},)
        if (success) {
            if (selected === '1')
                push(Data.url)
            else {
                addToast({
                    title: 'پرداخت با موفقیت انجام شد',
                    description: successMessage,
                    color: 'success',
                })
                push('/profile/wallet')
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
                                <BreadcrumbItem href="/exams/plus">آزمون پلاس</BreadcrumbItem>
                                <BreadcrumbItem>{title}</BreadcrumbItem>
                            </Breadcrumbs>
                            <Progress withBreadcrumb={false} steps={stepsList} active={1}/>
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
                                                alt={data.exam_name}
                                            />
                                        </div>
                                        <h1 className='sm:text-xl text-base'>{data.exam_name}</h1>
                                    </div>
                                    <div className="gap-2 w-full lg: flex flex-col">
                                        <div className="bg-natural_gray-50 px-3 py-2  flex items-center justify-between">
                                            <p className="text-natural_gray-950 text-xs font-semibold">مبلغ نهایی</p>
                                            <p className="text-success-700 text-sm text-left hasToman">{data.price?.toLocaleString()}</p>
                                        </div>
                                    </div>
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
                                            <p className="text-sm hasToman text-green-600 hasToman">{data.price?.toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <Payment price={data.price} isLoading={isLoading} handlePay={handlePay}
                                             selected={selected} setSelected={setSelected} final_price={data.price}/>
                                </div>
                                <div
                                    className="col-span-3 rounded-lg border border-natural_gray-100 bg-white py-10 px-3 flex flex-col gap-5">
                                    <div className="grid sm:grid-cols-3 items-center">
                                        <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
                                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                                نام و نام خانوادگی
                                            </p>
                                            <p className="text-natural_gray-950 sm:text-base text-xs">
                                                {data.user_name}
                                            </p>
                                        </div>
                                        <div className="flex sm:order-1 -order-1 items-center justify-end gap-3">
                                            <Link href='/exams/plus'
                                                  className="flex gap-2 items-center py-1 px-3 text-sm rounded-md border-2 border-red-600 text-red-600">
                                                <TrashIcon className="w-5 h-5 fill-red-600"/>
                                                <p className="md:block hidden">حذف</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 items-center">
                                        <p className="text-natural_gray-950 sm:text-base text-[10px]">نام آزمون</p>
                                        <p className="text-natural_gray-950 text-start sm:text-base text-xs">
                                            {data.exam_name}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-3 items-center">
                                        <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                            زبان
                                        </p>
                                        <p
                                            className="text-natural_gray-950 text-start sm:text-base text-xs">
                                            {data.language}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-3 items-center">
                                        <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                            مبلغ
                                        </p>
                                        <p
                                            className="text-natural_gray-950 text-start sm:text-base text-xs">
                                            {data.price?.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> : "آزمون مورد نظر پیدا نشد"}
                    </div>
                    : <div className='centerOfParent mx-auto'><Spinner size='lg' color='success'/></div>
                }
            </main>
        </>
    );
};

export default Reserve;