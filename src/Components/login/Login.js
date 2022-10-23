import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ information }) => {
  console.log(information, "hello everyone");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    // toast.success("sucess");
    console.log(data, "loginData");
    axios
      .post("https://uat.ordering-farmshop.ekbana.net/api/v4/aut/login", {
        email: "koklasstest@gmail.com",
        password: 123456,
      })
      .then((response) => {
        console.log(response, "response");
      })
      .catch((error) => {
        console.log(error, "oops");
      });
  };
  return (
    <>
      <div>
        <div>
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
                <li class="active">Login Page</li>
              </ol>
            </div>
          </div>

          <div class="login">
            <div class="container">
              <h2>Login Form</h2>

              <div
                class="login-form-grids animated wow slideInUp"
                data-wow-delay=".5s"
              >
                <form onSubmit={handleSubmit(onsubmit)}>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email Address"
                    required=" "
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    required=" "
                    {...register("password")}
                  />
                  <div class="forgot">
                    <a href="#">Forgot Password?</a>
                  </div>
                  <input type="submit" value="Login" />
                </form>
              </div>
              <h4>For New People</h4>
              <p>
                <a href="/signup">Register Here</a> (Or) go back to{" "}
                <a href="/home">
                  Home
                  <span
                    class="glyphicon glyphicon-menu-right"
                    aria-hidden="true"
                  ></span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
