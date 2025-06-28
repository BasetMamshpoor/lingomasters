import React, {useEffect, useState} from 'react';
import useSwipeScroll from "@/hooks/useHorizontalScroll";
import Story from "@/components/Stories/Story";
import Right from "@icons/chevron-right.svg";
import Left from "@icons/arrow-left.svg";
import Mobile from "@icons/mobile.svg";

const Stories = ({data: Stories = []}) => {
    const scroll = useSwipeScroll()
    const [isScrollable, setIsScrollable] = useState(false);

    useEffect(() => {
        const slider = scroll.current;
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
    }, [scroll]);


    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex-1"></div>
                    <div className='centerOfParent gap-4'>
                        <Mobile className="fill-primary-700 lg:w-10 lg:h-10"/>
                        <p className="lg:text-2xl sm:text-lg text-sm font-semibold">استوری های اساتید</p>
                    </div>
                    <div className="flex-1 justify-end centerOfParent gap-4">
                        {isScrollable && (
                            <>
                                <button
                                    onClick={() => scroll.current.scrollBy({left: 200, behavior: 'smooth'})}
                                    className="centerOfParent w-8 h-8 rounded-full border border-primary-400 bg-primary-100"
                                >
                                    <Right className='fill-primary-500 w-5 h-5'/>
                                </button>
                                <button
                                    onClick={() => scroll.current.scrollBy({left: -200, behavior: 'smooth'})}
                                    className="centerOfParent w-8 h-8 rounded-full border border-primary-400 bg-primary-100"
                                >
                                    <Left className='fill-primary-500 w-5 h-5'/>
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div dir='rtl' ref={scroll}
                     className="container flex scrollbar-hide items-stretch overflow-x-auto lg:gap-6 sm:gap-5 gap-4">
                    {Stories.map((story, index) => (
                        <div key={story.id}
                             className="flex flex-col gap-4 justify-center items-center sm:max-w-[120px] w-full max-w-[90px]">
                            <Story story={story} Stories={Stories} index={index}/>
                            <div className="text-sm line-clamp-2 ">{story.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Stories;