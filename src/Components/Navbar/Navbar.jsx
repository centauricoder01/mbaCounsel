import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/mbalogo.png";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

import { Drawer, Input } from "antd";
const { Search } = Input;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className="main-navbar">
      <div className="main-image-div">
        <img src={logo} alt="logo" />
      </div>
      <div className="main-links-div-navbar">
        <div className="first-link-div-navbar">
          <Link to={"/collage"}>
            <Button style={{ backgroundColor: "transparent", border: "none" }}>
              PROGRAMS
            </Button>
          </Link>
          <Link to={"/collagelist"}>
            <Button style={{ backgroundColor: "transparent", border: "none" }}>
              COLLAGES
            </Button>
          </Link>
          <Link to={"/about"}>
            <Button style={{ backgroundColor: "transparent", border: "none" }}>
              ABOUT
            </Button>
          </Link>
          <Link to={"/"}>
            <Button style={{ backgroundColor: "transparent", border: "none" }}>
              SERVICES
            </Button>
          </Link>
          <Link to={"/"}>
            <Button style={{ backgroundColor: "transparent", border: "none" }}>
              ENTRANCES
            </Button>
          </Link>

          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Blog</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Article </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Latest News</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Link to={"/signup"}>
            <button className="button-32">
              <BsFillPersonFill />
              Login/Register
            </button>
          </Link>
        </div>
        <div className="second-link-div-navbar">
          <Link to={"/courses"}>
            <Button style={{ backgroundColor: "transparent", border: "none" }}>
              Dummy
            </Button>
          </Link>
          <Link to={"/courses"}>
            <Button style={{ backgroundColor: "transparent", border: "none" }}>
              Dummy
            </Button>
          </Link>
          <Link to={"/courses"}>
            <Button style={{ backgroundColor: "transparent", border: "none" }}>
              Dummy
            </Button>
          </Link>

          <Search
            placeholder="Enter Collage Name"
            onSearch={onSearch}
            // enterButton
            className="navbar-input-box"
          />
        </div>
      </div>
      <GiHamburgerMenu
        size={35}
        onClick={showDrawer}
        color="white"
        className="GiHamburgerMenu"
      />

      <Drawer title="Surprice" placement="right" onClose={onClose} open={open}>
        <Link to={"/"}>
          <p
            className="para-navbar-div"
            onClose={onClose}
            open={open}
            color="black"
          >
            Home
          </p>
          <hr />
        </Link>
        <Link to={"/about"}>
          <p className="para-navbar-div" onClose={onClose}>
            About
          </p>
          <hr />
        </Link>
        <Link to={"/product"}>
          <p className="para-navbar-div" onClose={onClose}>
            Product
          </p>
          <hr />
        </Link>
        <Link to={"/contact"}>
          <p className="para-navbar-div" onClose={onClose}>
            Contact
          </p>
          <hr />
        </Link>
        <Link to={"/contact"}>
          <p className="para-navbar-div" onClose={onClose}>
            Contact
          </p>
          <hr />
        </Link>
        <Link to={"/contact"}>
          <p className="para-navbar-div" onClose={onClose}>
            Contact
          </p>
          <hr />
        </Link>
        <Link to={"/contact"}>
          <p className="para-navbar-div" onClose={onClose}>
            Contact
          </p>
          <hr />
        </Link>
        <Link to={"/contact"}>
          <p className="para-navbar-div" onClose={onClose}>
            Contact
          </p>
          <hr />
        </Link>
        <Link to={"/contact"}>
          <p className="para-navbar-div" onClose={onClose}>
            Contact
          </p>
          <hr />
        </Link>
        <Link to={"/contact"}>
          <p className="para-navbar-div" onClose={onClose}>
            Contact
          </p>
          <hr />
        </Link>
        <Link to={"/contact"}>
          <p className="para-navbar-div" onClose={onClose}>
            Contact
          </p>
          <hr />
        </Link>
        <Link to={"/contact"}>
          <p className="para-navbar-div" onClose={onClose}>
            Contact
          </p>
          <hr />
        </Link>
        <Link to={"/contact"}>
          <button className="button-15" onClose={onClose}>
            Register/Login
          </button>
        </Link>
      </Drawer>
    </div>
  );
};

export default Navbar;
