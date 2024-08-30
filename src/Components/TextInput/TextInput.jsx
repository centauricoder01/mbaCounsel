import React from "react";
import "./TextInput.css";

const TextInput = ({ name, labeltext, placeholdertext, value, onChange }) => {
  return (
    <div className="main-input-div">
      <label>{labeltext}</label>
      <input
        type="text"
        placeholder={placeholdertext}
        className="add-college-input"
        style={{ height: "43px" }}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default TextInput;
