import React from "react";
import banner from "../../Assets/bg.png";
import admin from "../../Assets/admin.jpg";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="mainLoginPage">
        <div className="leftside">
          <img src={banner} alt="banner" />
        </div>
        <div className="rightside">
          <h1>Login</h1>

          <div className="Profileimg">
            <img src={admin} alt="profile" />
          </div>
          <div>
            <form>
              <h3>Enter ID</h3>
              <input type="text" name="ID" required />
              <h3>Password</h3>
              <input type="password" name="password" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
