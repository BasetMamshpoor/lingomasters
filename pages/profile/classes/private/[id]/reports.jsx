import React from 'react';
import {useRouter} from "next/router";
import ReportTabs from "@/features/profile/classes/ReportTabs";
import PrivateTable from "@/features/profile/classes/PrivateTable";

const Reports = () => {
    const {back, query} = useRouter()

    return (
        <>
            <div className="flex flex-col gap-12">
                <ReportTabs/>
                <div className="flex flex-col gap-6">
                    <p className="font-bold text-primary-950">گزارش عملکرد در تمامی جلساتی که تاکنون خریداری شده</p>
                    <PrivateTable/>
                </div>
            </div>
        </>
    );
};

export default Reports;