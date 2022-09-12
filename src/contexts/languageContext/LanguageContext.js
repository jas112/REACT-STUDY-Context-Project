import React, {Component, createContext} from "react";

export const LanguageContext = createContext();

export class LanguangeProvider extends Component {
    constructor(props){
        super(props);
        this.state = {currentLanguage: 'english'}
        this.toggleLanguage = this.toggleLanguage.bind(this);
    }

    toggleLanguage(evt){
        this.setState({currentLanguage: evt.target.value});
    }

    render(){
        return(
            <LanguageContext.Provider value={{...this.state, toggleLanguage: this.toggleLanguage }}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}