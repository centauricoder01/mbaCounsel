import React from "react";
import { ImLocation } from "react-icons/im";
import { AiFillCalendar } from "react-icons/ai";
import "../SmallPagesCSS/CommonCSS.css";
import { GiAchievement } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaRupeeSign } from "react-icons/fa";
import Article from "../../../Components/Article/Article";

const Overview = () => {
  let arr = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="main-collage-overview-div">
        <div className="main-collage-left-side-div">
          <div className="collage-details-div">
            <p>
              Indian Institute of Management, Bangalore or IIM-B, is a top
              leading Graduate school of Management in Asia. Under the IIM Act
              of 2017, IIMB is considered to be the Institute of National
              Importance. With 107 full time faculties, there are around 1,200
              students enrolled in the institute. Located in the High Tech
              Capital of India and surrounded by big corporate names, the
              Institute is situated in the hub of education, technology and
              global level resources.The college's main goal is to provide
              holistic and innovative education.Doctor of Philosophy (Ph.D.),
              Master of Management Studies (Public Policy), Master of Business
              Administration – one year full time, Master of Business
              Administration – two years (weekend), Master of Business
              Administration – two years full time, and Master of Business
              Administration (Business Analytics) – two years full time are the
              degree programmes available.
            </p>
          </div>

          <div className="collage-number-data">
            <div className="single-collage-number-data-div">
              <AiFillCalendar color="green" size={50} />
              <p>
                <span style={{ color: "#bb9b61" }}>Collage Type</span> <br />
                Public
              </p>
            </div>
            <hr />
            <div className="single-collage-number-data-div">
              <GiAchievement color="green" size={50} />{" "}
              <p>
                <span style={{ color: "#bb9b61" }}> Establish in</span> <br />
                1978
              </p>
            </div>
            <hr />
            <div className="single-collage-number-data-div">
              <FcMoneyTransfer color="green" size={50} />
              <p>
                <span style={{ color: "#bb9b61" }}> Max. Package </span>
                <br /> ₹ 52.1 LPA
              </p>
            </div>
            <hr />
            <div className="single-collage-number-data-div">
              <FaRupeeSign
                color="green
              "
                size={50}
              />{" "}
              <p>
                <span style={{ color: "#bb9b61" }}>Fees (Approx) </span>
                <br />₹ 9.45 - 12.64 Lakhs
              </p>
            </div>
          </div>

          <div
            className="collage-education-at-xiam"
            style={{
              border: "1px solid #dbdbdb",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "16px",
              borderRadius: "10px",
            }}
          >
            <h2>Education at XIME, Bangalore</h2>
            <p>
              Students at IIM Bangalore are assured to embark on a journey that
              broadens their horizons and provides them with a rational and
              comprehensive approach to their subject matter, among other
              benefits. Integrating logic and a holistic approach. This
              institute provides students with a transformational experience,
              and each individual may absorb the curriculum with confidence and
              humility. In this institution, students can have a rewarding
              academic career.
            </p>
          </div>
          <div
            className="collage-Accreditations-Rankings"
            style={{
              border: "1px solid #dbdbdb",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "16px",
              borderRadius: "10px",
            }}
          >
            <h2>Accreditations & Rankings</h2>
            <p>
              The European Foundation for Management Education (EFMD) has
              granted the Indian Institute of Management Bangalore (IIMB) the
              European Quality Improvement System (EQUIS) accreditation . IIM
              Bangalore was re-accredited by EQUIS for another five years in
              December 2016.
            </p>
          </div>
          <div
            className="Vision-Mission"
            style={{
              border: "1px solid #dbdbdb",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "16px",
              borderRadius: "10px",
            }}
          >
            <h2>Vision & Mission</h2>
            <p>
              <b>Vision :</b>
              To be a global, renowned academic institution fostering excellence
              in management, innovation and entrepreneurship for business,
              government and society.
            </p>
            <p>
              <b>Mission :</b>
              To be committed in making a deep social impact using
              technology-enabled education. To Nurture innovative global
              business leaders, entrepreneurs, policy-makers and social change
              agents through holistic and transformative education. Provide
              thought leadership that is contextually embedded and socially
              relevant and makes a positive impact. Also, pursue excellence in
              education and thought leadership simultaneously without making any
              tradeoffs
            </p>
          </div>
          <div
            className="collage-faculty"
            style={{
              border: "1px solid #dbdbdb",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "16px",
              borderRadius: "10px",
              width: "100%",
              margin: "auto",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h3 style={{ color: "blue" }}>
              {" "}
              <i>Faculty</i>{" "}
            </h3>
            <p>
              The structure and Rigor that the faculty pushes breaks all
              barriers. The faculties bring the best out of every single student
              and provide the environment for students to shine in their
              brightest light. The Approach of research with the right mindset
              with rigor and address research questions.
            </p>
          </div>
          <Article />
        </div>
        <div className="main-collage-right-side-div">
          <div
            className="collage-new-update"
            style={{
              border: "1px solid #dbdbdb",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "16px",
              borderRadius: "10px",
            }}
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
              recusandae eligendi repudiandae quod? Aspernatur minus, unde,
              nesciunt beatae facere hic quae assumenda excepturi quas
              perferendis ipsam ipsum ipsa. Voluptate, voluptatibus! Dolor at
              nostrum culpa deleniti vel laboriosam itaque perspiciatis quae,
              doloribus iste iure facere dolorum voluptate et modi,
              exercitationem commodi.
            </p>
          </div>

          <div
            className="collage-similar-collge-div"
            style={{
              border: "1px solid #dbdbdb",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "16px",
              borderRadius: "10px",
            }}
          >
            <h2>Similar Colleges</h2>
            <hr />
            {arr.map((ele) => (
              <div key={ele}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  <img
                    src={require("../../../Assets/similar.png")}
                    alt="siliar"
                    style={{ width: "3rem" }}
                  />
                  <p style={{ marginTop: "0rem", marginBottom: "0rem" }}>
                    SIBM School of Business Management Lorem ipsum dolor sit
                    amet.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    gap: "7px",
                    marginTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <ImLocation size={20} />
                    <p style={{ marginTop: "0rem", marginBottom: "0rem" }}>
                      Bangelore
                    </p>
                  </div>
                  <button
                    className="similar-collage-button-div"
                    style={{ backgroundColor: "#2ea44f" }}
                  >
                    Compare
                  </button>
                  <button className="similar-collage-button-div">Apply</button>
                </div>
                <hr />
              </div>
            ))}
          </div>

          <div
            className="collage-advertiment"
            style={{
              border: "1px solid #dbdbdb",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "16px",
              borderRadius: "10px",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              numquam enim eos ut dicta qui quod temporibus nobis sint tempora.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
