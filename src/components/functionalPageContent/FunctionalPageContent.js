import React, { useContext } from 'react';
import { FunctionalThemeContext } from '../../contexts/functionalThemeContext/FunctionalThemeContext';

function FunctionalPageContent(props) {
    const {isDarkMode} = useContext(FunctionalThemeContext);

    const styles = {
        backgroundColor: isDarkMode ? '#242424' : '#ffffff',
        height: '100vh',
        width: '100vw'
    };

    return (
        <div style={styles}>
            {props.children}
        </div>
    );
}

export default FunctionalPageContent;