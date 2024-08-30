import React from 'react'
import "./Blogredirect.css"
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'

const BlogRedirect = () => {
  return (
    <div>

    <Navbar/>
    <div className="row main-head-image-of-blog-redirect-page " >
        <div className="col-md-12 head-image-of-blog-redirect-page">
          <img className='img-fluid  back-image-of-blog-redirct-page' src={require("../../../Assets/latest-news-back-image-redirect.jpg")} alt="" />
          <div  className='text-of-back-image-blog'>
            <h1>Blog Details</h1>
            {/* <p>Home / Blog Details</p> */}
          </div>
          <div  className='text-of-back-image-blog-two'>
            {/* <h1>Blog Details</h1> */}
            <p>Home / Blog Details</p>
          </div>
        </div>
      </div>
    <div className='container-fluid  mb-5' >
    <div className="row main-all-content-of-blog-redirect-page ">
      <div className="col-md-8 all-content-of-blog-redirect-page">
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos veritatis distinctio amet? Hic possimus iste provident, quisquam deserunt at atque doloribus mollitia quae. Molestias praesentium ratione quae quas possimus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis amet doloremque, beatae perferendis sapiente nobis quia. Quasi iure incidunt at aliquid maiores numquam necessitatibus, atque laborum laudantium quod temporibus est suscipit ipsum itaque officia dolores. Harum earum odio adipisci similique?</p>
        <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque corporis ab, mollitia quae ea
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis et saepe voluptas, numquam obcaecati mollitia consequuntur blanditiis excepturi, eius distinctio minus assumenda voluptatibus a. Distinctio vero officiis modi atque fugiat.
        Aperiam obcaecati saepe con Natus obcaecati numquam reiciendis perferendis ea, amet expedita, quaerat distinctio ab saepe praesentium! Magni odit id incidunt sint veniam quaerat commodi tenetur!
        Nemo eaque suscipit, autem molestiae illo corporis! Porro eum blanditiis, quis accusamus, ipsam praesentium nostrum saepe nulla quibusdam quidem repellat! Quod repellat in doloribus nesciunt facilis ducimus, beatae facere! Neque.</p>
       
        
        <ul>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          
        </ul>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium sunt eveniet. Quo distinctio, ad, minus laborum perspiciatis ut in molestias recusandae quam eveniet iste laudantium delectus, aperiam repudiandae sequi.</h4>
      </div>
      <div className="col-md-3 border border-dark cont-promp-main ">
      <div className='cont-promp'></div>
      <div className='cont-promp'></div>
      <div className='cont-promp'></div>
      <div className='cont-promp'></div>
      <div className='cont-promp'></div>
      <div className='cont-promp'></div>
      <div className='cont-promp'></div>
      <div className='cont-promp'></div>
       
      </div>
    </div>
      
    </div>
    <Footer/>
      
    </div>
  )
}

export default BlogRedirect
