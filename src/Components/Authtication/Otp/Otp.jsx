import React from "react";
import "./otp.css";
import { Link } from "react-router-dom";

const Otp = () => {
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
        <p className="forget-password-head">Forgot Password</p>
        <img
          src={require("../../../Assets/forgot-otp-image.png")}
          alt="forgot"
          className="forgot-image-otp"
        />
        <p className="forgot-password-registrated-email">
          Please enter 6 digit verfication code
        </p>
        <div className="forgot-form-div-otp">
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
        </div>
        <div className="otp-button-div">
          <button type="submit" className="otp-buttton">
            <i>
              <Link to={"/Thanks"}>Verify</Link>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
