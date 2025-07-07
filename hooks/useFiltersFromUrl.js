import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useFiltersFromUrl = () => {
    const router = useRouter();
    const [filters, setFilters] = useState({});

    useEffect(() => {
        if (!router.isReady) return;

        const query = router.query;
        const parsed = {};

        Object.entries(query).forEach(([key, value]) => {
            if (typeof value === 'string') {
                parsed[key] = value.split('-').map((v, i) => ({
                    value: v,
                    name: i,
                }));
            }
        });

        setFilters(parsed);
    }, [router.isReady, router.query]);

    return [filters, setFilters];
};

export default useFiltersFromUrl;