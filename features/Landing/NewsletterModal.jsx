import {addToast, Button, Input, Modal, ModalBody, ModalContent, useDisclosure} from "@heroui/react";
import {useEffect, useState} from 'react'
import Bell from "@icons/bell.svg"
import usePostRequest from "@/hooks/usePostRequest";

export default function NewsletterModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isIt, setIsIt] = useState(false)
    const {sendPostRequest, isLoading} = usePostRequest()

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            if (scrollY > 600) {
                onOpen()
                window.removeEventListener('scroll', handleScroll)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData(event.target)
        const Data = Object.fromEntries(formData.entries())
        const {success, successMessage, errorMessage} = await sendPostRequest("POST", '/newsletter', Data)
        if (success) {
            addToast({
                title: "ثبت شد",
                description: successMessage,
                color: "success",
            })
            onOpenChange()
        } else
            addToast({
                title: "ثبت نشد",
                description: errorMessage,
                color: "danger",
            })
    }

    return (
        <Modal
            placement="center"
            radius="sm"
            dir={"rtl"}
            classNames={{base: 'bg-primary-50 border-r-8 border-primary-700 py-5 lg:max-w-[774px] w-full'}}
            isOpen={isOpen}
            onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalBody>
                            <div className="flex flex-col gap-10">
                                <div className="flex gap-4">
                                    <Bell className="fill-primary"/>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-primary-700">تخفیفات لینگومسترز</p>
                                        <p>از تخفیف های شگفت انگیز لینگومسترز باخبر شوید.</p>
                                        <p className="text-natural_gray-600 text-xs">با ارسال ایمیل موافق هستید</p>
                                    </div>
                                </div>
                                {!isIt ? <div className="centerOfParent w-full gap-6">
                                    <Button radius="sm" onPress={onClose} variant="bordered" color="warning"
                                            className="flex-1">فعلا نه</Button>
                                    <Button radius="sm" onPress={() => setIsIt(true)} variant="solid" color="primary"
                                            className="flex-1 bg-primary-600 text-white">بله</Button>
                                </div> : <form className="flex flex-col gap-8 border-t pt-4" onSubmit={handleSubmit}>
                                    <Input
                                        isDisabled={isLoading}
                                        type={'email'}
                                        name="email"
                                        label={"ایمیل خود را وارد کنید"}
                                        labelPlacement="outside"
                                        placeholder="@gmail.com"
                                        radius="sm"
                                        variant="bordered"
                                        classNames={{
                                            label: "text-primary-700 text-xs",
                                            inputWrapper: "bg-white"
                                        }}
                                    />
                                    <Button isLoading={isLoading} radius="sm" type="submit" variant="solid"
                                            color="primary"
                                            className="flex-1 bg-primary-600 py-2 text-white">ارسال</Button>
                                </form>}
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}
