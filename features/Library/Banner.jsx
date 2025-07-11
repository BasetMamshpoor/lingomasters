//icons
import Left from '@icons/arrow-left.svg'
import Cart from '@icons/cart.svg';
import Minus from '@icons/minus.svg';
import Plus from '@icons/plus.svg';
import Right from '@icons/chevron-right.svg'
import Trush from "@icons/bin.svg";

import Image from 'next/image';
import Link from 'next/link';
import {addToast, BreadcrumbItem, Breadcrumbs} from "@heroui/react";
import formatCurrency from '@/helpers/formatCurrency';
import {useContext} from 'react';
import Like from "@/components/Like";
import Rate from "@/components/Rate";
import Share from "@/components/Share";
import {useRouter} from "next/router";


const Banner = ({product = {}}) => {
    const {back} = useRouter()
    const {
        title,
        id, rate_count,
        sellers, average_rate,
        category,
        category_slug,
        image, min_price, max_price,
        page_number, is_like,
        off_price, language,
        price, flag,
        is_download, rate,
        selected_seller, quantity
    } = product

    return (
        <>
            <div className="lg:hidden flex flex-col">
                <div className="py-3">
                    <Breadcrumbs
                        separator='/'
                        classNames={{list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600'}}
                        itemClasses={{
                            separator: "px-2 text-natural_gray-600"
                        }}>
                        <BreadcrumbItem
                            className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'
                            href="/">صفحه اصلی</BreadcrumbItem>
                        <BreadcrumbItem
                            className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'
                            href={`/category/${category_slug}`}>{category}</BreadcrumbItem>
                        <BreadcrumbItem
                            className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'>{title}</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <div className="py-3 flex items-center gap-2 cursor-pointer" onClick={back}>
                    <div className="centerOfParent"><Right className='fill-primary-600'/></div>
                    <span className='sm:text-base text-sm font-semibold'>بازگشت</span>
                </div>
            </div>
            <div className="flex flex-col items-stretch gap-9">
                <div className="flex flex-col gap-10 sm:p-4 px-3 py-4 bg-white border border-neutral-100 rounded-lg">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center lg:justify-end justify-between">
                            <div className="lg:hidden flex items-center gap-6">
                                <Like isLike={is_like} url='/product' id={id}/>
                                <Share title={title}/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="centerOfParent max-w-[148px] mx-auto w-full h-auto flex-shrink-0">
                                <Image
                                    src={image}
                                    alt={title}
                                    width={0}
                                    height={0} sizes='100vw'
                                    className='w-full h-full object-contain'/>
                            </div>
                            <div className="centerOfParent flex-col gap-1 w-full">
                                <h1 className='sm:text-xl text-base font-semibold'>{title}</h1>
                                <p className='lg:hidden text-natural_gray-600 text-xs'>(کد کتاب: {id})</p>
                                <div className="lg:hidden centerOfParent">
                                    <Image src={flag} width={24} height={24}
                                           alt={language}/></div>
                                <div className="lg:hidden flex items-center gap-1">
                                    <Rate rate={rate} id={id} url="/product"/>
                                    <div className="flex items-center gap-2">
                                        <span className='text-natural_gray-950 text-xs'>{average_rate}</span>
                                        <span className='text-neutral-700 text-[10px]'>از {rate_count} نفر</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch gap-3">
                                <div className="h-8 flex items-center justify-between bg-natural_gray-50 px-3">
                                    <span className='text-natural_gray-900 sm:text-xs text-[10px]'>تعداد جلد</span>
                                    <span className='sm:text-sm text-xs'>{page_number}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href={`https://store.lingomasters.ir/product/${id}`}
                          className="effect-2 disabled:opacity-50 bg-primary-600 p-2 text-sm text-white rounded centerOfParent gap-2 ">
                        <Cart className='sm:w-6 sm:h-6 w-4 h-4 fill-white'/>
                        <span className='sm:text-base text-xs'>خرید محصول</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Banner;