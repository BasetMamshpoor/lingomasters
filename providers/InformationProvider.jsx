import React, {createContext, useEffect, useState} from 'react';
import useGetRequest from "@/hooks/useGetRequest";
import Cookies from "js-cookie";
import {useRouter} from "next/router";

export const Information = createContext({})
const InformationProvider = ({children}) => {
    const {push} = useRouter()
    const [data, setData] = useState()


    useEffect(() => {
        const professorData = JSON.parse(localStorage.getItem('professor'))
        setData(professorData)
    }, []);

    const [professor,setProfessor,setReload] = useGetRequest(data ? `/professor-panel` : null)

    const logout = () => {
        Cookies.remove('token')
        localStorage.removeItem('professor')
        localStorage.removeItem('language')
        push('/auth/login')
    }
    return (<>
        <Information.Provider value={{professor,setReload, logout}}>
            {professor ? children : 'loading'}
        </Information.Provider>
    </>);
};

export default InformationProvider;