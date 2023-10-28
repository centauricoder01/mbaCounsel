import React, { useState } from "react";
import "./Collages.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { AiFillHome, AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Overview from "./SmallPages/Overview";
import Programs from "./SmallPages/Programs";
import Admission from "./SmallPages/Admission";
import Placements from "./SmallPages/Placements";
import Campus from "./SmallPages/Campus";
import Faq from "./SmallPages/Faq";

const Collages = () => {
  const [button, setButton] = useState("Overview");
  return (
    <div>
      <Navbar />
      <div className="main-collage-div">
        <div className="collage-page-background-div">
          <div className="collage-page-background-button-div">
            <button className="button-3">Apply Now</button>
            <button
              className="button-3"
              style={{ backgroundColor: "white", color: "black" }}
            >
              Consult
            </button>
          </div>
        </div>
        <div className="collage-path-div">
          <p>
            <AiFillHome /> Home
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
              <i style={{ fontWeight: "bolder", fontSize: "1.4rem" }}>
                Indian Institute of Management
              </i>
              <p>Bannerghatta Road, Banagalore, Karnataka</p>
            </div>
          </div>
          <div className="collage-review-main-div">
            <AiOutlineStar color="orange" />
            <AiOutlineStar color="orange" />
            <AiOutlineStar color="orange" />
            <AiOutlineStar color="orange" />
            <AiOutlineStar color="orange" />
            <hr />
            <p>0 Review</p>
          </div>
        </div>
        <div className="call-to-action-button">
          <button onClick={() => setButton("Overview")}>Overview</button>
          <button onClick={() => setButton("Programs")}>
            Programs Offered
          </button>
          <button onClick={() => setButton("Admission")}>Admission</button>
          <button onClick={() => setButton("Placements")}>Placements</button>
          <button onClick={() => setButton("Campus")}>Campus Life</button>
          <button onClick={() => setButton("Faq")}>FAQs</button>
        </div>

        {/* MAIN PAGE START FROM HERE  */}
        {button === "Overview" ? <Overview /> : null}
        {button === "Programs" ? <Programs /> : null}
        {button === "Admission" ? <Admission /> : null}
        {button === "Placements" ? <Placements /> : null}
        {button === "Campus" ? <Campus /> : null}
        {button === "Faq" ? <Faq /> : null}
      </div>
      <Footer />
    </div>
  );
};

export default Collages;
