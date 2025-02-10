import React from "react";
import KingdomFlag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import HistoryIcon from "@icons/history.svg";
import Users from "@icons/users.svg";
import Add from "@icons/user-add.svg";
import GrowthIcon from "@icons/growth.svg";
import RakingIcon from "@icons/ranking.svg";
import LaptopIcon from "@icons/laptop.svg";
import FileIcon from "@icons/file.svg";
import Icon from "@icons/button-icon.svg";
import Map from "@icons/map-marker.svg";
import Clock from "@icons/clock.svg";
import BookIcon from "@icons/book-open.svg";
import PercentageIcon from "@icons/percentage-square.svg";
import MessageIcon from "@icons/message-alt.svg";
import CalendarIcon from "@icons/calendar.svg";
import EditIcon from "@icons/edit-icon.svg";
import TrashIcon from "@icons/bin.svg";
import Age from "@icons/age.svg";

import BookItem from "components/BookItem";

function ReserveCheckout() {
  return (
    <div className="col-span-3 rounded-lg border border-natural_gray-100 bg-white py-4 px-3 flex flex-col gap-5 ">
      <div className="grid sm:grid-cols-3 items-center">
        <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
          <div className="flex items-center">
            <div className="centerOfParent ml-2">
              <Users className='fill-primary-700'/>
            </div>
            <p className="text-natural_gray-950 sm:text-base text-[10px]">
              استاد
            </p>
          </div>
          <p className="text-natural_gray-950 sm:text-base text-xs">
            احسان علیزاده
          </p>
        </div>
        <div className="flex sm:order-1 -order-1 items-center justify-end gap-3">
          <button className="flex gap-2 items-center py-1 px-3 text-sm rounded-md border-2 border-red-600 text-red-600">
            <TrashIcon className="w-5 h-5 fill-red-600" />
            <p className="md:block hidden">حذف</p>
          </button>
          <button className="flex gap-2 items-center py-1 px-3 text-sm rounded-md border-2 border-primary-600 text-primary-600">
            <EditIcon className="w-5 h-5" />
            <p className="md:block hidden">ویرایش</p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <HistoryIcon />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            مدت دوره
          </p>
        </div>
        <p className="text-natural_gray-950 sm:text-base text-xs">
          20 جلسه
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <Add />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            ظرفیت
          </p>
        </div>
        <p className="text-natural_gray-950 sm:text-base text-xs">
          40 نفر
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <KingdomFlag />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            زبان
          </p>
        </div>
        <p className="text-natural_gray-950 sm:text-base text-xs">
          انگلیسی
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <GrowthIcon />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            گروه سنی
          </p>
        </div>
        <p className="text-natural_gray-950 sm:text-base text-xs">
          بزرگسال
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <RakingIcon className="fill-primary-600" />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            سطح زبان
          </p>
        </div>
        <p className="text-natural_gray-950 text-start sm:text-base text-xs">
          متوسط
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <LaptopIcon className="fill-primary-600" />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            نوع کلاس
          </p>
        </div>
        <p className="text-natural_gray-950 text-start sm:text-base text-xs">
          حضوری (در آموزشگاه )
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <Icon className="fill-primary-600" />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            موقعیت
          </p>
        </div>
        <p className="text-natural_gray-950 text-start sm:text-base text-xs">
          ایران _ تهران _ منطقه ۶
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <Map className="fill-primary-600" />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            آدرس
          </p>
        </div>
        <p className="text-natural_gray-950 text-start sm:text-base text-xs">
          منطقه‌۶ - ستارخان - پل ستارخان - خیابان کریمی - پلاک ۱۱
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <Clock className="fill-primary-600" />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            روز/ساعت
          </p>
        </div>
        <p className="text-natural_gray-950 text-start sm:text-base text-xs">
          روزهای زوج ساعت ۹:۰۰ـ۱۱:۰۰
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <CalendarIcon className="fill-primary-600" />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            تاریخ
          </p>
        </div>
        <p className="text-natural_gray-950 text-start sm:text-base text-xs">
          از ۲۰ فروردین ۱۴۰۳ تا ۴ تیر ۱۴۰۳
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <FileIcon className="fill-primary-600" />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            مباحث تدریسی
          </p>
        </div>
        <p className="text-natural_gray-950 text-start sm:text-base text-xs">
          گرامر زمان گذشته، حال و آینده| مکالمه از مبتدی تا پیشرفته
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <BookIcon className="fill-primary-600" />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            کتاب‌های تدریسی
          </p>
        </div>
        <div className="flex justify-between md:justify-start items-center gap-3">
          <BookItem />
          <BookItem />
        </div>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <PercentageIcon />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            کد تخفیف
          </p>
        </div>
        <p className="text-natural_gray-950 sm:text-base text-xs">
          ۱۲۳۱۳۴
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <Age />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">سن دقیق زبان‌آموز</p>
        </div>
        <p className="text-natural_gray-950 sm:text-base text-xs">
          ۱۸ سال
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <MessageIcon />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">پیام</p>
        </div>
        <p className="text-natural_gray-950 sm:text-base text-xs">
          متن پیام
        </p>
      </div>
    </div>
  );
}

export default ReserveCheckout;
