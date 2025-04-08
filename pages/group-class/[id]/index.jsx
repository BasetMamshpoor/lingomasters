'use client';
import Comments from '@/components/Comments';
import Hero from '@/components/Hero';
import Tabs from '@/components/Tabs';
import useGetRequest from '@/hooks/useGetRequest';
import React from 'react';
import Resume from '../_components/Details/Resume';
import Banner from '../_components/Details/Banner';
import TeachingType from '../_components/Details/TeachingType';
import Books from '../_components/Details/Books';
import { useRouter } from 'next/router';
import About from '../_components/Details/About';

const list = [
    {
        n: 'درباره کلاس',
        id: 'about'
    },
    {
        n: 'استاد',
        id: 'movie'
    },
    {
        n: 'نوع کلاس',
        id: 'target'
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
    const { query } = useRouter()
    const { id } = query

    const [professor] = useGetRequest(false,1 ? `/professor/show/${id}` : null)

    return (
        <>
            {professor ? <main dir='rtl' className='my-4'>
                <Hero product={professor} />
                <div className="container sm:px-10 grid lg:grid-cols-6 grid-cols-1 gap-6">
                    <div className="lg:col-span-2">
                        <Banner data={professor} />
                    </div>
                    <div className="flex flex-col gap-10 lg:col-span-4">
                        <Tabs list={list} />
                        <About data={professor.about} />
                        <Resume />
                        <TeachingType />
                        <Books />
                        <Comments id={1} />
                    </div>
                </div>
            </main> : <div className="centerOfParent w-full min-h-64">درحال بارگزاری</div>}
        </>
    );
};

export default Professor;