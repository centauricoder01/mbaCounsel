import React, { useState, useRef, useEffect } from "react";
import "./MultiLevelDropdown.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { getAttributeDetails } from "../../API/Getrequest";
import { Link } from "react-router-dom";

const MultiLevelDropdown = () => {
  const node = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [filterStateValue, setFilterStateValue] = useState([]);
  const [hoveredPara, setHoveredPara] = useState(null);
  const [courseValue, setCourseValue] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(5);

  const handleParaHover = (index) => {
    setHoveredPara(index);
  };

  const showMoreItems = () => {
    setItemsToShow(itemsToShow + 5); // show 5 more items
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

    fetch("http://localhost:3001/api/v1/college/getcollege")
      .then((response) => response.json())
      .then((data) => setFilterStateValue(data.allCollege))
      .catch((err) => console.log(err));
  }, []);

  if (filterStateValue.length === 0) {
    return <p>Loading Details....</p>;
  }

  let stateSeen = new Set();
  let citySeen = new Set();

  let uniqueStates = filterStateValue.filter((ele) => {
    let duplicate = stateSeen.has(ele.collegeState);
    stateSeen.add(ele.collegeState);
    return !duplicate;
  });

  let uniqueCities = filterStateValue.filter((ele) => {
    let duplicate = citySeen.has(ele.collegeCity);
    citySeen.add(ele.collegeCity);
    return !duplicate;
  });

  return (
    <>
      <li onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
        Colleges <IoMdArrowDropdown />
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
            {/* SHOWING ALL THE STATE OF COLLEGES */}
            <h5>All States</h5>
            {uniqueStates?.map((ele) => (
              <p
                key={ele._id}
                onClick={() =>
                  localStorage.setItem(
                    "dropdownstatevalue",
                    JSON.stringify(ele.collegeState)
                  )
                }
              >
                <Link to={`/collegelist`} style={{ color: "black" }}>
                  {ele.collegeState}
                </Link>
              </p>
            ))}
            {/* SHOWING ALL THE CITIES OF COLLEGES */}
            <h5>All City</h5>
            {uniqueCities?.slice(0, itemsToShow).map((item, index) => (
              <p
                key={index}
                onClick={() =>
                  localStorage.setItem(
                    "dropdowncityvalue",
                    JSON.stringify(item.collegeCity)
                  )
                }
              >
                <Link to={`/collegelist`} style={{ color: "black" }}>
                  {item.collegeCity}
                </Link>
              </p>
            ))}
            {itemsToShow < uniqueCities.length && (
              <p onClick={showMoreItems} style={{ cursor: "pointer" }}>
                Show more...
              </p>
            )}
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
            {filterStateValue.map((ele) => (
              <p
                key={ele._id}
                onClick={() =>
                  localStorage.setItem("collegelist", JSON.stringify(ele))
                }
              >
                <Link
                  to={`/college/${ele.collegeCollegeUrl}`}
                  style={{ color: "black" }}
                >
                  {ele.collegeName}
                </Link>
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MultiLevelDropdown;
