import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CloudinaryImg } from "../../API/Cloudinary";
import { PutRequest } from "../../API/PutRequest";
import { PostRequest } from "../../API/PostRequest";
import { GetRequest } from "../../API/Getrequest";
import Navbar from "../../Components/Sidebar/Navbar";
import UploadImage from "../../Components/UploadImage/UploadImage";
import { DatePicker, Space } from "antd";
import MutlipleTextEditor from "../College-backend/AddCollege/Components/MutlipleTextEditor";
import MutlipleTextEditorForUpdate from "../College-backend/EditCollege/Components/Multieditor";
import TextInput from "../../Components/TextInput/TextInput";
import Dropdown from "../../Components/Dropdown/Dropdown";

const AddArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [backendData, setBackendData] = useState({
    newscategory: null,
  });
  const [description, setDescription] = useState("");
  const [latestNewImage, setLatestNewsImage] = useState("");
  const [articleValue, setArticleValue] = useState({
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
    TrendingArticle: false,
  });

  // handleing the data and adding to the main object
  const onchange = (date, dateString) => {
    setArticleValue((prevInput) => ({
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
        setArticleValue((prevState) => ({
          ...prevState,
          Image: value.data.url,
        }));
      })
      .catch((err) => console.log(err));
  };

  // handling the text editor values
  const handleDescription = (content, editor) => {
    setArticleValue((prevState) => ({
      ...prevState,
      Description: content,
    }));
    setDescription(content);
  };

  // handle the input submit button
  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setArticleValue((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  // HANDLE INPUT CHANGE
  const handleTrendingArticleCheckboxChange = (event) => {
    setArticleValue((prevState) => ({
      ...prevState,
      TrendingArticle: event.target.checked,
    }));
  };

  // Handling the submit button of form
  const HandleLatestNewsSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(articleValue).some(
      (x) =>
        (typeof x === "string" && x.trim() === "") ||
        (Array.isArray(x) && x.length === 0)
    );

    if (isEmpty) {
      alert("Please fill all the fields");
    } else if (id) {
      delete articleValue._id;
      delete articleValue.__v;
      PutRequest("article/updatearticle", { id, articleValue })
        .then((response) => {
          alert(response.data.message);
          navigate("/viewarticle");
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    } else {
      console.log(articleValue, "Latest New Value");
      PostRequest("article/addarticle", articleValue)
        .then((res) => alert(res.data.message))
        .catch((err) => console.log(err));
      window.location.reload();
    }
  };

  useEffect(() => {
    if (id) {
      GetRequest(`article/getarticlebyid/${id}`)
        .then((res) => setArticleValue(res.data.article))
        .catch((err) => console.log(err));
    }
  }, [id]);

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
          <h1>Add Article</h1>
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
            value={articleValue.title}
            onChange={handleInputChanges}
          />
          <Dropdown
            name={"Category"}
            selectArray={newCategoryArray}
            labelvalue={"Category"}
            value={articleValue.Category}
            onchange={handleInputChanges}
          />
          <TextInput
            name={"ShortDescription"}
            placeholdertext={"Enter Short Desc"}
            labeltext={"Short Desciption"}
            value={articleValue.ShortDescription}
            onChange={handleInputChanges}
          />
          <TextInput
            name={"SlugUrl"}
            placeholdertext={"Enter Slug"}
            labeltext={"Slug URL"}
            value={articleValue.SlugUrl}
            onChange={handleInputChanges}
          />
          <TextInput
            name={"MetaTitle"}
            placeholdertext={"Enter Meta Title"}
            labeltext={"Meta Title"}
            value={articleValue.MetaTitle}
            onChange={handleInputChanges}
          />

          <TextInput
            name={"MetaDescription"}
            placeholdertext={"Enter Meta Description"}
            labeltext={"Meta Description"}
            value={articleValue.MetaDescription}
            onChange={handleInputChanges}
          />
          <TextInput
            name={"MetaKeywords"}
            placeholdertext={"Enter Meta Keyword"}
            labeltext={"Meta Keywords"}
            value={articleValue.MetaKeywords}
            onChange={handleInputChanges}
          />
          <div
            style={{
              width: "65%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label>Trending Article</label>
            <input
              type="checkbox"
              checked={articleValue.TrendingArticle}
              onChange={handleTrendingArticleCheckboxChange}
            />
          </div>

          <label>Describe in Details</label>

          {id ? (
            <MutlipleTextEditorForUpdate
              editorValue={"Description"}
              value={articleValue.Description}
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

export default AddArticle;
