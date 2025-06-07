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
            <div className="w-full relative flex items-center gap-4 border-x py-1 overflow-hidden max-w-[60%]">
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
                            color='warning'
                            className={`px-2 py-1 text-sm ${id === book.id ? "bg-secondary-300" : "bg-secondary-50"}`}
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
        </>
    );
};

export default LanguageList;