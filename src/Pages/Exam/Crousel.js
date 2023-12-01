import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Crousel.css"

function App() {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
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
          initialSlide: 2,
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

  const carouselItems = [
    { id: 1, color: "#ff5733", height: 200, width: 200 },
    { id: 2, color: "#33ff57", height: 300, width: 300 },
    { id: 3, color: "#5733ff", height: 200, width: 200 },
    { id: 4, color: "#5733ff", height: 200, width: 200 },
    { id: 5, color: "#5733ff", height: 200, width: 200 },
    { id: 6, color: "#5733ff", height: 200, width: 200 },
    { id: 7, color: "#5733ff", height: 200, width: 200 },
    // Add more items as needed
  ];

  return (
    <div className="App">
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div className="crousel-item"
            key={item.id}
         
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem illum excepturi incidunt eveniet nam cum perferendis
              quam dignissimos voluptate dolores.
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
