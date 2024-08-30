import React from "react";
import "./Date.css";
import { DatePicker, Space } from "antd";

const Date = ({ labeltext, onchange, height }) => {
  return (
    <div className="main-date-div">
      <label>{labeltext}</label>
      <Space direction="vertical">
        <DatePicker
          onChange={onchange}
          className="datepicker-class"
          style={{ width: `${height}` }}
        />
      </Space>
    </div>
  );
};

export default Date;
