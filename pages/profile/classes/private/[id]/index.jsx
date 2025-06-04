import React from 'react';
import Link from "next/link";
import KingdomFlag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import Dollar from "@icons/dollar.svg";
import RakingIcon from "@icons/ranking.svg";
import Users from "@icons/users.svg";
import File from "@icons/file.svg";
import LaptopIcon from "@icons/laptop.svg";
import Watch from "@icons/watch.svg";
import CalendarIcon from "@icons/calendar.svg";
import History from "@icons/history.svg";
import Message from "@icons/message-alt.svg";
import LinkIcon from "@icons/link.svg";
import BookIcon from "@icons/book-open.svg";
import MapMark from "@icons/map-marker.svg";
import Map from "@icons/map.svg";
import ThreeDots from "@icons/threedots.svg";
import BookItem from "@/components/Books/BookItem";
import MapModal from "@/components/MapModal";
import {useRouter} from "next/router";
import useGetRequest from "@/hooks/useGetRequest";
import {
    Alert,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Select,
    SelectItem,
    useDisclosure
} from "@heroui/react";
import ClassCancellation from "@/features/profile/classes/ClassCancellation";
import ShowRules from "@/features/profile/classes/ShowRules";
import CalendarShow from "@/features/private-class/reserve/CalendarShow";

const PrivateClassDetails = () => {
    const disclosure = useDisclosure();
    const modal = useDisclosure();
    const router = useRouter();
    const {id} = router.query;
    const [data] = useGetRequest(true, `/student/private/show/${id}`)
    const isProgrss = data ? [0, 1].includes(data.status) : false

    return (
        data && <>
            <div className="flex flex-col gap-8 relative">
                <div className="flex items-center justify-between md:flex-nowrap flex-wrap gap-4">
                    {/*<Link href='/profile/classes/private'*/}
                    {/*      className='text-primary-700 flex items-center gap-2 sm:text-base text-sm'>*/}
                    {/*    <Right className='fill-primary-700 w-5 h-5'/>*/}
                    {/*    بازگشت*/}
                    {/*</Link>*/}
                    <div className="sm:hidden flex gap-4">
                        {data.status !== 3 &&
                            <Select
                                size="sm"
                                color="warning"
                                radius="sm"
                                variant="bordered"
                                placeholder="وضعیت گزارش"
                                classNames={{
                                    label: 'text-xs font-semibold text-primary-900',
                                    base: 'min-w-52 sm:hidden',
                                    input: 'text-xs',
                                    listbox: 'last:[&>ul>a>span]:hidden',
                                    value: 'text-warning-500 text-xs',
                                }}
                            >
                                {data.a.map((e, i) => <SelectItem
                                    as={e.a ? Link : 'div'}
                                    href={e.a ? `/profile/classes/private/${id}/reports` : undefined}
                                    key={e.b}
                                    className={`flex-row-reverse ${!e.a ? 'pointer-events-none opacity-50' : ''}`}
                                    textValue={e.b}
                                >
                                    <div
                                        className="flex items-center flex-row justify-between w-full"
                                        dir={'auto'}>
                                        <p>جلسه {i + 1}</p>
                                        <span
                                            className={`text-xs ${e.a ? 'text-primary-600' : 'text-secondary-500'}`}>{e.a ? 'مشاهده گزارش عملکرد' : 'ثبت نشده'}</span>
                                    </div>
                                </SelectItem>)}
                            </Select>
                        }
                    </div>
                    <div
                        className="flex items-center gap-6 sm:justify-end justify-between w-full  sm:relative fixed  bottom-0 sm:z-0 z-50 left-0 right-0 sm:p-0 p-4">
                        {data.status !== 3 &&
                            <Select
                                color="warning"
                                radius="sm"
                                variant="bordered"
                                placeholder="وضعیت گزارش"
                                classNames={{
                                    label: 'text-xs font-semibold text-primary-900',
                                    base: 'max-w-52 sm:block hidden',
                                    input: 'text-xs',
                                    listbox: 'last:[&>ul>a>span]:hidden',
                                    value: 'text-warning-500',
                                }}
                            >
                                {data.a.map((e, i) => <SelectItem
                                    as={e.a ? Link : 'div'}
                                    href={e.a ? `/profile/classes/private/${id}/reports` : undefined}
                                    key={e.b}
                                    className={`flex-row-reverse ${!e.a ? 'pointer-events-none opacity-50' : ''}`}
                                    textValue={e.b}
                                >
                                    <div
                                        className="flex items-center flex-row justify-between w-full"
                                        dir={'auto'}>
                                        <p>جلسه {i + 1}</p>
                                        <span
                                            className={`text-xs ${e.a ? 'text-primary-600' : 'text-secondary-500'}`}>{e.a ? 'مشاهده گزارش عملکرد' : 'ثبت نشده'}</span>
                                    </div>
                                </SelectItem>)}
                            </Select>
                        }
                        {isProgrss && <>
                            <Link href={`/messages?user=${data.user_id}`}
                                  className='text-primary-600 centerOfParent gap-2 border-1.5 sm:text-base text-xs text-center bg-white border-primary-600 rounded py-2 px-4 sm:w-fit w-full'>
                                <Message className={'fill-primary-600'}/>
                                پیام به استاد
                            </Link>
                            {!data.teaching_type_id &&
                                <button
                                    className={`flex sm:p-4 py-2 px-3 sm:h-12 h-8 flex-col justify-center items-center gap-2.5 bg-primary-600 rounded `}>
                                    <p className=" sm:text-base text-xs text-white text-center whitespace-nowrap">ورود
                                        به کلاس</p>
                                </button>}
                        </>}
                    </div>
                </div>
                {isProgrss && !data.is_report && <Alert
                    classNames={{title: 'sm:text-base text-sm', description: 'sm:text-sm text-xs'}}
                    color='warning'
                    title='توجه داشته باشید:'
                    description="که لینک ورود به کلاس 30 دقیقه قبل از کلاس در اختیار شما قرار میگیرد و شما میتوانید به کلاس دسترسی داشته باشید."/>}
                <div
                    className="relative border rounded-xl border-natural_gray-200 w-full py-8 px-4 flex flex-col gap-5 sm:mb-0 mb-10">
                    <ClassCancellation id={id} disclosure={disclosure} is_near={data.is_near}/>
                    <ShowRules disclosure={modal}/>
                    {isProgrss && <Dropdown
                        dir={'rtl'}
                        classNames={{
                            trigger: 'absolute left-4 top-4 cursor-pointer',
                        }}
                        placement='right-start'
                    >
                        <DropdownTrigger>
                            <div className="centerOfParent">
                                <ThreeDots className='fill-secondary-500'/>
                            </div>
                        </DropdownTrigger>
                        <DropdownMenu
                            onAction={(key) => {
                                if (key === "cancel") {
                                    disclosure.onOpen();
                                }
                                if (key === "show") {
                                    modal.onOpen();
                                }
                            }}
                            aria-label="Static Actions">
                            <DropdownItem
                                classNames={{title: 'font-semibold flex items-center gap-1 sm:text-sm text-xs'}}
                                key="cancel"
                                className="text-danger"
                                color="danger">
                                لغو کلاس
                            </DropdownItem>
                            <DropdownItem
                                classNames={{title: 'font-semibold flex items-center gap-1 sm:text-sm text-xs'}}
                                key="show">
                                مشاهده قوانین لغو کلاس
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>}
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center">
                            <div className="centerOfParent ml-2">
                                <Users className='fill-primary-600'/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                استاد
                            </p>
                        </div>
                        <Link href={`/students/${1}`}
                              className="text-primary-600 sm:text-base text-xs">
                            {data.name}
                        </Link>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center">
                            <div className="centerOfParent ml-2">
                                <KingdomFlag/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">زبان</p>
                        </div>
                        <p className="sm:text-base text-xs col-span-2">
                            {data.language}
                        </p>
                    </div>
                    {!data.time_slot_status && <>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <CalendarIcon className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    تاریخ
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">{new Date(data.time_slots?.date).toLocaleDateString('fa-IR', {
                                day: '2-digit',
                                month: 'long',
                                weekday: 'long'
                            })} </p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <Watch className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    ساعت
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">
                                {data.time_slots?.time}
                            </p>
                        </div>
                    </>}
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center">
                            <div className="centerOfParent ml-2">
                                <Dollar className='fill-primary-600'/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                مبلغ
                            </p>
                        </div>
                        <p className="sm:text-base text-xs col-span-2">
                            {parseInt(data.price ?? 0).toLocaleString('fa-IR')} تومان
                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center">
                            <div className="centerOfParent ml-2">
                                <History className='fill-primary-600'/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                تعداد جلسات
                            </p>
                        </div>
                        <p className="sm:text-base text-xs col-span-2">
                            {data.session_count} جلسه
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
                        <p className="sm:text-base text-xs col-span-2">
                            {data.language_level}
                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center">
                            <div className="centerOfParent ml-2">
                                <LaptopIcon className='fill-primary-600'/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                نوع کلاس
                            </p>
                        </div>
                        <p className="sm:text-base text-xs col-span-2">
                            {data.teaching_type}</p>
                    </div>
                    {data.teaching_type_id === 1 && <>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <MapMark className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    موقعیت
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">{data.city}</p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <Map className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    نقشه
                                </p>
                            </div>
                            <MapModal location={[data.latitude || 51.33, data.longitude || 35.7]}/>
                        </div>
                    </>}
                    {data.teaching_type_id === 2 && isProgrss && <>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <LinkIcon className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">آیدی استاد </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">{data.user_id}</p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <LinkIcon className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">لینک ورود به کلاس </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">{data.class_link}</p>
                        </div>
                    </>}
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center">
                            <div className="centerOfParent ml-2">
                                <File className='fill-primary-600'/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                هدف از یادگیری
                            </p>
                        </div>
                        <p className="sm:text-base text-xs col-span-2">
                            {data.subject}
                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center col-span-3">
                            <div className="centerOfParent ml-2">
                                <BookIcon className='fill-primary-600'/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                کتاب های انتخاب شده
                            </p>
                        </div>
                    </div>
                    <div className="flex md:justify-start items-center gap-3 flex-wrap">
                        {data.books.map(book => (
                            <BookItem key={book.id} {...book} withSelect={false}/>
                        ))}
                    </div>
                    <div className="grid grid-cols-3 items-center">
                        <div className="flex items-center">
                            <div className="centerOfParent ml-2">
                                <Message className='fill-primary-600'/>
                            </div>
                            <p className="text-natural_gray-950 sm:text-base text-[10px]">پیام</p>
                        </div>
                        <p className="sm:text-base text-xs col-span-2">
                            {data.massage}
                        </p>
                    </div>
                    {data.status !== 3 && !!data.time_slot_status &&
                        <div className="grid sm:grid-cols-3 grid-cols-1 gap-2 items-start">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <CalendarIcon className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">تقویم (ساعت شروع کلاس
                                    ها)</p>
                            </div>
                            <CalendarShow id={id}/>
                        </div>}
                    {data.status === 3 && <>
                        <p className="sm:text-base text-xs col-span-2 text-primary-950 font-semibold sm:col-span-2">اطلاعات
                            لغو</p>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <File className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    حذف شده توسط
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">
                                {data.delete_by}
                            </p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <File className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    دلیل حذف
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">
                                {data.reason}
                            </p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <File className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    تاریخ لغو
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">{new Date(data.date).toLocaleDateString('fa-IR', {
                                day: '2-digit',
                                month: 'long',
                                weekday: 'long'
                            })} </p>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="flex items-center">
                                <div className="centerOfParent ml-2">
                                    <File className='fill-primary-600'/>
                                </div>
                                <p className="text-natural_gray-950 sm:text-base text-[10px]">
                                    ساعت لغو
                                </p>
                            </div>
                            <p className="sm:text-base text-xs col-span-2">
                                {data.time}
                            </p>
                        </div>
                    </>}
                </div>
            </div>
        </>
    );
};

export default PrivateClassDetails;