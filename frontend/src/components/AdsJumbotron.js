import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import placeholder from "../webImg/placeholder.png";
import deliveryad from "../webImg/freedelivery.jpg";
import tenoff from "../webImg/10off.jpg";
import dessertad from "../webImg/dessertitems.jpg";

const Styles = styled.div`
  a {
    text-decoration: none;
  }
  p {
    font-size: 40px;
    background-color: #fff;
    border-radius: 25px;
  }
`;

const AdsJumbotron = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Styles>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={deliveryad} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={tenoff} alt="second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={dessertad} alt="third slide" />

          <Carousel.Caption>
            <p>
              <Link to="/desserts">Check Out Our Dessert Section!</Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Styles>
  );
};

export default AdsJumbotron;
