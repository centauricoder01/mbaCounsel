import React, { useEffect } from "react";
import { Checkbox } from "antd";
import "./AllFiltercss.css";

const State = ({ filterValue, onvaluechange, showingValue }) => {
  const getLocalStorageStateValue =
    JSON.parse(localStorage.getItem("dropdownstatevalue")) || "";

  useEffect(() => {
    if (
      getLocalStorageStateValue &&
      !filterValue.includes(getLocalStorageStateValue)
    ) {
      onvaluechange([...filterValue, getLocalStorageStateValue]);
    }
  }, []);

  const onChange = (e) => {
    if (e.target.checked) {
      onvaluechange([...filterValue, e.target.value]);
    } else {
      onvaluechange(filterValue.filter((item) => item !== e.target.value));
    }
  };

  if (performance.navigation.type === 1) {
    console.log("This page is reloaded");
    localStorage.removeItem("dropdownstatevalue");
  }

  return (
    <div className="allFiltercss">
      {showingValue?.map((ele) => (
        <Checkbox
          key={ele._id}
          onChange={onChange}
          value={ele.stateValue}
          // checked={getLocalStorageStateValue.includes(ele.stateValue)}
          checked={filterValue.includes(ele.stateValue)}
        >
          {ele.stateValue}
        </Checkbox>
      ))}
    </div>
  );
};

export default State;
