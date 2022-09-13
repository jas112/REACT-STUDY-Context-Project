import React, { Component } from "react";
import NavBar from "./components/navBar/NavBar";
import Form from "./components/form/Form";
import PageContent from "./components/pageContent/PageContent";
import FunctionalNavBar from "./components/functionalNavBar/FunctionalNavBar";
import FunctionalForm from "./components/functionalForm/FunctionalForm";
import './App.css';
import { ThemeProvider } from "./contexts/themeContext/ThemeContext";
import {LanguangeProvider} from './contexts/languageContext/LanguageContext';

class App extends Component {
  render() {
    return (

      //with Class-based Components...
      <ThemeProvider>
        <LanguangeProvider>
          <PageContent>
            {/* Class-based Components */}
            {/* <NavBar /> */}
            {/* <Form /> */}
            {/* Functional Components... */}
            <FunctionalNavBar />
            <FunctionalForm />
          </PageContent>
        </LanguangeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
