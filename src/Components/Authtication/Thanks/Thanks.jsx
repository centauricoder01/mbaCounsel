import React from "react";
import "./thanks.css";


const Thanks= () => {
  return (
    <div className="main-thanks-page">
        <div className="thanks-image-contain-div">
          <img src={require("../../../Assets/thanks-image.png")} alt="some" />
        </div>
    </div>
  );
};

export default Thanks;
