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
import useHorizontalScroll from "@/hooks/useHorizontalScroll";

export default function Skills({data}) {
    const ref = useHorizontalScroll()
    return (
        <>
            <div
                className="p-4 flex flex-col gap-4 bg-white border border-natural_gray-50 rounded-lg withYellowCircel  scroll-m-52"
                id="specialties">
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Badge className='w-5 h-5 fill-primary-600'/></div>
                    <span className='sm:text-base text-sm text-primary-950'>تخصص ها</span>
                </div>
                <div className="flex w-full flex-col gap-4">
                    <Tabs
                        ref={ref}
                        classNames={{
                            tab: 'py-6',
                            tabContent: '[&>span]:text-sm',
                            panel: 'py-0 [&>div]:shadow-none',
                            tabList: 'pb-0 border-b !gap-0',
                            cursor: 'w-full'
                        }}
                        aria-label="Options"
                        variant="underlined">
                        {!!data.records.length && <Tab
                            key="workHistory"
                            title={
                                <div className="flex items-center gap-2">
                                    <FirstAid/>
                                    <span>سوابق کاری</span>
                                </div>
                            }
                        >
                            <div className="text-right flex-row gap-20">
                                <ul className="space-y-4 list-inside text-sm w-full">
                                    {data.records.map(e => (
                                        <li key={e.name}>
                                            <div className="inline-grid grid-cols-2 items-center gap-4">
                                                <p className="text-sm">{e.type.replace(/_/g, ' ')}</p>
                                                <span
                                                    className="text-xs text-gray-500">{e.total_duration}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Tab>}
                        {!!data.education.length && <Tab
                            key="education"
                            title={
                                <div className="flex items-center gap-2">
                                    <GraduatingCap/>
                                    <span>تحصیلات</span>
                                </div>
                            }
                        >
                            <div className="text-right text-sm flex flex-col gap-4">
                                {data.education.map(e => (
                                    <div key={e.name} className="flex flex-col">
                                        <ul className="space-y-4 list-inside">
                                            <li>
                                                <div className="inline-flex">
                                                    <p className="text-sm">{e.name}</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div
                                            className="border-1 border-dashed border-gray-400 w-60 py-3 px-3 mt-3 rounded-lg">
                                            <a href={e.file} target='_blank' className="flex items-center w-full">
                                                <div className="flex justify-between items-center w-full">
                                                    <p className="text-xs text-gray-400"> فایل مدرک {e.name}</p>
                                                    <div className="centerOfParent">
                                                        <EyeIcon className='fill-natural_gray-300'/>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Tab>}
                        {!!data.honor.length && <Tab
                            key="honors"
                            title={
                                <div className="flex items-center gap-2">
                                    <Badge/>
                                    <span>افتخارات</span>
                                </div>
                            }
                        >
                            <div className="text-sm text-right">
                                <ul className="text-sm list-inside space-y-4">
                                    {data.honor.map(e => <li key={e.name}><a href={e.file} target='_blank'>{e.name}</a></li>)}
                                </ul>
                            </div>
                        </Tab>}
                        {!!data.certificate.length && <Tab
                            key="certificates"
                            title={
                                <div className="flex items-center gap-2">
                                    <ClipboardTick/>
                                    <span>گواهینامه ها</span>
                                </div>
                            }
                        >
                            <div className="text-right text-sm flex flex-col gap-4">
                                <div className='flex flex-col gap-2'>
                                    {!!data.certificate['1']?.length && <ul className="space-y-4 list-inside">
                                        <li>
                                            داخل ایران
                                        </li>
                                    </ul>}
                                    <ul className="list-inside mr-4 text-xs flex flex-wrap gap-4">
                                        {data.certificate['1']?.map(e => (
                                            <div className='flex flex-col' key={e.name}>
                                                <li>
                                                    {e.name}
                                                </li>
                                                <div
                                                    className="border-1 border-dashed border-gray-400 w-60 py-3 px-3 mt-3 rounded-lg">
                                                    <a
                                                        target='_blank'
                                                        href={e.file}
                                                        className="flex items-center w-full"
                                                    >
                                                        <div className="flex items-center justify-between w-full">
                                                            <p className="text-xs text-gray-400">
                                                                فایل مدرک {e.name}
                                                            </p>
                                                            <div className="centerOfParent">
                                                                <EyeIcon className='fill-natural_gray-300'/>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    {!!data.certificate['0']?.length && <ul className="space-y-4 list-inside">
                                        <li>
                                            خارج ایران
                                        </li>
                                    </ul>}
                                    <ul className="list-inside mr-4 text-xs flex flex-wrap gap-4">
                                        {data.certificate['0']?.map(e => (
                                            <div className='flex flex-col' key={e.name}>
                                                <li>
                                                    {e.name}
                                                </li>
                                                <div
                                                    className="border-1 border-dashed border-gray-400 w-60 py-3 px-3 mt-3 rounded-lg">
                                                    <a
                                                        target='_blank'
                                                        href={e.file}
                                                        className="flex items-center w-full"
                                                    >
                                                        <div className="flex items-center justify-between w-full">
                                                            <p className="text-xs text-gray-400">
                                                                فایل مدرک {e.name}
                                                            </p>
                                                            <div className="centerOfParent">
                                                                <EyeIcon className='fill-natural_gray-300'/>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Tab>}
                        {!!data.blogs.length && <Tab
                            key="articles"
                            title={
                                <div className="flex items-center gap-2">
                                    <File/>
                                    <span>مقاله ها</span>
                                </div>
                            }
                        >
                            <div className="text-sm text-right">
                                {!!data.blogs['1']?.length && <ul className="list-inside">
                                    <li>
                                        مقاله های فارسی
                                    </li>
                                </ul>}
                                {data.blogs['1']?.map(e => (
                                    <ul className="list-inside mr-6 text-xs mt-3" key={e.name}>
                                        <li>
                                            <a href={e.file} target='_blank'>
                                                {e.name}
                                            </a>
                                        </li>
                                    </ul>
                                ))}
                                {!!data.blogs['0']?.length && <ul className="list-inside mt-4">
                                    <li>
                                        مقاله های انگلیسی
                                    </li>
                                </ul>}
                                {data.blogs['0']?.map(e => (
                                    <ul className="list-inside mr-6 text-xs mt-3" key={e.name}>
                                        <li>
                                            <a href={e.file} target='_blank'>
                                                {e.name}
                                            </a>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </Tab>}
                        {!!data.author.length && <Tab
                            key="authors"
                            title={
                                <div className="flex items-center gap-2">
                                    <BookOpen/>
                                    <span>تالیف ها</span>
                                </div>
                            }
                        >
                            <div className="text-sm text-right">
                                <ul className="space-y-4 list-inside grid grid-cols-2 gap-4">
                                    {data.author.map(e => (
                                        <li className='!m-0' key={e.name}>
                                            <a href={e.file} target='_blank'>
                                                {e.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Tab>}
                        {!!data.translation.length && <Tab
                            key="translations"
                            title={
                                <div className="flex items-center gap-2">
                                    <FileEdit/>
                                    <span>ترجمه ها</span>
                                </div>
                            }
                        >
                            <div className="text-sm text-right">
                                <ul className="space-y-4 list-inside grid grid-cols-2 gap-4">
                                    {data.translation.map(e => (
                                        <li className='!m-0' key={e.name}>
                                            <a href={e.file} target='_blank'>
                                                {e.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Tab>}
                    </Tabs>
                </div>
            </div>
        </>
    );
}
