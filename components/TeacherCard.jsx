import React from "react";
import EyeIcon from "@icons/eye-right.svg";
import HeartIcon from "@icons/heart.svg";
import CoinIcon from "@icons/coin-stack.svg";
import UnitedKingdomFlag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import Image from "next/image";
import Link from "next/link";
import Star from "@icons/magic-star.svg";
import formatNumber from "@/helpers/formatNumber";
import Like from "@/components/Like";

function TeacherCard
({
     className,
     rate,
     profile,
     is_like,
     languages,
     price,
     off_price,
     percentage,
     id,
     name,
     views_count,
 }) {
    return (
        <div
            className={`flex flex-col gap-1 py-6 px-4 bg-white rounded-lg border border-natural_gray-100 overflow-hidden max-w-[500px] w-full ${className}`}>
            <div className="flex justify-between items-center">
                <div className="flex items-center py-1 px-2 bg-natural_gray-50 rounded-lg -mr-6 gap-2 ">
                    <div className="centerOfParent">
                        <EyeIcon className="w-6 h-3"/>
                    </div>
                    <span className="text-xs text-primary-900 uppercase ">{formatNumber(views_count)}</span>
                </div>
                <Like id={id} isLike={is_like} url='/private-reserve'/>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <div className="centerOfParent overflow-hidden rounded-full w-24 h-24 self-center">
                        <Image
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                            src={profile || "/images/image 144.png"}
                            alt={name}
                        />
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <p className='sm:text-lg '>{name}</p>
                        <div className="flex items-center gap-4">
                            <p className="sm:text-sm text-xs text-natural_gray-900">میزان رضایت</p>
                            <div className="flex items-center [&>svg]:w-4 [&>svg]:h-4">
                                <Star className={rate < 5 ? '' : 'fill-[#F3B944]'}/>
                                <Star className={rate < 4 ? '' : 'fill-[#F3B944]'}/>
                                <Star className={rate < 3 ? '' : 'fill-[#F3B944]'}/>
                                <Star className={rate < 2 ? '' : 'fill-[#F3B944]'}/>
                                <Star className={rate < 1 ? '' : 'fill-[#F3B944]'}/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <div className="centerOfParent">
                                        <UnitedKingdomFlag className="w-4 h-4"/>
                                    </div>
                                    <p className="text-sm text-natural_gray-900">زبان</p>
                                </div>
                                <p className="text-sm">{languages}</p>
                            </div>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center  gap-1">
                                    <div className="flex items-center">
                                        <CoinIcon className="w-4 h-4 fill-primary-800"/>
                                    </div>
                                    <p className="sm:text-sm text-xs text-natural_gray-900">جلسه ۲۵ دقیقه ای</p>
                                </div>
                                {percentage ? <div className="flex grow justify-end gap-2">
                                    <div className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-sm">
                                        {percentage}٪
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="sm:text-sm text-xs hasToman">{off_price?.toLocaleString()}</p>
                                        <del
                                            className="sm:text-sm text-xs text-natural_gray-500">{price?.toLocaleString()}</del>
                                    </div>
                                </div> : <div className="flex grow justify-end gap-2"><p
                                    className="sm:text-sm text-xs hasToman">{price?.toLocaleString()}</p></div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex gap-3 mt-10">
                    <Link href={`/private-class/${id}`}
                          className="py-2 px-4 border-1.5 border-secondary-500 text-secondary-500 text-center w-full rounded-md effect-2 text-sm">
                        مشاهده رزومه
                    </Link>
                    <Link href={`/private-class/${id}`}
                          className="py-2 px-4 bg-blue-600 text-white text-center w-full rounded-md effect-2 text-sm">
                        انتخاب استاد
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TeacherCard;
