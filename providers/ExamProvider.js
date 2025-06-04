// context/ExamsContext.js
import {createContext, useContext, useState, useEffect, useRef} from 'react';
import useGetRequest from '@/hooks/useGetRequest';
import {useRouter} from "next/router";
import {addToast, Spinner} from "@heroui/react";
import usePostRequest from "@/hooks/usePostRequest";

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

    const formRef = useRef()

    const [part, setPart] = useState(1);
    const [initialData, setInitialData] = useState(null);
    const [data, setData, reload, pagination, setP, isLoading] = useGetRequest(
        true,
        id && `/exams/${id}?part=${part}`
    );
    const {sendPostRequest} = usePostRequest()

    const [state, setState] = useState({})
    const [voice, setVoice] = useState(null)

    useEffect(() => {
        if (part === 1 && data && !initialData) {
            setInitialData(data);
        }
    }, [part, data, initialData]);

    if (!initialData)
        return <div className="text-center py-10">
            <Spinner color="success" label={'در حال بارگزاری ...'}/>
        </div>;

    const handleSubmitPart = async () => {
        const e = formRef.current;
        if (!e)
            return;
        const formData = new FormData(e);
        const data = Object.fromEntries(formData.entries());
        // const {successMessage, errorMessage, success} = await sendPostRequest("POST", '/exams/test-correction', {
        //     ...data, ...state,
        //     part_id: data.part_id,
        //     exam_id: id
        // })
        // if (success) {
        //     addToast({
        //         description: successMessage,
        //         color: 'success',
        //     })
        //     if (part < initialData?.total_part)
        //         setPart(prevPart => prevPart + 1);
        // } else {
        //     addToast({
        //         description: errorMessage,
        //         color: 'danger',
        //     })
        // }
    }

    const NextPart = () => {
        handleSubmitPart()
    }
    const PrevPart = () => {
        if (part > 1) {
            setPart(prevPart => prevPart - 1)
        }
    }
    return (
        <ExamsContext.Provider
            value={{
                id,
                data,
                part,
                formRef,
                setPart,
                setVoice,
                isLoading,
                initialData,
                state, setState,
                handleSubmitPart,
                PrevPart, NextPart,
            }}
        >
            {children}
        </ExamsContext.Provider>
    );
};

export default ExamsProvider;