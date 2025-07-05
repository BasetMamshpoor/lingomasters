import React, {useContext, useState} from "react";
import KingdomFlag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import HistoryIcon from "@icons/history.svg";
import GrowthIcon from "@icons/growth.svg";
import RakingIcon from "@icons/ranking.svg";
import LaptopIcon from "@icons/laptop.svg";
import FileIcon from "@icons/file.svg";
import BookIcon from "@icons/book-open.svg";
import PercentageIcon from "@icons/percentage-square.svg";
import MessageIcon from "@icons/message-alt.svg";
import CalendarIcon from "@icons/calendar.svg";
import EditIcon from "@icons/edit-icon.svg";
import TrashIcon from "@icons/bin.svg";

import BookItem from "@/components/Books/BookItem";
import Link from "next/link";
import {useRouter} from "next/router";
import useGetRequest from "@/hooks/useGetRequest";
import Image from "next/image";
import {addToast, Button, Radio, RadioGroup} from "@heroui/react";
import usePostRequest from "@/hooks/usePostRequest";
import MapModal from "@/components/MapModal";
import CalendarShow from "@/features/private-class/reserve/CalendarShow";
import Payment from "@/components/Payment";
import {Information} from "@/providers/InformationProvider";
import CheckCoupon from "@/components/CheckCoupon";

function ReserveCheckout({setSteps, id: class_id}) {
    const router = useRouter()
    const {id} = router.query
    const [data,] = useGetRequest(true, `/private-reserve/info/${class_id}`)
    const [coupon, setCoupon] = useState()
    const {wallet} = useContext(Information)
    const [selected, setSelected] = useState('1')
    const {sendPostRequest, isLoading} = usePostRequest()

    const handlePay = async () => {
        const {
            data: Data,
            successMessage,
            status,
            success,
            errorMessage
        } = await sendPostRequest("POST", `/private-reserve/pay${selected === '2' ? "/wallet" : ""}/${class_id}`, {code: coupon?.code || null}, false, true)
        if (success) {
            if (selected === '1')
                router.push(Data.url)
            else {
                addToast({
                    title: 'پرداخت با موفقیت انجام شد',
                    description: successMessage,
                    color: 'success',
                })
                router.push('/profile/wallet')
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
    }
    return (
        data && <>
            <div
                className="col-span-1 h-fit lg:order-1 sm:p-4 py-4 px-3 rounded-lg border border-natural_gray-100 bg-white flex flex-col gap-10 items-center">
                <div className="flex flex-col gap-6">
                    <div className="centerOfParent rounded-full overflow-hidden w-28 h-28">
                        <Image src={data.professor_profile || '/images/image 144.png'} width={100} height={100}
                               sizes='100vw' alt={data.professor?.name || ''}
                               className='w-full h-full object-cover'/>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h1 className='sm:text-xl text-base'>{data.professor_name}</h1>
                        <p className='text-natural_gray-600 text-xs'>(کد استاد: {data.professor_id})</p>
                    </div>
                </div>
                <div className="flex items-center w-full justify-between py-2 px-3 bg-neutral-50">
                    <p className="text-xs text-natural_gray-950">جلسه ۲۵ دقیقه‌ای</p>
                    <p className="hasToman text-sm">{data.price?.toLocaleString()}</p>
                </div>
                {!!data.discount_price &&
                    <div className="flex items-center w-full justify-between py-2 px-3 bg-neutral-50">
                        <p className="text-xs text-natural_gray-950">تخفیف</p>
                        <p className="hasToman text-sm text-rose-700">{data.discount_price}%</p>
                    </div>}
                <div className="flex flex-col items-center gap-2 w-full py-4 px-3 bg-neutral-50">
                    <p className="text-sm text-natural_gray-950">  {data.session_count} جلسه</p>
                    <p className="hasToman text-lg font-bold text-success-600">{data.total?.toLocaleString()}</p>
                </div>
                {coupon && <div
                    className=" bg-natural_gray-50 flex flex-col items-center gap-2 w-full py-4 px-3">
                    <p className="text-natural_gray-950 text-xs">قیمت بعد از اعمال کد تخفیف</p>
                    <div className="flex  justify-end gap-2">

                        <div
                            className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-xs">
                            {coupon.percentage}٪
                        </div>
                        <div className="flex flex-col">
                            <del
                                className="text-sm text-natural_gray-500 hasToman">{data.total?.toLocaleString()}</del>
                            <p className="text-sm hasToman text-green-600 hasToman">{coupon.price?.toLocaleString()}</p>
                        </div>
                    </div>
                </div>}
                <CheckCoupon id={class_id} setCoupon={setCoupon} model={'private'}/>
                <div
                    className="z-[100] gap-6 w-full border-t border-natural_gray-200 lg:hidden flex items-center justify-between fixed bottom-0 p-6 bg-white">
                    <Button
                        isLoading={isLoading}
                        isDisabled={data.offPrice > wallet?.balance && selected === "2"}
                        type='button'
                        onPress={handlePay}
                        color="success" style={{
                        "--heroui-success": "140 82% 33%",
                    }} className="text-white" radius='sm'>پرداخت {selected === "1" ? "آنلاین" : "با کیف پول"}</Button>
                    {coupon ?
                        <div className="flex  justify-end gap-2">
                            <div
                                className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-xs">
                                {coupon.percentage}٪
                            </div>
                            <div className="flex flex-col">
                                <del
                                    className="text-sm text-natural_gray-500 hasToman">{data.total?.toLocaleString()}</del>
                                <p className="text-sm hasToman text-green-600 hasToman">{coupon.price?.toLocaleString()}</p>
                            </div>
                        </div>
                        : <div className="flex  justify-end gap-2">
                            {data.price !== data.price_discount &&
                                <div
                                    className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-xs">
                                    {data.discount_price}٪
                                </div>}
                            <p className="text-sm hasToman text-green-600 hasToman">{data.total?.toLocaleString()}</p>
                        </div>}
                </div>
                <Payment price={data.price_discount} isLoading={isLoading} handlePay={handlePay}
                         selected={selected} setSelected={setSelected} final_price={coupon?.price}/>
            </div>
            <div
                className="col-span-3 rounded-lg border border-natural_gray-100 bg-white py-4 px-3 flex flex-col gap-5 ">
                <div className="grid sm:grid-cols-3 items-center">
                    <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
                        <div className="flex items-center">
                            <div className="centerOfParent ml-2">
                                <HistoryIcon/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                تعداد جلسات
                            </p>
                        </div>
                        <p className="text-natural_gray-950 sm:text-base text-xs">
                            {data.session_count} جلسه
                        </p>
                    </div>
                    <div className="flex sm:order-1 -order-1 items-center justify-end gap-3">
                        <Link href={`/private-class/${id}`}
                              className="flex gap-2 items-center py-1 px-3 text-sm rounded-md border-2 border-red-600 text-red-600">
                            <TrashIcon className="w-5 h-5 fill-red-600"/>
                            <p className="md:block hidden">حذف</p>
                        </Link>
                        <button onClick={() => setSteps(prev => prev - 1)}
                                className="flex gap-2 items-center py-1 px-3 text-sm rounded-md border-2 border-primary-600 text-primary-600">
                            <EditIcon className="w-5 h-5"/>
                            <p className="md:block hidden">ویرایش</p>
                        </button>
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
                        {data.languageLevel}
                    </p>
                </div>
                <div className="grid grid-cols-3 items-center">
                    <div className="flex items-center">
                        <div className="centerOfParent ml-2">
                            <LaptopIcon/>
                        </div>
                        <p className="text-natural_gray-950 sm:text-base text-[10px]">
                            نوع کلاس
                        </p>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-xs">
                        {data.teachingType === 'حضوری' ?
                            <div className='flex items-center gap-3'>
                                حضوری
                                <MapModal
                                    location={[data.latitude || 10, data.longitude || 10]}/>
                            </div>
                            : `آنلاین (${data.platform})`}
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
                <div className="grid grid-cols-3 items-center">
                    <div className="flex items-center">
                        <div className="centerOfParent ml-2">
                            <BookIcon className='fill-primary-600'/>
                        </div>
                        <p className="text-natural_gray-950 sm:text-base text-[10px]">
                            انتخاب کتاب
                        </p>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-xs whitespace-nowrap">
                        {data.book_type === "1" && "یا فایل خود را در این محل قرار دهید."}
                        {data.book_type === "2" && "انتخاب کتاب را به استاد محول می کنم."}
                        {data.book_type === "3" && "خودم کتاب را از بین کتاب های استاد انتخاب می کنم."}
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    {data.book_type === "1" && data.evidence && (
                        <a href={data.evidence} target="_blank" rel="noopener noreferrer" className="text-primary-500">
                            مشاهده فایل آپلود شده
                        </a>
                    )}
                    {data.book_type === "3" && data.books?.map(e => <BookItem withSelect={false} key={e.id} {...e}/>)}
                </div>
                <div className="grid grid-cols-3 items-center">
                    <div className="flex items-center">
                        <div className="centerOfParent ml-2">
                            <MessageIcon className="fill-primary-700"/>
                        </div>
                        <p className="text-natural_gray-950 sm:text-base text-[10px]">پیام</p>
                    </div>
                    <p className="text-natural_gray-950 sm:text-base text-xs">
                        {data.text}
                    </p>
                </div>
                <div className="grid grid-cols-3 justify-between items-center">
                    <div className="flex items-center">
                        <div className="centerOfParent ml-2">
                            <CalendarIcon className='fill-primary-600'/>
                        </div>
                        <p className="text-natural_gray-950 sm:text-base text-[10px]">تقویم</p>
                    </div>
                    <CalendarShow id={class_id}/>
                </div>
            </div>
        </>
    );
}

export default ReserveCheckout;
