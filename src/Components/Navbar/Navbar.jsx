import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/mbalogo.png";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import DropDownMenu from "./DropDownMenu";
import DropDownSubMenu from "./DropDownSubMenu";
import MultiLevelDropdown from "../MultiLevelDropdown/MultiLevelDropdown";
import { IoMdSearch } from "react-icons/io";
import { Drawer } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { getAttributeDetails } from "../../API/Getrequest";

const MainNavbar = () => {
  const [backendData, setBackendData] = useState({
    entranceexam: null,
    course: null,
  }); // Logic for opening the Menu section
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const paths = ["attribute/getentranceexam", "attribute/getcourse"];

    Promise.all(paths.map((path) => getAttributeDetails(path)))
      .then((responses) => {
        const data = responses.map((response) => response.data);
        setBackendData({
          entranceexam: data[0].allEntranceExam,
          course: data[1].allCourses,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    // if(userData !)
    setUser(userData);
  }, []);

  return (
    <div className="main-navbar">
      <div className="main-image-div">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <p
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <FaPhone style={{ marginTop: "8px" }} />
          <span style={{ fontWeight: "bolder", fontSize: "1.3rem" }}>
            9538885553
          </span>
        </p>
      </div>
      <div className="main-links-div-navbar">
        <div className="first-link-div-navbar">
          <ul>
            <li>
              <Link to={"/about"} style={{ color: "white" }}>
                About Us
              </Link>
            </li>
            <li>
              <Link to={"/contact"} style={{ color: "white" }}>
                Services
              </Link>
            </li>
            <li>
              <Link to={"/contact"} style={{ color: "white" }}>
                Contact Us
              </Link>
            </li>
            <li>
              <button className="login-signup-button">
                <Link to={"/login"} style={{ color: "white" }}>
                  <CiLogin />
                  Login &nbsp; / &nbsp; Signup
                </Link>
              </button>
            </li>
            <li
              style={{ fontWeight: "bolder", display: "flex", gap: "5px" }}
            ></li>
            <li style={{ display: "flex", gap: "20px" }}>
              <FaYoutube size={25} cursor={"pointer"} />
              <FaInstagram size={25} cursor={"pointer"} />
              <FaLinkedin size={25} cursor={"pointer"} />
            </li>
          </ul>
        </div>
        <div className="second-link-div-navbar">
          <ul>
            <MultiLevelDropdown />
            <DropDownMenu title="Programs" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Online MBA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">PGDM</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Executive MBA
              </NavDropdown.Item>
            </DropDownMenu>

            {/* ENTRANCE EXAM */}
            <DropDownMenu title="Entrance Exam" id="collasible-nav-dropdown">
              {backendData?.entranceexam?.map((ele) => {
                let formattedString = ele.entranceExamFullForm.replace(
                  / /g,
                  "-"
                );
                return (
                  <NavDropdown.Item
                    href={`/exam/${formattedString}`}
                    key={ele._id}
                    onClick={() =>
                      localStorage.setItem(
                        "examlist",
                        JSON.stringify(ele.entranceExamFullForm)
                      )
                    }
                  >
                    {ele.entranceExamFullForm}
                  </NavDropdown.Item>
                );
              })}
            </DropDownMenu>
            {/* TOOLS */}
            <DropDownMenu title="Tools" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                College Comparision
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                ROI calculator
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Intership Finder
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Carrier Guru
              </NavDropdown.Item>
            </DropDownMenu>
            {/* RESOURCES */}
            <DropDownMenu title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/latestnews">
                Latest News
              </NavDropdown.Item>
              <NavDropdown.Item href="/articles">Article</NavDropdown.Item>
              <NavDropdown.Item href="/blogs">Blog</NavDropdown.Item>
            </DropDownMenu>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="home-page-search-bar"
              />
              <button className="navbar-input-search-button">
                <IoMdSearch />
              </button>
            </div>
          </ul>
        </div>
      </div>

      <GiHamburgerMenu
        size={35}
        onClick={showDrawer}
        color="white"
        className="GiHamburgerMenu"
      />
      <Drawer title="MBACounsel" onClose={onClose} open={open}>
        <Link to={"/"}>
          <p>About Us</p>
        </Link>
        <Link to={"/"}>
          <p>Services</p>
        </Link>
        <Link to={"/"}>
          <p>Contact Us</p>
        </Link>
        <Link to={"/"}>
          <p>Colleges</p>
        </Link>
        <Link to={"/"}>
          <p>Programs</p>
        </Link>
        <Link to={"/"}>
          <p>Entrance Exam</p>
        </Link>
        <Link to={"/"}>
          <p>Tools</p>
        </Link>
        <Link to={"/"}>
          <p>Resources</p>
        </Link>
        <Link to={"/"}>
          <p>Login/Signup</p>
        </Link>
      </Drawer>
    </div>
  );
};

export default MainNavbar;
