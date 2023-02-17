import React, { useEffect, useState } from "react";
//import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import { Row, Col, Image, ListGroup, Button, Form } from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

const ProductScreen = ({ match }) => {
  const [qty, setQty] = useState(1);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch, params.id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate(`/cart`);
  };
  //for each product, where product._id is === to the id thats in the url
  //will find the correct product
  //const [product, setProduct] = useState({});
  //product.find((p) => p._id === params.id);
  // useEffect(() => {
  //   const getProduct = async () => {
  //     const { data } = await axios.get(`/api/products/${params.id}`);
  //     setProduct(data);
  //   };
  //   getProduct();
  // }, [params]);
  return (
    <>
      <Link className="btn" to="/">
        X
      </Link>
      {loading ? (
        "Loading..."
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.img} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
              <ListGroup.Item>${product.price} plus tax</ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Qty</Col>
                  <Col>
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  className="btn-block p-2 mt-3"
                  type="button"
                >
                  Add to Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
