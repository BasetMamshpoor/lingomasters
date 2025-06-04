import React, {useState} from 'react';
import {Spinner} from "@heroui/react";
import Download from "@icons/download.svg";
import Audio from "@icons/microphone.svg";
import AudioPlayer from './AudioPlayer'; // فرضاً مسیر درست AudioPlayer

const Sounds = ({data = [], isLoading}) => {
    const [selectedAudioId, setSelectedAudioId] = useState(null);

    const handleItemClick = (id) => {
        setSelectedAudioId(id === selectedAudioId ? null : id); // اگر دوباره کلیک شد، مخفی کن
    };

    return (
        <>
            {isLoading ? (
                <div className="centerOfParent w-full h-[30vh]">
                    <Spinner variant='dots' color='success' size="lg"/>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {data.length ? data.map((f) => (
                        <div key={f.id} className="cursor-pointer">
                            {selectedAudioId === f.id ? (
                                <div className="w-fit px-2 py-1 mx-8 border border-natural_gray-200 rounded-lg">
                                    <AudioPlayer isSender={false} audio_url={f.path} blocksColor='#2D59C8'/>
                                </div>
                            ) : (
                                <div onClick={() => handleItemClick(f.id)}
                                     className="py-1 px-8 flex items-center gap-2 w-full">
                                    <div className="centerOfParent rounded-lg bg-primary-50 w-12 h-12">
                                        {f.audio_type === 'voice' ? (
                                            <Audio className="w-8 h-8 fill-primary-700"/>
                                        ) : (
                                            <Download className="w-8 h-8 fill-primary-700"/>
                                        )}
                                    </div>
                                    <div className="flex flex-col grow">
                                        <p className="text-sm text-primary-950 font-semibold">
                                            {new Date(f.sent_at).toLocaleString('fa-IR')}
                                        </p>
                                        <div className="flex items-center gap-1">
                                            <p className="text-xs text-natural_gray-500 text-right" dir='ltr'>
                                                {f.file_size}
                                            </p>
                                            <span className="text-xs text-natural_gray-500">|</span>
                                            <p className="text-xs text-natural_gray-500">
                                                فرستنده: {f.sender_name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )) : (
                        <p className="text-center text-sm lg:col-span-4 col-span-3">
                            هیچ صوتی وجود ندارد
                        </p>
                    )}
                </div>
            )}
        </>
    );
};

export default Sounds;