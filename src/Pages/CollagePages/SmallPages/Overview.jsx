import React from "react";
import { ImLocation } from "react-icons/im";
import { AiFillCalendar } from "react-icons/ai";
import "../SmallPagesCSS/CommonCSS.css";

const Overview = () => {
  let arr = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="main-collage-overview-div">
        <div className="main-collage-left-side-div">
          <div
            className="collage-details-div"
            style={{ border: "1px solid black", padding: "5px" }}
          >
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
              <AiFillCalendar color="green" size={35} />
              <p>
                Establish in <br />
                1978
              </p>
            </div>
            <hr />
            <div className="single-collage-number-data-div">
              <AiFillCalendar color="green" size={35} />
              <p>
                Establish in <br />
                1978
              </p>
            </div>
            <hr />
            <div className="single-collage-number-data-div">
              <AiFillCalendar color="green" size={35} />
              <p>
                Establish in <br />
                1978
              </p>
            </div>
            <hr />
            <div className="single-collage-number-data-div">
              <AiFillCalendar color="green" size={35} />
              <p>
                Establish in <br />
                1978
              </p>
            </div>
          </div>

          <div
            className="collage-education-at-xiam"
            style={{ border: "1px solid black", padding: "5px" }}
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
            style={{ border: "1px solid black", padding: "5px" }}
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
            style={{ border: "1px solid black", padding: "5px" }}
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
        </div>
        <div className="main-collage-right-side-div">
          <div
            className="collage-new-update"
            style={{ border: "1px solid black", padding: "5px" }}
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
            style={{ border: "1px solid black", padding: "5px" }}
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
                  />
                  <p>SIBM School of Business Management</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "7px",
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
                    <ImLocation />
                    <p>Bangelore</p>
                  </div>
                  <button className="similar-collage-button-div">Apply</button>
                </div>
                <hr />
              </div>
            ))}
          </div>

          <div
            className="collage-advertiment"
            style={{ border: "1px solid black", padding: "5px" }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              numquam enim eos ut dicta qui quod temporibus nobis sint tempora.
            </p>
          </div>
        </div>
      </div>

      {/* FOUNDER PART START FROM HERE  */}
      <div
        className="collage-founder"
        style={{
          border: "1px solid black",
          padding: "5px",
          width: "90%",
          margin: "auto",
        }}
      >
        <div
          className="collage-founder-heading"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            margin: "auto",
            gap: "3rem",
            marginTop: "3rem",
          }}
        >
          <hr
            style={{ width: "70%", backgroundColor: "blue", height: "1px" }}
          />
          <i style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>Foundation</i>
          <hr
            style={{ width: "70%", backgroundColor: "blue", height: "1px" }}
          />
        </div>
        <div
          className="collage-founder-member"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "3rem",
            marginTop: "2rem",
          }}
        >
          <div
            className="collage-founder-first-member"
            style={{ textAlign: "center" }}
          >
            <img src={require("../../../Assets/f1.png")} alt="first-founder" />
            <h3>Dr something prasath shetty</h3>
            <p>something is happing</p>
            <p>again something is happing</p>
          </div>
          <div
            className="collage-founder-second-member"
            style={{ textAlign: "center" }}
          >
            <img src={require("../../../Assets/f2.png")} alt="first-founder" />
            <h3>Dr something prasath shetty</h3>
            <p>something is happing</p>
            <p>again something is happing</p>
          </div>
        </div>
      </div>
      <div
        className="collage-faculty"
        style={{
          border: "1px solid black",
          padding: "5px",
          width: "90%",
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
          The structure and Rigor that the faculty pushes breaks all barriers.
          The faculties bring the best out of every single student and provide
          the environment for students to shine in their brightest light. The
          Approach of research with the right mindset with rigor and address
          research questions.
        </p>
      </div>
    </>
  );
};

export default Overview;
