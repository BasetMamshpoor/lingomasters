import React, {useState} from 'react';
import withAuth from "@/components/withAuth";
import Progress from "@/components/Progress";
import Image from "next/image";
import {addToast, Button, Input, Radio, RadioGroup, Spinner} from "@heroui/react";
import Link from "next/link";
import {useRouter} from "next/router";
import useGetRequest from "@/hooks/useGetRequest";
import usePostRequest from "@/hooks/usePostRequest";

const stepsList = [
    'وارد کردن اطلاعات',
    'پرداخت'
];
const Reserve = () => {
    const {query, push} = useRouter()
    const [steps, setSteps] = useState(1)
    const [selected, setSelected] = useState('1')
    const [data, setData, setReload, paginations, setPaginations, loading] = useGetRequest(false, query.id && `/workshop-reserve/info/${query.id}`)
    const {sendPostRequest, isLoading} = usePostRequest()

    const handlePay = async () => {
        const id = data?.id
        const {
            data: Data,
            success,
            errorMessage
        } = await sendPostRequest("POST", `/workshop-reserve/pay/${id}`, {}, false, true)
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
                    {data ? <> <Progress active={steps} steps={stepsList} page={data.title} title="وبینارها"
                                         link='/workshop'/>
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
                                    </div>
                                </div>
                                {steps === 2 && <>
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
                                </>}
                            </div>
                            <div
                                className="col-span-3 py-6 sm:px-4 px-3 gap-20 border rounded-lg border-natural_gray-100 bg-white flex flex-col">
                                <div className="flex flex-col gap-14">
                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                        <Input label="در صورتی که کد تخفیف دارید آن را وارد کنید." type="number"
                                               radius='sm' labelPlacement='outside' variant='bordered'
                                               className='max-w-1/2'/>
                                    </div>
                                </div>
                                <div className="flex items-center self-end gap-6 sm:w-fit w-full">
                                    <Link href='/workshop'
                                          className='sm:w-44 w-1/2 effect-1 sm:text-base text-xs sm:px-6 px-4 sm:py-4 py-2 rounded border-secondary-500 sm:border-[1.5px] border text-secondary-500 centerOfParent'>انصراف</Link>
                                    <button
                                        onClick={() => setSteps(steps + 1)}
                                        className="sm:w-44 w-1/2 effect-2 sm:py-4 py-2 sm:px-6 px-4 sm:text-base text-sm rounded text-white bg-primary-600 self-end">ثبت
                                    </button>
                                </div>
                            </div>
                        </div>
                    </> : 'وبینار مورد نظر پیدا نشد'}
                </div> : <div className='centerOfParent mx-auto'><Spinner size='lg' color='success'/></div>}
            </main>
        </>
    );
};

export default withAuth(Reserve, false, true);