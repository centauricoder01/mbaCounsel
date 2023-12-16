import React from "react";
import "./SingleCampus.css";

const SingelCampus = ({ img, short, longpara }) => {
  return (
    <div>
      <div className="main-image-para-div-campus">
        <img src={img} width={40} alt="img" />
        <p>{short}</p>
      </div>
      <p>{longpara}</p>
    </div>
  );
};

export default SingelCampus;
