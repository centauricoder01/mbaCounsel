import React, { useState } from "react";
import "./Collages.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { AiFillHome, AiOutlineArrowRight } from "react-icons/ai";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";
import Overview from "./SmallPages/Overview";
import Programs from "./SmallPages/Programs";
import Admission from "./SmallPages/Admission";
import Placements from "./SmallPages/Placements";
import Campus from "./SmallPages/Campus";
import Faq from "./SmallPages/Faq";
import Rating from "./SmallPages/Rating";
import Article from "../../Components/Article/Article";

const Collages = () => {
  const [button, setButton] = useState("Overview");

  const [activeButton, setActiveButton] = useState(null);

  const HandleButton = (value, buttonId) => {
    setButton(value);
    setActiveButton(buttonId);
  };

  const getButtonStyles = (buttonId) => {
    return {
      borderBottom: activeButton === buttonId ? "2px solid blue" : "none",
    };
  };

  return (
    <div>
      <Navbar />
      <div className="main-collage-div">
        <div className="collage-page-background-div">
          <div className="collage-path-div">
            <p>
              <AiFillHome />
            </p>
            <p>
              <AiOutlineArrowRight />
            </p>
            <p>Something</p>
            <p>
              <AiOutlineArrowRight />
            </p>
            <p>Something</p>
            <p>
              <AiOutlineArrowRight />
            </p>
            <p>Something</p>
          </div>

          <div className="collage-name-review">
            <div className="collage-name-left-div">
              <img src={require("../../Assets/collage-logo.png")} alt="logo" />
              <div className="collage-name-main-div">
                <i style={{ fontWeight: "bolder", fontSize: "1.8rem" }}>
                  Indian Institute of Management
                </i>
                <p>
                  Estd.Year: 2000 &nbsp; &nbsp; &nbsp; Location : Banagalore,
                  Karnataka &nbsp; &nbsp; Overall Rating : &nbsp;
                  <AiOutlineStar color="orange" />
                  <AiOutlineStar color="orange" />
                  <AiOutlineStar color="orange" />
                  <AiOutlineStar color="orange" />
                  <AiOutlineStar color="orange" />
                  &nbsp;
                  <span>(4.6/5 Review)</span>
                  <br />
                  College Type : Government &nbsp; &nbsp; Affiliation :
                  Autonomus &nbsp; &nbsp; Accredation : NAAC &nbsp; &nbsp; NIRF
                  Rank : 10{" "}
                </p>
              </div>
            </div>
            <div className="collage-review-main-div">
              <button className="button-3">
                <FaRegQuestionCircle /> &nbsp; Enquire
              </button>
              <button
                className="button-3"
                style={{ backgroundColor: "white", color: "black" }}
              >
                <FaDownload /> &nbsp; <span>Brochure</span>
              </button>
              <button className="button-3">
                <MdCompareArrows />
                &nbsp; Compare
              </button>
            </div>
          </div>
        </div>

        <div className="call-to-action-button">
          <button
            onClick={() => HandleButton("Overview", 1)}
            style={getButtonStyles(1)}
          >
            Overview
          </button>
          <button
            onClick={() => HandleButton("Programs", 2)}
            style={getButtonStyles(2)}
          >
            Programs Offered
          </button>
          <button
            onClick={() => HandleButton("Admission", 3)}
            style={getButtonStyles(3)}
          >
            Admission
          </button>
          <button
            onClick={() => HandleButton("Placements", 4)}
            style={getButtonStyles(4)}
          >
            Placements
          </button>
          <button
            onClick={() => HandleButton("Campus", 5)}
            style={getButtonStyles(5)}
          >
            Campus Life
          </button>
          <button
            onClick={() => HandleButton("Faq", 6)}
            style={getButtonStyles(6)}
          >
            FAQs
          </button>
          <button
            onClick={() => HandleButton("rating", 7)}
            style={getButtonStyles(7)}
          >
            Rating
          </button>
        </div>

        {/* MAIN PAGE START FROM HERE  */}
        {button === "Overview" ? <Overview /> : null}
        {button === "Programs" ? <Programs /> : null}
        {button === "Admission" ? <Admission /> : null}
        {button === "Placements" ? <Placements /> : null}
        {button === "Campus" ? <Campus /> : null}
        {button === "Faq" ? <Faq /> : null}
        {button === "rating" ? <Rating /> : null}
      </div>
      <Footer />
    </div>
  );
};

export default Collages;
