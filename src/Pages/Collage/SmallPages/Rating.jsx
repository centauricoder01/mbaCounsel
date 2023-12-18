import React from "react";
import { Rate, Progress } from "antd";
import { ImLocation } from "react-icons/im";
import StudentRating from "./StudentRating";

const Rating = () => {
  let arr = [1, 2, 3, 4, 5, 6];

  return (
    <div className="main-collage-overview-div">
      <div className="main-collage-left-side-div">
        <p className="student-review">Student Reviews</p>
        <div className="main-review-div">
          <div className="review-left-side-div">
            <h1>
              <b>4.5/ 5</b>
            </h1>
            <Rate allowHalf disabled defaultValue={4.5} />
            <h5>57 Reviews </h5>
          </div>
          <div className="review-right-side-div">
            <div className="child-progress-div">
              <p style={{ marginBottom: "-1px" }}>
                College Infrastructure: 4.1/5
              </p>
              <Progress percent={90} showInfo={false} />
            </div>
            <div className="child-progress-div">
              <p style={{ marginBottom: "-1px" }}>Academics: 4.1/5</p>
              <Progress percent={70} showInfo={false} />
            </div>
            <div className="child-progress-div">
              <p style={{ marginBottom: "-1px" }}>Placements : 4.1/5</p>
              <Progress percent={50} showInfo={false} />
            </div>
            <div className="child-progress-div">
              <p style={{ marginBottom: "-1px" }}>Campus Life : 4.1/5</p>
              <Progress percent={100} showInfo={false} />
            </div>
            <div className="child-progress-div">
              <p style={{ marginBottom: "-1px" }}>Value for Money : 4.1/5</p>
              <Progress percent={30} showInfo={false} />
            </div>
          </div>
        </div>
        <StudentRating />
        <StudentRating />
        <StudentRating />
      </div>
      <div className="main-collage-right-side-div">
        <div className="collage-similar-collge-div">
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
                  SIBM School of Business Management Lorem ipsum dolor sit amet.
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
  );
};

export default Rating;
