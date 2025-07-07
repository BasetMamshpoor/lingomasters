import React from 'react';
import Badge from "@icons/badge.svg";

const Income = () => {
    return (
        <>
            <div
                className="flex flex-col items-center justify-center w-full lg:px-20 lg:py-16 px-4 py-6 gap-6 lg:gap-10 bg-secondary-50">
                <div className="flex items-center justify-center lg:gap-6 gap-2 w-full">
                    <Badge className="lg:w-10 lg:h-10 w-5 h-5 md:w-6 md:h-6 fill-primary-700"/>
                    <p className="text-sm font-bold md:text-lg lg:text-2xl lg:font-medium">راهنمای گام به گام کسب
                        درآمد با لینگومسترز</p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="text-xs md:text-sm lg:text-lg">
                        <p>آیا تا به ‌حال چیزی راجع به درآمد غیر فعال شنیده‌اید؟</p>
                        <p>درآمد غیرفعال، درآمدی است که بدون زحمت مداوم و مشارکت مستقیم شما بدست می‌آید.</p>
                        <p>چه چیزی از این بهتر؟! داستان کسب درآمد شما با لینگومسترز هم همین است: لینگومسترز را معرفی
                            کنید، پاداش بگیرید!</p>
                        <p>کافی است خدمات ما را به اساتید، مترجمین، زبان آموزان و یا اولیا معرفی کنید و از ثبت نام
                            اساتید، مترجمین، زبان آموزان و خرید آنها،<br/>
                            کسب درآمد کنید.</p>
                        <br/>
                        <p>راهنمای گام‌ به ‌گام کسب درآمد با لینگومسترز</p>
                        <div className="flex  gap-3 md:gap-5 lg:gap-8">
                            <p>1.</p>
                            <p className="">در لینگومسترز به عنوان استاد و یا زبان آموز عضو شوید.</p>
                        </div>
                        <div className="flex  gap-3 md:gap-5 lg:gap-8">
                            <p>2.</p>
                            <p className="">کد دعوت اختصاصی خود را دریافت کنید.</p>
                        </div>
                        <div className="flex  gap-3 md:gap-5 lg:gap-8">
                            <p>3.</p>
                            <p className="">بدون محدودیت به تعداد نامحدود استاد و یا زبان آموز را با کد دعوت خود به
                                لینگومسترز دعوت کنید.
                            </p>
                        </div>
                        <div className="flex gap-3 md:gap-5 lg:gap-8">
                            <p>4.</p>
                            <p className="">
                                با ثبت نام کامل اساتید و تشکیل اولین کلاس غیر رایگان و بدون تخفیف، مبلغ 100،000
                                تومان و با ثبت نام کامل زبان آموزان و پس از اولین کلاس خاتمه یافته غیر رایگان بدون
                                تخفیف مبلغ 50،000 تومان از لینگومسترز پاداش بگیرید.
                            </p>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm lg:text-lg text-warning-700">
                        نکته بسیار مهم:<br/>
                        افراد دعوت شده فقط تا ۲۴ ساعت بعد از ثبت کد دعوت شما، مهلت دارند تا به طور کامل در سایت
                        لینگومسترز ثبت نام نمایند، در صورت عدم تکمیل ثبت نام طی ۲۴ ساعت، متاسفانه هیچ پاداش دعوتی به
                        شما تعلق نخواهد گرفت.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Income;