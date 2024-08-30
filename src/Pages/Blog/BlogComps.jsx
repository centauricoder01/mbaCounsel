import React from 'react';
import "./BlogComps.css";
import { CiCalendar } from "react-icons/ci";

const BlogComponent = ({ blog }) => {
  const handleClick = () => {
    // Construct the URL for the blog
    const blogUrl = `/allblogs`; // Adjust the URL according to your routing
    window.open( "/allblogs");
  };

  return (
    <div className='main-blogs' onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="card">
        <img 
          src={require("../../Assets/blog-demo-imgae.jpg")} 
          className="card-img-top" 
          alt="Blog" 
        />
        <div className='date-of-latest-news'>
          <p>author - draft</p>
          <p><CiCalendar /> 29-11-2323</p>
        </div>
        <div className='head-of-latest-news'>
          <h5>Loreehenderit non quam fugit. Possimus ab asperiores aliquam eos excepturi quidem quam aspernatur.</h5>
        </div>
      </div>
    </div>
  );
}

export default BlogComponent;
