import React, { useState, useEffect, useRef } from "react";
import "./MultiLevelDropdown.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { getAttributeDetails } from "../../API/Getrequest";
import { Link } from "react-router-dom";

const MultiLevelDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterStateValue, setFilterStateValue] = useState([]);
  const [courseValue, setCourseValue] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(5);
  const [selectedCategory, setSelectedCategory] = useState("MBA");

  const dropdownRef = useRef();

  const showMoreItems = () => {
    setItemsToShow(itemsToShow + 5);
  };

  useEffect(() => {
    getAttributeDetails("attribute/getcourse")
      .then((res) => setCourseValue(res.data.allCourses))
      .catch((err) => console.log(err));

    fetch(`${process.env.BACKENDAPI}college/getcollege`)
      .then((response) => response.json())
      .then((data) => setFilterStateValue(data.allCollege))
      .catch((err) => console.log(err));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderRightSideContent = () => {
    switch (selectedCategory) {
      case "MBA":
        return (
          <>
            <div>
              <h5>All States</h5>
              <p>MBA State are Here</p>
              {filterStateValue
                .filter((ele) => ele.courseType === "MBA")
                .map((ele) => (
                  <p key={ele._id}>
                    <Link to={`/collegelist`} style={{ color: "black" }}>
                      {ele.collegeState}
                    </Link>
                  </p>
                ))}
            </div>
            <div>
              <h5>All City</h5>
              <p>All MBA City</p>
            </div>
            <div>
              <h5>Popular Searches</h5>
              <p>Best MBA College</p>
            </div>
            <div>
              <h5>Top Colleges</h5>
              {filterStateValue
                .filter((ele) => ele.courseType === "MBA")
                .map((ele) => (
                  <p key={ele._id}>
                    <Link
                      to={`/college/${ele.collegeCollegeUrl}`}
                      style={{ color: "black" }}
                    >
                      {ele.collegeName}
                    </Link>
                  </p>
                ))}
            </div>
          </>
        );
      case "PGDM":
        // Similar structure for PGDM
        return <div>PGDM Content Here</div>;
      case "Online MBA":
        // Similar structure for Online MBA
        return <div>Online MBA Content Here</div>;
      case "Executive MBA/PGM":
        // Similar structure for Executive MBA/PGM
        return <div>Executive MBA/PGM Content Here</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <li onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
        Colleges <IoMdArrowDropdown />
      </li>
      {isOpen && (
        <div className="multileveldropdown-main-div" ref={dropdownRef}>
          <div className="para-tags-container">
            <p
              className={selectedCategory === "MBA" ? "active" : ""}
              onClick={() => handleCategoryClick("MBA")}
            >
              MBA
            </p>
            <p
              className={selectedCategory === "PGDM" ? "active" : ""}
              onClick={() => handleCategoryClick("PGDM")}
            >
              PGDM
            </p>
            <p
              className={selectedCategory === "Online MBA" ? "active" : ""}
              onClick={() => handleCategoryClick("Online MBA")}
            >
              Online MBA
            </p>
            <p
              className={
                selectedCategory === "Executive MBA/PGM" ? "active" : ""
              }
              onClick={() => handleCategoryClick("Executive MBA/PGM")}
            >
              Executive MBA/PGM
            </p>
          </div>
          <hr />
          <div className="selectable-div">{renderRightSideContent()}</div>
        </div>
      )}
    </>
  );
};

export default MultiLevelDropdown;
