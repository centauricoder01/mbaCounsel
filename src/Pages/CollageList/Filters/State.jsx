import React from "react";
import { Checkbox } from "antd";
import "./AllFiltercss.css";

const State = ({ filterValue, onvaluechange }) => {
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
      <Checkbox onChange={onChange} value={"Rajasthan"}>
        Rajasthan
      </Checkbox>
      <Checkbox onChange={onChange} value={"Punjab"}>
        Punjab
      </Checkbox>
      <Checkbox onChange={onChange} value={"Kerala"}>
        Kerala
      </Checkbox>
      <Checkbox onChange={onChange} value={"Assam"}>
        Assam
      </Checkbox>
      <Checkbox onChange={onChange} value={"Jammu & Kashmir"}>
        Jammu & Kashmir
      </Checkbox>
      <Checkbox onChange={onChange} value={"Orrisa"}>
        Orrisa
      </Checkbox>
    </div>
  );
};

export default State;
