import Link from "next/link";
import React from "react";
import Image from "next/image";
// import Pencil from "@icons/Pencil.svg"
// import Download from "@icons/download-fill.svg"
// import Star from "@icons/star-fill.svg"
// import Thumb from "@icons/thumb-up-fill.svg"
import Users from "@icons/users.svg"
import Peaple from "@icons/people.svg"
import Clipboard from "@icons/clipboard-tick.svg"
import Chevron from "@icons/arrow-left.svg"
import Calendar from "@icons/calendar.svg"
import useGetRequest from "@/hooks/useGetRequest";
import Stories from "@/components/Stories/Stories";
import GeneralQuestions from "@/features/Landing/GeneralQuestions";
import Amar from "@/features/Landing/Amar";
import LandingBook from "@/features/Landing/LearningBook";
import LearningStart from "@/features/Landing/LearningStart";
import Moshavere from "@/features/Landing/Moshavere";
import Ostad from "@/features/Landing/Ostad";
import Language from "@/features/Landing/Language";
import OfferSlider from "@/features/Landing/OfferSlider";
import PrivateClasses from "@/features/Landing/PrivateClasses";
import Carousel from "@/features/Landing/Carousel";
import Slider from "@/features/Landing/Slider";
import GroupCard from "@/features/Landing/GroupCard";
import Blogs from "@/features/Landing/Blogs";
import MoshavereForm from "@/features/Landing/MoshavereForm";
import Comments from "@/features/Landing/Comments";
import AgeGroup from "@/features/Landing/AgeGroup";


export default function Home() {
    const [data, , , , , isLoading] = useGetRequest(true, `/landing-page`)
    return (
        <>
            <div dir="rtl" className="container flex flex-col items-center justify-center gap-28 pb-40 my-10">
                <Carousel data={data?.slider}/>
                <Language data={data?.language}/>
                <div className="w-full">
                    <Stories data={data?.story}/>
                </div>
                <GeneralQuestions/>
                <OfferSlider data={data?.discount}/>
                <Amar/>
                <PrivateClasses languages={data?.language}/>
                <LandingBook/>
                <Slider
                    Component={GroupCard}
                    isLoading={isLoading}
                    data={data?.group}
                    Icon={Peaple}
                    title='معرفی کلاس‌های گروهی'
                    loop
                    to={`/group-class`}/>
                <LearningStart/>
                <AgeGroup />
                <Moshavere/>
                <Ostad/>
                {/*<div*/}
                {/*    className="flex flex-col items-center gap-20 w-full py-32 px-20 bg-[linear-gradient(90deg,_rgba(31,_66,_158,_0.20)_6.02%,_rgba(14,_229,_203,_0.06)_55.98%,_rgba(54,_108,_218,_0.20)_96.32%)]">*/}
                {/*    <div className="relative flex items-center gap-10">*/}
                {/*        <p className="text-[40px]">خدمات ترجمه</p>*/}
                {/*        <Pencil className="absolute -left-28 bottom-2 w-16 h-24"/>*/}
                {/*    </div>*/}
                {/*    <div className="flex items-center gap-6">*/}
                {/*        <div className="flex flex-col gap-14 w-1/2">*/}
                {/*            <p className="text-2xl">ما در سایت مترجمین لینگومسترز خدمات ترجمه متفاوتی را انجام می‌دهیم.*/}
                {/*                خدمات ما شامل ترجمه همزمان، ترجمه شفاهی، انواع ترجمه‌های رسمی، ترجمه مقاله و متن، فیلم و*/}
                {/*                صوت، کتاب، ویراستاری، پرافیز متن، پایان‌نامه ، رزومه و انگیزه‌نامه ،استخراج مقاله،*/}
                {/*                فرمت‌بندی مقاله، پذیرش و چاپ مقاله و ترجمه فوری است.</p>*/}
                {/*            <div className="flex flex-col gap-10">*/}
                {/*                <p className="text-xl font-bold">برای کسب اطلاعات بیشتر از سایت ترجمه ما روی دکمه کلیک*/}
                {/*                    کنید.</p>*/}
                {/*                <Link href="/group-class"*/}
                {/*                      className="flex w-48 px-14 py-3 text-white bg-primary-600 border-1.5  border-primary-600 rounded-md whitespace-nowrap"> ثبت*/}
                {/*                    نام استاد*/}
                {/*                </Link>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="">*/}
                {/*            <Image src="/images/translation.png" alt="" width={100} height={100} className="w-full"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="flex items-center flex-col lg:flex-row justify-center lg:justify-between w-full p-4">*/}
                {/*    <div className="flex flex-col gap-8 lg:w-1/2  order-2 lg:order-1 ">*/}
                {/*        <p className="text-sm font-bold sm:text-lg md:font-medium md:text-3xl">دانلود اپلیکیشن*/}
                {/*            لینگومسترز</p>*/}
                {/*        <p className="text-xs sm:text-sm md:text-base">ما علاوه بر وب سایت خوبمون، یه اپلیکیشن خیلی خفن*/}
                {/*            و حرفه ای هم برای زبان*/}
                {/*            آموز های گلمون داریم دتا یادگیری براشون راحت تر باشه.</p>*/}
                {/*        <div className="flex items-center gap-2 sm:gap-6">*/}
                {/*            <Image src="/images/googel-play.png" alt="" width={100} height={100}*/}
                {/*                   className="w-40 sm:w-72"/>*/}
                {/*            <Image src="/images/app-store.png" alt="" width={100} height={100}*/}
                {/*                   className="w-40 sm:w-72"/>*/}
                {/*        </div>*/}
                {/*        <div className="flex items-center justify-between gap-4 w-full ">*/}
                {/*            <div*/}
                {/*                className="flex flex-col items-center gap-2 bg-primary-950 rounded-lg w-full py-4 px-4">*/}
                {/*                <Download className="w-6 h-6 md:w-9 md:h-9"/>*/}
                {/*                <p className="text-base md:text-2xl text-white">59865</p>*/}
                {/*                <p className="text-sm md:text-2xl text-white whitespace-nowrap">دانلود موفق</p>*/}
                {/*            </div>*/}
                {/*            <div*/}
                {/*                className="flex flex-col items-center gap-2 bg-primary-950 rounded-lg w-full py-4 px-4">*/}
                {/*                <Star className="w-6 h-6 md:w-9 md:h-9"/>*/}
                {/*                <p className="text-base md:text-2xl text-white">1500</p>*/}
                {/*                <p className="text-sm md:text-2xl text-white whitespace-nowrap">۵ ستاره کامل</p>*/}
                {/*            </div>*/}
                {/*            <div*/}
                {/*                className="flex flex-col items-center gap-2 bg-primary-950 rounded-lg w-full py-4 px-4">*/}
                {/*                <Thumb className="w-6 h-6 md:w-9 md:h-9"/>*/}
                {/*                <p className="text-base md:text-2xl text-white">1500</p>*/}
                {/*                <p className="text-sm md:text-2xl text-white whitespace-nowrap">۵ ستاره کامل</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="order-1 lg:order-2 ">*/}
                {/*        <Image src="/images/phone.png" alt="" width={100} height={100} className="w-full"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <Blogs data={data?.blog}/>
                <Comments />
                <MoshavereForm />
            </div>
        </>
    );
}
