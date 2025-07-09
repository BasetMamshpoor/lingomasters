import React from "react";
import Left from '@icons/arrow-left.svg'
import Link from 'next/link'
import X from '@icons/x.svg'
import Youtube from '@icons/youtube.svg'
import Insta from "@icons/instagram.svg";
import Whats from "@icons/whatsapp.svg";
import Tel from "@icons/telegram.svg";
import Apa from "@icons/aparat.svg";
import Tik from "@icons/tik_tok.svg";
import Pi from "@icons/pinterest.svg";
import Fac from "@icons/facebook.svg";

const Footer = () => {
    return (
        <>
            <div className="relative flex flex-col" dir='rtl'>
                <div
                    className="flex flex-col gap-10 lg:pt-20 lg:px-20 sm:py-10 sm:px-8 py-8 px-4 bg-[linear-gradient(90deg,_#B5C7DF_0%,_#E8EFF8_100%)]">
                    <div className="flex flex-wrap items-end gap-4 justify-between w-full">
                        <div className="flex flex-col gap-8 grow">
                            <p className="">دسترسی ها</p>
                            <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-8 gap-4 grow">
                                <div className="flex flex-col gap-4 justify-between">
                                    <Link className='effect-3'
                                          href="https://store.lingomasters.ir">
                                        <span>فروشگاه</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/profile/support">
                                        <span>پشتیبانی</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/about-us">
                                        <span>درباره ما</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/contact-us">
                                        <span>تماس با ما</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/library">
                                        <span>کتابخانه</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/hiring-professors">
                                        <span>استخدام اساتید</span>
                                        <Left/></Link>
                                </div>
                                <div className="flex flex-col gap-4 justify-between">
                                    <Link className='effect-3'
                                          href="/blogs">
                                        <span>وبلاگ</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/age-group">
                                        <span>رده های سنی</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/exams/plus">
                                        <span>آزمون پلاس</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/exams/pay">
                                        <span>آزمون پرداخت</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/exams/placement">
                                        <span>آزمون تعیین سطح</span>
                                        <Left/></Link>
                                </div>
                                <div className="flex flex-col gap-4 justify-between">
                                    <Link className='effect-3'
                                          href="/rules">
                                        <span>قوانین و مقررات</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/news">
                                        <span>اخبار و اطلاعیه ها</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/faq?ru=par">
                                        <span>سوالات متداول اولیا</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/faq?ru=pro">
                                        <span>سوالات متداول اساتید</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/faq?ru=stu">
                                        <span>سوالات متداول زبان آموزان</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/class-guide">
                                        <span>راهنمای کلاس های آنلاین</span>
                                        <Left/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center sm:justify-start justify-center flex-1 gap-6 sm:w-fit w-full">
                            <div
                                className="flex gap-6 items-center sm:justify-start justify-center sm:w-fit w-full h-fit">
                                <div className="">
                                    <img src={'/images/etehadie.png'} alt={'etehadie'}
                                         className="w-full max-h-[130px] object-contain"
                                    />
                                </div>
                                <a referrerPolicy='origin' target='_blank'
                                   className=""
                                   href='https://trustseal.enamad.ir/?id=511544&Code=b5B03h3L84P1noEJN4Gvb8Ma1dJOBQub'>
                                    <img
                                        className="w-full max-h-[130px] object-contain mix-blend-multiply"
                                        referrerPolicy='origin'
                                        src="/images/enamad_1024.png"
                                        alt='' code='b5B03h3L84P1noEJN4Gvb8Ma1dJOBQub'/>
                                </a>
                            </div>
                            <div className="centerOfParent gap-2">
                                <Link href={process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE} target="_blank"
                                      rel="noopener noreferrer">
                                    <Youtube/>
                                </Link>
                                <Link href={process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM} target="_blank"
                                      rel="noopener noreferrer">
                                    <Insta/>
                                </Link>
                                <Link href={process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP} target="_blank"
                                      rel="noopener noreferrer">
                                    <Whats/>
                                </Link>
                                <Link href={process.env.NEXT_PUBLIC_SOCIAL_TELEGRAM} target="_blank"
                                      rel="noopener noreferrer">
                                    <Tel/>
                                </Link>
                                <Link href={process.env.NEXT_PUBLIC_SOCIAL_APARAT} target="_blank"
                                      rel="noopener noreferrer">
                                    <Apa/>
                                </Link>
                                <Link href={process.env.NEXT_PUBLIC_SOCIAL_TIKTOK} target="_blank"
                                      rel="noopener noreferrer">
                                    <Tik/>
                                </Link>
                                <Link href={process.env.NEXT_PUBLIC_SOCIAL_PINTEREST} target="_blank"
                                      rel="noopener noreferrer">
                                    <Pi/>
                                </Link>
                                <Link href={process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK} target="_blank"
                                      rel="noopener noreferrer">
                                    <Fac/>
                                </Link>
                                <Link href={process.env.NEXT_PUBLIC_SOCIAL_X} target="_blank" rel="noopener noreferrer">
                                    <X/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full flex items-center justify-center py-5 bg-[linear-gradient(90deg,_#366CDA_0%,_rgba(106,_135,_193,_0.80)_100%)]">
                    <p className='text-white sm:text-base text-xs'>تمامی حقوق این وبسایت متعلق به لینگومسترز می
                        باشد.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;