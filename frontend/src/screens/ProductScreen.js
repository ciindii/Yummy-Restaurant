import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";

const ProductScreen = ({ match }) => {
  const params = useParams();
  //for each product, where product._id is === to the id thats in the url
  //will find the correct product
  const [product, setProduct] = useState({});
  //product.find((p) => p._id === params.id);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`);
      setProduct(data);
    };
    getProduct();
  }, [params]);
  return (
    <>
      <Link className="btn" to="/">
        X
      </Link>
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
              <Button className="btn-block p-2 mt-3" type="button">
                Add to Order
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
