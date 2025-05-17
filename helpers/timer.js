import { useState, useEffect } from 'react';

const TimerCountdown = (initialTime, onComplete) => {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const [hours, minutes, seconds] = time.split(':').map(Number);
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;

        const timer = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(timer);
                onComplete(true);
                return;
            }

            totalSeconds -= 1;
            const newHours = Math.floor(totalSeconds / 3600);
            const newMinutes = Math.floor((totalSeconds % 3600) / 60);
            const newSeconds = totalSeconds % 60;
            setTime(
                `${newHours.toString().padStart(2, '0')}:${newMinutes
                    .toString()
                    .padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`
            );
        }, 1000);

        return () => clearInterval(timer);
    }, [time, onComplete]);

    return time;
};

export default TimerCountdown;