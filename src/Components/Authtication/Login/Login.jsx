import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main-signup-design">
      <div className="left-side-div">
        <img src={require("../../../Assets/mbalogo.png")} alt="mbalogo" />
        <p>
          A Dedicated platform <br />
          for MBA Aspirants
        </p>
      </div>
      <div className="right-side-div">
        <p className="welcome-to-mbacouncel">WELCOME BACK</p>
        <p className="create-account-p">Login</p>
        <hr className="hr-under-login" />

        <form className="signup-form-div">
          <input type="text" placeholder="Full name" />
          <input type="password" placeholder="Password" />
          <p className="forgot-password-sign-in-div">
            <Link to={"/forget"}>Forgot Password?</Link>
          </p>
          <button type="submit">Sign In</button>
        </form>
        <p className="already-have-account">
          Dont have a account?
          <Link to={"/signup"}>
            <span style={{ color: "#044fa6" }}>SignUp</span>
          </Link>
        </p>

        <div className="login-icons-div">
          <button>
            <FcGoogle size={30} />
          </button>
          <button>
            <BsFacebook size={30} />
          </button>
          <button>
            <ImLinkedin size={30} />\
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
