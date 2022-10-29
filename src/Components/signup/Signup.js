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
    const signUpData = {
      first_name: data.first_name,
      last_name: data.last_name,
      mobile_number: data.mobile_number,
      email: data.email,
      password: data.password,
    };
    axios
      .post(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/signup",
        signUpData
      )

      .then((response) => {
        console.log(response, "sucess");
        // setsignupData(data);

        localStorage.setItem(
          "info",
          JSON.stringify({
            email: data.email,
            mobile_number: data.mobile_number,
            password: data.password,
            signupId: response.data.data.id,
          })
        );
      })
      .catch((error) => {
        console.log(error, "sorryyyyy");
      });
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
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <br />
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
