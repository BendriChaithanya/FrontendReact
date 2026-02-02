import React from "react";

function About() {
  return (
    <div className="bg-body-tertiary min-vh-100 py-5">
      <div className="container">

        {/* Pillars Section */}
        <div className="row text-center mb-5">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h3 className="card-title">Swaad (Taste)</h3>
                <p className="card-text">
                  We honour authentic recipes and balance flavours using traditional
                  techniques. Each dish is carefully spiced, slow-cooked when needed,
                  and tasted until perfect.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h3 className="card-title">Shuddhata (Purity)</h3>
                <p className="card-text">
                  Fresh, seasonal ingredients and hygienic preparation are non-negotiable.
                  Our kitchens follow strict cleanliness standards so every bite is safe
                  and wholesome.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h3 className="card-title">Seva (Service)</h3>
                <p className="card-text">
                  From order to delivery, we focus on thoughtful service—timely delivery,
                  careful packaging and a friendly experience that makes every customer
                  feel at home.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Serve */}
        <div className="mb-5">
          <h2 className="mb-3">What We Serve</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-transparent">
              Homestyle vegetarian and non-vegetarian meals
            </li>
            <li className="list-group-item bg-transparent">
              Daily thalis & tiffins
            </li>
            <li className="list-group-item bg-transparent">
              Street-food favourites and snacks
            </li>
            <li className="list-group-item bg-transparent">
              Seasonal specials and festive menus
            </li>
          </ul>
        </div>

        {/* Our Promise */}
        <div className="mb-5">
          <h2 className="mb-3">Our Promise</h2>
          <p>
            We promise fresh ingredients, authentic flavours, hygienic preparation and
            a heartful experience in every order. Bhojan Bazaar is not just food — it’s
            a connection to tradition, made convenient for today.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-5">
          <p className="h5 mb-3">Ready to taste the difference?</p>
          <a className="btn btn-primary btn-lg" href="/menu">
            Explore Our Menu
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center py-4 bg-white rounded shadow-sm">
          <p className="mb-0 fst-italic">
            "Ghar Ka Swaad, Har Plate Mein." — Dish Hub
          </p>
        </footer>

      </div>
    </div>
  );
}

export default About;
