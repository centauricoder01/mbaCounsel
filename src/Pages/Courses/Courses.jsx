import React, { useState, useEffect } from "react";
import "./Courses.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FcSearch } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import RightSideSimilerColleges from "../Exam/RightSideSimilerColleges";
import AllCollegeInExam from "../Exam/AllCollegeInExam";
import { FaHandPointer } from "react-icons/fa";

const Courses = () => {
  const [value, setValue] = useState(1);

  const [activeButton, setActiveButton] = useState(null)
  const [showPopup, setShowPopup] = useState(false);
    // Form input state
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      course: "",
    });

  const HandleButton = (value, buttonId) => {
    setActiveButton(buttonId);
    setValue(value);
  };

  const getButtonStyles = (buttonId) => {
    return {
      borderBottom: activeButton === buttonId ? "2px solid blue" : "none",
    };
  };

   // Open the popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // 5 seconds
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);


    // Handle form input change
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

  // Handle closing of the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };


   // Handle form submit without page refresh
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // You can now send `formData` to the backend via an API call
    // For example:
    // fetch('/api/submitForm', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })

    // Close the popup after submission
    handleClosePopup();
  };

    // Handle button click to show popup immediately
    const handleShowPopup = () => {
      setShowPopup(true);
    };

  return (
    <>
      <Navbar />
      {showPopup && (
          <div className="popup-container">
            <div className="popup-form">
              <button className="close-popup" onClick={handleClosePopup}>
                &times;
              </button>
              <h2>Course Enquiry</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="course"
                  placeholder="Course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}

      <div className="containerfluid main-mba-course ">
        <div className="row">
          <div className="col-md-10 pb-4 m-auto">
            <p style={{ paddingTop: "8rem" }}>
              <FaHome /> Home / Courses / Common Admission Test
            </p>
            <div className="d-flex justify-content-between">
              <h1>MBA IN ENTERPRENUER</h1>
              <button
                type="button"
                className="btn btn-success w-25 "
                style={{ fontSize: "1.2rem" }}
                onClick={handleShowPopup} // Show popup when clicking this button
              >
                Get More Information  &nbsp;<FaHandPointer />
              </button>
            </div>
          </div>
        </div>

        <div className="row main-all-content-of-exam-page">
          <div className="col-md-11  all-content-of-exam-page">
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
              Salient features
            </button>

            <button
              onClick={() => HandleButton(3, 3)}
              style={getButtonStyles(3)}
            >
              Admission
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
              future scope
            </button>

            <button
              onClick={() => HandleButton(6, 6)}
              style={getButtonStyles(6)}
            >
              colleges
            </button>
            <button
              onClick={() => HandleButton(7, 7)}
              style={getButtonStyles(7)}
            >
              FAQ
            </button>
          </div>
        </div>

        {value === 1 ? (
          <div
            className="row main-about-cat-and-populer-college"
            id="main-about-cat-id"
          >
            <div className="col-md-8 text-of-program-details about-cat-college  ">
              <h2 className="head-tag-of-program-detals pt-3">
                | PROGRAM DETAILS
              </h2>

              <p>
                MBA in Entrepreneurship is a 2-years full-time post graduation
                course that is spread across four semesters. The degree includes
                an MBA curriculum with a strong emphasis on entrepreneurial
                subjects including venture capital and asset management. This
                MBA specialisation is designed for students aspiring to be
                entrepreneurs. The curriculum is designed so that students have
                a thorough grasp of how to generate business ideas, develop
                these ideas into service and product offerings, and then plan a
                commercial project to bring business ideas to market. <br />
                <br />
                The Required skill set in order to take up this course MBA
                Entrepreneurship demands its aspirants to have the best
                knowledge of management such as Understanding Strategy and
                embracing opportunities, ability to take risks, Proactiveness,
                Innovation, Self-discipline and Integrity as well as Decisive
                and action-oriented mindset. <br />
                <br />
                This course teaches students all the skills they need to launch
                a startup such as teamwork, networking, creativity, leadership
                skills and flexibility in decision making
              </p>
              <p>
                MBA Entrepreneurship is one of the best specialties for students
                who want to build and operate a profitable business. MBA
                Entrepreneurship has gained popularity among students in recent
                years. This course is becoming increasingly popular among
                students. The fact that not only students with a business
                background, but also students with a scientific or arts
                background, are applying for this course demonstrates its appeal
                among students. The course assists students in continuing their
                own entrepreneurial enterprises.
              </p>
              <div className=" all-text-of-skills">
                <h2>| SKILLS TAUGHT</h2>
                <p>
                  An MBA in Entrepreneurship will ensure that you have all the
                  well rounded skills sets you require to be an inspiring leader
                  and lead your business and team to success. You will receive
                  assistance in some of the distinct challenges as an
                  entrepreneur Managing growth, securing finances of a company,
                  monetizing innovation, market research and as well as creating
                  impact are also some of the avenues students are encouraged to
                  learn about.
                </p>
                <h3 style={{ fontWeight: "700", color: "black" }}>
                  Top Skilled Taught are
                </h3>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    {" "}
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Resilience
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Networking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Calculated Risk-Taking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Creative Thinking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Complex Problem Solving
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Vision Casting
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 pb-5 ">
              <RightSideSimilerColleges
                EntranceName="Top Entrance Exam"
                NewsName="Related Articles"
                specilization="Trending Specilization"
              />
            </div>
          </div>
        ) : null}
        {value === 2 ? (
          <div
            className="row main-about-cat-and-populer-college"
            id="main-about-cat-id"
          >
            <div className="col-md-8 text-of-program-details about-cat-college  ">
              <h2 className="head-tag-of-program-detals pt-3">
                | SALIENT FEATURES
              </h2>

              <p>
                MBA in Entrepreneurship is a 2-years full-time post graduation
                course that is spread across four semesters. The degree includes
                an MBA curriculum with a strong emphasis on entrepreneurial
                subjects including venture capital and asset management. This
                MBA specialisation is designed for students aspiring to be
                entrepreneurs. The curriculum is designed so that students have
                a thorough grasp of how to generate business ideas, develop
                these ideas into service and product offerings, and then plan a
                commercial project to bring business ideas to market. <br />
                <br />
                The Required skill set in order to take up this course MBA
                Entrepreneurship demands its aspirants to have the best
                knowledge of management such as Understanding Strategy and
                embracing opportunities, ability to take risks, Proactiveness,
                Innovation, Self-discipline and Integrity as well as Decisive
                and action-oriented mindset. <br />
                <br />
                This course teaches students all the skills they need to launch
                a startup such as teamwork, networking, creativity, leadership
                skills and flexibility in decision making
              </p>
              <p>
                MBA Entrepreneurship is one of the best specialties for students
                who want to build and operate a profitable business. MBA
                Entrepreneurship has gained popularity among students in recent
                years. This course is becoming increasingly popular among
                students. The fact that not only students with a business
                background, but also students with a scientific or arts
                background, are applying for this course demonstrates its appeal
                among students. The course assists students in continuing their
                own entrepreneurial enterprises.
              </p>
              <div className=" all-text-of-skills">
                <h2>| SKILLS TAUGHT</h2>
                <p>
                  An MBA in Entrepreneurship will ensure that you have all the
                  well rounded skills sets you require to be an inspiring leader
                  and lead your business and team to success. You will receive
                  assistance in some of the distinct challenges as an
                  entrepreneur Managing growth, securing finances of a company,
                  monetizing innovation, market research and as well as creating
                  impact are also some of the avenues students are encouraged to
                  learn about.
                </p>
                <h3 style={{ fontWeight: "700", color: "black" }}>
                  Top Skilled Taught are
                </h3>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    {" "}
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Resilience
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Networking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Calculated Risk-Taking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Creative Thinking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Complex Problem Solving
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Vision Casting
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 pb-5 ">
              <RightSideSimilerColleges
                EntranceName="Top Entrance Exam"
                NewsName="Related Articles"
                specilization="Trending Specilization"
              />
            </div>
          </div>
        ) : null}
        {value === 3 ? (
          <div
            className="row main-about-cat-and-populer-college"
            id="main-about-cat-id"
          >
            <div className="col-md-8 text-of-program-details about-cat-college  ">
              <h2 className="head-tag-of-program-detals pt-3">| ADMISSION</h2>

              <p>
                MBA in Entrepreneurship is a 2-years full-time post graduation
                course that is spread across four semesters. The degree includes
                an MBA curriculum with a strong emphasis on entrepreneurial
                subjects including venture capital and asset management. This
                MBA specialisation is designed for students aspiring to be
                entrepreneurs. The curriculum is designed so that students have
                a thorough grasp of how to generate business ideas, develop
                these ideas into service and product offerings, and then plan a
                commercial project to bring business ideas to market. <br />
                <br />
                The Required skill set in order to take up this course MBA
                Entrepreneurship demands its aspirants to have the best
                knowledge of management such as Understanding Strategy and
                embracing opportunities, ability to take risks, Proactiveness,
                Innovation, Self-discipline and Integrity as well as Decisive
                and action-oriented mindset. <br />
                <br />
                This course teaches students all the skills they need to launch
                a startup such as teamwork, networking, creativity, leadership
                skills and flexibility in decision making
              </p>
              <p>
                MBA Entrepreneurship is one of the best specialties for students
                who want to build and operate a profitable business. MBA
                Entrepreneurship has gained popularity among students in recent
                years. This course is becoming increasingly popular among
                students. The fact that not only students with a business
                background, but also students with a scientific or arts
                background, are applying for this course demonstrates its appeal
                among students. The course assists students in continuing their
                own entrepreneurial enterprises.
              </p>
              <div className=" all-text-of-skills">
                <h2>| SKILLS TAUGHT</h2>
                <p>
                  An MBA in Entrepreneurship will ensure that you have all the
                  well rounded skills sets you require to be an inspiring leader
                  and lead your business and team to success. You will receive
                  assistance in some of the distinct challenges as an
                  entrepreneur Managing growth, securing finances of a company,
                  monetizing innovation, market research and as well as creating
                  impact are also some of the avenues students are encouraged to
                  learn about.
                </p>
                <h3 style={{ fontWeight: "700", color: "black" }}>
                  Top Skilled Taught are
                </h3>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    {" "}
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Resilience
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Networking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Calculated Risk-Taking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Creative Thinking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Complex Problem Solving
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Vision Casting
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 pb-5 ">
              <RightSideSimilerColleges
                EntranceName="Top Entrance Exam"
                NewsName="Related Articles"
                specilization="Trending Specilization"
              />
            </div>
          </div>
        ) : null}
        {value === 4 ? (
          <div
            className="row main-about-cat-and-populer-college"
            id="main-about-cat-id"
          >
            <div className="col-md-8 text-of-program-details about-cat-college  ">
              <h2 className="head-tag-of-program-detals pt-3">| SYLLABUS</h2>

              <p>
                MBA in Entrepreneurship is a 2-years full-time post graduation
                course that is spread across four semesters. The degree includes
                an MBA curriculum with a strong emphasis on entrepreneurial
                subjects including venture capital and asset management. This
                MBA specialisation is designed for students aspiring to be
                entrepreneurs. The curriculum is designed so that students have
                a thorough grasp of how to generate business ideas, develop
                these ideas into service and product offerings, and then plan a
                commercial project to bring business ideas to market. <br />
                <br />
                The Required skill set in order to take up this course MBA
                Entrepreneurship demands its aspirants to have the best
                knowledge of management such as Understanding Strategy and
                embracing opportunities, ability to take risks, Proactiveness,
                Innovation, Self-discipline and Integrity as well as Decisive
                and action-oriented mindset. <br />
                <br />
                This course teaches students all the skills they need to launch
                a startup such as teamwork, networking, creativity, leadership
                skills and flexibility in decision making
              </p>
              <p>
                MBA Entrepreneurship is one of the best specialties for students
                who want to build and operate a profitable business. MBA
                Entrepreneurship has gained popularity among students in recent
                years. This course is becoming increasingly popular among
                students. The fact that not only students with a business
                background, but also students with a scientific or arts
                background, are applying for this course demonstrates its appeal
                among students. The course assists students in continuing their
                own entrepreneurial enterprises.
              </p>
              <div className=" all-text-of-skills">
                <h2>| SKILLS TAUGHT</h2>
                <p>
                  An MBA in Entrepreneurship will ensure that you have all the
                  well rounded skills sets you require to be an inspiring leader
                  and lead your business and team to success. You will receive
                  assistance in some of the distinct challenges as an
                  entrepreneur Managing growth, securing finances of a company,
                  monetizing innovation, market research and as well as creating
                  impact are also some of the avenues students are encouraged to
                  learn about.
                </p>
                <h3 style={{ fontWeight: "700", color: "black" }}>
                  Top Skilled Taught are
                </h3>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    {" "}
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Resilience
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Networking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Calculated Risk-Taking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Creative Thinking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Complex Problem Solving
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Vision Casting
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 pb-5">
              <RightSideSimilerColleges
                EntranceName="Top Entrance Exam"
                NewsName="Related Articles"
                specilization="Trending Specilization"
              />
            </div>
          </div>
        ) : null}
        {value === 5 ? (
          <div
            className="row main-about-cat-and-populer-college"
            id="main-about-cat-id"
          >
            <div className="col-md-8 text-of-program-details about-cat-college  ">
              <h2 className="head-tag-of-program-detals pt-3">
                | FUTURE SCOPE
              </h2>

              <p>
                MBA in Entrepreneurship is a 2-years full-time post graduation
                course that is spread across four semesters. The degree includes
                an MBA curriculum with a strong emphasis on entrepreneurial
                subjects including venture capital and asset management. This
                MBA specialisation is designed for students aspiring to be
                entrepreneurs. The curriculum is designed so that students have
                a thorough grasp of how to generate business ideas, develop
                these ideas into service and product offerings, and then plan a
                commercial project to bring business ideas to market. <br />
                <br />
                The Required skill set in order to take up this course MBA
                Entrepreneurship demands its aspirants to have the best
                knowledge of management such as Understanding Strategy and
                embracing opportunities, ability to take risks, Proactiveness,
                Innovation, Self-discipline and Integrity as well as Decisive
                and action-oriented mindset. <br />
                <br />
                This course teaches students all the skills they need to launch
                a startup such as teamwork, networking, creativity, leadership
                skills and flexibility in decision making
              </p>
              <p>
                MBA Entrepreneurship is one of the best specialties for students
                who want to build and operate a profitable business. MBA
                Entrepreneurship has gained popularity among students in recent
                years. This course is becoming increasingly popular among
                students. The fact that not only students with a business
                background, but also students with a scientific or arts
                background, are applying for this course demonstrates its appeal
                among students. The course assists students in continuing their
                own entrepreneurial enterprises.
              </p>
              <div className=" all-text-of-skills">
                <h2>| SKILLS TAUGHT</h2>
                <p>
                  An MBA in Entrepreneurship will ensure that you have all the
                  well rounded skills sets you require to be an inspiring leader
                  and lead your business and team to success. You will receive
                  assistance in some of the distinct challenges as an
                  entrepreneur Managing growth, securing finances of a company,
                  monetizing innovation, market research and as well as creating
                  impact are also some of the avenues students are encouraged to
                  learn about.
                </p>
                <h3 style={{ fontWeight: "700", color: "black" }}>
                  Top Skilled Taught are
                </h3>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    {" "}
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Resilience
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Networking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Calculated Risk-Taking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Creative Thinking
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Complex Problem Solving
                  </li>
                  <li>
                    <img
                      src={require("../../Assets/arrow.png")}
                      width={15}
                      alt=""
                    />{" "}
                    Vision Casting
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 pb-5">
              <RightSideSimilerColleges
                EntranceName="Top Entrance Exam"
                NewsName="Related Articles"
                specilization="Trending Specilization"
              />
            </div>
          </div>
        ) : null}
        {value === 6 ? (
          <div
            className="row main-about-cat-and-populer-college"
            id="main-about-cat-id"
          >
            <div className="col-md-8 text-of-program-details about-cat-college  ">
              <h2 className="head-tag-of-program-detals pt-3">
                | TOP COLLEGES
              </h2>

              <p>
                MBA Entrepreneurship is a new emerging specialization that many
                students are opting for in order to be independent
                entrepreneurs. Here is a list of the 10 most popular colleges
                for MBA Entrepreneurs in India
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
            </div>
            <div className="col-md-3 ">
              <RightSideSimilerColleges
                EntranceName="Top Entrance Exam"
                NewsName="Related Articles"
                specilization="Trending Specilization"
              />
            </div>
          </div>
        ) : null}
        {value === 7 ? (
          <div
            className="row main-about-cat-and-populer-college"
            id="main-about-cat-id"
          >
            <div className="col-md-8 text-of-program-details about-cat-college  ">
              <h2 className="head-tag-of-program-detals pt-3">| FAQ</h2>
              <div className="col-md-10 m-auto pb-5 mb-5 search-bar-head-in-faq">
                <h2>Frequently asked question and answer</h2>
                <div className="input-and-search">
                  <input type="text" />
                  <button>
                    <FcSearch />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3 ">
              <RightSideSimilerColleges
                EntranceName="Top Entrance Exam"
                NewsName="Related Articles"
                specilization="Trending Specilization"
              />
            </div>
          </div>
        ) : null}
      </div>

      <Footer />
    </>
  );
};

export default Courses;
