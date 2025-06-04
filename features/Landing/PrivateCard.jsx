import React from "react";
import EyeIcon from "@icons/eye-right.svg";
import CoinIcon from "@icons/coin-stack.svg";
import UnitedKingdomFlag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import Image from "next/image";
import Link from "next/link";
import Star from "@icons/magic-star.svg";
import Laptop from "@icons/laptop.svg"
import Map from "@icons/map.svg"
import Like from "@/components/Like";
import formatNumber from "@/helpers/formatNumber";

function PrivateCard
({
     rate,
     city,
     country,
     discount,
     is_like,
     language,
     price,
     id,
     professor,
     profile,
     teachingTypes,
     views_count,

 }) {
    const finalPrice = price - (price * discount) / 100;

    return (
        <>
            <div
                className={`flex flex-col gap-1 py-6 px-4 bg-white rounded-lg border border-natural_gray-100 overflow-hidden max-w-[500px] w-full grow h-full flex-shrink-0`}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center py-1 px-2 bg-natural_gray-50 rounded-lg -mr-6 gap-2 ">
                        <div className="centerOfParent">
                            <EyeIcon className="w-6 h-3"/>
                        </div>
                        <span className="text-xs text-primary-900 uppercase">{formatNumber(views_count)}</span>
                    </div>
                    <div className="centerOfParent">
                        <Like id={id} isLike={is_like} url='/private-reserve'/>
                    </div>
                </div>
                <div className="flex flex-col justify-between grow">
                    <div className="flex flex-col gap-4">
                        <div className="centerOfParent overflow-hidden rounded-full w-24 h-24 self-center">
                            <Image
                                width={100}
                                height={100}
                                className="w-full h-full object-cover"
                                src={profile}
                            />
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <p className='sm:text-lg '>{professor}</p>
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
                                    <p className="text-sm">{language}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1">
                                        <div className="centerOfParent">
                                            <Laptop className="w-4 h-4"/>
                                        </div>
                                        <p className="text-sm text-natural_gray-900">نوع تدریس</p>
                                    </div>
                                    <p className="text-sm">{teachingTypes}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1">
                                        <div className="centerOfParent">
                                            <Map className="w-4 h-4"/>
                                        </div>
                                        <p className="text-sm text-natural_gray-900">کشور _ شهر</p>
                                    </div>
                                    <p className="text-sm">{country} _ {city}</p>
                                </div>
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center  gap-1">
                                        <div className="flex items-center">
                                            <CoinIcon className="w-4 h-4 fill-primary-800"/>
                                        </div>
                                        <p className="sm:text-sm text-xs text-natural_gray-900">شهریه پایه</p>
                                    </div>
                                    <div className="flex grow justify-end gap-2">
                                        {!!discount && <div
                                            className="text-red-700 h-fit bg-red-200 rounded-lg py-0.5 px-2 text-sm">
                                            {discount}%
                                        </div>}
                                        <div className="flex flex-col">
                                            <p className="sm:text-sm text-xs hasToman">{finalPrice.toLocaleString()}</p>
                                            {!!discount &&
                                                <del className="sm:text-sm text-xs text-natural_gray-500 hasToman">
                                                    {price.toLocaleString()}
                                                </del>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex gap-3 mt-10">
                        <Link href={`/private-class/${id}#resume`}
                              className="py-2 px-4 whitespace-nowrap border-1.5 border-secondary-500 text-secondary-500 text-center w-full rounded-md effect-2 text-sm">
                            مشاهده رزومه
                        </Link>
                        <Link href={`/private-class/${id}`}
                              className="py-2 px-4 whitespace-nowrap bg-blue-600 text-white text-center w-full rounded-md effect-2 text-sm">
                            انتخاب استاد
                        </Link>
                    </div>
                </div>
            </div>
        </>

    );
}

export default PrivateCard;
