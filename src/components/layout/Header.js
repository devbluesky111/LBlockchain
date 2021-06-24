import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
// import Web3 from 'web3';
import Backend from './../../@utils/BackendUrl';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser } from '../../redux/actions/authAction';

  const Header = ({loadUser}) => {

    const [buttonText, setButtonText] = useState('Connect Metamask');

    useEffect(() => {
      document.body.classList.add('dark');      
    }, []);

    const connect = async (e) => {
      e.preventDefault();
      const { ethereum } = window
      if (ethereum && ethereum.isMetaMask) {
        //Check if chain is set to BSC and change it
        const chainId = await ethereum.request({ method: 'eth_chainId'})
        if (chainId !== '0x38') {
          console.log('you need to change the Chain to BSC')
        }

        // get active publicAddress
        const publicAddress = await ethereum.request({ method: 'eth_requestAccounts' })
        if(publicAddress) {
          // Check if user with current publicAddress is already present on backend
          let userData;
          const res = await axios.get(Backend.URL + `/api/users?publicAddress=${publicAddress}`, {withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
          if(res.data) {
            userData = res.data;
          } else {
            const resp = await axios.post(Backend.URL + '/api/users', {publicAddress: publicAddress}, {withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
            if(resp.data.success === true){
              userData = resp.data.result;
            } else {
              console.log('registration failed')
            }
          }
          console.log('userdata', userData);
          if(userData) {
            loadUser(userData);
            // Change the button text into the wallet address.
            let buttonText = `${userData.publicAddress.substr(0, 4)}...${userData.publicAddress.substr(-4)}`
            setButtonText(buttonText)
            // Handle sign message
            // await handleSignMessage({publicAddress: res.data.publicAddress, nonce: res.data.nonce})
            // await handleAuthenticate()
          }
        }
      } else {
        console.log('MetaMask is not installed yet')
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

    // const handleSignMessage = ({ publicAddress, nonce }) => {
    //   console.log('p--A-->', publicAddress, nonce)
    //   // const web3 = new Web3(Web3.givenProvider)
    //   return new Promise((resolve, reject) =>
    //     window.ethereum.on('chainChanged', (chainId) => {
    //       /* handle the chainId */
    //       console.log('chainID', chainId) 
    //     })
    //     // web3.personal.sign(
    //     //   web3.fromUtf8(`I am signing my one-time nonce: ${nonce}`),
    //     //   publicAddress,
    //     //   (err, signature) => {
    //     //     if (err) return reject(err);
    //     //     return resolve({ publicAddress, signature });
    //     //   }
    //     // )
    //   );
    // };

    // const handleAuthenticate = () => {
    //   console.log('handle authentication');
    // }

      
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
                <div style={{color:'#FFF', verticalAlign:'middle', textAlign:'center', margin:'auto', marginRight:'20px'}} >
                  Balance : 30000 USD
                </div>                
                <Link to="/wallet" className="nav-link">
                  <button type="button" className="btn transaction"
                    style={{color:'#FFF', backgroundColor: '#1bb655'}}>
                      <i className="fas fa-coins mr-1 text-white"></i>Deposit/Withdraw
                  </button>
                </Link>
                <button type="button" className="btn transaction"
                  onClick={connect}
                  style={{color:'#FFF', backgroundColor: '#007bff'}}>
                   <img src={'img/metamask.svg'} alt="fox" width="19px" /> {buttonText}
                </button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </>
    );
}

Header.propTypes = {
  loadUser: PropTypes.func.isRequired
};

export default connect(null, {loadUser})(Header);