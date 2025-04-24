import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputFrom from "../components/shared/InputFrom";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
import Spinner from "../components/shared/Spinner";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading } = useSelector((state) => state.alerts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email, name, lastName);
      if (!name || !lastName || !email || !password) {
        return toast.error("Please Provide All Fields");
      }
      dispatch(showLoading());
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/auth/register`,
        {
          name,
          lastName,
          email,
          password,
        }
      );
      dispatch(hideLoading());
      if (data.success) {
        toast.success("Register Successfully");
        navigate("/login");
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Invalid Form Details Please Try Agian!");
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="form-container">
          <form className="card p-2" onSubmit={handleSubmit}>
            <img
              src="/assests/images/jobboardlogo.png"
              alt="logo"
              height={150}
              width={400}
            />
            <InputFrom
              htmlFor="name"
              labelText={"Name"}
              type={"text"}
              value={name}
              handleChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
            />
            <InputFrom
              htmlFor="lastName"
              labelText={"Last Name"}
              type={"text"}
              value={lastName}
              handleChange={(e) => setLastName(e.target.value)}
              id="lastName"
              name="lastName"
            />
            <InputFrom
              htmlFor="email"
              labelText={"Email"}
              type={"email"}
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
            />
            <InputFrom
              htmlFor="password"
              labelText={"Password"}
              type={"password"}
              value={password}
              handleChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
            />

            <div className="d-flex justify-content-between">
              <p>
                Already Register <Link to="/login">Login</Link>{" "}
              </p>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Register;
