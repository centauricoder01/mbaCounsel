import React from "react";
import { Checkbox } from "antd";
import "./AllFiltercss.css";


const Duration = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="allFiltercss">
      <Checkbox onChange={onChange}>1 Years (55)</Checkbox>
      <Checkbox onChange={onChange}>2 Years (56)</Checkbox>
    </div>
  );
};

export default Duration;
