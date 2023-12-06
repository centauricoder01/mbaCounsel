import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="row  main-contact-us-head-image">
        <div className="col-md-12 contact-us-head-image ">
          <img
            className="img-fluid"
            src={require("../../Assets/Contact-us-head-image.png")}
            alt=""
          />
        </div>
      </div>
      <div className="containerfluid main-conatct-us-page" >
        <div className="row main-head-text-of-contact-us-page ">
          <div className="col-md-12 head-text-of-contact-us-page">
            <h1> WE ARE EXCITED TO HEAR FROM YOU</h1>
          </div>
        </div>
        <div className="row main-para-text-of-contact-us-page ">
          <div className="col-md-12 para-text-of-contact-us-page">
            <h4 style={{ color: "#042247" }}>
              {" "}
              TALK TO OUR TOP EDUCATION COUNSELLORS
            </h4>
            <h6>Let us know what information you are looking for</h6>
          </div>
        </div>
        <div className="row main-images-components-of-contact-us-page ">
          <div className="col-md-12 images-components-of-contact-us-page ">
            <img
              src={require("../../Assets/contactus-addmisiion-and-guide.png")}
              alt=""
            />
            <img
              src={require("../../Assets/contactus-college-and-exam.png")}
              alt=""
            />
            <img
              src={require("../../Assets/contactus-comparing-schools.png")}
              alt=""
            />
            <img
              src={require("../../Assets/contactus-study-in-abroad.png")}
              alt=""
            />
            <img
              src={require("../../Assets/contactus-addmisiion-and-guide.png")}
              alt=""
            />
          </div>
        </div>

        <div className="row main-how-can-you-reach-us ">
          <div className="col-md-5 how-can-you-reach-us">
            <h3 className="mt-5" style={{ color: "white", fontWeight: "700" }}>
              HOW YOU CAN REACH US
            </h3>
            <Link
              to={"https://maps.app.goo.gl/8GG1kqtpEiPiCJWE8"} style={{fontStyle:"italic"}}
              
            >
              {" "}
              <CiLocationOn color="yellow" /> If you want to come down, our
              doors are always open for a cup of coffee
            </Link>
            <p >
              #15, 2nd Floor, Manjushree, 1st & 2nd Cross, Opposite R T Nagar
              Post Office, Bengaluru, Karnataka 560032
            </p>

            <Link to={"+91 95388-84442"}  style={{fontStyle:"italic"}}>
              {" "}
              <FaPhoneAlt  color="yellow"/>  Let’s Talk
            </Link>
            <p >+91 95388-84442</p>
            <Link style={{fontStyle:"italic"}}
              to={"info@mbacounsel.com"}
              
            >
             <TiMessageTyping color="yellow" />  For More Enquries
            </Link>
            <p>info@mbacounsel.com</p>

            <div className="aboutus-icons-in-page">
              <Link to={"https://www.instagram.com/mba.counsel/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="} >
                <FaInstagram color="white"/>{" "}
              </Link>



              <Link to={""}>
                {" "}
                <RiFacebookCircleLine color="white" />
              </Link>
              <Link>
                <BsWhatsapp color="white"/>
              </Link>
              <Link>
                {" "}
                <FaTwitter color="white" />{" "}
              </Link>
              <Link>
                <TiSocialLinkedinCircular color="white"/>
              </Link>
            </div>
          </div>
          <div className="col-md-6 send-us-message-contact-us-page">
            <h2 style={{color:"#042247", fontWeight:"700"}} >SEND US MESSAGE</h2>
            <p>Fill up the form below and tell us how we can help.</p>
            <div className="all-input-in-contact-us-page">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="E-Mail-address" />
              <input type="number" placeholder="Contact Number" />
              <input type="text" placeholder="Location" />
              <input type="text" placeholder="Course Looking For" />
              <input type="text" placeholder="message" />
            </div>
            <button className="mt-5" style={{fontStyle:"italic", fontWeight:"600"  }} >Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
