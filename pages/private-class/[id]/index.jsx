import Comments from '@/components/Comments';
import Hero from '../../../features/private-class/Hero';
import Tabs from '@/components/Tabs';
import useGetRequest from '@/hooks/useGetRequest';
import React from 'react';
import AboutProfessor from '@/features/private-class/Details/About';
import Video from '@/features/private-class/Details/Video';
import Calendar from '@/features/private-class/Details/Calendar';
import Banner from '@/features/private-class/Details/Banner';
import PointOfLerning from '@/features/private-class/Details/PointOfLerning';
import Skills from '@/features/private-class/Details/Skills';
import Stories from '@/features/private-class/Details/Stories';
import TeachingType from '@/features/private-class/Details/TeachingType';
import Books from '@/features/private-class/Details/Books';
import {useRouter} from 'next/router';
import Related from "@/features/private-class/Details/Related";

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
    const router = useRouter()
    const {id, language} = router.query
    const [professor] = useGetRequest(true, id ? `/private-reserve/show/${id}${language ? `?language=${language}` : ''}` : null)


    return (
        <>
            {professor ? <main dir='rtl' className='my-4 container sm:px-10'>
                <Hero data={professor.about} id={professor.id}/>
                <div className="grid lg:grid-cols-6 grid-cols-1 gap-6">
                    <div className="lg:col-span-2">
                        <Banner data={professor}/>
                    </div>
                    <div className="flex flex-col gap-10 lg:col-span-4">
                        <Tabs list={list}/>
                        <AboutProfessor data={professor.about}/>
                        <Video movie={professor.teaching_example_video} image={professor.teaching_example_cover}/>
                        <PointOfLerning data={professor.point}/>
                        <Calendar id={id}/>
                        <TeachingType data={professor}/>
                        <Books data={professor.books || []}/>
                        <Skills data={professor.skills}/>
                        <Stories data={professor.story}/>
                        <Comments id={id} url='private-reserve'/>
                    </div>
                </div>
                {!!professor.related?.length && <Related data={professor.related}/>}
            </main> : <div className="centerOfParent w-full min-h-64">درحال بارگزاری</div>}
        </>
    );
};

export default Professor;