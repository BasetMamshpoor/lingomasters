import React from 'react';
import {Input} from "@heroui/react";

const ForgivePass = ({data, setData, setStep}) => {
    return (
        <>
            <div className="h-screen w-full bg-white overflow-hidden relative font-iransans">
                <div className="login blur-sm lg:mr-[400px] lg:rounded-r-3xl"></div>
                <div
                    className="bg-white lg:w-[533px] sm:w-[504px] w-[328px] shadow-md border sm:rounded-3xl rounded-xl absolute top-[15%] lg:right-[10%] right-1/2 lg:translate-x-0 translate-x-1/2 py-5 px-6 flex flex-col gap-5">
                    <div className="flex flex-col gap-10 items-center">
                        <p className="text-primary-600 font-black sm:text-4xl text-xl">لینگومسترز</p>
                        <p>فراموشی رمز</p>
                    </div>
                    <form className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col w-full gap-5">
                                <div className="flex flex-col gap-4">
                                    <Input
                                        label="لطفا شماره تلفن یا ایمیل خود را وارد کنید"
                                        placeholder=''
                                        type="text"
                                        isRequired
                                        labelPlacement="outside"
                                        variant="bordered"
                                        radius='sm'
                                        value={data.user}
                                        onChange={(e) => setData({...data, user: e.target.value})}
                                        classNames={{label: "sm:text-sm text-xs", input: "sm:text-sm text-xs"}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-10">
                            <button type='button' disabled={!data.user} onClick={() => setStep(prev => prev + 1)}
                                    className="disabled:bg-natural_gray-400 text-white bg-primary-700 w-full px-3 py-2 sm:text-base text-sm rounded effect-2">
                                ارسال کد
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ForgivePass;