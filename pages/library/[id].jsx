import Comments from '@/components/Comments';
import Tabs from '@/components/Tabs';
import useGetRequest from '@/hooks/useGetRequest';
import React from 'react';
import Video from '@/features/private-class/Details/Video';
import Banner from '@/features/private-class/Details/Banner';
import {useRouter} from 'next/router';
import Hero from "@/features/Library/Hero";
import {Spinner} from "@heroui/react";
import AboutBook from "@/features/Library/AboutBook";
import Description from "@/features/Library/Description";
import Examples from "@/features/Library/Examples";
import ProfessorBook from "@/features/Library/ProfessorBook";

const list = [
    {
        n: 'پیش نمایش کتاب',
        id: 'preview'
    },
    {
        n: 'درباره کتاب',
        id: 'about'
    },
    {
        n: 'اساتید',
        id: 'professors'
    },
    {
        n: 'نمونه صفحات',
        id: 'examples'
    },
    {
        n: 'ویدیو',
        id: 'movie'
    },
    {
        n: 'نظرات',
        id: 'comments'
    },
]
const BookDetail = () => {
    const {query} = useRouter()
    const {id} = query

    const [product] = useGetRequest(true, id ? `/product/show/${id}` : null)

    return (
        <>
            {product ? <main dir='rtl' className="my-10">
                <Hero product={product}/>
                <div className="container sm:px-10 grid lg:grid-cols-6 grid-cols-1 gap-6">
                    <div className="lg:col-span-2">
                        <Banner product={product}/>
                    </div>
                    <div className="flex flex-col gap-10 lg:col-span-4">
                        <Tabs list={list}/>
                        <AboutBook product={product}/>
                        <Description product={product}/>
                        <ProfessorBook professors={product?.professors}/>
                        <Examples images={product?.sample_images}/>
                        <Video movie={product?.video} image={product?.image}/>
                        <Comments id={id} url="product"/>
                    </div>
                </div>
            </main> : <div className="centerOfParent w-full min-h-64"><Spinner color="success" label="در حال بارگزاری"/>
            </div>}
        </>
    );
};

export default BookDetail;