import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchNonvegItems } from "./store";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

function NonVeg() {
  const dispatch = useDispatch();
  const { NonvegItems = [], loading, error } = useSelector(
    (state) => state.nonveg || { NonvegItems: [] }
  );

  useEffect(() => {
    dispatch(fetchNonvegItems());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(NonvegItems.length / itemsPerPage) || 1;

  const currentItems = NonvegItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container py-4">
      {/* Title */}
      <h1 className="text-center fw-bold mb-4" style={{ color: "orange" }}>
        🍗 Non-Veg Fodd
      </h1>

      {loading && <p className="text-center text-primary">Loading...</p>}
      {error && <p className="text-center text-danger">⚠ {error}</p>}
      {!loading && NonvegItems.length === 0 && (
        <p className="text-center text-secondary">No Non-Veg Items Found</p>
      )}

      {/* Items */}
      <div className="row g-4">
        {currentItems.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6">
            <div className="card shadow h-100 rounded-4">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top rounded-top"
                style={{ height: "230px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                {/* Item Name Black */}
                <h5 className="fw-bold text-dark">{item.name}</h5>

                <p className="text-muted small flex-grow-1">{item.description}</p>

                {/* Price Red */}
                <h5 className="fw-bold" style={{ color: "red" }}>
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
      {NonvegItems.length > 0 && (
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

export default NonVeg;
