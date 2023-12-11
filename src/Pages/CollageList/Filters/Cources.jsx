import React from "react";
import { Input } from "antd";
import { Checkbox } from "antd";
import "./AllFiltercss.css";

const { Search } = Input;

const Cources = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="allFiltercss">
      <Search
        placeholder="Find Courses"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
      <Checkbox onChange={onChange}>MBA in Marketing (85)</Checkbox>
      <Checkbox onChange={onChange}>PGDM (55)</Checkbox>
      <Checkbox onChange={onChange}>MBA in Finance (75)</Checkbox>
      <Checkbox onChange={onChange}>MBA in Human Resource (75)</Checkbox>
      <Checkbox onChange={onChange}>Distance MBA (55)</Checkbox>
      <Checkbox onChange={onChange}>Online MBA (55)</Checkbox>
      <Checkbox onChange={onChange}>ePGDM (55)</Checkbox>
    </div>
  );
};

export default Cources;
