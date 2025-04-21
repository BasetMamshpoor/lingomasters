import React, {useState, useEffect} from 'react';
import BookItem from "./BookItem";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import Right from "@icons/chevron-right.svg";
import Left from "@icons/arrow-left.svg";
import {addToast, Input} from "@heroui/react";
import Search from "@icons/search.svg";
import usePostRequest from "@/hooks/usePostRequest";

const BookList = ({products = [], handleChangeState, withSearch = true, withSelect = true, withDelete = false}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isScrollable, setIsScrollable] = useState(false);
    const [selectedBooks, setSelectedBooks] = useState([]);
    const ref = useHorizontalScroll();
    const {sendPostRequest, isLoading} = usePostRequest()

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
    }, [ref, filteredProducts]);

    useEffect(() => {
        if (typeof handleChangeState === 'function')
            handleChangeState(prev => ({...prev, books: selectedBooks}));
    }, [selectedBooks])

    const handleSelectChange = (bookId, isSelected) => {
        setSelectedBooks((prev) => {
            if (isSelected)
                return [...prev, bookId]
            else
                return prev.filter(id => id !== bookId)
        })
    };

    if (!products.length) return <p>کتابی پیدا نشد</p>;

    return (
        <div className='flex w-full flex-col gap-4'>
            {withSearch && <Input
                label='جستوجوی کتاب'
                placeholder='جستوجو کتاب'
                radius={'sm'}
                labelPlacement={'outside'}
                variant='bordered'
                classNames={{
                    base: 'max-w-[328px]',
                    inputWrapper: "bg-white",
                    label: "text-xs text-natural_gray-950 font-normal",
                    input: "text-xs sm:text-sm",
                }}
                endContent={<Search className='fill-natural_gray-400'/>}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />}
            <div className="relative flex items-center gap-4 w-full">
                {isScrollable && (
                    <button
                        onClick={() => ref.current.scrollBy({left: 200, behavior: 'smooth'})}
                        className="absolute top-1/2 -translate-y-1/2 right-0 lg:flex hidden items-center justify-center w-12 h-12 rounded-full border border-primary-400 bg-primary-100"
                    >
                        <Right className='fill-primary-500'/>
                    </button>
                )}
                <div className="flex items-stretch gap-4 w-full overflow-x-scroll scrollbar-hide" ref={ref}>
                    {filteredProducts.map((book, i) => <BookItem
                        withDelete={withDelete}
                        withSelect={withSelect}
                        key={book.id}
                        {...book}
                        isSelected={selectedBooks?.includes(book.id) || false}
                        onSelectChange={(isSelected) => handleSelectChange(book.id, isSelected)}
                    />)}
                </div>
                {isScrollable && (
                    <button
                        onClick={() => ref.current.scrollBy({left: -200, behavior: 'smooth'})}
                        className="absolute top-1/2 -translate-y-1/2 left-0 lg:flex hidden items-center justify-center w-12 h-12 rounded-full border border-primary-400 bg-primary-100"
                    >
                        <Left className='fill-primary-500'/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default BookList;