'use client';
import Comments from '@/components/Comments';
import Hero from '@/components/Hero';
import Tabs from '@/components/Tabs';
import useGetRequest from '@/hooks/useGetRequest';
import React from 'react';
import AboutProfessor from '../_components/Details/About';
import Video from '../_components/Details/Video';
import Calendar from '../_components/Details/Calendar';
import Banner from '../_components/Details/Banner';
import PointOfLerning from '../_components/Details/PointOfLerning';
import Skills from '../_components/Details/Skills';
import Stories from '../_components/Details/Stories';
import TeachingType from '../_components/Details/TeachingType';
import Books from '../_components/Details/Books';
import { useRouter } from 'next/router';

const list = [
    {
        n: 'درباره استاد',
        id: 'about'
    },
    {
        n: 'نمونه تدریس',
        id: 'movie'
    },
    {
        n: 'هدف',
        id: 'target'
    },
    {
        n: 'تقویم آموزشی',
        id: 'calendar'
    },
    {
        n: 'نوع تدریس',
        id: 'type'
    },
    {
        n: 'کتاب ها',
        id: 'books'
    },
    {
        n: 'تخصص ها',
        id: 'specialties'
    },
    {
        n: 'استوری آموزشی',
        id: 'stories'
    },
    {
        n: 'نظرات',
        id: 'comments'
    },
]
const Professor = () => {
    const { query } = useRouter()
    const { id } = query

    const [professor] = useGetRequest(1 ? `/professor/show/${id}` : null)

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
                        <Calendar />
                        <AboutProfessor data={professor.about} />
                        <Video movie='j' />
                        <PointOfLerning />
                        <TeachingType />
                        <Books />
                        <Skills />
                        <Stories />
                        <Comments id={1} />
                    </div>
                </div>
            </main> : <div className="centerOfParent w-full min-h-64">درحال بارگزاری</div>}
        </>
    );
};

export default Professor;