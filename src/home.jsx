import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage:"url('/bg21.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
        style={{ opacity: 0.6 }}
      ></div>

      {/* Content */}
      <div className="position-relative container">

        <h1 className="display-3 fw-bold mb-3">
          Welcome to DishHub
        </h1>

        <p className="lead mb-4">
          Crafted with Passion, Delivered with Love
        </p>

        <Link
          to="/menu"
          className="btn btn-warning btn-lg px-5"
        >
          Order Now
        </Link>

      </div>
    </div>
  );
}

export default Home;
