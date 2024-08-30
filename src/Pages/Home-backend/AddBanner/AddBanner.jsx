import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Sidebar/Navbar";
import "./AddBanner.css";
import UploadImage from "../../../Components/UploadImage/UploadImage";
import TextInput from "../../../Components/TextInput/TextInput";
import Home from "../Home";

// ALL API REQUEST
import { PostRequest } from "../../../API/PostRequest.js";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PutRequest } from "../../../API/PutRequest";
import { GetRequest } from "../../../API/Getrequest.js";
import { CloudinaryImg } from "../../../API/Cloudinary.js";

const AddBanner = () => {
  const [bannerData, setbannerData] = useState([]);
  const [inputValue, setInputValue] = useState(""); // It takes the value of input tag...
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
        PostRequest("home/addbanner", data)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  // handle DELETE REQUEST
  const deleteRow = (id) => {
    DeleteRequest("home/deletebanner", id)
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
    PutRequest("home/updatebanner", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  useEffect(() => {
    GetRequest("home/getbanner")
      .then((res) => setbannerData(res.data.allBanner))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Navbar>
      <div className="main-div-common-design">
        <form className="main-master-div-form" onSubmit={handleSubmit}>
          <h1>Add Banner</h1>
          <UploadImage handleUpload={handleImageUpload} value={imageSrc} />

          <TextInput
            placeholdertext={"Enter Banner Text"}
            labeltext={"Banner Text"}
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="button-19" type="submit">
            Submit
          </button>
        </form>
        <Home
          tableData={bannerData}
          tablelabel={"All Banner Details"}
          popover={[
            { id: "label", show: "Edit Banner" },
            {
              id: "img",
            },
            {
              id: "text1",
              show: "text",
              placeholdertext: "Enter Banner Text",
              labeltext: "Banner Text",
            },
          ]}
          DeleteFunc={deleteRow}
          EditFunc={EditRow}
        />
      </div>
    </Navbar>
  );
};

export default AddBanner;
