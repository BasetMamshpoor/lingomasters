import {useEffect, useRef, useState} from 'react';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import Cookies from "js-cookie";

export default function useEcho() {
    const [echoInstance, setEchoInstance] = useState(null);
    const hasInitialized = useRef(false);

    useEffect(() => {
        if (hasInitialized.current) return;
        hasInitialized.current = true;
        const token = Cookies.get('token') ? JSON.parse(Cookies.get('token')) : {};
        if (typeof window === 'undefined') return;

        window.Pusher = Pusher;

        const echo = new Echo({
            broadcaster: 'pusher',
            key: process.env.NEXT_PUBLIC_REVERB_APP_KEY,
            cluster: 'mt1',
            wsHost: process.env.NEXT_PUBLIC_REVERB_HOST,
            wsPort: parseInt(process.env.NEXT_PUBLIC_REVERB_PORT),
            scheme: process.env.NEXT_PUBLIC_REVERB_SCHEME,
            forceTLS: false,
            disableStats: true,
            enabledTransports: ['ws'],
            authEndpoint: `${process.env.NEXT_PUBLIC_BASE_URL}/broadcasting/auth`,
            auth: {
                headers: {
                    Authorization: `${token.token_type} ${token.access_token}`
                }
            }
        });

        setEchoInstance(echo);
    }, []);

    return echoInstance;
}
