import React from "react";
import "./Collages.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { AiFillHome, AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Overview from "./SmallPages/Overview";
import Programs from "./SmallPages/Programs";
import Admission from "./SmallPages/Admission";

const Collages = () => {
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
          <button>Overview</button>
          <button>Programs Offered</button>
          <button>Admission</button>
          <button>Placements</button>
          <button>Campus Life</button>
          <button>FAQs</button>
        </div>

        {/* MAIN PAGE START FROM HERE  */}
        {/* <Overview /> */}
        {/* <Programs /> */}
        <Admission />
      </div>
      <Footer />
    </div>
  );
};

export default Collages;
