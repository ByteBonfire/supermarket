import React, { useState } from "react";
import axios from "axios";
import "./Category.css";

const Categories = () => {
  const [catagorylist, setCategorylist] = useState([]);

  const categoiesHandler = () => {
    axios
      .get("https://uat.ordering-farmshop.ekbana.net/api/v4/category", {
        headers: {
          "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
        },
      })
      .then((response) => {
        // console.log(response.data.data, "catagory");
        setCategorylist(response.data.data);
        console.log(catagorylist, "nepal");
      })
      .catch((error) => {
        console.log(error, "faileddd");
      });
  };

  return (
    <div>
      <button onClick={categoiesHandler}>clickme</button>
      <p>this is api</p>
      <div class="category-container">
        {catagorylist.map((data, index) => {
          return (
            <>
              <div class="small-container">
                <p>{data.title}</p>
                <p>{data.slug}</p>
              </div>
              <br />
            </>
          );
        })}
      </div>
      ;
    </div>
  );
};

export default Categories;
