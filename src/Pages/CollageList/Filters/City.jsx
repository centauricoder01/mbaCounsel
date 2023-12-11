import React from "react";
import { Input } from "antd";
import { Checkbox } from "antd";
import "./AllFiltercss.css";
const { Search } = Input;


const City = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="allFiltercss">
      <Search
        placeholder="Find City"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
      <Checkbox onChange={onChange}>Mangalore (55)</Checkbox>
      <Checkbox onChange={onChange}>Bangalore (85)</Checkbox>
      <Checkbox onChange={onChange}>Tumkur (75)</Checkbox>
      <Checkbox onChange={onChange}>Gulbarga (75)</Checkbox>
      <Checkbox onChange={onChange}>Bijapur (55)</Checkbox>
      <Checkbox onChange={onChange}>Mysore (55)</Checkbox>
    </div>
  );
};

export default City;
