import React from "react";
import useGetRequest from "@/hooks/useGetRequest";
import NearestClass from "@/features/profile/dashboard/NearestClass";
import AwaitingCorrection from "@/features/profile/dashboard/AwaitingCorrection";
import AwaitingCorrectionMobile from "@/features/profile/dashboard/AwaitingCorrectionMobile";
import Group from "@icons/group-profile.svg"
import Group1 from "@icons/group-profile1.svg"
import Group2 from "@icons/group-profile2.svg"
import Table from "@/features/profile/dashboard/Table";

export default function Home() {
    const [data] = useGetRequest(true, '/student/dashboard')
    return (
        data && <>
            <div className="flex flex-col gap-14">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
                    <div className="relative flex flex-col gap-4 p-6 bg-primary-200 rounded-xl">
                        <Group className="absolute top-0 bottom-0 right-0 left-0 w-full h-full "/>
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-sm md:text-base font-bold">تعداد کلاس‌های من</p>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-xs md:text-sm">وبینارها</p>
                                <p className="text-xs md:text-sm">{data.webinar_count}</p>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-xs md:text-sm">ورکشاپ‌ها</p>
                                <p className="text-xs md:text-sm">{data.workshop_count}</p>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-xs md:text-sm">کلاس‌های گروهی</p>
                                <p className="text-xs md:text-sm">{data.group_count}</p>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-xs md:text-sm">کلاس‌های خصوصی</p>
                                <p className="text-xs md:text-sm">{data.private_count}</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-4 p-6 bg-secondary-100 rounded-xl">
                        <Group1 className="absolute top-0 bottom-0 right-0 left-0 w-full h-full "/>
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-sm md:text-base font-bold">تعداد آزمون‌های من</p>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-xs md:text-sm">آزمون پلاس</p>
                                <p className="text-xs md:text-sm">{data.exam_count}</p>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-xs md:text-sm">آزمون پرداخت</p>
                                <p className="text-xs md:text-sm">{data.exam_payment_count}</p>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-xs md:text-sm">آزمون تعیین سطح</p>
                                <p className="text-xs md:text-sm">{data.exam_placement_count}</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-4 p-6 bg-success-100 rounded-xl flex-grow">
                        <Group2 className="absolute top-0 bottom-0 right-0 left-0 w-full h-full "/>
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-sm md:text-base font-bold">تعداد کتاب‌های من</p>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-xs md:text-sm">کتاب‌های دانلود شده</p>
                                <p className="text-xs md:text-sm">2</p>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-xs md:text-sm">کتاب‌های خریداری شده</p>
                                <p className="text-xs md:text-sm">3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-5 gap-4">
                    {data.near_private &&
                        <NearestClass head="کلاس خصوصی" isPrivate link={`/students/${data?.student?.id}`} {...data.near_private}/>}
                    {data.near_group &&
                        <NearestClass head="کلاس گروهی" link={`/students/${data?.student?.id}`} {...data.near_group}/>}
                    {data.near_webinar &&
                        <NearestClass head="وبینار" link={`/students/${data?.student?.id}`} {...data.near_webinar}/>}
                    {data.near_work_shop &&
                        <NearestClass head="ورکشاپ" link={`/students/${data?.student?.id}`} {...data.near_work_shop}/>}
                </div>
                <div className="flex flex-col gap-6">
                    <p className='text-primary-950 font-semibold sm:text-base text-sm'>تکالیف و تمرین ها</p>
                    <div className="sm:block hidden">
                        <AwaitingCorrection data={data.report}/>
                    </div>
                    <div
                        className="sm:hidden flex flex-col max-h-[400px] overflow-y-auto scrollbar-hide py-6 px-4 rounded-lg bg-primary-50 border border-natural_gray-200 ">
                        {data.report.map((item, i) => <AwaitingCorrectionMobile key={i} {...item} index={i}/>)}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className='text-primary-950 font-semibold sm:text-base text-sm'>کلاس‌ها</p>
                    <div
                        className="flex flex-col px-4 py-6 bg-natural_gray-50 border-2 border-natural_gray-200 rounded-xl ">
                        <Table data={data.classes}/>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <p className='text-primary-950 font-semibold sm:text-base text-sm'>وبینارها و ورکشاپ‌ها</p>
                    <div
                        className="flex flex-col px-4 py-6 bg-natural_gray-50 border-2 border-natural_gray-200 rounded-xl ">
                        <Table data={data.web}/>
                    </div>
                </div>
            </div>
        </>
    );
}