//icons
import Icon from '@icons/sellers.svg';
import { Card, CardBody, ScrollShadow, Tab, Tabs } from '@nextui-org/react';
import VideoIcon from '@icons/video.svg';
import User from '@icons/user-tick.svg';
import Video from 'components/Video/Card';


const AboutProfessor = ({ data = {} }) => {

    const { name, product_type, author, book_category, language, publication, Time_to_print, year_of_publication, subject, age_group, page_number, Volume_number, audio_file, video_file, image } = data

    return (
        <>
            <div className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-52" id='about'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Icon className='w-5 h-5' /></div>
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
                                    <VideoIcon className='sm:w-6 sm:h-6 w-5 h-5 fill-natural_gray-400' />
                                    <span className='sm:text-base text-sm text-natural_gray-800'>ویدیو</span>
                                </div>
                            }>
                            <Card className='shadow-none'>
                                <CardBody><Video movie='f' bgSrc='/images/video/bg.jfif' className='w-full'/></CardBody>
                            </Card>
                        </Tab>
                        <Tab key="text"
                            title={
                                <div className="flex items-center gap-2">
                                    <User className='sm:w-6 sm:h-6 w-5 h-5 fill-natural_gray-400' />
                                    <span className='sm:text-base text-sm text-natural_gray-800'>معرفی</span>
                                </div>
                            }>
                            <Card className='shadow-none'>
                                <CardBody>
                                    <ScrollShadow hideScrollBar className="w-full h-[324px]">
                                        <p className="text-justify">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                                            را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
                                            نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                            از صنعت چاپ، و با استفاده از طر
                                            احان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و بر
                                            ای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                                            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی م
                                            ی باشد، کتابهای زیادی در شصت و سه درص
                                            د گذشته حال و آینده، شنا
                                            خت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخص

                                            وص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید دا
                                            شت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                        </p>
                                    </ScrollShadow>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
                <div className="flex sm:flex-row flex-col-reverse sm:items-start items-stretch sm:gap-0 gap-4 justify-between">
                    <ul className="flex flex-col gap-4 grow">
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>تدریس برای</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>نوع تدریس</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>گروه سنی</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>سطح زبان</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>زبان</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>کشور</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>شهر</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>منطقه</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>میزان حضور استاد</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>تعداد زبان آموز</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>نزدیک ترین زمان قبول کلاس</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>تعداد وبینار برگزار شده</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>تعداد ورکشاپ های برگزار شده</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>تعداد کلاس های گروهی برگزار شده</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-3 flex items-center gap-2">
                                <span className='text-natural_gray-950'>تعداد کلاس های خصوصی برگزار شده</span>
                            </div>
                            <span className="col-span-2 text-right">{name}</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AboutProfessor;