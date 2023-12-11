import React from "react";
import "./Blog.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BlogComponent from "./BlogComps";
import { IoSearchOutline } from "react-icons/io5";
const Blog = () => {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
      <div className="row main blog head">
        <div className="col-md-12 blog-head-back-text ">
          <h1>Blog</h1>
          <p>Home / Blog</p>
        </div>
      </div>
        <div className="row mt-5 main-search-and-count-of-blog">
          <div className="col-md-4 count-of-blog">
        <h4>
        We found <b>8</b> Blogs available for you
        </h4>
            </div>
          <div className="col-md-3 search-bar-of-blog ">
        <input className="form-control search-of-blog" type="search" placeholder="Search Our Blog" aria-label="Search"/>
        <i className="icon-of-search-bar" ><IoSearchOutline /></i>
          
            </div>

        </div>
        <div className="row main-all-news-of-latest-news">
        
        <BlogComponent/>
        <BlogComponent/>
        <BlogComponent/>
        <BlogComponent/>
        <BlogComponent/>
        <BlogComponent/>
        <BlogComponent/>
        <BlogComponent/>
         
        

        </div>
        <Footer/>
      
      </div>
    </>
  );
};

export default Blog;
