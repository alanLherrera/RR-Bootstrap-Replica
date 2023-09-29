import "./App.css";
import React, { useState } from "react";
import TopBar from "./Components/TopBar";
import StoreListing from "./Components/StoreListing";
import Background from "./Components/Background";
//import Nav from 'react-bootstrap/Nav'
//import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListing />
    </div>
  );
}

export default App;
