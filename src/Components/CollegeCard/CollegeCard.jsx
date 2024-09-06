import React from "react";
import "./CollegeCard.css";

export const CollegeCard = ({
  collegeImg,
  rating,
  collegename,
  duration,
  examaccept,
  course,
  averagepackage,
  detaillink,
}) => {
  return (
    <div className="main-collegecard-container">
      <div className="collegecard-image-container">
        <img
          src={
            "https://poetsandquants.com/wp-content/uploads/sites/5/2016/06/Evgenia-Eliseeva-for-Harvard-Business-School-110113-786.jpg"
          }
          alt="College"
          className="collegecard-image"
        />
        <div className="collegecard-rating-tag">{rating} ⭐⭐⭐⭐⭐</div>
        <div className="collegecard-college-name-container">
          <h4 className="collegecard-college-name-para">
            Harvard school of business
          </h4>
        </div>
      </div>
      <div className="collegecard-two-inner-info-div">
        <div className="collegecard-child-divs">
          <p className="collegecard-child-heading-tag">Duration</p>
          <p>3 Years</p>
        </div>
        <div className="collegecard-child-divs">
          <p className="collegecard-child-heading-tag">Exam Accepted</p>
          <p>CAT, MAT, JAT</p>
        </div>
        <div className="collegecard-child-divs">
          <p className="collegecard-child-heading-tag">Courses</p>
          <p>All courses are available</p>
        </div>
        <div className="collegecard-child-divs">
          <p className="collegecard-child-heading-tag">Average Package</p>
          <p>100 Cr</p>
        </div>
      </div>
      <div className="collegecard-bottom-buttons">
        <button className="collegecard-bottom-button-first">Apply</button>
        <button className="collegecard-bottom-button-second">
          View Details
        </button>
      </div>
    </div>
  );
};
