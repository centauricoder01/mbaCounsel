import React from "react";
import { Checkbox } from "antd";
import "./AllFiltercss.css";

const State = ({ filterValue, onvaluechange, showingValue }) => {
  const onChange = (e) => {
    if (e.target.checked) {
      onvaluechange([...filterValue, e.target.value]);
    } else {
      onvaluechange(filterValue.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div className="allFiltercss">
      {showingValue?.map((ele) => (
        <Checkbox key={ele._id} onChange={onChange} value={ele.stateValue}>
          {ele.stateValue}
        </Checkbox>
      ))}
    </div>
  );
};

export default State;
