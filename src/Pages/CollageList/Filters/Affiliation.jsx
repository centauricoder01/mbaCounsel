import React from "react";
import { Input } from "antd";
import { Checkbox } from "antd";
import "./AllFiltercss.css"
const { Search } = Input;

const Affiliation = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="allFiltercss">
      <Search
        placeholder="Find University"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
      <Checkbox onChange={onChange}>Alliance University</Checkbox>
      <Checkbox onChange={onChange}>Bangalore University</Checkbox>
      <Checkbox onChange={onChange}>Bennet University</Checkbox>
      <Checkbox onChange={onChange}>Amity University</Checkbox>
    </div>
  );
};

export default Affiliation;
