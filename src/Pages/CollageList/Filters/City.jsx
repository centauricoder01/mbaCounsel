import React from "react";
import { Checkbox } from "antd";
import "./AllFiltercss.css";

const City = ({ filterValue, onvaluechange }) => {
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
        placeholder="Find City"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      /> */}
      <Checkbox onChange={onChange} value={"Mangalore"}>
        Mangalore
      </Checkbox>
      <Checkbox onChange={onChange} value={"Bangalore"}>
        Bangalore
      </Checkbox>
      <Checkbox onChange={onChange} value={"Tumkur"}>
        Tumkur
      </Checkbox>
      <Checkbox onChange={onChange} value={"Gulbarga"}>
        Gulbarga
      </Checkbox>
      <Checkbox onChange={onChange} value={"Bijapur"}>
        Bijapur
      </Checkbox>
      <Checkbox onChange={onChange} value={"Mysore"}>
        Mysore
      </Checkbox>
    </div>
  );
};

export default City;
