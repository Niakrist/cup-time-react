import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CartPage from "../pages/cart/CartPage";
import Home from "../pages/home/Home";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Navigate to={"/products?category=tea"} />} />
        <Route path="/products" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </main>
  );
};

export default Main;
