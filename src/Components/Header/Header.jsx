import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Header.css";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { BsBuildingsFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Crousal from "../Crousal/Crousal";
import banner from "../../Assets/Banner.png";
import { fetchData } from "../../API/Getrequest.js";

const Header = () => {
  const [date, setDate] = useState(new Date());
  const [banner, setBannner] = useState([]);
  const [notification, setNotification] = useState([]);

  const paragraphsFromBackend = [
    "This is the first paragraph.",
    "This is the second paragraph.",
    "This is the third paragraph.",
  ];
  useEffect(() => {
    fetchData("getbanner")
      .then((res) => {
        setBannner(res.allBanner);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    fetchData("getnotification")
      .then((res) => {
        setNotification(res.allNotification);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="main-header-div">
      <div className="HomeCarousel">
        <Crousal items={banner} />
      </div>
      <div class="header-latest-news">
        <div class="title">Latest Notification</div>

        <ul>
          {notification?.map((ele) => (
            <li>{ele.Text}</li>
          ))}
        </ul>
      </div>
      <div className="crousal-bottom">
        <div className="first-div">
          <GiGiftOfKnowledge size={50} color="orange" />
          <p style={{ fontWeight: "bolder" }}>MBA</p>
        </div>
        <div className="second-div">
          <BsBuildingsFill size={50} color="orange" />
          <p style={{ fontWeight: "bolder" }}>PGDM</p>
        </div>
        <div className="third-div">
          <HiOutlineStatusOnline size={50} color="orange" />
          <p style={{ fontWeight: "bolder" }}>Online MBA</p>
        </div>
        <div className="third-div">
          <FaUniversity size={50} color="orange" />
          <p style={{ fontWeight: "bolder" }}>Executive MBA/PGM</p>
        </div>
      </div>

      <div className="eventandnews">
        <div className="event">
          <h1 className="text-center">Event</h1>
          <div className="calendar-container">
            <Calendar onChange={setDate} value={date} />
          </div>
        </div>

        <div className="news">
          <h1 className="text-center">News</h1>
          <div className="actualnews">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              molestias, modi nemo asperiores dignissimos non cum laudantium
              illum iste impedit!
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "-1rem",
              }}
            >
              <p>
                <i>10 aug 2012</i>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  cursor: "pointer",
                }}
              >
                read more <BsFillArrowRightCircleFill />
              </p>
            </div>

            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae
              tempore quos vero, quibusdam dolorem!
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "-1rem",
              }}
            >
              <p>
                <i>10 aug 2012</i>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  cursor: "pointer",
                }}
              >
                read more <BsFillArrowRightCircleFill />
              </p>
            </div>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iste deserunt, voluptatem exercitationem iusto quia.
              Veniam, ad neque!
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "-1rem",
              }}
            >
              <p>
                <i>10 aug 2012</i>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  cursor: "pointer",
                }}
              >
                read more <BsFillArrowRightCircleFill />
              </p>
            </div>
            <hr />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              dignissimos placeat at hic, quidem quas quae, error cum nostrum,
              dolore culpa?
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "-1rem",
              }}
            >
              <p>
                <i>10 aug 2012</i>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  cursor: "pointer",
                }}
              >
                read more <BsFillArrowRightCircleFill />
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
