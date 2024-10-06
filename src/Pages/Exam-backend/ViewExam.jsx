import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Sidebar/Navbar";
import { GetRequest } from "../../API/Getrequest";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import { Button, message, Popconfirm } from "antd";
import { Link } from "react-router-dom";

const ViewExam = () => {
  const [data, setData] = useState([]);

  // HERE WE ARE HANDLING ONCLICK BUTTONS
  const confirm = (e, id) => {
    console.log(e);
    fetch("https://api.mbacounsel.com/api/v1/exam/deleteexam", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: e }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        message.success(data.message);
      })
      .catch((error) => {
        message.success("Server Error Occured");
        console.log(error);
      });
    setTimeout(function () {
      window.location.reload(1);
    }, 1000);
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  useEffect(() => {
    GetRequest("exam/getexam")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Navbar>
      <div className="main-view-collage main-div-common-design">
        <h1>View Exam</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Image</th>
              <th>Full Name</th>
              <th>Short Name</th>
              <th>PDF</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((row, rowIndex) => (
              <tr>
                <td>{rowIndex + 1}</td>
                <td>
                  <img
                    src={row.examLogo}
                    width={100}
                    height={80}
                    alt="collegeImg"
                  />
                </td>
                <td>{row.examNameFullForm}</td>
                <td>{row.examNameShortForm}</td>
                <td>
                  <Button >Download PDF</Button>
                </td>
                <td>
                  <Link to={`/editexam/${row._id}`}>
                    {" "}
                    <MdOutlineEdit size={25} cursor={"pointer"} color="green" />
                  </Link>
                  <Popconfirm
                    title="Delete the College"
                    description="Are you sure to delete this College?"
                    onConfirm={() => {
                      confirm(row._id);
                    }}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <MdDelete size={25} cursor={"pointer"} color="red" />
                  </Popconfirm>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Navbar>
  );
};

export default ViewExam;
