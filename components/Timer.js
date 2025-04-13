import {Progress} from "@heroui/react";
import React, {useEffect, useState} from "react";

const Timer = ({
                   targetDate,
                   message = "⏰ زمان تمام شد",
                   withProgress = false,
                   dangerColor = "text-red-500",
                   normalColor = "text-gray-600",
                   withSound = false,
                   onExpire,
               }) => {
    const calculateSecondsLeft = () => {
        const target = new Date(targetDate);
        const now = new Date();
        const diff = target - now;
        return isNaN(diff) ? 0 : Math.floor(diff / 1000);
    };

    const [secondsLeft, setSecondsLeft] = useState(calculateSecondsLeft);

    useEffect(() => {
        if (secondsLeft <= 0) {
            if (withSound) {
                const audio = new Audio("/alarm.mp3");
                audio.play().catch(() => {
                });
            }
            if (typeof onExpire === "function") {
                onExpire();
            }
        }
    }, [secondsLeft]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsLeft((prev) => {
                const next = prev - 1;
                return next >= 0 ? next : 0;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const renderContent = () => {
        if (secondsLeft <= 0) return message;

        const totalHours = Math.floor(secondsLeft / 3600);
        const totalDays = Math.floor(totalHours / 24);

        if (secondsLeft > 86400) {
            return `${totalDays} روز باقی مانده`;
        }

        const h = totalHours % 24;
        const m = Math.floor((secondsLeft % 3600) / 60);
        const s = secondsLeft % 60;
        const pad = (n) => (n < 10 ? `0${n}` : n);

        return `${pad(h)}:${pad(m)}:${pad(s)} باقی مانده`;
    };

    const textColor =
        secondsLeft <= 0
            ? "text-red-500"
            : secondsLeft <= 86400
                ? dangerColor
                : normalColor;

    return (
        <div className="mt-1">
            {withProgress && secondsLeft > 0 && secondsLeft <= 86400 && (
                <Progress
                    minValue={0}
                    maxValue={1}
                    color="danger"
                    size="sm"
                    aria-label=" "
                    value={1 - secondsLeft / 86400}
                />
            )}
            <span
                dir="auto"
                className={`sm:text-sm text-xs ${textColor}`}
            >
                {renderContent()}
            </span>
        </div>
    );
};

export default Timer;
