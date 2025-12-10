import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchMilkItems } from "./store";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
  const dispatch = useDispatch();
  const { MilkItems = [], loading, error } = useSelector((state) => state.milk);

  useEffect(() => {
    dispatch(fetchMilkItems());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(MilkItems.length / itemsPerPage) || 1;

  const currentItems = MilkItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [MilkItems, totalPages, currentPage]);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <div className="container py-4">

      {/* 🔶 Component Title Orange */}
      <h1 className="text-center fw-bold mb-4" style={{ color: "orange" }}>
        🥤 Milkshakes 
      </h1>

      {loading && <p className="text-center text-primary">Loading...</p>}
      {error && <p className="text-center text-danger">⚠ {error}</p>}
      {!loading && MilkItems.length === 0 && (
        <p className="text-center text-secondary">No Milk Items Found</p>
      )}

      <div className="row g-4">
        {currentItems.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6">
            <div
              className="card shadow-sm h-100 rounded-4 border border-success border-2"
              style={{ transition: "0.3s" }}
            >
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

                <p className="text-muted small flex-grow-1">{item.description}</p>

                {/* 🔴 Price Red */}
                <h5 className="fw-bold" style={{ color: "red" }}>
                  ₹{item.price}
                </h5>

                <button
                  className="btn mt-2 w-100 rounded-3"
                  style={{ backgroundColor: "black", color: "white" }}
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
      {MilkItems.length > 0 && (
        <nav className="mt-4 d-flex justify-content-center">
          <ul className="pagination pagination-md">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""} mx-1`}>
              <button className="page-link" onClick={handlePrev}>
                ◀ Previous
              </button>
            </li>

            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? "active" : ""} mx-1`}
              >
                <button
                  className="page-link"
                  style={{
                    backgroundColor: currentPage === index + 1 ? "black" : "white",
                    color: currentPage === index + 1 ? "white" : "black",
                    borderColor: "black",
                  }}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""} mx-1`}>
              <button className="page-link" onClick={handleNext}>
                Next ▶
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Milk;
