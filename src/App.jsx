import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Enter from "./components/Enter";
import Input from "./components/input";
import Home from "./pages/Home";
import Dataintable from "./pages/Dataintable";

function App() {
  return (
    <center>
      <Home></Home>
      {/* <Dataintable></Dataintable> */}
    </center>
  );
}

export default App;
