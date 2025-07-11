import React from 'react';
import Alt from "@icons/file.svg";

const Headlines = ({data}) => {
    return (
        <>
            <div
                className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-52 withYellowCircel"
                id='target'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Alt className='w-5 h-5 fill-primary-800'/></div>
                    <span className='sm:text-base text-sm text-primary-950'>سرفصل ها</span>
                </div>
                <ul className="space-y-4 list-inside text-sm w-full">
                    {data?.map(e => (
                        <li key={e}>
                            <p className="text-sm ">{e}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Headlines;