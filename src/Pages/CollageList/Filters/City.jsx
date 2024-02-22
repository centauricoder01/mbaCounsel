import React from "react";
import { Checkbox } from "antd";
import "./AllFiltercss.css";

const City = ({ filterValue, onvaluechange, showingValue }) => {
  const onChange = (e) => {
    if (e.target.checked) {
      onvaluechange([...filterValue, e.target.value]);
    } else {
      onvaluechange(filterValue.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div className="allFiltercss">
      {showingValue?.map((item) =>
        item.cityValue.map((city) => (
          <Checkbox key={city._id} onChange={onChange} value={city}>
            {city}
          </Checkbox>
        ))
      )}
    </div>
  );
};

export default City;
