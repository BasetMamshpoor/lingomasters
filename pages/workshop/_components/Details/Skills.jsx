import {
    Tabs,
    Tab,
    Card,
    CardBody,
} from "@heroui/react";


import EyeIcon from "@icons/eye-right.svg";
import FirstAid from "@icons/first-aid.svg";
import GraduatingCap from "@icons/graduating cap.svg";
import File from "@icons/file.svg";
import Badge from "@icons/badge.svg";
import ClipboardTick from "@icons/clipboard-tick.svg";
import FileEdit from "@icons/file edit.svg";
import BookOpen from "@icons/book open.svg";
import useSwipeScroll from "@/hooks/useHorizontalScroll";

export default function Skills() {
    const ref = useSwipeScroll()
    return (
        <>
            <div className="flex w-full flex-col gap-4 withYellowCircel">
                <Tabs
                    ref={ref}
                    classNames={{
                        tab: 'py-6',
                        tabContent: '[&>span]:text-sm',
                        panel: 'py-0 [&>div]:shadow-none',
                        tabList: 'pb-0 border-b !gap-0 w-full relative flex-nowrap overflow-x-scroll',
                        cursor: 'w-full'
                    }}
                    aria-label="Options"
                    variant="underlined">
                    <Tab
                        key="workHistory"
                        title={
                            <div className="flex items-center gap-2">
                                <FirstAid/>
                                <span>سوابق کاری</span>
                            </div>
                        }
                    >
                        <Card>
                            <CardBody className="text-right flex-row gap-20 ">
                                <ul className="space-y-4 list-inside text-sm w-full">
                                    <li>
                                        <div className="inline-grid grid-cols-2 items-center w-1/2">
                                            <p className="text-sm ">کل سابقه تدریس</p>
                                            <span className="text-xs text-gray-500">۶ سال</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inline-grid grid-cols-2 items-center w-1/2">
                                            <p className="text-sm">سابقه تدریس آنلاین</p>
                                            <span className="text-xs text-gray-500">۶ سال</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inline-grid grid-cols-2 items-center w-1/2">
                                            <p className="text-sm">مصاحبه</p>
                                            <span className="text-xs text-gray-500">۶ سال</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inline-grid grid-cols-2 items-center w-1/2">
                                            <p className="text-sm">تقویت لهجه</p>
                                            <span className="text-xs text-gray-500">۶ سال</span>
                                        </div>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab
                        key="education"
                        title={
                            <div className="flex items-center gap-2">
                                <GraduatingCap/>
                                <span>تحصیلات</span>
                            </div>
                        }
                    >
                        <Card>
                            <CardBody className="text-right text-sm">
                                <ul className="space-y-4 list-inside">
                                    <li>
                                        <div className="inline-flex">
                                            <p className="text-sm">آخرین مدرک دانشگاهی</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="border-1 border-dashed border-gray-400 w-60 py-3 px-3 mt-3 rounded-lg">
                                    <a href="#" downloaded className="flex items-center w-full">
                                        <div className="flex w-full">
                                            <div>
                                                <p className="text-xs text-gray-400">
                                                    فایل آخرین مدرک دانشگاهی
                                                </p>
                                                <p className="text-[10px] text-gray-400">
                                                    FileTitle.pdf | 313 kb | 31 Aug 2022
                                                </p>
                                            </div>
                                            <div className="centerOfParent mr-auto">
                                                <EyeIcon className='fill-natural_gray-300'/>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab
                        key="honors"
                        title={
                            <div className="flex items-center gap-2">
                                <Badge/>
                                <span>افتخارات</span>
                            </div>
                        }
                    >
                        <Card>
                            <CardBody className="text-sm text-right">
                                <ul className="text-sm list-inside space-y-4">
                                    <li>
                                        دبیر برجسته آموزش و پرورش
                                    </li>
                                    <li>
                                        دبیر برجسته آموزش و پرورش
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab
                        key="certificates"
                        title={
                            <div className="flex items-center gap-2">
                                <ClipboardTick/>
                                <span>گواهینامه ها</span>
                            </div>
                        }
                    >
                        <Card>
                            <CardBody className="text-right text-sm gap-3">
                                <ul className="space-y-4 list-inside">
                                    <li>
                                        داخل ایران
                                    </li>
                                </ul>
                                <ul className="grid grid-cols-2 list-inside mr-5">
                                    <li>
                                        مدرک EPT
                                    </li>
                                    <li>
                                        مدرک MCHE
                                    </li>
                                </ul>
                                <div className="flex w-2/3 justify-between">
                                    <div
                                        className="border-1 border-dashed border-gray-400 w-60 py-3 px-3 mt-3 rounded-lg">
                                        <a
                                            href="#"
                                            downloaded
                                            className="flex items-center w-full"
                                        >
                                            <div className="flex w-full">
                                                <div>
                                                    <p className="text-xs text-gray-400">
                                                        فایل مدرک EPT
                                                    </p>
                                                    <p className="text-[10px] text-gray-400">
                                                        FileTitle.pdf | 313 kb | 31 Aug 2022
                                                    </p>
                                                </div>
                                                <EyeIcon className="mr-auto scale-50"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div
                                        className="border-1 border-dashed border-gray-400 w-60 py-3 px-3 mt-3 rounded-lg">
                                        <a
                                            href="#"
                                            downloaded
                                            className="flex items-center w-full"
                                        >
                                            <div className="flex w-full">
                                                <div>
                                                    <p className="text-xs text-gray-400">
                                                        فایل مدرک MCHE
                                                    </p>
                                                    <p className="text-[10px] text-gray-400">
                                                        FileTitle.pdf | 313 kb | 31 Aug 2022
                                                    </p>
                                                </div>
                                                <EyeIcon className="mr-auto scale-50"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <ul className="space-y-4 list-inside">
                                    <li>
                                        خارج ایران
                                    </li>
                                </ul>
                                <ul className="grid grid-cols-2 list-inside mr-5">
                                    <li>
                                        مدرک ILETS
                                    </li>
                                    <li>
                                        مدرک Tofel
                                    </li>
                                </ul>
                                <div className="flex w-2/3 justify-between">
                                    <div
                                        className="border-1 border-dashed border-gray-400 w-60 py-3 px-3 mt-3 rounded-lg">
                                        <a
                                            href="#"
                                            downloaded
                                            className="flex items-center w-full"
                                        >
                                            <div className="flex w-full">
                                                <div>
                                                    <p className="text-xs text-gray-400">
                                                        فایل مدرک ILETS
                                                    </p>
                                                    <p className="text-[10px] text-gray-400">
                                                        FileTitle.pdf | 313 kb | 31 Aug 2022
                                                    </p>
                                                </div>
                                                <EyeIcon className="mr-auto scale-50"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div
                                        className="border-1 border-dashed border-gray-400 w-60 py-3 px-3 mt-3 rounded-lg">
                                        <a
                                            href="#"
                                            downloaded
                                            className="flex items-center w-full"
                                        >
                                            <div className="flex w-full">
                                                <div>
                                                    <p className="text-xs text-gray-400">
                                                        فایل مدرک Tofel
                                                    </p>
                                                    <p className="text-[10px] text-gray-400">
                                                        FileTitle.pdf | 313 kb | 31 Aug 2022
                                                    </p>
                                                </div>
                                                <EyeIcon className="mr-auto scale-50"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab
                        key="articles"
                        title={
                            <div className="flex items-center gap-2">
                                <File/>
                                <span>مقاله ها</span>
                            </div>
                        }
                    >
                        <Card>
                            <CardBody className="text-sm text-right">
                                <ul className="list-inside">
                                    <li>
                                        مقاله های فارسی
                                    </li>
                                </ul>

                                <ul className="list-inside mr-6 text-xs ">
                                    <li>
                                        مقاله صوتی اختلالی
                                    </li>
                                </ul>

                                <ul className="list-inside mt-4">
                                    <li>
                                        مقاله های انگلیسی
                                    </li>
                                </ul>

                                <ul className="list-inside mr-6 text-xs ">
                                    <li>
                                        How to learn
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab
                        key="authors"
                        title={
                            <div className="flex items-center gap-2">
                                <BookOpen/>
                                <span>تالیف ها</span>
                            </div>
                        }
                    >
                        <Card>
                            <CardBody className="text-sm text-right grid grid-cols-2 ">
                                <ul className="space-y-4 list-inside">
                                    <li>
                                        کتاب
                                    </li>
                                    <li>
                                        مقاله
                                    </li>
                                    <li>
                                        رسمی
                                    </li>
                                    <li>
                                        تخصصی
                                    </li>
                                </ul>
                                <ul className="space-y-4 list-inside">
                                    <li>
                                        شفاهی
                                    </li>
                                    <li>
                                        وب سایت
                                    </li>
                                    <li>
                                        فیلم صوت
                                    </li>
                                    <li>
                                        کاتالوگ و بروشور
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab
                        key="translations"
                        title={
                            <div className="flex items-center gap-2">
                                <FileEdit/>
                                <span>ترجمه ها</span>
                            </div>
                        }
                    >
                        <Card>
                            <CardBody className="text-right text-sm">
                                <p className="mb-2.5">
                                    داخل ایران
                                    <span className="text-xs text-gray-500"> (انگلیسی)</span>
                                </p>
                                <ul className="grid grid-cols-5 my-2 list-inside">
                                    <li>
                                        EPT
                                    </li>
                                    <li>
                                        MCHE
                                    </li>
                                    <li>
                                        MRST
                                    </li>
                                </ul>
                                <ul className="grid grid-cols-5 list-inside">
                                    <li>
                                        MHLE
                                    </li>
                                    <li>
                                        UTEPT
                                    </li>
                                    <li>
                                        TOLIMO
                                    </li>
                                </ul>
                                <p className="my-3">

                                    بین المللی
                                    <span className="text-xs text-gray-500"> (انگلیسی)</span>
                                </p>
                                <ul className="grid grid-cols-5 my-2 list-inside">
                                    <li>
                                        BEC
                                    </li>
                                    <li>
                                        CAE
                                    </li>
                                    <li>
                                        CAEL
                                    </li>
                                    <li>
                                        CPE
                                    </li>
                                    <li>
                                        CELPIP
                                    </li>
                                </ul>
                                <ul className="grid grid-cols-5 my-2 list-inside">
                                    <li>
                                        Duolingo
                                    </li>
                                    <li>
                                        GMAT
                                    </li>
                                    <li>
                                        GRE
                                    </li>
                                    <li>
                                        FCE
                                    </li>
                                    <li>
                                        IELTS
                                    </li>
                                </ul>
                                <ul className="grid grid-cols-5 my-2 list-inside">
                                    <li>
                                        BPET
                                    </li>
                                    <li>
                                        PTE
                                    </li>
                                    <li>
                                        KET
                                    </li>
                                    <li>
                                        OET
                                    </li>
                                    <li>
                                        SAT
                                    </li>
                                </ul>
                                <ul className="grid grid-cols-5 my-2 list-inside">
                                    <li>
                                        TOFEL
                                    </li>
                                    <li>
                                        TKT
                                    </li>
                                    <li>
                                        TOEIC
                                    </li>
                                    <li>
                                        YLE
                                    </li>
                                </ul>
                                <p className="my-3">

                                    بین المللی
                                    <span className="text-xs text-gray-500"> (آلمانی)</span>
                                </p>
                                <ul className="grid grid-cols-5 my-2 list-inside">
                                    <li>
                                        OSD
                                    </li>
                                    <li>
                                        TKT
                                    </li>
                                    <li>
                                        DSH
                                    </li>
                                    <li>
                                        TsetDaf
                                    </li>
                                </ul>
                                <p className="my-3">

                                    بین المللی
                                    <span className="text-xs text-gray-500"> (فرانسه)</span>
                                </p>
                                <ul className="grid grid-cols-5 my-2 list-inside">
                                    <li>
                                        TCF
                                    </li>
                                    <li>
                                        DELF
                                    </li>
                                    <li>
                                        DALF
                                    </li>
                                </ul>
                                <p className="my-3"> آزمون پلاس داخلی </p>
                                <ul className="grid grid-cols-5 my-2 list-inside">
                                    <li>
                                        متومسطه اول
                                    </li>
                                    <li>
                                        متوسطه دوم
                                    </li>
                                    <li>
                                        ارشد
                                    </li>
                                    <li>
                                        دکتری
                                    </li>
                                    <li>
                                        وزارت بهداشت
                                    </li>
                                </ul>
                                <p className="my-3"> آزمون پلاس بین المللی </p>
                                <ul className="grid grid-cols-5 my-2 list-inside">
                                    <li>
                                        IELTS GENERAL
                                    </li>
                                    <li>
                                        IELTS Academic
                                    </li>
                                    <li>
                                        IELTS Life Skills
                                    </li>
                                    <li>
                                        GMAT
                                    </li>
                                </ul>
                                <ul className="grid grid-cols-5 my-2 list-inside">
                                    <li>
                                        GRE
                                    </li>
                                    <li>
                                        SAT
                                    </li>
                                    <li>
                                        TOFEL IBT
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}
