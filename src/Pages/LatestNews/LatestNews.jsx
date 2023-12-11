import React from "react";
import "./LatestNews.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AllNewsComp from "./AllNewsComp"
const LatestNews = () => {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
      <div className="row main-home-and-article-of-article-page">
          <div className="col-md-2 home-and-article-of-article-page ">
            <p>Home / Latest News</p>
          </div>
        </div>
        <div className="row main-article-head-back-text ">
          <div className="col-md-12 article-head-back-text ">
            <h1>Latest News</h1>
          </div>
        </div>
        <div className="row mt-5 main-drop-down-of-latest-news">
          <div className="col-md-1 drop-down-of-latest-news ">
            <div class="dropdown">
              <button
                class="btn  dropdown-toggle drop-down-number-one-latest-news "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Select Categories
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-1 drop-down-of-latest-news ">
            <div class="dropdown">
              <button
                class="btn  dropdown-toggle drop-down-number-one-latest-news "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Archives
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Another 
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Something
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row main-all-news-of-latest-news">
        
        <AllNewsComp/>
        <AllNewsComp/>
        <AllNewsComp/>
        <AllNewsComp/>
        <AllNewsComp/>
        <AllNewsComp/>
         
        

        </div>
        <Footer/>
      
      </div>
    </>
  );
};

export default LatestNews;
