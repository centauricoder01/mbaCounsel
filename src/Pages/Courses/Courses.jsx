import React from "react";
import "./Courses.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SyllabusTable from "./table";
import { MdPlayArrow } from "react-icons/md";
import PopulerCollge from "./MostPopulerCollege";
import { FcSearch } from "react-icons/fc";
import { Collapse } from 'antd';
import items  from "./accrodingOfFaq";



const Courses = () => {

  

  return (
    <>
      <Navbar />
      <div className="row coursers-top-back-image">
        <div className="clo-md-12  ">
        <img src={require('../../Assets/mba-top-back-image.png')} alt="back" className="imagefluid courses-top-back" />

        </div>
      </div>

      <div className="containerfluid main-mba-course ">
   
      <div className="row">
      <div className="col-md-12 row ">
        <h2 className=" mba-enterprenuer">MBA IN ENTERPRENUER</h2>
      </div>
    
  
      </div>
      <div className="row main-para-of-courses">
        <div className="col-md-11 mt-4 ">
          <p>MBA Entrepreneurship is one of the best specialties for students who want to build and operate a profitable business. MBA Entrepreneurship has gained popularity among students in recent years. This course is becoming increasingly popular among students. The fact that not only students with a business background, but also students with a scientific or arts background, are applying for this course demonstrates its appeal among students. The course assists students in continuing their own entrepreneurial enterprises.</p>
        </div>
      </div>
      <div className="row main-program-details mt-5">
        <div className="col-md-6 text-of-program-details ">
       <h2 className="head-tag-of-program-detals" >| PROGRAM DETAILS</h2>
       <p>MBA in Entrepreneurship is a 2-years full-time post graduation course that is spread across four semesters. The degree includes an MBA curriculum with a strong emphasis on entrepreneurial subjects including venture capital and asset management. This MBA specialisation is designed for students aspiring to be entrepreneurs. The curriculum is designed so that students have a thorough grasp of how to generate business ideas, develop these ideas into service and product offerings, and then plan a commercial project to bring business ideas to market. <br /><br />
The Required skill set in order to take up this course MBA Entrepreneurship demands its aspirants to have the best knowledge of management such as Understanding Strategy and embracing opportunities, ability to take risks, Proactiveness, Innovation, Self-discipline and Integrity as well as Decisive and action-oriented mindset. <br/><br/>
This course teaches students all the skills they need to launch a startup such as teamwork, networking, creativity, leadership skills and flexibility in decision making</p>
        </div>
        <div className="col-md-5 image-of-program-details">
        <img src={require("../../Assets/program_details_image.png")} width={600}  alt="" />

        </div>
      </div>
      <div className="row main-skills-taught mt-5 pt-5 ">
        <div className="col-md-5 image-of-skills-taught">
          <img src={require("../../Assets/skills_taught_image.png")}  alt="skills" />
        </div>
        <div className="col-md-6 all-text-of-skills">
          <h2>| SKILLS TAUGHT</h2>
          <p>An MBA in Entrepreneurship will ensure that you have all the well rounded skills sets you require to be an inspiring leader and lead your business and team to success. You will receive assistance in some of the distinct challenges as an entrepreneur Managing growth, securing finances of a company, monetizing innovation, market research and as well as creating impact are also some of the avenues students are encouraged to learn about.</p>
          <h3 style={{fontWeight:"700", color:"black" }} >Top Skilled Taught are</h3>
          <ul style={{listStyle:"none"}} >
            <li> <img src={require("../../Assets/arrow.png")} width={15} alt="" />  Resilience</li>
            <li><img src={require("../../Assets/arrow.png")} width={15} alt="" /> Networking</li>
            <li><img src={require("../../Assets/arrow.png")} width={15} alt="" /> Calculated Risk-Taking</li>
            <li><img src={require("../../Assets/arrow.png")} width={15} alt="" /> Creative Thinking</li>
            <li><img src={require("../../Assets/arrow.png")} width={15} alt="" /> Complex Problem Solving</li>
            <li><img src={require("../../Assets/arrow.png")} width={15} alt="" /> Vision Casting</li>
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
      <SyllabusTable/>
      </div>
      </div>
      <div className="row main-eligibility">
        <div className="col-md-12 eligibility-content  ">
        <h3>Eligibility</h3>
        <hr />
        <ul style={{listStyle:"none"}} >
          <li>The eligibility criteria for MBA Entrepreneurship of some the best colleges for MBA in entrepreneurship 2021 is</li>
          <li>1. The candidate must have graduated with a minimum of 45% aggregate in a bachelor’s degree. Although this percentage differs from college to college.</li>
          <li>2. Must pass and have a good score in the relevant entrance exam followed by a group discussion and PI round</li>
        </ul>

        </div>
      </div>
      <div className="row main-carrer-scope">
        <div className="col-md-12 mb-5 carrer-scope-head">
          <h1>|CAREER SCOPE</h1>
        </div>
        <div className="col-md-10 para-in-carrer-scope">
          <p>MBA Entrepreneurship graduates are hired in various sectors like Automobile, Advertising, Agriculture, Banking, Small and medium enterprise management, Information technology, Hospitality, Fashion management, etc. Major job profiles available to such graduates are Assistant Manager, Business Consultants, Finance Controller, Human Resource Manager, accountant, etc.</p>
        </div>
        <div className="row image-of-carrer-scope">
          <div className="col-md-5  text-of-carrer-scope">
            <h3 style={{color:"black", fontWeight:"700"}} >Top Job Profile</h3>
            <ul style={{listStyle:"none"}} className="carrer-list" >
              <li><MdPlayArrow size={30}/><span>Small Business Owners</span></li><hr />
              <li><MdPlayArrow size={30}/><span>Business Reporters</span></li><hr />
              <li><MdPlayArrow size={30}/><span>Business Consultants</span></li><hr />
              <li><MdPlayArrow size={30}/><span>Sales Managers</span></li><hr />
              <li><MdPlayArrow size={30}/><span>Fundraisers and Development Officers</span></li><hr />
              <li><MdPlayArrow size={30}/><span>New Venture Developers</span></li><hr />
            </ul>
          </div>
          <div className="col-md-5 image-of-carrer-scope">
            <img src={require("../../Assets/course-triple-img.png")} width={600} alt="" />
          </div>
        </div>
      </div>
      <div className="row main-top-recruiters">
        <div className="col-md-12 head-of-top-recrute">
          <h1>|TOP RECRUITERS</h1>
        </div>
        <div className="row main-all-images-in-recrute mb-5">
          <div className="col-md-12 all-images-in-recrute mb-5">
          <img src={require("../../Assets/sliding-images/hindustanUniliver.png")} alt="hindu" width={200}/>
            <img src={require("../../Assets/sliding-images/sliding (10).png")} alt="hindu" width={200}/>
            <img src={require("../../Assets/sliding-images/sliding (11).png")} alt="hindu" width={200}/>
            <img src={require("../../Assets/sliding-images/sliding (12).png")} alt="hindu" width={200}/>
            <img src={require("../../Assets/sliding-images/sliding (13).png")} alt="hindu" width={200}/>
            <img src={require("../../Assets/sliding-images/sliding (14).png")} alt="hindu" width={200}/>
            <img src={require("../../Assets/sliding-images/sliding (15).png")} alt="hindu" width={200}/>
            <img src={require("../../Assets/sliding-images/sliding (16).png")} alt="hindu" width={200}/>
            <img src={require("../../Assets/sliding-images/sliding (8).png")} alt="hindu" width={200}/>
            <img src={require("../../Assets/sliding-images/sliding (9).png")} alt="hindu" width={200}/>
            
          </div>
        </div>
      </div>
      <div className="row main-most-populer-college">
      <div className="col-md-12 head-of-populer-college">
      <h1>|10 MOST POPULAR COLLEGES FOR ENTREPRENEURSHIP COURSE</h1>
      </div>
      <div className="col-md-12 para-of-populer-college">
        <p>MBA Entrepreneurship is a new emerging specialization that many students are opting for in order to be independent entrepreneurs. Here is a list of the 10 most popular colleges for MBA Entrepreneurs in India</p>
      </div>
      <div className="col-md-12 all-college-content">
      <PopulerCollge/>
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
            <button  ><FcSearch /></button>
          </div>
        </div>
      </div>
      <div className="row main-accrodin-of-courses">
      <div className="col-md-8 accrodin-of-courses ">
      
      <Collapse items={items} defaultActiveKey={['1']}  /></div>
      </div>
      </div>
    
      <Footer/>
    </>
  );
};

export default Courses;
