import React from 'react';

const Cart = ({title, text, handleClick, id}) => {
    return (
        <>
            <div
                className="flex flex-row justify-between md:flex-col items-center gap-8 px-3 py-2 md:p-6 bg-[rgba(255,_255,_255,_0.60)] border border-primary-200 rounded-2xl">
                <div className="flex flex-col items-center gap-2 ap-2 md:gap-8">
                    <p className="text-xs md:text-xl lg:text-2xl text-primary-600">{title}</p>
                    <p className="text-xs md:text-base lg:text-lg">{text}</p>
                </div>
                <button onClick={() => handleClick(id)}
                        className="px-6 py-3 text-xs md:text-base text-primary-600 border whitespace-nowrap border-primary-600 rounded-md">اطلاعات
                    بیشتر
                </button>
            </div>
        </>
    );
};

export default Cart;