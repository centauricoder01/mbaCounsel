import React, { useState, useEffect } from "react";

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setIndex((prevIndex) => (prevIndex + 1) % items.length);
    // }, 2000);
    // return () => clearInterval(interval);
  }, [items]);

  const nextItem = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div style={{ position: "relative", zIndex: "-4" }}>
      {/* <button onClick={prevItem}>Previous</button> */}
      <img
        src={items[index]?.Img}
        alt={items[index]?.Img}
        style={{ width: "100%", height: "30rem" }}
      />
      <h2 style={{ position: "absolute", top: "50%", left: "10%" }}>
        {items[index]?.Text}
      </h2>
      {/* <button onClick={nextItem}>Next</button> */}
    </div>
  );
};

export default Carousel;
