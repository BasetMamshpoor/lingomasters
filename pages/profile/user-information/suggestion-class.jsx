import React from 'react';
import Hero from "@/features/profile/Hero";
import {Alert, Tab, Tabs} from "@heroui/react";
import ClassItem from "@/features/group-class/List/ClassItem";
import TeacherCard from "@/components/TeacherCard";
import useGetRequest from "@/hooks/useGetRequest";

const SuggestionClass = ({level}) => {
    const [data] = useGetRequest(true, '/student-panel/suggestion')
    return (
        <>
            <div className="flex flex-col sm:gap-10 gap-7">
                <Hero level={level} isSuggestion>
                    <Alert color='warning'
                           title={`در حال حاضر سطح زبان شما در زبان انگلیسی ${level} می‌باشد. برای ارتقای سطح خود می‌توانید از اساتید و کلاس‌های گروهی هم سطح استفاده کنید.`}/>
                </Hero>
                {data && <Tabs
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
                    // selectedKey={status}
                    // onSelectionChange={setStatus}
                    color='success'>
                    <Tab title='کلاس های خصوصی' key='private'>
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                            {data.professors.map((e, i) => <TeacherCard className='!max-w-full' key={i}/>)}
                        </div>
                    </Tab>
                    <Tab title='کلاس های گروهی' key='public'>
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                            {data.group_classes.map((e, i) => <ClassItem key={i}/>)}
                        </div>
                    </Tab>
                </Tabs>}
            </div>
        </>
    );
};

export default SuggestionClass;