import React, { useState } from "react";
import "./LatestNews.css";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AllNewsComp from "./AllNewsComp";

const LatestNews = () => {
  // Initial number of news items to display
  const [visibleItems, setVisibleItems] = useState(40);

  // Function to handle the "View More" button click
  const handleViewMore = () => {
    setVisibleItems(visibleItems + 40);
  };

  // Generate an array of news items (for example purposes)
  const newsItems = Array.from({ length: 100 }, (_, index) => index + 1);

  // Get the visible news items based on the current state
  const displayedNewsItems = newsItems.slice(0, visibleItems);

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row main-home-and-article-of-article-page"></div>
        <div className="row main-article-head-back-text ">
          <div className="col-md-12 article-head-back-text" >
            <h1 >Latest News</h1>
          </div>
          <div className="col-md-2 home-and-latest-of-article-page ">
          <p style={{ cursor: "pointer" }}>
              <Link to="/" style={{ color: "white", textDecoration: "none"}} >Home</Link> / Latest news
            </p>
          </div>
        </div>
        <div className="row mt-5 main-drop-down-of-latest-news">
          <div className="col-md-1 drop-down-of-latest-news ">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle drop-down-number-one-latest-news "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Categories
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-1 drop-down-of-latest-news ">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle drop-down-number-one-latest-news "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Archives
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row main-all-news-of-latest-news">
          {displayedNewsItems.map((item) => (
            <AllNewsComp key={item} />
          ))}
        </div>
        {visibleItems < newsItems.length && (
          <div className="row mt-4">
            <div className="col-md-12  latest-news-view-more-button">
              <button
                className="btn btn-primary "
                onClick={handleViewMore}
              >
                View More
              </button>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default LatestNews;
