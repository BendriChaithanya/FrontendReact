import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "./store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(registerUser(data)).then(() => {
      toast.success("Registered successfully!");
      reset();
      navigate("/login");
    });
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex align-items-center">
      <div className="container px-3">
        <div className="row justify-content-center w-100">
          <div className="col-12 col-sm-10 col-md-6 col-lg-5">
            <div className="card shadow border-0 rounded-4">
              <div className="card-body p-4 p-md-5">

                <h3 className="text-center fw-bold mb-1">
                  Create Account
                </h3>
                <p className="text-center text-muted mb-4 small">
                  Sign up to continue
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
                  <div className="form-floating mb-3">
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

                  {/* Name */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      placeholder="Full Name"
                      {...register("name", { required: true })}
                    />
                    <label>Full Name</label>
                    {errors.name && (
                      <div className="invalid-feedback">
                        Name is required
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                      placeholder="Phone"
                      {...register("phone", { required: true })}
                    />
                    <label>Phone Number</label>
                    {errors.phone && (
                      <div className="invalid-feedback">
                        Phone number is required
                      </div>
                    )}
                  </div>

                  {/* Address */}
                  <div className="form-floating mb-4">
                    <textarea
                      className={`form-control ${errors.address ? "is-invalid" : ""}`}
                      placeholder="Address"
                      style={{ height: "90px" }}
                      {...register("address", { required: true })}
                    />
                    <label>Address</label>
                    {errors.address && (
                      <div className="invalid-feedback">
                        Address is required
                      </div>
                    )}
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 btn-lg rounded-pill"
                  >
                    Register
                  </button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
