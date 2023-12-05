import React from 'react'
import "./AllComp.css"
import { Link } from 'react-router-dom';

const AllNewsComp = () => {
  return (
    <Link  className='main-latest-news' to={"/redirectFolder"}>
    <div >
    <div class="card">
  <img src={require("../../Assets/latest-news-demo-image.jpg")} class="card-img-top" alt="" />
  <div className='date-and-icon-of-latest-news' >
    <div className='icon-and-course-of-latest-news'>
      <p>lorem</p> <span>|</span>
      <p>lorem</p>
    </div>
    <div className='date-of-latest-news'>
    <p>29-11-2323</p>

    </div>
  </div>
  <div className='head-of-latest-news'>
    <h5>Loreehenderit non quam fugit. Possimus ab asperiores aliquam eos excepturi quidem quam aspernatur.</h5>
  </div>
 
</div>



      
    </div></Link>
  )
}

export default AllNewsComp;


