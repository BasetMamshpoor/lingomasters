import React from "react";
import Image from "next/image";
import UnitedStateFlag from "@icons/Flags/Country=United States of America, Style=Flag, Radius=On.svg";
import ChatIcon from "@icons/chats.svg";
import GrowIcon from "@icons/growth.svg";
import RakingIcon from "@icons/ranking.svg";

function BookItem({title, images, language_id, language_level, subject, age_group}) {
    return (
        <div
            className="min-w-[206px] max-w-[206px] p-3 flex-[1_0_0] rounded-lg bg-natural_gray-50 flex flex-col gap-4 items-center self-stretch">
            <div className="centerOfParent">
                <Image src={images || '/images/product.png'} alt="" width={0} height={0} sizes="100vw"
                       className="w-full h-full object-contain"/>
            </div>
            <div className="flex flex-col gap-4 self-stretch">
                <p className="text-sm text-center">{title}</p>
                <ul className="flex flex-col gap-1 w-full">
                    <li className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <div className="centerOfParent"><UnitedStateFlag/></div>
                            <span className="text-xs text-natural_gray-900">زبان</span>
                        </div>
                        <span className="text-xs">{language_id}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <div className="centerOfParent"><ChatIcon/></div>
                            <span className="text-xs text-natural_gray-900">موضوع</span>
                        </div>
                        <span className="text-xs">{subject}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <div className="centerOfParent"><GrowIcon/></div>
                            <span className="text-xs text-natural_gray-900">گروه سنی</span>
                        </div>
                        <span className="text-xs">{age_group}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <div className="centerOfParent"><RakingIcon/></div>
                            <span className="text-xs text-natural_gray-900">سطح کتاب</span>
                        </div>
                        <span className="text-xs">{language_level}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BookItem;
