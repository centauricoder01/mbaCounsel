import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/mbalogo.png";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from "antd";

const Navbar = () => {
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
        <img src={logo} alt="logo" />
      </div>
      <div className="main-links-div">
        <div className="first-link-div">
          <Link to={"/"}>
            <p className="para-navbar-div">PROGRAMS</p>
          </Link>
          <Link to={"/collage"}>
            <p className="para-navbar-div">COLLAGES</p>
          </Link>
          <Link to={"/"}>
            <p className="para-navbar-div">ABOUT US</p>
          </Link>
          <Link to={"/"}>
            <p className="para-navbar-div">SERVICES</p>
          </Link>
          <Link to={"/"}>
            <p className="para-navbar-div">ENTRANCES</p>
          </Link>
          <Link to={"/"}>
            <p className="para-navbar-div">RESOURCES</p>
          </Link>
          <Link to={"/signup"}>
            <button className="button-32">
              <BsFillPersonFill />
              Login/Register
            </button>
          </Link>
        </div>
        <div className="second-link-div">
          <Link to={"/courses"}>
            <p className="para-navbar-div">DUMMY</p>
          </Link>
          <Link to={"/courses"}>
            <p className="para-navbar-div">DUMMY</p>
          </Link>
          <Link to={"/courses"}>
            <p className="para-navbar-div">DUMMY</p>
          </Link>
          <Link to={"/courses"}>
            <p className="para-navbar-div">DUMMY</p>
          </Link>
          <Link to={"/courses"}>
            <p className="para-navbar-div">DUMMY</p>
          </Link>
          <Link to={"/courses"}>
            <p className="para-navbar-div">DUMMY</p>
          </Link>
          <input
            type="text"
            placeholder="Search for collages"
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
