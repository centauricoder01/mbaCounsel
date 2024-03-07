import React from "react";
import "./Courses.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { MdPlayArrow } from "react-icons/md";
import PopulerCollge from "./MostPopulerCollege";
import { FcSearch } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import "../Exam/Exam.css";
import RightSideSimilerColleges from "../Exam/RightSideSimilerColleges";


const DraftCourses = () => {
  const [value, setValue] = useState(1);

  const [activeButton, setActiveButton] = useState(null);

  const HandleButton = (value, buttonId) => {
    setActiveButton(buttonId);
    setValue(value);
  };

  const getButtonStyles = (buttonId) => {
    return {
      borderBottom: activeButton === buttonId ? "2px solid blue" : "none",
    };
  };
  return (
    <>
      <Navbar />

      <div className="containerfluid main-mba-course ">
        <div className="row">
          <div className="col-md-10 pb-4 m-auto">
            <p style={{ paddingTop: "8rem" }}>
              <FaHome /> Home / Courses / Common Admission Test
            </p>
            <h3>MBA IN ENTERPRENUER</h3>
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
            <div className="col-md-3 ">
             
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
            <div className="col-md-3 ">
              <RightSideSimilerColleges />
            </div>
          </div>
        ) : null}
        {value === 3 ? (
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
            <div className="col-md-3 ">
              <RightSideSimilerColleges />
            </div>
          </div>
        ) : null}

        
       
        <div className="row main-skills-taught mt-5 pt-5 ">
          <div className="col-md-5 image-of-skills-taught">
         
          </div>
          <div className="col-md-6 all-text-of-skills">
            <h2>| SKILLS TAUGHT</h2>
            <p>
              An MBA in Entrepreneurship will ensure that you have all the well
              rounded skills sets you require to be an inspiring leader and lead
              your business and team to success. You will receive assistance in
              some of the distinct challenges as an entrepreneur Managing
              growth, securing finances of a company, monetizing innovation,
              market research and as well as creating impact are also some of
              the avenues students are encouraged to learn about.
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
        <div className="row main-types-of-mba-course">
          <div className="col-md-12">
            <h1>|TYPES OF MBA ENTERPRENUERSHIP COURSES</h1>
            <div className="row types-of-mba-images">
              <div className="col-md-5  types-of-mba-image-one">
                <img src={require("../../Assets/mba-mid-one.png")} alt="" />
              </div>
              <div className="col-md-5 types-of-mba-image-two">
                <img src={require("../../Assets/mba-mid-two.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row main-syllabus-head">
          <div className="col-md-12 head-of-syllabus">
            <h1>|syllabus</h1>
          </div>
        </div>
        <div className="row tables-syllabus">
          <div className="col-md-12">
           
          </div>
        </div>
        <div className="row main-eligibility">
          <div className="col-md-12 eligibility-content  ">
            <h3>Eligibility</h3>
            <hr />
            <ul style={{ listStyle: "none" }}>
              <li>
                The eligibility criteria for MBA Entrepreneurship of some the
                best colleges for MBA in entrepreneurship 2021 is
              </li>
              <li>
                1. The candidate must have graduated with a minimum of 45%
                aggregate in a bachelor’s degree. Although this percentage
                differs from college to college.
              </li>
              <li>
                2. Must pass and have a good score in the relevant entrance exam
                followed by a group discussion and PI round
              </li>
            </ul>
          </div>
        </div>
        <div className="row main-carrer-scope">
          <div className="col-md-12 mb-5 carrer-scope-head">
            <h1>|CAREER SCOPE</h1>
          </div>
          <div className="col-md-10 para-in-carrer-scope">
            <p>
              MBA Entrepreneurship graduates are hired in various sectors like
              Automobile, Advertising, Agriculture, Banking, Small and medium
              enterprise management, Information technology, Hospitality,
              Fashion management, etc. Major job profiles available to such
              graduates are Assistant Manager, Business Consultants, Finance
              Controller, Human Resource Manager, accountant, etc.
            </p>
          </div>
          <div className="row image-of-carrer-scope">
            <div className="col-md-5  text-of-carrer-scope">
              <h3 style={{ color: "black", fontWeight: "700" }}>
                Top Job Profile
              </h3>
              <ul style={{ listStyle: "none" }} className="carrer-list">
                <li>
                  <MdPlayArrow size={30} />
                  <span>Small Business Owners</span>
                </li>
                <hr />
                <li>
                  <MdPlayArrow size={30} />
                  <span>Business Reporters</span>
                </li>
                <hr />
                <li>
                  <MdPlayArrow size={30} />
                  <span>Business Consultants</span>
                </li>
                <hr />
                <li>
                  <MdPlayArrow size={30} />
                  <span>Sales Managers</span>
                </li>
                <hr />
                <li>
                  <MdPlayArrow size={30} />
                  <span>Fundraisers and Development Officers</span>
                </li>
                <hr />
                <li>
                  <MdPlayArrow size={30} />
                  <span>New Venture Developers</span>
                </li>
                <hr />
              </ul>
            </div>
            <div className="col-md-5 image-of-carrer-scope">
              <img
                src={require("../../Assets/course-triple-img.png")}
                width={600}
                alt=""
              />
            </div>
          </div>
        </div>
     
        <div className="row main-most-populer-college">
          <div className="col-md-12 head-of-populer-college">
            <h1>|10 MOST POPULAR COLLEGES FOR ENTREPRENEURSHIP COURSE</h1>
          </div>
          <div className="col-md-12 para-of-populer-college">
            <p>
              MBA Entrepreneurship is a new emerging specialization that many
              students are opting for in order to be independent entrepreneurs.
              Here is a list of the 10 most popular colleges for MBA
              Entrepreneurs in India
            </p>
          </div>
          <div className="col-md-12 all-college-content">
            <PopulerCollge />
          </div>
        </div>
        <div className="row main-faq">
          <div className="col-md-12  main-faq-head">
            <h1>| FAQ's</h1>
          </div>
          <div className="col-md-8 search-bar-head-in-faq">
            <h2>Frequently asked question and answer</h2>
            <div className="input-and-search">
              <input type="text" />
              <button>
                <FcSearch />
              </button>
            </div>
          </div>
        </div>
      
      </div>

      <Footer />
    </>
  );
};

export default DraftCourses;
