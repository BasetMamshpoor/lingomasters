import React from 'react';
import Book from '@icons/users.svg'
import ClassItem from "@/features/group-class/List/ClassItem";
import ProfessorItem from "@/features/private-class/List/Professoritem";
import TeacherCard from "@/components/TeacherCard";

const Related = ({data}) => {
    return (
        <>
            <div className="flex flex-col gap-10 items-center mt-6">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-3">
                        <Book className='fill-primary-700'/>
                        <p className="text-primary-950 font-semibold sm:text-base text-sm">اساتید دیگر</p>
                    </div>
                    <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4">
                        {data.map(item => <TeacherCard key={item.id} {...item}/>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Related;