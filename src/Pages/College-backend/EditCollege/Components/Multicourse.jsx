import React, { useEffect, useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { Select } from "antd";

const Multicourse = ({
  setCouSpeFeevalue,
  courseValue,
  SPECILIZATIONVALUE,
  COURSEVAL,
}) => {
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

  const [inputBoxes, setInputBoxes] = useState([]);

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
        box._id === id ? { ...box, [field]: value } : box
      )
    );
  };

  //   It Handle multiple select from input Tag...
  const options = ["CAT", "MAT", "CUET", "JEE", "UPSC", "PSC", "KUIT"].map(
    (option) => ({
      label: option,
      value: option,
    })
  );

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
      prevInputBoxes.filter((box) => box._id !== id)
    );
  };

  useEffect(() => {
    setInputBoxes(courseValue.slice(1));
    setsampleInputBox(courseValue[0]);
  }, [courseValue]);

  return (
    <>
      <div>
        <div className="course-specialization-div">
          <div className="main-single-input-div">
            <label>Course </label>
            <select
              className="add-college-dropdown"
              name="course"
              value={sampleInputBox?.course}
              onChange={handlesampleInputChange}
            >
              <option value="Choose State">Choose Course</option>
              {SPECILIZATIONVALUE.map((ele) => (
                <option value={ele.courseValue}>{ele.courseValue}</option>
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
              value={sampleInputBox?.specialization}
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
              value={sampleInputBox?.fees}
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
        {inputBoxes &&
          inputBoxes.length > 0 &&
          inputBoxes.map((inputBox) => (
            <div
              key={inputBox._id}
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
                    handleInputChange(inputBox._id, "course", e.target.value)
                  }
                >
                  <option value="Choose State">Choose Course</option>
                  {SPECILIZATIONVALUE.map((ele) => (
                    <option value={ele.courseValue}>{ele.courseValue}</option>
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
                  value={inputBox.specialization}
                  onChange={(value) => handleChange(value, inputBox._id)}
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
                    handleInputChange(inputBox._id, "fees", e.target.value)
                  }
                  style={{ height: "43px" }}
                />
              </div>
              <CiCircleMinus
                onClick={() => handleRemoveInputBox(inputBox._id)}
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
            SAVE ME BEFORE SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default Multicourse;
