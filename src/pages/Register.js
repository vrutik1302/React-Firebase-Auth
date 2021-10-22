import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { registerInitiate } from "../redux/actions";
import "./Register.css";

function Register() {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { currentUser } = useSelector((state) => state.user);

  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);
  const dispatch = useDispatch();

  const { displayName, email, password, confirmPassword } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return <p>Please write correct Password </p>;
    }
    dispatch(registerInitiate, email, password, displayName);
    setState({ displayName: "", email: "", password: "", confirmPassword: "" });
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <div id="register-form">
        <form className="form-signup" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign up
          </h1>

          <input
            type="text"
            id="displayName"
            className="form-control"
            placeholder="Full-Name"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            required
          />
          <input
            type="email"
            id="user-email"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            id="inputpassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            placeholder=" Repeat-Password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
            required
          />
          <button className="btn btn-primary btn-block" type="submit">
            <i className="fas fa-user-plus"></i> Sign up
          </button>

          <Link to="/">
            <i className="fas fa-angle-left"></i> Back
          </Link>
        </form>
        <br />
      </div>
    </div>
  );
}
export default Register;
