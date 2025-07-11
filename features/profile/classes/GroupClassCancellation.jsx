import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Alert, Textarea, addToast,
} from "@heroui/react";
import React, {useState} from "react";
import useSwipeScroll from "@/hooks/useHorizontalScroll";
import Close from '@icons/close.svg'
import UploadIcon from "@icons/upload-cloud-02.svg";
import usePostRequest from "@/hooks/usePostRequest";

const staticComments = [
    'دوست داشتم', 'تداخل کلاس ها', 'آب و هوا', 'نامساعد بودن شرایط', 'بیماری'
];
export default function GroupClassCancellation({id, disclosure, is_near, api}) {

    const {isOpen, onOpen, onOpenChange} = disclosure;

    const [formData, setFormData] = useState({reason: "", evidence: null});
    const [xComment, setXComment] = useState(true)
    const ref = useSwipeScroll()
    const {isLoading, sendPostRequest} = usePostRequest()

    const handleClick = (value) => {
        setFormData((prev) => ({...prev, reason: value}));
        setXComment(!xComment)
    }
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({...prev, evidence: e.target.files[0]}));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length > 0) {
            setFormData((prev) => ({...prev, evidence: e.dataTransfer.files[0]}));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {
            errorMessage,
            successMessage,
            success
        } = await sendPostRequest('POST', `${api}/update_cancellation/${id}`, formData, true)
        if (success)
            addToast({
                title: 'انجام شد',
                description: successMessage,
                color: 'success'
            })
        else
            addToast({
                title: 'انجام نشد',
                description: errorMessage,
                color: 'danger'
            })
    };

    return (
        <>
            <Modal
                size='xl'
                dir={'rtl'}
                isOpen={isOpen}
                onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleSubmit}>
                            <ModalHeader className="font-semibold text-sm text-natural_gray-950">برای لغو این کلاس باید
                                دلیل خود را بنویسید </ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col gap-6">
                                    {!!is_near ?
                                        <Alert
                                            color='warning'
                                            title='توجه داشته باشید:'
                                            description='به دلیل اینکه لغو کلاس زیر 24 ساعت انجام می‌شود امکان لغو وجود ندارد و مبلغ استرداد نمی شود.'
                                        /> :
                                        <>
                                            <div className="relative w-full">
                                                <Textarea
                                                    minRows={5} radius="sm"
                                                    label='دلیل لغو کلاس'
                                                    labelPlacement='outside'
                                                    value={formData.reason}
                                                    onChange={handleInputChange}
                                                    maxRows={10} variant="bordered" name="reason"
                                                    className="self-stretch"
                                                    placeholder="توضیحات">توضیحات</Textarea>
                                                <div
                                                    className="absolute left-0 bottom-0 px-3 py-1 text-sm flex items-center gap-2 w-full">
                                                    <div ref={ref}
                                                         className={`${xComment ? 'hidden' : 'flex'} items-center gap-2 overflow-x-auto scrollbar-hide px-1`}>{staticComments.map((comment, i) =>
                                                        <span key={i}
                                                              className="border rounded-lg py-0.5 px-2 whitespace-nowrap cursor-pointer"
                                                              onClick={() => handleClick(comment)}>{comment}</span>)}</div>
                                                    <span
                                                        className="text-primary-600 whitespace-nowrap mr-auto cursor-pointer"
                                                        onClick={() => setXComment(!xComment)}>{!xComment ?
                                                        <Close
                                                            className='fill-primary-600'/> : 'انتخاب غیبت موجه'}</span>
                                                </div>
                                            </div>
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
                                                        {(formData.evidence && `فایل انتخابی: ${formData.evidence.name}`) || 'SVG, PNG, JPG or GIF (max. 800x400px)'}
                                                    </p>
                                                </div>
                                            </div>
                                        </>}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button type='button' disabled={isLoading} color="primary" variant="light"
                                        onPress={onClose}>
                                    انصراف
                                </Button>
                                <Button isDisabled={is_near} type='submit' color="danger" isLoading={isLoading}>
                                    لغو کلاس
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
// export default GroupClassCancellation;