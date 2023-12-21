import React from "react";
import { useState, useEffect } from "react";
import "./Crousal.css";

const Crousal = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <div className="carousel">
      <button
        className="carousel-button carousel-button-prev"
        onClick={prevImage}
      >
        Previous
      </button>
      <img className="carousel-image" src={images[currentImageIndex]} alt="" />
      <button
        className="carousel-button carousel-button-next"
        onClick={nextImage}
      >
        Next
      </button>
    </div>
  );
};

export default Crousal;
