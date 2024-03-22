import React, { useState } from "react";
import "./Signup.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  const [signupUser, setSignupUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    currentEducation: "",
    CourseLooking: "",
    password: "",
    comfirmpassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the state immediately
    setSignupUser((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // checking the values
    if (signupUser.password !== signupUser.comfirmpassword) {
      alert("Password are not matching, please try again...");
    } else {
      console.log(signupUser);
    }
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
        <p className="welcome-to-mbacouncel">WELCOME TO MBACOUNCEL</p>
        <p className="create-account-p">Create a Acccount</p>
        <div className="signup-icons-div">
          <FcGoogle size={30} cursor={"pointer"} />
        </div>
        <div className="or-tag-div">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <form className="signup-form-div" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full name*"
            name="name"
            value={signupUser.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            placeholder="Phone No*"
            name="phoneNo"
            value={signupUser.phoneNo}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Currently Studying*"
            name="currentEducation"
            value={signupUser.currentEducation}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Course Looking*"
            name="CourseLooking"
            value={signupUser.CourseLooking}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            placeholder="Email*"
            name="email"
            value={signupUser.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            placeholder="Password*"
            name="password"
            value={signupUser.password}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            placeholder="confirm Password*"
            name="comfirmpassword"
            value={signupUser.comfirmpassword}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Create Account</button>
        </form>
        <p className="already-have-account">
          Already Have an Account?{" "}
          <Link to={"/login"}>
            <span style={{ color: "#044fa6" }}>Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
