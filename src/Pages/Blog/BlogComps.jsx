import React from 'react'
import "./BlogComps.css"
import { Link } from 'react-router-dom';
import { CiCalendar } from "react-icons/ci";

const BlogComponent = () => {
  return (
    <Link  className='main-blogs' to={"/allblogs"}>
    <div >
    <div class="card">
  <img src={require("../../Assets/blog-demo-imgae.jpg")} class="card-img-top" alt="" />
  <div className='date-and-icon-of-latest-news' >
    <div className='icon-and-course-of-latest-news'>
    </div>
    <div className='date-of-latest-news'>
    <p> <CiCalendar />   29-11-2323</p>

    </div>
  </div>
  <div className='head-of-latest-news'>
    <h5>Loreehenderit non quam fugit. Possimus ab asperiores aliquam eos excepturi quidem quam aspernatur.</h5>
  </div>
 
</div>



      
    </div></Link>
  )
}

export default BlogComponent;


