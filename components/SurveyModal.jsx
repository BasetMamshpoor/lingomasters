import React, {useContext, useState, useEffect} from "react";
import {Information} from "@/providers/InformationProvider";
import {Modal, ModalContent, ModalHeader, ModalBody, Button, addToast, RadioGroup, Radio} from "@heroui/react";
import useGetRequest from "@/hooks/useGetRequest";
import usePostRequest from "@/hooks/usePostRequest";

const typeLabels = {
    private: "خصوصی",
    workshop: "ورکشاپ",
    webinar: "وبینار",
    group: "گروهی",
};

const SurveyModal = () => {
    const {student, setReload} = useContext(Information);
    const {isLoading, sendPostRequest} = usePostRequest();

    const qList = student?.q || [];
    const currentClass = qList[0];

    const [data, , , , , loading] = useGetRequest(
        true,
        currentClass && `/surveys/${currentClass.type}/${currentClass.id}`
    );

    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if (Array.isArray(data)) {
            setAnswers(
                data.map((q) => ({
                    question_id: q.id,
                    rating: null,
                }))
            );
        }
    }, [data]);

    if (!currentClass || loading || !Array.isArray(data)) return null;

    const handleChange = (questionId, rating) => {
        setAnswers((prev) =>
            prev.map((ans) =>
                ans.question_id === questionId ? {...ans, rating: parseInt(rating)} : ans
            )
        );
    };

    const handleSubmit = async () => {
        const allAnswered = answers.every((ans) => ans.rating !== null);
        if (!allAnswered) {
            addToast({
                title: "خطا",
                description: "لطفاً به همه سوالات پاسخ دهید.",
                color: "danger",
            });
            return;
        }

        const {success, successMessage, errorMessage} = await sendPostRequest(
            "POST",
            `/surveys/${currentClass.type}/${currentClass.id}`,
            {answers}
        );

        if (success) {
            addToast({
                title: "ثبت شد",
                description: successMessage,
                color: "success",
            });
            setReload(Math.random());
        } else {
            addToast({
                title: "ثبت نشد",
                description: errorMessage,
                color: "danger",
            });
        }
    };

    return (
        <Modal
            scrollBehavior="inside"
            dir="rtl"
            size="lg"
            hideCloseButton
            placement="center"
            classNames={{base: "pb-6"}}
            isOpen={true} onOpenChange={() => {
        }}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>
                            نظرسنجی برای کلاس {typeLabels[currentClass.type] || currentClass.type}
                        </ModalHeader>
                        <ModalBody>
                            {[...data]
                                .sort((a, b) => a.order - b.order)
                                .map((question, index) => (
                                    <div key={question.id} className="mb-6">
                                        <label
                                            className="block font-semibold mb-2">{index + 1}. {question.question}</label>
                                        <RadioGroup
                                            style={{
                                                "--heroui-default-500": "196 94% 25%",
                                            }}
                                            color='default'
                                            orientation="horizontal"
                                            classNames={{wrapper: 'justify-between'}}
                                            value={
                                                answers.find((a) => a.question_id === question.id)?.rating?.toString() || ""
                                            }
                                            onValueChange={(val) => handleChange(question.id, val)}
                                        >
                                            <Radio value="5">5</Radio>
                                            <Radio value="4">4</Radio>
                                            <Radio value="3">3</Radio>
                                            <Radio value="2">2</Radio>
                                            <Radio value="1">1</Radio>
                                        </RadioGroup>
                                    </div>
                                ))}

                            <div className="flex gap-4 mt-8">
                                <Button
                                    isLoading={isLoading}
                                    className="bg-primary-600 text-white flex-1"
                                    onPress={async () => {
                                        await handleSubmit();
                                        onClose();
                                    }}
                                >
                                    ثبت نظرسنجی
                                </Button>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default SurveyModal;
