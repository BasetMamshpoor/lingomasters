import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Comments from "@/components/Comments";
import useGetRequest from "@/hooks/useGetRequest";
import {useRouter} from "next/router";
import {Spinner} from "@heroui/react";

const MyLibraryDetails = () => {
    const {query} = useRouter()
    const [data, , , , , isLoading] = useGetRequest(true, query.id && `/student/book/download/${query.id}`)

    return (
        isLoading ?
            <div className="centerOfParent w-full"><Spinner color="success"/></div>
            : data && <>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col lg:flex-row  lg:justify-between">
                        <div className=""></div>
                        <div className="hidden md:flex justify-end w-full">
                            <Link href={data.product.file || "/"} download
                                  className="flex items-center justify-center px-8 py-2 text-base rounded-md bg-primary-600 text-white ">مشاهده
                                کتاب</Link>
                        </div>
                    </div>
                    <div
                        className="flex flex-col-reverse gap-6 lg:flex-row w-full p-6 border border-natural_gray-100 rounded-xl ">
                        <div className="flex flex-col gap-6 w-full lg:w-1/2">
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">نام کتاب</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.product.title}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">نویسنده</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.product.author}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">انتشارات</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.product.publication}</p>
                            </div>
                            {/*<div className="flex items-center w-full">*/}
                            {/*    <div className="flex items-center gap-1 w-1/2">*/}
                            {/*        <p className="text-xs md:text-base text-natural_gray-900">سال انتشار</p>*/}
                            {/*    </div>*/}
                            {/*    <p className="text-xs md:text-base w-1/2">1402</p>*/}
                            {/*</div>*/}
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">نوع کتاب</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.product.category}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">نوبت چاپ</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.product.Time_to_print}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">موضوع کتاب</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.product.subject}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">تعداد جلد</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">پکیج {data.product.volume_number} تایی</p>
                            </div>
                            {/*<div className="flex items-center w-full">*/}
                            {/*    <div className="flex items-center gap-1 w-1/2">*/}
                            {/*        <p className="text-xs md:text-base text-natural_gray-900">تعداد صفحه</p>*/}
                            {/*    </div>*/}
                            {/*    <p className="text-xs md:text-base w-1/2">۲۴۰ صفحه</p>*/}
                            {/*</div>*/}
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">زبان</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.product.language}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">رده سنی</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.product.age_group}</p>
                            </div>
                            {/*<div className="flex items-center w-full">*/}
                            {/*    <div className="flex items-center gap-1 w-1/2">*/}
                            {/*        <p className="text-xs md:text-base text-natural_gray-900">رده کتاب</p>*/}
                            {/*    </div>*/}
                            {/*    <p className="text-xs md:text-base w-1/2">نو</p>*/}
                            {/*</div>*/}
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">نام فروشنده</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.order?.seller}</p>
                            </div>
                            {data.order?.discount && <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">تخفیف</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.order.discount}%</p>
                            </div>}
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">روش ارسال</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.order?.payment_method}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">هزینه ارسال</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2 hasToman">{data.order?.delivary_price?.toLocaleString()}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">قیمت نهایی</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2 hasToman">{data.order?.price?.toLocaleString()}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-sm md:text-base text-primary-950 font-semibold">اطلاعات ارسال</p>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">کشور</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.addresses?.country}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">شهر</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.addresses?.city}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">آدرس</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2 ">{data.addresses?.address}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">کد پستی</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.addresses?.postal_code}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-sm md:text-base text-primary-950 font-semibold">اطلاعات
                                        گیرنده</p>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">نام و نام خانوادگی</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.addresses?.name}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">تلفن همراه</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{data.addresses?.mobile}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-sm md:text-base text-primary-950 font-semibold">اطلاعات خرید
                                        کتاب</p>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">تاریخ خرید</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{new Date(data.date).toLocaleString(`fa-IR`, {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                })}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">ساعت خرید</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">{new Date(data.date).toLocaleString(`fa-IR`, {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                })}</p>
                            </div>
                        </div>
                        <div className="flex w-full lg:w-1/2 lg:justify-end justify-center">
                            <Image src={data.product?.image || "/Images/product.png"} alt={data.product?.title}
                                   width={100} height={100}
                                   className="lg:max-w-64 max-w-[50%] w-full h-fit object-cover"/>
                        </div>
                    </div>
                    <Comments justForm url='product' id={data.id}/>
                </div>
                <Link href={data.file || "/"} download
                      className="md:hidden w-full flex items-center justify-center px-8 py-2 text-base rounded-md bg-primary-700 text-white ">مشاهده
                    کتاب</Link>
            </div>
        </>
    );
};

export default MyLibraryDetails;