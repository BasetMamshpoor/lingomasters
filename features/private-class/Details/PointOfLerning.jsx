import {
    Tabs,
    Tab,
} from "@heroui/react";

import React from "react";

import User from "@icons/file.svg";
import useSwipeScroll from "@/hooks/useHorizontalScroll";

export default function PointOfLearning({data}) {
    const ref = useSwipeScroll()
    return (
        <>
            <div
                className="p-4 flex flex-col gap-4 bg-white border border-natural_gray-50 rounded-lg withYellowCircel scroll-m-52"
                id="target"
            >
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent">
                        <User className="w-5 h-5 fill-primary-700"/>
                    </div>
                    <span className="sm:text-base text-sm text-primary-950">
            هدف از یادگیری
          </span>
                </div>
                <div className="flex w-full flex-col">
                    <Tabs
                        ref={ref}
                        fullWidth
                        classNames={{
                            panel: "",
                            tabList: "pb-0 border-b",
                        }}
                        aria-label="Options"
                        variant="underlined"
                    >
                        {Object.entries(data).map(([mainKey, nestedObj]) => (
                            <Tab key={mainKey} title={mainKey}>
                                {Object.entries(nestedObj).map(([subKey, values]) => (
                                    <div key={subKey} className="text-sm text-right mb-4">
                                        {subKey !== mainKey && <p className="mb-2">{subKey}</p>}
                                        <ul className="flex items-center flex-wrap gap-2 [&>li]:min-w-[45%]">
                                            {values.map((value, idx) => (
                                                <li className='flex items-center' key={idx}>{value}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </Tab>
                        ))}
                    </Tabs>
                </div>
            </div>
        </>
    );
}
