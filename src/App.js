import React, { Component } from "react";
// import NavBar from "./components/navBar/NavBar";
// import Form from "./components/form/Form";
// import PageContent from "./components/pageContent/PageContent";
import FunctionalNavBar from "./components/functionalNavBar/FunctionalNavBar";
import FunctionalForm from "./components/functionalForm/FunctionalForm";
import FunctionalPageContent from "./components/functionalPageContent/FunctionalPageContent";
import './App.css';
// import { ThemeProvider } from "./contexts/themeContext/ThemeContext";
// import {LanguangeProvider} from './contexts/languageContext/LanguageContext';
import { FunctionalThemeProvider } from "./contexts/functionalThemeContext/FunctionalThemeContext";
import { FunctionalLanguageProvider } from "./contexts/functionalLanguageContext/FunctionalLanguageContext";

class App extends Component {
  render() {
    return (

      //with Class-based Components...
      // <ThemeProvider>
      //   <LanguangeProvider>
      //     <PageContent>
      //       <NavBar />
      //       <Form />
      //     </PageContent>
      //   </LanguangeProvider>
      // </ThemeProvider>

      //with Functional Components...
      <FunctionalThemeProvider>
        <FunctionalLanguageProvider>
          <FunctionalPageContent>
            <FunctionalNavBar />
            <FunctionalForm />
          </FunctionalPageContent>
        </FunctionalLanguageProvider>
      </FunctionalThemeProvider>
    );
  }
}

export default App;
