import React from 'react';

const RuleOfCancle = () => {
    return (
        <>
            <div className="my-20 overflow-x-auto w-full" dir='rtl'>
                <table className="min-w-full table-auto border-collapse border border-natural_gray-400 bg-natural_gray-50 lg:text-base sm:text-xs text-[10px]">
                    <thead>
                        <tr>
                            <th colSpan="4" className="border border-natural_gray-400 py-4 text-center">
                                لغو کلاس توسط دانش آموز
                            </th>
                        </tr>
                        <tr className="[&>th]:lg:border-s [&>th]:border-b [&>th]:border-natural_gray-400 [&>th]:py-4 [&>th]:text-center">
                            <th className="border-l">زمان لغو</th>
                            <th>کاهش اعتبار مالی دانش آموز</th>
                            <th>پرداختی به استاد</th>
                            <th>پرداختی به لینگو مسترز</th>
                        </tr>
                    </thead>
                    <tbody className="[&>tr>td]:lg:border-l [&>tr>td]:lg:border-b-0 [&>tr>td]:border-b [&>tr>td]:border-natural_gray-400 [&>tr>td]:py-4 [&>tr>td]:text-center">
                        <tr>
                            <td className="border-l">۳ ساعت و کمتر از آن</td>
                            <td>۱۰۰% مبلغ کلاس</td>
                            <td>۶۵%</td>
                            <td>۳۵%</td>
                        </tr>
                        <tr>
                            <td className="border-l">بیشتر از ۳ ساعت و کمتر از ۱۲ ساعت</td>
                            <td>۶۰% مبلغ کلاس</td>
                            <td>۳۵%</td>
                            <td>۲۵%</td>
                        </tr>
                        <tr>
                            <td className="border-l">بین ۱۲ تا ۲۴ ساعت</td>
                            <td>۴۰% مبلغ کلاس</td>
                            <td>۲۵%</td>
                            <td>۱۵%</td>
                        </tr>
                        <tr>
                            <td className="border-l">بیشتر از ۲۴ ساعت</td>
                            <td>بدون کاهش اعتبار</td>
                            <td>۰%</td>
                            <td>۰%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RuleOfCancle;