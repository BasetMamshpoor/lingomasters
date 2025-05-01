import React from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";
import Dots from '@icons/threedots.svg';

export default function MessageItem({message, isSender, onReply, onPin}) {
    return (
        <div
            className={`group min-w-[120px] max-w-xl pt-2 pb-5 rounded-t-lg text-sm relative ${
                isSender
                    ? 'bg-primary-700 text-white ml-auto pr-2 pl-5 rounded-l-lg'
                    : 'bg-primary-100 text-primary-950 mr-auto pl-2 pr-5 rounded-r-lg'
            }`}
        >
            {message.replyTo && (
                <div
                    className="flex items-center gap-1 text-xs text-primary-950 mb-1 italic border-l-2 pl-2 border-natural_gray-200 bg-primary-400">
                    <span className=''>پاسخ به:</span>
                    <p className='text-justify'>{message.replyTo.text.slice(0, 20)}</p>
                </div>
            )}

            <p dir="auto" className="whitespace-pre-line lg:text-base sm:text-sm text-xs">{message.text}</p>

            <div className={`absolute ${!isSender ? 'right-1 ' : 'left-1'} top-1.5`}>
                <Dropdown dir='rtl' placement={isSender ? 'left-start' : 'right-start'}>
                    <DropdownTrigger>
                        <div className={`centerOfParent w-fit cursor-pointer`}>
                            <Dots className={`${isSender ? 'fill-white' : ''} w-4 h-4`}/></div>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="WoW">
                        <DropdownItem key="replay" onPress={() => onReply(message)}>ریپلای</DropdownItem>
                        <DropdownItem key="pin" onPress={() => onPin(message)}>پین کردن</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <p className={`absolute bottom-0 ${isSender ? 'left-2 text-white' : 'right-2'} text-[10px]`}>{message.id}</p>
            {isSender ? <div
                    className="absolute -right-2 bottom-0 bg-primary-700 w-3 h-3 [clip-path:polygon(0_0,_0_100%,_100%_100%)]"></div>
                : <div
                    className="absolute -left-2 bottom-0 bg-primary-100 w-3 h-3 [clip-path:polygon(100%_0,_0_100%,_100%_100%)]"></div>}
        </div>
    );
}
