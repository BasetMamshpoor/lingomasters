import React from "react";
import Image from "next/image";
import UnitedStateFlag from "@icons/Flags/Country=United States of America, Style=Flag, Radius=On.svg";
import ChatIcon from "@icons/chats.svg";
import GrowIcon from "@icons/growth.svg";
import RakingIcon from "@icons/ranking.svg";
import {Checkbox} from "@heroui/react";

function BookItem(
    {
        withSelect = false,
        id,
        title,
        age_group,
        language_level,
        subject,
        language_id,
        images,
        isSelected = false,
        onSelectChange,
    }) {
    return (
        <div
            className="min-w-[206px] max-w-[206px] flex flex-col gap-3 cursor-grab relative"
            onClick={() => (withSelect ? onSelectChange(!isSelected) : null)}
        >
            {withSelect && (
                <Checkbox
                    color="success"
                    style={{"--heroui-success": "196 94% 25%"}}
                    radius="sm"
                    isSelected={isSelected}
                    onValueChange={onSelectChange}
                    classNames={{
                        label: "text-xs text-natural_gray-950",
                        icon: "text-white",
                    }}
                >
                    {title}
                </Checkbox>
            )}
            <div
                className={`flex flex-col gap-4 flex-[1_0_0] p-3 border-2 ${
                    (withSelect && isSelected) ? "border-primary-400" : "border-transparent"
                } rounded duration-300 bg-natural_gray-50`}
            >
                <div className="centerOfParent">
                    <Image
                        src={images || "/images/product.png"}
                        alt={title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full object-contain"
                        placeholder="blur"
                        blurDataURL="/images/product.png"
                    />
                </div>
                {!withSelect && <p className='text-center'>{title}</p>}
                <ul className="flex flex-col gap-1 w-full">
                    <li className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <div className="centerOfParent">
                                <UnitedStateFlag className="w-4 h-4 fill-primary-700"/>
                            </div>
                            <span className="text-[10px] text-natural_gray-900">زبان</span>
                        </div>
                        <span className="text-xs">{language_id}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <div className="centerOfParent">
                                <ChatIcon className="w-4 h-4 fill-primary-700"/>
                            </div>
                            <span className="text-[10px] text-natural_gray-900">موضوع</span>
                        </div>
                        <span className="text-xs">{subject}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <div className="centerOfParent">
                                <GrowIcon className="w-4 h-4 fill-primary-700"/>
                            </div>
                            <span className="text-[10px] text-natural_gray-900">گروه سنی</span>
                        </div>
                        <span className="text-xs">{age_group}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <div className="centerOfParent">
                                <RakingIcon className="w-4 h-4 "/>
                            </div>
                            <span className="text-[10px] text-natural_gray-900">سطح کتاب</span>
                        </div>
                        <span className="text-xs">{language_level}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BookItem;