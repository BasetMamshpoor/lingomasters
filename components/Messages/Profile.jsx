import React from "react";
import Right from '@icons/arrow-right.svg'
import {Avatar, Tab, Tabs} from "@heroui/react";
import Link from "next/link";
import Files from "@/components/Messages/Files";
import Images from "@/components/Messages/Images";
import Videos from "@/components/Messages/Videos";
import Links from "@/components/Messages/Links";
import Sounds from "@/components/Messages/Sounds";

export default function Profile({user, onBack}) {
    return (
        <div className="flex flex-col gap-6 h-screen">
            <div className="flex flex-col items-center border border-natural_gray-200 p-3 pb-6 rounded-lg">
                <div onClick={onBack} className="w-full bg-primary-950 rounded-lg h-[108px]"><Right
                    className="mt-2 mr-4"/></div>
                <div className="flex flex-col items-center gap-2 -mt-8">
                    <Avatar src={user.profile} showFallback size='lg'/>
                    <p className="font-semibold">{user.name}</p>
                    <Link href={`/students/${user.id}`}
                          className="border-1.5 border-secondary-300 text-secondary-500 text-sm py-2 px-4 rounded">مشاهده
                        پروفایل</Link>
                </div>
            </div>
            <div className="py-3 border rounded-xl border-natural_gray-200 grow overflow-y-auto">
                <Tabs
                    aria-label="Tabs variants"
                    variant='underlined'
                    fullWidth
                    classNames={{
                        tabList: 'border-b pb-0 gap-2 w-full',
                        cursor: "shadow-none w-full",
                        tabContent: 'w-full sm:text-sm text-xs',
                        tab: "py-4 h-fit ",
                        panel: 'w-full'
                    }}
                    style={{
                        "--heroui-success": "38 87% 56%",
                    }}
                    color='success'>
                    <Tab key="files" title="فایل‌ها">
                        <Files/>
                    </Tab>
                    <Tab key="images" title="تصاویر">
                        <Images/>
                    </Tab>
                    <Tab key="videos" title="ویدیوها">
                        <Videos/>
                    </Tab>
                    <Tab key="links" title="لینک‌ها">
                        <Links/>
                    </Tab>
                    <Tab key="sounds" title="صوت‌ها">
                        <Sounds />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
