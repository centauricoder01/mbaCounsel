import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Sidebar/Navbar";
import TextInput from "../../Components/TextInput/TextInput";
import Dropdown from "../../Components/Dropdown/Dropdown";
import CourseTextEditor from "../College-backend/EditCollege/Components/Multieditor";
import MultipleInput from "../College-backend/AddCollege/Components/MultipleInput";
import MultiFaqEditor from "../College-backend/EditCollege/Components/multifaqs";
import { useNavigate, useParams } from "react-router-dom";
import { GetRequest } from "../../API/Getrequest";
import { PostRequest } from "../../API/PostRequest";
import { PutRequest } from "../../API/PutRequest";

const AddCourses = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [detailedCoursesValue, setDetailedCoursesValue] = useState({
    courseTitle: "",
    course: "",
    specialization: "",
    overview: "",
    salientFeatures: "",
    admission: "",
    syllabus: "",
    futureScope: "",
    faqs: "",
    slugUrl: "",
    metaUrl: "",
    metaDescription: "",
    metaKeywords: "",
    trendingCourses: true,
  });

  const [backendData, setBackendData] = useState({
    entranceExam: null,
    courseValue: null,
    specilization: null,
  });

  const handleChangeOfDetailedCoursesValue = (e) => {
    const { name, value } = e.target;
    setDetailedCoursesValue((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  // HANDLE OVERVIEW SECTION
  const handleCourseOverview = (content, editor) => {
    setDetailedCoursesValue((prevState) => ({
      ...prevState,
      overview: content,
    }));
  };

  // HANDLE SALIENT FEATURES
  const handleCourseSalientFeatures = (content, editor) => {
    setDetailedCoursesValue((prevState) => ({
      ...prevState,
      salientFeatures: content,
    }));
  };
  // HANDLE SALIENT FEATURES
  const handleCourseAdmission = (content, editor) => {
    setDetailedCoursesValue((prevState) => ({
      ...prevState,
      admission: content,
    }));
  };
  // HANDLE SALIENT FEATURES
  const handleCourseSyllabus = (content, editor) => {
    setDetailedCoursesValue((prevState) => ({
      ...prevState,
      syllabus: content,
    }));
  };
  // HANDLE SALIENT FEATURES
  const handleCourseFutureScope = (content, editor) => {
    setDetailedCoursesValue((prevState) => ({
      ...prevState,
      futureScope: content,
    }));
  };

  // HERE I AM HANDELING THE FAQ VALUES
  const addCourseFaqs = (val) => {
    setDetailedCoursesValue((prevState) => ({
      ...prevState,
      faqs: val,
    }));
  };

  const handleCheckboxChange = (event) => {
    setDetailedCoursesValue((prevState) => ({
      ...prevState,
      trendingCourses: event.target.checked,
    }));
  };

  const HandleLatestCourseSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(detailedCoursesValue).some(
      (x) =>
        (typeof x === "string" && x.trim() === "") ||
        (Array.isArray(x) && x.length === 0)
    );
    if (isEmpty) {
      alert("Please fill all the fields");
      console.log(detailedCoursesValue);
    } else if (id) {
      console.log(detailedCoursesValue, "Detailed Course Value");
      delete detailedCoursesValue._id;
      delete detailedCoursesValue.__v;
      PutRequest("course/detailed-courses", { id, detailedCoursesValue })
        .then((response) => {
          alert(response.data.message);
          navigate("/viewallcourses");
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    } else {
      PostRequest("course/detailed-courses", detailedCoursesValue)
        .then((res) => alert(res.data.message))
        .catch((err) => console.log(err));
      window.location.reload();
      console.log(detailedCoursesValue, "detailedCoursesValue");
    }
  };

  useEffect(() => {
    const paths = ["attribute/getcourse", "attribute/getspecilization"];
    Promise.all(paths.map((path) => GetRequest(path)))
      .then((responses) => {
        const data = responses.map((response) => response.data);
        setBackendData({
          courseValue: data[0].allCourses,
          specilization: data[1].allspecilization,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    if (id) {
      GetRequest(`course/detailed-courses/${id}`)
        .then((res) => setDetailedCoursesValue(res.data.courses))
        .catch((err) => console.log(err));
    }
  }, [id]);

  if (backendData.courseValue === null) {
    return <p>Loading....</p>;
  }

  let courseValue = backendData?.courseValue?.map((obj) => obj.coursesValue);

  let specilization = [].concat(
    ...backendData?.specilization?.map((obj) => obj.specilizationValue)
  );

  return (
    <Navbar>
      <div className="main-add-college main-div-common-design">
        <form
          className="main-master-div-form"
          style={{ width: "100%" }}
          onSubmit={HandleLatestCourseSubmit}
        >
          <h1>Add course Details</h1>
          <TextInput
            name={"courseTitle"}
            placeholdertext={"Enter Title"}
            labeltext={"course Title"}
            value={detailedCoursesValue.courseTitle}
            onChange={handleChangeOfDetailedCoursesValue}
          />
          <Dropdown
            name={"course"}
            selectArray={courseValue}
            labelvalue={"course"}
            value={detailedCoursesValue.course}
            onchange={handleChangeOfDetailedCoursesValue}
          />
          <Dropdown
            name={"specialization"}
            selectArray={specilization}
            labelvalue={"specialization"}
            value={detailedCoursesValue.specialization}
            onchange={handleChangeOfDetailedCoursesValue}
          />
          <label>overview</label>
          <CourseTextEditor
            editorValue={"overview"}
            value={detailedCoursesValue.overview}
            onChange={handleCourseOverview}
          />
          <label>salient Features</label>
          <CourseTextEditor
            editorValue={"salientFeatures"}
            value={detailedCoursesValue.salientFeatures}
            onChange={handleCourseSalientFeatures}
          />
          <label>admission</label>
          <CourseTextEditor
            editorValue={"admission"}
            value={detailedCoursesValue.admission}
            onChange={handleCourseAdmission}
          />
          <label>syllabus</label>
          <CourseTextEditor
            editorValue={"syllabus"}
            value={detailedCoursesValue.syllabus}
            onChange={handleCourseSyllabus}
          />
          <label>Future Scope</label>
          <CourseTextEditor
            editorValue={"futureScope"}
            value={detailedCoursesValue.futureScope}
            onChange={handleCourseFutureScope}
          />
          <h2>Add FAQ</h2>
          <div>
            {id ? (
              <MultiFaqEditor
                getfaqvalue={addCourseFaqs}
                faqvalue={detailedCoursesValue.faqs}
              />
            ) : (
              <MultipleInput getfaqvalue={addCourseFaqs} />
            )}
          </div>
          <TextInput
            name={"slugUrl"}
            placeholdertext={"Slug"}
            labeltext={"Slug URL"}
            value={detailedCoursesValue.slugUrl}
            onChange={handleChangeOfDetailedCoursesValue}
          />
          <TextInput
            name={"metaUrl"}
            placeholdertext={"Url"}
            labeltext={"Meta URL"}
            value={detailedCoursesValue.metaUrl}
            onChange={handleChangeOfDetailedCoursesValue}
          />

          <TextInput
            name={"metaDescription"}
            placeholdertext={"description"}
            labeltext={"Meta Description"}
            value={detailedCoursesValue.metaDescription}
            onChange={handleChangeOfDetailedCoursesValue}
          />
          <TextInput
            name={"metaKeywords"}
            placeholdertext={"Keywords"}
            labeltext={"Meta Keywords"}
            value={detailedCoursesValue.metaKeywords}
            onChange={handleChangeOfDetailedCoursesValue}
          />

          <div
            style={{
              width: "60%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label>Trending course</label>
            <input
              type="checkbox"
              checked={detailedCoursesValue.trendingCourses}
              onChange={handleCheckboxChange}
            />
          </div>

          <button className="button-19" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Navbar>
  );
};

export default AddCourses;
