import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 text-light">🍽 Our Menu</h2>

      <div className="row g-4">

        {/* VEG SECTION */}
        <div className="col-md-4">
          <div className="card shadow border-success">
            <div className="card-header bg-success text-white fw-bold text-center fs-5">
              🌿 Veg Items
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">Paneer Butter Masala</li>
                <li className="list-group-item">Veg Biryani</li>
                <li className="list-group-item">Mushroom Curry</li>
                <li className="list-group-item">Aloo Gobi</li>
                <li className="list-group-item">Dal Tadka</li>
              </ul>
              <Link to="/veg" className="btn btn-success w-100 mt-3">
                View All Veg Items
              </Link>
            </div>
          </div>
        </div>

        {/* NON-VEG SECTION */}
        <div className="col-md-4">
          <div className="card shadow border-danger">
            <div className="card-header bg-danger text-white fw-bold text-center fs-5">
              🍗 Non-Veg Items
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">Chicken Biryani</li>
                <li className="list-group-item">Mutton Curry</li>
                <li className="list-group-item">Fish Fry</li>
                <li className="list-group-item">Prawns Masala</li>
                <li className="list-group-item">Chicken 65</li>
              </ul>
              <Link to="/nonveg" className="btn btn-danger w-100 mt-3">
                View All Non-Veg Items
              </Link>
            </div>
          </div>
        </div>

        {/* MILK SECTION */}
        <div className="col-md-4">
          <div className="card shadow border-primary">
            <div className="card-header bg-primary text-white fw-bold text-center fs-5">
              🥛 Milk & Dairy
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">Toned Milk</li>
                <li className="list-group-item">Curd</li>
                <li className="list-group-item">Paneer</li>
                <li className="list-group-item">Ghee</li>
                <li className="list-group-item">Butter</li>
              </ul>
              <Link to="/milk" className="btn btn-primary w-100 mt-3">
                View All Milk Items
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Menu;
