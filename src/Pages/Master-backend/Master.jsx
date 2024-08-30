import React, { useState } from "react";
import Navbar from "../../Components/Sidebar/Navbar";
import "./Master.css";
import { Modal, message, Popconfirm } from "antd";
import UploadImage from "../../Components/UploadImage/UploadImage";
import Button from "../../Components/Button/Button";
import { Select } from "antd";

const options = [];

const Master = ({
  heading,
  label,
  placeHolder,
  dummytable,
  dropdownLabel,
  dropdown,
  tablelabelone,
  tablelabeltwo,
  multiselectlabel,
  icons,
  secondlabel,
  secondplaceholder,
  twoinputtag,
  EditFunc,
  DeleteFunc,
  PostFunc,
  tabletextone,
  tabletexttwo,
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ObjectValue, setObjectValue] = useState({
    imageVal: "",
    inputValue: "",
    dropdownValue: "",
    multiselectValue: "",
    secondplaceholder: "",
  });

  // THIS IS WHERE I AM HANDING MULTISELECT
  const handlechange = (value) => {
    setObjectValue({
      ...ObjectValue,
      multiselectValue: value,
    });
  };

  // THIS IS TO HANDLE THE VALUE CHANGE
  const handleChange = (e) => {
    setObjectValue({
      ...ObjectValue,
      [e.target.name]: e.target.value,
    });
  };

  // THIS IS TO HANDLE FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    PostFunc(ObjectValue);
  };

  // Edit logic are being handled over here
  const showModal = (id) => {
    localStorage.setItem("row_id", JSON.stringify(id));
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const ID = JSON.parse(localStorage.getItem("row_id"));
    EditFunc(ObjectValue, ID);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Delete logic are being handled here
  const confirm = (e) => {
    DeleteFunc(e);
  };

  const cancel = (e) => {
    message.error("Click on No");
  };

  // HANDLING IMAGE FUNCTION
  const handleImageUpload = (event) => {
    const fileValue = event.target.files[0];
    if (!fileValue.type.startsWith("image/")) {
      alert("Please upload an image file");
    } else {
      setImageSrc(URL.createObjectURL(fileValue));
      setObjectValue({
        ...ObjectValue,
        imageVal: event.target.files[0],
      });
    }
  };

  return (
    <Navbar>
      <div className="main-div-common-design">
        <form className="main-master-div-form" onSubmit={handleSubmit}>
          <h1>{heading}</h1>

          {/* THIS IS FOR DROPDOWN SECTION  */}
          {dropdown ? (
            <div class="dropdown">
              <label>{dropdownLabel} :</label>
              <select
                name="dropdownValue"
                onChange={handleChange}
                value={ObjectValue.dropdownValue}
              >
                <option value="Choose Options">Choose Option</option>
                {dropdown?.map((ele) => (
                  <option value={ele} key={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
          {secondlabel ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>{secondlabel} :</label>
              <input
                type="text"
                placeHolder={secondplaceholder}
                name="secondplaceholder"
                onChange={handleChange}
                value={ObjectValue.secondplaceholder}
              />
            </div>
          ) : null}
          {/* THIS IS FOR UPLOAD IMAGE SECTION */}
          {icons ? (
            <UploadImage handleUpload={handleImageUpload} value={imageSrc} />
          ) : null}
          {/* THIS IS FOR SECOND INPUT DIV THAT WILL BE CREATED CONDITIONALLY  */}
          {label ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>{label} :</label>
              <input
                type="text"
                placeHolder={placeHolder}
                name="inputValue"
                onChange={handleChange}
                value={ObjectValue.inputValue}
              />
            </div>
          ) : null}

          {/* THIS IS TO MULTI INPUT TAG */}
          {multiselectlabel ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>{multiselectlabel} :</label>
              <Select
                mode="tags"
                size={"middle"}
                placeholder="Please select"
                defaultValue={[]}
                onChange={handlechange}
                style={{
                  width: "70%",
                }}
                options={options}
              />
            </div>
          ) : null}

          {/* HERE I HAVE INCLUDED SUBMIT BUTTON  */}
          <Button />
        </form>

        {/* TABLE START FROM HERE  */}
        <div className="main-master-show-data-div">
          <h1>All {label}</h1>
          <table className="styled-table">
            <thead>
              <tr>
                <th>ID</th>
                {icons ? <th>{icons}</th> : null}
                {tabletextone ? <th>{tabletextone}</th> : null}
                {label ? <th>{label}</th> : null}
                {tablelabeltwo ? <th>{tablelabeltwo}</th> : null}
                {tablelabelone ? <th>{tablelabelone}</th> : null}
                {tabletexttwo ? <th>{tabletexttwo}</th> : null}
                {secondlabel ? <th>{secondlabel}</th> : null}
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {dummytable.map((row, index) => (
                <tr key={row._id}>
                  <td>{index + 1}</td>
                  {row.accreditionValue ? (
                    <td>{row.accreditionValue}</td>
                  ) : null}
                  {row.affiliationValue ? (
                    <td>{row.affiliationValue}</td>
                  ) : null}
                  {row.stateValue ? <td>{row.stateValue}</td> : null}
                  {row.collegeTypeValue ? (
                    <td>{row.collegeTypeValue}</td>
                  ) : null}
                  {row.courseImage ? (
                    <td>
                      <img
                        src={row.courseImage}
                        alt={row.courseImage}
                        width={100}
                        height={70}
                      />
                    </td>
                  ) : null}
                  {row.coursesValue ? <td>{row.coursesValue}</td> : null}
                  {row.CategoryValue ? <td>{row.CategoryValue}</td> : null}
                  {row.entranceExamFullForm ? (
                    <td>{row.entranceExamFullForm}</td>
                  ) : null}
                  {row.entranceExamShortForm ? (
                    <td>{row.entranceExamShortForm}</td>
                  ) : null}
                  {row.cityValue ? (
                    <td>
                      {row.cityValue.map((ele) => (
                        <span>{ele}, </span>
                      ))}
                    </td>
                  ) : null}
                  {row.courseValue ? <td>{row.courseValue}</td> : null}
                  {row.specilizationValue ? (
                    <td>
                      {row.specilizationValue.map((ele) => (
                        <span>{ele}, </span>
                      ))}
                    </td>
                  ) : null}
                  <td>
                    <button
                      className="main-edit-button"
                      onClick={() => {
                        showModal(row._id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <Popconfirm
                      title="Delete the State"
                      description="Are you sure to delete this?"
                      onConfirm={() => {
                        confirm(row._id);
                      }}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <button className="main-delete-button">Delete</button>
                    </Popconfirm>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* UPDATE FUNCTION START FROM HERE */}

      <Modal
        title={heading}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className="main-master-div-form main-master-modal-form">
          {/* THIS IS FOR DROPDOWN SECTION  */}
          {dropdown ? (
            <div class="dropdown">
              <label>{dropdownLabel} :</label>
              <select
                name="dropdownValue"
                onChange={handleChange}
                value={ObjectValue.dropdownValue}
              >
                <option value="Choose Options">Choose Option</option>
                {dropdown?.map((ele) => (
                  <option value={ele} key={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
          {secondlabel ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>{secondlabel} :</label>
              <input
                type="text"
                placeHolder={secondplaceholder}
                name="secondplaceholder"
                onChange={handleChange}
                value={ObjectValue.secondplaceholder}
              />
            </div>
          ) : null}
          {/* THIS IS FOR UPLOAD IMAGE SECTION */}
          {icons ? (
            <UploadImage handleUpload={handleImageUpload} value={imageSrc} />
          ) : null}
          {/* THIS IS FOR SECOND INPUT DIV THAT WILL BE CREATED CONDITIONALLY  */}
          {label ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>{label} :</label>
              <input
                type="text"
                placeHolder={placeHolder}
                name="inputValue"
                onChange={handleChange}
                value={ObjectValue.inputValue}
              />
            </div>
          ) : null}

          {/* THIS IS TO MULTI INPUT TAG */}
          {multiselectlabel ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>{multiselectlabel} :</label>
              <Select
                mode="tags"
                size={"middle"}
                placeholder="Please select"
                defaultValue={[]}
                onChange={handlechange}
                style={{
                  width: "70%",
                }}
                options={options}
              />
            </div>
          ) : null}
        </form>
      </Modal>
    </Navbar>
  );
};

export default Master;
