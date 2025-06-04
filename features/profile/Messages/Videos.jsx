import React  from 'react';
import {Spinner} from "@heroui/react";
import VideoPlayer from "@/features/profile/Messages/VideoPlayer";

const Videos = ({data = [], isLoading}) => {
    return (
        <>
            {isLoading ?
                <div className="centerOfParent w-ful h-[30vh]"><Spinner variant='dots' color='success' size="lg"/>
                </div> :
                <div className="grid lg:grid-cols-4 grid-cols-3 gap-2">
                    {data.length ? (
                        data.map((item) => (
                            <div key={item.id}
                                 className="w-full lg:h-[151px] h-[110px] bg-gray-200 centerOfParent text-gray-700 hover:bg-gray-300 transition-colors">
                                <VideoPlayer
                                    movie={item.path}
                                    className="w-full h-full centerOfParent"
                                    trigger={"نمایش فیلم"}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-sm lg:col-span-4 col-span-3">هیچ ویدیویی وجود ندارد</p>
                    )}
                </div>}
        </>
    );
};

export default Videos;