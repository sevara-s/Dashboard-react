import { useState } from "react";
import "./App.css";
import Dashboard from "./components/dashboard";
import Main from "./components/main";

function App() {
  return (
    <>
      <div className="wrapper flex ">
        <Dashboard />
        <Main />
      </div>
    </>
  );
}

export default App;
