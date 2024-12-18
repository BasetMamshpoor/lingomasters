import AboutBook from "../_components/Product/AboutBook";
import Banner from "../_components/Product/Banner";
import Comments from "components/Comments";
import Description from "../_components/Product/Description";
import Examples from "../_components/Product/Examples";
import Hero from "components/Hero";
import Sellers from "../_components/Product/Sellers";
import Tabs from "components/Tabs";
import Video from "../_components/Product/Video";
import useGetRequest from "@/hooks/useGetRequest";
import { useRouter } from "next/router";
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
const Product = () => {
    const { query } = useRouter()
    const { id } = query

    const [product] = useGetRequest(id ? `/product/show/${id}` : null)

    return (
        <>
            {product ? <main dir='rtl'>
                <Hero product={product} />
                <div className="container sm:px-10 grid lg:grid-cols-6 grid-cols-1 gap-6">
                    <div className="lg:col-span-2">
                        <Banner product={product} />
                    </div>
                    <div className="flex flex-col gap-10 lg:col-span-4">
                        <Tabs list={list} />
                        <Sellers sellers={product.sellers} />
                        <AboutBook product={product} />
                        <Description product={product} />
                        <Examples images={product?.sample_images} />
                        <Video movie={product?.video} image={product?.image} />
                        <Comments id={id} />
                    </div>
                </div>
            </main> : <div className="centerOfParent w-full min-h-64">درحال بارگزاری</div>}
        </>
    );
};

export default Product;