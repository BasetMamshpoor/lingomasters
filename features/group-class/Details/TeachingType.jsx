import React from 'react';
import {
    Tabs,
    Tab,
    Card,
    CardBody,
} from "@heroui/react";

import User from '@icons/laptop.svg';
import Button from '@icons/button-icon.svg';
import MapModal from "@/components/MapModal";

const TeachingType = ({latitude, longitude, video, city, direction}) => {
    return (
        <>
            <div className="p-4 flex flex-col gap-4 bg-white border border-natural_gray-50 rounded-lg withYellowCircel scroll-m-52"
                 id="type">
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><User className='w-5 h-5'/></div>
                    <span className='sm:text-base text-sm text-primary-950'>نوع تدریس</span>
                </div>
                <div className="flex w-full flex-col">
                    <Tabs
                        classNames={{
                            tab: 'py-6',
                            tabContent: '[&>span]:text-sm',
                            panel: 'py-0 [&>div]:shadow-none',
                            tabList: 'pb-0 border-b !gap-0',
                            cursor: 'w-full'
                        }}
                        aria-label="Options"
                        variant="underlined"
                    >
                        <Tab key="offline" title="حضوری">
                            <Card>
                                <CardBody className="text-right text-sm">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span
                                            className='py-1 px-3 text-center rounded-md bg-primary-50 text-xs text-natural_gray-800'>{city}</span>
                                        <span
                                            className='py-1 px-3 text-center rounded-md bg-primary-50 text-xs text-natural_gray-800'>مناطق ({direction})</span>
                                    </div>
                                    <ul className="space-y-4 text-xs sm:text-sm lg:text-base">
                                        <li className='flex lg:flex-row flex-col lg:items-center justify-between gap-2 w-full'>
                                            <div className="flex sm:flex-row flex-col lg:items-center gap-2">
                                                <span>حضوری در آموزشگاه</span>
                                                <a target='_blank' href={video} className='text-primary-900'>(دانلود
                                                    ویدیو محیط آموزشگاه)</a>
                                            </div>
                                            <MapModal location={[latitude, longitude]}/>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default TeachingType;