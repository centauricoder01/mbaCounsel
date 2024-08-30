import React from "react";
import { Table, Divider } from "antd";
import Navbar from "../../Components/Sidebar/Navbar";
import "./Dashboard.css";
import { columns, data } from "./TableData";

const Dashboard = () => {
  return (
    <>
      <Navbar>
        <div className="backend-main-dashboard">
          <Divider>
            <h1 style={{ fontWeight: "bolder" }}>Collage List</h1>
          </Divider>
          <Table columns={columns} dataSource={data} size="large"  />
        </div>
      </Navbar>
    </>
  );
};

export default Dashboard;
