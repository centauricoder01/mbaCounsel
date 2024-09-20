import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Sidebar/Navbar";
import { GetRequest } from "../../API/Getrequest";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import { message, Popconfirm } from "antd";
import { Link } from "react-router-dom";

const ViewLatestNews = () => {
  const [data, setData] = useState([]);

  // HERE WE ARE HANDLING ONCLICK BUTTONS
  const confirm = (e, id) => {
    fetch("http://148.66.155.154:3001/api/v1/news/deletenews", {
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
    message.error("Click on No");
  };
  useEffect(() => {
    GetRequest("news/getnews")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Navbar>
      <div className="main-add-college main-div-common-design">
        <h1>All News HeadLine</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Image</th>
              <th>Title</th>
              <th>Date</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((row, rowIndex) => (
              <tr>
                <td>{rowIndex + 1}</td>
                <td>
                  <img
                    src={row.Image}
                    width={100}
                    height={80}
                    alt="collegeImg"
                  />
                </td>
                <td>{row.title}</td>
                <td>{row.Date}</td>
                <td>
                  <Link to={`/editlatestnews/${row._id}`}>
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

export default ViewLatestNews;
