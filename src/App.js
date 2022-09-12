import React, { Component } from "react";
import NavBar from "./components/navBar/NavBar";
import Form from "./components/form/Form";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Form />
      </div>
    );
  }
}

export default App;
