import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "./store";

function MyOrders() {
  const dispatch = useDispatch();
  const { orders } = useSelector(state => state.login);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center fw-bold">My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-center text-muted">You have no orders yet.</p>
      ) : (
        <div className="row g-3">
          {orders.map(order => (
            <div key={order._id} className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Order ID: {order._id}</h5>
                  <p className="card-text mb-1"><strong>Total:</strong> ₹{order.finalAmount}</p>
                  <p className="card-text mb-1"><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                  <p className="card-text"><strong>Status:</strong> {order.status}</p>

                  <hr />

                  <h6 className="fw-semibold">Items:</h6>
                  <ul className="list-group list-group-flush">
                    {order.items.map(item => (
                      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center p-2">
                        <span>{item.name} x {item.quantity}</span>
                        <span>₹{item.price * item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;
