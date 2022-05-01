import { useState } from "react";
import { useEffect } from "react";
import { ShowData } from "./showData";
import { collectData } from "./postData";
import { Filtering } from "./filterAndSorting";

// import "./resturant.css";

const InputData = () => {
  const [data, setData] = useState([]);

  // collect the data from mock server
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      let res = await fetch("http://localhost:8080/products");
      let data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const sortData = async (finalSort) => {
    finalSort = await finalSort;

    setData(finalSort);

    // getData();
  };

  return (
    <>
      <div id="userData">
        Image Url:
        <input type="url" name="" id="url" placeholder="Enter the dish url" />
        Dish Name :
        <input type="text" id="name" placeholder="Enter the dish name" />
        Dish Desc :{" "}
        <input type="text" id="desc" placeholder="Enter description" />
        <button
          onClick={() => {
            const url = document.getElementById("url").value;
            const name = document.getElementById("name").value;
            const desc = document.getElementById("desc").value;
            let data = collectData(url, name, desc, getData);
            // getData();
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <Filtering sortData={sortData} />
      </div>
      <div id="product">
        {" "}
        <ShowData data={data} />
      </div>
    </>
  );
};

export { InputData };