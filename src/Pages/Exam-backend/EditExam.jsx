import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Sidebar/Navbar";
import { useParams } from "react-router-dom";
import { GetRequest } from "../../API/Getrequest";
import { Select } from "antd";
import { CloudinaryImg } from "../../API/Cloudinary";
import MutlipleTextEditor from "../College-backend/EditCollege/Components/Multieditor";
import { PutRequest } from "../../API/PutRequest";
import { useNavigate } from "react-router-dom";

const EditExam = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // MAIN USESTATE FOR EXAM EDIT INFO
  const [mainEditExamData, setMainEditExamData] = useState({
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

  const [editBackendData, setEditBackendData] = useState({
    entranceExam: null,
    courseValue: null,
  });

  // HANDLING MAIN TEXTEDITOR SECTION
  const [overview, setOverview] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [registration, setRegistration] = useState("");
  const [syllabus, setSyllabus] = useState("");
  const [pattern, setPattern] = useState("");

  //   HANDLING EDITOR VALUE HERE
  const handleOverview = (content, editor) => {
    setMainEditExamData((prevState) => ({
      ...prevState,
      examOverview: content,
    }));
    setOverview(content);
  };

  const handleEligibility = (content, editor) => {
    setMainEditExamData((prevState) => ({
      ...prevState,
      examEligibility: content,
    }));
    setEligibility(content);
  };

  const handleRegistration = (content, editor) => {
    setMainEditExamData((prevState) => ({
      ...prevState,
      examRegistration: content,
    }));
    setRegistration(content);
  };

  const handleSyllabus = (content, editor) => {
    setSyllabus(content);
    setMainEditExamData((prevState) => ({
      ...prevState,
      examSyllabus: content,
    }));
  };

  const handlePattern = (content, editor) => {
    setPattern(content);
    setMainEditExamData((prevState) => ({
      ...prevState,
      examPattern: content,
    }));
  };

  //   HANDLE ONCHANGE OF USESTATE
  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    // Update the state immediately
    setMainEditExamData((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  // HERE WE ADDING COUSES TO THE OBJECT
  const handleChangeCourseChange = (value) => {
    setMainEditExamData((prevState) => ({
      ...prevState,
      courses: [...value],
    }));
  };

  const handleExamImageChange = (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "zww2fx8g");
    CloudinaryImg(data)
      .then((value) => {
        setMainEditExamData((prevState) => ({
          ...prevState,
          examLogo: value.data.url,
        }));
      })
      .catch((err) => console.log(err));
  };

  //   HANDLE SUBMIT BUTTON
  const handleInputSubmitButton = (e) => {
    e.preventDefault();
    delete mainEditExamData._id;
    delete mainEditExamData.__v;

    console.log(mainEditExamData, "MainEditExamData ");

    PutRequest("exam/updateingexam", { id, mainEditExamData })
      .then((response) => {
        alert(response.data.message);
        navigate("/viewexam");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  useEffect(() => {
    GetRequest(`exam/getexam/${id}`)
      .then((res) => setMainEditExamData(res.data.exam))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    const paths = ["attribute/getentranceexam", "attribute/getcourse"];
    Promise.all(paths.map((path) => GetRequest(path)))
      .then((responses) => {
        const data = responses.map((response) => response.data);
        setEditBackendData({
          entranceExam: data[0].allEntranceExam,
          courseValue: data[1].allCourses,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    setOverview(mainEditExamData.examOverview);
    setEligibility(mainEditExamData.examEligibility);
    setRegistration(mainEditExamData.examRegistration);
    setSyllabus(mainEditExamData.examSyllabus);
    setPattern(mainEditExamData.examPattern);
  }, [mainEditExamData]);

  if (mainEditExamData.examNameFullForm === "") {
    return <p>Loading Data....</p>;
  }

  const course_Options = editBackendData?.courseValue?.map((option) => ({
    id: option._id,
    label: option.coursesValue,
    value: option.coursesValue,
  }));

  return (
    <Navbar>
      <div className="main-add-college main-div-common-design">
        <h1>View Exam</h1>
        <div className="main-div-for-all-input">
          {/* MAIN INPUT TAG */}
          <div className="main-single-input-div">
            <label>Entrance Exam (F)</label>
            <select
              className="add-college-dropdown"
              name="examNameFullForm"
              value={mainEditExamData.examNameFullForm}
              onChange={handleInputChanges}
            >
              <option value="Choose State">Choose Exam</option>
              {editBackendData?.entranceExam?.map((ele) => (
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
              value={mainEditExamData.examNameShortForm}
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
              value={mainEditExamData.courses}
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
          editorValue={"Eligibility"}
          value={eligibility}
          onChange={handleEligibility}
        />
        <label style={{ marginBottom: "-2rem" }}>Registration</label>
        <MutlipleTextEditor
          editorValue={"Registration"}
          value={registration}
          onChange={handleRegistration}
        />
        <label style={{ marginBottom: "-2rem" }}>Syllabus</label>
        <MutlipleTextEditor
          editorValue={"Syllabus"}
          value={syllabus}
          onChange={handleSyllabus}
        />
        <label style={{ marginBottom: "-2rem" }}>Pattern</label>
        <MutlipleTextEditor
          editorValue={"Pattern"}
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

export default EditExam;
