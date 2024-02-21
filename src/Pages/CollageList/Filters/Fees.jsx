import React from "react";
import { Checkbox } from "antd";
import "./AllFiltercss.css";

const Fees = ({ filterValue, onvaluechange, showingValue }) => {
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
        <Checkbox onChange={onChange} value={ele.affiliationValue}>
          {ele.affiliationValue}
        </Checkbox>
      ))}
    </div>
  );
};

export default Fees;
