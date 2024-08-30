import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Sidebar/Navbar";
import TextInput from "../../../Components/TextInput/TextInput";
import Button from "../../../Components/Button/Button";
import Home from "../Home";

// API CALLING
import { GetRequest } from "../../../API/Getrequest";
import { PostRequest } from "../../../API/PostRequest";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PutRequest } from "../../../API/PutRequest";
import TextArea from "../../../Components/TextArea/TextArea";

const AddBannerAds = () => {
  // Usestate values
  const [tableData, setTableData] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [Url, setUrl] = useState("");

  // Handling values
  const handletitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSubtitle = (e) => {
    setSubtitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  // API CALLING REQUESTES
  //handle POST REQUEST
  const postRow = (e) => {
    e.preventDefault();

    const data = {
      text: title,
      subtitle: subtitle,
      desc: description,
      url: Url,
    };

    console.log(data);
    PostRequest("home/addadsbanner", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  // handle DELETE REQUEST
  const deleteRow = (id) => {
    DeleteRequest("home/deleteadsbanner", id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  // HANDLE EDIT REQUEST
  const EditRow = (dataValue, id) => {
    const data = {
      id: id,
      text: dataValue.inputValueone,
      subtitle: dataValue.inputValueTwo,
      desc: dataValue.textArea,
      url: dataValue.inputValueThree,
    };
    PutRequest("home/updateadsbanner", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  // USEEFFECT
  useEffect(() => {
    GetRequest("home/getadsbanner")
      .then((res) => setTableData(res.data.allAdsBanner))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Navbar>
      <div className="main-div-common-design">
        <form className="main-master-div-form" onSubmit={postRow}>
          <h1>Add Banner Ads</h1>
          <TextInput
            placeholdertext={"Enter Title"}
            labeltext={"Title"}
            value={title}
            onChange={handletitle}
          />
          <TextInput
            placeholdertext={"Subtitle"}
            labeltext={"Enter Subtitle"}
            value={subtitle}
            onChange={handleSubtitle}
          />
          <TextArea
            Placeholdername={"Small Description"}
            labelName={"Description"}
            value={description}
            onChange={handleDescription}
          />
          <TextInput
            placeholdertext={"URL to redirect"}
            labeltext={" URL"}
            value={Url}
            onChange={handleUrl}
          />
          <Button />
        </form>
        <Home
          tableData={tableData}
          tablelabel={"Add Banner Ads Details"}
          popover={[
            { id: "label", show: "Edit Banner Text" },
            {
              id: "text1",
              show: "text",
              placeholdertext: "Enter Title",
              labeltext: "Title",
            },
            {
              id: "text2",
              show: "text",
              placeholdertext: "Subtitle",
              labeltext: "Enter Subtitle",
            },
            {
              id: "textarea",
              show: "text",
              placeholdertext: "Small Description",
              labeltext: "Description",
            },
            {
              id: "text3",
              show: "text",
              placeholdertext: "URL to redirect",
              labeltext: "URL",
            },
          ]}
          DeleteFunc={deleteRow}
          EditFunc={EditRow}
        />
      </div>
    </Navbar>
  );
};

export default AddBannerAds;
