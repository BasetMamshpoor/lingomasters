import {
    Tabs,
    Tab,
    Card,
    CardBody,
    RadioGroup,
    Radio,
} from "@nextui-org/react";

import React, { useState } from "react";
import Image from "next/image";

import UnitedkingdomFlag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import GermanyFlag from "@icons/Flags/Country=Germany, Style=Flag, Radius=On.svg";
import SpainFlag from "@icons/Flags/Country=Spain, Style=Flag, Radius=On.svg";
import User from '@icons/book-open.svg';
import Star from '@icons/ranking.svg';
import Chat from '@icons/chats.svg';
import Age from '@icons/growth.svg';
import useSwipeScroll from "@/hooks/useHorizontalScroll";
import BookItem from "../reserve/BookItem";


export default function Books() {
    const [selected, setSelected] = useState("english");
    const scroll = useSwipeScroll()
    return (
        <>
            <div className="p-4 flex flex-col gap-4 bg-white border border-natural_gray-50 rounded-lg" id="books">
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><User className='w-5 h-5 fill-primary-800' /></div>
                    <span className='sm:text-base text-sm text-primary-950'>کتاب های تدریسی استاد</span>
                </div>
                <Tabs
                    classNames={{ tab: "[&>span]:hidden", panel: 'py-0 [&>div]:shadow-none [&>div>div]:!p-0' }}
                    aria-label="Tabs variants"
                    variant="underlined"
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                >
                    {/* tab-english */}
                    <Tab
                        key="english"
                        title={
                            <div className="flex items-center gap-1">
                                <RadioGroup
                                    value={selected}
                                    color="default"
                                    style={{ "--nextui-default-500": "196 94% 25%" }}
                                    aria-label=" "
                                >
                                    <Radio value="english" name="language">
                                        <UnitedkingdomFlag />
                                    </Radio>
                                </RadioGroup>
                                <span className="hidden sm:block">انگلیسی</span>
                            </div>
                        }
                    >
                        <Card>
                            <CardBody>
                                <div className="flex items-stretch gap-4 w-full overflow-x-auto scrollbar-hide" ref={scroll}>
                                    {[...Array(6)].map((_,i) => <BookItem key={i} />)}
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    {/* tab-germany */}
                    <Tab
                        key="germany"
                        title={
                            <div className="flex items-center gap-1">
                                <RadioGroup
                                    aria-label=" "
                                    color="default"
                                    value={selected}
                                    style={{ "--nextui-default-500": "196 94% 25%" }}
                                >
                                    <Radio value="germany" name="language">
                                        <GermanyFlag />
                                    </Radio>
                                </RadioGroup>
                                <span className="hidden sm:block">آلمانی</span>
                            </div>
                        }
                    >
                        <Card >
                            <CardBody>
                            </CardBody>
                        </Card>
                    </Tab>
                    {/* tab-spanish */}
                    <Tab
                        key="spanish"
                        title={
                            <div className="flex items-center gap-1">
                                <RadioGroup
                                    aria-label=" "
                                    color="default"
                                    value={selected}
                                    style={{ "--nextui-default-500": "196 94% 25%" }}
                                >
                                    <Radio value="spanish" name="language">
                                        <SpainFlag />
                                    </Radio>
                                </RadioGroup>
                                <span className="hidden sm:block">اسپانیا</span>
                            </div>
                        }
                    >
                        <Card >
                            <CardBody>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}
