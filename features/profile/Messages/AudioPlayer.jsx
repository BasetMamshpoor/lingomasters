import React, {useCallback, useRef, useState, useEffect} from 'react';
import {useWavesurfer} from '@wavesurfer/react';
import Pause from '@icons/pause.svg';
import Play from '@icons/play.svg';
import {addToast} from "@heroui/react";

let activePlayer = null;

const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const AudioPlayer = ({audio_url, isSender, blocksColor}) => {
    const containerRef = useRef(null);
    const [remainingTime, setRemainingTime] = useState(0);
    const [errorShown, setErrorShown] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {wavesurfer, isPlaying, isReady} = useWavesurfer({
        container: containerRef,
        height: 50,
        waveColor: isSender ? '#fff' : '#000',
        progressColor: blocksColor ?? (isSender ? '#000' : '#fff'),
        autoCenter: true,
        barWidth: 3,
        barRadius: 10,
        cursorWidth: 0,
        barGap: 4,
        barHeight: 1,
        dragToSeek: true,
        fillParent: true,
        mediaType: 'audio/webm',
    });

    const stopPreviousPlayer = useCallback(() => {
        if (activePlayer && activePlayer !== wavesurfer && activePlayer.isPlaying()) {
            activePlayer.pause();
        }
        if (wavesurfer) {
            activePlayer = wavesurfer;
        }
    }, [wavesurfer]);

    useEffect(() => {
        if (!wavesurfer) return;

        wavesurfer.on('ready', () => {
            const duration = wavesurfer.getDuration();
            setRemainingTime(duration);
            setIsLoading(false);
        });

        wavesurfer.on('timeupdate', () => {
            const duration = wavesurfer.getDuration();
            const currentTime = wavesurfer.getCurrentTime();
            setRemainingTime(duration - currentTime);
        });

        wavesurfer.on('error', (err) => {
            if (!errorShown) {
                setIsLoading(false);
                addToast({
                    title: 'خطا در بارگذاری صوت',
                    color: 'danger',
                    description: err?.message || 'مشکل ناشناخته',
                });
                setErrorShown(true);
            }
        });

        wavesurfer.on('play', stopPreviousPlayer);

        return () => {
            wavesurfer.un('ready');
            wavesurfer.un('timeupdate');
            wavesurfer.un('error');
            wavesurfer.un('play');
            if (activePlayer === wavesurfer) {
                activePlayer = null;
            }
            setErrorShown(false);
            setLoaded(false);
            setIsLoading(false);
        };
    }, [wavesurfer, errorShown]);

    const onPlayPause = useCallback(async () => {
        if (!wavesurfer) return;

        if (!loaded) {
            if (!audio_url) {
                addToast({
                    title: 'خطا',
                    color: 'danger',
                    description: 'آدرس فایل صوتی موجود نیست.',
                });
                return;
            }

            try {
                setIsLoading(true);
                setLoaded(true);

                await wavesurfer.load(audio_url);

                wavesurfer.once('ready', () => {
                    wavesurfer.play();
                });

            } catch (err) {
                setIsLoading(false);
                addToast({
                    title: 'خطا در بارگذاری صوت',
                    color: 'danger',
                    description: err.message || 'مشکلی در بارگذاری فایل صوتی رخ داده است.',
                });
            }

        } else {
            wavesurfer.playPause();
        }
    }, [wavesurfer, audio_url, loaded]);

    return (
        <div className="flex items-center w-full gap-2">
            {audio_url ? (
                <button
                    type="button"
                    onClick={onPlayPause}
                    className="centerOfParent"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <span className="w-6 h-6 border-2 border-t-transparent border-black rounded-full animate-spin"/>
                    ) : isPlaying ? (
                        <Pause className={`w-8 h-8 ${isSender ? "fill-white" : "fill-black"}`}/>
                    ) : (
                        <Play className={`w-8 h-8 ${isSender ? "fill-white" : "fill-black"}`}/>
                    )}
                </button>
            ) : (
                <p className="text-red-500 text-sm">آدرس فایل صوتی ارائه نشده است</p>
            )}

            {!isReady && (
                <div className="flex items-center gap-1 px-1 min-w-32 w-full">
                    {[10, 20, 15, 25, 18, 12, 22, 16, 28, 10, 24, 10, 20, 15, 25, 18].map((h, i) => (
                        <div
                            key={i}
                            className={`${isSender ? "bg-white" : "bg-black"}  rounded`}
                            style={{
                                width: '3px',
                                height: `${h}px`,
                            }}
                        />
                    ))}
                </div>
            )}
            <div className={`${isReady ? "min-w-32" : 'hidden'} rounded`} ref={containerRef}
                 style={{minHeight: '50px'}}/>

            {isReady && (
                <div className="flex-shrink-0 text-sm w-12 text-left">
                    {formatTime(remainingTime)}
                </div>
            )}
        </div>
    );
};

export default AudioPlayer;