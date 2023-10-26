import "./App.css";
import React, { useState } from "react";
import TopBar from "./components/TopBar";
import StoreListing from "./components/StoreListings";
import Background from "./components/Background";

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
