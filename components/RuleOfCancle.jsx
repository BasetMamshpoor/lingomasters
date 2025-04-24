import React from 'react';

const RuleOfCancle = () => {
    return (
        <>
            <div className="my-20 overflow-x-auto" dir='rtl'>
                <table
                    className="min-w-full table-auto border-collapse border border-natural_gray-400 bg-natural_gray-50 lg:text-base sm:text-xs text-[10px]">
                    <thead>
                    <tr>
                        <th colSpan="4" className="border border-natural_gray-400 py-4 text-center">
                            لغو کلاس توسط دانش آموز
                        </th>
                    </tr>
                    <tr className="[&>th]:lg:border-s [&>th]:border-b [&>th]:border-natural_gray-400 [&>th]:py-4 [&>th]:text-center">
                        <th className="border-l">مدت زمان باقی مانده به شروع کلاس</th>
                        <th>میزان جریمه</th>
                    </tr>
                    </thead>
                    <tbody
                        className="[&>tr>td]:lg:border-l [&>tr>td]:lg:border-b-0 [&>tr>td]:border-b [&>tr>td]:border-natural_gray-400 [&>tr>td]:py-4 [&>tr>td]:text-center">
                    <tr>
                        <td className="border-l px-6">پس از شروع کلاس (غیبت)</td>
                        <td className="px-6">۱۰۰% مبلغ کلاس</td>
                    </tr>
                    <tr>
                        <td className="border-l px-6">کمتر از ۳ ساعت قبل از شروع کلاس</td>
                        <td className="px-6">8۰% مبلغ کلاس</td>
                    </tr>
                    <tr>
                        <td className="border-l px-6">تا ۳ ساعت قبل از شروع کلاس</td>
                        <td className="px-6">6۰% مبلغ کلاس</td>
                    </tr>
                    <tr>
                        <td className="border-l px-6">بین ۳ تا ۶ ساعت قبل از شروع کلاس</td>
                        <td className="px-6">40% مبلغ کلاس</td>
                    </tr>
                    <tr>
                        <td className="border-l px-6">بین ۶ تا ۱۲ ساعت قبل از شروع کلاس</td>
                        <td className="px-6">20% مبلغ کلاس</td>
                    </tr>
                    <tr>
                        <td className="border-l px-6">بیش از ۲۴ ساعت قبل از شروع کلاس</td>
                        <td className="px-6">بدون جریمه</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RuleOfCancle;