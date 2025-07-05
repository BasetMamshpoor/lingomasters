import React from 'react';

const Cart = ({title,title1, text,text1, handleClick, id}) => {
    return (
        <>
            <div
                className="flex flex-row justify-between md:flex-col items-center gap-8 px-3 py-2 md:p-6 bg-[rgba(255,_255,_255,_0.60)] border border-primary-200 rounded-2xl w-full md:max-w-[242px] lg:max-w-[302px]">
                <div className="flex flex-col items-center gap-2 ap-2 md:gap-8">
                    <div className="flex flex-row md:flex-col">
                        <p className="text-xs md:text-xl lg:text-2xl text-primary-600 text-center whitespace-nowrap">{title}</p>
                        <p className="text-xs md:text-xl lg:text-2xl text-primary-600 text-center whitespace-nowrap">{title1}</p>
                    </div>
                    <div className="flex flex-row md:flex-col">
                        <p className="text-xs md:text-base lg:text-lg text-center whitespace-nowrap">{text}</p>
                        <p className="text-xs md:text-base lg:text-lg text-center whitespace-nowrap">{text1}</p>
                    </div>
                </div>
                <button onClick={() => handleClick(id)}
                        className="px-6 py-3 text-xs md:text-base text-primary-600 border whitespace-nowrap border-primary-600 rounded-md md:w-3/4">اطلاعات
                    بیشتر
                </button>
            </div>
        </>
    );
};

export default Cart;