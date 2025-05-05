'use client';
import Comments from '@/components/Comments';
import Hero from '@/features/workshop/Details/Hero';
import Tabs from '@/components/Tabs';
import useGetRequest from '@/hooks/useGetRequest';
import React from 'react';
import Resume from '@/features/workshop/Details/Resume';
import Banner from '@/features/workshop/Details/Banner';
import Books from '@/features/webinar/Details/Books';
import {useRouter} from 'next/router';
import About from '@/features/workshop/Details/About';
import Headlines from "@/features/webinar/Details/Headlines";
import Related from "@/features/workshop/Details/Related";
import TeachingType from "@/features/workshop/Details/TeachingType";
import Calendar from "@/features/webinar/Details/Calendar";

const list = [
    {
        n: 'مشخصات',
        id: 'about'
    },
    {
        n: 'استاد',
        id: 'movie'
    },
    {
        n: 'سرفصل ها',
        id: 'target'
    },
    {
        n: 'تقویم',
        id: 'calendar'
    },
    {
        n: 'محل برگزاری',
        id: 'books'
    },
    {
        n: 'نظرات',
        id: 'comments'
    },
]
const Webinar = () => {
    const {query} = useRouter()
    const {id} = query

    const [data, set, setReload] = useGetRequest(false, id && `/workshop-reserve/show/${id}`)

    return (
        <>
            {data ? <main dir='rtl' className='my-4 container sm:px-10 '>
                <Hero product={data}/>
                <div className="grid lg:grid-cols-6 grid-cols-1 gap-6">
                    <div className="lg:col-span-2">
                        <Banner setReload={setReload} data={data}/>
                    </div>
                    <div className="flex flex-col gap-10 lg:col-span-4">
                        <Tabs list={list}/>
                        <About data={data}/>
                        <Resume {...{
                            professor: data.professor,
                            profile: data.professor_profile,
                            professor_id: data.professor_id,
                            skills: data.skills
                        }}/>
                        <Headlines data={data.headline}/>
                        <Calendar date={data.start_date} time={data.time}/>
                        <Books books={data.books}/>
                        <TeachingType {...{
                            longitude: data.longitude,
                            latitude: data.latitude,
                            video: data.video,
                            city: data.city,
                            direction: data.region
                        }}/>
                        <Comments id={id} url='workshop-reserve'/>
                    </div>
                </div>
                {!!data.related.length && <Related data={data.related} title='ورکشاپ های مشابه'/>}
                {!!data.last_workshop.length &&
                    <Related data={data.last_workshop} title='ورکشاپ های برگزار شده استاد'/>}
            </main> : <div className="centerOfParent w-full min-h-64">درحال بارگزاری</div>}
        </>
    );
};

export default Webinar;