import React, { useState, useEffect, useRef, useCallback } from "react";
import "./MultiLevelDropdown.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { getAttributeDetails } from "../../API/Getrequest";
import { Link } from "react-router-dom";

const MultiLevelDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [colleges, setColleges] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("MBA");
  const dropdownRef = useRef();

  const categories = ["MBA", "PGDM", "Online MBA", "Executive MBA/PGM"];

  // Fetch Data with async/await
  const fetchData = useCallback(async () => {
    try {
      const courseResponse = await getAttributeDetails("attribute/getcourse");
      console.log(courseResponse.data.allCourses, "All Courses");

      const collegeResponse = await getAttributeDetails("college/getcollege");
      setColleges(collegeResponse.data.allCollege);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Handle Click Outside Dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filterCollegesByCategory = useCallback(() => {
    return colleges.filter((college) =>
      college.collegecoursespecilzationfees.some(
        (courseSpec) => courseSpec.course === selectedCategory
      )
    );
  }, [colleges, selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderColleges = () => {
    const filteredColleges = filterCollegesByCategory();
    return filteredColleges.map((college) => (
      <p key={college._id}>
        <Link
          to={`/college/${college.collegeCollegeUrl}`}
          style={{ color: "black" }}
          onClick={() =>
            localStorage.setItem("collegelist", JSON.stringify(college))
          }
        >
          {college.collegeName}
        </Link>
      </p>
    ));
  };

  const renderRightSideContent = () => {
    const filteredColleges = filterCollegesByCategory();

    return (
      <>
        <div>
          <h5>All States</h5>
          {filteredColleges.map((college) => (
            <p key={college._id}>{college.collegeState}</p>
          ))}
        </div>
        <div>
          <h5>All Cities</h5>
          {filteredColleges.map((college) => (
            <p key={college._id}>{college.collegeCity}</p>
          ))}
        </div>
        <div>
          <h5>Popular Searches</h5>
          {getPopularSearchesForCategory(selectedCategory)}
        </div>
        <div>
          <h5>Top Colleges</h5>
          {renderColleges()}
        </div>
      </>
    );
  };

  const getPopularSearchesForCategory = (category) => {
    const searches = {
      MBA: [
        "Top MBA colleges in India",
        "MBA fees in India",
        "MBA without work experience in India",
        "Best specializations for MBA in India",
        "MBA entrance exams in India",
        "MBA placements in India",
        "Distance MBA programs in India",
      ],
      PGDM: [
        "Top PGDM colleges in India",
        "Difference between MBA and PGDM",
        "PGDM fees in India",
        "PGDM vs MBA salary",
        "Best specializations in PGDM",
        "PGDM placements in India",
        "Eligibility for PGDM courses",
      ],
      "Online MBA": [
        "Best online MBA programs in India",
        "Top universities offering online MBA",
        "Eligibility criteria for online MBA",
        "Online MBA fees in India",
        "Online MBA vs regular MBA",
        "Accredited online MBA courses",
        "Online MBA with placements",
      ],
      "Executive MBA/PGM": [
        "Top Executive MBA programs in India",
        "Best Executive PGDM courses",
        "Eligibility for Executive MBA",
        "Executive MBA for working professionals",
        "Executive MBA vs regular MBA",
        "Executive MBA with international exposure",
        "Executive MBA fees and placements",
      ],
    };
    return searches[category].map((search, idx) => <p key={idx}>{search}</p>);
  };

  return (
    <>
      <li onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
        Colleges <IoMdArrowDropdown />
      </li>
      {isOpen && (
        <div className="multileveldropdown-main-div" ref={dropdownRef}>
          <div className="para-tags-container">
            {categories.map((category) => (
              <p
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </p>
            ))}
          </div>
          <hr />
          <div className="selectable-div">{renderRightSideContent()}</div>
        </div>
      )}
    </>
  );
};

export default MultiLevelDropdown;
