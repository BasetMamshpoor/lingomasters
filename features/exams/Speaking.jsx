import React, {useState} from 'react';
import Image from "next/image";
import SoundPlayer from "@/features/exams/SoundPlayer";
import {useExamsContext} from "@/providers/ExamProvider";
import {formatTextToJSX} from "@/helpers/formatText";

import dynamic from "next/dynamic";
const AudioRecorder = dynamic(() => import('../../components/Comments/VoiceRecorder'), {ssr: false});


const Speaking = () => {
    const {data, part, setPart, isLoading} = useExamsContext();
    const [voice, setVoice] = useState(null)

    return (
        <>
            <div className="flex flex-col gap-14">
                <div className="flex flex-col gap-12">
                    {!!data.medias.length && data.medias.map(e => (
                        e.media_type === 'image' ? <div className="flex flex-col gap-4">
                                <div className="centerOfParent w-full">
                                    <Image alt={title} src={e.media_path} width={100} height={100}
                                           className="w-fit h-fit object-contain"/>
                                </div>
                                {e.description && <p className="text-sm">{e.description}</p>}
                            </div> :
                            <SoundPlayer audio_url={e.media_path}/>
                    ))}
                    {data.part_title && <p className="whitespace-break-spaces font-bold text-xl">{data.part_title}</p>}
                    {data.description && <p className="whitespace-break-spaces">{formatTextToJSX(data.description)}</p>}
                    <div className="flex items-center gap-6">
                        <AudioRecorder  onRecordingComplete={setVoice}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Speaking;