import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
    const confirmInfo = () => {
        window.location.href = process.env.PUBLIC_URL + "/reset";
    }
  return (
    <>
      <div className="vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form>
            <span>Confirm Your Info</span>
            <div className="form-group">
              <input
                type="text"
                className="form-control text-white"
                placeholder="User Name"
                // required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control text-white"
                placeholder="Wallet Address"
                // required
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={() => {confirmInfo()}}>
              Confirm your personal information
            </button>
          </form>
          <h2>
            Go back to Sign in page <Link to="/login">Return back</Link>
          </h2>
        </div>
      </div>
    </>
  );
}
