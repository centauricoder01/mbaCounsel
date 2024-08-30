import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Sidebar/Navbar";
import UploadImage from "../../../Components/UploadImage/UploadImage";
import Button from "../../../Components/Button/Button";
import TextInput from "../../../Components/TextInput/TextInput";
import Home from "../Home";
import { GetRequest } from "../../../API/Getrequest";
import { PutRequest } from "../../../API/PutRequest";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PostRequest } from "../../../API/PostRequest";
import { CloudinaryImg } from "../../../API/Cloudinary";

// handle DELETE REQUEST
const deleteRow = (id) => {
  DeleteRequest("home/deleteservices", id)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  window.location.reload();
};

// HANDLE EDIT REQUEST
const EditRow = (dataValue, id) => {
  const data = {
    id: id,
    text: dataValue.inputValueone,
  };
  PutRequest("home/updateservices", data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  window.location.reload();
};

const AddServices = () => {
  const [bannerData, setbannerData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [imageSrc, setImageSrc] = useState(null); // It takes the value of Img tag...
  const [file, setFile] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleImageUpload = (event) => {
    setFile(event.target.files[0]);
    const fileValue = event.target.files[0];
    if (!fileValue.type.startsWith("image/")) {
      alert("Please upload an image file");
    } else {
      setImageSrc(URL.createObjectURL(fileValue));
    }
  };

  //handle POST REQUEST
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "zww2fx8g");
    CloudinaryImg(data)
      .then((value) => {
        const data = {
          Img: value.data.url,
          text: inputValue,
        };
        PostRequest("home/addservices", data)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetRequest("home/getservices")
      .then((res) => setbannerData(res.data.allServices))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Navbar>
      <div className="main-div-common-design">
        <form className="main-master-div-form" onSubmit={handleSubmit}>
          <h1>Add Services</h1>
          <UploadImage handleUpload={handleImageUpload} value={imageSrc} />
          <TextInput
            placeholdertext={"Enter Services"}
            labeltext={"Services"}
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button />
        </form>
        <Home
          tableData={bannerData}
          tablelabel={"Services"}
          popover={[
            { id: "label", show: "Edit Services" },
            {
              id: "img",
            },
            {
              id: "text1",
              placeholdertext: "Enter Services",
              labeltext: "Services",
            },
          ]}
          DeleteFunc={deleteRow}
          EditFunc={EditRow}
        />
      </div>
    </Navbar>
  );
};

export default AddServices;
