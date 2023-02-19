import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import Message from "../components/Message";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    navigate("/cart");
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
    //navigate("/shipping");
  };

  //only add to cart if theres an id
  // useEffect(() => {
  //   if (params.id) {
  //     dispatch(addToCart(params.id, qty));
  //   }
  // }, [dispatch, params.id, qty]);
  return (
    <div>
      <Row>
        <Col md={8}>
          <h1>Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is currently empty.
              <Link to="/menu">Take a look at the Menu</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              <Row>
                <Col className="m-3">
                  <Link to="/menu">return to menu</Link>
                </Col>
              </Row>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.img} alt={item.name} fluid />
                    </Col>
                    <Col md={2}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price.toFixed(2)}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <p>
                  {cartItems.reduce(
                    (accumulator, item) => accumulator + Number(item.qty),
                    0
                  )}{" "}
                  item(s) in your cart.
                </p>
                $
                {cartItems
                  .reduce(
                    (accumulator, item) => accumulator + item.qty * item.price,
                    0
                  )
                  .toFixed(2)}{" "}
                (+ tax)
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed to checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartScreen;
