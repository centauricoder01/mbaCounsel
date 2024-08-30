import React from "react";
import "./TextArea.css";

const TextArea = ({ labelName, Placeholdername, value, onChange }) => {
  return (
    <div className="main-textarea-div">
      <label>{labelName}</label>
      <textarea
        name="placeholder"
        value={value}
        onChange={onChange}
        placeholder={`${Placeholdername}`}
      ></textarea>
    </div>
  );
};

export default TextArea;
