import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Testimonials from "../../Components/Testimonials/Testimonials";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Home.css";
import { AiFillDollarCircle } from "react-icons/ai";
import { LuFiles } from "react-icons/lu";
import { PiUserFocus } from "react-icons/pi";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settingsLaptop = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const settingsTablet = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const [settingVal, setSettingVal] = useState(settingsLaptop);

  const isSmallScreen = window.innerWidth;

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <Navbar />
      <Header />
      <div className="carrier-with-mba">
        <img
          src={require("../../Assets/carrier-in-mba.png")}
          alt="carrirbymba"
        />
        <p>
          Embark on a transformativе journеy with an MBA, whеrе businеss acumеn
          mееts visionary lеadеrship. This program is your passport to thе
          C-suitе, offеring global opportunitiеs and еntrеprеnеurial vеnturеs.
          With a curriculum finеly tunеd to rеal-world challеngеs, MBA graduatеs
          еmеrgе as stratеgists, dеcision-makеrs, and innovators. Practical
          casеs, intеrnships, and projеcts еnsurе you'rе industry-rеady. An MBA
          is morе than a dеgrее; it's a mindsеt, a plеdgе to еxcеl. Envision thе
          futurе and craft your own succеss story in thе dynamic rеalm of
          businеss
        </p>
      </div>

      {/* display part start from here */}

      <div className="overview-left">
        <div>
          <h2>Ready to Elevate your MBA Journery</h2>
          <p>Book Your Free Counselling Now!</p>
          <p>
            Embark on a transformative MBA adventure with personalized guidance
            and industry expertise. Our seasoned mentors are here to shape your
            success story.
          </p>
        </div>
        <div>
          <button>Book Now </button>
        </div>
        <img src={require("../../Assets/find-arrow.png")} alt="find-arrow" />
      </div>

      <div className="Top-Specializations">
        <h1 className="all-new-h1">Top Specializations</h1>
        <table border="1">
          <tr>
            <td> Marketing Management </td>
            <td>International Business</td>
            <td>Rural & Agri-Business</td>
          </tr>
          <tr>
            <td>Financial Management</td>
            <td>Logistics Management</td>
            <td>Pharma & Health Care Management</td>
          </tr>
          <tr>
            <td>Artificial Intelligence</td>
            <td>E-Commerce </td>
            <td>Entrepreneurship</td>
          </tr>
          <tr>
            <td>Business Analytics & Big Data</td>
            <td>Supply Chain Management</td>
            <td>Tourism & Hospitality Management</td>
          </tr>
          <tr>
            <td>Human Resource Management</td>
            <td>Enterprise Management</td>
            <td>Communications Management</td>
          </tr>
        </table>
      </div>

      <div className="our-services top-feature-collage">
        <h1 className="all-new-h1">Top Features Collages</h1>
        <Slider {...settingVal}>
          {arr.map((ele) => (
            <div className="single-product-div-top-B-school">
              <img
                src={require("../../Assets/Mask-Group.png")}
                alt="mask-group"
              />
              <h1 style={{ color: "black" }}>IIM Bangelore</h1>
              <div className="main-centeral-div">
                <div className="top-left-side-div">
                  <div>
                    <p>Duration</p>
                    <p style={{ fontWeight: "bolder" }}>2 Years</p>
                  </div>
                  <div>
                    <p>Course</p>
                    <p style={{ fontWeight: "bolder" }}>MBBS, B.ED</p>
                  </div>
                </div>
                <div className="top-right-side-div">
                  <div>
                    <p>Exam Accepted</p>
                    <p style={{ fontWeight: "bolder" }}>CAT, CUET</p>
                  </div>
                  <div>
                    <p>Average Package</p>
                    <p style={{ fontWeight: "bolder" }}>60 LPA</p>
                  </div>
                </div>
              </div>
              <div className="apply-button-div">
                <button className="apply-button">Apply Now</button>
                <button className="compare-button">Compare +</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="our-services">
        <h1 className="all-new-h1">Our Services</h1>
        <div className="our-services-crousal">
          <div className="single-product-div">
            <img
              src={require("../../Assets/Mask-Group.png")}
              alt="mask-group"
            />
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="single-product-div">
            <img
              src={require("../../Assets/Mask-Group.png")}
              alt="mask-group"
            />
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="single-product-div">
            <img
              src={require("../../Assets/Mask-Group.png")}
              alt="mask-group"
            />
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>
        </div>
      </div>
      <div className="Explore-our-in-Demand-Features">
        <h1 className="all-new-h1" style={{ textAlign: "center" }}>
          Explore our in Demand Features
        </h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            iconStyle={{ background: "#E6DEDD" }}
            icon={<AiFillDollarCircle />}
          >
            <h3 className="vertical-timeline-element-title">ROI Calculator</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sequi excepturi perferendis, deserunt ab tempore. Necessitatibus
              ab tenetur aliquid dolorum!
            </p>
            <button
              style={{
                padding: "12px",
                width: "25%",
                fontSize: "1rem",
                borderRadius: "3px",
                border: "none",
                marginTop: "1rem",
                boxShadow: "6px 5px 0px 0px white",
                cursor: "pointer",
              }}
            >
              Explore
            </button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#E6DEDD" }}
            icon={<LuFiles />}
          >
            <h3 className="vertical-timeline-element-title">
              College/Course Comparision
            </h3>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              eaque impedit cumque corporis voluptas atque quo praesentium quod
              dicta est.
            </p>
            <button
              style={{
                padding: "12px",
                width: "25%",
                fontSize: "1rem",
                borderRadius: "3px",
                border: "none",
                marginTop: "1rem",
                boxShadow: "6px 5px 0px 0px white",
                cursor: "pointer",
              }}
            >
              Explore
            </button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#E6DEDD" }}
            icon={<PiUserFocus />}
          >
            <h3 className="vertical-timeline-element-title">
              Internship Finder
            </h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              illo ipsa dolores quisquam dolorum nesciunt eum hic incidunt esse
              autem.
            </p>
            <button
              style={{
                padding: "12px",
                width: "25%",
                fontSize: "1rem",
                borderRadius: "3px",
                border: "none",
                marginTop: "1rem",
                boxShadow: "6px 5px 0px 0px white",
                cursor: "pointer",
              }}
            >
              Explore
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      <div className="why-choose-us">
        <img
          src={require("../../Assets/why-choose-us.png")}
          alt="why-choose-us"
        />
        <ul>
          <li>
            Unleash MBA Excellence with Technology Powered Process along with
            our experts
          </li>
          <li>Customized Strategies for Efficiency</li>
          <li>Guidance from Industry Veterans and Expert Mentors</li>
          <li>Our Journey Extends Beyond Admissions</li>
          <li>Strategic Financial Guidance for You</li>
          <li>Streamlined, Hassle-Free Process</li>
          <li>Access Exclusive Features</li>
          <li>Rooted in Honesty, Built on Transparency, Earned Trust</li>
          <li>Together, We Sculpt Your Path to Success</li>
          <li>Education without Boundaries, Knowledge without Borders</li>
          <li>Join a Vibrant Network of Thriving Students</li>
          <li>Empower Your Legacy in the World of Business</li>
        </ul>
      </div>

      <div className="Top-B-Schools-in-India">
        <h1 className="all-new-h1">Top B-Schools in India</h1>
        <div className="Top-B-Schools-in-India-crousel-div">
          {arr.map((ele) => (
            <div className="single-product-div-top-B-school">
              <img
                src={require("../../Assets/Mask-Group.png")}
                alt="mask-group"
              />
              <h1 style={{ color: "black" }}>IIM Bangelore</h1>
              <div className="main-centeral-div">
                <div className="top-left-side-div">
                  <div>
                    <p>Duration</p>
                    <p style={{ fontWeight: "bolder" }}>2 Years</p>
                  </div>
                  <div>
                    <p>Course</p>
                    <p style={{ fontWeight: "bolder" }}>MBBS, B.ED</p>
                  </div>
                </div>
                <div className="top-right-side-div">
                  <div>
                    <p>Exam Accepted</p>
                    <p style={{ fontWeight: "bolder" }}>CAT, CUET</p>
                  </div>
                  <div>
                    <p>Average Package</p>
                    <p style={{ fontWeight: "bolder" }}>60 LPA</p>
                  </div>
                </div>
              </div>
              <div className="apply-button-div">
                <button className="apply-button">Apply Now</button>
                <button className="compare-button">Compare +</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Testimonials />
      <div className="news-letter">
        <h1>Subscribe to News Letter</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, a.
        </p>

        <input
          type="text"
          placeholder="Enter your text"
          className="input-field"
        />
        <button className="submit-button">Submit</button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
