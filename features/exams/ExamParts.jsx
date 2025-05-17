import React from 'react';
import QuestionRenderer from "@/features/exams/QuestionRenderer";

const ExamParts = ({setPart, data}) => {
    const exam = [
        {
            id: 1,
            title: "Questions 11 and 12 are based on the passage below. ",
            description: "Modern entomologists are primarily engaged in the research of insects that provide a direct benefit, or cause direct harm, to human interests. The benefits of researching and protecting insect life may be immediate, such as using an insect presence to control pests or diseases, or long-term, such as protecting benign native insect species from unnecessary human extirpation in order to maintain a balanced ecosystem. Research on harmful insect life endeavors to produce methods of insect control that are reliable and effective, while minimizing the effect of the control on other species. Although most insect orders include both pests and beneficial species, a few orders, such as lice and fleas, provide no benefits to humans and are said to be entirely parasitic.",
            medias: [
                {
                    media_type: "image",
                    media_path: "/images/exam.png",
                    description: "Image Description: These two non-horizontal lines meet at point R, below the two horizontal lines, and each intersects each of the horizontal lines exactly once. These intersections are labeled P, T, S, and Q, beginning with the top left and proceeding clockwise. Angle R is labeled eighty degrees. Line segment PQ equals line segment ST and line segment QR equals line segment RS."
                },
                {
                    media_type: "image",
                    media_path: "/images/exam2.png",
                    description: ""
                }
            ],
            variants: [
                {
                    id: 1,
                    question: "According to the manager, which $TWO$ things can make @@  the job of kitchen assistant stressful?",
                    options: [
                        {
                            id: 1,
                            text: "A.follow orders immediately."
                        },
                        {
                            id: 2,
                            text: "B.The kitchen gets very hot."
                        },
                        {
                            id: 3,
                            text: "C. take a break."
                        }
                    ]
                },
                {
                    id: 2,
                    question: "$According$ to the manager, which $TWO$ things can make @@  the job of kitchen assistant @@ stressful?",
                    options: [
                        {
                            id: 1,
                            text: "A.follow - immediately."
                        },
                        {
                            id: 2,
                            text: "B.The kitchen - hot."
                        },
                        {
                            id: 3,
                            text: "C. take - break."
                        }
                    ]
                }
            ],
            questionType: "multi_test"
        },
        {
            id: 2,
            title: "Questions 11 and 12 are based on the passage below. ",
            description: "",
            medias: [],
            variants: [
                {
                    id: 1,
                    question: "According to the manager, which $TWO$ things can make @@  the job of kitchen assistant stressful?",
                    options: [
                        {
                            id: 1,
                            text: "A.follow orders immediately."
                        },
                        {
                            id: 2,
                            text: "B.The kitchen gets very hot."
                        },
                        {
                            id: 3,
                            text: "C. take a break."
                        },
                        {
                            id: 4,
                            text: "C. take a break."
                        },
                        {
                            id: 5,
                            text: "C. take a break."
                        }
                    ]
                },
            ],
            questionType: "multi_test"
        },
        {
            id: 3,
            title: "",
            description: "",
            medias: [],
            question:'According to the manager, which $TWO$ things can make @@  the job of kitchen assistant stressful?',
            questionType: "short_answer",
        }
    ]
    return (
        <>
            <div className="font-Inner my-10 py-10 px-6 border border-natural_gray-200 rounded-2xl flex flex-col gap-6">
                <h1 className='font-bold text-2xl'>{data.part_title}</h1>
                <div className="p-6 border border-natural_gray-200 rounded-xl flex flex-col gap-2">
                    <p className="text-sm font-bold">Directions</p>
                    <p className="text-sm whitespace-break-spaces">{data.description}</p>
                </div>
                
            </div>
        </>
    );
};

export default ExamParts;