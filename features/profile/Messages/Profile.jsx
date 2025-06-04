import React, {useState} from "react";
import Right from '@icons/arrow-right.svg'
import {Avatar, Tab, Tabs} from "@heroui/react";
import Link from "next/link";
import Files from "@/features/profile/Messages/Files";
import Images from "@/features/profile/Messages/Images";
import Videos from "@/features/profile/Messages/Videos";
import Links from "@/features/profile/Messages/Links";
import Sounds from "@/features/profile/Messages/Sounds";
import useGetRequest from "@/hooks/useGetRequest";

function Profile({onBack, user}) {
    const [selected, setSelected] = useState('file')
    const [data, setData, reload, pagi, setPa, isLoading] = useGetRequest(true, `/chat/chat_info/${user.id}?type=${selected}`,)

    const handleTabChange = (key) => {
        setSelected(key);
        setData([])
    };
    return (
        <div className="flex flex-col gap-6 h-screen">
            <div className="flex flex-col items-center border border-natural_gray-200 p-3 pb-6 rounded-lg">
                <div className="w-full bg-primary-950 rounded-lg h-[108px]"><Right
                    className="mt-2 mr-4 cursor-pointer" onClick={onBack}/></div>
                <div className="flex flex-col items-center gap-2 -mt-8">
                    <Avatar src={user?.profile} showFallback className="w-24 h-24 text-large"/>
                    <p className="font-semibold">{user.name}</p>
                    <Link
                        href={user.role === "professor" ? `https://lingomasters.ir/private-class/${user.role_id}` : `/students/${user.role_id}`}
                        className="border-1.5 border-secondary-300 text-secondary-500 text-sm py-2 px-4 rounded">مشاهده
                        پروفایل</Link>
                </div>
            </div>
            <div className="py-3 border rounded-xl border-natural_gray-200 grow overflow-y-auto">
                <Tabs
                    aria-label="Tabs variants"
                    variant='underlined'
                    fullWidth
                    selectedKey={selected}
                    onSelectionChange={handleTabChange}
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
                    <Tab key="file" title="فایل‌ها">
                        <Files isLoading={isLoading} data={data}/>
                    </Tab>
                    <Tab key="image" title="تصاویر">
                        <Images isLoading={isLoading} data={data}/>
                    </Tab>
                    <Tab key="video" title="ویدیوها">
                        <Videos isLoading={isLoading} data={data}/>
                    </Tab>
                    <Tab key="link" title="لینک‌ها">
                        <Links isLoading={isLoading} data={data}/>
                    </Tab>
                    <Tab key="audio" title="صوت‌ها">
                        <Sounds isLoading={isLoading} data={data}/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default React.memo(Profile)