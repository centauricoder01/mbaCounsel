import React, { useState } from "react";
import "./Blog.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import BlogComponent from "./BlogComps";
import { IoSearchOutline } from "react-icons/io5";

// Generate a large array of blog data for demonstration
const generateBlogData = (num) => {
  return Array.from({ length: num }, (_, index) => ({
    id: index,
    title: `Blog Title ${index + 1}`,
    content: `This is the content of blog ${index + 1}.`,
  }));
};

const Blog = () => {
  const [blogs, setBlogs] = useState(generateBlogData(120)); // Initial static data
  const [visibleCount, setVisibleCount] = useState(40); // Number of visible blogs
  const [hasMore, setHasMore] = useState(true); // Whether there are more blogs to load

  const loadMoreBlogs = () => {
    if (visibleCount < blogs.length) {
      setVisibleCount(prevCount => prevCount + 40);
    } else {
      setHasMore(false); // No more blogs to load
    }
  };

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row main blog head">
          <div className="col-md-12 blog-head-back-text ">
            <h1>Blog</h1>
            {/* <p>Home / Blog</p> */}
          </div>
          <div className="col-md-12 blog-head-back-text-two ">
            {/* <h1>Blog</h1> */}
            <p style={{cursor:"pointer"}}>Home / Blog</p>
          </div>
        </div>
        <div className="row mt-5 main-search-and-count-of-blog">
          <div className="col-md-4 count-of-blog">
            <h4>
              We found <b>{blogs.length}</b> Blogs available for you
            </h4>
          </div>
          <div className="col-md-3 search-bar-of-blog ">
            <input className="form-control search-of-blog" type="search" placeholder="Search Our Blog" aria-label="Search"/>
            <i className="icon-of-search-bar" ><IoSearchOutline /></i>
          </div>
        </div>
        <div className="row main-all-news-of-latest-news">
          {blogs.slice(0, visibleCount).map((blog) => (
            <BlogComponent key={blog.id} blog={blog} /> // Pass individual blog data to BlogComponent
          ))}
        </div>
        {!hasMore && (
          <div className="row">
            <div className="col-md-12 text-center">
              <p>No more blogs to load</p>
            </div>
          </div>
        )}
        {hasMore && (
          <div className="row">
            <div className="col-md-12 view-more-button-blog-page">
              <button className="btn btn-primary" onClick={loadMoreBlogs}>Load More</button>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Blog;
