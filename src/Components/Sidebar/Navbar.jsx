import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import { Button, Drawer, Space } from "antd";

// Image imports
import logo from "../../Assets/MBA.png";

// Icon imports
import { LuLayoutGrid } from "react-icons/lu";

// CSS imports
import "./Navbar.css";

const Navbar = ({ children }) => {
  //Sidebar toggle state
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();

  // OPEN AND CLOSE FUNCTION
  const showDefaultDrawer = () => {
    setSize("default");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div id="content">
        <nav>
          <div>
            <LuLayoutGrid
              className="menuIcon"
              size={30}
              onClick={showDefaultDrawer}
            />

            <Link to="/" className="nav-link">
              🔥 Welcome to MBA Counsel !
            </Link>
          </div>
          <div>
            <Button
              type="primary"
              color="white"
              style={{ color: "white", fontWeight: "bolder" }}
            >
              Logout
            </Button>
          </div>
        </nav>
        {children}
      </div>

      <Drawer
        title=<img src={logo} alt="logo" width={100} />
        placement="left"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button type="primary" onClick={onClose} danger>
              Close
            </Button>
          </Space>
        }
      >
        <Menu />
      </Drawer>
    </>
  );
};

export default Navbar;
