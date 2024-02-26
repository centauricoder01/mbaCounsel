import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import "./AllFiltercss.css";

const City = ({
  filterValue,
  onvaluechange,
  showingValue,
  checkstatevalue,
}) => {
  const [filterCityValue, setFilterCityValue] = useState([]);
  const onChange = (e) => {
    if (e.target.checked) {
      onvaluechange([...filterValue, e.target.value]);
    } else {
      onvaluechange(filterValue.filter((item) => item !== e.target.value));
    }
  };

  let filteredCities = showingValue
    ?.filter((obj) => checkstatevalue?.includes(obj.stateValue))
    ?.map((obj) => obj?.cityValue);

  useEffect(() => {
    setFilterCityValue(filteredCities?.flat());
  }, [checkstatevalue]);

  if (showingValue === null) {
    return <p>Loading Value...</p>;
  }

  console.log(filterCityValue, "FILTER CITY");

  return (
    <div className="allFiltercss">
      {filterCityValue?.length !== 0
        ? filterCityValue?.map((city) => (
            <Checkbox key={city} onChange={onChange} value={city}>
              {city}
            </Checkbox>
          ))
        : null}
      {filterCityValue?.length === 0 || filterCityValue === undefined
        ? showingValue?.map((item) =>
            item.cityValue.map((city) => (
              <Checkbox key={city} onChange={onChange} value={city}>
                {city}
              </Checkbox>
            ))
          )
        : null}
    </div>
  );
};

export default City;
