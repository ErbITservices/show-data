import Dataintable from "./Dataintable";
import SingleData from "./SinglData";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { BiBook, BiBookOpen } from "react-icons/bi";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <div className="head">
        <h1>
          <span className="icon">
            <BiBookOpen />
          </span>{" "}
          ગ્રામ ગ્રંથાલયનો
          <span className="icon">
            <BiBookOpen />
          </span>{" "}
        </h1>
      </div>
      <NavBar></NavBar>
    </>
  );
}
export default Home;
