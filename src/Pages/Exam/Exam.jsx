import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Exam.css";
import Crousel from "./Crousel";
import { ImLocation } from "react-icons/im";
import ExamTable from "./ExamTable";
import { Link } from "react-router-dom";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import AllCollegeInExam from "./AllCollegeInExam";
import OtherCollege from "./OtherCollege";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./ExamTable.css";
import { FaDownload } from "react-icons/fa";

const Exam = () => {
  const [activeButton, setActiveButton] = useState(null);

  const HandleButton = (buttonId) => {
    setActiveButton(buttonId);
  };

  const getButtonStyles = (buttonId) => {
    return {
      borderBottom: activeButton === buttonId ? "2px solid blue" : "none",
    };
  };
  return (
    <>
      <Navbar />
      <div className="row main-exam-top-back-image ">
        <div className="col-md-12 exam-top-back-image ">
          <img
            src={require("../../Assets/exam-page-head-image.png")}
            className="img-fluid "
            alt="back"
          />
        </div>
      </div>

      <div className="containerfluid  exam-page-main-container ">
        <div className="row main-crousel-exam-page ">
          <div className="col-md-10 crousel-exam-page ">
            <Crousel />
          </div>
        </div>
        <div className="row main-all-content-of-exam-page">
          <div className="col-md-10  all-content-of-exam-page">
            <a href="#main-about-cat-id">
              {" "}
              <button
                onClick={() => HandleButton(1)}
                style={getButtonStyles(1)}
              >
                Overview
              </button>
            </a>
            <a href="#main-eligibility-id">
              <button
                onClick={() => HandleButton(2)}
                style={getButtonStyles(2)}
              >
                Eligibility
              </button>
            </a>
            <a href="#main-cat-registration-id">
              <button
                onClick={() => HandleButton(3)}
                style={getButtonStyles(3)}
              >
                Registration
              </button>
            </a>
            <a href="#main-syllabus-and-update-id">
              <button
                onClick={() => HandleButton(4)}
                style={getButtonStyles(4)}
              >
                Syllabus
              </button>
            </a>{" "}
            <a href="#main-syllabus-and-update-id">
              <button
                onClick={() => HandleButton(5)}
                style={getButtonStyles(5)}
              >
                Pattern
              </button>
            </a>{" "}
            <a href="#main-participating-college-id">
              <button
                onClick={() => HandleButton(6)}
                style={getButtonStyles(6)}
              >
                Colleges
              </button>
            </a>
          </div>
        </div>
        <div
          className="row main-about-cat-and-populer-college"
          id="main-about-cat-id"
        >
          <div className="col-md-6 about-cat-college">
            <h3
              className="mt-4"
              style={{
                fontWeight: "600",
                fontStyle: "italic",
                color: "#000080",
              }}
            >
              About CAT
            </h3>
            <p>
              CAT or Common Aptitude Test is a national-level MBA entrance exam
              for getting admissions into IIMs and other prestigious BSchools in
              India. CAT 2021 is going to be a computer-based exam scheduled to
              be held on 28th November 2021 (Sunday). Nearly 2.31 lakh students
              have registered for the CAT exam 2021 to be conducted by IIM
              Ahmedabad. The organizing institute has announced to release the
              admit cards for CAT 2021 by 27th October at 5 Pm.{" "}
            </p>
            <br />

            <p style={{ border: "1px solid black", padding: "10px 10px 10px" }}>
              <span style={{ color: "red" }}>Note :</span> The modification to
              the general eligibility criteria is adhered to restore the balance
              between candidates who had faced variant evaluation process and
              other adversities due to the pandemic.
            </p>

            <h3
              className="mt-4 mb-3"
              style={{
                fontWeight: "600",
                fontStyle: "italic",
                color: "#000080",
              }}
            >
              Key Highlights of IIMA CAT 2021{" "}
            </h3>
            <p>
              1.IIM Ahmedabad has revised the eligibility criteria for IIMA CAT
              2021: Candidates with a “promotion/pass” certificate instead of an
              “award of marks” (in any last two years of the Bachelor’s program)
              are now eligible to apply. <br /> <br />
              2. Increase in CAT 2021 Application Fee: For the general
              candidates, there is an increase of Rs 200 (Rs. 2,200); while for
              SC/ST and PwD candidates the application fee has increased by Rs.
              100 (Rs. 1,100). <br /> <br />
              3. Increase in Test Centers: The total number of test centers for
              IIMA CAT 2021 has increased to 159 centers compared to 156 centers
              in 2020. Ulhasnagar has been removed from the list while new test
              centers added are Prayagraj(UP), Srinagar (J&K), and Madgaon
              (Goa). <br /> <br />
              4. Prof M P Ram Mohan, CAT 2021 exam coordinator, and faculty at
              IIM Ahmedabad will be supervising the execution of the entire
              process.{" "}
            </p>

            <ExamTable />
          </div>

          <div className="col-md-3 populer-college">
            <h2>Similar Colleges</h2>
            <hr />
            <div className="all-one">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management School of Business </p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-two">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>
                  SIBM School of Business Management Management School of
                  Business
                </p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-three">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-four">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-five">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-six">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-seven">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-eight">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="view-more-button">
              <button>View More</button>
            </div>
          </div>
        </div>
        <div
          className="row main-table-of-content"
          id="main-table-of-content-id"
        >
          <div className="col-md-6 table-of-content ">
            <h4 className="mb-3 mt-5">Table of Content</h4>
            <p>
              1. <Link to={""}> About CAT </Link>
            </p>
            <p>
              a. <Link to={""}> Notification </Link>
            </p>
            <p>
              b. <Link to={""}> Key Highlights of IIMA CAT 2021 </Link>
            </p>
            <p>
              c. <Link to={""}> Important Dates </Link>
            </p>
            <p>
              2. <Link to={""}> CAT 2021 Eligibility </Link>
            </p>
            <p>
              3. <Link to={""}> CAT 2021 Registration </Link>
            </p>
            <p>
              a. <Link to={""}> CAT 2021 Admit Card</Link>
            </p>
            <p>
              b. <Link to={""}> Documents Required </Link>
            </p>
            <p>
              4. <Link to={""}> Syllabus & Updated Exam Pattern CAT 2021 </Link>
            </p>
            <p>
              5. <Link to={""}> Preparation </Link>
            </p>
            <p>
              a. <Link to={""}> Online Preparation </Link>
            </p>
            <p>
              b. <Link to={""}> Compare CAT </Link>
            </p>
            <p>
              c. <Link to={""}> Books to Crack CAT 2021</Link>
            </p>
            <p>
              d. <Link to={""}> Tips for Quantitative Ability (QA)</Link>
            </p>
            <p>
              6. <Link to={""}> CAT 2021 Participating Colleges </Link>
            </p>
            <p>
              a.{" "}
              <Link to={""}>
                {" "}
                Top MBA Colleges Accepting CAT in Non-IIM Category{" "}
              </Link>
            </p>
            <p>
              b. <Link to={""}> Other Top Colleges </Link>
            </p>
          </div>
          <div className="col-md-3 populer-college">
            <h2>Similar Colleges</h2>
            <hr />
            <div className="all-one">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management School of Business </p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-two">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>
                  SIBM School of Business Management Management School of
                  Business
                </p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-three">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="view-more-button">
              <button>View More</button>
            </div>
          </div>
        </div>
        <div className="row main-eligibility-in-exam" id="main-eligibility-id">
          <div className="col-md-6 eligibility-in-exam ">
            <img
              src={require("../../Assets/eligibility-image-in-exam-form.png")}
              alt=""
              className="img-fluid mt-4 "
              style={{ width: "100%" }}
            />
            <h4 style={{ color: "#000080" }}>CAT 2021 Eligibility</h4>
            <h5
              style={{ fontWeight: "600", fontStyle: "italic", color: "black" }}
            >
              The eligibility criteria for CAT are as follows
            </h5>
            <p>
              1. Candidates must hold a bachelor’s degree in any discipline with
              a minimum aggregate of 50% marks or equivalent CGPA (45% in case
              of SC/ ST/ PwD) from a recognized university/institution.
            </p>
            <p>2. Final year students are also eligible to attempt CAT 2021</p>
            <br />
            <h5
              style={{ fontWeight: "600", fontStyle: "italic", color: "black" }}
            >
              For candidates graduating in 2020 and 2021, the eligibility
              criteria are as follows;
            </h5>
            <p>
              1. who hold a “promotion/ pass” in place of “award of marks”
              certificates in the last two years of Bachelor’s degree can apply
              under the “Promotion/Pass” option while filling out the CAT 2021
              application.
            </p>{" "}
            <p>
              2. Addressing the hassle aspirants have faced due to pandemics and
              the varied evaluation patterns, IIM Ahmedabad has announced to
              remove the minimum marks criteria of 45% or 50% in graduation
              degree as required eligibility criteria for IIMA CAT 2021 Exam.
            </p>
            <br />
            <br />
            <p style={{ border: "1px solid black", padding: "10px 10px 10px" }}>
              <span style={{ color: "red" }}>Note :</span> The modification to
              the general eligibility criteria is adhered to restore the balance
              between candidates who had faced variant evaluation process and
              other adversities due to the pandemic.
            </p>
            <h4
              style={{
                fontWeight: "600",
                fontStyle: "italic",
                color: "#000080",
              }}
            >
              CAT Application Correction Facility 2021
            </h4>
            <p>
              The correction window for the CAT application form is kept open
              from September 25 (10 AM) to September 27, 2021 (5 PM). The
              candidates are allowed to update changes in the Exam City
              Preferences, photographs, and signatures. The process is as
              follows;
            </p>
            <ol>
              <li>Visit the CAT exam official website: iimcat.ac.in</li>
              <li>Click on “Registered candidate login”</li>
              <li>Enter your CAT user ID and password</li>
              <li>
                Click on “Go to Application Form”, the candidate will be
                redirected to the application correction window.{" "}
              </li>
              <li>
                Do make sure to recheck all the updated information before
                finally clicking on “Submit”
              </li>
              <li>
                The candidates need to save the confirmation message sent via
                email and message to the registered contact details.
              </li>
            </ol>
            <h4
              style={{
                fontWeight: "600",
                fontStyle: "italic",
                color: "#000080",
              }}
            >
              CAT 2021 Admit Card Download
            </h4>
            <p>
              IIM Ahmedabad will release the admit card for CAT 2021 on 27th
              October 2021. All eligible and registered candidates can download
              the admit card until the day of the exam, i.e. 28th November 2021.{" "}
            </p>
            <p
              style={{
                fontWeight: "600",
                fontStyle: "italic",
                color: "black",
                fontSize: "1.5rem",
              }}
            >
              Check the steps to download the CAT 2021 admit card
            </p>
            <img
              src={require("../../Assets/cat-2021-image.png")}
              alt=""
              className="img-fluid mt-4 mb-5 p-5"
              style={{ width: "90%" }}
            />
          </div>
          <div className="col-md-3 populer-college">
            <h2>Similar Colleges</h2>
            <hr />
            <div className="all-one">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management School of Business </p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-two">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>
                  SIBM School of Business Management Management School of
                  Business
                </p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-three">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-four">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-five">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-six">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-seven">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-eight">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="view-more-button">
              <button>View More</button>
            </div>
          </div>
        </div>
        <div
          className="row main-cat-registration"
          id="main-cat-registration-id"
        >
          <div className="col-md-6 cat-registration">
            <div className="cat">
              <h4
                style={{
                  fontWeight: "600",
                  fontStyle: "italic",
                  color: "#000080",
                }}
              >
                CAT 2021 Registration{" "}
              </h4>
              <p>
                As released in the official CAT 2021 notification on 31st July
                2021, the registration process and the application window will
                be open from 4th August 2021 till 22nd September 2021. The
                candidate has to create their account using their valid email ID
                and phone number for registration.{" "}
              </p>
              <h4>Application Process</h4>
              <p>
                The steps for filling out the CAT 2021 application process are
                as follows
              </p>
              <ol>
                <li>
                  For registration, the candidate has to create an account as a
                  new user and start filling up the personal details (own as
                  well as family members) as required on the first page of the
                  CAT 2021 application form.
                </li>
                <li>
                  The candidate would next be required to fill in the academic
                  details and work experience (if any).
                </li>
                <li>
                  Next, the candidate can fill in the choice of IIMs, associated
                  B-Schools, or interesting programs.{" "}
                </li>
                <li>
                  Once the choice filling step is completed, the candidate will
                  proceed further with the payment of the CAT 2021 registration
                  fee.{" "}
                </li>
              </ol>
            </div>

            {/* ------------------------this part need to be edit------------- */}

            <h4
              style={{
                fontWeight: "600",
                fontStyle: "italic",
                color: "#000080",
              }}
            >
              CAT 2021 Registration : Check Step by Step Guide by MBA4me.com
            </h4>

            {/* ------------------------this part need to be edit------------- */}

            <div className="key-point">
              <h4>Key Points to Note for CAT 2021 Registration</h4>
              <p>
                {" "}
                <IoMdCheckboxOutline color="#000080" />
                Aspirants are advised to keep all important information handy
                for the academic details, signature images and photographs,
                registration fee, and payment instruments before filling in the
                application window.
              </p>

              <p>
                <IoMdCheckboxOutline color="#000080" />
                Make sure to write down the CAT ID and Password separately as
                direct copying and entering to login might show an error.
              </p>

              <p>
                {" "}
                <IoMdCheckboxOutline color="#000080" />
                Be careful while filling in the registration form, as the
                correction window will allow only limited correction options.
              </p>

              <p>
                <IoMdCheckboxOutline color="#000080" /> In case the application
                form is taking much time like hours, the candidate can also fill
                the form in parts.
              </p>

              <p>
                <IoMdCheckboxOutline color="#000080" /> The candidate is advised
                to do proper research and understand their preferred IIMs,
                Institutions, or the program before choosing.
              </p>

              <p>
                <IoMdCheckboxOutline color="#000080" /> Once the registration
                fee is paid, the candidate will receive a confirmation email
                with the registered ID. After this, the candidate will not be
                allowed to make any changes in the application form until any
                official announcement.
              </p>
            </div>
            <div className="doc-require mb-5 ">
              <h4>Documents Required</h4>

              <p>
                {" "}
                <IoMdCheckboxOutline color="#000080" /> Mark sheets – Class-10
              </p>

              <p>
                {" "}
                <IoMdCheckboxOutline color="#000080" /> Mark Sheet – Class 12th
              </p>

              <p>
                {" "}
                <IoMdCheckboxOutline color="#000080" /> Mark sheet – Bachelor’s
                Degree/Diploma
              </p>

              <p>
                {" "}
                <IoMdCheckboxOutline color="#000080" />
                In case of final year Bachelor’s students: Final Year
                Certificate from the HoD/Principal
              </p>

              <p>
                {" "}
                <IoMdCheckboxOutline color="#000080" /> Work experience
                Document, if any
              </p>

              <p>
                {" "}
                <IoMdCheckboxOutline color="#000080" /> Applicable Certificates
                to upload (Category/Affidavits)
              </p>

              <p>
                {" "}
                <IoMdCheckboxOutline color="#000080" /> Scanned images of your
                passport size photo and signature.
              </p>
            </div>
          </div>
          <div className="col-md-3 populer-college">
            <h2>Similar Colleges</h2>
            <hr />
            <div className="all-one">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management School of Business </p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-two">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>
                  SIBM School of Business Management Management School of
                  Business
                </p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-three">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-four">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-five">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-six">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-seven">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-eight">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="view-more-button">
              <button>View More</button>
            </div>
          </div>
        </div>
        <div
          className="row main-syllabus-and-updated-exam-pattern"
          id="main-syllabus-and-update-id"
        >
          <div className="col-md-6 syllabus-and-updated-exam-pattern">
            <div className="syllabus mt-5 ">
              <h4
                className="pb-4"
                style={{
                  fontWeight: "600",
                  fontStyle: "italic",
                  color: "#000080",
                }}
              >
                Syllabus & Updated Exam Pattern CAT 2021
              </h4>
              <p className="pb-4">
                The exam pattern for IIMA CAT 2021 remains almost similar to
                that of CAT 2020 unless the exam’s time duration has been
                trimmed down to 120 minutes instead of the initial 180 minutes.
                The CAT exam pattern was quite different to start with major
                modifications made over time that stabilized the exam pattern to
                a great extent. <br />
                <br />
                IIM Ahmedabad conducted CAT 2015 where it brought in major
                changes like the increase of sections from 2 to 3 sections and
                introduction of timers in computer screens made things easier
                and more commanding. Over the years, as the computer-based CAT
                exam pattern came to a much-stabilized situation, the conducting
                authority found it convenient to conduct the nationwide exam in
                a single, unlike the 30-40 days stretch in earlier times. <br />
                <br />
                Total Section: The total section for CAT 2021 remains the same
                with the major three sections
              </p>
            </div>
            <div className="table-of-syllabus-number-1">
              <table className="exam-tbale-main">
                <tr className="number-1">
                  <th>Sections</th>
                  <th>No. of Questions</th>
                  <th>Total MCQs (with negative marking)</th>
                  <th>Total MCQs (without negative marking)</th>
                  <th>Total Marks</th>
                  <th>Highlights</th>
                </tr>

                <tr className="number-2">
                  <td>Verbal Ability & Reading Comprehension [VARC] </td>
                  <td>22 to 24</td>
                  <td>14 to 16</td>
                  <td>8</td>
                  <td>102</td>
                  <td>
                    No Grammar or vocabulary based questions Verbal Ability
                    questions confined to 3 topics – Jumbled paragraph, Para
                    summary, jumbled sentences
                  </td>
                </tr>

                <tr className="number-3">
                  <td>Quantitative Aptitude</td>
                  <td>20</td>
                  <td>14</td>
                  <td>6</td>
                  <td>96</td>
                  <td>
                    Questions are grouped into 4 sets. Candidates face a time
                    crunch in this section.
                  </td>
                </tr>

                <tr className="number-4">
                  <td>Data Interpretation & Logical Reasoning</td>
                  <td>22 to 24</td>
                  <td>14 to 16</td>
                  <td>8</td>
                  <td>102</td>
                  <td>More arithmetic and reasoning questions. </td>
                </tr>

                <tr className="number-5">
                  <td>Total</td>
                  <td>64 to 68</td>
                  <td>-</td>
                  <td>-</td>
                  <td>300</td>
                  <td>-</td>
                </tr>
              </table>
            </div>
            <div className="other-text">
              <h4> TITA Question Type</h4>

              <p>
                In IIMA CAT 2021, it is expected to have 25% or 20-25 questions
                of Type In The Answer type that would carry no negative marks
                for any wrong answer. Given the relaxation from negative
                marking, the candidates have a higher chance of scoring better
                in this section of the exam.
              </p>

              <h4>MCQ Questions:</h4>

              <p>
                In CAT 2021, the remaining 70-75% of questions apart from TITAs
                will be MCQ questions. Also to note, each MCQ question will
                carry a negative marking for every wrong answer.
              </p>

              <h4>CAT 2021 Marking Scheme:</h4>

              <p>
                The marking scheme for CAT 2021 remains the same with 3 marks
                awarded to each correct answer while there is a penalty of 1
                mark for every 3 wrong answers.
              </p>

              <h4>Syllabus</h4>

              <p>
                Along with the few changes made in the exam pattern, the
                syllabus for CAT 2021 has a few changes, made to address the
                hassles during COVID 19 Pandemic. With the sections remaining
                the questions, IIMA has ensured to have reduced the total number
                to 64-68 questions.
              </p>

              <p>
                IIM Ahmedabad didn’t clearly release the exact syllabus and can
                be mostly referred to as the general CAT pattern. However, the
                organizing body has released an official Mock Test to give an
                idea of the syllabus.
              </p>
            </div>

            <div className="table-2">
              <table className="exam-tbale-main">
                <tr className="number-1">
                  <th>Sectional Division</th>
                  <th>Important Topic for CAT 2021</th>
                  <th>Weightage in Exam</th>
                </tr>
                <tr className="number-2">
                  <td>Quantitative Ability (QA)</td>
                  <td>
                    Arithmetic, Modern Maths, Number System Algebra,
                    Mensuration, Trigonometry, Geometry
                  </td>
                  <td>34%</td>
                </tr>
                <tr className="number-3">
                  <td>Data Interpretation & Logical Reasoning (DILR)</td>
                  <td>
                    Data Charts, Data Tables, Bar Graphs, Venn Diagrams, Seating
                    arrangement, Team formation, Clocks & Calendars
                  </td>
                  <td>32 %</td>
                </tr>
                <tr className="number-4">
                  <td>Verbal Ability & Reading Comprehension (VARC)</td>

                  <td>
                    Long & Short Passages Jumbled Paragraphs, Para-summary
                    Picking the Out of context sentence from a jumbled paragraph
                  </td>
                  <td>34 %</td>
                </tr>
              </table>
            </div>
            <div className="table-3">
              <h4>Compare CAT</h4>
              <table className="exam-tbale-main" style={{ overflow: "auto" }}>
                <tr className="number-1">
                  <th>Components</th>
                  <th>IIMA CAT 2021</th>
                  <th>MAT 2021</th>
                  <th>SNAP 2021</th>
                  <th>XAT2021</th>
                </tr>
                <tr className="number-2">
                  <td>Total Question</td>
                  <td>64 - 68</td>
                  <td>200</td>
                  <td>60</td>
                  <td>100</td>
                </tr>
                <tr className="number-3">
                  <td>Exam Duration</td>
                  <td>2 Hours</td>
                  <td>2 1/2 Hours</td>
                  <td>1 Hours</td>
                  <td>3 Hours</td>
                </tr>
                <tr className="number-4">
                  <td>Question Type</td>
                  <td>MCQs & Non MCQs</td>
                  <td>MCQs</td>
                  <td>MCQs</td>
                  <td>MCQs</td>
                </tr>
                <tr className="number-5">
                  <td>MCQs Option</td>
                  <td>3</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr className="number-6">
                  <td>Marks for Correct Answer</td>
                  <td>3</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr className="number-7">
                  <td>Negative Marking</td>
                  <td>1/3 for MCQs No Negative for Non-MCQs</td>
                  <td>1/4 for all MCQs</td>
                  <td>1/4 for all MCQs</td>
                  <td>1/4 for all MCQs</td>
                </tr>
                <tr className="number-8">
                  <td>Difficulty Level</td>
                  <td>Comparatively High</td>
                  <td>Easy to Moderate</td>
                  <td>Moderate</td>
                  <td>High</td>
                </tr>
                <tr className="number-9">
                  <td>No. of Section</td>
                  <td>3</td>
                  <td>5</td>
                  <td>3</td>
                  <td>3 Sections 1 Sub Section (GK)</td>
                </tr>
                <tr className="number-10">
                  <td>Total Question in Section 1</td>
                  <td>Verbal Ability & Reading Comprehension 22-24</td>
                  <td>Language Comprehension 40</td>
                  <td>General English RC, VR, VA-15</td>
                  <td>English Language & Logical Reasoning - 26</td>
                </tr>
                <tr className="number-11">
                  <td>Total Question in Section 2</td>
                  <td>Data Interpretation & Logical Reasoning - 20</td>
                  <td>Intelligence & Critical Reasoning - 40</td>
                  <td>Analytical & Logical Reasoning - 25</td>
                  <td>Analytical & Logical Reasoning - 25</td>
                </tr>
                <tr className="number-12">
                  <td>Total Question in Section 3</td>
                  <td>Quantitative Ability 22-24</td>
                  <td>
                    Data Analysis & Sufficiency: 40 Mathematical Skills: 40
                    Indian & Global Environment: 40
                  </td>
                  <td>Quant, DI, Data, Sufficiency - 20</td>
                  <td>Decision Making - 21</td>
                </tr>
                <tr className="number-13">
                  <td>Section Time Limit</td>
                  <td>40 Minute Time Limit</td>
                  <td>No</td>
                  <td>No</td>
                  <td>No</td>
                </tr>
                <tr className="number-14">
                  <td>Top B-School</td>
                  <td>20 IIMs, FMS, MDI, IITs, IMI, SPJIMR, XIMB</td>
                  <td>Christ University, NDIM, FIIB, DSIMS, IPE, IESMCRC</td>
                  <td>
                    SIBM Pune, SCMHRD Pune, SIIB Pune, SIBM Bangalore, and all
                    other institutes under Symbiosis Group
                  </td>
                  <td>XLRI, XIMB, TAPMI SPJIMR, IMT </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="col-md-3 populer-college">
            <h2>Similar Colleges</h2>
            <hr />
            <div className="all-one">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management School of Business </p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-two">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>
                  SIBM School of Business Management Management School of
                  Business
                </p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-three">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-four">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-five">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-six">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-seven">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-eight">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="view-more-button">
              <button>View More</button>
            </div>
          </div>
        </div>
        <div
          className="row main-online-prepration"
          id="main-online-prepration-id">
          <div className="col-md-6 online-prepration">
            <h4
              className="mt-5"
              style={{
                fontWeight: "600",
                fontStyle: "italic",
                color: "#000080",
              }}
            >
              Online Preparation
            </h4>
            <p>
              Now download CAT 2020 and CAT 2019 question paper with answer keys
            </p>
            <div className="cat-quant-buttons">
              <div className="cat-saprate-button">
                <p>CAT QUANT 2020 | Slot 1</p> <button  className="mb-2" > Download <FaDownload /></button>
              </div>
              <div className="cat-saprate-button">
                <p>CAT LRDI 2020 |Slot 1 </p> <button className="mb-2">  Download <FaDownload /></button>
              </div>
              <div className="cat-saprate-button">
                <p>CAT VARC 2020 | Slot 1 </p> <button  className="mb-2" >  Download <FaDownload /> </button>
              </div>
            </div>
            <h4>Prepration Books</h4>
            <ul className="prepration-book-unorder-list">
              <li>
                How to Prepare for Verbal Ability and Reading Comprehension for
                CAT Authored by: Arun Sharma & Meenakshi Upadhyay{" "}
              </li>

              <li>
                Verbal Ability and Reading Comprehension for the CAT Authored
                by: Nishit K. Sinha
              </li>

              <li>
                {" "}
                Verbal Ability & Reading Comprehension Authored by: Ajay Singh
              </li>

              <li> Word Power Made Easy Authored by: Norman Lewis</li>

              <li>
                {" "}
                How to Prepare for Logical Reasoning for CAT Authored by: Arun
                Sharma{" "}
              </li>

              <li>
                {" "}
                How to Prepare for Data Interpretation for CAT Authored by: Arun
                Sharma
              </li>

              <li>
                {" "}
                Quantitative Aptitude Quantum Cat Authored by: Sarvesh K. Verma
              </li>
            </ul>

            <h4>
              {" "}
              <MdKeyboardDoubleArrowRight color="#FF5D01" /> Tips for
              Quantitative Ability (QA)
            </h4>

            <p>
              Students have been reportedly seen to fall into severe time crunch
              during the quantitative aptitude section. One of the most needed
              things at the exam hall while attempting this section is proper
              time management and planning to attempt the maximum possible
              questions. Not to forget, the MCQ questions in the section carry
              negative marking.{" "}
            </p>

            <h5>
              {" "}
              <MdKeyboardDoubleArrowRight color="#FF5D01" /> Know Your Syllabus:{" "}
            </h5>

            <p>
              The first thing to grasp is the syllabus for IIM CAT 2021.
              Generally, the questions are mostly based on the syllabus of class
              10; however, they do carry certain concepts from class 11 and
              class 12. Knowing your syllabus will first allow you to segregate
              your strengthful subjects and those you are weak at; subsequently
              allowing you to frame a better preparation plan. Further in-depth,
              try understanding what type of questions are more common and
              analyze the questions that would require the most time, For
              example, 3-d or spider charts, Venn diagrams, routes, and
              networks, etc.
            </p>

            <h5>
              {" "}
              <MdKeyboardDoubleArrowRight color="#FF5D01" /> Work on Your Speed
              and Accuracy :
            </h5>

            <p>
              Your next step would be to work on your speed and accuracy in
              solving questions. The only trick to master this is practice. The
              section has a time limit of 40 minutes for 24 questions. Try
              solving the same questions again faster every time with improved
              accuracy.{" "}
            </p>

            <h5>
              {" "}
              <MdKeyboardDoubleArrowRight color="#FF5D01" /> Pre-Decide Your
              Strategy :
            </h5>

            <p>
              Student’s falling into confusion at the exam hall is quite common
              and takes most of the time to adjust to the environment. The best
              trick here is to pre-decide your strategy before entering the exam
              hall. Figure out the ways that would best suit you in answering
              each question.{" "}
            </p>

            <h5>
              {" "}
              <MdKeyboardDoubleArrowRight color="#FF5D01" /> Work on Shortcuts :
            </h5>

            <p>
              CAT is a competitive exam and highly tests your skills, smart
              actions, and more. With limited time, it is pretty impossible to
              solve all questions with their traditional methods. There are
              tricks and shortcuts to solve a lot of time-consuming questions.
              Learn the tricks! Practice them and implement them to save more of
              your time.
            </p>

            <h5>
              {" "}
              <MdKeyboardDoubleArrowRight color="#FF5D01" /> Choose Wisely &
              Smartly{" "}
            </h5>

            <p className="pb-5">
              It is pretty obvious that not all questions will be solved as
              others or as planned. Play smart, choose your first-to-go
              questions. You may either choose to finish off with the easier
              questions and then move on to the harder ones.{" "}
            </p>
          </div>
          <div className="col-md-3 populer-college">
            <h2>Similar Colleges</h2>
            <hr />
            <div className="all-one">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management School of Business </p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-two">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>
                  SIBM School of Business Management Management School of
                  Business
                </p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-three">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-four">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-five">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-six">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-seven">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-eight">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="view-more-button">
              <button>View More</button>
            </div>
          </div>
        </div>

        <div className=" row main-cat-participating-college"
          id="main-participating-college-id" >
          <div className="col-md-6 all-content-of-cat-participating-college  ">
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
             <AllCollegeInExam/>
             <AllCollegeInExam/>
             <AllCollegeInExam/>
             <AllCollegeInExam/>
             <AllCollegeInExam/>
             <AllCollegeInExam/>
             <AllCollegeInExam/>
             <AllCollegeInExam/>
            </div>
            <h4 className="mt-5 mb-5">
              Top MBA Colleges Accepting CAT in Non-IIM Category{" "}
            </h4>

            <div className="cat-and-top-mba-participating-college">
            <AllCollegeInExam/>
            <AllCollegeInExam/>
            <AllCollegeInExam/>
            <AllCollegeInExam/>
            <AllCollegeInExam/>
            <AllCollegeInExam/>
            <AllCollegeInExam/>
            <AllCollegeInExam/>
            </div>
          </div>
          <div className="col-md-3 populer-college">
            <h2>Similar Colleges</h2>
            <hr />
            <div className="all-one">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management School of Business </p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-two">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>
                  SIBM School of Business Management Management School of
                  Business
                </p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-three">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-four">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-five">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-six">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-seven">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="all-eight">
              <div className="all-college-of-populer-collge">
                <img
                  className="image-of-pop-col"
                  src={require("../../Assets/demo-image-for-populer-college-exam-page.png")}
                  width={50}
                  style={{ border: "1px solid black" }}
                  alt=""
                />
                <p>SIBM School of Business Management</p>
              </div>
              <div className="all-college-of-populer-collge-number2">
                <p className="mt-1">
                  {" "}
                  <ImLocation /> Bangelore
                </p>
                <button className="mt-1 compare-button">Compare</button>
                <button className="mt-1 apply-button ">Apply</button>
              </div>
              <hr />
            </div>
            <div className="view-more-button">
              <button>View More</button>
            </div>
          </div>
         
        </div>
        
          <div className="row main-other-college-in-exam-page">
          

            <div className="col-md-10 other-college-in-exam-page">
            <h3 className=" mb-5 "> Other Top Colleges</h3>
              <OtherCollege />
            </div>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Exam;
