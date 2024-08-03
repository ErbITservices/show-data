import Enter from "../components/Enter";
import Input from "../components/input";
import { useState } from "react";
import { useEffect } from "react";
function Dataintable() {
  let [arr, datastate] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataget = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/form/`);
        console.log(response.data), setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataget();
  }, []);
  let palanpur = [
    {
      srno: 1,
      name: "swayam",
      grantetaken: "yes",
      grantamount: "1000",
      status: "Active",
    },
    {
      srno: 2,
      name: "rushu",
      grantetaken: "no",
      grantamount: "0",
      status: "Active",
    },
    {
      srno: 3,
      name: "c++",
      grantetaken: "yes",
      grantamount: "1000",
      status: "Active",
    },
    {
      srno: 4,
      name: "webdev",
      grantetaken: "yes",
      grantamount: "1000",
      status: "Active",
    },
  ];
  let sidhpur = [
    {
      srno: 1,
      name: "priti",
      grantetaken: "yes",
      grantamount: "1000",
      status: "Active",
    },
    {
      srno: 2,
      name: "rushi",
      grantetaken: "no",
      grantamount: "0",
      status: "Active",
    },
    {
      srno: 3,
      name: "c++",
      grantetaken: "yes",
      grantamount: "1000",
      status: "Active",
    },
    {
      srno: 4,
      name: "webdev",
      grantetaken: "yes",
      grantamount: "1000",
      status: "Active",
    },
  ];
  let category = ["city", "town-1", "town-2", "village"];
  let [library, state] = useState([]);
  let city = ["unjha", "visnagar", "meshana", "gandhinagar", "bhavnagar"];
  let town_1 = ["rajkot", "sidhpur", "baroda"];
  let town_2 = ["palanpur", "deesa", "dhanera"];
  let village = ["upera", "jaska", "sundhiya"];
  const handleonclick = (event) => {
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
    } else {
      state([]);
    }
    console.log(event.target.value);
  };
  const showdata = (e) => {
    console.log(e.target.value);
    if (e.target.value == "unjha") {
      datastate(data);
    } else if (e.target.value == "sidhpur") {
      datastate(sidhpur);
    } else if (e.target.value == "palanpur") {
      datastate(palanpur);
    } else {
      datastate([]);
    }
  };
  return (
    <>
      <Input
        category={category}
        library={library}
        handleclick={handleonclick}
        showdata={showdata}
      ></Input>
      {data.length != 0 && <Enter arr={data}></Enter>}
    </>
  );
}
export default Dataintable;
