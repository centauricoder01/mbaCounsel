import React from "react";
import "./Dropdown.css";

const Dropdown = ({ name, selectArray, labelvalue, value, onchange }) => {
  return (
    <div className="main-dropdown-component-class">
      <label htmlFor="">{labelvalue}</label>
      <select name={name} value={value} onChange={onchange}>
        <option value="Choose Option">Choose Options</option>
        {selectArray?.map((ele, index) => (
          <option value={ele} key={index}>
            {ele}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
