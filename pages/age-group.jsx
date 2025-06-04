import React from 'react';
import {BreadcrumbItem, Breadcrumbs} from "@heroui/react";
import Growth from "@icons/growth.svg";
import Image from "next/image";
import Task from "@icons/task-square.svg";
import Link from "next/link";
import Chevron from "@icons/chevron-right.svg";

const AgeGroup = () => {
    return (
        <>
            <div dir="rtl" className="container flex flex-col gap-10 px-10 ">
                <Breadcrumbs
                    separator='/'
                    classNames={{list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600'}}
                    itemClasses={{
                        separator: "px-2 text-natural_gray-600"
                    }}>
                    <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                    <BreadcrumbItem>رده های سنی</BreadcrumbItem>
                </Breadcrumbs>
                <div className="flex flex-col gap-10">
                    <div className="hidden sm:flex gap-2 justify-center">
                        <Growth className="w-8 h-8"/>
                        <p className="text-2xl">رده های سنی</p>
                    </div>
                    <Link href="/" className="sm:hidden flex gap-2 items-center">
                        <Chevron className=" w-5 h-5 fill-primary-700"/>
                        <p className="text-lg">رده های سنی</p>
                    </Link>
                    <Image width={100} height={100} src="/images/age-group.png" alt="" className="w-full h-full"/>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-sm font-bold sm:text-lg ">رده‌های سنی مختلف برای یادگیری زبان‌ها:</p>
                    <p className="text-xs sm:text-base">توانایی انسان برای یادگیری زبان، پدیده‌ای شگفت‌انگیز است که تحت تاثیر عوامل مختلفی از جمله سن
                        قرار می‌گیرد. به طور کلی، می‌توان گفت که هر چه سن فرد برای یادگیری زبان پایین‌تر باشد، آسان‌تر و
                        سریع‌تر زبان را یاد می‌گیرد.</p>
                </div>
                <div className="text-xs sm:text-base">
                    <ul className="list-disc">
                        <p className="font-bold mb-2">دوران کودکی:</p>
                        <li>نوزادی تا 1 سالگی: در این دوران، نوزادان به طور ذاتی نسبت به اصوات و لحن‌های مختلف زبان‌ها
                            حساس هستند و می‌توانند آنها را از هم تشخیص دهند.
                        </li>
                        <li>1 تا 3 سالگی: کودکان در این سنین شروع به یادگیری کلمات و عبارات ساده به زبان مادری خود
                            می‌کنند. آنها همچنین می‌توانند تا حدی زبان دوم را نیز یاد بگیرند، به خصوص اگر در معرض آن به
                            طور مداوم و منظم قرار بگیرند.
                        </li>
                        <li>1 تا 3 سالگی: کودکان در این سنین شروع به یادگیری کلمات و عبارات ساده به زبان مادری خود
                            می‌کنند. آنها همچنین می‌توانند تا حدی زبان دوم را نیز یاد بگیرند، به خصوص اگر در معرض آن به
                            طور مداوم و منظم قرار بگیرند.
                        </li>
                        <p className="font-bold mt-6 mb-2">دوران دبستان:</p>
                        <li>7 تا 12 سالگی: کودکان در این سنین به طور کامل قواعد دستوری زبان را یاد می‌گیرند و می‌توانند
                            به طور روان و با دایره لغات گسترده به زبان مادری خود صحبت کنند. آنها همچنین می‌توانند زبان
                            دوم را به طور موثری یاد بگیرند، به خصوص اگر در محیطی آموزشی مناسب قرار بگیرند.
                        </li>
                        <p className="font-bold mt-6 mb-2">دوران نوجوانی:</p>
                        <li>12 تا 18 سالگی: در این دوران، مغز انسان به طور کامل تکامل یافته و توانایی یادگیری زبان به
                            طور کامل وجود دارد. نوجوانان می‌توانند زبان دوم را به سرعت و با تسلط بالا یاد بگیرند، به
                            خصوص اگر انگیزه کافی داشته باشند و از روش‌های آموزشی مناسب استفاده کنند.
                        </li>
                        <p className="font-bold mt-6 mb-2">دوران بزرگسالی:</p>
                        <li>18 تا 65 سالگی: بزرگسالان نیز می‌توانند زبان جدید یاد بگیرند، اما ممکن است این فرآیند کمی
                            دشوارتر و زمان‌برتر از دوران کودکی و نوجوانی باشد. با این حال، با تلاش و پشتکار می‌توان به
                            نتایج قابل قبولی دست یافت.
                        </li>
                        <p className="font-bold mt-6 mb-2">دوران کهنسالی:</p>
                        <li>بالای 65 سال: یادگیری زبان در دوران کهنسالی نیز امکان‌پذیر است، اما ممکن است چالش‌های بیشتری
                            به همراه داشته باشد. با این حال، فواید یادگیری زبان در این سنین، مانند تقویت حافظه و پیشگیری
                            از زوال عقل، بسیار زیاد است.
                        </li>
                    </ul>
                </div>
                <Image width={100} height={100} src="/images/age-group-224.png" alt="" className="w-full h-full"/>
                <p className="text-xs sm:text-base">طبق استاندارد مرجع اروپایی مشترک برای زبان‌ها (CEFR)، شش سطح برای دسته‌بندی مهارت‌های زبانی تعریف شده
                    است.</p>
                <Image width={100} height={100} src="/images/age-group-245.png" alt="" className="w-full h-full"/>
                <p className="text-xs sm:text-base">این سطوح از A1 (مبتدی) تا C2 (فوق پیشرفته) را شامل می‌شوند.</p>
                <Image width={100} height={100} src="/images/age-group-246.png" alt="" className="w-full h-full"/>
                <Image width={100} height={100} src="/images/age-group-247.png" alt="" className="w-1/2 mx-auto"/>
                <div className="flex flex-col gap-6 text-xs sm:text-base">
                    <p className="font-bold">در هر سطح، مهارت‌های زبانی به چهار دسته تقسیم می‌شوند:</p>
                    <ul className="list-disc">
                        <li>مهارت های گفتاری: توانایی برقراری ارتباط و تعامل در موقعیت‌های مختلف</li>
                        <li>مهارت هاری نوشتاری: توانایی نوشتن متون مختلف</li>
                        <li>مهارت هاری شنیداری: توانایی درک گفتار و مکالمات</li>
                        <li>مهارت هاری خواندن و درک متون: توانایی درک متون نوشته شده</li>
                    </ul>
                </div>
                <Image width={100} height={100} src="/images/age-group-248.png" alt="" className="w-3/4 mx-auto"/>
                <div className="flex flex-col gap-6 text-xs sm:text-base">
                    <p className="font-bold">شرح سطوح زبانی به طور خلاصه</p>
                    <ul className="list-disc">
                        <p><span className="font-bold">مبتدی (A1): </span>در این سطح، افراد می‌توانند</p>
                        <li>در مکالمات ساده‌ای که موضوعات آشنایی دارند، شرکت کنند.</li>
                        <li>خود و دیگران را معرفیکرده و سوالات و درخواست‌های ساده‌ای را بیان کنند.</li>
                        <li>جملات و عبارات ساده‌ای را که در موقعیت‌های روزمره با آن‌ها سروکار دارند، درک کنند.</li>
                    </ul>
                    <ul className="list-disc">
                        <p> <span className="font-bold">پیش متوسط (A2):</span> در این سطح، افراد می‌توانند</p>
                        <li>در مورد موضوعات آشنایی به صورت ساده اطلاعات رد و بدل کنند.</li>
                        <li>در مورد تجربیات و رویدادهای ساده‌ای که برایشان اتفاق افتاده، صحبت کنند.</li>
                        <li>جملات و عبارات رایج را در مورد موضوعات متداول در زندگی روزمره، مانند خانواده، محل کار، خرید،
                            اوقات فراغت و غیره، درک کنند.
                        </li>
                    </ul>
                    <ul className="list-disc">
                        <p> <span className="font-bold">متوسط (B1):</span> در این سطح، افراد می‌توانند</p>
                        <li>در مورد موضوعات مختلف به صورت ساده و پیوسته صحبت کنند.</li>
                        <li>تجربیات و رویدادها را شرح داده و برنامه‌ها و اهداف خود را بیان کنند.</li>
                        <li>نکات کلیدی را در مورد موضوعات مختلف که به صورت متداول در محل کار، مدرسه، اوقات فراغت و غیره
                            مطرح می‌شوند، درک کنند.
                        </li>
                    </ul>
                    <ul className="list-disc">
                        <p> <span className="font-bold">بالاتر از متوسط(B2):</span> در این سطح، افراد می‌توانند</p>
                        <li>به طور واضح و روان در مورد موضوعات مختلف صحبت کنند.</li>
                        <li>ایده‌های خود را به صورت تفصیلی شرح داده و استدلال‌های خود را بیان کنند.</li>
                        <li>مکالمات را به طور مؤثر کنترل کرده و از عبارات مناسب برای بیان ایده‌های خود استفاده کنند.
                        </li>
                    </ul>
                    <ul className="list-disc">
                        <p> <span className="font-bold">پیشرفته (C1):</span> در این سطح، افراد می توانند</p>
                        <li>به طور کامل و روان در مورد موضوعات مختلف صحبت کنند.</li>
                        <li>ایده‌ها و نظرات پیچیده را به صورت شفاف و دقیق بیان کنند.</li>
                        <li>در مورد موضوعات تخصصی به صورت علمی و استدلالی بحث کنند.</li>
                    </ul>
                    <ul className="list-disc">
                        <p> <span className="font-bold">فوق پیشرفته (C2):</span> در این سطح، افراد می‌توانند</p>
                        <li>به طور کاملاً روان و بدون هیچ گونه تلاشی صحبت کنند.</li>
                        <li>به طور دقیق و ظریف در مورد موضوعات مختلف، حتی موضوعات پیچیده و انتزاعی، بحث کنند.</li>
                    </ul>
                </div>
                <p className="text-xs sm:text-base">به طور کاملاً مسلط و با استفاده از عبارات و اصطلاحات روزمره، از زبان انگلیسی در زمینه‌های مختلف، از
                    جمله موارد آکادمیک و تخصصی، استفاده کنند.</p>
                <Image width={100} height={100} src="/images/age-group-249.png" alt="" className="w-full h-full"/>
                <p className="text-xs sm:text-base">آزمون ها و گواهینامه های بین المللی دانشگاه کمبریج برای سطوح مختلف زبان انگلیسی</p>
            </div>
        </>
    );
};

export default AgeGroup;