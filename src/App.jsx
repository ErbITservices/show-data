import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Enter from "./components/Enter";
import Input from "./components/input";
import Home from "./pages/Home";
import Dataintable from "./pages/Dataintable";
import Login from "./pages/login";

function App() {
  return (
    <center>
      {/* <Login></Login> */}
      <Home></Home>
    </center>
  );
}

export default App;
