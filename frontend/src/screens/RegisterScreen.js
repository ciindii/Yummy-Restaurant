import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userAction";

const RegisterScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  //location.search will have url query string
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    console.log(redirect);
    //if userInfo exists
    if (userInfo) {
      //redirect if we are already logged in
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  //dispatch login when user submit
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("The passwords do not match.");
    } else {
      dispatch(register(name, email, password));
    }
    navigate("/cart");
  };

  return (
    <FormContainer>
      <h1>Create an Account</h1>
      {message && <Message variant="danger">{message}</Message>}
      {loading ? (
        "Loading..."
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label className="pt-3">Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label className="pt-3">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label className="pt-3">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label className="pt-3">Confirm Password</Form.Label>
              <Form.Control
                type="Password"
                placeholder="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button className="mt-3" type="submit" variant="primary">
              Sign In
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              Already have an account?{" "}
              <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                Sign In
              </Link>
            </Col>
          </Row>
        </div>
      )}
    </FormContainer>
  );
};

export default RegisterScreen;
