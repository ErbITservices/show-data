import Dataintable from "./Dataintable";
import SingleData from "./SinglData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/"></Route>
          <Route path="/Dataintable" element={<Dataintable />}></Route>
          <Route path="/SingleData" element={<SingleData />}></Route>
        </Routes>
      </BrowserRouter>

      <Dataintable></Dataintable>

    </>
  );
}
export default Home;
