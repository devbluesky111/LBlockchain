import React, { useEffect } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import MetaMaskButton from './../MetaMaskButton';

const Header = () => {

    useEffect(() => {
      document.body.classList.add('dark');
    }, []);

    return (
      <>
        <header className="light-bb">
          <Navbar expand="lg">
            <Link className="navbar-brand" to="/">
                <img src={'img/Logo5.svg'} alt="logo" />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav mr-auto">
                <Link to="/trade" className="nav-link">
                  HyperTrading
                </Link>
                <Link to="#" className="nav-link">
                  About Us
                </Link>
              </Nav>
              <Nav className="navbar-nav ml-auto">
                {/* <MetaMaskButton /> */}
                <Link to="/login" className="nav-link">
                  <button type="button" className="btn transaction"
                    style={{color:'#FFF', backgroundColor: '#007bff'}}>
                      <i className="fas fa-user-alt mr-1 text-white"></i>Login
                  </button>
                </Link>
                <Link to="/signup" className="nav-link">
                  <button type="button" className="btn transaction"
                    style={{color:'#FFF', backgroundColor: '#007bff', marginRight:'10px'}}>
                      <i className="fas fa-user-plus mr-1 text-white"></i>Register
                  </button>
                </Link>
                <div style={{color:'#FFF', verticalAlign:'middle', textAlign:'center', margin:'auto', marginRight:'20px'}} >
                  Balance : 30000 USD
                </div>
                <Link to="/wallet" className="nav-link">
                  <button type="button" className="btn transaction"
                    style={{color:'#FFF', backgroundColor: '#1bb655', marginRight:'20px'}}>
                      <i className="fas fa-coins mr-1 text-white"></i>Deposit/Withdraw
                  </button>
                </Link>
                <Dropdown className="header-custom-icon">
                  <Dropdown.Toggle variant="default">
                    <i className="icon ion-md-notifications"></i>
                    <span className="circle-pulse"></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className="dropdown-header d-flex align-items-center justify-content-between">
                      <p className="mb-0 font-weight-medium">
                        6 New Notifications
                      </p>
                      <a href="#!" className="text-muted">
                        Clear all
                      </a>
                    </div>
                    <div className="dropdown-body">
                      <a href="#!" className="dropdown-item">
                        <div className="icon">
                          <i className="icon ion-md-lock"></i>
                        </div>
                        <div className="content">
                          <p>Account password change</p>
                          <p className="sub-text text-muted">5 sec ago</p>
                        </div>
                      </a>
                      <a href="#!" className="dropdown-item">
                        <div className="icon">
                          <i className="icon ion-md-alert"></i>
                        </div>
                        <div className="content">
                          <p>Solve the security issue</p>
                          <p className="sub-text text-muted">10 min ago</p>
                        </div>
                      </a>
                      <a href="#!" className="dropdown-item">
                        <div className="icon">
                          <i className="icon ion-logo-android"></i>
                        </div>
                        <div className="content">
                          <p>Download android app</p>
                          <p className="sub-text text-muted">1 hrs ago</p>
                        </div>
                      </a>
                      <a href="#!" className="dropdown-item">
                        <div className="icon">
                          <i className="icon ion-logo-bitcoin"></i>
                        </div>
                        <div className="content">
                          <p>Bitcoin price is high now</p>
                          <p className="sub-text text-muted">2 hrs ago</p>
                        </div>
                      </a>
                      <a href="#!" className="dropdown-item">
                        <div className="icon">
                          <i className="icon ion-logo-usd"></i>
                        </div>
                        <div className="content">
                          <p>Payment completed</p>
                          <p className="sub-text text-muted">4 hrs ago</p>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-footer d-flex align-items-center justify-content-center">
                      <a href="#!">View all</a>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="header-img-icon">
                  <Dropdown.Toggle variant="default">
                    <img src={'img/avatar.svg'} alt="avatar" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className="dropdown-header d-flex flex-column align-items-center">
                      <div className="figure mb-3">
                        <img src={'img/avatar.svg'} alt="" />
                      </div>
                      <div className="info text-center">
                        <p className="name font-weight-bold mb-0">Tony Stark</p>
                        <p className="email text-muted mb-3">
                          tonystark@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="dropdown-body">
                      <ul className="profile-nav">
                        <li className="nav-item">
                          <Link to="/profile" className="nav-link">
                            <i className="icon ion-md-person"></i>
                            <span>Profile</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/wallet" className="nav-link">
                            <i className="icon ion-md-wallet"></i>
                            <span>My Wallet</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/settings" className="nav-link">
                            <i className="icon ion-md-settings"></i>
                            <span>Settings</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/login" className="nav-link red">
                            <i className="icon ion-md-power"></i>
                            <span>Log Out</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </>
    );
}

export default Header;
