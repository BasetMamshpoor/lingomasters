'use client';
import Comments from '@/components/Comments';
import Hero from '@/features/group-class/Details/Hero';
import Tabs from '@/components/Tabs';
import useGetRequest from '@/hooks/useGetRequest';
import React from 'react';
import Resume from '@/features/group-class/Details/Resume';
import Banner from '@/features/group-class/Details/Banner';
import TeachingType from '@/features/group-class/Details/TeachingType';
import Books from '@/features/group-class/Details/Books';
import {useRouter} from 'next/router';
import About from '@/features/group-class/Details/About';
import Calendar from "@/features/group-class/Details/Calendar";
import Related from "@/features/group-class/Details/Related";

const list = [
    {
        n: 'درباره کلاس',
        id: 'about'
    },
    {
        n: 'استاد',
        id: 'resume'
    },
    {
        n: 'نوع کلاس',
        id: 'type'
    },
    {
        n: 'تقویم آموزشی',
        id: 'calendar'
    },
    {
        n: 'کتاب ها',
        id: 'books'
    },
    {
        n: 'نظرات',
        id: 'comments'
    },
]
const Professor = () => {
    const {query} = useRouter()
    const {id} = query

    const [data, set, setReload] = useGetRequest(true, id && `/group_reserve/show/${id}`)

    return (
        <>
            {data ? <main dir='rtl' className='my-4 container sm:px-10'>
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
                            professor_id: data.professor_id
                        }}/>
                        <TeachingType {...{
                            longitude: data.longitude,
                            latitude: data.latitude,
                            video: data.address_video,
                            city: data.address_city,
                            direction: data.address_direction
                        }}/>
                        <Calendar id={id}/>
                        <Books books={data.books}/>
                        <Comments id={id} url='group_reserve'/>
                    </div>
                </div>
                {!!data.related.length && <Related data={data.related}/>}
            </main> : <div className="centerOfParent w-full min-h-64">درحال بارگزاری</div>}
        </>
    );
};

export default Professor;