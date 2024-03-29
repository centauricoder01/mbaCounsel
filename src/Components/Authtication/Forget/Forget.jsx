import React, { useState } from "react";
import "./forget.css";
import { Link, useNavigate } from "react-router-dom";
import { postUserDetails } from "../../../API/Getrequest";

const Forget = () => {
  const navigate = useNavigate();
  const [getForgetEmail, setForgetEmail] = useState("");

  const handleForgetPasswordSubmit = (e) => {
    e.preventDefault();
    console.log(getForgetEmail);
    postUserDetails("authticate/forgetpassword", { email: getForgetEmail })
      .then((res) => {
        alert(res.data.message);
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        alert("Invalid email");
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
        <form className="forgot-form-div" onSubmit={handleForgetPasswordSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={getForgetEmail}
            onChange={(e) => setForgetEmail(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default Forget;
