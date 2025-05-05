import React, {useState} from "react";
import User from '@icons/book-open.svg';
import useSwipeScroll from "@/hooks/useHorizontalScroll";
import BookItem from "@/components/Books/BookItem";


export default function Books({books}) {
    const [selected, setSelected] = useState("english");
    const scroll = useSwipeScroll()
    return (
        <>
            <div className="p-4 flex flex-col gap-4 bg-white border border-natural_gray-50 rounded-lg" id="books">
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><User className='w-5 h-5 fill-primary-800'/></div>
                    <span className='sm:text-base text-sm text-primary-950'>کتاب های دوره</span>
                </div>
                <div className="flex items-stretch gap-4 w-full overflow-x-auto scrollbar-hide" ref={scroll}>
                    {books.map((p, i) => <BookItem key={i} {...p} />)}
                </div>
            </div>
        </>
    );
}
