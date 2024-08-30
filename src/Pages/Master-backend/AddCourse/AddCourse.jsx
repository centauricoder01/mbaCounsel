import React, { useEffect, useState } from "react";
import Master from "../Master";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PostRequest } from "../../../API/PostRequest";
import { GetRequest } from "../../../API/Getrequest";
import { CloudinaryImg } from "../../../API/Cloudinary";
import { PutRequest } from "../../../API/PutRequest";

const AddCourse = () => {
  const [course, setCourse] = useState([]);

  const EditFunc = (value, id) => {
    let specilization = {
      image: value.imageVal,
      text: value.inputValue,
    };
    const courseVal = Object.fromEntries(
      Object.entries(specilization).filter(([key, value]) => value !== "")
    );

    if (courseVal.image !== undefined) {
      const data = new FormData();
      data.append("file", courseVal.image);
      data.append("upload_preset", "zww2fx8g");
      CloudinaryImg(data)
        .then((value) => {
          let couseVal;
          if (courseVal.text !== undefined) {
            couseVal = {
              courseImage: value.data.url,
              coursesValue: courseVal.text,
            };
          } else {
            couseVal = {
              courseImage: value.data.url,
            };
          }
          PutRequest("attribute/updatecourse", { id, couseVal })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
          window.location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      const couseVal = {
        coursesValue: courseVal.text,
      };

      PutRequest("attribute/updatecourse", { id, couseVal })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      window.location.reload();
    }
  };

  const DeleteFunc = (id) => {
    DeleteRequest("attribute/deletecourse", id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const PostFunc = (value) => {
    let filteredObj = Object.fromEntries(
      Object.entries(value).filter(([key, value]) => value !== "")
    );

    const data = new FormData();
    data.append("file", filteredObj.imageVal);
    data.append("upload_preset", "zww2fx8g");
    CloudinaryImg(data)
      .then((value) => {
        const data = {
          courseimg: value.data.url,
          courseval: filteredObj.inputValue,
        };
        PostRequest("attribute/addcourse", data)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetRequest("attribute/getcourse")
      .then((res) => setCourse(res.data.allCourses))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Master
        heading={"Add Course"}
        label={"Course Name"}
        placeHolder={"Name"}
        dummytable={course}
        icons={"Icons"}
        EditFunc={EditFunc}
        DeleteFunc={DeleteFunc}
        PostFunc={PostFunc}
      />
    </div>
  );
};

export default AddCourse;
