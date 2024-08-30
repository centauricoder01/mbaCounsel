import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Sidebar/Navbar";
import Date from "../../../Components/Date/Date";
import TextInput from "../../../Components/TextInput/TextInput";
import Button from "../../../Components/Button/Button";
import Home from "../Home";

// API CALLING
import { GetRequest } from "../../../API/Getrequest";
import { PostRequest } from "../../../API/PostRequest";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PutRequest } from "../../../API/PutRequest";

const AddEvents = () => {
  const [tableData, setTableData] = useState([]);
  const [datevalue, setDateValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");

  //Handleing value
  const handleDatevalue = (date, dateString) => {
    setDateValue(dateString);
  };

  const HandleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const HandleSecondInputValue = (e) => {
    setSecondInputValue(e.target.value);
  };

  //handle POST REQUEST
  const postRow = (e) => {
    e.preventDefault();
    const data = {
      date: datevalue,
      title: inputValue,
      desc: secondInputValue,
    };
    PostRequest("home/addevent", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  // handle DELETE REQUEST
  const deleteRow = (id) => {
    DeleteRequest("home/deleteevent", id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  // HANDLE EDIT REQUEST
  const EditRow = (dataValue, id) => {
    const data = {
      id: id,
      date: dataValue.datevalue,
      title: dataValue.inputValueone,
      desc: dataValue.textArea,
    };

    PutRequest("home/updateevent", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  // USEEFFECT
  useEffect(() => {
    GetRequest("home/getevent")
      .then((res) => setTableData(res.data.allEvent))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Navbar>
      <div className="main-div-common-design">
        <form className="main-master-div-form" onSubmit={postRow}>
          <h1>Add Events</h1>
          <Date
            labeltext={"Enter Date"}
            onchange={handleDatevalue}
            height="420px"
          />
          <TextInput
            placeholdertext={"Enter Title"}
            labeltext={"Title"}
            value={inputValue}
            onChange={HandleInputValue}
          />
          <TextInput
            placeholdertext={"Enter Descr"}
            labeltext={"Desc"}
            value={secondInputValue}
            onChange={HandleSecondInputValue}
          />
          <Button />
        </form>
        <Home
          tableData={tableData}
          tablelabel={"Events Details"}
          popover={[
            { id: "label", show: "Edit Banner Text" },
            {
              id: "date",
              labeltext: "Enter Date",
            },
            {
              id: "text1",
              show: "text",
              placeholdertext: "Enter Title",
              labeltext: "Title",
            },
            {
              id: "textarea",
              show: "text",
              placeholdertext: "Enter Descr",
              labeltext: "Desc",
            },
          ]}
          DeleteFunc={deleteRow}
          EditFunc={EditRow}
        />
      </div>
    </Navbar>
  );
};

export default AddEvents;
