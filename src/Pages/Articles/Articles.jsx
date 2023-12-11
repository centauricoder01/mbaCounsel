import React from "react";
import "./Articles.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ArticleComponent from "./ArticleComponent";
import { IoSearchOutline } from "react-icons/io5";
const Articles = () => {
  return (
    <>
      <Navbar />

      <div className="container-fluid" style={{overflow:"hidden"}} >
        <div className="row main-home-and-article-of-article-page">
          <div className="col-md-2 home-and-article-of-article-page ">
            <p>Home / Articles</p>
          </div>
        </div>
        <div className="row home-and-latest-news-of-latest-news-page ">
          <div className="col-md-12 article-head-back-text ">
            <h1>Articles</h1>
          </div>
        </div>
        <div className="row mt-5 main-search-and-count-of-article">
          <div className="col-md-5 mt-4  d-none d-md-block count-of-article">
            <h4>
              We found <b>10</b> article available for you
            </h4>
          </div>
          <div className="col-md-5 search-bar-of-article ">
          <div className=" row search-and-dropdown">
            <div class=" col-md 6  mt-4 dropdown dropdown-of-article"  >
              <button
                class="btn border border-dark  dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{width:"96%"}}
              >
                Select Category
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{width:"88%"}}>
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
            <div className=" col-md-6 mt-4 search-bar-of-article">
              <input
                className="form-control search-of-article"
                type="search"
                placeholder="Search Our Article"
                aria-label="Search"
                style={{width: '20rem'}}
              />
              <i className="icon-of-search-bar">
                <IoSearchOutline />
              </i>
            </div>
            </div>
          </div>
        </div>
        <div className="row main-all-news-of-latest-news">
          <ArticleComponent />
          <ArticleComponent />
          <ArticleComponent />
          <ArticleComponent />
          <ArticleComponent />
          <ArticleComponent />
          <ArticleComponent />
          <ArticleComponent />
          <ArticleComponent />
          <ArticleComponent />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Articles;
