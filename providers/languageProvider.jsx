import React, {createContext, useEffect, useState} from 'react';
import useGetRequest from "@/hooks/useGetRequest";
import Loading from "@/components/Loading";

export const Language = createContext({})
const LanguageProvider = ({children}) => {
    const [languages, setLanguages, setReload, paginations, setPaginations, isLoading] = useGetRequest(true, `/student-panel/language`)

    const [selectedLanguage, setSelectedLanguage] = useState({})

    const handleSelectLanguage = (lang) => {
        localStorage.setItem('language', JSON.stringify(lang))
        setSelectedLanguage(lang)
    }

    useEffect(() => {
        if (languages) {
            const lang = localStorage.getItem('language')
            if (lang) {
                setSelectedLanguage(JSON.parse(lang))
            } else {
                handleSelectLanguage(languages.student_languages.length ? languages.student_languages[0] : {})
            }
        }
    }, [languages]);

    return (<>
        <Language.Provider value={{selectedLanguage, handleSelectLanguage, languages, setReload}}>
            {!isLoading ? children : <Loading/>}
        </Language.Provider>
    </>);
};

export default LanguageProvider;