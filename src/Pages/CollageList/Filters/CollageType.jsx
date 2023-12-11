import React from "react";
import { Checkbox } from "antd";
import "./AllFiltercss.css";


const CollageType = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="allFiltercss">
      <Checkbox onChange={onChange}>Government</Checkbox>
      <Checkbox onChange={onChange}>Private</Checkbox>
    </div>
  );
};

export default CollageType;
