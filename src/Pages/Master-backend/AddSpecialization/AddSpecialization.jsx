import React, { useEffect, useState } from "react";
import Master from "../Master";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PostRequest } from "../../../API/PostRequest";
import { GetRequest } from "../../../API/Getrequest";
import { PutRequest } from "../../../API/PutRequest";

const AddSpecialization = () => {
  const [course, setCourse] = useState([]);
  const [specialization, setSpecialization] = useState([]);

  const EditFunc = (value, id) => {
    let specilization = {
      courseValue: value.dropdownValue,
      specilizationValue: value.multiselectValue,
    };

    const specilizationVal = Object.fromEntries(
      Object.entries(specilization).filter(([key, value]) => value !== "")
    );

    PutRequest("attribute/updatespecilization", { id, specilizationVal })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const DeleteFunc = (id) => {
    DeleteRequest("attribute/deletespecilization", id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const PostFunc = (value) => {
    let filteredObj = Object.fromEntries(
      Object.entries(value).filter(([key, value]) => value !== "")
    );

    const cityValue = {
      coursevalue: filteredObj.dropdownValue,
      specilizationvalue: filteredObj.multiselectValue,
    };
    PostRequest("attribute/addspecilization", cityValue)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  useEffect(() => {
    GetRequest("attribute/getspecilization")
      .then((res) => setSpecialization(res.data.allspecilization))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    GetRequest("attribute/getcourse")
      .then((res) =>
        setCourse(res.data.allCourses.map((obj) => obj.coursesValue))
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Master
        heading={"Add specializations"}
        placeHolder={"Specializations Name"}
        multiselectlabel={"Specializations Name"}
        dummytable={specialization}
        dropdown={course}
        dropdownLabel={"Course"}
        tabletextone={"Course"}
        tabletexttwo={"Specilization"}
        //CRUD FUNCTION
        EditFunc={EditFunc}
        DeleteFunc={DeleteFunc}
        PostFunc={PostFunc}
      />
    </>
  );
};

export default AddSpecialization;
