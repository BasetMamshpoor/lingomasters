import React, {useEffect, useState} from 'react';
import Right from "@icons/chevron-right.svg";
import Left from "@icons/arrow-left.svg";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";

const LanguageList = ({data, setId, id}) => {
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
            <div className="relative centerOfParent w-full max-w-[65%]">
                <div className="w-full flex items-center gap-4 border-x py-1 overflow-hidden">
                    {isScrollable && (
                        <button
                            onClick={() => ref.current.scrollBy({left: 200, behavior: 'smooth'})}
                            className="absolute z-10 top-1/2 -translate-y-1/2 -right-10 lg:flex hidden items-center justify-center"
                        >
                            <Right className='fill-primary-400'/>
                        </button>
                    )}
                    <div className="flex gap-4 w-full overflow-x-auto scrollbar-hide select-none max-w-full" ref={ref}>
                        {data?.map((book, i) => (
                            <div
                                onClick={() => setId(book.id)}
                                key={book.id}
                                className={`py-2 w-32 text-sm whitespace-nowrap centerOfParent rounded-lg px-4 ${id === book.id ? "bg-secondary-300" : "bg-secondary-50 text-natural_gray-950"}`}
                            >{book.title}</div>))}
                    </div>
                    {isScrollable && (
                        <button
                            onClick={() => ref.current.scrollBy({left: -200, behavior: 'smooth'})}
                            className="absolute z-10 top-1/2 -translate-y-1/2 -left-10 lg:flex hidden items-center justify-center"
                        >
                            <Left className='fill-primary-400'/>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default LanguageList;