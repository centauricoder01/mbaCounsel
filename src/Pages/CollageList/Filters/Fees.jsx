import React from "react";
import { Input } from "antd";
import { Checkbox } from "antd";
import "./AllFiltercss.css";

const { Search } = Input;

const Fees = () => {
 const onSearch = (value, _e, info) => console.log(info?.source, value);
 const onChange = (e) => {
   console.log(`checked = ${e.target.checked}`);
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
     <Checkbox onChange={onChange}>Rajasthan</Checkbox>
     <Checkbox onChange={onChange}>Punjab</Checkbox>
     <Checkbox onChange={onChange}>Kerala</Checkbox>
     <Checkbox onChange={onChange}>Assam</Checkbox>
     <Checkbox onChange={onChange}>Jammu & Kashmir</Checkbox>
     <Checkbox onChange={onChange}>Orrisa</Checkbox>
   </div>
 );
};

export default Fees;
