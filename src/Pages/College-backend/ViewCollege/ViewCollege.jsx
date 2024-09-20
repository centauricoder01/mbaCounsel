import React, { useEffect, useState } from "react";
import "./ViewCollege.css";
import Navbar from "../../../Components/Sidebar/Navbar";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import { message, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { GetRequest } from "../../../API/Getrequest";

const ViewCollege = () => {
  const [data, setData] = useState([]);

  // HERE WE ARE HANDLING ONCLICK BUTTONS
  const confirm = (e, id) => {
    console.log(e);
    fetch("http://148.66.155.154:3001/api/v1/college/deletecollege", {
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
    GetRequest("college/getcollege")
      .then((res) => setData(res.data.allCollege))
      .catch((err) => console.log(err));
  }, []);

  if (!data.length) {
    return <div>Loading...</div>;
  }
  return (
    <Navbar>
      <div className="main-view-collage main-div-common-design">
        <h1>Collage List</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>College Image</th>
              <th>College Name</th>
              <th>Est. Year</th>
              <th>Rating</th>
              <th>Package</th>
              <th>URL</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((row, rowIndex) => (
              <tr>
                <td>{rowIndex + 1}</td>
                <td>
                  <img
                    src={row.collegePhoto}
                    width={100}
                    height={80}
                    alt="collegeImg"
                  />
                </td>
                <td>{row.collegeName}</td>
                <td>{row.collegeEstYear}</td>
                <td>{5}</td>
                <td>{row.collegeAvgPackage}</td>
                <td>
                  <a href={row.collegeCollegeUrl}>{row.collegeCollegeUrl}</a>
                </td>
                <td>
                  <Link to={`/editcollege/${row._id}`}>
                    {" "}
                    <MdOutlineEdit size={25} cursor={"pointer"} color="black" />
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
                    <MdDelete size={25} cursor={"pointer"} />
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

export default ViewCollege;
