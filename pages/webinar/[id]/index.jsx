'use client';
import Comments from '@/components/Comments';
import Hero from '../_components/Details/Hero';
import Tabs from '@/components/Tabs';
import useGetRequest from '@/hooks/useGetRequest';
import React from 'react';
import Resume from '../_components/Details/Resume';
import Banner from '../_components/Details/Banner';
import Books from '../_components/Details/Books';
import {useRouter} from 'next/router';
import About from '../_components/Details/About';
import Calendar from "../_components/Details/Calendar";
import Headlines from "@/pages/webinar/_components/Details/Headlines";
import Related from "../_components/Details/Related";

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

    const [data, set, setReload] = useGetRequest(true, id && `/webinar-reserve/show/${id}`)

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
                            professor_id: data.professor_id
                        }}/>
                        <Headlines/>
                        <Calendar/>
                        <Books books={data.books}/>
                        <Comments id={id} url='webinar-reserve'/>
                    </div>
                </div>
                {!!data.related.length && <Related data={data.related} title='وبینار های مشابه'/>}
                {/*{!!data.related.length && <Related data={data.related} title='وبینار‌های برگزار شده استاد'/>}*/}
            </main> : <div className="centerOfParent w-full min-h-64">درحال بارگزاری</div>}
        </>
    );
};

export default Webinar;