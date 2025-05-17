// context/ExamsContext.js
import {createContext, useContext, useState, useEffect} from 'react';
import useGetRequest from '@/hooks/useGetRequest';
import {useRouter} from "next/router";
import {Spinner} from "@heroui/react";

const ExamsContext = createContext();

export const useExamsContext = () => {
    const context = useContext(ExamsContext);
    if (!context) {
        throw new Error('useExamsContext باید در ExamsProvider استفاده شود');
    }
    return context;
};

const ExamsProvider = ({children}) => {
    const router = useRouter();
    const {id} = router.query;

    const [part, setPart] = useState(1);
    const [initialData, setInitialData] = useState(null);
    const [data, setData, reload, pagination, setP, isLoading] = useGetRequest(
        true,
        id && `/exams/${id}?part=${part}`
    );

    useEffect(() => {
        if (part === 1 && data && !initialData) {
            setInitialData(data);
        }
    }, [part, data, initialData]);

    if (!initialData)
        return <div className="text-center py-10">
            <Spinner color="success" label={'در حال بارگزاری ...'}/>
        </div>;

    return (
        <ExamsContext.Provider
            value={{
                id,
                data,
                part,
                setPart,
                isLoading,
                initialData,
            }}
        >
            {children}
        </ExamsContext.Provider>
    );
};

export default ExamsProvider;