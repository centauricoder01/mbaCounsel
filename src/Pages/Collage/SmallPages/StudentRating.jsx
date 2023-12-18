import React from "react";
import { Rate, Avatar, Space } from "antd";
import { MdOutlineVerified } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";

const StudentRating = () => {
  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        border: "1px solid #dbdbdb",
      }}
    >
      <p>
        <b>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</b>
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <Rate disabled defaultValue={2} />
        <div style={{ display: "flex" }}>
          <MdOutlineVerified style={{ marginTop: "5px" }} />
          <p>Verified User</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <FaRegCircleUser size={50} />
        <div>
          <p style={{ marginBottom: "-2px" }}>
            Posted on 12 Aug'23 by Anonymous
          </p>
          <p style={{ marginBottom: "-2px" }}>Batch of 2021-01-01 | MBA</p>
        </div>
      </div>
      <p style={{ marginBottom: "-2px", marginTop: "1rem" }}>
        <b>Lorem ipsum dolor sit</b>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        recusandae dolor est dolore error, tempora repellendus molestiae cumque
        neque veniam.
      </p>
      <p style={{ marginBottom: "-2px", marginTop: "1rem" }}>
        <b>Lorem ipsum dolor sit</b>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        recusandae dolor est dolore error, tempora repellendus molestiae cumque
        neque veniam.
      </p>
      <p style={{ marginBottom: "-2px", marginTop: "1rem" }}>
        <b>Lorem ipsum dolor sit</b>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        recusandae dolor est dolore error, tempora repellendus molestiae cumque
        neque veniam.
      </p>
    </div>
  );
};

export default StudentRating;
