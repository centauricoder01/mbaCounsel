import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Sidebar/Navbar";
import UploadImage from "../../../Components/UploadImage/UploadImage";
import TextInput from "../../../Components/TextInput/TextInput";
import Button from "../../../Components/Button/Button";
import TextArea from "../../../Components/TextArea/TextArea";
import Home from "../Home";
import { GetRequest } from "../../../API/Getrequest";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PutRequest } from "../../../API/PutRequest";
import { CloudinaryImg } from "../../../API/Cloudinary";
import { PostRequest } from "../../../API/PostRequest";

const AddTestimonials = () => {
  const [bannerData, setbannerData] = useState([]);
  const [imageSrc, setImageSrc] = useState(null); // It takes the value of Img tag...
  const [file, setFile] = useState(null);
  const [namevalue, setNameValue] = useState(""); // It takes the value of input tag...
  const [collegeValue, setCollegeValue] = useState(""); // It takes the value of input tag...
  const [reviewValue, setReviewValue] = useState(""); // It takes the value of input tag...

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };
  const handleCollegeChange = (event) => {
    setCollegeValue(event.target.value);
  };
  const handleReviewChange = (event) => {
    setReviewValue(event.target.value);
  };

  //Upload image function
  const handleImageUpload = (event) => {
    setFile(event.target.files[0]);
    const fileValue = event.target.files[0];
    if (!fileValue.type.startsWith("image/")) {
      alert("Please upload an image file");
    } else {
      setImageSrc(URL.createObjectURL(fileValue));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "zww2fx8g");
    console.log(namevalue, collegeValue, reviewValue, data);
    CloudinaryImg(data)
      .then((value) => {
        const data = {
          Img: value.data.url,
          name: namevalue,
          review: reviewValue,
          college: collegeValue,
        };
        PostRequest("home/addtestimonial", data)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const deleteRow = (id) => {
    DeleteRequest("home/deletetestimonial", id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  // HANDLE EDIT REQUEST
  const EditRow = (dataValue, id) => {
    const data = {
      id: id,
      name: dataValue.inputValueone,
      review: dataValue.textArea,
      college: dataValue.inputValueTwo,
    };
    PutRequest("home/updatetestimonial", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  useEffect(() => {
    GetRequest("home/gettestimonial")
      .then((res) => setbannerData(res.data.allTestimonial))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Navbar>
      <div className="main-div-common-design">
        <form className="main-master-div-form" onSubmit={handleSubmit}>
          <h1>Add Testimonial</h1>
          <UploadImage handleUpload={handleImageUpload} value={imageSrc} />
          <TextInput
            placeholdertext={"Enter Name"}
            labeltext={"Name"}
            value={namevalue}
            onChange={handleNameChange}
          />
          <TextInput
            placeholdertext={"Enter college Name"}
            labeltext={"College Name"}
            value={collegeValue}
            onChange={handleCollegeChange}
          />
          <TextArea
            labelName={"Review"}
            Placeholdername={"Add Review"}
            value={reviewValue}
            onChange={handleReviewChange}
          />
          <Button />
        </form>{" "}
        <Home
          tableData={bannerData}
          tablelabel={"Services"}
          popover={[
            { id: "label", show: "Edit " },
            {
              id: "img",
            },
            {
              id: "text1",
              placeholdertext: "Enter Name",
              labeltext: " Name",
            },
            {
              id: "text2",
              placeholdertext: "Enter college Name",
              labeltext: "College Name",
            },
            {
              id: "textarea",
              placeholdertext: "Add Review",
              labeltext: "Review",
            },
          ]}
          DeleteFunc={deleteRow}
          EditFunc={EditRow}
        />
      </div>
    </Navbar>
  );
};

export default AddTestimonials;
