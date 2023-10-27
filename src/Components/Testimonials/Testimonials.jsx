import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    image: require("../../Assets/textimonial.png"),
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at turpis eu libero vestibulum sodales.",
  },
  {
    id: 2,
    image: require("../../Assets/textimonial.png"),
    review:
      "Vestibulum rhoncus enim ac justo malesuada, in congue ligula tincidunt. Sed id turpis vel nunc consequat varius.",
  },

  {
    id: 3,
    image: require("../../Assets/textimonial.png"),
    review:
      "Vestibulum rhoncus enim ac justo malesuada, in congue ligula tincidunt. Sed id turpis vel nunc consequat varius.",
  },
  {
    id: 4,
    image: require("../../Assets/textimonial.png"),
    review:
      "Vestibulum rhoncus enim ac justo malesuada, in congue ligula tincidunt. Sed id turpis vel nunc consequat varius.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="container">
      <div className="baby-container">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <img
                src={testimonial.image}
                alt={`Testimonial ${testimonial.id}`}
                className="testimonial-image"
              />
              <div className="testimonial-content">
                <p>Elvish Bhaiiiiiii....</p>
                <p className="testimonial-review">
                  <FaQuoteLeft color="orange" /> {testimonial.review}
                  <FaQuoteRight color="orange" />
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
