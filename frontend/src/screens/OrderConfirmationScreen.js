import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import delivery from "../webImg/deliveryman.png";

const OrderConfirmationScreen = () => {
  return (
    <div className="m-auto">
      <Row className="m-3">
        <h1>Order Confirmation</h1>
      </Row>
      <Row className="m-4">
        <h2>Your Order Has Been Placed!</h2>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Image md={2} src={delivery} alt="delivery"></Image>
        </Col>
      </Row>
    </div>
  );
};

export default OrderConfirmationScreen;
