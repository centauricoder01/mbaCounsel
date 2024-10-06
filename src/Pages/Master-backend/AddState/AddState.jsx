import React, { useEffect, useState } from "react";
import Master from "../Master";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PostRequest } from "../../../API/PostRequest";
import { GetRequest } from "../../../API/Getrequest";
import { PutRequest } from "../../../API/PutRequest";

const AddState = () => {
  const [state, setState] = useState([]);

  const EditFunc = (value, id) => {
    let state = {
      stateValue: value.inputValue,
    };

    const accreditionVal = Object.fromEntries(
      Object.entries(state).filter(([key, value]) => value !== "")
    );

    const statevalue = accreditionVal.stateValue;

    PutRequest("attribute/updatestate", { id, statevalue })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const DeleteFunc = (id) => {
    DeleteRequest("attribute/deletestate", id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const PostFunc = (value) => {
    let filteredObj = Object.fromEntries(
      Object.entries(value).filter(([key, value]) => value !== "")
    );

    const affiliationvalue = {
      statevalue: filteredObj.inputValue,
    };
    PostRequest("attribute/addstate", affiliationvalue)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // window.location.reload();
  };

  useEffect(() => {
    GetRequest("attribute/getstate")
      .then((res) => setState(res.data.allstate))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Master
        heading={"Add State"}
        label={"State Name"}
        placeHolder={"Enter State name"}
        dummytable={state}
        EditFunc={EditFunc}
        DeleteFunc={DeleteFunc}
        PostFunc={PostFunc}
      />
    </>
  );
};

export default AddState;
