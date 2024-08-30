import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Sidebar/Navbar";
import TextInput from "../../../Components/TextInput/TextInput";
import Button from "../../../Components/Button/Button";
import Home from "../Home";
import { GetRequest } from "../../../API/Getrequest";
import { PostRequest } from "../../../API/PostRequest";
import { DeleteRequest } from "../../../API/DeleteRequest";
import { PutRequest } from "../../../API/PutRequest";

const AddLatestNotification = () => {
  const [tableData, setTableData] = useState([]);
  const [inputValue, setInputValue] = useState(""); // It takes the value of input tag...

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // API CALLING FUNCTION

  const EditRow = (dataValue, id) => {
    const data = {
      id: id,
      text: dataValue.inputValueone,
    };
    PutRequest("home/updatenotification", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  //DELETE REQUEST
  const deleteRow = (id) => {
    DeleteRequest("home/deletenotification", id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };
  //POST REQUEST
  const postRow = (e) => {
    e.preventDefault();
    const data = {
      text: inputValue,
    };
    PostRequest("home/addnotification", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  useEffect(() => {
    // GET REQUEST
    GetRequest("home/getnotification")
      .then((res) => setTableData(res.data.allNotification))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Navbar>
      <div className="main-div-common-design">
        <form className="main-master-div-form" onSubmit={postRow}>
          <h1>Add Latest Notificatoin</h1>
          <TextInput
            placeholdertext={"Enter Notificatoin"}
            labeltext={"Notification"}
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button />
        </form>
        <Home
          tableData={tableData}
          tablelabel={"Latest Notification"}
          popover={[
            { id: "label", show: "Edit Notification" },

            {
              id: "text1",
              placeholdertext: "Enter Notification",
              labeltext: "Notification",
            },
          ]}
          DeleteFunc={deleteRow}
          EditFunc={EditRow}
        />
      </div>
    </Navbar>
  );
};

export default AddLatestNotification;
