import {useWavesurfer} from "@wavesurfer/react";
import React, {useState, useRef, useEffect, useCallback} from "react";
import RecordPlugin from "wavesurfer.js/dist/plugins/record.esm.js";

//icons
import Mic from '@icons/microphone.svg'
import Play from '@icons/play.svg'
import Stop from '@icons/stop.svg'
import Pause from '@icons/pause.svg'
import Brush from '@icons/brush.svg'
import {addToast} from "@heroui/react";

const RecordComponent = ({onRecordingComplete, voice, containerRef}) => {
    // const containerRef = useRef(null)
    const [recording, setRecording] = useState(false);
    const [recordedUrl, setRecordedUrl] = useState(null);
    const [recordPlugin, setRecordPlugin] = useState(null);

    const {wavesurfer, isPlaying,} = useWavesurfer({
        container: containerRef,
        height: 40,
        waveColor: '#C9D0D8',
        progressColor: '#5F6574',
        autoCenter: true,
        barWidth: 0,
        barRadius: 0,
        url: recordedUrl,
        fillParent: true,
    })
    useEffect(() => {
        if (typeof window === 'undefined' || !navigator.mediaDevices) return;


        const recordPluginInstance = RecordPlugin.create({
            scrollingWaveform: true,
            renderRecordedAudio: false,
        });
        setRecordPlugin(recordPluginInstance);

        wavesurfer?.registerPlugin(recordPluginInstance);

        recordPluginInstance.on("record-end", (blob) => {
            const recordedUrl = URL.createObjectURL(blob);
            setRecordedUrl(recordedUrl);
            onRecordingComplete(blob);
        });
        return () => {
            wavesurfer?.destroy();
        };
    }, [wavesurfer, onRecordingComplete]);

    const onPlayPause = useCallback(() => {
        wavesurfer && wavesurfer.playPause()
    }, [wavesurfer])

    const deleteAudio = () => {
        setRecordedUrl(null);
        onPlayPause();
        wavesurfer?.stop();
        onRecordingComplete(null)
    }

    useEffect(() => {
        if (voice == null)
            deleteAudio()

    }, [voice]);

    const handleRecordClick = useCallback(() => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            addToast({
                title: "خطا",
                description: "دسترسی به میکروفن در این محیط پشتیبانی نمی‌شود.",
                color: 'danger',
            })
            return;
        }

        if (recordPlugin) {
            if (recordPlugin.isRecording()) {
                recordPlugin.stopRecording();
                setRecording(false);
            } else {
                recordPlugin.startRecording().then(() => {
                    setRecording(true);
                    onRecordingComplete(1)
                }).catch((err) => {
                    addToast({
                        title: "خطا",
                        description: "دسترسی به میکروفن در این محیط پشتیبانی نمی‌شود.",
                        color: 'danger',
                    })
                });
            }
        }
    }, [recordPlugin])

    return (
        <div className="flex items-center gap-2 w-fit">
            {recording ? (
                <button type="button" onClick={handleRecordClick} className="centerOfParent">
                    <Stop className="w-8 h-8"/>
                </button>
            ) : recordedUrl ? (
                <>
                    <button type="button" onClick={deleteAudio} className="centerOfParent">
                        <Brush className="w-8 h-8"/>
                    </button>
                    <button type="button" onClick={onPlayPause} className="centerOfParent">
                        {isPlaying ? <Pause className="w-8 h-8"/> : <Play className="w-8 h-8"/>}
                    </button>
                </>
            ) : (
                <button type="button" onClick={handleRecordClick} className="centerOfParent">
                    <Mic className="w-8 h-8"/>
                </button>
            )}
        </div>
    );
};

export default RecordComponent;
