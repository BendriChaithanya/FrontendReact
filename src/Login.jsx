import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
//import { loginUser } from "./store"; // make sure this import is correct
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();


const onSubmit = async (data) => {
  try {
    const res = await axios.post(" http://localhost:9065/api/v1/products/login", data);

    toast.success("Login successful!");
    localStorage.setItem("token", res.data.token);
    navigate("/veg");
  } catch (err) {
    toast.error(err.response?.data?.message || "Login failed");
  }
};


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card p-4 shadow">
            <h2 className="mb-4 text-center">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label>Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                {errors.email && <small className="text-danger">Email is required</small>}
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
                {errors.password && <small className="text-danger">Password is required</small>}
              </div>

              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>

            <div className="mt-3 text-center">
              <small>
                Don't have an account? <a href="/register">Register here</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
