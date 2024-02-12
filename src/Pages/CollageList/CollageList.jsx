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
import { MdOutlineVerified } from "react-icons/md";

const CollageList = () => {
  const [collegeData, setCollegeData] = useState([]);
  let arr = [
    {
      id: 1,
      name: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      recomand: true,
      ads: false,
    },
    {
      id: 2,
      name: "Lorem ipsum dolor",
      recomand: false,
      ads: false,
    },
    {
      id: 3,
      name: "Lorem ipsum dolor, sit amet",
      recomand: false,
      ads: false,
    },
    {
      id: 4,
      name: "Lorem ipsum dolor, sit adipisicing elit.",
      recomand: false,
      ads: true,
    },
    {
      id: 5,
      name: "Lorem ipsum dolor, sit amet consectetur elit.",
      recomand: true,
      ads: false,
    },
    {
      id: 6,
      name: "Lorem, sit amet consectetur adipisicing elit.",
      recomand: true,
      ads: false,
    },
    {
      id: 7,
      name: " dolor, sit amet adipisicing elit.",
      recomand: false,
      ads: false,
    },
    {
      id: 8,
      name: "Lorem ipsum dolor, sit amet adipisicing elit.",
      recomand: false,
      ads: false,
    },
    {
      id: 9,
      name: "Lorem ipsum dolor, sit amet.",
      recomand: true,
      ads: false,
    },
    {
      id: 10,
      name: "Lorem  , sit amet consectetur  elit.",
      recomand: false,
      ads: false,
    },
    {
      id: 11,
      name: "Lorem  , sit amet consectetur  elit.",
      recomand: false,
      ads: false,
    },
    {
      id: 12,
      name: "Lorem  , sit amet consectetur  elit.",
      recomand: false,
      ads: true,
    },
  ];

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

  if (arr.length === 0) {
    return <div>Loading College....</div>;
  }
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
                children: <State />,
              },
            ]}
            defaultActiveKey={["1"]}
          />
          <Collapse
            items={[
              {
                key: "2",
                label: "City",
                children: <City />,
              },
            ]}
            defaultActiveKey={["2"]}
          />
          <Collapse
            items={[
              {
                key: "3",
                label: "Stream",
                children: <Stream />,
              },
            ]}
            defaultActiveKey={["3"]}
          />
          <Collapse
            items={[
              {
                key: "4",
                label: "Cources",
                children: <Cources />,
              },
            ]}
            defaultActiveKey={["4"]}
          />
          <Collapse
            items={[
              {
                key: "5",
                label: "College Type",
                children: <CollageType />,
              },
            ]}
            defaultActiveKey={["5"]}
          />
          <Collapse
            items={[
              {
                key: "6",
                label: "Enterance Exam Accepted",
                children: <CollageType />,
              },
            ]}
            defaultActiveKey={["6"]}
          />
          <Collapse
            items={[
              {
                key: "7",
                label: "Avg Fee Per Year (in Rupees)",
                children: <Fees />,
              },
            ]}
            defaultActiveKey={["7"]}
          />
          <Collapse
            items={[
              {
                key: "8",
                label: "Affiliation",
                children: <Affiliation />,
              },
            ]}
            defaultActiveKey={["8"]}
          />
          <Collapse
            items={[
              {
                key: "8",
                label: "Course Duration",
                children: <Duration />,
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
            {collegeData?.map(
              (ele) => (
                <div
                  key={ele}
                  className="single-product-div-top-B-school all-collage-list-div"
                >
                  <img
                    src={ele.collegePhoto}
                    alt="mask-group"
                    className="collegephoto"
                  />
                  {/* {ele.collegeRecommended === false ? (
                    <div className="collage-list-sponsored-div">
                      <img
                        src={require("../../Assets/recommended.png")}
                        alt="sponsered"
                      />
                    </div>
                  ) : null} */}
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
                      <Link
                        to={`/collage/${ele._id}`}
                        style={{ color: "white" }}
                      >
                        Know More...
                      </Link>
                    </button>
                  </div>
                </div>
              )
              // ele.ads === false ? (
              //   <div>I will add this if there is some adds content is there...</div>
              // ) : (
              //   <img
              //     src="https://c0.wallpaperflare.com/preview/931/255/701/banner-digital-graphics-lion.jpg"
              //     alt="adsbanner"
              //   />
              // )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollageList;
