import React from "react";
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

const Home = () => {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ullam,
          delectus aliquid nemo quas veritatis harum quaerat omnis, perferendis,
          sunt incidunt in assumenda laudantium eius non corporis aliquam
          possimus placeat dolorem! Ratione officia ea magni unde iure, fugiat
          quam deleniti ipsa praesentium quo illo architecto totam cupiditate
          dignissimos nihil quia accusantium magnam, suscipit corporis
          voluptates, quaerat facilis quibusdam cum! Vel nam molestias cumque
          hic quasi accusantium tempora porro! Laudantium ea quod porro
          cupiditate sequi repudiandae quisquam, cum maxime minus ipsam fuga
          omnis doloribus odit nostrum iste dolorem dolor ratione nemo corrupti
          amet a voluptatum animi vitae! Ab dolorem consequatur rem!
        </p>
      </div>

      {/* display part start from here */}

      <div className="overview-left">
        <div>
          <h2 style={{ color: "#BA274A", fontWeight: "bolder" }}>
            {" "}
            Ready to Elevate your MBA Journery
          </h2>
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

      <div className="Top-Specializations">
        <h1 className="all-new-h1">Top Specializations</h1>
        <table border="1">
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
          </tr>
          <tr>
            <td>Row 3, Cell 1</td>
            <td>Row 3, Cell 2</td>
            <td>Row 3, Cell 3</td>
          </tr>
          <tr>
            <td>Row 4, Cell 1</td>
            <td>Row 4, Cell 2</td>
            <td>Row 4, Cell 3</td>
          </tr>
          <tr>
            <td>Row 5, Cell 1</td>
            <td>Row 5, Cell 2</td>
            <td>Row 5, Cell 3</td>
          </tr>
          <tr>
            <td>Row 6, Cell 1</td>
            <td>Row 6, Cell 2</td>
            <td>Row 6, Cell 3</td>
          </tr>
        </table>
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
      <div className="Top-B-Schools-in-India">
        <h1 className="all-new-h1">Top B-Schools in India</h1>
        <div className="Top-B-Schools-in-India-crousel-div">
          {arr.map((ele) => (
            <div className="single-product-div-top-B-school">
              <img
                src={require("../../Assets/Mask-Group.png")}
                alt="mask-group"
              />
              <h3>IIM Bangelore</h3>
              <div className="main-centeral-div">
                <div className="top-left-side-div">
                  <div>
                    <p>Duration</p>
                    <p>2 Years</p>
                  </div>
                  <div>
                    <p>Course</p>
                    <p>MBBS, B.ED</p>
                  </div>
                </div>
                <div className="top-right-side-div">
                  <div>
                    <p>Exam Accepted</p>
                    <p>CAT, CUET</p>
                  </div>
                  <div>
                    <p>Average Package</p>
                    <p>60 LPA</p>
                  </div>
                </div>
              </div>
              <div className="apply-button-div">
                <button>Apply Now</button>
                <button>Compare +</button>
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
