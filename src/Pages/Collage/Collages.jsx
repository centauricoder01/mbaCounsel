import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const [singleCollegeData, setSingleCollegeData] = useState("");
  const { id } = useParams();

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

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/college/getbyid/${id}`)
      .then((response) => response.json())
      .then((data) => setSingleCollegeData(data.collegeById))
      .catch((err) => console.log(err));
  }, [id]);

  if (singleCollegeData === "") {
    return <div>Loading Data...</div>;
  }

  const numRating = parseInt(singleCollegeData.collegeRating);
  return (
    <div>
      <Navbar />
      <div className="main-collage-div">
        <div
          className="collage-page-background-div"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.543), rgba(0, 0, 0, 0.626)), url(${singleCollegeData.collegePhoto})`,
          }}
        >
          <div className="collage-path-div">
            <p>
              <AiFillHome />
            </p>
            <p>
              <AiOutlineArrowRight />
            </p>
            <p>Home</p>
            <p>
              <AiOutlineArrowRight />
            </p>
            <p>College List</p>
            <p>
              <AiOutlineArrowRight />
            </p>
            <p>{singleCollegeData.collegeName}</p>
          </div>

          <div className="collage-name-review">
            <div className="collage-name-left-div">
              <img
                src={singleCollegeData.collegeLogo}
                width={100}
                height={100}
                style={{ borderRadius: "10px" }}
                alt="logo"
              />
              <div className="collage-name-main-div">
                <i style={{ fontWeight: "bolder", fontSize: "1.8rem" }}>
                  {singleCollegeData.collegeName}
                </i>
                <p>
                  Estd.Year: {singleCollegeData.collegeEstYear} &nbsp; &nbsp;
                  &nbsp; Location : {singleCollegeData.collegeCity},{" "}
                  {singleCollegeData.collegeState} &nbsp; &nbsp; Overall Rating
                  : &nbsp;
                  {Array.from({ length: numRating }, (_, index) => (
                    <AiOutlineStar key={index} color="orange" />
                  ))}
                  &nbsp;
                  <span>({singleCollegeData.collegeRating}/5 Review)</span>
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
        {button === "Overview" ? (
          <Overview innerHTMLValue={singleCollegeData.collegeOverview} />
        ) : null}
        {button === "Programs" ? (
          <Programs innerHTMLValue={singleCollegeData.collegePrograms} />
        ) : null}
        {button === "Admission" ? (
          <Admission innerHTMLValue={singleCollegeData.collegeAdmission} />
        ) : null}
        {button === "Placements" ? (
          <Placements innerHTMLValue={singleCollegeData.collegePlacement} />
        ) : null}
        {button === "Campus" ? (
          <Campus innerHTMLValue={singleCollegeData.collegeCampusLife} />
        ) : null}
        {button === "Faq" ? (
          <Faq innerHTMLValue={singleCollegeData.collegefaqs} />
        ) : null}
        {button === "rating" ? <Rating /> : null}
      </div>
      <Footer />
    </div>
  );
};

export default Collages;
