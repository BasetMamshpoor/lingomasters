import TestQuestions from "@/features/exams/TestQuestions";
import React from "react";
import ShortAnswer from "@/features/exams/ShortAnswer";

export default function QuestionRenderer({question, index}) {
    switch (question.questionType) {
        case "multi_test":
            return <TestQuestions data={question} number={index + 1}/>;
        case "short_answer":
            return <ShortAnswer data={question} number={index + 1}/>;
        default:
            return <div>Unknown question type.</div>;
    }
}
