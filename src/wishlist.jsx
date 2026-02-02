import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import { toggleWishlist } from "./wishlistSlice";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist);

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">

        <h2 className="mb-4 text-center fw-bold">
          ❤️ My Wishlist
        </h2>

        {wishlist.length === 0 ? (
          <p className="text-center text-muted fs-5">
            Your wishlist is empty 💔
          </p>
        ) : (
          <div className="row g-4">
            {wishlist.map(item => (
              <div key={item.id} className="col-md-3 col-sm-6">
                <div className="card h-100 shadow-sm border-0 position-relative">

                  <button
                    className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle"
                    onClick={() => {
                      dispatch(toggleWishlist(item));
                      toast.info("Removed from wishlist");
                    }}
                  >
                    ❤️
                  </button>

                  <img
                    src={item.image}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h6 className="fw-bold">{item.name}</h6>
                    <p className="text-muted small flex-grow-1">
                      {item.dec}
                    </p>

                    <h6 className="fw-bold text-danger">
                      ₹{item.price}
                    </h6>

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
        )}

      </div>
    </div>
  );
}

export default Wishlist;
