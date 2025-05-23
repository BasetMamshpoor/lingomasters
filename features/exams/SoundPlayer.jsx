import React, {useCallback, useRef, useState, useEffect} from 'react';
import {useWavesurfer} from '@wavesurfer/react';
import Pause from '@icons/pause.svg';
import Play from '@icons/play.svg';
import {Button, Spinner} from "@heroui/react";

let activePlayer = null;

// تابع برای تبدیل ثانیه به فرمت MM:SS
const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const SoundPlayer = ({audio_url}) => {
    const containerRef = useRef(null);
    const [remainingTime, setRemainingTime] = useState(0);
    const [errorShown, setErrorShown] = useState(false);

    const {wavesurfer, isPlaying, isReady} = useWavesurfer({
        container: containerRef,
        height: 50,
        waveColor: '#C9D0D8',
        progressColor: '#5F6574',
        autoCenter: true,
        barWidth: 3,
        barRadius: 10,
        url: audio_url,
        cursorWidth: 0,
        barGap: 4,
        barHeight: 1,
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
    // مدیریت زمان و خطاها
    useEffect(() => {
        if (wavesurfer) {
            // تنظیم زمان اولیه (مدت‌زمان کل)
            wavesurfer.on('ready', () => {
                const duration = wavesurfer.getDuration();
                setRemainingTime(duration);
            });

            // به‌روزرسانی زمان باقی‌مانده
            wavesurfer.on('timeupdate', () => {
                const currentTime = wavesurfer.getCurrentTime();
                setRemainingTime(currentTime);
            });

            // نمایش خطا با alert
            wavesurfer.on('error', (err) => {
                if (!errorShown) {
                    addToast({
                        title: 'خطا در بارگذاری صوت',
                        color: 'danger',
                        description: `خطا در بارگذاری صوت: ${err.message || 'مشکل ناشناخته'}`,
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
            };
        }
    }, [wavesurfer, errorShown]);

    const onPlayPause = useCallback(() => {
        if (wavesurfer) {
            wavesurfer.playPause();
        } else if (!errorShown) {
            addToast({
                title: 'خطا در بارگذاری صوت',
                color: 'warning',
                description: 'پخش‌کننده صوت هنوز آماده نیست. لطفاً کمی صبر کنید.',
            })
            setErrorShown(true);
        }
    }, [wavesurfer, errorShown]);

    return (
        <div className="flex items-center w-full gap-2">
            {audio_url ? (
                (!isReady ?
                   <Spinner variant="dots" color="success" className="mx-auto w-full" />
                    : <Button onPress={onPlayPause} isIconOnly className="bg-primary-600" radius="full" size='lg'>
                        {isPlaying ? <Pause className="w-7 h-7 fill-white"/> : <Play className="w-7 h-7 fill-white"/>}
                    </Button>)
            ) : (
                <p className="text-red-500">آدرس فایل صوتی ارائه نشده است</p>
            )}
            {isReady && <div className="flex-shrink-0 text-sm w-12 text-left">{formatTime(remainingTime)}</div>}
            <div className="w-full rounded" ref={containerRef} style={{minHeight: '50px'}}/>
        </div>
    );
};

export default SoundPlayer;