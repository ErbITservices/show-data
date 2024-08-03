import Dataintable from "./Dataintable";
import SingleData from "./SinglData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
function Home() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/"></Route>
          <Route path="/Dataintable" element={<Dataintable />}></Route>
          <Route path="/SingleData" element={<SingleData />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Dataintable></Dataintable> */}
    </>
  );
}
export default Home;
