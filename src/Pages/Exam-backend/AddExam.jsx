import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Sidebar/Navbar";
import { Select } from "antd";
import MutlipleTextEditor from "../College-backend/AddCollege/Components/MutlipleTextEditor";
import { GetRequest } from "../../API/Getrequest";
import { CloudinaryImg } from "../../API/Cloudinary";
import { PostRequest } from "../../API/PostRequest";

const AddExam = () => {
  // MAIN USESTATE FOR EXAM INFO
  const [allExamData, setAllExamData] = useState({
    examNameFullForm: "",
    examNameShortForm: "",
    courses: [],
    examLogo: "",
    // examPdf: "",
    // examWordFile: "",
    examOverview: "",
    examEligibility: "",
    examRegistration: "",
    examSyllabus: "",
    examPattern: "",
  });

  // HANDLING MAIN TEXTEDITOR SECTION
  const [overview, setOverview] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [registration, setRegistration] = useState("");
  const [syllabus, setSyllabus] = useState("");
  const [pattern, setPattern] = useState("");

  const [backendData, setBackendData] = useState({
    entranceExam: null,
    courseValue: null,
  });

  //   HANDLING EDITOR VALUE HERE
  const handleOverview = (content, editor) => {
    setAllExamData((prevState) => ({
      ...prevState,
      examOverview: content,
    }));
    setOverview(content);
  };

  const handleEligibility = (content, editor) => {
    setAllExamData((prevState) => ({
      ...prevState,
      examEligibility: content,
    }));
    setEligibility(content);
  };

  const handleRegistration = (content, editor) => {
    setAllExamData((prevState) => ({
      ...prevState,
      examRegistration: content,
    }));
    setRegistration(content);
  };

  const handleSyllabus = (content, editor) => {
    setSyllabus(content);
    setAllExamData((prevState) => ({
      ...prevState,
      examSyllabus: content,
    }));
  };

  const handlePattern = (content, editor) => {
    setPattern(content);
    setAllExamData((prevState) => ({
      ...prevState,
      examPattern: content,
    }));
  };

  //   HANDLE ONCHANGE OF USESTATE
  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    // Update the state immediately
    setAllExamData((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  // HERE WE ADDING COUSES TO THE OBJECT
  const handleChangeCourseChange = (value) => {
    setAllExamData((prevState) => ({
      ...prevState,
      courses: [...value],
    }));
  };

  // IMAGE HANDLING FOR COLLEGE LOGO AND UPDATING THE DATA IN THE OBJECT
  const handleExamImageChange = (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "zww2fx8g");
    CloudinaryImg(data)
      .then((value) => {
        setAllExamData((prevState) => ({
          ...prevState,
          examLogo: value.data.url,
        }));
      })
      .catch((err) => console.log(err));
  };

  //   HANDLE SUBMIT BUTTON
  const handleInputSubmitButton = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(allExamData).some(
      (x) =>
        (typeof x === "string" && x.trim() === "") ||
        (Array.isArray(x) && x.length === 0)
    );
    if (isEmpty) {
      alert("Please fill all the fields");
      console.log(allExamData);
    } else {
      PostRequest("exam/addexam", allExamData)
        .then((res) => alert(res.data.message))
        .catch((err) => alert(err));
      window.location.reload();
    }
  };

  useEffect(() => {
    const paths = ["attribute/getentranceexam", "attribute/getcourse"];
    Promise.all(paths.map((path) => GetRequest(path)))
      .then((responses) => {
        const data = responses.map((response) => response.data);
        setBackendData({
          entranceExam: data[0].allEntranceExam,
          courseValue: data[1].allCourses,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (backendData.courseValue === null) {
    return <p>Loading data...</p>;
  }

  //   It Handle multiple select from input Tag for Accreditation.
  const course_Options = backendData.courseValue.map((option) => ({
    label: option.coursesValue,
    value: option.coursesValue,
  }));

  return (
    <Navbar>
      <div className="main-add-college main-div-common-design">
        <h1>Add Exam</h1>
        <div className="main-div-for-all-input">
          {/* MAIN INPUT TAG */}
          <div className="main-single-input-div">
            <label>Entrance Exam (F)</label>
            <select
              className="add-college-dropdown"
              name="examNameFullForm"
              value={allExamData.examNameFullForm}
              onChange={handleInputChanges}
            >
              <option value="Choose State">Choose Exam</option>
              {backendData.entranceExam?.map((ele) => (
                <option key={ele._id} value={ele.entranceExamFullForm}>
                  {ele.entranceExamFullForm}
                </option>
              ))}
            </select>
          </div>
          <div className="main-single-input-div">
            <label>Entrance Exam (S)</label>
            <input
              type="text"
              placeholder="Short Form"
              name="examNameShortForm"
              value={allExamData.examNameShortForm}
              onChange={handleInputChanges}
              className="add-college-input"
              style={{ height: "43px" }}
            />
          </div>
          <div className="main-single-input-div">
            <label>Add Course</label>
            <Select
              mode="tags"
              style={{
                width: "100%",
                minHeight: "43px",
              }}
              placeholder="Enter Accreditation"
              onChange={handleChangeCourseChange}
              options={course_Options}
            />
          </div>
          <div className="main-single-input-div">
            <label>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleExamImageChange}
              className="add-college-input"
              style={{ paddingTop: "10px" }}
            />
          </div>
          <div className="main-single-input-div">
            <label>Upload PDF</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleInputChanges}
              className="add-college-input"
              style={{ paddingTop: "10px" }}
            />
          </div>
        </div>

        {/* MAIN EDITOR SECTION START FROM HERE */}

        <label style={{ marginBottom: "-2rem" }}>Overview</label>
        <MutlipleTextEditor
          editorValue={"Overview"}
          value={overview}
          onChange={handleOverview}
        />
        <label style={{ marginBottom: "-2rem" }}>Eligibility</label>
        <MutlipleTextEditor
          editorValue={"Overview"}
          value={eligibility}
          onChange={handleEligibility}
        />
        <label style={{ marginBottom: "-2rem" }}>Registration</label>
        <MutlipleTextEditor
          editorValue={"Overview"}
          value={registration}
          onChange={handleRegistration}
        />
        <label style={{ marginBottom: "-2rem" }}>Syllabus</label>
        <MutlipleTextEditor
          editorValue={"Overview"}
          value={syllabus}
          onChange={handleSyllabus}
        />
        <label style={{ marginBottom: "-2rem" }}>Pattern</label>
        <MutlipleTextEditor
          editorValue={"Overview"}
          value={pattern}
          onChange={handlePattern}
        />
        {/* SUBMIT  */}
        <button className="button-90" onClick={handleInputSubmitButton}>
          SUBMIT
        </button>
      </div>
    </Navbar>
  );
};

export default AddExam;
