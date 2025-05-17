import React from 'react';
import Reading from "@/features/exams/Reading";
import Writing from "@/features/exams/Writing";
import Others from "@/features/exams/Others";

const PartType = ({type}) => {
    switch (type) {
        case "reading":
            return <Reading/>;
        case "writing":
            return <Writing/>;
        default:
            return <Others/>;
    }
};

export default PartType;