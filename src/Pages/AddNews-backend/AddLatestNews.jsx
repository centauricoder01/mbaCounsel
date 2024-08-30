import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Sidebar/Navbar";
import TextInput from "../../Components/TextInput/TextInput";
import UploadImage from "../../Components/UploadImage/UploadImage";
import MutlipleTextEditor from "../College-backend/AddCollege/Components/MutlipleTextEditor";
import MutlipleTextEditorForUpdate from "../College-backend/EditCollege/Components/Multieditor";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { DatePicker, Space } from "antd";
import { CloudinaryImg } from "../../API/Cloudinary";
import { GetRequest } from "../../API/Getrequest";
import { PostRequest } from "../../API/PostRequest";
import { useNavigate, useParams } from "react-router-dom";
import { PutRequest } from "../../API/PutRequest";

const AddLatestNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [backendData, setBackendData] = useState({
    newscategory: null,
  });
  const [description, setDescription] = useState("");
  const [latestNewImage, setLatestNewsImage] = useState("");
  const [latestNewsValue, setLatestNewsValue] = useState({
    Image: "",
    Date: "",
    title: "",
    SlugUrl: "",
    Category: "",
    MetaTitle: "",
    MetaDescription: "",
    ShortDescription: "",
    Description: "",
    MetaKeywords: "",
    TrendingNews: false,
    FeaturedNews: false,
  });

  // handleing the data and adding to the main object
  const onchange = (date, dateString) => {
    setLatestNewsValue((prevInput) => ({
      ...prevInput,
      Date: dateString,
    }));
  };

  // Upload Image section start from here
  const handleLatestNewsImageChange = (e) => {
    const file = e.target.files[0];
    setLatestNewsImage(URL.createObjectURL(e.target.files[0]));
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "zww2fx8g");
    CloudinaryImg(data)
      .then((value) => {
        setLatestNewsValue((prevState) => ({
          ...prevState,
          Image: value.data.url,
        }));
      })
      .catch((err) => console.log(err));
  };

  // handling the text editor values
  const handleDescription = (content, editor) => {
    setLatestNewsValue((prevState) => ({
      ...prevState,
      Description: content,
    }));
    setDescription(content);
  };

  // handle the input submit button
  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setLatestNewsValue((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  // HANDLE INPUT CHANGE

  const handleTrendingNewsCheckboxChange = (event) => {
    setLatestNewsValue((prevState) => ({
      ...prevState,
      TrendingNews: event.target.checked,
    }));
  };

  const handleFeaturedNewsCheckboxChange = (event) => {
    setLatestNewsValue((prevState) => ({
      ...prevState,
      FeaturedNews: event.target.checked,
    }));
  };

  // Handling the submit button of form
  const HandleLatestNewsSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(latestNewsValue).some(
      (x) =>
        (typeof x === "string" && x.trim() === "") ||
        (Array.isArray(x) && x.length === 0)
    );

    if (isEmpty) {
      alert("Please fill all the fields");
    } else if (id) {
      delete latestNewsValue._id;
      delete latestNewsValue.__v;
      PutRequest("news/updateingnews", { id, latestNewsValue })
        .then((response) => {
          alert(response.data.message);
          navigate("/viewlatestnews");
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    } else {
      PostRequest("news/addnews", latestNewsValue)
        .then((res) => alert(res.data.message))
        .catch((err) => console.log(err));
      window.location.reload();
    }
  };

  useEffect(() => {
    const paths = ["attribute/getnewcategories"];
    Promise.all(paths.map((path) => GetRequest(path)))
      .then((responses) => {
        const data = responses.map((response) => response.data);
        setBackendData({
          newscategory: data[0].allNewCategory,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    if (id) {
      GetRequest(`news/getnews/${id}`)
        .then((res) => setLatestNewsValue(res.data.news))
        .catch((err) => console.log(err));
    }
  }, [id]);

  let newCategoryArray = backendData?.newscategory?.map(
    (obj) => obj.CategoryValue
  );

  return (
    <Navbar>
      <div className="main-add-college main-div-common-design">
        <form
          className="main-master-div-form"
          style={{ width: "100%" }}
          onSubmit={HandleLatestNewsSubmit}
        >
          <h1>Add Latest News</h1>
          <UploadImage
            handleUpload={handleLatestNewsImageChange}
            value={latestNewImage}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label>Date</label>
            <Space direction="vertical" style={{ width: "70%" }}>
              <DatePicker
                onChange={onchange}
                style={{ width: "100%", height: "2.5rem" }}
              />
            </Space>
          </div>
          <TextInput
            name={"title"}
            placeholdertext={"Enter Title"}
            labeltext={"Title"}
            value={latestNewsValue.title}
            onChange={handleInputChanges}
          />
          <Dropdown
            name={"Category"}
            selectArray={newCategoryArray}
            labelvalue={"Category"}
            value={latestNewsValue.Category}
            onchange={handleInputChanges}
          />
          <TextInput
            name={"SlugUrl"}
            placeholdertext={"Enter Slug"}
            labeltext={"Slug URL"}
            value={latestNewsValue.SlugUrl}
            onChange={handleInputChanges}
          />
          <TextInput
            name={"MetaTitle"}
            placeholdertext={"Enter Meta Title"}
            labeltext={"Meta Title"}
            value={latestNewsValue.MetaTitle}
            onChange={handleInputChanges}
          />

          <TextInput
            name={"MetaDescription"}
            placeholdertext={"Enter Meta Description"}
            labeltext={"Meta Description"}
            value={latestNewsValue.MetaDescription}
            onChange={handleInputChanges}
          />
          <TextInput
            name={"MetaKeywords"}
            placeholdertext={"Enter Meta Keyword"}
            labeltext={"Meta Keywords"}
            value={latestNewsValue.MetaKeywords}
            onChange={handleInputChanges}
          />
          <TextInput
            name={"ShortDescription"}
            placeholdertext={"Enter Short Desc"}
            labeltext={"Short Desciption"}
            value={latestNewsValue.ShortDescription}
            onChange={handleInputChanges}
          />
          <div
            style={{
              width: "65%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label>Featured News</label>
            <input
              type="checkbox"
              checked={latestNewsValue.FeaturedNews}
              onChange={handleFeaturedNewsCheckboxChange}
            />
          </div>
          <div
            style={{
              width: "65%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label>Trending News</label>
            <input
              type="checkbox"
              checked={latestNewsValue.TrendingNews}
              onChange={handleTrendingNewsCheckboxChange}
            />
          </div>

          <label>Description</label>
          {id ? (
            <MutlipleTextEditorForUpdate
              editorValue={"Description"}
              value={latestNewsValue.Description}
              onChange={handleDescription}
            />
          ) : (
            <MutlipleTextEditor
              editorValue={"Description"}
              value={description}
              onChange={handleDescription}
            />
          )}
          <button className="button-19" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Navbar>
  );
};

export default AddLatestNews;
