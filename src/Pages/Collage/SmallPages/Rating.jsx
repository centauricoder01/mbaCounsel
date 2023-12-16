import React from "react";
import { Rate, Progress } from "antd";

const Rating = () => {
  return (
    <div className="main-rating-div">
      <h2>Student Reviews for BMSCE Bangalore</h2>
      <div className="rating-star-div">
        <Rate allowHalf defaultValue={2.5} />
        <h4>2.5 out of 5</h4>
      </div>
      <div className="actual-progress-div">
        <div className="child-progress-div">
          <h4>College Infrastructure: 4.1/5</h4>
          <Progress percent={30} showInfo={false} />
        </div>
        <div className="child-progress-div">
          <h4>Academics: 4.1/5</h4>
          <Progress percent={50} showInfo={false} />
        </div>
        <div className="child-progress-div">
          <h4>Placements: 4.1/5</h4>
          <Progress percent={60} showInfo={false} />
        </div>
        <div className="child-progress-div">
          <h4>Value for Money: 4.1/5</h4>
          <Progress percent={90} showInfo={false} />
        </div>
        <div className="child-progress-div">
          <h4>Value for Money: 4.1/5</h4>
          <Progress percent={20} showInfo={false} />
        </div>
      </div>
    </div>
  );
};

export default Rating;
