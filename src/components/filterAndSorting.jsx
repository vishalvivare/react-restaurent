import { useState } from "react";
import { useRef } from "react";

const Filtering = ({ sortData }) => {
  const sortRef = useRef(null);
  const filterRef = useRef(5);
  const sorting = async () => {
    let res = await fetch(
      `http://localhost:8080/products?rating_gte=0&rating_lte=${filterRef.current}`
    );
    let data = await res.json();

    console.log(data, "data");
    if (sortRef.current == "lToH") {
      data.sort((a, b) => {
        return a.cost - b.cost;
      });
    } else if (sortRef.current == "hToL") {
      data.sort((a, b) => {
        return b.cost - a.cost;
      });
    } else {
      data = data;
    }
    sortData(data);
  };
  return (
    <>
      <select
        name=""
        id="select"
        onChange={(e) => {
          filterRef.current = e.target.value;

          sorting();
        }}
      >
        <option value="5">Filter by rating</option>
        <option value="4">4 Star</option>
        <option value="3">3 Star</option>
        <option value="2">2 Star</option>
        <option value="1">1 Star</option>
      </select>
      <select
        name=""
        id="sort"
        onChange={(e) => {
          sortRef.current = e.target.value;
          sorting();
        }}
      >
        <option value="">Sor by price</option>
        <option value="lToH">Low To High</option>
        <option value="hToL">High To Low</option>
      </select>
    </>
  );
};
export { Filtering };