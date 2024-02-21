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
        <Checkbox onChange={onChange} value={e.accreditionValue}>
          {e.accreditionValue}
        </Checkbox>
      ))}
      {/* <Checkbox onChange={onChange} value={"DU"}>
        DU
      </Checkbox>
      <Checkbox onChange={onChange} value={"BHU"}>
        BHU
      </Checkbox>
      <Checkbox onChange={onChange} value={"IIM"}>
        IIM
      </Checkbox> */}
    </div>
  );
};

export default Affiliation;
