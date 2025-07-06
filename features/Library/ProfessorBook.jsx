//icons
import Users from '@icons/users.svg';
import Image from 'next/image';
import Right from "@icons/chevron-right.svg";
import Left from "@icons/arrow-left.svg";
import {useEffect, useState} from "react";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import {Avatar} from "@heroui/react";
import Link from "next/link";

const ProfessorBook = ({professors}) => {
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
    }, [ref, professors]);
    return (
        <>
            <div
                className="relative sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-52"
                id='example'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Users className='w-5 h-5'/></div>
                    <span className='sm:text-base text-sm text-primary-950'>اساتیدی که این کتاب را تدریس می کنند</span>
                </div>
                {isScrollable && (
                    <button
                        onClick={() => ref.current.scrollBy({left: 200, behavior: 'smooth'})}
                        className="absolute z-10 top-1/2 -translate-y-1/2 -right-10 lg:flex hidden items-center justify-center"
                    >
                        <Right className='fill-primary-400'/>
                    </button>
                )}
                <div className="flex gap-4 w-full overflow-x-auto scrollbar-hide select-none max-w-full" ref={ref}>
                    {professors?.map(i => (
                            <div key={i.id}
                                 className="p-4 bg-primary-50 rounded-lg flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <Avatar src={'/'} showFallback/>
                                    <p className="text-sm line-clamp-1">{i.name}</p>
                                </div>
                                <Link href={`/private-class/${i.id}`}
                                      className="bg-primary-600 text-white w-full rounded centerOfParent text-sm">مشاهده
                                    رزومه</Link>
                            </div>
                        )
                    )}
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

export default ProfessorBook;