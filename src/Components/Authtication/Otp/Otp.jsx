import React, { useState } from "react";
import "./otp.css";
import { Link, useNavigate } from "react-router-dom";
import { postUserDetails } from "../../../API/Getrequest";

const Otp = () => {
  const navigate = useNavigate();

  const [getOtp, setGetOtp] = useState("");
  const handleOtpSubmit = () => {
    console.log(getOtp);
    const otpemail = localStorage.getItem("otpemail") || "";
    console.log(otpemail, getOtp);
    postUserDetails("authticate/verifymail", {
      email: otpemail,
      otp: Number(getOtp),
    })
      .then((res) => {
        alert(res.data.message);
        if (res.data.message === "OTP Verified, Access Granted") {
          navigate("/");
        } else {
          setGetOtp("");
          console.log(res.data);
        }
      })
      .catch((err) => {
        alert("Incorrect OTP, Access Denied");
        console.log(err);
      });
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
          <input
            value={getOtp}
            type="text"
            onChange={(e) => {
              setGetOtp(e.target.value);
            }}
          />
        </div>
        <div className="otp-button-div">
          <button
            type="submit"
            className="otp-buttton"
            onClick={handleOtpSubmit}
          >
            <i>Verify</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
