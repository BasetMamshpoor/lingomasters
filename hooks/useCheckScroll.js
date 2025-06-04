import {useEffect, useRef} from 'react';

export function useCheckScroll(dir) {
    const containerRef = useRef(null);
    const isInitialRender = useRef(true)

    useEffect(() => {
        if (containerRef.current && isInitialRender.current && dir === 'up') {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
            isInitialRender.current = false
        }
    }, [isInitialRender]);

    const inAtEnd = () => {
        if (!containerRef.current) return false;
        const el = containerRef.current;
        if (dir === 'up')
            return Math.abs(el.scrollHeight + el.scrollTop - el.clientHeight) < 1;
        else
            return Math.abs(el.scrollHeight +- el.scrollTop - el.clientHeight) < 1;
    };

    return {
        containerRef,
        inAtEnd,
    };
}
