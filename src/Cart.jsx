import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  applyCoupon
} from "./store";
import SendOrderEmail from "./SendOrderEmail";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const { discount, msg } = useSelector((state) => state.coupon);

  const dispatch = useDispatch();
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [showQR, setshowQR] = useState(false);

  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const buttonDiscountAmount = (totalAmount * discountPercent) / 100;
  const couponDiscountAmount = (totalAmount * discount) / 100;
  const gst = (totalAmount * 18) / 100;
  const finalTotal = totalAmount - buttonDiscountAmount - couponDiscountAmount;

  const handlecheckout = () => {
    const orderData = {
      items: cartItems,
      total: totalAmount,
      discount: discountPercent + discount,
      finalAmount: finalTotal,
      date: new Date(),
    };

    fetch("http://localhost:9065/api/v1/products/placeOrders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then(() => {
        alert("Order Placed Successfully!");
        navigate("/MyOrders");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="py-5" style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <div className="container">

        {/* Cart Heading */}
        <h2 className="text-center text-light fw-bold mb-4 display-4" style={{ fontFamily: "Poppins" }}>
          🛒 My Stylish Cart
        </h2>

        {/* Empty Cart */}
        {cartItems.length === 0 && (
          <h4 className="text-center text-warning fw-bold">Your cart is empty</h4>
        )}

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div key={item.id} className="glass-card card mb-4 p-3 shadow bg-dark text-light">
            <div className="row align-items-center">
              <div className="col-md-2 text-center">
                <img src={item.image} alt={item.name} className="img-fluid rounded" />
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold" style={{ fontFamily: "Poppins" }}>{item.name}</h5>
                <p className="text-warning mb-1">₹{item.price}</p>
              </div>
              <div className="col-md-4 d-flex align-items-center justify-content-center gap-3">
                <button className="btn btn-outline-light btn-sm"
                  onClick={() => dispatch(decrementQuantity(item.id))}>−</button>
                <span className="fw-bold text-light fs-5">{item.quantity}</span>
                <button className="btn btn-outline-light btn-sm"
                  onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
              </div>
              <div className="col-md-2 text-end">
                <button className="btn btn-danger btn-sm shadow"
                  onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </div>
          </div>
        ))}

        {/* Price Summary */}
        {cartItems.length > 0 && (
          <div className="glass-card card p-4 mb-4 shadow bg-dark text-light text-center">
            <p className="fs-5 mb-1">Total Amount: <b>₹{totalAmount.toFixed(2)}</b></p>
            <p className="mb-1">Button Discount: <b>₹{buttonDiscountAmount.toFixed(2)}</b></p>
            <p className="mb-1">Coupon Discount: <b>₹{couponDiscountAmount.toFixed(2)}</b></p>
            <p className="mb-1">GST (18%): <b>₹{gst.toFixed(2)}</b></p>
            <h3 className="text-warning fw-bold mt-2">Final Total: ₹{finalTotal.toFixed(2)}</h3>
          </div>
        )}

        {/* Discount Buttons */}
        <div className="d-flex gap-3 justify-content-center flex-wrap mb-4">
          <button className="btn btn-warning shadow fw-bold" onClick={() => setDiscountPercent(10)}>10% OFF</button>
          <button className="btn btn-warning shadow fw-bold" onClick={() => setDiscountPercent(20)}>20% OFF</button>
          <button className="btn btn-warning shadow fw-bold" onClick={() => setDiscountPercent(30)}>30% OFF</button>
        </div>

        {/* Coupon Input */}
        <h5 className="text-center text-light fw-bold mb-2" style={{ fontFamily: "Poppins" }}>
          🔑 Apply Coupon & Unlock Discount
        </h5>
        <div className="input-group mb-4 w-75 mx-auto">
          <input
            type="text"
            className="form-control text-center"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button className="btn btn-dark fw-bold" onClick={() => dispatch(applyCoupon(couponCode))}>Apply</button>
        </div>

        {msg && (
          <p className={`text-center fw-bold fs-5 ${discount > 0 ? "text-success" : "text-danger"}`}>
            {msg}
          </p>
        )}

        {/* Email */}
        <div className="mb-4 text-center">
          <label className="form-label text-light fw-bold fs-5 d-block mb-2">Receive Bill Over Email</label>
          <input
            type="email"
            className="form-control w-50 mx-auto text-center"
            placeholder="Enter your email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
        </div>

        <SendOrderEmail
          cartItems={cartItems}
          FinalTotal={finalTotal}
          tax={gst}
          totalAmount={finalTotal + gst}
          customerEmail={customerEmail}
        />

        {/* Scan & Pay */}
        <div className="text-center my-4">
          <button className="btn btn-success btn-lg shadow-lg px-4 fw-bold" onClick={() => setshowQR(true)}>
            💳 Scan & Pay
          </button>
        </div>

        {showQR && (
          <div className="text-center mb-4">
            <h3 className="text-light">📌 Scan to Pay</h3>
            <h4 className="text-warning fw-bold mb-3">Amount: ₹{finalTotal.toFixed(2)}</h4>
            <QRCode
              value={`upi://pay?pa=9347823691-2@ybl&pn=Chaithanya&am=${finalTotal.toFixed(2)}&cu=INR`}
              style={{ height: "250px", width: "250px" }}
            />
          </div>
        )}

        {/* Checkout */}
        {cartItems.length > 0 && (
          <div className="text-center">
            <button className="btn btn-primary btn-lg shadow-lg px-5 fw-bold" onClick={handlecheckout}>
              ✔ Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
