import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { postUserDetails } from "../../../API/Getrequest.js";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Signup = () => {
  const navigate = useNavigate();
  const [signupUser, setSignupUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    location: "",
    currentEducation: "",
    CourseLooking: "",
    password: "",
    comfirmpassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the state immediately
    if (name === "phoneNo") {
      setSignupUser((prevInput) => ({
        ...prevInput,
        phoneNo: Number(value),
      }));
    } else {
      setSignupUser((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // checking the values
    if (signupUser.password !== signupUser.comfirmpassword) {
      alert("Password are not matching, please try again...");
    } else {
      postUserDetails("authticate/adduser", signupUser)
        .then((res) => {
          alert(res.data.message);
          navigate("/login");
        })
        .catch((err) => console.log(err));
      console.log(signupUser);
    }
  };
  console.log(process.env.CLIENT_ID, "THIS IS CLIENT ID");
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
        <p className="create-account-p">Create a Acccount</p>
        <div className="signup-icons-div">
          {/* HANDLING GOOGLE LOGIN DETAILS HERE */}
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse?.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <div className="google-and-form-tag-divider">
          <p>---OR---</p>
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
            placeholder="Location*"
            name="location"
            value={signupUser.location}
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
