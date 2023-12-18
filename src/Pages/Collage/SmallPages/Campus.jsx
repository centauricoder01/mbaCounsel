import React from "react";
import { ImLocation } from "react-icons/im";
import SingelCampus from "../../../Components/Campus/SingelCampus";
import { campusdata } from "../SmallPagesCSS/Campusdata";

const Campus = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="main-collage-overview-div">
        <div className="main-collage-left-side-div">
          <div className="main-degree-granting-programme">
            <strong className="main-collage-admission-in-blue">
              <i>Campus Life</i>
            </strong>
            <p>
              IIM Bangalore is one of the most mesmerising campuses in India,
              located in a serene place, away from the hustle and bustle of the
              city, and it provides a positive learning environment. Without a
              doubt, the infrastructure is superb and of the highest quality.
              Around campus, there are several places to eat as well as 23
              clubs. On campus, there are tennis courts, badminton courts,
              hockey grounds, and other sports facilities.
            </p>

            <hr />
            {campusdata.map((ele) => (
              <>
                <SingelCampus
                  key={ele.id}
                  img={ele.img}
                  short={ele.short}
                  longpara={ele.longpara}
                />
                <hr />
              </>
            ))}
          </div>
        </div>
        <div className="main-collage-right-side-div">
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
            <h2>Advertisment</h2>
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

export default Campus;
