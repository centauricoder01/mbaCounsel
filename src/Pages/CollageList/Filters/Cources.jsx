import React from "react";
import { Checkbox } from "antd";
import "./AllFiltercss.css";

const Cources = ({ filterValue, onvaluechange }) => {
  const onChange = (e) => {
    if (e.target.checked) {
      onvaluechange([...filterValue, e.target.value]);
    } else {
      onvaluechange(filterValue.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div className="allFiltercss">
      <Checkbox onChange={onChange} >MBA in Marketing</Checkbox>
      <Checkbox onChange={onChange} >PGDM </Checkbox>
      <Checkbox onChange={onChange} >MBA in Finance </Checkbox>
      <Checkbox onChange={onChange} >MBA in Human Resource </Checkbox>
      <Checkbox onChange={onChange} >Distance MBA </Checkbox>
      <Checkbox onChange={onChange} >Online MBA </Checkbox>
      <Checkbox onChange={onChange} >ePGDM </Checkbox>
    </div>
  );
};

export default Cources;
