import React, {createContext, useState} from "react";

export const FunctionalLanguageContext = createContext();

export function FunctionalLanguageProvider(props) {

    const [currentLanguage, setCurrentLanguage] = useState('english');
    const toggleLanguage = (evt) => setCurrentLanguage(evt.target.value);

    return(
        <FunctionalLanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
            {props.children}
        </FunctionalLanguageContext.Provider>
    );

}

