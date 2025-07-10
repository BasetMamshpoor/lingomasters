import React, {useContext, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Language} from "@/providers/languageProvider";
import {Radio, RadioGroup} from "@heroui/react";

const list = [
    "انتخاب زبان هدف",
    "انتخاب مهارت ‌( گفتاری - شنیداری - نوشتاری - خواندن و درک متون - واژگان - قواعد دستوری )",
    "انتخاب گروه سنی ( کودک - نوجوان - بزرگسال )",
    "انتخاب استاد از اساتید لینگومسترز",
    "نمره‌دهی تعیین سطح آنلاین توسط اساتید لینگومسترز",
]
const ProfessorItem = () => {
    const [step, setStep] = useState(1)
    const [selectedLang, setSelectedLang] = useState()
    const {languages} = useContext(Language)
    return (
        <>
            <div
                className="flex flex-col gap-4 md:gap-8 lg:gap-10 px-3 py-4 md:px-6 md:py-8 lg:px-10 lg:py-14 border-5 border-primary-200 rounded-3xl bg-[rgba(255,_255,_255,_0.50)] backdrop-filter backdrop-blur w-full md:max-w-[418px] lg:max-w-[845px]">
                {step === 1 ? <>
                    <div className="flex-flex-col gap-2">
                        <p className="text-xs md:text-base lg:text-lg text-secondary-500">✦تعیین سطح آنلاین توسط اساتید
                            لینگومسترز</p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className="text-base md:text-2xl lg:text-5xl font-bold text-primary-600 whitespace-nowrap">تعیین
                            سطح همه زبان‌ها تنها با ۴ مرحله</p>
                    </div>
                    <ul className="list-disc marker:text-primary-700 marker:text-xl text-[10px] md:text-xs lg:text-lg pr-4">
                        {list?.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                    <div className="flex flex-col gap-4 w-full">
                        <p className="text-xs md:text-base text-secondary-500">ارزیابی تعیین سطح آنلاین توسط
                            لینگومسترز</p>
                    </div>
                    <div className="flex justify-end w-full">
                        <button
                            onClick={() => setStep(step + 1)}
                            type="botton"
                            className="flex text-white px-3 py-2 justify-center bg-primary-600 rounded-md text-xs md:text-sm lg:text-base w-full md:w-fit lg:w-60 whitespace-nowrap">انتخاب
                            زبان
                        </button>
                    </div>
                </> : <>
                    <p className="text-xs md:text-base lg:text-lg text-secondary-500">✦تعیین سطح آنلاین توسط اساتید
                        لینگومسترز</p>
                    <RadioGroup
                        label="انتخاب زبان"
                        aria-label=" "
                        orientation="horizontal"
                        defaultValue={selectedLang}
                        style={{
                            "--heroui-default-500": "196 94% 25%",
                        }}
                        color='default'
                        onValueChange={setSelectedLang}
                    >
                        {languages?.languages.map(a => <Radio key={a.id} classNames={{base: "w-1/2 max-w-1/2"}}
                                                              value={a.id}>{a.language}</Radio>)}
                    </RadioGroup>
                    <div className="flex justify-end w-full">
                        <Link href={`/private-class?language=${selectedLang}?class=placement`}
                              className="flex text-white px-3 py-2 justify-center bg-primary-600 rounded-md text-xs md:text-sm lg:text-base w-full md:w-fit lg:w-60 whitespace-nowrap">انتخاب
                            استاد
                        </Link>
                    </div>
                </>}
            </div>
        </>
    );
};

export default ProfessorItem;