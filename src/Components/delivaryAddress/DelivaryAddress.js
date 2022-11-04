import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

const DelivaryAddress = () => {
  const handleAddress = () => {
    axios
      .get("https://uat.ordering-farmshop.ekbana.net/api/v4/delivery-address", {
        headers: {
          "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        console.log(response, "addressspass");
      })
      .catch((error) => {
        console.log(error, "address fail");
      });
  };

  return (
    <div>
      <button onClick={() => handleAddress()}>hitme</button>
    </div>
  );
};

export default DelivaryAddress;
