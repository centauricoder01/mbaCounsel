import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./CollageList.css";
import { Button, Dropdown } from "antd";
import { Collapse } from "antd";
import State from "./Filters/State";
import City from "./Filters/City";
import Stream from "./Filters/Stream";
import Cources from "./Filters/Cources";
import CollageType from "./Filters/CollageType";
import Fees from "./Filters/Fees";
import Duration from "./Filters/Duration";
import Affiliation from "./Filters/Affiliation";

const CollageList = () => {
  const [collegeData, setCollegeData] = useState([]);
  const [filterValue, setFilterValue] = useState([]);

  const refreshPage = () => {
    window.location.reload();
  };

  const items = [
    {
      key: "1",
      label: <p>Price</p>,
    },
    {
      key: "2",
      label: <p>College</p>,
    },
    {
      key: "3",
      label: <p>Degree</p>,
    },
  ];

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/college/getcollege")
      .then((response) => response.json())
      .then((data) => setCollegeData(data.allCollege))
      .catch((err) => console.log(err));
  }, []);

  if (collegeData.length === 0) {
    return <div>Loading College....</div>;
  }

  console.log(filterValue);
  return (
    <>
      <Navbar />

      <div className="main-collagelist-div">
        <div className="main-collagelist-left-side-div scroll-container">
          <button
            onClick={() => {
              refreshPage();
            }}
          >
            Remove Filter
          </button>
          <Collapse
            items={[
              {
                key: "1",
                label: "State",
                children: (
                  <State
                    filterValue={filterValue}
                    onvaluechange={setFilterValue}
                  />
                ),
              },
            ]}
            defaultActiveKey={["1"]}
          />
          <Collapse
            items={[
              {
                key: "2",
                label: "City",
                children: (
                  <City
                    filterValue={filterValue}
                    onvaluechange={setFilterValue}
                  />
                ),
              },
            ]}
            defaultActiveKey={["2"]}
          />
          <Collapse
            items={[
              {
                key: "3",
                label: "Stream",
                children: (
                  <Stream
                    filterValue={filterValue}
                    onvaluechange={setFilterValue}
                  />
                ),
              },
            ]}
            defaultActiveKey={["3"]}
          />
          <Collapse
            items={[
              {
                key: "4",
                label: "Cources",
                children: (
                  <Cources
                    filterValue={filterValue}
                    onvaluechange={setFilterValue}
                  />
                ),
              },
            ]}
            defaultActiveKey={["4"]}
          />
          <Collapse
            items={[
              {
                key: "5",
                label: "College Type",
                children: (
                  <CollageType
                    filterValue={filterValue}
                    onvaluechange={setFilterValue}
                  />
                ),
              },
            ]}
            defaultActiveKey={["5"]}
          />
          <Collapse
            items={[
              {
                key: "6",
                label: "Enterance Exam Accepted",
                children: (
                  <CollageType
                    filterValue={filterValue}
                    onvaluechange={setFilterValue}
                  />
                ),
              },
            ]}
            defaultActiveKey={["6"]}
          />
          <Collapse
            items={[
              {
                key: "7",
                label: "Avg Fee Per Year (in Rupees)",
                children: (
                  <Fees
                    filterValue={filterValue}
                    onvaluechange={setFilterValue}
                  />
                ),
              },
            ]}
            defaultActiveKey={["7"]}
          />
          <Collapse
            items={[
              {
                key: "8",
                label: "Affiliation",
                children: (
                  <Affiliation
                    filterValue={filterValue}
                    onvaluechange={setFilterValue}
                  />
                ),
              },
            ]}
            defaultActiveKey={["8"]}
          />
          <Collapse
            items={[
              {
                key: "8",
                label: "Course Duration",
                children: (
                  <Duration
                    filterValue={filterValue}
                    onvaluechange={setFilterValue}
                  />
                ),
              },
            ]}
            defaultActiveKey={["9"]}
          />
          <div
            style={{ display: "flex", gap: "2rem", flexDirection: "column" }}
          >
            <div className="main-collagelist-first-img-div">
              <img
                src={require("../../Assets/collage-list-1.png")}
                alt="collage-list-1"
              />
            </div>
            <div className="main-collagelist-second-img-div">
              <img
                src={require("../../Assets/collage-list-2.png")}
                alt="collage-list-2"
              />
            </div>
          </div>
        </div>
        <div className="main-collagelist-right-side-div">
          <div className="collagelist-right-side-top-div">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
              arrow
            >
              <Button>Sort By: College</Button>
            </Dropdown>
          </div>
          <div className="main-collagelist-show-div">
            {collegeData?.map((ele) => (
              <div
                key={ele}
                className="single-product-div-top-B-school all-collage-list-div"
              >
                <img
                  src={ele.collegePhoto}
                  alt="mask-group"
                  className="collegephoto"
                />
                <h2
                  style={{ color: "black" }}
                  className="single-product-div-top-B-school-h2-tag"
                >
                  {ele.collegeName}
                </h2>
                <div className="main-centeral-div">
                  <div className="top-left-side-div">
                    <div>
                      <p>Rating</p>
                      <p style={{ fontWeight: "bolder" }}>
                        {ele.collegeRating}
                      </p>
                    </div>
                    <div>
                      <p>Course</p>
                      <p style={{ fontWeight: "bolder" }}>
                        {ele.collegecoursespecilzationfees?.map((ele) => (
                          <strong>{ele.course}&nbsp; </strong>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="top-right-side-div">
                    <div>
                      <p>Exam Accepted</p>
                      <p style={{ fontWeight: "bolder" }}>
                        {ele.collegeEntranceExam?.map((ele) => (
                          <strong>{ele}&nbsp;</strong>
                        ))}
                      </p>
                    </div>
                    <div>
                      <p>Average Package</p>
                      <p style={{ fontWeight: "bolder" }}>
                        {ele.collegeAvgPackage}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="apply-button-div">
                  <button className="apply-button">Apply Now</button>
                  {/* <button className="compare-button">Compare +</button> */}
                  <button className="compare-button">
                    <Link to={`/collage/${ele._id}`} style={{ color: "white" }}>
                      Know More...
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollageList;
