import React from "react";
import "./Exam.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Exam = () => {
  const settings = {
    className: "ceiinter",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <>
      <Navbar />
      <div className="main-exam-div">
        <div className="main-exam-banner">
          <img
            src={require("../../Assets/exam-banner.png")}
            alt="Exam-banner"
          />
        </div>
        <div className="main-exam-banner-bottom-crousal">
          <Slider {...settings}>
            <div className="main-exam-crousal-div">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                beatae quo laboriosam dolorem numquam. Libero tempora id quaerat
                dolor, expedita, vero quia explicabo ut accusantium cupiditate
                repellat ullam veniam recusandae.
              </p>
            </div>
            <div className="main-exam-crousal-div">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                beatae quo laboriosam dolorem numquam. Libero tempora id quaerat
                dolor, expedita, vero quia explicabo ut accusantium cupiditate
                repellat ullam veniam recusandae.
              </p>
            </div>
            <div className="main-exam-crousal-div">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                beatae quo laboriosam dolorem numquam. Libero tempora id quaerat
                dolor, expedita, vero quia explicabo ut accusantium cupiditate
                repellat ullam veniam recusandae.
              </p>
            </div>
            <div className="main-exam-crousal-div">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                beatae quo laboriosam dolorem numquam. Libero tempora id quaerat
                dolor, expedita, vero quia explicabo ut accusantium cupiditate
                repellat ullam veniam recusandae.
              </p>
            </div>
            <div className="main-exam-crousal-div">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                beatae quo laboriosam dolorem numquam. Libero tempora id quaerat
                dolor, expedita, vero quia explicabo ut accusantium cupiditate
                repellat ullam veniam recusandae.
              </p>
            </div>
            <div className="main-exam-crousal-div">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                beatae quo laboriosam dolorem numquam. Libero tempora id quaerat
                dolor, expedita, vero quia explicabo ut accusantium cupiditate
                repellat ullam veniam recusandae.
              </p>
            </div>
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Exam;
