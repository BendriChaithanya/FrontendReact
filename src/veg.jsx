import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchVegItems } from "./store";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

function Veg() {
  const dispatch = useDispatch();

  const { VegItems = [], loading, error } = useSelector(
    (state) => state.veg || { VegItems: [] }
  );

  useEffect(() => {
    dispatch(fetchVegItems());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(VegItems.length / itemsPerPage) || 1;

  const currentItems = VegItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container py-4">

      {/* 🔶 Component Title Orange */}
      <h1 className="text-center fw-bold mb-4" style={{ color: "orange" }}>
        🥗 Veg Food
      </h1>

      {loading && <p className="text-center text-primary">Loading...</p>}
      {error && <p className="text-center text-danger">⚠ {error}</p>}
      {!loading && VegItems.length === 0 && (
        <p className="text-center text-secondary">No Veg Items Found</p>
      )}

      {/* Items Grid */}
      <div className="row g-4">
        {currentItems.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6">
            <div className="card shadow h-100 rounded-4 border border-success border-2">

              <img
                src={item.image}
                alt={item.name}
                className="card-img-top rounded-top"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">

                {/* 🔹 Item Name Black */}
                <h5 className="fw-bold" style={{ color: "black" }}>
                  {item.name}
                </h5>

                <p className="text-muted small flex-grow-1">{item.dec}</p>

                {/* 🔴 Price Red */}
                <h5 className="fw-semibold" style={{ color: "red" }}>
                  ₹{item.price}
                </h5>

                <button
                  className="btn btn-dark mt-2 w-100 rounded-3"
                  onClick={() => {
                    dispatch(addToCart(item));
                    toast.success(`${item.name} added to cart!`);
                  }}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {VegItems.length > 0 && (
        <nav className="mt-4 d-flex justify-content-center">
          <ul className="pagination pagination-lg gap-2">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link rounded-3 fw-bold"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                ◀ Prev
              </button>
            </li>

            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link rounded-3 fw-bold"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link rounded-3 fw-bold"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next ▶
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Veg;
