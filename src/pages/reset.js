import React from 'react';

export default function reset() {

  const reset = () => {
    window.location.href = process.env.PUBLIC_URL + "/login";
  }
  return (
    <>
      <div className="vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form>
            <span>Reset password</span>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={() => {reset()}}>
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
