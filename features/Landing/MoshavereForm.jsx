import React from 'react';
import Chat from "@icons/chats.svg";
import Note from "@icons/note-2.svg";
import Image from "next/image";
import {addToast, Button, Input, Select, SelectItem, Textarea} from "@heroui/react";
import usePostRequest from "@/hooks/usePostRequest";

const hours = ["صبح", "ظهر", "عصر", "شب"];

const MoshavereForm = () => {
    const {isLoading, sendPostRequest} = usePostRequest()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        const {
            success,
            successMessage,
            errorMessage
        } = await sendPostRequest('POST', '/landing-page/consultation', data)
        if (success) {
            addToast({
                title: "فرستاده شد",
                description: successMessage,
                color: 'success'
            })
            e.target.reset();
        } else {
            addToast({
                title: "خطا",
                description: errorMessage,
                color: 'danger'
            })
        }
    }

    return (
        <>
            <div className="flex flex-col gap-6" id='moshavere'>
                <div className="centerOfParent gap-4">
                    <Chat className="sm:w-8 sm:h-8"/>
                    <p className="lg:text-2xl sm:text-lg text-sm">آگر می خوای تو انتخاب دوره بهت کمک کنیم ، برای ما پیام
                        بزار.</p>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    <div className="w-full h-full max-h-[537px]">
                        <picture>
                            <source
                                srcSet={"/images/moshavere.png"}
                                media="(max-width: 639px)"/>
                            <source
                                srcSet={"/images/sm moshavere.png"}
                                media="(min-width: 640px) and (max-width: 1023px)"/>
                            <source
                                srcSet={"/images/lg moshavere.png"}
                                media="(min-width: 1024px)"/>
                            <Image
                                src={"/images/lg moshavere.png"}
                                alt="Responsive example"
                                width={0}
                                height={0} sizes='100vw'
                                className='w-full h-full object-contain'/>
                        </picture>
                    </div>
                    <div className="rounded-2xl bg-natural_gray-50 py-8 px-6 flex flex-col gap-6" id='moshavere'>
                        <div className="flex items-center gap-6">
                            <Note/>
                            <p className="lg:text-2xl sm:text-lg text-sm">فرم درخواست مشاوره</p>
                        </div>
                        <p className="text-natural_gray-600 lg:text-base text-sm">این فیلدها رو تکمیل کنید و برامون
                            بفرستید تا کارشناسان لینگومسترز توی سریع‌ترین زمان ممکن، برای راهنمایی با شما تماس
                            بگیرن!</p>
                        <form className="grid sm:grid-cols-2 grid-cols-1 sm:gap-6" onSubmit={handleSubmit}>
                            <Input
                                isRequired
                                errorMessage=" "
                                name={"name"}
                                label="نام و نام خانوادگی"
                                placeholder="نام و نام خانوادگی"
                                labelPlacement="outside"
                                variant="bordered"
                                classNames={{inputWrapper: 'bg-white', label: 'sm:text-sm text-xs'}}
                                radius="sm"
                            />
                            <Input
                                isRequired
                                errorMessage=" "
                                name={"mobile"}
                                label="شماره تماس"
                                placeholder="شماره تماس"
                                labelPlacement="outside"
                                variant="bordered"
                                classNames={{inputWrapper: 'bg-white', label: 'sm:text-sm text-xs'}}
                                radius="sm"
                            />
                            <Select
                                placeholder="انتخاب کنید"
                                isRequired
                                errorMessage=" "
                                name={"time"}
                                className="sm:col-span-2 col-span-1"
                                labelPlacement="outside"
                                radius='sm'
                                variant="bordered"
                                classNames={{
                                    mainWrapper: 'bg-white',
                                    listbox: '[&>ul>li>span>svg]:w-3 [&>ul>li>span>svg]:h-3',
                                    label: 'sm:text-sm text-xs',
                                }}
                                label="ساعت پاسخگویی">
                                {hours.map((hour) => (
                                    <SelectItem
                                        key={hour}
                                        className="flex-row-reverse"
                                        textValue={hour}>
                                        <p className="flex items-center justify-end w-full">{hour}</p>
                                    </SelectItem>
                                ))}
                            </Select>
                            <Textarea
                                isRequired
                                errorMessage=" "
                                name={"description"}
                                className="sm:col-span-2 col-span-1"
                                classNames={{
                                    label: "sm:text-sm text-xs",
                                    inputWrapper: 'bg-white'
                                }}
                                label="توضیحات"
                                placeholder="پیام خود را بنویسید"
                                variant="bordered"
                                labelPlacement="outside"
                                radius="sm"
                                minRows={4}
                                maxRows={8}
                            />
                            <div className="flex items-center *:flex-1">
                                {/*reCAPTCHA */}
                                <Button isLoading={isLoading} type='submit'
                                        className="effect-2 bg-primary-600 text-white py-2 rounded centerOfParent">ارسال
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoshavereForm;