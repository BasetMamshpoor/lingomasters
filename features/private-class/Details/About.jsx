//icons
import Icon from '@icons/sellers.svg';
import {Card, CardBody, ScrollShadow, Tab, Tabs} from "@heroui/react";
import VideoIcon from '@icons/video.svg';
import User from '@icons/user-tick.svg';
import Video from '@/components/Video/Card';


const AboutProfessor = ({data = {}}) => {

    const {
        about_text,
        about_video,
        cover,
        genders,
        region,
        city,
        country,
        languages,
        language_levels,
        teaching_types,
        age_groups,
        attendance,
        students_count,
        closest_time,
        webinars_count,
        workshops_count,
        group_classes_count,
        private_classes_count
    } = data

    return (
        <>
            <div
                className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-52"
                id='about'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Icon className='w-5 h-5'/></div>
                    <span className='sm:text-base text-sm text-primary-950'>درباره استاد</span>
                </div>
                <div className="flex flex-col gap-3">
                    <Tabs aria-label="Options"
                          variant='underlined'
                          classNames={{
                              tabList: "sm:gap-6 relative",
                              cursor: "w-full bg-primary-800 h-px",
                              tab: "max-w-fit sm:px-4 h-12",
                              tabContent: "group-data-[selected=true]:[&>div>span]:text-primary-800 group-data-[selected=true]:[&>div>svg]:fill-primary-800"
                          }}>
                        <Tab key="video"
                             title={
                                 <div className="flex items-center gap-2">
                                     <VideoIcon className='sm:w-6 sm:h-6 w-5 h-5 fill-natural_gray-400'/>
                                     <span className='sm:text-base text-sm text-natural_gray-800'>ویدیو</span>
                                 </div>
                             }>
                            <Card className='shadow-none'>
                                <CardBody><Video movie={about_video} bgSrc={cover} className='w-full'/></CardBody>
                            </Card>
                        </Tab>
                        <Tab key="text"
                             title={
                                 <div className="flex items-center gap-2">
                                     <User className='sm:w-6 sm:h-6 w-5 h-5 fill-natural_gray-400'/>
                                     <span className='sm:text-base text-sm text-natural_gray-800'>معرفی</span>
                                 </div>
                             }>
                            <Card className='shadow-none'>
                                <CardBody>
                                    <ScrollShadow hideScrollBar className="w-full h-[324px]">
                                        <p className="text-justify whitespace-pre-line">{about_text}</p>
                                    </ScrollShadow>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
                <div
                    className="flex sm:flex-row flex-col-reverse sm:items-start items-stretch sm:gap-0 gap-4 justify-between">
                    <ul className="flex flex-col gap-4 grow">
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>تدریس برای</span>
                            </div>
                            <span className="col-span-2 text-right">{!!genders?.length && genders.join(' | ')}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>نوع تدریس</span>
                            </div>
                            <span
                                className="col-span-2 text-right">{!!teaching_types?.length && teaching_types.join(' | ')}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>گروه سنی</span>
                            </div>
                            <span
                                className="col-span-2 text-right">{!!age_groups?.length && age_groups.join(' | ')}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>سطح زبان</span>
                            </div>
                            <span
                                className="col-span-2 text-right">{!!language_levels?.length && language_levels.join(' | ')}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>زبان</span>
                            </div>
                            <span className="col-span-2 text-right">{!!languages?.length && languages.map(lang => lang.title).join(' | ')}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>کشور</span>
                            </div>
                            <span className="col-span-2 text-right">{country}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>شهر</span>
                            </div>
                            <span className="col-span-2 text-right">{city}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>منطقه</span>
                            </div>
                            <span className="col-span-2 text-right">{region}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>میزان حضور استاد</span>
                            </div>
                            <span className="col-span-2 text-right">{attendance}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>تعداد زبان آموز</span>
                            </div>
                            <span className="col-span-2 text-right">{students_count}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>نزدیک ترین زمان قبول کلاس</span>
                            </div>
                            <span className="col-span-2 text-right">{closest_time}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>تعداد وبینار برگزار شده</span>
                            </div>
                            <span className="col-span-2 text-right">{webinars_count}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>تعداد ورکشاپ های برگزار شده</span>
                            </div>
                            <span className="col-span-2 text-right">{workshops_count}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>تعداد کلاس های گروهی برگزار شده</span>
                            </div>
                            <span className="col-span-2 text-right">{group_classes_count}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>تعداد کلاس های خصوصی برگزار شده</span>
                            </div>
                            <span className="col-span-2 text-right">{private_classes_count}</span>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
};

export default AboutProfessor;