import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "./store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="mb-4 text-center">Register</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label>Email</label>
                <input
                  {...register("email", { required: true })}
                  className="form-control"
                  placeholder="Email"
                  type="email"
                />
                {errors.email && <small className="text-danger">Email is required</small>}
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  {...register("password", { required: true })}
                  className="form-control"
                  placeholder="Password"
                  type="password"
                />
                {errors.password && <small className="text-danger">Password is required</small>}
              </div>

              <div className="mb-3">
                <label>Full Name</label>
                <input
                  {...register("name", { required: true })}
                  className="form-control"
                  placeholder="Your name"
                />
                {errors.name && <small className="text-danger">Name is required</small>}
              </div>

              <div className="mb-3">
                <label>Phone Number</label>
                <input
                  {...register("phone", { required: true })}
                  className="form-control"
                  placeholder="Phone number"
                  type="tel"
                />
                {errors.phone && <small className="text-danger">Phone number is required</small>}
              </div>

              <div className="mb-3">
                <label>Address</label>
                <textarea
                  {...register("address", { required: true })}
                  className="form-control"
                  placeholder="Your address"
                />
                {errors.address && <small className="text-danger">Address is required</small>}
              </div>

              <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
