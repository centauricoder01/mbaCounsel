import React from "react";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#fdfef6",
        height: "100vh",
        border: "1px solid red",
      }}
    >
      <img
        src={require("../../Assets/pnf.jpeg")}
        alt="pnf"
        style={{ height: "80%" }}
      />
      <h1 style={{ fontWeight: "bolder", color: "red" }}>PAGE NOT FOUND</h1>
      <Link to={"/"}>
        <button className="button-86">Return to HOME</button>
      </Link>
    </div>
  );
};

export default Pagenotfound;
