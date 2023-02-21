import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BsCreditCard2Back } from "react-icons/bs";
import { GiPaperBagOpen } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>
              <HiOutlineUser /> Sign In
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/delivery">
            <Nav.Link>
              <CiDeliveryTruck /> Delivery
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Delivery</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>
              <BsCreditCard2Back /> Payment
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>
              <GiPaperBagOpen /> Place Order
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
