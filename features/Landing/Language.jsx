import React, {useEffect, useState} from 'react';
import Earth from "@icons/Earth.svg";
import Image from "next/image";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import Right from "@icons/chevron-right.svg";
import Left from "@icons/arrow-left.svg";

const Language = ({data}) => {

    const [isScrollable, setIsScrollable] = useState(false);
    const ref = useHorizontalScroll();

    useEffect(() => {
        const slider = ref.current;
        if (!slider) return;

        const checkScrollable = () => {
            setIsScrollable(slider.scrollWidth > slider.clientWidth);
        };

        checkScrollable();

        const resizeObserver = new ResizeObserver(checkScrollable);
        resizeObserver.observe(slider);

        return () => {
            resizeObserver.disconnect();
        };
    }, [ref, data]);

    return (
        <>
            <div className="flex items-center gap-4 border-x py-1 max-w-full">
                <div className="flex items-center rounded-lg bg-primary-950 sm:p-4 p-2 sm:gap-10 gap-3 w-full">
                    <div className="flex flex-col items-center gap-2">
                        <Earth className="w-16 h-16 sm:w-28 sm:h-28"/>
                        <p className="text-sm sm:text-base text-white whitespace-nowrap sm:block hidden">زبان‌های
                            لیگومسترز</p>
                    </div>
                    <div className="relative overflow-hidden">
                        {isScrollable && (
                            <button
                                onClick={() => ref.current.scrollBy({left: 200, behavior: 'smooth'})}
                                className="absolute top-1/2 -translate-y-1/2 right-10 lg:flex hidden items-center justify-center w-12 h-12 rounded-full border border-primary-400 bg-primary-100"
                            >
                                <Right className='fill-primary-400'/>
                            </button>
                        )}
                        <div
                            className="flex lg:gap-12 gap-4 w-full bg-white rounded-lg px-2 sm:py-6 py-2 overflow-x-scroll scrollbar-hide select-none sm:text-sm text-xs"
                            ref={ref}>
                            {data?.map(e => (
                                <div
                                    className="flex flex-col items-center lg:gap-10 sm:gap-6 sm:min-w-fit min-w-12">
                                    <Image src={e.flag} className="w-12 h-10 sm:w-20 sm:h-14 border rounded-xl border-natural_gray-200"
                                           width={100} height={100} alt={e.title}/>
                                    <p className="hidden sm:block whitespace-nowrap">اساتید {e.title}</p>
                                </div>
                            ))}
                        </div>
                        {isScrollable && (
                            <button
                                onClick={() => ref.current.scrollBy({left: -200, behavior: 'smooth'})}
                                className="absolute top-1/2 -translate-y-1/2 left-10 lg:flex hidden items-center justify-center w-12 h-12 rounded-full border border-primary-400 bg-primary-100"
                            >
                                <Left className='fill-primary-400'/>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Language;