import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Exam.css";
import AllCollegeInExam from "./AllCollegeInExam";
import OtherCollege from "./OtherCollege";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./ExamTable.css";
import RightSideSimilerColleges from "./RightSideSimilerColleges";
import { FaHome } from "react-icons/fa";
import { getAttributeDetails } from "../../API/Getrequest";

const Exam = () => {
  const [value, setValue] = useState(1);

  const [activeButton, setActiveButton] = useState(null);
  const [examValue, setExamValue] = useState([]);
  const HandleButton = (value, buttonId) => {
    setActiveButton(buttonId);
    setValue(value);
  };

  const getButtonStyles = (buttonId) => {
    return {
      borderBottom: activeButton === buttonId ? "2px solid blue" : "none",
    };
  };

  const examDetailsValue = JSON.parse(localStorage.getItem("examlist"));

  useEffect(() => {
    getAttributeDetails("exam/getexam")
      .then((res) => setExamValue(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let filteredData = examValue?.filter(
    (ele) => ele.examNameFullForm === examDetailsValue
  );

  if (filteredData.length === 0) {
    return <p>Loading....</p>;
  }

  console.log(filteredData);

  return (
    <>
      <Navbar />
      <div className="containerfluid  exam-page-main-container ">
        <div className="row main-crousel-exam-page ">
          <div className="col-md-10 crousel-exam-page ">
            <p style={{ paddingTop: "8rem" }}>
              <FaHome /> Home / Exam / {filteredData[0].examNameFullForm}
            </p>
            <h3>
              {filteredData[0].examNameFullForm} : Registrations, Dates,
              Eligibility, Pattern, Syllabus, Cut Offs
            </h3>
          </div>
        </div>
        <div className="row main-all-content-of-exam-page">
          <div className="col-md-10  all-content-of-exam-page">
            <button
              onClick={() => HandleButton(1, 1)}
              style={getButtonStyles(1)}
            >
              {" "}
              Overview
            </button>

            <button
              onClick={() => HandleButton(2, 2)}
              style={getButtonStyles(2)}
            >
              Eligibility
            </button>

            <button
              onClick={() => HandleButton(3, 3)}
              style={getButtonStyles(3)}
            >
              Registration
            </button>

            <button
              onClick={() => HandleButton(4, 4)}
              style={getButtonStyles(4)}
            >
              Syllabus
            </button>

            <button
              onClick={() => HandleButton(5, 5)}
              style={getButtonStyles(5)}
            >
              Pattern
            </button>

            <button
              onClick={() => HandleButton(6, 6)}
              style={getButtonStyles(6)}
            >
              Colleges
            </button>
          </div>
        </div>
        {value === 1 ? (
          <div
            className="row main-about-cat-and-populer-college"
            id="main-about-cat-id"
          >
            <div
              className="col-md-7 about-cat-college"
              dangerouslySetInnerHTML={{ __html: filteredData[0].examOverview }}
            ></div>
            <div className="col-md-3 ">
              <RightSideSimilerColleges valueName="Similar" />
            </div>
          </div>
        ) : null}

        {value === 2 ? (
          <div
            className="row main-eligibility-in-exam"
            id="main-eligibility-id"
          >
            <div
              className="col-md-7 eligibility-in-exam"
              dangerouslySetInnerHTML={{
                __html: filteredData[0].examEligibility,
              }}
            ></div>
            <div className="col-md-3 ">
              <RightSideSimilerColleges valueName="Similar" />
            </div>
          </div>
        ) : null}
        {value === 3 ? (
          <div
            className="row main-cat-registration"
            id="main-cat-registration-id"
          >
            <div
              className="col-md-7 cat-registration"
              dangerouslySetInnerHTML={{
                __html: filteredData[0].examRegistration,
              }}
            ></div>
            <div className="col-md-3 ">
              <RightSideSimilerColleges valueName="Similar" />
            </div>
          </div>
        ) : null}

        {value === 4 ? (
          <div
            className="row main-syllabus-and-updated-exam-pattern"
            id="main-syllabus-and-update-id"
          >
            <div
              className="col-md-7 syllabus-and-updated-exam-pattern"
              dangerouslySetInnerHTML={{
                __html: filteredData[0].examSyllabus,
              }}
            ></div>
            <div className="col-md-3 ">
              <RightSideSimilerColleges valueName="Similar" />
            </div>
          </div>
        ) : null}

        {value === 5 ? (
          <div
            className="row main-syllabus-and-updated-exam-pattern"
            id="main-syllabus-and-update-id"
          >
            <div
              className="col-md-7 syllabus-and-updated-exam-pattern"
              dangerouslySetInnerHTML={{
                __html: filteredData[0].examPattern,
              }}
            ></div>
            <div className="col-md-3 ">
              <RightSideSimilerColleges valueName="Similar" />
            </div>
          </div>
        ) : null}
        {value === 6 ? (
          <div className=" row main-cat-participating-college">
            <div className="col-md-7 all-content-of-cat-participating-college  ">
              <h4
                className="mt-5"
                style={{
                  fontWeight: "600",
                  fontStyle: "italic",
                  color: "#000080",
                }}
              >
                CAT 2021 Participating Colleges{" "}
              </h4>

              <p
                className="mb-5 mt-3"
                style={{
                  fontStyle: "italic",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                Top IIMs accepting CAT 2021 score
              </p>
              <div className="cat-and-top-mba-participating-college">
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />

                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
              </div>
              <h4 className="mt-5 mb-5">
                Top MBA Colleges Accepting CAT in Non-IIM Category{" "}
              </h4>

              <div className="cat-and-top-mba-participating-college">
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />

                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
                <AllCollegeInExam />
              </div>
            </div>
            <div className="col-md-3 ">
              <RightSideSimilerColleges valueName="Similer" />
            </div>
          </div>
        ) : null}

        <div className="row main-other-college-in-exam-page mt-5">
          <div className="col-md-10 other-college-in-exam-page">
            <h3 className=" mb-3 "> Top B-Schools in India</h3>
            <OtherCollege />
          </div>
        </div>

        <div className="row main-other-college-in-exam-page mt-5">
          <div className="col-md-10 other-college-in-exam-page ">
            <h3 className=" mb-3 "> Featured B-Schools in India</h3>
            <OtherCollege />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Exam;
