import { useState } from "react";
import { useForm } from "react-hook-form";
import Login from "../login/Login";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signupData, setsignupData] = useState();
  const onSubmit = (data) => {
    axios
      .post("https://uat.ordering-farmshop.ekbana.net/api/v4/auth/signup", {
        first_name: "Neeki",
        last_name: "Pradhan",
        email: "passina323232125@m.com",
        mobile_number: "9893758602",
        password: "123456",
      })

      .then((response) => {
        console.log(response);
        setsignupData(data);

        localStorage.setItem(
          "info",
          JSON.stringify({
            first_name: "Neeki",
            last_name: "Pradhan",
            email: "hejooo@g.com",
            mobile_number: "9898054682",
            password: "123456",
          })
        );
      })
      .catch((error) => {
        console.log(error, "sorryyyyy");
      });

    console.log(data, "dfghjkl");
  };
  return (
    <>
      <div class="breadcrumbs">
        <div class="container">
          <ol
            class="breadcrumb breadcrumb1 animated wow slideInLeft"
            data-wow-delay=".5s"
          >
            <li>
              <a href="index.html">
                <span
                  class="glyphicon glyphicon-home"
                  aria-hidden="true"
                ></span>
                Home
              </a>
            </li>
            <li class="active">Register Page</li>
          </ol>
        </div>
      </div>

      <div class="register">
        <div class="container">
          <h2>Register Here</h2>
          <div class="login-form-grids">
            <h5>profile information</h5>
            <form form onSubmit={handleSubmit(onSubmit)}>
              {/* <form action="#" method="post"> */}
              <input
                {...register("first_name")}
                type="text"
                placeholder="First Name..."
                required=" "
              />
              <input
                {...register("last_name")}
                type="text"
                placeholder="Last Name..."
                required=" "
              />
              {/* </form> */}
              <div class="register-check-box">
                <div class="check">
                  <label class="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i> </i>Subscribe to Newsletter
                  </label>
                </div>
              </div>
              <h6>Login information</h6>
              {/* <form
                action="#"
                method="post"
              > */}
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                required=" "
              />
              <input
                {...register("mobile_number")}
                type="text"
                placeholder="Mobile Number"
                required=" "
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                required=" "
              />
              <input
                {...register("c_password")}
                type="password"
                placeholder="Password Confirmation"
                required=" "
              />
              <div class="register-check-box">
                <div class="check">
                  <label class="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i> </i>I accept the terms and conditions
                  </label>
                </div>
              </div>
              <input
                type="submit"
                value="Register"
                // onClick={Navigate("/home")}
              />
              {/* </form> */}
            </form>
          </div>
          <div class="register-home">
            <a href="/home">Home</a>
          </div>
        </div>
        {/* <Login information={signupData} /> */}
      </div>
    </>
  );
};

export default Signup;
