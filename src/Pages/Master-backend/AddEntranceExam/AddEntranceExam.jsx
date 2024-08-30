import React, { useEffect, useState } from "react";
import Master from "../Master";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PostRequest } from "../../../API/PostRequest";
import { GetRequest } from "../../../API/Getrequest";
import { PutRequest } from "../../../API/PutRequest";

const AddEntranceExam = () => {
  const [entranceExam, setEntranceExam] = useState([]);

  const EditFunc = (value, id) => {
    let sortEntranceExam = {
      entranceExamShortForm: value.secondplaceholder,
      entranceExamFullForm: value.inputValue,
    };

    const entranceexam = Object.fromEntries(
      Object.entries(sortEntranceExam).filter(([key, value]) => value !== "")
    );

    PutRequest("attribute/updateentranceexam", { id, entranceexam })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const DeleteFunc = (id) => {
    DeleteRequest("attribute/deleteentranceexam", id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const PostFunc = (value) => {
    let filteredObj = Object.fromEntries(
      Object.entries(value).filter(([key, value]) => value !== "")
    );

    console.log(filteredObj);
    const accreditionvalue = {
      fullform: filteredObj.inputValue,
      shortform: filteredObj.secondplaceholder,
    };

    PostRequest("attribute/addentranceexam", accreditionvalue)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  useEffect(() => {
    GetRequest("attribute/getentranceexam")
      .then((res) => setEntranceExam(res.data.allEntranceExam))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Master
        heading={"Add Enterance Exam"}
        label={"Entrance Exam (F)"}
        secondlabel={"Entrance Exam (S)"}
        placeHolder={"Full Form"}
        secondplaceholder={"Short Form"}
        dummytable={entranceExam}
        EditFunc={EditFunc}
        DeleteFunc={DeleteFunc}
        PostFunc={PostFunc}
      />
    </div>
  );
};

export default AddEntranceExam;
