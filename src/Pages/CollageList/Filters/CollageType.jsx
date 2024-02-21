import React from "react";
import { Checkbox } from "antd";
import "./AllFiltercss.css";

const CollageType = ({ filterValue, onvaluechange }) => {
  const onChange = (e) => {
    if (e.target.checked) {
      onvaluechange([...filterValue, e.target.value]);
    } else {
      onvaluechange(filterValue.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div className="allFiltercss">
      <Checkbox onChange={onChange} value={"government"}>
        Government
      </Checkbox>
      <Checkbox onChange={onChange} value={"private"}>
        Private
      </Checkbox>
    </div>
  );
};

export default CollageType;
