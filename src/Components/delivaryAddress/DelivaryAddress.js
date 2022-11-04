import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";

const DelivaryAddress = () => {
  const [deliveryaddress, setDelivaryaddress] = useState();
  const submitAddress = (data) => {
    axios
      .post(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/delivery-address",
        {
          title: data.DeliveryAddress,
          latitude: data.Latitude,
          longitude: data.Longitude,
          isDefault: "true",
        },
        {
          headers: {
            "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.data, "addressspass");
        setDelivaryaddress(response.data.data);
        localStorage.setItem("DeliveryAddress");
      })
      .catch((error) => {
        console.log(error, "address fail");
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(submitAddress)}>
        <input
          {...register("DeliveryAddress", { required: true })}
          Placeholder="DeliveryAddress"
        />
        <input {...register("Latitude")} Placeholder="Latitude" />

        <input {...register("Longitude")} Placeholder="Longitude" />

        <input type="submit" />
        <div>
          <p>hello my friend</p>
          {/* {deliveryaddress.map((data, index) => {
            return (
              <>
                <p>
                  Address: {data.DeliveryAddress}
                  Longitude:{data.Longitude}
                  Latitude:{data.Latitude}
                </p>
              </>
            );
          })} */}
        </div>
      </form>
    </>
  );
};

export default DelivaryAddress;
