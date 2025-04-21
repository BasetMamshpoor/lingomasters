import React from "react";
import KingdomFlag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import HistoryIcon from "@icons/history.svg";
import GrowthIcon from "@icons/growth.svg";
import RakingIcon from "@icons/ranking.svg";
import LaptopIcon from "@icons/laptop.svg";
import FileIcon from "@icons/file.svg";
import BookIcon from "@icons/book-open.svg";
import PercentageIcon from "@icons/percentage-square.svg";
import MessageIcon from "@icons/message-alt.svg";
import CalendarIcon from "@icons/calendar.svg";
import EditIcon from "@icons/edit-icon.svg";
import TrashIcon from "@icons/bin.svg";

import BookItem from "@/components/Books/BookItem";
import Link from "next/link";
import { useRouter } from "next/router";

function ReserveCheckout({ setSteps }) {
  const router = useRouter()
  const { id } = router.query
  return (
    <div className="col-span-3 rounded-lg border border-natural_gray-100 bg-white py-4 px-3 flex flex-col gap-5 ">
      <div className="grid sm:grid-cols-3 items-center">
        <div className="grid lg:grid-cols-2 grid-cols-3 sm:col-span-2 items-center">
          <div className="flex items-center">
            <div className="centerOfParent ml-2">
              <HistoryIcon />
            </div>
            <p className="text-natural_gray-950 sm:text-base text-[10px]">
              تعداد جلسات
            </p>
          </div>
          <p className="text-natural_gray-950 sm:text-base text-xs">
            ۶ جلسه
          </p>
        </div>
        <div className="flex sm:order-1 -order-1 items-center justify-end gap-3">
          <button className="flex gap-2 items-center py-1 px-3 text-sm rounded-md border-2 border-red-600 text-red-600">
            <TrashIcon className="w-5 h-5 fill-red-600" />
            <Link href={`/private-class/${id}`} className="md:block hidden">حذف</Link>
          </button>
          <button className="flex gap-2 items-center py-1 px-3 text-sm rounded-md border-2 border-primary-600 text-primary-600">
            <EditIcon className="w-5 h-5" />
            <p onClick={() => setSteps(prev => prev - 1)} className="md:block hidden">ویرایش</p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <KingdomFlag />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">زبان</p>
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
            <RakingIcon />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            سطح زبان
          </p>
        </div>
        <p className="text-natural_gray-950 sm:text-base text-xs">
          متوسط
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <LaptopIcon />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            نوع کلاس
          </p>
        </div>
        <p className="text-natural_gray-950 sm:text-base text-xs">
          آنلاین (Google Meet)
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <FileIcon className='fill-primary-700' />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            هدف از یادگیری
          </p>
        </div>
        <p className="text-natural_gray-950 text-start sm:text-base text-xs">
          فنون زبان (مکالمه)
        </p>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <BookIcon className='fill-primary-600' />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">
            انتخاب کتاب
          </p>
        </div>
        <p className="text-natural_gray-950 sm:text-base text-xs whitespace-nowrap">
          خودم از کتاب های استاد انتخاب می کنم
        </p>
      </div>
      <div className="flex justify-between md:justify-start items-center gap-3">
        <BookItem />
        <BookItem />
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
            <MessageIcon />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">پیام</p>
        </div>
        <p className="text-natural_gray-950 sm:text-base text-xs">
          متن پیام
        </p>
      </div>
      <div className="flex w-96 justify-between items-center">
        <div className="flex items-center">
          <div className="centerOfParent ml-2">
            <CalendarIcon className='fill-primary-600' />
          </div>
          <p className="text-natural_gray-950 sm:text-base text-[10px]">تقویم</p>
        </div>
      </div>
    </div>
  );
}

export default ReserveCheckout;
