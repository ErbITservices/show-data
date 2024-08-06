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
import NavBar from "./components/NavBar";
import SingleData from "./pages/SinglData";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <center>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Dataintable" element={<Dataintable />}></Route>
          <Route path="/SingleData" element={<SingleData />}></Route>
        </Routes>
      </BrowserRouter>
    </center>
  );
}

export default App;
