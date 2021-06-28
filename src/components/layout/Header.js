import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import DisconnectModal from './../DisconnectModal'
import MetamaskSettingModal from './../MetamaskSettingModal'
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authAction';

  const Header = ({ login, auth : {publicAddress, balance, buttonText} }) => {

    const [disconnectModalShow, setDisconnectModalShow] = useState(false);
    const [metamaskSettingModalShow, setMetamaskSettingModalShow] = useState(false);

    useEffect(() => {
      document.body.classList.add('dark');
    }, []);

    const connect = async (e) => {
      e.preventDefault();
      const { ethereum, web3 } = window
      if (typeof web3 !== 'undefined') {
        //Check if chain is set to BSC and change it
        const chainId = await ethereum.request({ method: 'eth_chainId'})
        if (chainId !== '0x38') {
          setMetamaskSettingModalShow(true)
        }
        // get active publicAddress
        const publicAddress = await ethereum.request({ method: 'eth_requestAccounts' })
        if(publicAddress) {
          setTimeout(() => {
            login(publicAddress[0])
          }, 1500);
        }
      } else {
        if(navigator.userAgent.indexOf("Chrome") !== -1 )
        {
          window.open(
            'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en',
            '_blank'
          );
        }
        else if(navigator.userAgent.indexOf("Firefox") !== -1 ) 
        {
          window.open(
            'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask',
            '_blank'
          );
        }
        else 
        {
          alert('You need to use Chrome or Firefox for this webpage!');
        }
      }
    }

    const disconnect = (e) => {
      e.preventDefault();
      setDisconnectModalShow(true);
    }
      
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
                <Link to="/#about_us" className="nav-link">
                  About Us
                </Link>
                <Link to="/#faq" className="nav-link">
                  FAQ
                </Link>
                <Link to="/#contact_us" className="nav-link">
                  Contact Us
                </Link>
              </Nav>
              <Nav className="navbar-nav ml-auto">
                {publicAddress ?
                <>
                  <div style={{color:'#FFF', verticalAlign:'middle', textAlign:'center', margin:'auto', marginRight:'20px'}} >
                    Balance : {balance} USDT
                  </div>                
                  <Link to="/wallet" className="nav-link">
                    <button type="button" className="btn transaction"
                      style={{color:'#FFF', backgroundColor: '#1bb655'}}>
                        <i className="fas fa-coins mr-1 text-white"></i>Deposit/Withdraw
                    </button>
                  </Link>
                </> : <></>
                }
                <button type="button" className="btn transaction"
                  onClick={buttonText === 'Connect Metamask' ? connect : disconnect}
                  style={{color:'#FFF', backgroundColor: '#007bff'}}>
                   <img src={'img/metamask.svg'} alt="fox" width="19px" /> {buttonText}
                </button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <DisconnectModal
          show={disconnectModalShow}
          onHide={() => setDisconnectModalShow(false)}
        />
        <MetamaskSettingModal
          show={metamaskSettingModalShow}
          onHide={() => setMetamaskSettingModalShow(false)}
        />
      </>
    );
}

Header.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {login})(Header);