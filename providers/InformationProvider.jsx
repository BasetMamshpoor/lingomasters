import React, {createContext, useEffect, useState} from 'react';
import useGetRequest from "@/hooks/useGetRequest";
import Cookies from "js-cookie";
import {useRouter} from "next/router";
import Loading from "@/components/Loading";

export const Information = createContext({})
const InformationProvider = ({children}) => {
    const {push} = useRouter()
    const [student, setStudent, setReload, paginations, setPaginations, isLoading] = useGetRequest(true, `/student-panel/show`)

    const logout = () => {
        Cookies.remove('token')
        localStorage.removeItem('student')
        localStorage.removeItem('language')
        push('/auth/login')
    }
    return (<>
        <Information.Provider value={{student, setReload, logout}}>
            {!isLoading ? children : <Loading/>}
        </Information.Provider>
    </>);
};

export default InformationProvider;