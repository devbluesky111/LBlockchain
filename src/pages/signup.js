import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { register } from './../redux/actions/auth';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    walletAddress: '',
    password: '',
    confirmPassword: ''
  });

  const { name, walletAddress, password, confirmPassword } = formData;
  const [termAgree, setTermAgree] = useState(true);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


  useEffect(() => {
    console.log('react hook here!!');
  },[]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // setAlert('Passwords do not match', 'danger');
      console.log('password don\'t match')
    } else {
      // register({ name, walletAddress, password });
      // const res = await api.post('/users', {name, walletAddress, password});
      console.log('submitted')
    }
  }

  return (
    <>
      <div className="vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form onSubmit={onSubmit}>
            <span>Create Account</span>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control text-white"
                placeholder="Full Name"
                value={name}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="walletAddress"
                className="form-control text-white"
                placeholder="Wallet Address"
                value={walletAddress}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control text-white"
                placeholder="Password"
                value={password}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                className="form-control text-white"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={onChange}
              />
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="form-checkbox"
                value={termAgree}
                onChange={() => {setTermAgree(!termAgree)}}
              />
              <label className="custom-control-label" htmlFor="form-checkbox">
                I agree to the{' '}
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
              </label>
            </div>
            <button type="submit" className="btn btn-primary" disabled={termAgree} >
              Create Account
            </button>
          </form>
          <h2>
            Already have an account?
            <Link to="/login"> Sign in here</Link>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Signup;