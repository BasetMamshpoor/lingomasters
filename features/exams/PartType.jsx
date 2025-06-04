import React from 'react';
import Reading from "@/features/exams/Reading";
import Writing from "@/features/exams/Writing";
import Others from "@/features/exams/Others";
import Cloze from "@/features/exams/Cloze";
import Listening from "@/features/exams/Listening";
import Speaking from "@/features/exams/Speaking";

const PartType = ({type}) => {
    switch (type) {
        case "reading":
            return <Reading/>;
        case "writing":
            return <Writing/>;
        case "Cloze test":
            return <Cloze/>;
        case "listening":
            return <Listening/>;
        case "speaking":
            return <Speaking/>;
        default:
            return <Others/>;
    }
};

export default PartType;