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
import Footer from "./footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./contact";

function App() {
  const cartItems = useSelector((state) => state.cart);
  const cartCount = cartItems.reduce((t, i) => t + i.quantity, 0);

  return (
    <>
      <ToastContainer position="bottom-center" autoClose={2000} />

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
  <div className="container">

    {/* Logo / Brand */}
    <Link className="navbar-brand fw-bold text-warning" to="/home">
      DishHub
    </Link>

    {/* Toggle Button */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Nav Links */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

        <li className="nav-item">
          <Link className="nav-link text-white" to="/home">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/veg">Veg</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/nonveg">Non-Veg</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/milk">Milk</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/menu">Menu</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">📞Contact</Link>
        </li>

        {/* Cart */}
        <li className="nav-item">
          <Link className="nav-link position-relative text-white" to="/cart">
            🛒 Cart
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                {cartCount}
              </span>
            )}
          </Link>
        </li>

        {/* Account Dropdown */}
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-warning"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            Account
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><Link className="dropdown-item" to="/login">Login</Link></li>
            <li><Link className="dropdown-item" to="/register">Register</Link></li>
            <li><Link className="dropdown-item" to="/myorders">My Orders</Link></li>
            <li><Link className="dropdown-item" to="/wishlist">Wishlist</Link></li>
          </ul>
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
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
         <Footer />
      </div>
    </>
  );
}

export default App;
