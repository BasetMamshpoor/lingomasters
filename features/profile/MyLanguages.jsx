import React, {useContext, useState} from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure, addToast,} from "@heroui/react";
import Plus from "@icons/plus.svg";
import Image from "next/image";
import {Language} from "@/providers/languageProvider";
import usePostRequest from "@/hooks/usePostRequest";

const MyLanguages = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {languages, selectedLanguage, setReload} = useContext(Language)
    const currentLanguage = languages?.student_languages
    const [ids, setIds] = useState(currentLanguage?.map(e => e.id) || [])
    const {sendPostRequest, isLoading} = usePostRequest()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {
            success,
            successMessage,
            errorMessage
        } = await sendPostRequest("POST", "/student-panel/language/store", ids)
        if (success) {
            addToast({
                title: "ثبت شد",
                description: successMessage,
                color: "success",
            })
            setReload(Math.random())
        } else {
            addToast({
                title: 'ثبت نشد',
                description: errorMessage,
                color: "danger",
            })
        }
    }
    return (
        <>
            <div className="flex items-center justify-between  p-6 rounded-2xl bg-primary-50">
                <p className='sm:text-lg text-primary-950'>زبان‌های من ({selectedLanguage?.language})</p>
                <div className="flex items-center gap-10">
                    <Button
                        onPress={onOpen}
                        isIconOnly
                        variant='bordered'
                        className={'h-8 w-8 border-primary-600'}
                        radius='sm'><Plus className='w-5 h-5 fill-primary-600'/>
                    </Button>
                    {currentLanguage?.map((lang) => {
                        return (
                            <div key={lang.id} className="centerOfParent">
                                <Image src={lang.flag} alt={lang.language} width={100} height={100}
                                       className='w-10 h-10'/>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Modal dir="rtl" placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleSubmit}>
                            <ModalHeader>انتخاب زبان</ModalHeader>
                            <ModalBody>
                                <div className="flex flex-wrap items-center gap-4">
                                    {languages?.languages.map((l) => {
                                        const isSelected = ids.includes(l.id);

                                        return (
                                            <div
                                                key={l.id}
                                                onClick={() =>
                                                    setIds((prev) =>
                                                        prev.includes(l.id)
                                                            ? prev.filter((id) => id !== l.id)
                                                            : [...prev, l.id]
                                                    )
                                                }
                                                className={`flex flex-col items-center gap-2 p-2 rounded cursor-pointer transition hover:border-primary-400 border-2 ${isSelected ? ' border-primary-500' : ' border-transparent'}`}
                                            >
                                                <Image
                                                    src={l.flag}
                                                    alt={l.language}
                                                    width={40}
                                                    height={40}
                                                    className="w-10 h-10"
                                                />
                                                <p className={`text-xs ${isSelected ? 'text-primary-600 font-medium' : ''}`}>
                                                    {l.language}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <Button radius="sm" className="flex-1" color="warning" variant="bordered"
                                        onPress={onClose}>
                                    انصراف
                                </Button>
                                <Button isLoading={isLoading} type="submit" radius="sm"
                                        className="flex-1 bg-primary-600 text-white" color="primary"
                                        variant="solid">
                                    ثبت
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default MyLanguages;