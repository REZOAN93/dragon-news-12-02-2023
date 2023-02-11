import React from "react";
import { Carousel } from "react-bootstrap";
import brandpic1 from "../asstes/Brand/Brand1.png";
import brandpic2 from "../asstes/Brand/brand2.png";
import brandpic3 from "../asstes/Brand/brand3.jpg";

const BrandCarousal = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={brandpic1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={brandpic2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={brandpic3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousal;
