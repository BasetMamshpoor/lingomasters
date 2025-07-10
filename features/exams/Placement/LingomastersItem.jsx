import React, { useState} from 'react';

const list = [
    "انتخاب زبان هدف",
    "انتخاب مهارت ‌( گفتاری - شنیداری - نوشتاری - خواندن و درک متون - واژگان - قواعد دستوری )",
    "انتخاب گروه سنی ( کودک - نوجوان - بزرگسال )",
    "انتخاب سطح تخمینی ( مبتدی - متوسط - پیشرفته )",
    "انتخاب استاد از اساتید لینگومسترز",
]

const LingomastersItem = () => {
    const [step, setStep] = useState(1)
    return (
        <>
            <div
                className="flex flex-col gap-4 md:gap-8 lg:gap-10 px-3 py-4 md:px-6 md:py-8 lg:px-10 lg:py-14 border-5 border-primary-200 rounded-3xl bg-[rgba(255,_255,_255,_0.50)] backdrop-filter backdrop-blur w-full md:max-w-[418px] lg:max-w-[845px]">
                {step === 1 ? <>
                    <p className="text-xs md:text-base lg:text-lg text-secondary-500">✦تعیین سطح آنلاین توسط
                        لینگومسترز</p>
                    <div className="flex flex-col gap-8">
                        <p className="text-base md:text-2xl lg:text-5xl font-bold text-primary-600 whitespace-nowrap">تعیین
                            سطح همه زبان‌ها تنها با ۳ مرحله</p>
                        <p className="text-xs md:text-base lg:text-2xl">با لینگومسترز در هر زمان و با هر بودجه‌ای میتونی
                            تعیین سطح زبانت را با چند مرحله ساده و سریع انجام بدی.</p>
                    </div>
                    <ul className="list-disc marker:text-primary-700 marker:text-xl text-[10px] md:text-xs lg:text-lg pr-4">
                        {list?.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                    <div className="flex justify-end w-full">
                        <button
                            onClick={() => setStep(step + 1)}
                            type="botton"
                            className="flex text-white px-3 py-2 justify-center bg-primary-600 rounded-md text-xs md:text-sm lg:text-base w-full md:w-fit lg:w-60 whitespace-nowrap">پلن‌های
                            تعیین سطح لینگومسترز
                        </button>
                    </div>
                </> : <>
                    <p className="text-xs md:text-base lg:text-lg text-secondary-500">✦تعیین سطح آنلاین توسط
                        لینگومسترز</p>
                    <p className="text-center text-xl">به زودی...</p>
                </>}
            </div>
        </>
    );
};

export default LingomastersItem;