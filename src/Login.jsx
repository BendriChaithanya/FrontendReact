import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API_URL =
  "https://dishhub-backend.onrender.com/api/v1/products/login";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
  try {
    const res = await axios.post(API_URL, data);

    // Check for success flag if backend always returns 200
    if (res.data.success === false) {
      toast.error(res.data.message || "Login failed");
      return;
    }

    // Success
    toast.success("Login successful!");
    localStorage.setItem("token", res.data.token);
    navigate("/veg");
  } catch (err) {
    console.error(err);
    toast.error(err.response?.data?.message || "Login failed");
  }
};


  return (
    <div className="bg-body-tertiary min-vh-100 d-flex align-items-center">
      <div className="container px-3">
        <div className="row justify-content-center w-100">
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            <div className="card shadow border-0 rounded-4">
              <div className="card-body p-4 p-md-5">

                <h3 className="text-center fw-bold mb-1">Welcome Back</h3>
                <p className="text-center text-muted small mb-4">
                  Login to continue
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>

                  {/* Email */}
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                    <label>Email</label>
                    {errors.email && (
                      <div className="invalid-feedback">
                        Email is required
                      </div>
                    )}
                  </div>

                  {/* Password */}
                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      className={`form-control ${errors.password ? "is-invalid" : ""}`}
                      placeholder="Password"
                      {...register("password", { required: true })}
                    />
                    <label>Password</label>
                    {errors.password && (
                      <div className="invalid-feedback">
                        Password is required
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 rounded-pill"
                  >
                    Login
                  </button>
                </form>

                <div className="text-center mt-4">
                  <small className="text-muted">
                    Don’t have an account?{" "}
                    <Link to="/register" className="fw-semibold text-decoration-none">
                      Register
                    </Link>
                  </small>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
