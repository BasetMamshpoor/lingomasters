import History from '@icons/history.svg';
import Map from '@icons/button-icon.svg';
import Flag from '@icons/Flags/Country=United States of America, Style=Flag, Radius=On.svg'
import Person from '@icons/user-add.svg';
import Star from '@icons/ranking.svg';
import Age from '@icons/growth.svg';
import Clock from '@icons/clock.svg';
import Calendar from '@icons/calendar.svg';
import Alt from '@icons/file.svg';
import getPersianDateRange from "@/helpers/getPersianDateRange";


const About = ({data = {}}) => {


    return (
        <>
            <div
                className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-52"
                id='about'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Alt className='w-5 h-5 fill-primary-800'/></div>
                    <span className='sm:text-base text-sm text-primary-950'>درباره کلاس</span>
                </div>
                <div
                    className="flex sm:flex-row flex-col-reverse sm:items-start items-stretch sm:gap-0 gap-4 justify-between">
                    <ul className="flex flex-col gap-4 grow">
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Flag
                                    className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800'/></div>
                                <span className='text-natural_gray-950'>زبان</span>
                            </div>
                            <span className="col-span-3 text-right">{data.language}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Person
                                    className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800'/></div>
                                <span className='text-natural_gray-950'>ظرفیت</span>
                            </div>
                            <span className="col-span-3 text-right">{data.max_capacity} نفر</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Age
                                    className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800'/></div>
                                <span className='text-natural_gray-950'>گروه سنی</span>
                            </div>
                            <span className="col-span-3 text-right">{data.ageGroup}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Star
                                    className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800'/></div>
                                <span className='text-natural_gray-950'>سطح دوره</span>
                            </div>
                            <span className="col-span-3 text-right">{data.level}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><History
                                    className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800'/></div>
                                <span className='text-natural_gray-950'>مدت زمان دوره</span>
                            </div>
                            <span className="col-span-3 text-right ">{data.sessions_count} جلسه</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Map
                                    className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800'/></div>
                                <span className='text-natural_gray-950'>موقعیت</span>
                            </div>
                            <span className="col-span-3 text-right">{data.address}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Clock
                                    className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800'/></div>
                                <span className='text-natural_gray-950'>روز/ساعت</span>
                            </div>
                            <span className="col-span-3 text-right">{data.schedules}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Calendar
                                    className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800'/></div>
                                <span className='text-natural_gray-950'>تاریخ</span>
                            </div>
                            <span className="col-span-3 text-right sm:block hidden">{getPersianDateRange(data.start_date,data.end_date,10)}</span>
                            <span className="col-span-3 text-right sm:hidden">{getPersianDateRange(data.start_date,data.end_date)}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default About;