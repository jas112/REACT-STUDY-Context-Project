import React, { Component } from "react";
import NavBar from "./components/navBar/NavBar";
import Form from "./components/form/Form";
import PageContent from "./components/pageContent/PageContent";
import './App.css';
import { ThemeProvider } from "./contexts/themeContext/ThemeContext";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <NavBar />
          <Form />
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default App;
