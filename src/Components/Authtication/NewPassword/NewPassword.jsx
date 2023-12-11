import React from "react";
import "./newpassword.css";

const NewPassword = () => {
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
        <p className="forget-password-head">Create New Password</p>
        <p className="forget-password-para">
          we'll ask for this password whenever you sign-in
        </p>
        <form className="new-password-form-div">
          <input type="password" placeholder="New Password" />
          <p className="change-password-6-char-para">
            Password must be atleast 6 character
          </p>
          <input type="password" placeholder="Re-enter New Password" />
          <button type="submit">Save Changes</button>
        </form>
        <div className="extra-content-at-bottom">
          <ul>
            <h3>Strong Password Tips</h3>
            <li>
              Password should contain 8 characters,a combination of Numbers,
              words & special characters
            </li>
            {/* <li>Do not use email address, mobile /phone numbers or other personal information like D.O.B., Anniversary etc that can be easly obtained</li>
            <li>Do not use same password form multiple online accounts</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
