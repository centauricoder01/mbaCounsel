import React from "react";
import { Checkbox } from "antd";
import "./AllFiltercss.css";

const Stream = ({ filterValue, onvaluechange }) => {
  const onChange = (e) => {
    if (e.target.checked) {
      onvaluechange([...filterValue, e.target.value]);
    } else {
      onvaluechange(filterValue.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div className="allFiltercss">
      {/* <Search
        placeholder="Find State"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      /> */}
      <Checkbox onChange={onChange}  value={"Mangalore"}>Rajasthan</Checkbox>
      <Checkbox onChange={onChange} value={"Mangalore"}>Punjab</Checkbox>
      <Checkbox onChange={onChange} value={"Mangalore"}>Kerala</Checkbox>
      <Checkbox onChange={onChange} value={"Mangalore"}>Assam</Checkbox>
      <Checkbox onChange={onChange} value={"Mangalore"}>Jammu & Kashmir</Checkbox>
      <Checkbox onChange={onChange} value={"Mangalore"}>Orrisa</Checkbox>
    </div>
  );
};

export default Stream;
