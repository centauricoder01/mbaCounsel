import React, { useState, useRef, useEffect } from "react";
import "./MultiLevelDropdown.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { getAttributeDetails } from "../../API/Getrequest";

const MultiLevelDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();
  const [hoveredPara, setHoveredPara] = useState(null);
  const [courseValue, setCourseValue] = useState([]);

  const handleParaHover = (index) => {
    setHoveredPara(index);
  };

  const handleClickOutside = (e) => {
    if (node.current && !node.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    getAttributeDetails("attribute/getcourse")
      .then((res) => setCourseValue(res.data.allCourses))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <li onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
        Institution <IoMdArrowDropdown />
      </li>
      {isOpen && (
        <div className="multileveldropdown-main-div" ref={node}>
          <div className="para-tags-container">
            {courseValue.length !== 0
              ? courseValue.map((ele, index) => (
                  <p
                    className={hoveredPara === index ? "active" : ""}
                    onMouseEnter={() => handleParaHover(index)}
                    onMouseLeave={() => handleParaHover(null)}
                    key={ele._id}
                  >
                    {ele.coursesValue}
                  </p>
                ))
              : null}
          </div>
          <hr />
          <div
            className={`selectable-div ${hoveredPara !== null ? "active" : ""}`}
          >
            <h5>All States</h5>
            <p>Karnataka</p>
            <p>Maharashtra</p>
            <p>Rajasthan</p>
            <p>Tamil Nadu</p>
            <h6>show more... </h6>
            <h5>All City</h5>
            <p>Jaipur</p>
            <p>Agra</p>
            <p>Bhopal</p>
            <p>Chennai</p>
            <h6>show more... </h6>
          </div>
          <hr />
          <div
            className={`selectable-div ${hoveredPara !== null ? "active" : ""}`}
          >
            <h5>Popular Searches</h5>
            <p>Best MBA College</p>
            <p>Top MBA College</p>
            <p>Highest Placement in MBA</p>
            <p>Top Placement in MBA</p>
          </div>
          <hr />
          <div
            className={`selectable-div ${hoveredPara !== null ? "active" : ""}`}
          >
            <h5>Top Colleges</h5>
            <p>Xavier School of Management</p>
            <p>Indian Institute Of Management</p>
            <p>Indian Institute Of Management</p>
            <p>S. P. Jain Institute of Management and Research</p>
            <h6>show more...</h6>
          </div>
        </div>
      )}
    </>
  );
};

export default MultiLevelDropdown;
