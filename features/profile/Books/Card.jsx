import React from 'react';
import England from "@icons/Flags/Country=Iran, Style=Flag, Radius=On.svg";
import Image from "next/image";
import {Chip} from "@heroui/react";
import Link from "next/link";
import Heart from "@icons/heart.svg";
import Cart from "@icons/cart.svg";

const Card = () => {
    // const FinalAmount = price - (price * discount / 100)
    return (
        <>
            <div dir="rtl"
                 className="relative flex flex-col justify-between p-3 md:p-6 gap-4 border border-gray-100 rounded-lg max-w-[338px] overflow-hidden">
                <England className="absolute top-4 right-4"/>
                <div className="w-full flex mt-0 justify-center">
                    <Image src="/images/product.png" alt="swiper" width={140} height={140} className="w-full"/>
                </div>
                <div className="flex flex-col gap-6 lg:gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <p className="text-sm md:text-lg lg:text-xl">طلسم مکالمه</p>
                                <Heart/>
                            </div>
                            {/*<Chip className="text-xs md:text-base text-primary-950 bg-primary-100">چاپی</Chip>*/}
                            <Chip className="text-xs md:text-base text-primary-950 bg-primary-100">دانلودی</Chip>
                        </div>
                        <div className="flex justify-end gap-4 w-full">
                            <p className="flex items-center justify-center px-3 py-1 text-rose-600 bg-rose-50 rounded-lg text-xs md:text-lg">20%</p>
                            <del className="text-xs md:text-base text-natural_gray-400 hasToman">{(2000000).toLocaleString()}</del>
                        </div>
                        <div className="flex justify-end gap-4 w-full">
                            <p className="text-sm md:text-2xl text-primary-700 hasToman">{(1600000).toLocaleString()}</p>
                        </div>
                    </div>
                    {/*<Link href="/"*/}
                    {/*      className="flex items-center justify-center text-xs md:text-base w-full py-3 border-1.5 border-secondary-500 rounded-md text-secondary-500">*/}
                    {/*    جزئیات*/}
                    {/*</Link>*/}
                    {/*<div className="flex items-center gap-3 md:gap-6">*/}
                    {/*    <Link href="/"*/}
                    {/*          className="flex items-center justify-center text-xs md:text-base w-full py-3 border-1.5 border-secondary-500 rounded-md text-secondary-500">*/}
                    {/*        جزئیات*/}
                    {/*    </Link>*/}
                    {/*    <Link href="/"*/}
                    {/*          className="flex items-center justify-center text-xs md:text-base w-full py-3 bg-primary-600 text-white rounded-md">*/}
                    {/*        مشاهده کتاب*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div className="flex items-center gap-4 md:gap-6">
                        <Link href="/"
                              className="flex justify-center items-center px-6 py-2 md:py-3 border border-secondary-500 rounded-md text-secondary-500 text-xs md:text-base flex-1">مشاهده</Link>
                        <button type='button'
                                className="flex items-center justify-center py-2 md:py-3 bg-primary-500 rounded-md w-1/4">
                            <Cart className="w-4 h-4 md:w-6 md:h-6 fill-white"/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;