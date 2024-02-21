import React from "react";
import { Checkbox } from "antd";
import "./AllFiltercss.css";

const CollageType = ({ filterValue, onvaluechange, showingValue }) => {
  const onChange = (e) => {
    if (e.target.checked) {
      onvaluechange([...filterValue, e.target.value]);
    } else {
      onvaluechange(filterValue.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div className="allFiltercss">
      {showingValue.map((ele) => (
        <Checkbox onChange={onChange} value={ele.collegeTypeValue}>
          {ele.collegeTypeValue}
        </Checkbox>
      ))}
    </div>
  );
};

export default CollageType;
