import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

const MenuScreen = () => {
  return (
    <div className="ml-auto">
      <h1>Menu</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} lx={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MenuScreen;
