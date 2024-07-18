import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./CollageList.css";
import { Button, Dropdown } from "antd";
import { Collapse } from "antd";
import State from "./Filters/State";
import City from "./Filters/City";
import Cources from "./Filters/Cources";
import CollageType from "./Filters/CollageType";
import Fees from "./Filters/Fees";
import Affiliation from "./Filters/Affiliation";
import { getAttributeDetails } from "../../API/Getrequest";
import ExamAccepted from "./Filters/ExamAccepted";
import { Helmet } from "react-helmet";

const CollageList = () => {
  const [collegeData, setCollegeData] = useState([]);
  const [fitlerData, setFilterData] = useState([]);
  const [stateValue, setStateValue] = useState([]);
  const [CityValue, setCityValue] = useState([]);
  const [courseValue, setCourseValue] = useState([]);
  const [collegeTypeValue, setcollegeTypeValue] = useState([]);
  const [entranceExamValue, setEntranceExamValue] = useState([]);
  const [affiliationValue, setAffiliationValue] = useState([]);
  const [accreditionValue, setaccreditionValue] = useState([]);
  const [backendData, setBackendData] = useState({
    state: null,
    city: null,
    accredition: null,
    affiliation: null,
    entranceexam: null,
    course: null,
    collegetype: null,
  });

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

  useEffect(() => {
    const paths = [
      "attribute/getstate",
      "attribute/getcity",
      "attribute/getaccredition",
      "attribute/getaffiliation",
      "attribute/getentranceexam",
      "attribute/getcourse",
      "attribute/getcollegetype",
    ];

    Promise.all(paths.map((path) => getAttributeDetails(path)))
      .then((responses) => {
        const data = responses.map((response) => response.data);
        setBackendData({
          state: data[0].allstate,
          city: data[1].allCity,
          accredition: data[2].allAccredition,
          affiliation: data[3].allAffiliation,
          entranceexam: data[4].allEntranceExam,
          course: data[5].allCourses,
          collegetype: data[6].allCollegeTypeValue,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    // FILTER FOR STATE VALUE
    if (stateValue.length !== 0) {
      let val = collegeData.filter((college) =>
        stateValue.includes(college.collegeState)
      );
      setFilterData(val);
    }

    // FILTER FOR CITY VALUE
    if (CityValue.length !== 0) {
      let val = collegeData.filter((college) =>
        CityValue.includes(college.collegeCity)
      );
      setFilterData(val);
    }

    // COURSEVLUAE FOR CITY VALUE
    if (courseValue.length !== 0) {
      let val = collegeData.filter((college) =>
        college.collegecoursespecilzationfees.some((course) =>
          courseValue.includes(course.course)
        )
      );

      setFilterData(val);
    }

    // entranceExamValue FOR CITY VALUE
    if (entranceExamValue.length !== 0) {
      let val = collegeData.filter((college) =>
        college.collegeEntranceExam.some((course) =>
          entranceExamValue.includes(course)
        )
      );
      setFilterData(val);
    }
    // entranceExamValue FOR CITY VALUE
    if (accreditionValue.length !== 0) {
      let val = collegeData.filter((college) =>
        college.collegeAccreditation.some((course) =>
          accreditionValue.includes(course)
        )
      );
      setFilterData(val);
    }

    // FILTER FOR CITY VALUE
    if (affiliationValue.length !== 0) {
      let val = collegeData.filter((college) =>
        affiliationValue.includes(college.collegeAffiliation)
      );

      setFilterData(val);
    }

    if (
      stateValue.length === 0 &&
      CityValue.length === 0 &&
      courseValue.length === 0 &&
      collegeTypeValue.length === 0 &&
      entranceExamValue.length === 0 &&
      affiliationValue.length === 0 &&
      accreditionValue.length === 0
    ) {
      setFilterData(collegeData);
    }
  }, [
    collegeData,
    collegeTypeValue.length,
    stateValue,
    CityValue,
    courseValue,
    entranceExamValue,
    accreditionValue,
    affiliationValue,
  ]);

  const sameDisplayStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  };

  console.log("Yes, you are in this page....");
  return (
    <>
      <Navbar />
      <Helmet>
        <title>{"College Details | MBACounsel"}</title>
        <meta name="description" content={"pageDescription"} />
      </Helmet>
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
                    filterValue={stateValue}
                    onvaluechange={setStateValue}
                    showingValue={backendData.state}
                  />
                ),
              },
            ]}
            className="filter-collapse-divs"
            defaultActiveKey={["1"]}
          />
          <Collapse
            items={[
              {
                key: "2",
                label: "City",
                children: (
                  <City
                    filterValue={CityValue}
                    onvaluechange={setCityValue}
                    showingValue={backendData.city}
                    checkstatevalue={stateValue}
                  />
                ),
              },
            ]}
            className="filter-collapse-divs"
            defaultActiveKey={["2"]}
          />

          <Collapse
            items={[
              {
                key: "4",
                label: "Cources",
                children: (
                  <Cources
                    filterValue={courseValue}
                    onvaluechange={setCourseValue}
                    showingValue={backendData.course}
                  />
                ),
              },
            ]}
            className="filter-collapse-divs"
            defaultActiveKey={["4"]}
          />
          <Collapse
            items={[
              {
                key: "5",
                label: "College Type",
                children: (
                  <CollageType
                    filterValue={collegeTypeValue}
                    onvaluechange={setcollegeTypeValue}
                    showingValue={backendData.collegetype}
                  />
                ),
              },
            ]}
            className="filter-collapse-divs"
            defaultActiveKey={["5"]}
          />
          <Collapse
            items={[
              {
                key: "6",
                label: "Enterance Exam Accepted",
                children: (
                  <ExamAccepted
                    filterValue={entranceExamValue}
                    onvaluechange={setEntranceExamValue}
                    showingValue={backendData.entranceexam}
                  />
                ),
              },
            ]}
            className="filter-collapse-divs"
            defaultActiveKey={["6"]}
          />
          <Collapse
            items={[
              {
                key: "7",
                label: "Affilication",
                children: (
                  <Fees
                    filterValue={affiliationValue}
                    onvaluechange={setAffiliationValue}
                    showingValue={backendData.affiliation}
                  />
                ),
              },
            ]}
            className="filter-collapse-divs"
            defaultActiveKey={["7"]}
          />
          <Collapse
            items={[
              {
                key: "8",
                label: "Accredition",
                children: (
                  <Affiliation
                    filterValue={accreditionValue}
                    onvaluechange={setaccreditionValue}
                    showingValue={backendData.accredition}
                  />
                ),
              },
            ]}
            className="filter-collapse-divs"
            defaultActiveKey={["8"]}
          />
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
            {fitlerData.length !== 0
              ? fitlerData.map((ele) => (
                  <div
                    key={ele._id}
                    className="single-product-div-top-B-school all-collage-list-div"
                  >
                    <img
                      src={ele.collegeLogo}
                      alt="mask-group"
                      className="CollegeLogo"
                    />
                    <p
                      style={{ color: "black" }}
                      className="single-product-div-top-B-school-h2-tag"
                    >
                      {ele.collegeName}
                    </p>
                    <div
                      className="top-left-side-div"
                      style={{ padding: "1rem" }}
                    >
                      <div style={sameDisplayStyle}>
                        <p style={{ fontWeight: "bolder" }}>Rating</p>
                        <p style={{ fontSize: "12px" }}>{ele.collegeRating}</p>
                      </div>
                      <div style={sameDisplayStyle}>
                        <p style={{ fontWeight: "bolder" }}>Course</p>
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            flexWrap: "wrap",
                          }}
                        >
                          {ele.collegecoursespecilzationfees?.map((ele) => (
                            <p style={{ fontSize: "12px" }}>{ele.course}</p>
                          ))}
                        </div>
                      </div>
                      <div style={sameDisplayStyle}>
                        <p style={{ fontWeight: "bolder" }}>Exam Accepted</p>
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            flexWrap: "wrap",
                          }}
                        >
                          {ele.collegeEntranceExam?.map((ele) => (
                            <p style={{ fontSize: "12px" }}>{ele}&nbsp;</p>
                          ))}
                        </div>
                      </div>
                      <div style={sameDisplayStyle}>
                        <p style={{ fontWeight: "bolder" }}>Average Package</p>
                        <p style={{ fontSize: "12px" }}>
                          {ele.collegeAvgPackage}
                        </p>
                      </div>
                    </div>

                    <div className="apply-button-div">
                      <button className="apply-button">Apply Now</button>
                      {/* <button className="compare-button">Compare +</button> */}
                      <button
                        className="compare-button"
                        onClick={() =>
                          localStorage.setItem(
                            "collegelist",
                            JSON.stringify(ele)
                          )
                        }
                      >
                        <Link
                          to={`/college/${ele.collegeCollegeUrl}`}
                          style={{ color: "white" }}
                        >
                          Know More...
                        </Link>
                      </button>
                    </div>
                  </div>
                ))
              : collegeData?.map((ele) => (
                  <div
                    key={ele._id}
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
                          <div style={{ fontWeight: "bolder" }}>
                            {ele.collegeEntranceExam?.map((ele) => (
                              <p>{ele}&nbsp;</p>
                            ))}
                          </div>
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
                      <button
                        className="compare-button"
                        onClick={() =>
                          localStorage.setItem(
                            "collegelist",
                            JSON.stringify(ele)
                          )
                        }
                      >
                        <Link
                          to={`/college/${ele.collegeCollegeUrl.replace(
                            / /g,
                            "-"
                          )}`} // it replace space with -
                          // to={`/college/${ele.collegeName}`} it replace space with % and look good.
                          style={{ color: "white" }}
                        >
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
