import React from 'react';
import {Tab, Tabs} from "@heroui/react";
import ClassesTable from "@/features/profile/dashboard/ClassesTable";
import ClassesTableMobile from "@/features/profile/dashboard/ClassesTableMobile";

const Classes = ({group, privateC, placement}) => {
    return (
        <>
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
                <Tab
                    key={'1'}
                    title="کلاس‌های خصوصی و آزمایشی">
                    <div className="sm:block hidden">
                        <ClassesTable data={privateC}/>
                    </div>
                    <div
                        className="sm:hidden flex flex-col max-h-[400px] overflow-y-auto scrollbar-hide py-6 px-4 rounded-lg bg-primary-50 border border-natural_gray-200 ">
                        <ClassesTableMobile data={privateC}/>
                    </div>
                </Tab>
                <Tab
                    key={'2'}
                    title="گروهی و وبینارها و روکشاپ‌ها">
                    <div className="sm:block hidden">
                        <ClassesTable data={group}/>
                    </div>
                    <div
                        className="sm:hidden flex flex-col max-h-[400px] overflow-y-auto scrollbar-hide py-6 px-4 rounded-lg bg-primary-50 border border-natural_gray-200 ">
                        <ClassesTableMobile data={group}/>
                    </div>
                </Tab>
                <Tab
                    key={'3'}
                    title="تعیین سطح">
                    <div className="sm:block hidden">
                        <ClassesTable data={placement}/>
                    </div>
                    <div
                        className="sm:hidden flex flex-col max-h-[400px] overflow-y-auto scrollbar-hide py-6 px-4 rounded-lg bg-primary-50 border border-natural_gray-200 ">
                        <ClassesTableMobile data={placement}/>
                    </div>
                </Tab>
            </Tabs>
        </>
    );
};

export default Classes;