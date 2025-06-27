import React from 'react';
import {Avatar, Tab, Tabs} from "@heroui/react";
import User from "@icons/user-tick.svg";
import Mic from "@icons/microphone.svg";
import Chat from "@icons/chat-alt.svg";
import Video from "@icons/video.svg";
import BaseSlider from "@/features/Landing/BaseSlider";
import SoundPlayer from "@/features/exams/SoundPlayer";
import Card from "@/components/Video/Card";


const textData = [
    {
        avatar: '/Comments/aryan.jpg',
        name: 'آریان تلاج',
        comment: "تو پلتفرم لینگومسترز، اساتید و دوره های زبان بسیار متنوع واسه همه سطوح و همه گروه های سنی رو با شهریه های خیلی مناسب با چند تا کلیک‌ به راحتی میشه پیدا کرد!",
    },
    {
        avatar: '/Comments/baset.jpg',
        name: 'باسط ماموشی پور',
        comment: "لینگومسترز خدماتی رو به زبان آموزان و اولیا به شکلی بسیار متمایز ارائه میکنه و به این شکل تو وقت و انرژی و هزینه ها بسیار صرفه جویی میشه همه چی به شکلی باور نکردنی به بهترین شکل ممکن لحاظ شده هر چیزی که یه زبان آموز بهش نیاز داره!",
    },
    {
        avatar: '/Comments/naser.jpg',
        name: 'ناصر محمودی',
        comment: "کیفیت آموزش توی کلاس‌های زبان لینگومسترز واقعاً بالاست! این همه خدمات رو یه جا واقعاً هیچ جای دیگه نمیشه پیدا کرد.",
    },
];
const audioData = [
    {
        avatar: '/Comments/V_1.jpg',
        name: 'مهناز عیشی',
        url: '/Comments/audio_1.ogg',
    },
    {
        avatar: '/Comments/V_2.jpg',
        name: 'گلناز عباسی',
        url: '/Comments/audio_2.ogg',
    },
    {
        avatar: '/Comments/V_3.jpg',
        name: 'ساناز فیضی',
        url: '/Comments/audio_3.ogg',
    },
];
const videoData = [
    {
        bg: '/Comments/video_1_Moment.jpg',
        name: 'کوثر شمس',
        video: '/Comments/video_1.mp4',
    },
    {
        bg: '/Comments/video_2_Moment.jpg',
        name: 'فاطمه قلی زاده',
        video: '/Comments/video_2.mp4',
    },
    {
        bg: '/Comments/video_3_Moment.jpg',
        name: 'مهسا مترجمی',
        video: '/Comments/video_3.mp4',
    },
]

const Comments = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-6 w-full mt-10">
                <div className="centerOfParent gap-6 text-2xl">
                    <Chat className="w-8 h-8 fill-primary-700"/>
                    رضایت زبان آموزان
                </div>
                <div className="flex flex-col items-center gap-14 w-full">
                    <Tabs aria-label="Options"
                          variant='underlined'
                          defaultSelectedKey="text"
                          classNames={{
                              tabList: "sm:gap-6 relative border-b pb-0 border-natural_gray-200",
                              cursor: "w-full bg-primary-950 h-px",
                              tab: "max-w-fit sm:px-6 h-14",
                              tabContent: "group-data-[selected=true]:[&>div>span]:text-primary-800 group-data-[selected=true]:[&>div>svg]:fill-primary-950",
                              panel: 'w-full flex flex-col items-center gap-6'
                          }}>
                        <Tab
                            key="audio"
                            title={
                                <div className="flex items-center gap-2">
                                    <Mic className='sm:w-6 sm:h-6 w-5 h-5 fill-natural_gray-400'/>
                                    <span className='sm:text-base text-sm text-natural_gray-900'>صوتی</span>
                                </div>
                            }>
                            <BaseSlider
                                data={audioData}
                                renderItem={(item) => (
                                    <div className="flex flex-col gap-6 items-center lg:w-[500px]">
                                        <Avatar showFallback={true} src={item.avatar} className="w-32 h-32 text-large"/>
                                        <div className="flex flex-col items-center gap-4 lg:w-2/3 w-full" dir="ltr">
                                            <span>{item.name}</span>
                                            <SoundPlayer audio_url={item.url}/>
                                        </div>
                                    </div>
                                )}
                            />
                        < /Tab>
                        <Tab
                            key="text"
                            title={
                                <div className="flex items-center gap-2">
                                    <User className='sm:w-6 sm:h-6 w-5 h-5 fill-natural_gray-400'/>
                                    <span className='sm:text-base text-sm text-natural_gray-900'>متنی</span>
                                </div>
                            }>
                            <BaseSlider
                                data={textData}
                                renderItem={(item) => (
                                    <div className="flex flex-col gap-6 items-center lg:w-[500px]">
                                        <Avatar src={item.avatar} className="w-32 h-32 text-large"/>
                                        <div className="flex flex-col items-center gap-4">
                                            <span>{item.name}</span>
                                            <p className="text-center">{item.comment}</p>
                                        </div>
                                    </div>
                                )}
                            />
                        </Tab>
                        <Tab
                            key="video"
                            title={
                                <div className="flex items-center gap-2">
                                    <Video className='sm:w-6 sm:h-6 w-5 h-5 fill-natural_gray-400'/>
                                    <span className='sm:text-base text-sm text-natural_gray-900'>ویدیویی</span>
                                </div>
                            }>
                            <BaseSlider
                                data={videoData}
                                renderItem={(item) => (
                                    <div className="flex flex-col gap-6 items-center lg:w-[500px]">
                                        <div className="centerOfParent rounded-full w-40 h-auto">
                                            <Card movie={item.video} bgSrc={item.bg}/>
                                        </div>
                                        <span>{item.name}</span>
                                    </div>
                                )}
                            />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default Comments;