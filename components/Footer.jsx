import Left from '@icons/arrow-left.svg'
import Link from 'next/link'
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <div className="relative mt-40 flex flex-col" dir='rtl'>
                <div
                    className="flex gap-20 lg:py-20 lg:px-20 sm:py-10 sm:px-8 py-8 px-4 bg-[linear-gradient(90deg,_#B5C7DF_0%,_#E8EFF8_100%)]">
                    <div className="flex flex-wrap gap-10 justify-between w-full">
                        <div className="flex flex-col gap-8 grow">
                            <p className="">دسترسی ها</p>
                            <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-8 gap-4 grow">
                                <div className="flex flex-col gap-4 justify-between">
                                    <Link className='effect-3'
                                          href="/">
                                        <span>فروشگاه</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>پشتیبانی</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>درباره ما</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>تماس با ما</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>کتابخانه</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>استخدام اساتید</span>
                                        <Left/></Link>
                                </div>
                                <div className="flex flex-col gap-4 justify-between">
                                    <Link className='effect-3'
                                          href="/">
                                        <span>وبلاگ</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>رده های سنی</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>آزمون پلاس</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>آزمون پرداخت</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>آزمون تعیین سطح</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>لینک های مفید و کاربردی</span>
                                        <Left/></Link>
                                </div>
                                <div className="flex flex-col gap-4 justify-between">
                                    <Link className='effect-3'
                                          href="/">
                                        <span>قوانین و مقررات</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>اخبار و اطلاعیه ها</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>سوالات متداول اولیا</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>سوالات متداول اساتید</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>سوالات متداول زبان آموزان</span>
                                        <Left/></Link>
                                    <Link className='effect-3'
                                          href="/">
                                        <span>راهنمای کلاس های آنلاین</span>
                                        <Left/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 lg:w-fit w-full">
                            <p className="lg:block hidden"> دانلود اپلیکیشن</p>
                            <div className="flex lg:flex-row flex-col lg:gap-20 gap-6 grow lg:self-end">
                                <div className="flex lg:flex-col gap-6 items-center justify-center">
                                    <Image src={'/images/ios-app.png'} alt={'ios-app'}
                                           className="lg:w-full sm:w-1/5 w-1/2 max-h-[180px] object-cover"
                                           width={100}
                                           height={100}/>
                                    <Image src={'/images/android-app.png'} alt={'android'}
                                           className="lg:w-full sm:w-1/5 w-1/2 max-h-[180px] object-cover"
                                           width={100}
                                           height={100}/>
                                </div>
                                <div className="flex lg:flex-col gap-6 lg:justify-between items-center justify-center">
                                    <Image src={'/images/etehadie.png'} alt={'etehadie'}
                                           className="lg:w-full sm:w-1/5 w-1/2 max-h-[180px] object-cover"
                                           width={100}
                                           height={100}/>
                                    <a referrerPolicy='origin' target='_blank'
                                       href='https://trustseal.enamad.ir/?id=511544&Code=b5B03h3L84P1noEJN4Gvb8Ma1dJOBQub'>
                                        <img
                                            className="lg:w-full sm:w-1/5 w-1/2 max-h-[180px] object-cover mix-blend-multiply cursor-pointer"
                                            referrerPolicy='origin'
                                            src="/images/enamad_1024.png"
                                            alt='' code='b5B03h3L84P1noEJN4Gvb8Ma1dJOBQub'/>
                                    </a>
                                </div>
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