import Enter from "../components/Enter";
import Input from "../components/input";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function Dataintable() {
  let [arr, datastate] = useState([]);
  let [data, setData] = useState([]);

  const showdata = (e) => {
    let city = e.target.value;

    console.log("m");
    datastate([
      {
        srno: 1,
        name: "priti",
        grantetaken: "yes",
        grantamount: "1000",
        status: "Active",
      },
    ]);

    // datastate(data.filter((elm) => elm.gam === city));
    console.log();
  };

  useEffect(() => {
    const dataget = async () => {
      try {
        const response = await axios.get(
          `https://backend-gram.onrender.com/form/`
        );
        console.log(response.data), setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataget();
  }, []);
  const city = [
    "panchmahal",
    "mahisagar",
    "kheda",
    "anand",
    "dahod",
    "surat",
    "tapi",
    "navsari",
    "valsad",
    "vadodra",
    "chota_udaipur",
    "bharuch",
    "narmada",
  ];
  const panchmahal = [
    "godhra",
    "sahera",
    "halol",
    "jambughoda",
    "kalol",
    "ghoghamba",
  ];
  const mahisagar = ["khanpur", "lunavada", "balasinor", "virpur"];
  const kheda = [
    "nadiad",
    "kheda",
    "matar",
    "mehemdabad",
    "mahugha",
    "kapadwanj",
    "kathlaal",
    "gadteshwar",
    "thasra",
    "vaso",
  ];
  const anand = [
    "anand",
    "borsad",
    "aanklav",
    "khambhat",
    "umreth",
    "petlad",
    "tarapur",
  ];
  const dahod = ["dahod", "jalod", "devgardh bariya"];
  const surat = [
    "olpad",
    "kamrej",
    "choriyasi",
    "palsana",
    "umerpada",
    "bardoli",
    "mandvi",
    "mangrod",
  ];
  const tapi = ["uchal", "nijar", "songadh", "vyara", "dolwan", "valod"];
  const navsari = ["gandevi", "jalalpor", "chikhali", "vansada", "navsari"];
  const valsad = ["valsad", "dharampur", "paradi"];
  const vadodra = [
    "vadodra",
    "vaghodiya",
    "karjan",
    "dabhoi",
    "padra",
    "savali",
    "shinor",
  ];
  const chota_udaipur = [
    "sankheda",
    "bodeli",
    "naswadi",
    "pavijetpur",
    "chotaudaipur",
    "kwant",
  ];
  const bharuch = [
    "bharuch",
    "vagra",
    "jambusar",
    "aamod",
    "ankleshwar",
    "hasot",
    "jagadiya",
  ];
  const narmada = ["tilakwada", "nandod"];
  let category = ["city", "town-1", "town-2", "village"];
  let [library, state] = useState([]);
  let town_1 = ["rajkot", "sidhpur", "baroda"];
  let town_2 = ["palanpur", "deesa", "dhanera"];
  let village = ["upera", "jaska", "sundhiya"];
  const handleonclick = (event) => {
    console.log(event.target.value);

    if (event.target.value == "city") {
      let list = [...city];
      state(list);
    } else if (event.target.value == "town-1") {
      let list = [...town_1];
      state(list);
    } else if (event.target.value == "town-2") {
      let list = [...town_2];
      state(list);
    } else if (event.target.value == "village") {
      let list = [...village];
      state(list);
    } else if (event.target.value == "bharuch") {
      let list = [...bharuch];
      state(list);
    } else if (event.target.value == "panchmahal") {
      let list = [...panchmahal];
      state(list);
    } else if (event.target.value == "anand") {
      let list = [...anand];
      state(list);
    } else if (event.target.value == "chota_udaipur") {
      let list = [...chota_udaipur];
      state(list);
    } else if (event.target.value == "vadodra") {
      let list = [...vadodra];
      state(list);
    } else if (event.target.value == "valsad") {
      let list = [...valsad];
      state(list);
    } else if (event.target.value == "narmada") {
      let list = [...narmada];
      state(list);
    } else if (event.target.value == "navsari") {
      let list = [...navsari];
      state(list);
    } else if (event.target.value == "surat") {
      let list = [...surat];
      state(list);
    } else if (event.target.value == "dahod") {
      let list = [...dahod];
      state(list);
    } else if (event.target.value == "tapi") {
      let list = [...tapi];
      state(list);
    } else if (event.target.value == "mahisagar") {
      let list = [...mahisagar];
      state(list);
    } else if (event.target.value == "kheda") {
      let list = [...kheda];
      state(list);
    } else {
      state([]);
    }
    console.log(event.target.value);
  };

  return (
    <>
      <Input
        category={category}
        library={library}
        handleclick={handleonclick}
        showdata={showdata}
      ></Input>
      {arr.length != 0 && <Enter arr={arr}></Enter>}
    </>
  );
}
export default Dataintable;
