import React from "react";
import EyeIcon from "@icons/eye-right.svg";
import HeartIcon from "@icons/heart.svg";
import Target from "@icons/bin.svg";
import BookIcon from "@icons/book-open.svg";
import PersonsIcon from "@icons/users.svg";
import ClockIcon from "@icons/clock.svg";
import CalendarIcon from "@icons/calendar.svg";
import CoinIcon from "@icons/coin-stack.svg";
import UnitedKingdomFlag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import Image from "next/image";
import Link from "next/link";

function ClassItem() {
  return (
    <div className="col-span-1 flex flex-col gap-4 py-6 px-4 bg-white rounded-lg border border-natural_gray-100 overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="flex items-center py-1 px-2 bg-natural_gray-50 rounded-lg -mr-6 gap-2 ">
          <div className="centerOfParent">
            <EyeIcon className="w-6 h-3" />
          </div>
          <span className="text-xs text-primary-900 uppercase ">۵k</span>
        </div>
        <div className="centerOfParent">
          <HeartIcon className="w-6 h-6" />
        </div>
      </div>
      <div className="w-full h-[127px] rounded-2xl bg-gradient-to-br from-[#780206] to-[#061161] relative">
        <div className="centerOfParent overflow-hidden rounded-full w-10 h-10 absolute top-4 right-4">
          <Image
            width="0"
            height="0"
            className="w-full h-full object-cover"
            src={"/images/image 144.png"}
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-7">
          <div className="centerOfParent">
            <Target className="h-10 w-10" />
          </div>
          <p className="text-white text-[20px] lg:text-[27px] font-bold block font-morabba">
            دوره مکالمه و گرامر
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="centerOfParent">
              <BookIcon className="w-6 h-6" />
            </div>
            <p className="text-sm text-natural_gray-900">نام دوره</p>
          </div>
          <p className="text-sm">دوره مکالمه و گرامر</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="centerOfParent">
              <UnitedKingdomFlag className="w-6 h-6" />
            </div>
            <p className="text-sm text-natural_gray-900">زبان</p>
          </div>
          <p className="text-sm">انگلیسی</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="centerOfParent">
              <PersonsIcon className="w-6 h-6" />
            </div>
            <p className="text-sm text-natural_gray-900">استاد</p>
          </div>
          <p className="text-sm">احسان علیزاده</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="centerOfParent">
              <ClockIcon className="w-6 h-6" />
            </div>
            <p className="text-sm text-natural_gray-900">روز/ساعت</p>
          </div>
          <p className="text-sm"> روزهای زوج ۱۱:۰۰ - ۹:۰۰ </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="centerOfParent">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <p className="text-sm text-natural_gray-900">تاریخ</p>
          </div>
          <p className="text-sm"> از ۲۰ فروردین تا ۴ تیر</p>
        </div>
        <div className="flex items-start justify-between">
          <div className="flex items-center  gap-1">
            <div className="flex items-center">
              <CoinIcon className="w-6 h-6" />
            </div>
            <p className="text-sm text-natural_gray-900">قیمت</p>
          </div>
          <div className="flex grow justify-end gap-2">
            <div className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-sm">
              ۵۰٪
            </div>
            <div className="flex flex-col">
              <p className="text-sm"> ۲۰۰ هزار تومان</p>
              <del className="text-sm text-natural_gray-500 ">
                ۴۰۰ هزار تومان
              </del>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-3 mt-10">
        <Link href='/group-class/1' className="py-2 px-4 border bg-blue-600 text-white text-center w-full rounded-md effect-2 text-sm">
          رزرو کلاس
        </Link>
      </div>
    </div>
  );
}

export default ClassItem;
