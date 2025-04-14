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
                    <span className='sm:text-base text-sm text-primary-950'>مشخصات</span>
                </div>
                <div
                    className="flex sm:flex-row flex-col-reverse sm:items-start items-stretch sm:gap-0 gap-4 justify-between">
                    <ul className="flex flex-col gap-4 grow">
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <span className='text-natural_gray-950'>نوع</span>
                            <span className="col-span-3 text-right">وبینار</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <span className='text-natural_gray-950'>موضوع</span>
                            <span className="col-span-3 text-right">{data.subject}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <span className='text-natural_gray-950'>پلتفرم برگزاری</span>
                            <span className="col-span-3 text-right">{data.platform}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <span className='text-natural_gray-950'>زبان</span>
                            <span className="col-span-3 text-right">{data.language}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <span className='text-natural_gray-950'>سطح</span>
                            <span className="col-span-3 text-right">{data.level}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <span className='text-natural_gray-950'>گروه سنی</span>
                            <span className="col-span-3 text-right">{data.ageGroup}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <span className='text-natural_gray-950'>نوع کلاس</span>
                            <span className="col-span-3 text-right ">آنلاین</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <span className='text-natural_gray-950'>ساعت</span>
                            <span className="col-span-3 text-right">{data.schedules}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <span className='text-natural_gray-950'>تاریخ</span>
                            <span className="col-span-3 text-right">{new Date(data.date)?.toLocaleString('fa-IR', {
                                weekday: 'long',
                                month: 'long',
                                day: '2-digit'
                            })}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default About;