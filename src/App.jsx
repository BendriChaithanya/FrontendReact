import { Link, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import Veg from "./veg";
import NonVeg from "./nonveg";
import Milk from "./milk";
import About from "./About";
import Menu from "./Menu";
import Cart from "./Cart";
import Home from "./home";
import Orders from "./MyOrders";
import { ToastContainer } from "react-toastify";
import Register from "./Register";
import Login from "./login";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const cartItems = useSelector((state) => state.cart);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app-container position-relative">

      {/* Background Video */}
      <div className="position-fixed top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-100 h-100 object-fit-cover d-none d-md-block"
        >
          <source src="vid2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Fallback background image for mobile */}
        <img 
          src="vid2-poster.jpg" 
          alt="Background" 
          className="w-100 h-100 object-fit-cover d-block d-md-none"
        />
      </div>

      <ToastContainer position="top-center" autoClose={2000} />

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/home">
            <img
              src="logo.jpg.png"
              alt="BhojanBazaar"
              className="rounded-circle border"
              style={{ width: 55, height: 55 }}
            />
            <span className="fw-bold fs-4">BhojanBazaar</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {["Home","Veg","NonVeg","Milk","About","Menu","My Orders","Register","Login"].map((item, idx) => (
                <li className="nav-item" key={idx}>
                  <Link 
                    className="nav-link text-light fw-medium" 
                    to={`/${item.replace(/\s+/g, '')}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <Link className="nav-link position-relative fw-semibold text-light" to="/cart">
                  🛒 Cart
                  {cartCount > 0 && (
                    <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <div className="pt-5 mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/MyOrders" element={<Orders />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
