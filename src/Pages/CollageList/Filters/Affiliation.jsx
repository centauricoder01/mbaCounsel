import React from "react";
import { Checkbox } from "antd";
import "./AllFiltercss.css";

const Affiliation = ({ filterValue, onvaluechange, showingValue }) => {
  const onChange = (e) => {
    if (e.target.checked) {
      onvaluechange([...filterValue, e.target.value]);
    } else {
      onvaluechange(filterValue.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div className="allFiltercss">
      {showingValue.map((e) => (
        <Checkbox key={e._id} onChange={onChange} value={e.accreditionValue}>
          {e.accreditionValue}
        </Checkbox>
      ))}
    </div>
  );
};

export default Affiliation;
