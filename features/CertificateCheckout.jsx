import React, {useContext, useState} from 'react';
import useGetRequest from "@/hooks/useGetRequest";
import Image from "next/image";
import {addToast, Button, Spinner} from "@heroui/react";
import Payment from "@/components/Payment";
import Users from "@icons/users.svg";
import Link from "next/link";
import History from "@icons/history.svg";
import Laptop from "@icons/laptop.svg";
import KingdomFlag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import GrowthIcon from "@icons/growth.svg";
import RakingIcon from "@icons/ranking.svg";
import FileIcon from "@icons/file.svg";
import {Information} from "@/providers/InformationProvider";
import usePostRequest from "@/hooks/usePostRequest";
import {useRouter} from "next/router";

const CertificateCheckout = ({state}) => {
    const router = useRouter()
    const [data, , , , , loading] = useGetRequest(true, state && `/student/certificate/info/${state.id}`);
    const {student} = useContext(Information)
    const [selected, setSelected] = useState('1')
    const {sendPostRequest, isLoading} = usePostRequest()
    const handlePay = async () => {
        const {
            data: Data,
            successMessage,
            status,
            success,
            errorMessage
        } = await sendPostRequest("POST", `/student/certificate/pay${selected === '2' ? "/wallet" : ""}/${state.id}`, {}, false, true)
        if (success) {
            if (selected === '1')
                router.push(Data.url)
            else {
                addToast({
                    title: 'پرداخت با موفقیت انجام شد',
                    description: successMessage,
                    color: 'success',
                })
                router.push('/profile/certificate')
            }
        } else
            addToast({
                title: 'خطا',
                description: errorMessage,
                color: 'danger',
                endContent: status === 400 ? <Link href={`/profile/wallet?backUrl=${router.asPath}`}
                                                   className="border border-rose-600 text-sm whitespace-nowrap p-1 rounded">افزایش
                    موجودی</Link> : undefined
            })
    };
    return (
        <>
            {loading ? <div className="centerOfParent w-full mt-10"><Spinner color="success" label="درحال بارگزاری..."/>
            </div> : data && <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-y-6 my-10">
                <div
                    className="col-span-1 h-fit lg:order-1 sm:p-4 py-4 px-3 rounded-lg border border-natural_gray-100 bg-white flex flex-col gap-6 items-center">
                    <div className="flex flex-col items-center gap-6">
                        <div className="centerOfParent rounded-full overflow-hidden w-28 h-28">
                            <Image src={data.profile || '/images/image 144.png'} width={100} height={100}
                                   sizes='100vw' alt={data.professor || ''}
                                   className='w-full h-full object-cover'/>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <h1 className='sm:text-xl text-base'>{data.model}</h1>
                        </div>
                    </div>
                    <div className="flex items-center w-full justify-between py-2 px-3 bg-neutral-50">
                        <p className="text-xs text-natural_gray-950">نوع گواهینامه</p>
                        <p className="text-sm">{data.delivery_type === "online" ? "الکترونیکی" : "چاپی"}</p>
                    </div>
                    <div className="flex items-center w-full justify-between py-2 px-3 bg-neutral-50">
                        <p className="text-xs text-natural_gray-950">مبلغ نهایی</p>
                        <p className="hasToman text-sm text-success-700 hasToman">{data.price?.toLocaleString()}</p>
                    </div>
                    <div
                        className="z-[100] gap-6 w-full border-t border-natural_gray-200 lg:hidden flex items-center justify-between fixed bottom-0 p-6 bg-white">
                        <Button
                            isLoading={isLoading}
                            isDisabled={data.offPrice > student?.wallet && selected === "2"}
                            type='button'
                            onPress={handlePay}
                            color="success" style={{
                            "--heroui-success": "140 82% 33%",
                        }} className="text-white"
                            radius='sm'>پرداخت {selected === "1" ? "آنلاین" : "با کیف پول"}</Button>
                        <div className="flex  justify-end gap-2">
                            <p className="text-sm hasToman text-green-600 hasToman">{data.price?.toLocaleString()}</p>
                        </div>
                    </div>
                    <Payment price={data.price} isLoading={isLoading} handlePay={handlePay}
                             selected={selected} setSelected={setSelected}/>
                </div>
                <div
                    className="col-span-3 rounded-lg border border-natural_gray-100 bg-white py-4 px-3 flex flex-col gap-5 ">
                    <p className="sm:text-base text-xs col-span-2 text-primary-950 font-semibold sm:col-span-2 ">مشخصات</p>
                    <div className="grid grid-cols-3 items-center">
                        <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
                            <div className="flex items-center">
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    نام به فارسی
                                </p>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-xs">
                                {data.name_fa}
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
                            <div className="flex items-center">
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    نام به لاتین
                                </p>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-xs">
                                {data.name_en}
                            </p>
                        </div>
                    </div>
                    {data.delivery_type === 'physical' ? <>
                        <div className="grid grid-cols-3 items-center">
                            <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
                                <div className="flex items-center">
                                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                        شهر
                                    </p>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-xs">
                                    {data.city}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
                                <div className="flex items-center">
                                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                        منطقه
                                    </p>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-xs">
                                    {data.region}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
                                <div className="flex items-center">
                                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                        آدرس
                                    </p>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-xs">
                                    {data.address}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 items-center">
                            <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
                                <div className="flex items-center">
                                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                        کدپستی
                                    </p>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-xs">
                                    {data.postal_code}
                                </p>
                            </div>
                        </div>
                    </> : <>
                        <div className="grid grid-cols-3 items-center">
                            <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
                                <div className="flex items-center">
                                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                        شماره همراه
                                    </p>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-xs">
                                    {data.mobile}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
                                <div className="flex items-center">
                                    <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                        ایمیل
                                    </p>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-xs">
                                    {data.email}
                                </p>
                            </div>
                        </div>
                    </>}
                    <p className="sm:text-base text-xs col-span-2 text-primary-950 font-semibold sm:col-span-2 ">مشخصات</p>
                    <div className="grid grid-cols-3 items-center">
                        <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <Users className="fill-primary-600"/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    استاد
                                </p>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-xs">
                                {data.professor}
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center">
                            <div className="centerOfParent ml-2">
                                <KingdomFlag/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">زبان</p>
                        </div>
                        <p className="text-natural_gray-950 sm:text-base text-xs">
                            {data.language}
                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center">
                            <div className="centerOfParent ml-2">
                                <History/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">تعداد جلسات</p>
                        </div>
                        <p className="text-natural_gray-950 sm:text-base text-xs">
                            {data.session_count}
                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center">
                            <div className="centerOfParent ml-2">
                                <GrowthIcon/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                گروه سنی
                            </p>
                        </div>
                        <p className="text-natural_gray-950 sm:text-base text-xs">
                            {data.ageGroup}
                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center">
                            <div className="centerOfParent ml-2">
                                <RakingIcon/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                سطح زبان
                            </p>
                        </div>
                        <p className="text-natural_gray-950 sm:text-base text-xs">
                            {data.level}
                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center">
                            <div className="centerOfParent ml-2">
                                <Laptop/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                نوع کلاس
                            </p>
                        </div>
                        <p className="text-natural_gray-950 sm:text-base text-xs">
                            {data.teaching_type}
                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center">
                            <div className="centerOfParent ml-2">
                                <FileIcon className='fill-primary-700'/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                هدف از یادگیری
                            </p>
                        </div>
                        <p className="text-natural_gray-950 text-start sm:text-base text-xs">
                            {data.subject}
                        </p>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default CertificateCheckout;