import React, { useState } from "react";
import "./PopupForm.css";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={togglePopup} className="open-popup-btn">
        Apply Now
      </button>

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="close-btn" onClick={togglePopup}>
              X
            </button>

            <div className="popup-content">
              {/* Left side content (hidden on mobile) */}
              <div className="popup-info">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={require("../../Assets/mbalogo.png")}
                    alt="mbaLogo"
                    width={100}
                  />
                </div>
                <h2>Embark on a transformativе journеy with an MBA.</h2>
                <p>
                  This program is your passport to thе C-suitе, offеring global
                  opportunitiеs and еntrеprеnеurial vеnturеs.
                </p>
                <ul>
                  <li>Lowest Premium Rates</li>
                  <li>Comprehensive Coverage</li>
                  <li>Quick Claim Settlement</li>
                </ul>
              </div>

              {/* Right side form */}
              <div className="popup-form">
                <h2>Contact for hassle-free admission</h2>
                <form>
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />

                  <label>Email Id</label>
                  <input type="email" placeholder="Your email" />

                  <label>Mobile No</label>
                  <input type="text" placeholder="Number" />

                  <label>Location</label>
                  <input type="text" placeholder="Location" />

                  <button type="submit" className="contact-btn">
                    Contact Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
