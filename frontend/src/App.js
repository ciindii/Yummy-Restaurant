import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderConfirmationScreen from "./screens/OrderConfirmationScreen";
import DessertScreen from "./screens/DessertScreen";
import SideScreen from "./screens/SideScreen";
import EntreeScreen from "./screens/EntreeScreen";
import AboutScreen from "./screens/AboutScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-5">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/menu" element={<MenuScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/desserts" element={<DessertScreen />} />
            <Route path="/entrees" element={<EntreeScreen />} />
            <Route path="/sides" element={<SideScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/login/delivery" element={<DeliveryScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/order" element={<OrderConfirmationScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
