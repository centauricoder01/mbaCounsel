import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { postUserDetails } from "../../../API/Getrequest.js";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { jwtDecode } from "jwt-decode";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(false);
  const [google, setGoogle] = useState(false);
  const [hidegoogle, setHideGoogle] = useState(true);
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

  // const login = useGoogleLogin({
  //   onSuccess: (tokenResponse) => {
  //     console.log(tokenResponse, "This is response Token");
  //     setGoogle(true);
  //     setHideGoogle(false);
  //   },
  //   onError: (error) => console.log(error),
  //   scope: "email profile openid",
  // });

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
        {/* SIGNUP USING EMAIL  */}
        {hidegoogle ? (
          <>
            <p className="create-account-p">Create a Acccount</p>
            <div className="signup-using-email">
              <button
                onClick={() => {
                  setEmail(true);
                  setHideGoogle(false);
                }}
              >
                Continue with Email
              </button>
            </div>
            <div className="google-and-form-tag-divider">
              <p>--- or continue with ---</p>
            </div>
            {/* <div className="signup-using-google">
              HANDLING GOOGLE LOGIN DETAILS HERE
              <button onClick={() => login()}>
                <FcGoogle size={30} />
                Continue with Google
              </button>
            </div> */}
            <div className="signup-using-google">
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
          </>
        ) : null}
        {google ? (
          <>
            <p className="create-account-p">
              Tell us something more about yourself
            </p>
            <form className="signup-form-div">
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
              <button>Save</button>
            </form>
          </>
        ) : null}

        {/* SIGNUP USING MAIN START FROM HERE  */}
        {email ? (
          <form className="signup-form-div" onSubmit={handleSubmit}>
            <p className="create-account-p">Create a Acccount</p>
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
        ) : null}
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
