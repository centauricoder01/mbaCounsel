import React from 'react'
import "./ArticleComponent.css"
import { Link } from 'react-router-dom';
import { CiCalendar } from "react-icons/ci";

const ArticleComponent = () => {
  return (
    <Link  className='main-article' to={"/allarticle"}>
    <div >
    <div class="card card-of-article">
  <img src={require("../../Assets/article-demo-image.jpg")} class="card-img-top" alt="" />
  
  <div className='head-of-article'>
    <h5 className='mt-2'>Loreehenderit non quam fugit. Possimus ab asperiores aliquam eos excepturi quidem quam aspernatur.</h5>
  </div>
  <div className='date-and-icon-of-article' >
    <div className='date-of-article'>
    <p> <CiCalendar />   29-Nov-2323</p>
    </div>
    <div className='date-of-article'>
    <p> <b  >Read More</b></p>

    </div>
  </div>
 
</div>
      
    </div></Link>
  )
}

export default ArticleComponent;


