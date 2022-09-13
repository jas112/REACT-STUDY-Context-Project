import React, {createContext} from "react";
import useToggle from "../../hooks/useToggle";

export const FunctionalThemeContext = createContext();

export function FunctionalThemeProvider(props) {

    const [isDarkMode, toggleDarkMode] = useToggle(false);

    return(
        <FunctionalThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {props.children}
        </FunctionalThemeContext.Provider>
    );
}