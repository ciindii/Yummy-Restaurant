import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import { BsArrowRightShort } from "react-icons/bs";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { deliveryAddress } = cart;
  const navigate = useNavigate();
  //makes sure user enter in delivery info
  if (!deliveryAddress.address) {
    navigate("/delivery");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Select Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              className="pt-3"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              disabled
              type="radio"
              label="Stripe (coming soon)"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              className="pt-3"
              //checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button className="mt-3" type="submit" variant="primary">
          Continue <BsArrowRightShort />
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
