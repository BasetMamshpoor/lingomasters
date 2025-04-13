"use client";

import {useEffect, useState} from "react";

export default function CountdownTimer({targetDate}) {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const target = new Date(targetDate);

        const updateCountdown = () => {
            const now = new Date();
            const timeDiff = target - now;

            if (timeDiff <= 0) {
                setTimeLeft("⏰ شمارش معکوس به پایان رسید!");
                return;
            }

            const totalSeconds = Math.floor(timeDiff / 1000);
            const totalMinutes = Math.floor(totalSeconds / 60);
            const totalHours = Math.floor(totalMinutes / 60);
            const daysLeft = Math.floor(totalHours / 24);

            if (timeDiff > 24 * 60 * 60 * 1000) {
                setTimeLeft(`🗓 ${daysLeft} روز باقی مانده`);
            } else {
                const hours = totalHours % 24;
                const minutes = totalMinutes % 60;
                const seconds = totalSeconds % 60;

                setTimeLeft(
                    `⏳ ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} باقی مانده`
                );
            }
        };

        updateCountdown(); // اولین بار
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return timeLeft;
}
