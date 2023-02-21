import React, { useEffect, useState } from "react";
import {
  Button,
  Row,
  Col,
  Card,
  Image,
  ListGroup,
  Form,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import Message from "../components/Message";
import { createOrder } from "../actions/orderActions";
import { BsCreditCard2Back } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      navigate(`/order`);
    }
  }, [navigate, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        deliveryAddress: cart.deliveryAddress,
        paymentMethod: cart.paymentMethod,
        deliveryFee: cart.deliveryFee,
        tax: cart.tax,
        total: cart.total,
      })
    );
  };

  const submitCoupon = (e) => {
    e.preventDefault();
    if (coupon !== "YUMMY") {
      setMessage("Coupon Applied!");
    } else {
      setMessage("Sorry, this is not a vaild coupon code.");
    }
  };

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.deliveryFee = addDecimals(cart.itemsPrice > 30 ? 0 : 10);
  cart.tax = addDecimals(Number((0.065 * cart.itemsPrice).toFixed(2)));
  cart.total = (
    Number(cart.itemsPrice) +
    Number(cart.deliveryFee) +
    Number(cart.tax)
  ).toFixed(2);
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                <BsCreditCard2Back /> Deliver to
              </h2>
              <p>
                <strong>Address</strong>
                <p>
                  {cart.deliveryAddress.address} <br></br>
                  {cart.deliveryAddress.city}, {cart.deliveryAddress.postalCode}
                </p>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>
                <BsCreditCard2Back /> Payment
              </h2>
              <p>{cart.paymentMethod}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Orders</h2>
              {cart.cartItems.length === 0 ? (
                <Message>You have nothing in your cart.</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image thumbnail src={item.img} alt={item.name} />
                        </Col>
                        <Col md={4}>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={1}>{item.qty}</Col>
                        <Col md={2}>${item.price.toFixed(2)}</Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>subtotal</Col>
                  <Col>$ {cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Delivery Fee</Col>
                  <Col>${cart.deliveryFee}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${cart.tax}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.total}</Col>
                </Row>
              </ListGroup.Item>

              {error && <Message variant="danger">{error}</Message>}
              {/* <Message>{message}</Message> */}
              <ListGroup.Item>
                <Row>
                  <Form onSubmit={submitCoupon}>
                    <Form.Group controlId="coupon">
                      <Col>
                        <Form.Label className="pt-3">Coupon</Form.Label>
                        <Form.Control
                          placeholder="coupon code?"
                          onChange={(e) => setCoupon(e.target.value)}
                        ></Form.Control>
                      </Col>
                      <Col>
                        <Button
                          className="mb-1 mt-3"
                          variant="outline-secondary"
                          type="submit"
                        >
                          apply discount
                        </Button>
                      </Col>
                    </Form.Group>
                  </Form>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="d-grid gap-2">
                <Button
                  type="button"
                  size="lg"
                  className="btn-block"
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrder;
