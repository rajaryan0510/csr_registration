import { Button, Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import cutm from "../images/cutm.png";

import { useState } from "react";
import axios from "axios";

const Login = () => {
  // function onChange(value) {
  //   console.log("Captcha value:", value);
  // }

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/dashboard";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  const navigate = useNavigate();
  const dashboard = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/dashboard");
  };

  return (
    <div className="grid grid-cols-2 w-auto h-screen items-center  bg-yellow-200 ">
      <div className="login-container grid text-center lg:w-1/2  mx-auto rounded-full ">
        <div className="login-form  shadow-red-200 bg-grey-200 shadow-2xl p-6 mx-2">
          <div className="login-form-header ">
            {/* <img src={motherson_logo} className="-mt-20" alt="" sizes="" /> */}
            <span className="font-medium text-2xl text-blue-900 hidden md:block">
              <small className="text-2xl text-red-600">CENTURION </small>{" "}
              UNIVERSITY
            </span>
          </div>
          <div className="login-form-body">
            <form onSubmit={handleSubmit}>
              <div className="login-form-input my-6 ">
                <Input
                  label="Username"
                  type="text"
                  onChange={handleChange}
                  name="username"
                  color="grey"
                  icon={<i className="fa-solid fa-user"></i>}
                />
              </div>
              <div className="login-form-input my-6">
                <Input
                  label="Password"
                  type="password"
                  onChange={handleChange}
                  name="password"
                  color="grey"
                  icon={<i className="fa-solid fa-key"></i>}
                />
              </div>

              <div className="login-form-input my-8">
                <Button
                  color="red"
                  className="w-full"
                  type="submit"
                  onClick={dashboard}
                >
                  Login
                </Button>
              </div>
              {/* <div>
                <span className="text-sm text-center  space-x-24 text-grey-600">
                  <small className="">
                    <Link to="/forgotpassword" className="cursor-pointer">Forgot Password?</Link>
                  </small>
                  <small className="">
                    <Link to="/register" className="cursor-pointer">Don't have account?</Link>
                  </small>
                </span>
              </div> */}
            </form>
          </div>
        </div>
      </div>
      <div className=" invisible lg:visible">
        <img
          src={cutm}
          className=" rounded-2xl shadow-2xl h-[600px] bg-grey-200  mx-auto shadow-red-200 "
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
