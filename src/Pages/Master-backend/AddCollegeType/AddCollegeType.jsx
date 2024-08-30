import React, { useEffect, useState } from "react";
import Master from "../Master";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PostRequest } from "../../../API/PostRequest";
import { GetRequest } from "../../../API/Getrequest";
import { PutRequest } from "../../../API/PutRequest";

const AddCollegeType = () => {
  const [collegeType, setcollegeType] = useState([]);

  const EditFunc = (value, id) => {
    let accredition = {
      updatecollegetype: value.inputValue,
    };

    const updatecollegetype = accredition.updatecollegetype;

    // console.log(updatecollegetype, "College Type");

    PutRequest("attribute/updatecollegetype", { id, updatecollegetype })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const DeleteFunc = (id) => {
    DeleteRequest("attribute/deletecollegetype", id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const PostFunc = (value) => {
    let filteredObj = Object.fromEntries(
      Object.entries(value).filter(([key, value]) => value !== "")
    );

    const collegetype = {
      collegetype: filteredObj.inputValue,
    };
    PostRequest("attribute/addcollegetype", collegetype)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  useEffect(() => {
    GetRequest("attribute/getcollegetype")
      .then((res) => setcollegeType(res.data.allCollegeTypeValue))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Master
        heading={"Add College Type"}
        label={"College Type"}
        placeHolder={"Type"}
        dummytable={collegeType}
        EditFunc={EditFunc}
        DeleteFunc={DeleteFunc}
        PostFunc={PostFunc}
      />
    </>
  );
};

export default AddCollegeType;
