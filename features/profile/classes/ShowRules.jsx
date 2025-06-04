import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@heroui/react";

const ShowRules = ({disclosure}) => {
    const {isOpen, onOpenChange} = disclosure;

    return (
        <>
            <Modal
                dir='rtl'
                size='2xl'
                isOpen={isOpen}
                onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader/>
                            <ModalBody>
                                <div className="overflow-x-auto">
                                    <table
                                        className="min-w-full table-auto border-collapse border border-natural_gray-400 bg-natural_gray-50 lg:text-base sm:text-xs text-[10px]">
                                        <thead>
                                        <tr>
                                            <th colSpan="2"
                                                className="border border-natural_gray-400 py-4 text-center text-white bg-primary-700">
                                                لغو کلاس توسط زبان آموز
                                            </th>
                                        </tr>
                                        <tr className="[&>th]:border [&>th]:border-natural_gray-400 [&>th]:py-4 [&>th]:text-center bg-primary-100">
                                            <th>زمان لغو</th>
                                            <th>کاهش اعتبار مالی استاد و پرداخت به لینگومسترز</th>
                                        </tr>
                                        </thead>
                                        <tbody
                                            className="[&>tr>td]:border [&>tr>td]:border-b [&>tr>td]:border-natural_gray-400 [&>tr>td]:py-4 [&>tr>td]:text-center">
                                        <tr>
                                            <td>۳ ساعت و کمتر از آن</td>
                                            <td>۵۰% مبلغ کلاس</td>
                                        </tr>
                                        <tr>
                                            <td>بیشتر از ۳ ساعت و کمتر از ۱۲ ساعت</td>
                                            <td>۲۰% مبلغ کلاس</td>
                                        </tr>
                                        <tr>
                                            <td>بین ۱۲ تا ۲۴ ساعت</td>
                                            <td>۱۵% مبلغ کلاس</td>
                                        </tr>
                                        <tr>
                                            <td>بیش از ۲۴ ساعت</td>
                                            <td>بدون کاهش اعتبار</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </ModalBody>
                            <ModalFooter/>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default ShowRules;