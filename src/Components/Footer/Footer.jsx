import React from "react";
import "./Footer.css";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="main">
        <div className="main-upper-div">
          <div className="logo-div">
            <img src={require("../../Assets/mbalogo.png")} alt="" />
            <p>A Dedicated platform for MBA Aspirants</p>
            <div className="main-logo-div">
              <AiFillInstagram className="icons" />{" "}
              <AiFillTwitterCircle className="icons" />{" "}
              <FaWhatsapp className="icons" /> <BsFacebook className="icons" />{" "}
              <AiFillLinkedin className="icons" />
            </div>
          </div>
          <div className="company">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Services</p>
            <p> Features</p>
            <p> Testimonials</p>
            <p> Blog</p>
          </div>
          <div className="support">
            <h3>Support</h3>
            <p>Help Center</p>
            <p>Tweet @ Us</p>
            <p>Feedback</p>
          </div>
          <div className="useful-links">
            <h3>Usefull Links</h3>
            <p>Courses</p>
            <p>Services</p>
            <p>Top Colleges</p>
          </div>
          <div className="contact-us">
            <h3>Contact Us</h3>
            <p
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AiFillPhone />
              +91 85249 23569
            </p>
            <p
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AiFillMail /> info@mba4me.in{" "}
            </p>
          </div>
          <div className="our-place">
            <h3>Our place </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2258871975605!2d77.58966087463267!3d13.02128241378796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b119522405%3A0x6756bdccaa4f5fe6!2sPlanEdu%20Consultants%20%26%20Learning%20Solution%20Pvt%20Ltd%20%7C%20College%20Admission!5e0!3m2!1sen!2sin!4v1696932012593!5m2!1sen!2sin"
              style={{ border: 0, borderRadius: "1rem" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="som"
              className="footer-iframe"
            />
          </div>
        </div>
        <hr style={{ color: "white", width: "90%", margin: "auto" }} />
        <div className="main-middle-div">
          <p>PROGRAMS</p>
          <p>COLLEGES</p>
          <p>ABOUT US</p>
          <p>SERVICES</p>
          <p>ENTRANCES</p>
          <p>RESOURCES</p>
        </div>

        <div className="main-lower-div">
          <p>Copyright @ 2021 MBACounsel</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
