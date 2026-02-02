import { Link, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Veg from "./veg";
import NonVeg from "./nonveg";
import Milk from "./milk";
import Home from "./home";
import About from "./About";
import Menu from "./menu";
import Cart from "./Cart";
import Orders from "./MyOrders";
import Register from "./Register";
import Login from "./Login";
import Wishlist from "./wishlist";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const cartItems = useSelector((state) => state.cart);
  const cartCount = cartItems.reduce((t, i) => t + i.quantity, 0);

  return (
    <>
      <ToastContainer position="bottom-center" autoClose={2000} />

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <div className="container-fluid">

          {/* Brand */}
          <Link className="navbar-brand d-flex align-items-center gap-2 text-white" to="/home">
            <img
              src="logodish.jpg.png"
              alt="DishHub"
              width="45"
              height="45"
              className="rounded-circle"
            />
            <span className="fw-bold">DishHub</span>
          </Link>

          {/* Toggle */}
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto text-center">

              {[
                ["Home", "/home"],
                ["Veg", "/veg"],
                ["NonVeg", "/nonveg"],
                ["Milk", "/milk"],
                ["Menu", "/menu"],
                ["About", "/about"],
                ["My Orders", "/myorders"],
                ["Wishlist ❤️", "/wishlist"],
                ["Register", "/register"],
                ["Login", "/login"],
              ].map(([name, path]) => (
                <li className="nav-item" key={path}>
                  <Link
                    className="nav-link text-white fw-semibold py-2 opacity-75 hover-opacity-100"
                    to={path}
                  >
                    {name}
                  </Link>
                </li>
              ))}

              {/* Cart */}
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold position-relative py-2" to="/cart">
                  🛒 Cart
                  {cartCount > 0 && (
                    <span className="badge bg-danger rounded-pill ms-2">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* ROUTES */}
      <div className="pt-5 mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myorders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
