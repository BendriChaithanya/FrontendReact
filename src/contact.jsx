import React from "react";

function Contact() {
  return (
    <div>

      {/* HERO SECTION */}
      <div
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(135deg, #ff6a00, #ee0979)"
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-4">Contact Dish Hub</h1>
          <p className="lead">
            We'd love to hear from you! Reach out for orders, feedback, or support.
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="container my-5">
        <div className="row g-4">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 p-4 h-100">
              <h3 className="mb-4 text-danger fw-bold">
                <i className="bi bi-chat-dots-fill me-2"></i>
                Reach Out Directly
              </h3>

              <p>
                <i className="bi bi-envelope-fill text-primary me-2"></i>
                <strong>Email:</strong> chaithanyabendri@gmail.com
              </p>

              <p>
                <i className="bi bi-telephone-fill text-success me-2"></i>
                <strong>Phone:</strong> +91 9347823691
              </p>

              <p>
                <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                <strong>Address:</strong> 2-63 Ameerpet, Hyderabad
              </p>

              <hr />

              <h5 className="fw-bold">
                <i className="bi bi-clock-fill text-warning me-2"></i>
                Business Hours
              </h5>

              <p className="mb-1">Mon – Sat: 9:00 AM – 6:00 PM</p>
              <p>Sunday: Closed</p>

              <div className="mt-4">
                <p className="text-muted">
                  We typically respond within 24 hours. Your satisfaction is our priority!
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 p-4">
              <h3 className="mb-4 fw-bold text-dark">
                <i className="bi bi-send-fill me-2 text-danger"></i>
                Send Message
              </h3>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control form-control-lg"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-danger btn-lg w-100"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* EXTRA SECTION */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h4 className="fw-bold mb-3">Why Contact Dish Hub ?</h4>
          <p className="text-muted">
            ✔ Fast response time <br />
            ✔ 24/7 Order Support <br />
            ✔ Quality Assurance <br />
            ✔ Customer Satisfaction Guaranteed
          </p>
        </div>
      </div>

    </div>
  );
}

export default Contact;
