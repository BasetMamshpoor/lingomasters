import React, {useState} from 'react';
import Image from 'next/image';
import Link from "next/link";

const CambridgeItem = () => {
    const [step, setStep] = useState(1)
    return (
        <>
            <div
                className="flex flex-col gap-4 md:gap-8 lg:gap-10 px-3 py-4 md:px-6 md:py-8 lg:px-10 lg:py-14 border-5 border-primary-200 rounded-3xl bg-[rgba(255,_255,_255,_0.50)] backdrop-filter backdrop-blur w-full md:max-w-[418px] lg:max-w-[845px]">
                {step === 1 ? <>
                    <div className="flex-flex-col gap-2">
                        <p className="text-xs md:text-base lg:text-lg text-secondary-500">✦تعیین سطح آنلاین توسط دانشگاه
                            کمبریج</p>
                        <p className="text-[10px] md:text-xs lg:text-sm text-[#D42620]">توجه: توجه داشته باشید که پس از
                            اتمام آزمون تعیین سطح آنلاین دانشگاه کمبریج نتیجه آزمون بلافاصله به شما نمایش داده می‌شود و
                            شما
                            باید این نتیجه را ذخیره کنید، لینگومسترز به نتیجه این آزمون دسترسی نخواهد داشت.</p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className="text-base md:text-2xl lg:text-5xl font-bold text-primary-600 whitespace-nowrap">تعیین
                            سطح زبان انگلیسی تنها با ۱ مرحله</p>
                        <p className="text-xs md:text-base lg:text-2xl">در این تعیین سطح شما می‌توانید هدف خود را از
                            تعیین
                            سطح زبان انگلیسی انتخاب کنید و با توجه به چارچوب‌های دانشگاه کمبریج سطح زبان انگلیسی خود را
                            سریعا تشخیص دهید.</p>
                    </div>
                    <ul className="list-disc marker:text-primary-700 marker:text-xl text-[10px] md:text-xs lg:text-lg pr-4">
                        <li>انتخاب آزمون انگلیسی (عمومی - مدرسه - تجاری - کودکان)</li>
                    </ul>
                    <div className="flex flex-col gap-4 w-full">
                        <p className="text-xs md:text-base text-secondary-500">نمره‌دهی آزمون دانشگاه کمبریج</p>
                        <Image src={"/images/exams-cart.png"} alt="" height={100} width={100} className="w-full"/>
                    </div>
                    <div className="flex justify-end w-full">
                        <button
                            onClick={() => setStep(step + 1)}
                            type="botton"
                            className="flex text-white px-3 py-2 justify-center bg-primary-600 rounded-md text-xs md:text-sm lg:text-base w-full md:w-fit lg:w-60 whitespace-nowrap">انتخاب
                            پلن
                        </button>
                    </div>
                </> : <>
                    <div className="flex-flex-col gap-2">
                        <p className="text-xs md:text-base lg:text-lg text-secondary-500">✦تعیین سطح آنلاین توسط دانشگاه
                            کمبریج</p>
                        <p className="text-[10px] md:text-xs lg:text-sm text-[#D42620]">توجه: توجه داشته باشید که پس از
                            اتمام آزمون تعیین سطح آنلاین دانشگاه کمبریج نتیجه آزمون بلافاصله به شما نمایش داده می‌شود و
                            شما
                            باید این نتیجه را ذخیره کنید، لینگومسترز به نتیجه این آزمون دسترسی نخواهد داشت.</p>
                    </div>
                    <div className="flex flex-col gap-6 [&>a]:text-primary-600">
                        <p>یکی از پلن های زیر را انتخاب کنید</p>
                        <Link href="https://www.cambridgeenglish.org/test-your-english/young-learners/"
                              target="_blank">نوجوانان</Link>
                        <Link href="https://www.cambridgeenglish.org/test-your-english/business/"
                              target="_blank">تجاری</Link>
                        <Link href="https://www.cambridgeenglish.org/test-your-english/for-schools/"
                              target="_blank">مدرسه</Link>
                        <Link href="https://www.cambridgeenglish.org/test-your-english/general-english/"
                              target="_blank">زبان عمومی</Link>
                    </div>
                </>}
            </div>
        </>
    );
};

export default CambridgeItem;