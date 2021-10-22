import React /* useState */ from "react";
// import { useDispatch, useSelector } from "react-redux";
import { /* useHistory */ Link } from "react-router-dom";
import "./Login.css";

function Login() {
  // const [state, setState] = useState({
  //   email: "",
  //   password: "",
  // });

  // const { email, password } = state;
  // const handleGoogleSignIn = () => {};
  // const handleFbSignIn = () => {};
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <div>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign In
          </h1>

          <input
            type="email"
            id="inputemail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            // value={email}
            required
          />
          <input
            type="password"
            id="inputpassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            // value={password}
            required
          />
          <button className="btn btn-secondary btn-block" type="submit">
            <i className="fas fa-sign-in-alt"></i> Sign In
          </button>
          <hr />
          <p> Don't have a Account</p>
          <Link to="/Register">
            <button
              className="btn btn-primary btn-block"
              type="button"
              id="btn-signup"
            >
              <i className="fas fa-user-plus"> </i>Sign up New Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Login;
