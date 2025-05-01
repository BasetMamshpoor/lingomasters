// hooks/useEcho.js
import {useEffect, useRef, useState} from 'react';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';

export default function useEcho() {
    const [echoInstance, setEchoInstance] = useState(null);
    const hasInitialized = useRef(false);

    useEffect(() => {
        if (hasInitialized.current) return;
        hasInitialized.current = true;

        if (typeof window === 'undefined') return;

        window.Pusher = Pusher;

        const echo = new Echo({
            broadcaster: 'pusher',
            key: 'lingochat',
            cluster: 'mt1',           // ← این خط اضافه شده
            wsHost: '192.168.1.4',
            wsPort: 8001,
            forceTLS: false,
            disableStats: true,
            enabledTransports: ['ws'],
        });

        setEchoInstance(echo);
    }, []);

    return echoInstance;
}
