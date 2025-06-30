import React from "react";

import User from '@icons/book-open.svg';
import BookList from "@/components/Books/BookList";


export default function Books({data}) {
    return (
        <>
            <div className="p-4 flex flex-col gap-4 bg-white border border-natural_gray-50 rounded-lg  scroll-m-52"
                 id="books">
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><User className='w-5 h-5 fill-primary-800'/></div>
                    <span className='sm:text-base text-sm text-primary-950'>کتاب های تدریسی استاد</span>
                </div>
                <BookList withSelect={false} products={data} withSearch={true} />
            </div>
        </>
    );
}
