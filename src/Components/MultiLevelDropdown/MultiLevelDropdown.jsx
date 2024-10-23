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
      // .then((res) => setCourseValue(res.data.allCourses))
      .then((res) => console.log(res.data.allCourses, "THis is all courses"))
      .catch((err) => console.log(err));

    getAttributeDetails("college/getcollege")
      .then((res) => setFilterStateValue(res.data.allCollege))
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

  console.log(filterStateValue, "filterStateValue");

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
              <p>Top MBA colleges in India</p>
              <p>MBA fees in India</p>
              <p>MBA without work experience in India</p>
              <p>Best specializations for MBA in India</p>
              <p>MBA entrance exams in India</p>
              <p>MBA placements in India</p>
              <p>Distance MBA programs in India</p>
            </div>
            <div>
              <h5>Top Colleges</h5>
              {filterStateValue
                .filter((college) =>
                  college.collegecoursespecilzationfees.some(
                    (courseSpec) => courseSpec.course === selectedCategory
                  )
                )
                .map((college) => (
                  <p key={college._id}>
                    <Link
                      // to={`/college/${college.collegeCollegeUrl}`}
                      to={`/college`}
                      style={{ color: "black" }}
                    >
                      {college.collegeName}
                    </Link>
                  </p>
                ))}
            </div>
          </>
        );
      case "PGDM":
        // Similar structure for PGDM
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
              <p>Top PGDM colleges in India</p>
              <p>Difference between MBA and PGDM</p>
              <p>PGDM fees in India</p>
              <p>PGDM vs MBA salary</p>
              <p>Best specializations in PGDM</p>
              <p>PGDM placements in India</p>
              <p>Eligibility for PGDM courses</p>
            </div>
            <div>
              <h5>Top Colleges</h5>
              {filterStateValue
                .filter((college) =>
                  college.collegecoursespecilzationfees.some(
                    (courseSpec) => courseSpec.course === selectedCategory
                  )
                )
                .map((college) => (
                  <p key={college._id}>
                    <Link
                      // to={`/college/${college.collegeCollegeUrl}`}
                      to={`/college`}
                      style={{ color: "black" }}
                    >
                      {college.collegeName}
                    </Link>
                  </p>
                ))}
            </div>
          </>
        );
      case "Online MBA":
        // Similar structure for Online MBA
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
              <p>Best online MBA programs in India</p>
              <p>Top universities offering online MBA</p>
              <p>Eligibility criteria for online MBA</p>
              <p>Online MBA fees in India</p>
              <p>Online MBA vs regular MBA</p>
              <p>Accredited online MBA courses</p>
              <p>Online MBA with placements</p>
            </div>
            <div>
              <h5>Top Colleges</h5>
              {filterStateValue
                .filter((college) =>
                  college.collegecoursespecilzationfees.some(
                    (courseSpec) => courseSpec.course === selectedCategory
                  )
                )
                .map((college) => (
                  <p key={college._id}>
                    <Link
                      // to={`/college/${college.collegeCollegeUrl}`}
                      to={`/college`}
                      style={{ color: "black" }}
                    >
                      {college.collegeName}
                    </Link>
                  </p>
                ))}
            </div>
          </>
        );
      case "Executive MBA/PGM":
        // Similar structure for Executive MBA/PGM
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
              <p>Top Executive MBA programs in India</p>
              <p>Best Executive PGDM courses</p>
              <p>Eligibility for Executive MBA</p>
              <p>Executive MBA for working professionals</p>
              <p>Executive MBA vs regular MBA</p>
              <p>Executive MBA with international exposure</p>
              <p>Executive MBA fees and placements</p>
            </div>
            <div>
              <h5>Top Colleges</h5>
              {filterStateValue
                .filter((college) =>
                  college.collegecoursespecilzationfees.some(
                    (courseSpec) => courseSpec.course === selectedCategory
                  )
                )
                .map((college) => (
                  <p key={college._id}>
                    <Link
                      // to={`/college/${college.collegeCollegeUrl}`}
                      to={`/college`}
                      style={{ color: "black" }}
                    >
                      {college.collegeName}
                    </Link>
                  </p>
                ))}
            </div>
          </>
        );
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
