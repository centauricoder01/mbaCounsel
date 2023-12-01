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
  let arr = [
    {
      id: 1,
      name: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      recomand: true,
    },
    {
      id: 2,
      name: "Lorem ipsum dolor",
      recomand: false,
    },
    {
      id: 3,
      name: "Lorem ipsum dolor, sit amet",
      recomand: false,
    },
    {
      id: 4,
      name: "Lorem ipsum dolor, sit adipisicing elit.",
      recomand: false,
    },
    {
      id: 5,
      name: "Lorem ipsum dolor, sit amet consectetur elit.",
      recomand: true,
    },
    {
      id: 6,
      name: "Lorem, sit amet consectetur adipisicing elit.",
      recomand: true,
    },
    {
      id: 7,
      name: " dolor, sit amet adipisicing elit.",
      recomand: false,
    },
    {
      id: 8,
      name: "Lorem ipsum dolor, sit amet adipisicing elit.",
      recomand: false,
    },
    {
      id: 9,
      name: "Lorem ipsum dolor, sit amet.",
      recomand: true,
    },
    {
      id: 10,
      name: "Lorem  , sit amet consectetur  elit.",
      recomand: false,
    },
  ];

  const items = [
    {
      key: "1",
      label: <p>Price</p>,
    },
    {
      key: "2",
      label: <p>Collage</p>,
    },
    {
      key: "3",
      label: <p>Degree</p>,
    },
  ];
  return (
    <>
      <Navbar />

      <div className="main-collagelist-div">
        <div className="main-collagelist-left-side-div scroll-container">
          <Collapse
            items={[
              {
                key: "1",
                label: "State",
                children: <State />,
              },
            ]}
          />
          <Collapse
            items={[
              {
                key: "2",
                label: "City",
                children: <City />,
              },
            ]}
          />
          <Collapse
            items={[
              {
                key: "3",
                label: "Stream",
                children: <Stream />,
              },
            ]}
          />
          <Collapse
            items={[
              {
                key: "4",
                label: "Cources",
                children: <Cources />,
              },
            ]}
          />
          <Collapse
            items={[
              {
                key: "5",
                label: "Collage Type",
                children: <CollageType />,
              },
            ]}
          />
          <Collapse
            items={[
              {
                key: "6",
                label: "Enterance Exam Accepted",
                children: <CollageType />,
              },
            ]}
          />
          <Collapse
            items={[
              {
                key: "7",
                label: "Avg Fee Per Year (in Rupees)",
                children: <Fees />,
              },
            ]}
          />
          <Collapse
            items={[
              {
                key: "8",
                label: "Affiliation",
                children: <Affiliation />,
              },
            ]}
          />
          <Collapse
            items={[
              {
                key: "8",
                label: "Course Duration",
                children: <Duration />,
              },
            ]}
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
              <Button>Sort By: Collage</Button>
            </Dropdown>
          </div>
          <div className="main-collagelist-show-div">
            {arr.map((ele) => (
              <div
                key={ele}
                className="single-product-div-top-B-school all-collage-list-div"
              >
                <img
                  src={require("../../Assets/Mask-Group.png")}
                  alt="mask-group"
                />
                {ele.recomand === true ? (
                  <div className="collage-list-sponsored-div">
                    <img
                      src={require("../../Assets/recommended.png")}
                      alt="sponsered"
                    />
                  </div>
                ) : null}
                <h2
                  style={{ color: "black" }}
                  className="single-product-div-top-B-school-h2-tag"
                >
                  {ele.name}
                </h2>
                <div className="main-centeral-div">
                  <div className="top-left-side-div">
                    <div>
                      <p>Duration</p>
                      <p style={{ fontWeight: "bolder" }}>2 Years</p>
                    </div>
                    <div>
                      <p>Course</p>
                      <p style={{ fontWeight: "bolder" }}>MBBS, B.ED</p>
                    </div>
                  </div>
                  <div className="top-right-side-div">
                    <div>
                      <p>Exam Accepted</p>
                      <p style={{ fontWeight: "bolder" }}>CAT, CUET</p>
                    </div>
                    <div>
                      <p>Average Package</p>
                      <p style={{ fontWeight: "bolder" }}>60 LPA</p>
                    </div>
                  </div>
                </div>

                <div className="apply-button-div">
                  <button className="apply-button">Apply Now</button>
                  <button className="compare-button">Compare +</button>
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
