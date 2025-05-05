import {Accordion, AccordionItem, Checkbox} from "@heroui/react";
import React from 'react';
import BookList from "@/components/Books/BookList";
import UploadIcon from "@icons/upload-cloud-02.svg";


const ChooseBook = ({data, state, setState}) => {
    const handleFileChange = (e) => {
        setState((prev) => ({...prev, evidence: e.target.files[0]}));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length > 0) {
            setState((prev) => ({...prev, evidence: e.dataTransfer.files[0]}));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleChange = (e, value) => {
        setState(prev => {
            return {...prev, book_type: e ? value : value}
        });
    };

    return (
        <>
            <div className="flex flex-col gap-2">
                <label className='text-lg'>انتخاب کتاب</label>
                <div className="flex flex-col gap-6">
                    <Accordion
                        hideIndicator
                        showDivider={false}
                        selectedKeys={state.book_type}
                    >
                        <AccordionItem
                            key="1"
                            startContent={<Checkbox
                                color='success'
                                style={{
                                    "--heroui-success": "196 94% 25%",
                                }}
                                classNames={{icon: 'text-white', label: 'lg:text-base text-xs'}}
                                isSelected={state.book_type === "1"} onValueChange={(e) => handleChange(e, '1')}>خودم
                                فایل تدریس را آپلود می کنم.</Checkbox>}
                            aria-label="Accordion 1">
                            <div
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                className="sm:py-6 sm:px-4 py-4 px-3 flex flex-col items-center gap-3 bg-white rounded-md border border-dashed border-natural_gray-300">
                                <input type="file" id="file" name='video' className="hidden"
                                       onChange={handleFileChange}
                                />
                                <div
                                    className="bg-natural_gray-50 rounded-full flex justify-center h-12 w-12 items-center">
                                    <UploadIcon className="w-8 h-8"/>
                                </div>
                                <div className="flex flex-col gap-0.5 items-center">
                                    <div className="flex sm:gap-1 gap-0.5">
                                        <label
                                            htmlFor="file"
                                            className="sm:text-sm text-xs text-primary-500 font-semibold hover:text-primary-950 cursor-pointer"
                                        >
                                            کلیک کنید
                                        </label>
                                        <p className="sm:text-sm text-xs text-natural_gray-950">
                                            یا فایل خود را در این محل قرار دهید.
                                        </p>
                                    </div>
                                    <p className="text-xs text-natural_gray-400 text-center">
                                        {(state.evidence && `فایل انتخابی: ${state.evidence.name}`) || 'SVG, PNG, JPG or GIF (max. 800x400px)'}
                                    </p>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem
                            key="2"
                            aria-label="Accordion 2"
                            classNames={{content: 'py-0'}}
                            startContent={<Checkbox
                                color='success'
                                style={{
                                    "--heroui-success": "196 94% 25%",
                                }} classNames={{icon: 'text-white', label: 'lg:text-base text-xs'}}
                                isSelected={state.book_type === "2"} onValueChange={(e) => handleChange(e, '2')}>
                                انتخاب کتاب را به استاد محول می کنم.</Checkbox>}>
                        </AccordionItem>
                        <AccordionItem
                            key="3"
                            aria-label="Accordion 3"
                            startContent={<Checkbox
                                color='success'
                                style={{
                                    "--heroui-success": "196 94% 25%",
                                }} classNames={{icon: 'text-white', label: 'lg:text-base text-xs'}}
                                isSelected={state.book_type === "3"} onValueChange={(e) => handleChange(e, '3')}>خودم
                                کتاب را از بین کتاب های استاد انتخاب می کنم.</Checkbox>}>
                            <BookList products={data} withSelect withSearch state={state} handleChangeState={setState}/>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    );
};

export default ChooseBook;