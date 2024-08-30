import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { Select } from "antd";

const CourseSpecilzationFeesComponent = ({
  setCouSpeFeevalue,
  COURSEVAL,
  SPECILIZATIONVALUE,
}) => {
  // THIS IS ONE INPUT TAG
  const [sampleInputBox, setsampleInputBox] = useState({
    course: "",
    specialization: [],
    fees: "",
  });

  const handlesampleInputChange = (e) => {
    setsampleInputBox({
      ...sampleInputBox,
      [e.target.name]: e.target.value,
    });
  };

  // THIS IS MULTI INPUT BOX
  const [inputBoxes, setInputBoxes] = useState([
    { id: 1, course: "", specialization: "", fees: "" },
  ]);

  const handleAddInputBox = () => {
    setInputBoxes((prevInputBoxes) => [
      ...prevInputBoxes,
      {
        id: prevInputBoxes.length + 1,
        course: "",
        specialization: "",
        fees: "",
      },
    ]);
  };

  const handleInputChange = (id, field, value) => {
    setInputBoxes((prevInputBoxes) =>
      prevInputBoxes.map((box) =>
        box.id === id ? { ...box, [field]: value } : box
      )
    );
  };

  //   It Handle multiple select from input Tag...
  const options = SPECILIZATIONVALUE[0].specilizationValue.map((option) => ({
    label: option,
    value: option,
  }));

  const handleSingleMultiSelect = (value) => {
    setsampleInputBox({
      ...sampleInputBox,
      specialization: [...value],
    });
  };

  const handleChange = (value, id) => {
    handleInputChange(id, "specialization", value);
  };

  // FUNCTION USED TO REMOVE INPUT TAG
  const handleRemoveInputBox = (id) => {
    setInputBoxes((prevInputBoxes) =>
      prevInputBoxes.filter((box) => box.id !== id)
    );
  };

  return (
    <>
      <div>
        <div className="course-specialization-div">
          <div className="main-single-input-div">
            <label>Course </label>
            <select
              className="add-college-dropdown"
              name="course"
              value={sampleInputBox.course}
              onChange={handlesampleInputChange}
            >
              <option value="Choose State">Choose Course</option>
              {COURSEVAL.map((ele) => (
                <option value={ele.coursesValue}>{ele.coursesValue}</option>
              ))}
            </select>
          </div>

          <div className="main-single-input-div">
            <label>Specialization</label>
            <Select
              mode="tags"
              style={{
                width: "100%",
                height: "43px",
              }}
              placeholder="Enter Specialization"
              onChange={handleSingleMultiSelect}
              options={options}
            />
          </div>

          <div className="main-single-input-div">
            <label>Fees</label>
            <input
              type="text"
              placeholder="Enter Fees"
              className="add-college-input"
              name="fees"
              value={sampleInputBox.fees}
              onChange={handlesampleInputChange}
              style={{ height: "43px" }}
            />
          </div>
          <div>
            <CiCirclePlus
              onClick={handleAddInputBox}
              size={60}
              className="circleplus-button"
            />
          </div>
        </div>
        {inputBoxes.map((inputBox) => (
          <div
            key={inputBox.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              width: "100%",
              marginTop: "2rem",
              justifyContent: "space-between",
            }}
          >
            <div className="main-single-input-div">
              <label>Course</label>
              <select
                className="add-college-dropdown"
                value={inputBox.course}
                onChange={(e) =>
                  handleInputChange(inputBox.id, "course", e.target.value)
                }
              >
                <option value="Choose State">Choose Course</option>
                {COURSEVAL.map((ele) => (
                  <option value={ele.coursesValue}>{ele.coursesValue}</option>
                ))}
              </select>
            </div>

            <div className="main-single-input-div">
              <label>Specialization </label>
              <Select
                mode="tags"
                style={{
                  width: "100%",
                  height: "43px",
                }}
                placeholder="Enter Specialization"
                onChange={(value) => handleChange(value, inputBox.id)}
                options={options}
              />
            </div>

            <div className="main-single-input-div">
              <label>Fees</label>
              <input
                type="text"
                placeholder="Enter Fees"
                className="add-college-input"
                value={inputBox.fees}
                onChange={(e) =>
                  handleInputChange(inputBox.id, "fees", e.target.value)
                }
                style={{ height: "43px" }}
              />
            </div>
            <CiCircleMinus
              onClick={() => handleRemoveInputBox(inputBox.id)}
              size={50}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
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
            onClick={() => {
              console.log([...inputBoxes, sampleInputBox]);
              setCouSpeFeevalue([...inputBoxes, sampleInputBox]);
            }}
          >
            SAVE ME BEFORE POSTING
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseSpecilzationFeesComponent;
