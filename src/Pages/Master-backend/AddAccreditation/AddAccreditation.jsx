import React, { useEffect, useState } from "react";
import Master from "../Master";
import { GetRequest } from "../../../API/Getrequest";
import { PostRequest } from "../../../API/PostRequest";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PutRequest } from "../../../API/PutRequest";

const AddAccreditation = () => {
  const [accreditation, setAccreditation] = useState([]);

  const EditFunc = (value, id) => {
    let accredition = {
      accreditionValue: value.inputValue,
    };

    const accreditionVal = Object.fromEntries(
      Object.entries(accredition).filter(([key, value]) => value !== "")
    );

    const accreditionValue = accreditionVal.accreditionValue;

    PutRequest("attribute/updateaccredition", { id, accreditionValue })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const DeleteFunc = (id) => {
    DeleteRequest("attribute/deleteaccredition", id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const PostFunc = (value) => {
    let filteredObj = Object.fromEntries(
      Object.entries(value).filter(([key, value]) => value !== "")
    );

    const accreditionvalue = {
      accreditionvalue: filteredObj.inputValue,
    };
    PostRequest("attribute/addaccredition", accreditionvalue)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  useEffect(() => {
    GetRequest("attribute/getaccredition")
      .then((res) => setAccreditation(res.data.allAccredition))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Master
        heading={"Add Accreditation"}
        label={"Accreditations Name"}
        placeHolder={"Enter Accreditation"}
        dummytable={accreditation}
        EditFunc={EditFunc}
        DeleteFunc={DeleteFunc}
        PostFunc={PostFunc}
      />
    </div>
  );
};

export default AddAccreditation;
