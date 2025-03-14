import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

import Right from '@icons/chevron-right.svg'
import Clock from "@icons/clock.svg";
import Share from '@icons/share.svg'
import Heart from '@icons/heart.svg'
import Eye from '@icons/eye-right.svg'
import Flag from '@icons/Flags/Country=United States of America, Style=Flag, Radius=On.svg'
import Star from '@icons/magic-star.svg'
import Info from '@icons/info-circle.svg'

function Banner({ data = {} }) {
  return (
    <>
      <div className="lg:hidden flex flex-col">
        <div className="py-3">
          <Breadcrumbs
            separator='/'
            classNames={{ list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600' }}
            itemClasses={{
              separator: "px-2 text-natural_gray-600"
            }}>
            <BreadcrumbItem className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs' href="/">صفحه اصلی</BreadcrumbItem>
            <BreadcrumbItem className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs' href='/professor'>کلاس های گروهی</BreadcrumbItem>
            <BreadcrumbItem className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'>{data.name}</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <div className="py-3 flex items-center gap-2 cursor-pointer">
          <div className="centerOfParent"><Right className='fill-primary-600' /></div>
          <span className='sm:text-base text-sm font-semibold'>بازگشت</span>
        </div>
      </div>
      {!data.offer && <div className="bg-red-200 flex items-center px-4 py-3.5 w-full mb-4 justify-between rounded">
        <p>تا پایان تخفیف</p>
        <p className="flex items-center ">
          <span dir="ltr">09 : 03 : 41</span>
          <Clock className="mr-3" />
        </p>
      </div>}
      <div className="flex flex-col gap-10 sm:p-4 px-3 py-4 bg-white border border-neutral-100 rounded-lg">
        <div className="flex flex-col gap-2">
          <div className="lg:hidden flex items-center lg:justify-end justify-between">
            <Link href='' className="flex items-center gap-1 self-end">
              <div className="centerOfParent"><Eye className='w-4 h-4 fill-primary-700' /></div>
              <span className='sm:text-base text-sm text-primary-950'>5K</span>
            </Link>
            <div className="flex items-center gap-6">
              <Heart />
              <Share />
            </div>
          </div>
          <div className="gap-10 flex flex-col items-center">
            <div className="gap-2 w-full flex flex-col items-center">
              <div className="overflow-hidden rounded-2xl w-full max-h-64">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-full object-cover"
                  src={'/images/image 144.png' || data.image}
                  alt={data.name}
                />
              </div>
              <h1 className="lg:font-normal font-semibold">{data.name}</h1>
              <div className="centerOfParent flex-col gap-1 w-full">
                <h1 className='sm:text-xl text-base font-semibold'>{data.name}</h1>
                <p className='lg:hidden text-natural_gray-600 text-xs'>(کد دوره: {data.id})</p>
                <div className="lg:hidden centerOfParent"><Flag /></div>
                <div className="lg:hidden flex items-center gap-1">
                  <div className="centerOfParent"><Star className='w-5 h-5 fill-warning' /></div>
                  <div className="flex items-center gap-2">
                    <span className='text-natural_gray-950 text-xs'>4.8</span>
                    <span className='text-neutral-700 text-[10px]'>از 80 نفر</span>
                  </div>
                </div>
              </div>
              <div className="gap-2 w-full lg:flex hidden flex-col">
                <div className="bg-natural_gray-50 px-3 py-2  flex items-center justify-between">
                  <p className="text-natural_gray-950 text-xs">مدت دوره</p>
                  <p className="text-primary-700 text-sm">20 جلسه</p>
                </div>
                <div className=" bg-natural_gray-50 px-3 py-2 h-10 flex items-center justify-between">
                  <p className="text-natural_gray-950 text-xs">قیمت دوره</p>
                  <p className="text-green-600 text-sm">{data.price}</p>
                </div>
              </div>
            </div>
            <div className="gap-6 w-full flex flex-col">
              <div className="w-full lg:flex hidden">
                <Link
                  href={`/group-class/${data.id}/reserve-class`}
                  className="bg-primary-600 effect-2 w-full h-12 text-white py-4 px-6 text-center rounded flex flex-col justify-center"
                >
                  رزرو کلاس
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex items-center justify-between bg-white border border-natural_gray-100 rounded-lg w-full py-4 px-3">
        <p className="text-xs font-semibold">قوانین لغو کلاس</p>
        <div className="flex items-center gap-1">
          <div className="centerOfParent"><Info className='w-4 h-4' /></div>
          <span className="text-xs text-rose-600"> قوانین لغو کلاس استاد</span>
        </div>
      </div>
    </>
  );
}

export default Banner;
