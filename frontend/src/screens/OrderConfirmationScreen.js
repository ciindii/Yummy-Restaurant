import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import delivery from "../webImg/deliveryman.png";
import { FcCheckmark } from "react-icons/fc";
import styled from "styled-components";

const Styles = styled.div`
  #divcontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .confirmation-card {
    background-color: #f5f5f5;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: 20px auto;
  }
  img {
    width: 100px;
  }
  h6 {
    color: #666666;
    padding: 15px;
  }
`;

const OrderConfirmationScreen = () => {
  return (
    <Styles>
      <div id="divcontainer">
        <Row>
          <h1>Order Confirmation</h1>
        </Row>
        <div className="confirmation-card">
          <Row>
            <h2>
              <FcCheckmark /> Your Order Has Been Placed!
            </h2>
          </Row>
          <Row>
            <Col>
              <Image md={2} src={delivery} alt="delivery"></Image>
            </Col>
          </Row>
        </div>
        <Row>
          <h6>Your order is being prepared...</h6>
          <h4>Estimated 25 minutes for delivery!</h4>
        </Row>
      </div>
    </Styles>
  );
};

export default OrderConfirmationScreen;
