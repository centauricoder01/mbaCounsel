import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Sidebar/Navbar";
import "./AddCollege.css";
import MultipleInput from "./Components/MultipleInput";
import { Select } from "antd";
import CourseSpecilzationFeesComponent from "./Components/CourseSpecilzationFeesComponent";
import MutlipleTextEditor from "./Components/MutlipleTextEditor";
import { CloudinaryImg } from "../../../API/Cloudinary";
import { GetRequest } from "../../../API/Getrequest";
import { PostRequest } from "../../../API/PostRequest";

const College = () => {
  const [pdf, setPdf] = useState(null);

  // HANDLING EDITOR START FROM HERE
  // USESTATE
  const [overview, setOverview] = useState("");
  const [programs, setPrograms] = useState("");
  const [admission, setAdmission] = useState("");
  const [placement, setPlacement] = useState("");
  const [campusLife, setCampusLife] = useState("");

  // USESTATE FOR GETTING THE VALUE FROM THE BACKEND
  const [backendData, setBackendData] = useState({
    state: null,
    city: null,
    accredition: null,
    affiliation: null,
    entranceexam: null,
    course: null,
    specilization: null,
  });

  const [selectedCity, setSelectedCity] = useState([]);

  // HANDLING USESTATE
  const handleOverview = (content, editor) => {
    setOverview(content);
  };
  const handlePrograms = (content, editor) => {
    setPrograms(content);
  };
  const handleAdmission = (content, editor) => {
    setAdmission(content);
  };
  const handlePlacement = (content, editor) => {
    setPlacement(content);
  };
  const handleCampusLife = (content, editor) => {
    setCampusLife(content);
  };

  // MAIN INPUT HADLING START FROM HERE
  const [catchinput, setCatchInput] = useState({
    collegeName: "",
    collegeLogo: "",
    collegePhoto: "",
    collegeBroucher: "broucherLink",
    collegeState: "",
    collegeCity: "",
    collegeEstYear: "",
    collegeType: "",
    collegeAccreditation: [],
    collegeAffiliation: "",
    collegeEntranceExam: [],
    collegeAvgPackage: "",
    collegeRating: "",
    collegecoursespecilzationfees: [],
    collegeOverview: "",
    collegePrograms: "",
    collegeAdmission: "",
    collegePlacement: "",
    collegeCampusLife: "",
    collegeCollegeUrl: "",
    collegeTitle: "",
    collegeKeyDecription: "",
    collegeMetaDescription: "",
    collegefaqs: [],
    collegeFeatured: false,
    collegeRecommended: false,
  });

  // IMAGE HANDLING FOR COLLEGE LOGO AND UPDATING THE DATA IN THE OBJECT
  const handleCollegeLogoChange = (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "zww2fx8g");
    CloudinaryImg(data)
      .then((value) => {
        setCatchInput((prevState) => ({
          ...prevState,
          collegeLogo: value.data.url,
        }));
      })
      .catch((err) => console.log(err));
  };

  // IMAGE HANDING FOR COLLEGE PHOTO AND UPDATING THE DATA IN THE OBJECT
  const handleCollegePhotoChange = (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "zww2fx8g");
    CloudinaryImg(data)
      .then((value) => {
        setCatchInput((prevState) => ({
          ...prevState,
          collegePhoto: value.data.url,
        }));
      })
      .catch((err) => console.log(err));
  };

  // PDF HANDLING PART
  const handlePdfChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPdf(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  // HANDLING RADIO BUTTON
  const handleRadioChange1 = () => {
    setCatchInput((prevState) => ({
      ...prevState,
      collegeFeatured: true,
    }));
  };

  const handleRadioChange2 = () => {
    setCatchInput((prevState) => ({
      ...prevState,
      collegeRecommended: true,
    }));
  };

  // HERE WE ADDING ACCREDITATION TO THE OBJECT
  const handleChangeAccreditation = (value) => {
    setCatchInput((prevState) => ({
      ...prevState,
      collegeAccreditation: [...value],
    }));
  };

  // HERE WE ARE ADDING COLLEGE ENTRANCE EXAM TO THE OBJECT
  const handleChangeEntranceExam = (value) => {
    setCatchInput((prevState) => ({
      ...prevState,
      collegeEntranceExam: [...value],
    }));
  };

  // HANDLING THE ADDINPUT FUNCTION
  const handleInputChanges = (e) => {
    const { name, value } = e.target;

    // Update the state immediately
    setCatchInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));

    if (name === "collegeState") {
      setSelectedCity((prevCities) =>
        backendData.city.filter((city) => city.stateValue === value)
      );
    }
  };
  // Filter products based on the selected category

  // HERE WE ADD COURSE, SPECILIZATION AND FEES TO THE OBJECT
  const addCourseSpecilizationFees = (val) => {
    setCatchInput((prevState) => ({
      ...prevState,
      collegecoursespecilzationfees: val,
    }));
  };

  // HERE WE ARE ADDING FAQS TO THE OBJECT
  const addFaqs = (val) => {
    setCatchInput((prevState) => ({
      ...prevState,
      collegefaqs: val,
    }));
  };

  // It handle the editor value that we write
  const handleditorprint = () => {
    if (overview !== "") {
      setCatchInput((prevState) => ({
        ...prevState,
        collegeOverview: overview,
      }));
    }
    if (programs !== "") {
      setCatchInput((prevState) => ({
        ...prevState,
        collegePrograms: programs,
      }));
    }
    if (admission !== "") {
      setCatchInput((prevState) => ({
        ...prevState,
        collegeAdmission: admission,
      }));
    }
    if (placement !== "") {
      setCatchInput((prevState) => ({
        ...prevState,
        collegePlacement: placement,
      }));
    }
    if (campusLife !== "") {
      setCatchInput((prevState) => ({
        ...prevState,
        collegeCampusLife: campusLife,
      }));
    }
  };

  // MAIN SUBMIT FUNCTION START FROM HERE
  const handleInputSubmitButton = (e) => {
    e.preventDefault();
    PostRequest("college/addcollege", catchinput)
      .then((res) => alert(res.data.message))
      .catch((err) => alert(err));
    window.location.reload();
  };

  useEffect(() => {
    const paths = [
      "attribute/getstate",
      "attribute/getcity",
      "attribute/getaccredition",
      "attribute/getaffiliation",
      "attribute/getentranceexam",
      "attribute/getcourse",
      "attribute/getspecilization",
    ];

    Promise.all(paths.map((path) => GetRequest(path)))
      .then((responses) => {
        const data = responses.map((response) => response.data);
        setBackendData({
          state: data[0].allstate,
          city: data[1].allCity,
          accredition: data[2].allAccredition,
          affiliation: data[3].allAffiliation,
          entranceexam: data[4].allEntranceExam,
          course: data[5].allCourses,
          specilization: data[6].allspecilization,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (backendData.state === null) {
    return <p>Loading Data...</p>;
  }

  //   It Handle multiple select from input Tag for Accreditation.
  const accreditation_Options = backendData.accredition.map((option) => ({
    label: option.accreditionValue,
    value: option.accreditionValue,
  }));

  // HERE WE ARE ADDING MULTIPLE SELECT FROM THE INPUT TAG IN ENTRANCE EXAM
  const Entrance_Exam_Options = backendData.entranceexam.map((option) => ({
    label: option.entranceExamShortForm,
    value: option.entranceExamShortForm,
  }));

  console.log(catchinput);
  return (
    <Navbar>
      <div className="main-add-college main-div-common-design">
        <h1>Add College</h1>
        {/* INPUT TAG PART STARTED FROM HERE */}
        <div className="main-div-for-all-input">
          {/* MAIN INPUT TAG */}
          <div className="main-single-input-div">
            <label>College Name</label>
            <input
              type="text"
              placeholder="Enter College Name"
              name="collegeName"
              value={catchinput.collegeName}
              onChange={handleInputChanges}
              className="add-college-input"
              style={{ height: "43px" }}
            />
          </div>
          <div className="main-single-input-div">
            <label>College Logo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleCollegeLogoChange}
              className="add-college-input"
              style={{ paddingTop: "10px" }}
            />
          </div>
          <div className="main-single-input-div">
            <label>College Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleCollegePhotoChange}
              className="add-college-input"
              style={{ paddingTop: "10px" }}
            />
          </div>
          <div className="main-single-input-div">
            <label>College Broucher</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handlePdfChange}
              className="add-college-input"
              style={{ paddingTop: "10px" }}
            />
          </div>
          <div className="main-single-input-div">
            <label>State</label>
            <select
              className="add-college-dropdown"
              name="collegeState"
              value={catchinput.collegeState}
              onChange={handleInputChanges}
            >
              <option value="Choose State">Choose State</option>
              {backendData.state.map((ele) => (
                <option value={ele.stateValue}>{ele.stateValue}</option>
              ))}
            </select>
          </div>
          {/* MAIN DROPDOWN INPUT TAG */}
          <div className="main-single-input-div">
            <label>City</label>
            <select
              className="add-college-dropdown"
              name="collegeCity"
              value={catchinput.collegeCity}
              onChange={handleInputChanges}
            >
              <option value="Choose State">Choose City</option>
              {selectedCity[0]?.cityValue.map((ele) => (
                <option value={ele}>{ele}</option>
              ))}
            </select>
          </div>
          {/* MAIN DROPDOWN INPUT TAG */}
          <div className="main-single-input-div">
            <label>College Type</label>
            <select
              className="add-college-dropdown"
              name="collegeType"
              value={catchinput.collegeType}
              onChange={handleInputChanges}
            >
              <option value="Choose State">Choose type</option>
              <option value="Gov">Gov</option>
              <option value="Private">Private</option>
              <option value="AUTONOMOUS">AUTONOMOUS</option>
            </select>
          </div>
          <div className="main-single-input-div">
            <label>Est Year</label>
            <input
              type="text"
              placeholder="Est Year"
              name="collegeEstYear"
              className="add-college-input"
              style={{ height: "43px" }}
              value={catchinput.collegeEstYear}
              onChange={handleInputChanges}
            />
          </div>
          <div className="main-single-input-div">
            {/* Add multi select here */}
            <label>Accreditation</label>
            <Select
              mode="tags"
              style={{
                width: "100%",
                minHeight: "43px",
              }}
              placeholder="Enter Accreditation"
              onChange={handleChangeAccreditation}
              options={accreditation_Options}
            />
          </div>
          <div className="main-single-input-div">
            <label>Affiliation</label>
            <select
              className="add-college-dropdown"
              name="collegeAffiliation"
              value={catchinput.collegeAffiliation}
              onChange={handleInputChanges}
            >
              <option value="Choose State">Choose Affiliation</option>
              {backendData.affiliation.map((ele) => (
                <option value={ele.affiliationValue}>
                  {ele.affiliationValue}
                </option>
              ))}
            </select>
          </div>
          {/* Add multi select here */}
          <div className="main-single-input-div">
            <label>Entrance Exam </label>
            <Select
              mode="tags"
              style={{
                width: "100%",
                minHeight: "43px",
              }}
              placeholder="Tags Mode"
              onChange={handleChangeEntranceExam}
              options={Entrance_Exam_Options}
            />
          </div>
          <div className="main-single-input-div">
            <label>Avg Package</label>
            <input
              type="text"
              placeholder="Avg Package"
              name="collegeAvgPackage"
              value={catchinput.collegeAvgPackage}
              onChange={handleInputChanges}
              className="add-college-input"
              style={{ height: "43px" }}
            />
          </div>
          <div className="main-single-input-div">
            <label>Rating</label>
            <input
              type="text"
              placeholder="Rating"
              className="add-college-input"
              name="collegeRating"
              value={catchinput.collegeRating}
              onChange={handleInputChanges}
              style={{ height: "43px" }}
            />
          </div>
        </div>

        {/* MAIN COURSE AND SPECILIZATION START FROM HERE */}

        <CourseSpecilzationFeesComponent
          setCouSpeFeevalue={addCourseSpecilizationFees}
          COURSEVAL={backendData.course}
          SPECILIZATIONVALUE={backendData.specilization}
        />
        {/* TEXT EDITOR PART START FROM HERE */}
        <label style={{ marginBottom: "-2rem" }}>Overview</label>
        <MutlipleTextEditor
          editorValue={"Overview"}
          value={overview}
          onChange={handleOverview}
        />
        <label style={{ marginBottom: "-2rem" }}>Programs</label>
        <MutlipleTextEditor
          editorValue={"Programs"}
          value={programs}
          onChange={handlePrograms}
        />
        <label style={{ marginBottom: "-2rem" }}>Admission</label>
        <MutlipleTextEditor
          editorValue={"Admission"}
          value={admission}
          onChange={handleAdmission}
        />
        <label style={{ marginBottom: "-2rem" }}>Placement</label>
        <MutlipleTextEditor
          editorValue={"Placement"}
          value={placement}
          onChange={handlePlacement}
        />
        <label style={{ marginBottom: "-2rem" }}>Campus Life</label>
        <MutlipleTextEditor
          editorValue={"CampusLife"}
          value={campusLife}
          onChange={handleCampusLife}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              fontSize: "1rem",
              padding: "1rem",
              border: "none",
              marginBottom: "1rem",
              borderRadius: "1rem",
              cursor: "pointer",
            }}
            onClick={handleditorprint}
          >
            SAVE ME BEFORE SUBMIT
          </button>
        </div>
        {/* REST PART HAS BEEN STARTED FROM HERE  */}
        <h2 style={{ marginBottom: "-2rem" }}>Add FAQ</h2>
        <div>
          <MultipleInput getfaqvalue={addFaqs} />
        </div>
        {/* SLUG URL ADDED FROM HERE  */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          <div className="main-single-input-div">
            <label>Slug Url</label>
            <input
              type="text"
              name="collegeCollegeUrl"
              value={catchinput.collegeCollegeUrl}
              onChange={handleInputChanges}
              placeholder="Enter College Name"
              className="add-college-input"
              style={{ height: "43px" }}
            />
          </div>
          <div className="main-single-input-div">
            <label>Title</label>
            <input
              type="text"
              name="collegeTitle"
              value={catchinput.collegeTitle}
              onChange={handleInputChanges}
              placeholder="Enter College Name"
              className="add-college-input"
              style={{ height: "43px" }}
            />
          </div>
          <div className="main-single-input-div">
            <label>Keywords</label>
            <textarea
              type="text"
              name="collegeKeyDecription"
              value={catchinput.collegeKeyDecription}
              onChange={handleInputChanges}
              placeholder="Enter College Name"
              className="add-college-input"
              style={{ height: "43px" }}
            />
          </div>
          <div className="main-single-input-div">
            <label>Meta Description</label>
            <input
              type="text"
              name="collegeMetaDescription"
              value={catchinput.collegeMetaDescription}
              onChange={handleInputChanges}
              placeholder="Enter College Name"
              className="add-college-input"
              style={{ height: "43px" }}
            />
          </div>
        </div>
        {/* RADIO BUTTON DIV START FROM HERE */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div>
            <label>
              <input
                type="radio"
                name="radio-group-1"
                value="true"
                // checked={selectedOption1 === "Option 2"}
                onChange={handleRadioChange1}
              />
              Featured
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="radio-group-2"
                value="true"
                // checked={selectedOption2 === "Option B"}
                onChange={handleRadioChange2}
              />
              Recommended
            </label>
          </div>
        </div>
        <button className="button-90" onClick={handleInputSubmitButton}>
          SUBMIT
        </button>
      </div>
    </Navbar>
  );
};

export default College;
