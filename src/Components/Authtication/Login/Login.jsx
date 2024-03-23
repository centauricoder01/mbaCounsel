import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { postUserDetails } from "../../../API/Getrequest";

const Login = () => {
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the state immediately
    setLoginUser((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // checking the values
    postUserDetails("authticate/loginuser", loginUser)
      .then((res) => {
        alert(res.data.message);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        alert("Invalid email or Password");
        console.log(err);
      });
    console.log(loginUser);
  };

  return (
    <div className="main-signup-design">
      <div className="left-side-div">
        <img src={require("../../../Assets/mbalogo.png")} alt="mbalogo" />
        <p>
          A Dedicated platform <br />
          for MBA Aspirants
        </p>
      </div>
      <div className="right-side-div-signup">
        <p className="welcome-to-mbacouncel">WELCOME BACK</p>
        <p className="create-account-p">Login</p>
        <form className="signup-form-div" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="e-mail"
            name="email"
            value={loginUser.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginUser.password}
            onChange={handleInputChange}
            required
          />
          <p className="forgot-password-sign-in-div">
            <Link to={"/forget"}>Forgot Password?</Link>
          </p>
          <button type="submit">Sign In</button>
        </form>
        <p className="already-have-account">
          Don't have a account?
          <Link to={"/signup"}>
            <span style={{ color: "#044fa6" }}>SignUp</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
