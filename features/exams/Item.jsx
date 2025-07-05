import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Item = ({levelDetermination, attention, title, text, ul, button, image, titleImage}) => {
    return (
        <>
            <div
                className="flex flex-col gap-4 md:gap-8 lg:gap-10 px-3 py-4 md:px-6 md:py-8 lg:px-10 lg:py-14 border-5 border-primary-200 rounded-3xl bg-[rgba(255,_255,_255,_0.50)] backdrop-filter backdrop-blur w-full md:max-w-[418px] lg:max-w-[845px]">
                <div className="flex-flex-col gap-2">
                    <p className="text-xs md:text-base lg:text-lg text-secondary-500">{levelDetermination}</p>
                    <p className="text-[10px] md:text-xs lg:text-sm text-[#D42620]">{attention}</p>
                </div>
                <div className="flex flex-col gap-8">
                    <p className="text-base md:text-2xl lg:text-5xl font-bold text-primary-600 whitespace-nowrap">{title}</p>
                    <p className="text-xs md:text-base lg:text-2xl">{text}</p>
                </div>
                <ul className="list-disc marker:text-primary-700 marker:text-xl text-[10px] md:text-xs lg:text-lg pr-4">
                    {ul?.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
                <div className="flex flex-col gap-4 w-full">
                    <p className="text-xs md:text-base text-secondary-500">{titleImage}</p>
                    {image && <Image src={image} alt="" height={100} width={100} className="w-full"/>}
                </div>
                <div className="flex justify-end w-full">
                    <Link href="/public" className="flex text-white px-3 py-2 justify-center bg-primary-600 rounded-md text-xs md:text-sm lg:text-base w-full md:w-fit lg:w-60 whitespace-nowrap">{button}</Link>
                </div>
            </div>
        </>
    );
};

export default Item;