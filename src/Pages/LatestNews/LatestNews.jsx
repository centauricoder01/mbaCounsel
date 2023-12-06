import React from "react";
import "./LatestNews.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AllNewsComp from "./AllNewsComp"
const LatestNews = () => {
  return (
    <>
      <Navbar />

      <div className="main-back-image-of-latest-new">
        <img
          className="back-image-of-latest-new"
          src={require("../../Assets/mba-top-back-image.png")}
          alt=""
        />
      </div>
      <div className="container-fluid">
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
