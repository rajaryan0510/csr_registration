import { Button, Input } from "@material-tailwind/react"
import { Link, useNavigate } from "react-router-dom"
import cutm from '../images/cutm.png'
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import axios from 'axios'

const Register = () => {

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const [data, setData] = useState({
    username: "",
    domain: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const nevigate = useNavigate()
  const handleChange = ({ currentTarget: input }) => {
    setData({
      ...data,
      [input.name]: input.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/user";
      const {data:res} = await axios.post(url, data);
      nevigate('/')
      console.log(res.message);
      
    } catch (error) {
      if(error.response && error.response.status >= 400 && error.response.status <= 500){
        setError(error.response.data.message);
      }
    }
  }

  return (
    <div className="grid grid-cols-2 h-screen items-center  bg-[#DAF7A6] ">

      <div className="login-container grid text-center lg:w-1/2 md:w-2 lg:mx-auto md:mx-auto lg:my-24  rounded- bg-grey-200    ">
        <div className="login-form shadow-2xl p-4 lg:p-10 ">
          <div className="login-form-header ">
            <img src={cutm} className="-mt-20 h-[100px] mx-20 " alt="" sizes="" />
          </div>
          <div className="login-form-body">
            <form onSubmit={handleSubmit}>
              <div className="login-form-input my-4 ">
                <Input label="Username" name="username" value={data.username} required onChange={handleChange} type="text" color="grey" icon={<i className="fa-solid fa-user"></i>} />
              </div>
              <div className="login-form-input my-4 ">
                <Input label="Domain" name="domain" value={data.domain} type="text" color="grey" onChange={handleChange} icon={<i className="fa-solid fa-building-flag"></i>} />
              </div>
              <div className="login-form-input my-4 ">
                <Input label="Email" name="email" value={data.email} type="text" required color="grey" onChange={handleChange} icon={<i className="fa-solid fa-at"></i>} />
              </div>
              <div className="login-form-input my-4">
                <Input label="Password" name="password" value={data.password} required type="password" onChange={handleChange} color="grey" icon={<i className="fa-solid fa-key"></i>} />
              </div>
              {/* recaptcha */}
              {/* <div className="login-form-input mb-4">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}

                />
              </div> */}
              {error && <div className="text-red-500">{error}</div>}
              <div className="login-form-input">
                <Button color="red" className="w-full" type="submit">Register</Button>
              </div>
              <div>
                <span className="text-sm text-center  space-x-24 text-grey-600">
                  <small className="">
                    <Link to="/forgotpassword" className="cursor-pointer">Forgot Password?</Link>
                  </small>
                  <small className="">
                    <Link to="/register" className="cursor-pointer">Have an account?</Link>
                  </small>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" visible lg:visible md:invisible ">
        <img src={cutm} className=" rounded-2xl shadow-2xl h-[600px] bg-grey-200 lg:h-[500px]  mx-auto shadow-grey-400 " alt="" />
      </div>
    </div>
  )
}

export default Register