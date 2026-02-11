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
  const navigate = useNavigate();

  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [showQR, setShowQR] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const manualDiscount = (subtotal * discountPercent) / 100;
  const couponDiscount = (subtotal * discount) / 100;
  const gst = (subtotal * 18) / 100;
  const grandTotal = subtotal - manualDiscount - couponDiscount + gst;

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="w-75" style={{ maxWidth: "900px" }}>

        <h2 className="fw-bold text-center mb-4">
          Your Cart ({cartItems.length})
        </h2>

        {cartItems.length === 0 && (
          <h5 className="text-muted text-center">Your cart is empty</h5>
        )}

        {/* CART ITEMS */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="card mb-3 p-3 border-0 rounded-4 shadow-sm"
            style={{ transition: "0.3s" }}
            onMouseEnter={(e) => {
              e.currentTarget.classList.replace("shadow-sm", "shadow-lg");
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.replace("shadow-lg", "shadow-sm");
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div className="row align-items-center">

              <div className="col-md-2 text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid rounded"
                  style={{ maxHeight: "80px" }}
                />
              </div>

              <div className="col-md-4">
                <h6>{item.name}</h6>
                <span className="text-primary fw-bold">
                  ₹{item.price.toFixed(2)}
                </span>
              </div>

              <div className="col-md-3 d-flex gap-2">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </button>
              </div>

              <div className="col-md-3 text-end">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>

            </div>
          </div>
        ))}

        {/* DISCOUNT BUTTONS */}
        {cartItems.length > 0 && (
          <>
            <div className="text-center mt-4">
              <button
                className="btn btn-outline-warning mx-2"
                onClick={() => setDiscountPercent(10)}
              >
                10%
              </button>

              <button
                className="btn btn-outline-warning mx-2"
                onClick={() => setDiscountPercent(20)}
              >
                20%
              </button>

              <button
                className="btn btn-outline-warning mx-2"
                onClick={() => setDiscountPercent(30)}
              >
                30%
              </button>
            </div>

            {/* COUPON */}
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button
                className="btn btn-dark"
                onClick={() => dispatch(applyCoupon(couponCode))}
              >
                Apply
              </button>
            </div>

            {msg && (
              <p className={`text-center mt-2 ${
                discount > 0 ? "text-success" : "text-danger"
              }`}>
                {msg}
              </p>
            )}

            {/* ORDER SUMMARY */}
            <div className="card p-4 mt-4 shadow-sm border-0 rounded-4">
              <h5 className="fw-bold text-center mb-3">Order Summary</h5>

              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>GST (18%)</span>
                <span>₹{gst.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between text-danger">
                <span>Manual Discount</span>
                <span>- ₹{manualDiscount.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between text-danger">
                <span>Coupon Discount</span>
                <span>- ₹{couponDiscount.toFixed(2)}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>

              {/* EMAIL */}
              <input
                type="email"
                className="form-control mt-3"
                placeholder="Enter email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />

              <SendOrderEmail
                cartItems={cartItems}
                FinalTotal={grandTotal}
                tax={gst}
                totalAmount={grandTotal}
                customerEmail={customerEmail}
              />

              {/* QR */}
              <button
                className="btn btn-success w-100 mt-3"
                onClick={() => setShowQR(true)}
              >
                Scan & Pay
              </button>

              {showQR && (
                <div className="text-center mt-3">
                  <QRCode
                    value={`upi://pay?pa=9347823691-2@ybl&pn=Chaithanya&am=${grandTotal.toFixed(2)}&cu=INR`}
                    style={{ height: 180, width: 180 }}
                  />
                </div>
              )}

              {/* CHECKOUT */}
              <button
                className="btn btn-dark w-100 mt-4"
                onClick={() => navigate("/MyOrders")}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Cart;
