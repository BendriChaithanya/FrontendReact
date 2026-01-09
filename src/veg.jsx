import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVegItems, addToCart } from "./store";
import { toggleWishlist } from "./wishlistSlice";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

function VegMenu() {
  const dispatch = useDispatch();

  const { VegItems = [], loading, error } = useSelector(
    state => state.veg || {}
  );
  const wishlist = useSelector(state => state.wishlist);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchVegItems());
  }, [dispatch]);

  const filteredItems = VegItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const popularItems = filteredItems.filter(
    item => (item.rating || 4.5) >= 4.5
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;

  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const isWishlisted = id =>
    wishlist.some(i => i.id === id || i._id === id);

  return (
    <div className="container py-4">
      {/* TITLE */}
      <h2 className="text-center fw-bold mb-4">🥗 VEG FOODIE</h2>

      {/* SEARCH */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <input
            className="form-control rounded-pill"
            placeholder="Search veg food..."
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {loading && <p className="text-center text-info">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* POPULAR ITEMS */}
      {popularItems.length > 0 && (
        <>
          <h5 className="mb-3 fw-bold">🔥 Popular Items</h5>

          <div className="row g-4 mb-5">
            {popularItems.slice(0, 4).map(item => (
              <div key={item.id} className="col-md-3 col-sm-6">
                <div className="card h-100 shadow-sm">
                  <span className="badge bg-warning text-dark position-absolute m-2">
                    Popular
                  </span>

                  <img
                    src={item.image}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={item.name}
                  />

                  <div className="card-body">
                    <h6 className="fw-bold">{item.name}</h6>
                    <p className="fw-semibold text-danger">₹{item.price}</p>

                    <button
                      className="btn btn-success w-100 rounded-pill"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* MAIN ITEMS */}
      <div className="row g-3">
        {currentItems.map(item => (
          <div key={item.id} className="col-md-3 col-sm-6">
            <div className="card h-100 shadow-sm border-0 position-relative">
              {/* WISHLIST */}
              <button
                className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle"
                onClick={() => {
                  dispatch(toggleWishlist(item));
                  toast.info(
                    isWishlisted(item.id)
                      ? "Removed from wishlist"
                      : "Added to wishlist ❤️"
                  );
                }}
              >
                {isWishlisted(item.id) ? "❤️" : "🤍"}
              </button>

              <img
                src={item.image}
                className="card-img-top"
                style={{ height: "160px", objectFit: "cover" }}
                alt={item.name}
              />

              <div className="card-body d-flex flex-column">
                <h6 className="fw-bold">{item.name}</h6>
                <p className="text-muted small flex-grow-1">
                  {item.dec}
                </p>

                <h6 className="fw-bold text-danger">₹{item.price}</h6>

                <button
                  className="btn btn-dark rounded-pill mt-2"
                  onClick={() => {
                    dispatch(addToCart(item));
                    toast.success("Added to cart 🛒");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <nav className="mt-4 d-flex justify-content-center">
        <ul className="pagination gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <li
              key={i}
              className={`page-item ${
                currentPage === i + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link rounded-pill"
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default VegMenu;
