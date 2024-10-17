import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Header.css";
import { Link } from "react-router-dom";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { BsBuildingsFill } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Crousal from "../Crousal/Crousal";
import { fetchData } from "../../API/Getrequest.js";
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  const [banner, setBannner] = useState([]);
  const [notification, setNotification] = useState([]);
  const [latestnews, setLatestNews] = useState([]);

  useEffect(() => {
    fetchData("getbanner")
      .then((res) => setBannner(res.allBanner))
      .catch(console.log);
    fetchData("getnotification")
      .then((res) => setNotification(res.allNotification))
      .catch(console.log);
    fetchData("getlatestnews")
      .then((res) => setLatestNews(res.allNews))
      .catch(console.log);
  }, []);

  return (
    <div className="main-header-div">
      <div className="HomeCarousel">
        <Crousal items={banner} />
      </div>
      <div class="header-latest-news">
        <div class="title">Latest Notification</div>
        <ul>
          {notification?.map((ele) => (
            <li>
              <Link to={"/"}>{ele.Text}</Link>
            </li>
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

      <div className="home-page-news-container-div">
        <h1 className="text-center">News</h1>
        <div className="home-page-news-main-div">
          {latestnews.slice(0, 6)?.map((ele) => (
            <div>
              <img src={ele.Image} alt="newsImage" width={100} />
              <div className="home-page-news-child-div">
                {/* <p>{ele.MetaDescription}</p> */}
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia maxime molestias eveniet doloremque quidem accusamus?
                  Voluptatum fuga quaerat hic odit.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p>{ele.Date}</p>

                  <button>
                    Read more <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "100%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <button
            style={{
              borderRadius: "1rem",
              border: "1px solid rgb(230, 230, 230)",
              padding: "10px",
              width: "20%",
              fontWeight: "bolder",
            }}
          >
            View more.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
