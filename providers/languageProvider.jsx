import React, {createContext, useEffect, useState} from 'react';
import useGetRequest from "@/hooks/useGetRequest";

export const Language = createContext({})
const LanguageProvider = ({children}) => {
    const [languages, setLanguages, setReload] = useGetRequest(`/professor-panel/language`)

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
                handleSelectLanguage(languages.professor_languages.length ? languages.professor_languages[0] : {})
            }
        }
    }, [languages]);

    return (<>
        <Language.Provider value={{selectedLanguage, handleSelectLanguage, languages, setReload}}>
            {languages ? children : 'loading'}
        </Language.Provider>
    </>);
};

export default LanguageProvider;