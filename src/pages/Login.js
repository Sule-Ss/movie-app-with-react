import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword, signIn, signUpProvider } from "../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    console.log(email, password);
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };
  return (
    <div className="d-flex justify-content-center">
      {window.innerWidth > 700 && (
        <div className="form-image">
          <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
        </div>
      )}
      <div className="register-form">
        <h1 className="form-title display-3">Login</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="link" onClick={() => forgotPassword(email)}>
            Forgot password?
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
            // onSubmit={handleSubmit}
          />
        </form>
        <button
          className="btn btn-primary form-control"
          onClick={handleProviderLogin}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
