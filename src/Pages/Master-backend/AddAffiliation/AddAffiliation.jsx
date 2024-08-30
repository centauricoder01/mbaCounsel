import React, { useEffect, useState } from "react";
import Master from "../Master";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PostRequest } from "../../../API/PostRequest";
import { GetRequest } from "../../../API/Getrequest";
import { PutRequest } from "../../../API/PutRequest";

const AddAffiliation = () => {
  const [affiliation, setAffiliation] = useState([]);

  const EditFunc = (value, id) => {
    let accredition = {
      accreditionValue: value.inputValue,
    };

    const accreditionVal = Object.fromEntries(
      Object.entries(accredition).filter(([key, value]) => value !== "")
    );

    const updateaffiliation = accreditionVal.accreditionValue;

    PutRequest("attribute/updateaffiliation", { id, updateaffiliation })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const DeleteFunc = (id) => {
    DeleteRequest("attribute/deleteaffiliation", id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const PostFunc = (value) => {
    let filteredObj = Object.fromEntries(
      Object.entries(value).filter(([key, value]) => value !== "")
    );

    const affiliationvalue = {
      affiliationvalue: filteredObj.inputValue,
    };
    PostRequest("attribute/addaffiliation", affiliationvalue)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  useEffect(() => {
    GetRequest("attribute/getaffiliation")
      .then((res) => setAffiliation(res.data.allAffiliation))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Master
        heading={"Add Affiliation"}
        label={"Affiliation Name"}
        placeHolder={"Enter Affiliation"}
        dummytable={affiliation}
        EditFunc={EditFunc}
        DeleteFunc={DeleteFunc}
        PostFunc={PostFunc}
      />
    </>
  );
};

export default AddAffiliation;
