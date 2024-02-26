import React, { useState } from "react";
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

const MainNavbar = () => {
  // Logic for opening the Menu section
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>
              <button className="login-signup-button">
                <CiLogin />
                Login &nbsp; / &nbsp; Signup
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
            <DropDownMenu title="Entrance Exam" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Regular MBA
              </NavDropdown.Item>
              <DropDownSubMenu href="#action/3.7" title="Online MBA">
                <NavDropdown.Item href="#action/8.1">
                  Laptop MBA
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/8.2">
                  Mobile MBA
                </NavDropdown.Item>
              </DropDownSubMenu>
            </DropDownMenu>
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
            <DropDownMenu title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Web Development
              </NavDropdown.Item>
              <DropDownSubMenu href="#action/3.7" title="Deisgn">
                <NavDropdown.Item href="#action/8.1">Html</NavDropdown.Item>
                <NavDropdown.Item href="#action/8.2">CSS</NavDropdown.Item>
                {/* <DropDownSubMenu href="#action/3.7" title="Development">
                  <NavDropdown.Item href="#action/9.1">
                    Javascript
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/9.2">Jquery</NavDropdown.Item>
                </DropDownSubMenu> */}
              </DropDownSubMenu>
            </DropDownMenu>
            <div>
              <input
                type="text"
                placeholder="Search College"
                style={{
                  width: "260%",
                  height: "40px",
                  border: "none",
                  borderRadius: "5px",
                  paddingLeft: "5px",
                }}
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
          <p>Institution</p>
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
