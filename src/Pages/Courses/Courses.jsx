import React from "react";
import "./Courses.css";
import Navbar from "../../Components/Navbar/Navbar";
import { TiArrowForward } from "react-icons/ti";
import SyllabusTable from "./table";
import {ImArrowRight} from "react-icons/im"
import PopulerCollge from "./MostPopulerCollege";
import {FcSearch} from "react-icons/fc";
import { Collapse } from 'antd';
import items  from "./accrodingOfFaq";
import Footer from "../../Components/Footer/Footer";


const Courses = () => {

  

  return (
    <>
      <Navbar />
      <div className="main-course-container">
        <div className="back-image">
          <img src={require("../../Assets/mba_top_back_image.png")} alt="" />
        </div>
        <div className="top-basic-para">
          <p>
            MBA Entrepreneurship is one of the best specialties for students who
            want to build and operate a profitable business. MBA
            Entrepreneurship has gained popularity among students in recent
            years. This course is becoming increasingly popular among students.
            The fact that not only students with a business background, but also
            students with a scientific or arts background, are applying for this
            course demonstrates its appeal among students. The course assists
            students in continuing their own entrepreneurial enterprises.
          </p>
        </div>
        <div className="program-details-main">
          <div className="program-details">
            <div className="program-details-para">
              <h2>| PROGRAM DETAILS</h2>
              <p>
                MBA in Entrepreneurship is a 2-years full-time post graduation
                course that is spread across four semesters. The degree includes
                an MBA curriculum with a strong emphasis on entrepreneurial
                subjects including venture capital and asset management. This
                MBA specialisation is designed for students aspiring to be
                entrepreneurs. The curriculum is designed so that students have
                a thorough grasp of how to generate business ideas, develop
                these ideas into service and product offerings, and then plan a
                commercial project to bring business ideas to market. The
                Required skill set in order to take up this course MBA
                Entrepreneurship demands its aspirants to have the best
                knowledge of management such as Understanding Strategy and
                embracing opportunities, ability to take risks, Proactiveness,
                Innovation, Self-discipline and Integrity as well as Decisive
                and action-oriented mindset. This course teaches students all
                the skills they need to launch a startup such as teamwork,
                networking, creativity, leadership skills and flexibility in
                decision making
              </p>
            </div>
            <div className="program-details-image">
              <img
                src={require("../../Assets/program_details_image.png")}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="main-skills-taught">
          <div className="skills_taught-image">
            <img
              src={require("../../Assets/skills_taught_image.png")}
              alt="skills"
            />
          </div>
          <div className="skills-taught-all-item">
            <div className="head-of-skills-taught">
              <h2>| SKILLS TAUGHT</h2>
              <p>
                An MBA in Entrepreneurship will ensure that you have all the
                well rounded skills sets you require to be an inspiring leader
                and lead your business and team to success. You will receive
                assistance in some of the distinct challenges as an entrepreneur
                Managing growth, securing finances of a company, monetizing
                innovation, market research and as well as creating impact are
                also some of the avenues students are encouraged to learn about.
              </p>
            </div>
            <div className="list-of-skills-taught">
              <h4>Top Skilled Taught are</h4>
              <div className="item-in-skills-taught-list">
                <li>
                  {" "}
                  <TiArrowForward /> Resilience
                </li>
                <li>
                  <TiArrowForward />
                  Networking
                </li>
                <li>
                  <TiArrowForward />
                  Calculated Risk-Taking
                </li>
                <li>
                  <TiArrowForward />
                  Creative Thinking
                </li>
                <li>
                  <TiArrowForward />
                  Complex Problem Solving
                </li>
                <li>
                  <TiArrowForward />
                  Vision Casting
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="main-types-of-mba-courses">
          <h1>|TYPES OF MBA ENTERPRENUERSHIP COURSES</h1>
          <div className="types-of-mba-courses">
            <img src={require("../../Assets/mba-mid-one.png")} alt="first" />
            <img src={require("../../Assets/mba-mid-two.png")} alt="first" />
          </div>
        </div>
        <div className="syllabus-h1">
          <h1>|syllabus</h1>
        </div>
        <div className="syllabus-table">
          <SyllabusTable />
        </div>
        <div className="eligibilty">
          <div className="eligibilty-content">
            <h4>Eligibility</h4> <hr style={{ border: "1px solid black" }} />
            <p>
              The eligibility criteria for MBA Entrepreneurship of some the best
              colleges for MBA in entrepreneurship 2021 is{" "}
            </p>
            <p>
              1. The candidate must have graduated with a minimum of 45%
              aggregate in a bachelor’s degree. Although this percentage differs
              from college to college.
            </p>
            <p>
              2. Must pass and have a good score in the relevant entrance exam
              followed by a group discussion and PI round
            </p>
          </div>
        </div>
        <div className="carrer-scope">
          <h1> |CAREER SCOPE </h1>
          <div className="carrer-scope-head">
            <p>
              MBA Entrepreneurship graduates are hired in various sectors like
              Automobile, Advertising, Agriculture, Banking, Small and medium
              enterprise management, Information technology, Hospitality,
              Fashion management, etc. Major job profiles available to such
              graduates are Assistant Manager, Business Consultants, Finance
              Controller, Human Resource Manager, accountant, etc.
            </p>
          </div>
        
            <div className="scope-in-mba-all">
            
              <ul className="list-in-carrer-scope" >
              <div className="tittel-in-carrer-scope">
              <h3>Top Job Profile</h3>
              </div>
              
                <li> <ImArrowRight/>  Small Business Owners</li> <hr />
                <li> <ImArrowRight/> Business Reporters</li><hr />
                <li> <ImArrowRight/> Business Consultants</li><hr />
                <li> <ImArrowRight/> Sales Managers</li><hr />
                <li> <ImArrowRight/> Fundraisers and Development Officers</li><hr />
                <li>  <ImArrowRight/> New Venture Developers</li>
              </ul>
            
            <div className="triple-layer-photo">
              <img src={require("../../Assets/course-triple-img.png")} alt="courses" />
            </div>
          </div>
        </div>
        {/* ---------------------this part need to be edit----------------- */}
        <div className="recruiters">
          <div className="head-of-recruiter">
            <h1>|TOP RECRUITERS</h1>
          </div>
          <div className="sliding-receuiters"></div>
        </div>
        <div className="most-populer-college">
          <div className="head-of-most-populer-college">
            <h1>|10 MOST POPULAR COLLEGES FOR ENTREPRENEURSHIP COURSE</h1>
          </div>
          <div className="para-of-most-populer-college">
            <p>MBA Entrepreneurship is a new emerging specialization that many students are opting for in order to be independent entrepreneurs. Here is a list of the 10 most popular colleges for MBA Entrepreneurs in India</p>
          </div>
          <div className="all-populer-colleges">
          <PopulerCollge/>
          </div>
          <div className="Faq-head">
            <h1>| FAQ's</h1>
          </div>
          <div className="faq-search-bar">
            <h2>Frequently asked question and answer</h2>
            <div className="button-and-search">
              <input type="text" className="search-bar-for-faq" placeholder="Search" />
              <button><FcSearch/></button>
            </div>

          </div>
        </div>
        <div className="accrodin-of-faq">
        <Collapse items={items} defaultActiveKey={['1']}  />;
        </div>
        <div className="footer-in-page">
          <Footer/>
        </div>

      </div>
    </>
  );
};

export default Courses;
