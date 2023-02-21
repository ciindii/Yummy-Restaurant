import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";

const SideScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const filterByCategory = products.filter(
    (product) => product.category === "side"
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="ml-auto">
      <h1>Sides</h1>
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {filterByCategory.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} lx={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default SideScreen;
