import React from "react";
import "./AllCollegeInExam.css";


const AllCollegeInExam = () => {
  return (
    <>
     <div className="main-all-listed-college-in-exam-page">
              <img
                src={require("../../Assets/Mask-Group.png")}
                alt="mask-group"
              />
              <h4 >IIM Bangelore Lorem ipsum dolor, sit amet consectetur adipisic</h4>
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
              <div className="main-apply-button-div">
                <button className="main-apply-button">Apply Now</button>
                <button className="main-compare-button">Compare +</button>
              </div>
            </div>
    </>
  );
};

export default AllCollegeInExam;
