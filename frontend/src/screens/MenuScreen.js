import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
//import products from "../products";

const MenuScreen = () => {
  const [products, setProducts] = useState([]);
  //load products when page renders
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <div className="ml-auto">
      <h1>Menu</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} lx={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MenuScreen;
