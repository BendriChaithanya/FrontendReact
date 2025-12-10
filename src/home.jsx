import { Link } from "react-router-dom";
import NonVeg from "./nonveg";

function Home() {
  return (
    <div className="position-relative vh-100 overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-fixed top-0 start-0 w-100 h-100 object-fit-cover z-n1"
      >
        <source src="vid2.mp4.mov" type="video/mp4" />
      </video>

      {/* Dark overlay for visibility */}
      <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 z-n1"></div>

      {/* Content */}
      <div className="d-flex flex-column justify-content-center align-items-center text-white h-100 text-center px-3">

        <h1 className="fw-bold mb-4 display-4">Welcome To BhojanBazaar</h1>

        <div className="d-grid gap-3 w-75">
          <div className="btn btn-outline-light py-3 fs-4 rounded-pill">Veg</div>
          <div className="btn btn-outline-light py-3 fs-4 rounded-pill">Non-Veg</div>
          <div className="btn btn-outline-light py-3 fs-4 rounded-pill">Milk</div>
          <div className="btn btn-outline-light py-3 fs-4 rounded-pill">Snacks</div>
        </div>

      </div>
    </div>
  );
}

export default Home;
