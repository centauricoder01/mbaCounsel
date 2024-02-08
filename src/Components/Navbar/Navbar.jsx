import React from "react";
import "./Navbar.css";
import logo from "../../Assets/mbalogo.png";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Row, Col, NavDropdown } from "react-bootstrap";
import DropDownMenu from "./DropDownMenu";
import DropDownSubMenu from "./DropDownSubMenu";
import MultiLevelDropdown from "../MultiLevelDropdown/MultiLevelDropdown";

const MainNavbar = () => {
  // Logic for opening the Menu section

  return (
    <div className="main-navbar">
      <div className="main-image-div">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="main-links-div-navbar">
        <div className="first-link-div-navbar">
          <ul>
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
            <li>Services</li>
            <li>About US</li>
            <li>Contact US</li>
            <input type="text" placeholder="Search college Here" />
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
            <button className="login-signup-button">Login/Signup</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
