import React from "react";
import "./Exam.css";
import { FaDownload } from "react-icons/fa6";
import "../Collage/Collages.css";
import Notification from "./Notification/Notification";
import SimilarEntranceExam from "./Notification/LatestNews/SimilarEntranceExam";

const RightSideSimilerColleges = ({ EntranceName = "", NewsName = "" ,specilization = '' }) => {
  return (
    <div className="main-button-div-for-right-side-college">
      <div className="button-div-for-right-side-college">
        {" "}
        <h2> Downloads </h2> <hr />
        <div className="d-flex flex-column gap-4 download-button-for-right-side-college">
          <button className="button-3 button4me">
            <FaDownload /> &nbsp; <span>download sample test</span>
          </button>
          <button className="button-3 button4me">
            <FaDownload /> &nbsp; <span>Brochure</span>
          </button>
          <button className="button-3 button4me">
            <FaDownload /> &nbsp; <span>Brochure</span>
          </button>
          <button className="button-3 button4me">
            <FaDownload /> &nbsp; <span>Brochure</span>
          </button>
        </div>
      </div>
      <div className="button-div-for-right-side-college">
        <h2> {`${specilization} `} </h2> <hr />
        <div className="d-flex flex-column gap-4 download-button-for-right-side-college">
          <SimilarEntranceExam />
        </div>
      </div>
      <div className="button-div-for-right-side-college">
        <h2> {`${EntranceName} `} </h2> <hr />
        <div className="d-flex flex-column gap-4 download-button-for-right-side-college">
          <SimilarEntranceExam />
        </div>
      </div>
      <div className="button-div-for-right-side-college">
        <h2>{NewsName} </h2> <hr />
        <div className="d-flex flex-column gap-2 download-button-for-right-side-college">
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <hr />
          <div className="view-more-button">
            <button>View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideSimilerColleges;
