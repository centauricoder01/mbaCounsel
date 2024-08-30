import React, { useEffect, useState } from "react";
import Master from "../Master";
import { PutRequest } from "../../../API/PutRequest";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PostRequest } from "../../../API/PostRequest";
import { GetRequest } from "../../../API/Getrequest";

const NewCategory = () => {
  const [newCategory, setNewCategory] = useState([]);

  const EditFunc = (value, id) => {
    const NewsCategory = {
      CategoryValue: value.inputValue,
    };

    PutRequest("attribute/updatenewcategories", { id, NewsCategory })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const DeleteFunc = (id) => {
    DeleteRequest("attribute/deletenewcategories", id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const PostFunc = (value) => {
    let filteredObj = Object.fromEntries(
      Object.entries(value).filter(([key, value]) => value !== "")
    );

    const CategoryValue = {
      CategoryValue: filteredObj.inputValue,
    };

    PostRequest("attribute/addnewcategories", CategoryValue)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  useEffect(() => {
    GetRequest("attribute/getnewcategories")
      .then((res) => setNewCategory(res.data.allNewCategory))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Master
        heading={"Add News Category"}
        label={"Category Name"}
        placeHolder={"Enter Category name"}
        dummytable={newCategory}
        EditFunc={EditFunc}
        DeleteFunc={DeleteFunc}
        PostFunc={PostFunc}
      />
    </>
  );
};

export default NewCategory;
