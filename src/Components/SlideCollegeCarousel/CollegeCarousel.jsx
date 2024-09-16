import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CollegeCard } from '../../Components/CollegeCard/CollegeCard'; // Assuming this is your card component

function CarouselFadeExample() {
  return (
    <Carousel  interval={3000} prevIcon={true} nextIcon={false}>
      {/* First Slide */}
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <CollegeCard />
          <CollegeCard />
          <CollegeCard />
        </div>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <CollegeCard />
          <CollegeCard />
          <CollegeCard />
        </div>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <CollegeCard />
          <CollegeCard />
          <CollegeCard />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
