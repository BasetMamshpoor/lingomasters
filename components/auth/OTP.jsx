import React, {useEffect, useState} from 'react';
import {addToast, InputOtp} from "@heroui/react";
import axios from "axios";
import {useRouter} from "next/router";
import usePostRequest from "@/hooks/usePostRequest";
import Timer from "@/components/Timer";
import Cookies from "js-cookie";

const Otp = ({setStep, user, login, data: Data}) => {
        const {push} = useRouter()
        const [value, setValue] = React.useState("");
        const [timer, setTimer] = useState(0)
        const [sendAgain, setSendAgain] = useState()
        const [loading, setLoading] = useState(true)
        const {isLoading, error, sendPostRequest} = usePostRequest()

        useEffect(() => {
            if (!user) push(-1)
            else {
                const send_otp = async () => {
                    await axios.post('/send-otp', user)
                        .then(res => {
                            addToast({
                                title: 'ارسال شد',
                                description: res.data.message || 'کد تایید ارسال شد',
                                color: 'success',
                            })
                            setTimer(parseInt(res.data.response.data.remain))
                        })
                        .catch(err => {
                            addToast({
                                title: 'خطا',
                                description: err.response?.data.message || 'خطایی رخ داده است',
                                color: 'danger',
                            })
                            setTimer(0)
                        })
                        .finally(() => setLoading(false))
                }
                send_otp()
            }
        }, [sendAgain])
        useEffect(() => {
            if (value.length === 6)
                hanleSubmit()
        }, [value])
        const hanleSubmit = async () => {
            const {
                success,
                data,
                successMessage,
                errorMessage
            } = await sendPostRequest("POST", login ? '/login' : '/register/student-store', {
                    ...Data,
                    ...user,
                    otp:
                    value
                }, true, false
            )
            if (success) {
                addToast({
                    title: 'ورود موفق',
                    description: successMessage || 'ورود موفقیت آمیز بود',
                    color: 'success',
                })
                const {token, ...other} = data.response.data
                Cookies.set('token', JSON.stringify(token), {expires: token.expires_at})
                localStorage.setItem('student', JSON.stringify(other))
                await push('/profile')
            } else {
                addToast({
                    title: 'خطا',
                    description: errorMessage || 'خطایی رخ داده است',
                    color: 'danger',
                })
            }
        }

        return (
            <>
                <div className="h-screen w-full bg-white overflow-hidden relative font-iransans">
                    <div className="login blur-sm lg:mr-[400px]"></div>
                    <div
                        className="bg-white sm:w-[504px] w-[328px] shadow-md border sm:rounded-3xl rounded-xl absolute top-[15%] lg:right-[10%] right-1/2 lg:translate-x-0 translate-x-1/2 py-5 px-6 flex flex-col gap-5">
                        <div className="flex flex-col gap-10 items-center">
                            <p className="text-blue-600 sm:text-4xl text-xl">لینگومسترز</p>
                            <p>ورود</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="mt-10">
                                <p>کد تایید ارسال شده را وارد کنید</p>
                                <div className="flex items-stretch justify-center" dir='ltr'>
                                    <InputOtp
                                        classNames={{
                                            base: "w-full",
                                            wrapper: 'w-full justify-center',
                                            segmentWrapper: 'w-full sm:gap-4',
                                            segment: 'h-[64px] flex-[1_0_0] rounded-[15px] text-xl'
                                        }}
                                        length={6}
                                        variant='bordered'
                                        errorMessage="کد تایید باید 6 رقمی باشد"
                                        value={value}
                                        onValueChange={setValue}/>
                                </div>
                            </div>
                            <button className='text-right' type='button'
                                    onClick={() => setStep(prev => (prev - 1))}>تغییر
                                ایمیل یا شماره موبایل
                            </button>
                            <div className="flex items-center gap-6">
                                <Timer
                                    withProgress={false}
                                    time={timer}
                                    withHour={false}
                                    message={<p
                                        className='cursor-pointer text-blue-600'
                                        onClick={e => {
                                            setSendAgain(Math.random())
                                        }}>ارسال مجدد</p>}/>
                            </div>
                            <div className="w-full flex items-center gap-2 md:mt-20 mt-4">
                                <div className="w-full">
                                    <button disabled={(loading || isLoading) || (value.length < 6)} type='button'
                                            onClick={hanleSubmit}
                                            className="disabled:bg-natural_gray-400 bg-primary-700 text-white w-full px-3 py-2 sm:text-base text-sm rounded effect-2">
                                        ورود
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
;

export default Otp;