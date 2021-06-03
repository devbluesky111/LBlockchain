import React from 'react';
import { Link } from 'react-router-dom';

export default function login() {
  return (
    <>
      <div className="vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form>
            <span>Sign In</span>
            <div className="form-group">
              <input
                type="text"
                className="form-control text-white"
                placeholder="User Name"
                required
              />
            </div>
            {/* <div className="form-group">
              <input
                type="text"
                className="form-control text-white"
                placeholder="Wallet Address"
                required
              />
            </div> */}
            <div className="form-group">
              <input
                type="password"
                className="form-control text-white"
                placeholder="Password"
                required
              />
            </div>
            <div className="text-right">
              <Link to="/forget-password">Forgot Password?</Link>
            </div>
            {/* <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="form-checkbox"
              />
              <label className="custom-control-label" htmlFor="form-checkbox">
                Remember me
              </label>
            </div> */}
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>
          <h2>
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </h2>
        </div>
      </div>
    </>
  );
}
