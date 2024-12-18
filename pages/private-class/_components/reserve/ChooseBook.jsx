import { Accordion, AccordionItem, Checkbox } from '@nextui-org/react';
import React, { useState } from 'react';
import BookItem from './BookItem';
import useSwipeScroll from '@/hooks/useHorizontalScroll';


const ChooseBook = () => {
    const [state, setState] = useState('3')
    const scroll = useSwipeScroll(null)

    return (
        <>
            <div className="flex flex-col gap-8">
                <label className='text-lg'>انتخاب کتاب</label>
                <div className="flex flex-col gap-6">
                    <Accordion
                        hideIndicator
                        showDivider={false}
                        selectedKeys={state}
                    >
                        <AccordionItem key="1"
                            startContent={<Checkbox
                                color='success'
                                style={{
                                    "--nextui-success": "196 94% 25%",
                                }} classNames={{ icon: 'text-white', label: 'lg:text-base text-xs' }} isSelected={state == "1"} onValueChange={(e) => setState(e ? '1' : '1')}>خودم فایل تدریس را آپلود می کنم.</Checkbox>}
                            aria-label="Accordion 1">
                            <div
                                className={`flex flex-col items-center text-center justify-center w-full h-64 p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer`}
                            // onDrop={handleDrop}
                            // onDragOver={handleDragOver}
                            >
                                <input
                                    type="file"
                                    className="hidden"
                                    // onChange={handleFileSelect}
                                    id={'name'} accept='image/jpeg, image/jpg, image/png, image/webp'
                                />
                                <label htmlFor={'name'} className="cursor-pointer mb-2">
                                    <p className="text-gray-500 lg:text-base text-xs">
                                        عکس را داخل بیاندازید؛ یا با کلیک عکس مورد نظر را انتخاب کنید
                                    </p>
                                </label>

                            </div>
                        </AccordionItem>
                        <AccordionItem key="2"
                            aria-label="Accordion 2"
                            classNames={{ content: 'py-0' }}
                            startContent={<Checkbox
                                color='success'
                                style={{
                                    "--nextui-success": "196 94% 25%",
                                }} classNames={{ icon: 'text-white', label: 'lg:text-base text-xs' }} isSelected={state == "2"} onValueChange={(e) => setState(e ? '2' : '2')} >انتخاب کتاب را به استاد محول می کنم.</Checkbox>}>
                        </AccordionItem>
                        <AccordionItem key="3"
                            aria-label="Accordion 3"
                            startContent={<Checkbox
                                color='success'
                                style={{
                                    "--nextui-success": "196 94% 25%",
                                }} classNames={{ icon: 'text-white', label: 'lg:text-base text-xs' }} isSelected={state == "3"} onValueChange={(e) => setState(e ? '3' : '3')}>خودم کتاب را از بین کتاب های استاد انتخاب می کنم.</Checkbox>}>
                            <div className="flex items-stretch gap-4 w-full overflow-x-auto scrollbar-hide" ref={scroll}>
                                {[...Array(10)].map((_, i) => <BookItem key={i} />)}
                            </div>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    );
};

export default ChooseBook;