import React from 'react';
import {Tab, Tabs} from "@heroui/react";
import SessionChart from "@/features/profile/classes/SessionChart";
import WeeklyChart from "@/features/profile/classes/WeeklyChart";
import MonthlyChart from "@/features/profile/classes/MonthlyChart";
import YearlyChart from "@/features/profile/classes/YearlyChart";

const IncomeTabs = () => {
    return (
        <div className="flex flex-col gap-4">
            <Tabs
                aria-label="Tabs variants"
                variant='underlined'
                fullWidth
                classNames={{
                    tabList: 'border-b pb-0 gap-2 w-full',
                    cursor: "shadow-none w-full",
                    tabContent: 'w-full sm:text-sm text-xs',
                    tab: "py-4 h-fit",
                    panel: 'w-full'
                }}
                style={{
                    "--heroui-success": "38 87% 56%",
                }}
                color='success'>
                <Tab
                    title={'جلسه ای'}
                    key={'session'}>
                    <SessionChart/>
                </Tab>
                <Tab
                    title={'هفتگی'}
                    key={'weekly'}>
                    <WeeklyChart/>
                </Tab>
                <Tab
                    title={'ماهانه'}
                    key={'monthly'}>
                    <MonthlyChart/>
                </Tab>
                <Tab
                    title={'سالانه'}
                    key={'yearly'}>
                    <YearlyChart/>
                </Tab>
            </Tabs>
        </div>
    );
};

export default IncomeTabs;