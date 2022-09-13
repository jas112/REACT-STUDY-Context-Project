import React, {createContext, useState} from "react";

export const FunctionalThemeContext = createContext();

export function FunctionalThemeProvider(props) {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return(
        <FunctionalThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {props.children}
        </FunctionalThemeContext.Provider>
    );
}