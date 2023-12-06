import React from 'react'
import Slider from "react-slick";
import OtherCollegeContent from './OtherCollegeContent';





const OtherCollege = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5, responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    
    
      return (
   <>
 <Slider {...settings}>
      
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
<OtherCollegeContent/>
     
   
     
    </Slider>


   </>
  )
}

export default OtherCollege;
