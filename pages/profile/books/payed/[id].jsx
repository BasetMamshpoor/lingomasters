import React from 'react';
import Link from "next/link";
import Chevron_right from "@icons/chevron-right.svg";
import Image from "next/image";
import Comments from "@/components/Comments";

const MyLibraryDetails = () => {
    return (
        <>
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col lg:flex-row  lg:justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <Chevron_right className="h-5 w-5 fill-primary-600"/>
                            <p className="hidden lg:flex text-primary-500 text-base">بازگشت</p>
                            <p className=" flex lg:hidden text-primary-500 text-xs md:text-base">کتابخانه</p>
                        </Link>
                        <div className="hidden md:flex justify-end w-full">
                            <Link href="/"
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
                                <p className="text-xs md:text-base w-1/2">How to learn English</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">نویسنده</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">Jesica Merry</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">انتشارات</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">ققنوس</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">سال انتشار</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">1402</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">نوع کتاب</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">چاپی</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">نوبت چاپ</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">بیستم</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">موضوع کتاب</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">مکالمه</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">تعداد جلد</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">پکیج ۵ تایی</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">تعداد صفحه</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">۲۴۰ صفحه</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">زبان</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">انگلیسی</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">رده سنی</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">بزرگسال</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">رده کتاب</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">نو</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">نام فروشنده</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">سعید اسدی</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">تخفیف</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">50%</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">هزینه ارسال</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2 hasToman">{(40000).toLocaleString()}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">قیمت نهایی</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2 hasToman">{(200000).toLocaleString()}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-sm md:text-base text-primary-950 font-semibold">اطلاعات ارسال</p>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">استان</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">تهران</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">شهر</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">تهران</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">آدرس</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2 ">تهران، خیابان تهران ، کوچه تهران ، پللاک
                                    1</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">کد پستی</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">579815468</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-sm md:text-base text-primary-950 font-semibold">اطلاعات گیرنده</p>
                                </div>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">نام و نام خانوادگی</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">سعید اسدی</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">تلفن همراه</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">091234566789</p>
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
                                <p className="text-xs md:text-base w-1/2">{new Date().toLocaleString(`fa-IR`, {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                })}</p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="flex items-center gap-1 w-1/2">
                                    <p className="text-xs md:text-base text-natural_gray-900">ساعت خرید</p>
                                </div>
                                <p className="text-xs md:text-base w-1/2">11:30-12:00</p>
                            </div>
                        </div>
                        <div className="flex w-full lg:w-1/2 lg:justify-end justify-center">
                            <Image src="/Images/product.png" alt={"Book"} width={100} height={100}
                                   className="lg:max-w-64 max-w-[50%] w-full h-fit object-cover"/>
                        </div>
                    </div>
                    <Comments justForm url='product' id={1}  />
                </div>
                <Link href="/"
                      className="md:hidden w-full flex items-center justify-center px-8 py-2 text-base rounded-md bg-primary-700 text-white ">مشاهده
                    کتاب</Link>
            </div>
        </>
    );
};

export default MyLibraryDetails;