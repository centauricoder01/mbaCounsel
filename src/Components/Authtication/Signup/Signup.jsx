import React from "react";
import "./Signup.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { Link } from "react-router-dom";

const Signup = () => {
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
          <ImLinkedin size={30} color="#0063c8" cursor={"pointer"} />
          <BsFacebook size={30} color="#0866ff" cursor={"pointer"} />
        </div>
        <div className="or-tag-div">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <form className="signup-form-div">
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Current Password" />
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
