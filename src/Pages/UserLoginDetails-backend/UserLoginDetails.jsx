import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Sidebar/Navbar";
import { GetRequest } from "../../API/Getrequest";

const UserLoginDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetRequest("authticate/getalluser")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  if (data.length === 0) {
    return <p>Loading Data...</p>;
  }

  console.log(data, "data");
  return (
    <Navbar>
      <div className="main-add-college main-div-common-design">
        <h1>All Users Detail</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Phone No.</th>
              <th>Email</th>
              <th>Location</th>
              <th>Course Looking</th>
              <th>Current Education</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((row, rowIndex) => (
              <tr>
                <td>{rowIndex + 1}</td>
                <td>{row.name}</td>
                <td>{row.phoneNo}</td>
                <td>{row.email}</td>
                <td>{row.location}</td>
                <td>{row.courseLooking}</td>
                <td>{row.currentEducation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Navbar>
  );
};

export default UserLoginDetails;
