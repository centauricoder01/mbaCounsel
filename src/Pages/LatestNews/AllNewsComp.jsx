import React from 'react';
import "./AllComp.css";
import { Link } from 'react-router-dom';

const AllNewsComp = () => {
  return (
    <a 
      className='main-latest-news' 
      href="/redirectFolder" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <div>
        <div className="card card-of-latest-news">
          <img 
            src={require("../../Assets/latest-news-demo-image.jpg")} 
            className="card-img-top" 
            alt="Latest News"
          />
          <div className='date-and-icon-of-latest-news'>
            <div className='icon-and-course-of-latest-news'>
              <p>lorem</p> <span>|</span>
              <p>lorem</p>
            </div>
            <div className='date-of-latest-news'>
              <p>29-Nov-2023</p>
            </div>
          </div>
          <div className='head-of-latest-news'>
            <h5>
              Loreehenderit non quam fugit. Possimus ab asperiores aliquam eos excepturi quidem quam aspernatur.
            </h5>
          </div>
        </div>
      </div>
    </a>
  );
};

export default AllNewsComp;
