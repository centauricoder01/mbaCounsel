import React, { useState, useEffect } from "react";
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

  const showMoreItems = () => {
    setItemsToShow(itemsToShow + 5); // show 5 more items
  };

  useEffect(() => {
    // Fetch course and college data
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

  console.log(process.env.BACKENDAPI, "filterStateValue");

  const renderRightSideContent = () => {
    switch (selectedCategory) {
      case "MBA":
        return (
          <>
            <div>
              <h5>All States</h5>
              {/* Render MBA-specific states */}
              <p>MBA State are Here </p>
              <p>MBA State are Here </p>
              <p>MBA State are Here </p>
              <p>MBA State are Here </p>
              <p>MBA State are Here </p>
              <p>MBA State are Here </p>
              <p>MBA State are Here </p>
              {filterStateValue
                .filter((ele) => ele.courseType === "MBA")
                .map((ele) => (
                  <p key={ele._id}>
                    <Link to={`/collegelist`} style={{ color: "black" }}>
                      {ele.collegeState}
                    </Link>
                  </p>
                ))}
              {/* Render MBA-specific cities */}
            </div>
            <div>
              <h5>All City</h5>
              <p>All MBA City</p>
              <p>All MBA City</p>
              <p>All MBA City</p>
              <p>All MBA City</p>
            </div>
            {/* Add your MBA-specific cities here */}
            <div>
              <h5>Popular Searches</h5>
              <p>Best MBA College</p>
              <p>Top MBA College</p>
            </div>
            <div>
              <h5>Top Colleges</h5>
              {/* Render MBA-specific top colleges */}
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
        return (
          <>
            <div>
              <h5>All States</h5>
              {/* Render MBA-specific states */}
              <p>PGDM State are Here </p>
              <p>PGDM State are Here </p>
              <p>PGDM State are Here </p>
              <p>PGDM State are Here </p>
              <p>PGDM State are Here </p>
              <p>PGDM State are Here </p>
              <p>PGDM State are Here </p>
              {filterStateValue
                .filter((ele) => ele.courseType === "MBA")
                .map((ele) => (
                  <p key={ele._id}>
                    <Link to={`/collegelist`} style={{ color: "black" }}>
                      {ele.collegeState}
                    </Link>
                  </p>
                ))}
              {/* Render MBA-specific cities */}
            </div>
            <div>
              <h5>All City</h5>
              <p>All PGDM City</p>
              <p>All PGDM City</p>
              <p>All PGDM City</p>
              <p>All PGDM City</p>
            </div>
            {/* Add your MBA-specific cities here */}
            <div>
              <h5>Popular Searches</h5>
              <p>Best PGDM College</p>
              <p>Top PGDM College</p>
            </div>
            <div>
              <h5>Top Colleges</h5>
              {/* Render MBA-specific top colleges */}
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
      case "Online MBA":
        return (
          <>
            <div>
              <h5>All States</h5>
              {/* Render MBA-specific states */}
              <p>Online MBA State are Here </p>
              <p>Online MBA State are Here </p>
              <p>Online MBA State are Here </p>
              <p>Online MBA State are Here </p>
              <p>Online MBA State are Here </p>
              <p>Online MBA State are Here </p>
              <p>Online MBA State are Here </p>
              {filterStateValue
                .filter((ele) => ele.courseType === "MBA")
                .map((ele) => (
                  <p key={ele._id}>
                    <Link to={`/collegelist`} style={{ color: "black" }}>
                      {ele.collegeState}
                    </Link>
                  </p>
                ))}
              {/* Render MBA-specific cities */}
            </div>
            <div>
              <h5>All City</h5>
              <p>All Online MBA City</p>
              <p>All Online MBA City</p>
              <p>All Online MBA City</p>
              <p>All Online MBA City</p>
            </div>
            {/* Add your MBA-specific cities here */}
            <div>
              <h5>Popular Searches</h5>
              <p>Best Online MBA College</p>
              <p>Top Online MBA College</p>
            </div>
            <div>
              <h5>Top Colleges</h5>
              {/* Render MBA-specific top colleges */}
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
      case "Executive MBA/PGM":
        return (
          <>
            <div>
              <h5>All States</h5>
              {/* Render MBA-specific states */}
              <p>MAIN state are Here </p>
              <p>MAIN state are Here </p>
              <p>MAIN state are Here </p>
              <p>MAIN state are Here </p>
              <p>MAIN state are Here </p>
              <p>MAIN state are Here </p>
              <p>MAIN state are Here </p>
              {filterStateValue
                .filter((ele) => ele.courseType === "MBA")
                .map((ele) => (
                  <p key={ele._id}>
                    <Link to={`/collegelist`} style={{ color: "black" }}>
                      {ele.collegeState}
                    </Link>
                  </p>
                ))}
              {/* Render MBA-specific cities */}
            </div>
            <div>
              <h5>All City</h5>
              <p>All Main City</p>
              <p>All MAIN City</p>
              <p>All MAIN City</p>
              <p>All MAIN City</p>
            </div>
            {/* Add your MBA-specific cities here */}
            <div>
              <h5>Popular Searches</h5>
              <p>Best MAIN College</p>
              <p>Top MAIN College</p>
            </div>
            <div>
              <h5>Top Colleges</h5>
              {/* Render MBA-specific top colleges */}
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
        <div className="multileveldropdown-main-div">
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
