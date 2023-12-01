import React from "react";
import "./forget.css";
import { Link } from "react-router-dom";

const forget = () => {
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
        <p className="forget-password-head">Forgot Password</p>
        <p className="forget-password-para">
          Sit back & relax we sre here to help you out
        </p>
        <img
          src={require("../../../Assets/forgot-password-image.png")}
          alt="forgot"
          className="forgot-image"
        />
        <p className="forgot-password-registrated-email">
          Enter your registrated email
        </p>
        <form className="forgot-form-div">
          <input type="email" placeholder="Email" />

          <button type="submit">
            <Link to={"/otp"}>Reset Password</Link>
          </button>
        </form>
        <p className="digit-code-para">
          6 Digit code has been sen to your registrated e-mail
        </p>
      </div>
    </div>
  );
};

export default forget;
