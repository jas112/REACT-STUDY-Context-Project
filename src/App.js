import React, { Component } from "react";
import NavBar from "./components/navBar/NavBar";
import Form from "./components/form/Form";
import PageContent from "./components/pageContent/PageContent";
import './App.css';
import { ThemeProvider } from "./contexts/themeContext/ThemeContext";
import {LanguangeProvider} from './contexts/languageContext/LanguageContext';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <LanguangeProvider>
          <PageContent>
            <NavBar />
            <Form />
          </PageContent>
        </LanguangeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
