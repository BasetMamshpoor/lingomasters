import Progress from '@/components/Progress';
import Image from 'next/image';
import React, {useContext, useState} from 'react';
import {addToast, Button, Spinner} from "@heroui/react";
import Link from 'next/link';
import ReserveCheckout from '@/features/group-class/reserve/GroupClassReserve';
import useGetRequest from "@/hooks/useGetRequest";
import {useRouter} from "next/router";
import withAuth from "@/components/withAuth";
import usePostRequest from "@/hooks/usePostRequest";
import Payment from "@/components/Payment";
import {Information} from "@/providers/InformationProvider";
import CheckCoupon from "@/components/CheckCoupon";

const stepsList = [
    'وارد کردن اطلاعات',
    'تاییدیه',
    'پرداخت'
];
const Reserve = () => {
    const {query, push, asPath} = useRouter()
    const [steps, setSteps] = useState(1)
    const {wallet} = useContext(Information)
    const [selected, setSelected] = useState('1')
    const [coupon, setCoupon] = useState()
    const [data, setData, setReload, paginations, setPaginations, loading] = useGetRequest(false, query.id && `/group_reserve/info/${query.id}`)
    const {sendPostRequest, isLoading} = usePostRequest()

    const handlePay = async () => {
        const id = data?.id
        const {
            data: Data,
            status,
            success,
            successMessage,
            errorMessage
        } = await sendPostRequest("POST", `/group_reserve/pay${selected === '2' ? "/wallet" : ""}/${id}`, {code: coupon?.code || null}, false, true)
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
                    {data ? <><Progress active={steps} steps={stepsList} page={data.title} title='کلاس های گروهی'
                                        link='/group-class'/>
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
                                            src={data.profile || '/images/image 144.png'}
                                            alt={'data.name'}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 items-center">
                                        <h1 className='sm:text-xl text-base'>{data.title}</h1>
                                        <p className='text-natural_gray-600 text-xs'>(کد دوره: {data.id})</p>
                                    </div>
                                </div>
                                <div className="gap-2 w-full lg: flex flex-col">
                                    <div className="bg-natural_gray-50 px-3 py-2  flex items-center justify-between">
                                        <p className="text-natural_gray-950 text-xs">استاد</p>
                                        <p className="text-primary-700 text-sm text-left ">{data.professor}</p>
                                    </div>
                                    <div
                                        className=" bg-natural_gray-50 px-3 py-2 flex items-center flex-col gap-4 font-semibold">
                                        <p className="text-natural_gray-950 text-xs">قیمت دوره</p>
                                        <div className="flex  justify-end gap-2">
                                            {data.price !== data.offPrice &&
                                                <div
                                                    className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-xs">
                                                    {data.discount}٪
                                                </div>}
                                            <div className="flex flex-col">
                                                {data.price !== data.offPrice && <del
                                                    className="text-sm text-natural_gray-500 hasToman">{data.price?.toLocaleString()}</del>}
                                                <p className="text-sm hasToman text-green-600 hasToman">{data.offPrice?.toLocaleString()}</p>
                                            </div>
                                        </div>
                                        {coupon && <div
                                            className=" bg-natural_gray-50 px-3 py-2 flex items-center flex-col gap-4 font-semibold">
                                            <p className="text-natural_gray-950 text-xs">قیمت بعد از اعمال کد تخفیف</p>
                                            <div className="flex  justify-end gap-2">

                                                <div
                                                    className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-xs">
                                                    {coupon.percentage}٪
                                                </div>
                                                <div className="flex flex-col">
                                                    <del
                                                        className="text-sm text-natural_gray-500 hasToman">{data.offPrice?.toLocaleString()}</del>
                                                    <p className="text-sm hasToman text-green-600 hasToman">{coupon.price?.toLocaleString()}</p>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                                {steps === 2 && <>
                                    <div
                                        className="z-[100] gap-6 w-full border-t border-natural_gray-200 lg:hidden flex items-center justify-between fixed bottom-0 p-6 bg-white">
                                        <Button
                                            isLoading={isLoading}
                                            type='button'
                                            isDisabled={data.offPrice > wallet?.balance && selected === "2"}
                                            onPress={handlePay}
                                            color="success" style={{
                                            "--heroui-success": "140 82% 33%",
                                        }} className="text-white"
                                            radius='sm'>پرداخت {selected === "1" ? "آنلاین" : "با کیف پول"}</Button>
                                        {coupon ?
                                            <div className="flex  justify-end gap-2">
                                                <div
                                                    className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-xs">
                                                    {coupon.percentage}٪
                                                </div>
                                                <div className="flex flex-col">
                                                    <del
                                                        className="text-sm text-natural_gray-500 hasToman">{data.offPrice?.toLocaleString()}</del>
                                                    <p className="text-sm hasToman text-green-600 hasToman">{coupon.price?.toLocaleString()}</p>
                                                </div>
                                            </div>
                                            : <div className="flex  justify-end gap-2">
                                                {data.price !== data.offPrice &&
                                                    <div
                                                        className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-xs">
                                                        {data.discount}٪
                                                    </div>}
                                                <div className="flex flex-col">
                                                    {data.price !== data.offPrice && <del
                                                        className="text-sm text-natural_gray-500 hasToman">{data.price?.toLocaleString()}</del>}
                                                    <p className="text-sm hasToman text-green-600 hasToman">{data.offPrice?.toLocaleString()}</p>
                                                </div>
                                            </div>}
                                    </div>
                                    <Payment price={data.offPrice} isLoading={isLoading} handlePay={handlePay}
                                             selected={selected} setSelected={setSelected} final_price={coupon?.price}/>
                                </>}
                            </div>
                            {steps === 2 ?
                                <ReserveCheckout setSteps={setSteps} data={data}/>
                                : <div
                                    className="col-span-3 py-6 sm:px-4 px-3 gap-20 border rounded-lg border-natural_gray-100 bg-white flex flex-col">
                                    <CheckCoupon id={data?.id} setCoupon={setCoupon} model="group_class"/>
                                    <div className="flex items-center self-end gap-6 sm:w-fit w-full">
                                        <Link href='/group-class'
                                              className='sm:w-44 w-1/2 effect-1 sm:text-base text-xs sm:px-6 px-4 py-2 rounded border-secondary-500 sm:border-[1.5px] border text-secondary-500 centerOfParent'>انصراف</Link>
                                        <button
                                            onClick={() => {
                                                setSteps(steps + 1)
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            className="sm:w-44 w-1/2 effect-2 py-2 sm:px-6 px-4 sm:text-base text-sm rounded text-white bg-primary-600 self-end">ثبت
                                        </button>
                                    </div>
                                </div>}
                        </div>
                    </> : "کلاس مورد نظر پیدا نشد"}
                </div> : <div className='centerOfParent mx-auto'><Spinner size='lg' color='success'/></div>}
            </main>
        </>
    );
};

export default withAuth(Reserve, false, true);