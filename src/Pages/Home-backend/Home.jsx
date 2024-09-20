import React, { useState } from "react";
import { Modal, Popconfirm, message } from "antd";
import "./Home.css";
import TextInput from "../../Components/TextInput/TextInput";
import TextArea from "../../Components/TextArea/TextArea";
import Date from "../../Components/Date/Date";

const Home = ({ tableData, tablelabel, popover, DeleteFunc, EditFunc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ***********LOGIC TO CATCH THE VALUE OF INPUT FEILD.********************
  const [inputValueone, setInputValueone] = useState("");
  const [inputValueTwo, setInputValueTwo] = useState("");
  const [inputValueThree, setInputValueThree] = useState("");
  const [datevalue, setDatevalue] = useState("");
  const [textArea, settextArea] = useState("");

  const handleInputValueone = (event) => {
    setInputValueone(event.target.value);
  };

  const handleInputValueTwo = (event) => {
    setInputValueTwo(event.target.value);
  };
  const handleInputValueThree = (event) => {
    setInputValueThree(event.target.value);
  };
  const handleDateChange = (date, dateString) => {
    setDatevalue(dateString);
  };

  const HandletextArea = (event) => {
    settextArea(event.target.value);
  };

  // *************************************************************************

  // Edit logic are being handled over here
  const showModal = (id) => {
    localStorage.setItem("row_id", JSON.stringify(id));
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const ID = JSON.parse(localStorage.getItem("row_id"));
    setIsModalOpen(false);
    console.log(
      inputValueone,
      inputValueTwo,
      inputValueThree,
      datevalue,
      textArea,
      ID
    );
    EditFunc(
      { inputValueone, inputValueTwo, inputValueThree, datevalue, textArea },
      ID
    );
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

  return (
    <div>
      <div className="main-master-show-data-div">
        <h1>{tablelabel}</h1>
        <table className="styled-table">
          <thead>
            <tr>
              {tableData.some((obj) => obj.hasOwnProperty("Img")) ? (
                <th>Img</th>
              ) : null}
              {tableData.some((obj) => obj.hasOwnProperty("Date")) ? (
                <th>Date</th>
              ) : null}
              {tableData.some((obj) => obj.hasOwnProperty("Text")) ? (
                <th>Text</th>
              ) : null}
              {tableData.some((obj) => obj.hasOwnProperty("Subtitle")) ? (
                <th>Subtitle</th>
              ) : null}
              {tableData.some((obj) => obj.hasOwnProperty("ShortDesc")) ? (
                <th>Short Desc</th>
              ) : null}
              {tableData.some((obj) => obj.hasOwnProperty("Desc")) ? (
                <th>Desc</th>
              ) : null}
              {tableData.some((obj) => obj.hasOwnProperty("Url")) ? (
                <th>URL </th>
              ) : null}
              {tableData.some((obj) => obj.hasOwnProperty("Name")) ? (
                <th>Name</th>
              ) : null}
              {tableData.some((obj) => obj.hasOwnProperty("Review")) ? (
                <th>Review</th>
              ) : null}
              {tableData.some((obj) => obj.hasOwnProperty("College")) ? (
                <th>College</th>
              ) : null}

              {/* 
              {tableData[0].name ? <th>Name</th> : null}
              {tableData[0].collagename ? <th>Collage Name</th> : null}
              {tableData[0].testinomial ? <th>Reviews</th> : null}
              {tableData[0].eventdate ? <th>Date</th> : null}
              {tableData[0].title ? <th>Title</th> : null}
              {tableData[0].eventdesc ? <th>Event Desc</th> : null}
              {tableData[0].subtitle ? <th>Subtitle</th> : null}
              {tableData[0].smalldesc ? <th>Small Desc</th> : null}
              {tableData[0].longdesc ? <th>Long Desc</th> : null}
              {tableData[0].urltodirect ? <th>URL to Redirect</th> : null} */}
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i}>
                {row.Img ? (
                  <td>
                    <img
                      src={row.Img}
                      alt="tableImg"
                      height={100}
                      width={100}
                    />
                  </td>
                ) : null}
                {row.Date ? <td>{row.Date}</td> : null}
                {row.Text ? <td>{row.Text}</td> : null}
                {row.Subtitle ? <td>{row.Subtitle}</td> : null}
                {row.ShortDesc ? <td>{row.ShortDesc}</td> : null}
                {row.Desc ? <td>{row.Desc}</td> : null}
                {row.Url ? (
                  <td>
                    <a href={`${row.Url}`} rel="noreferrer" target="_blank">
                      {row.Url}
                    </a>
                  </td>
                ) : null}
                {row.eventdesc ? <td>{row.eventdesc}</td> : null}
                {row.subtitle ? <td>{row.subtitle}</td> : null}
                {row.longdesc ? <td>{row.longdesc}</td> : null}
                {row.Name ? <td>{row.Name}</td> : null}
                {row.Review ? <td>{row.Review}</td> : null}
                {row.College ? <td>{row.College}</td> : null}
                {row.urltodirect ? (
                  <td>
                    <a href={row.urltodirect}>{row.urltodirect}</a>
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
      <Modal
        title={popover[0].show}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className="main-master-div-form main-master-modal-form">
          {/* Here we have to implement the logic for edit */}
          {popover.map((item) => {
            if (item.id === "date") {
              return (
                <Date
                  labeltext={item.labeltext}
                  onchange={handleDateChange}
                  height="310px"
                />
              );
            } else if (item.id === "text1") {
              return (
                <TextInput
                  placeholdertext={item.placeholdertext}
                  labeltext={item.labeltext}
                  value={inputValueone}
                  onChange={handleInputValueone}
                />
              );
            } else if (item.id === "textarea") {
              return (
                <TextArea
                  Placeholdername={item.placeholdertext}
                  labelName={item.labeltext}
                  value={textArea}
                  onChange={HandletextArea}
                />
              );
            } else if (item.id === "text2") {
              return (
                <TextInput
                  placeholdertext={item.placeholdertext}
                  labeltext={item.labeltext}
                  value={inputValueTwo}
                  onChange={handleInputValueTwo}
                />
              );
            } else if (item.id === "text3") {
              return (
                <TextInput
                  placeholdertext={item.placeholdertext}
                  labeltext={item.labeltext}
                  value={inputValueThree}
                  onChange={handleInputValueThree}
                />
              );
            } else {
              return null;
            }
          })}
        </form>
      </Modal>
    </div>
  );
};

export default Home;
