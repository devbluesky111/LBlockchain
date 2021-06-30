import React, { useState } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import Web3 from 'web3'
import api from '../@utils/api';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Custody from './../components/custody/Custody.json'
import env from "react-dotenv";
import { loadBalance } from '../redux/actions/authAction';

const Wallet = ({auth : {publicAddress, balance}, loadBalance}) => {
  const [depositAmount, setDepositAmount] = useState('');
  const [depositBNB, setDepositBNB] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawBNB, setWithdrawBNB] = useState('');
  const [withdrawAlert, setWithdrawAlert] = useState(false);

  const depositHandle = (e) => {
    setDepositAmount(e.target.value);
    const rate = 2000;
    let exchangedInputData = (e.target.value/rate).toString();
    setDepositBNB(exchangedInputData);
  }
  
  const withdrawHanlde = (e) => {
    if(e.target.value < 10) {
      setWithdrawAlert(true)
    } else {
      setWithdrawAlert(false)
    }
    setWithdrawAmount(e.target.value);
    const rate = 2000;
    let exchangedInputData = (e.target.value/rate).toString();
    setWithdrawBNB(exchangedInputData);
  }
  // deposit function
  const depositMoney = async () => {
    const web3 = new Web3(window.web3.currentProvider);
    const custodyAbi = Custody.abi;
    const networkId = env.NETWORK_ID;
    const contractAddress = Custody.networks[networkId].address;
    const contractInstance = new web3.eth.Contract(custodyAbi, contractAddress);
    if(depositBNB) {
      contractInstance.methods.deposit().send({from: publicAddress, value: web3.utils.toWei(depositBNB, "ether")})
      .on('receipt', function(receipt){
          // store into database
          api.post('/wallets/deposit', {amount: depositAmount, from: receipt.from})
          .then((res) => {
            if(res.data.success === true){
              loadBalance(res.data.balance)
              setDepositAmount('')
            }
          });
      })
      .on('error', function(error, receipt) {
          console.log('err', error)
          console.log('err_receipt', receipt)
      });
    }
  }
  // withdraw function
  const withdrawMoney = async () => {
    const web3 = new Web3(window.web3.currentProvider);
    const custodyAbi = Custody.abi;
    const networkId = env.NETWORK_ID;
    const contractAddress = Custody.networks[networkId].address;
    const contractInstance = new web3.eth.Contract(custodyAbi, contractAddress);
    if(withdrawBNB) {
      contractInstance.methods.withdraw(web3.utils.toWei(withdrawBNB, "ether")).send({from: publicAddress})
      .on('receipt', function(receipt){
          // store into database
          api.post('/wallets/withdraw', {amount: withdrawAmount, from: receipt.from})
          .then((res) => {
            if(res.data.success === true){
              loadBalance(res.data.balance)
              setWithdrawAmount('')
            }
          });
      })
      .on('error', function(error, receipt) {
          console.log('err', error)
          console.log('err_receipt', receipt)
      });
    }
  }

  return (
    <>
      <div className="settings mtb15">
        <div className="container-fluid">
          <div className="wallet">
            <Row>
              <Col lg={3}>
                <Nav variant="pills" className="settings-nav" style={{height:'880px'}}>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wallet_BNB"
                      className="d-flex justify-content-between align-items-center active"
                    >
                      <div className="d-flex">
                        <img src={'img/icon/9.png'} alt="btc" />
                        <div>
                          <h2>BNB</h2>
                          <p>Binance</p>
                        </div>
                      </div>
                      <div>
                        <h3>${Number.parseFloat(balance).toPrecision(6)}</h3>
                        <p className="text-right">
                          <i className="icon ion-md-lock"></i>{' '}
                            0.0000000
                        </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wallet_BTC"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex">
                        <img src={'img/icon/18.png'} alt="btc" />
                        <div>
                          <h2>BTC</h2>
                          <p>Bitcoin</p>
                        </div>
                      </div>
                      <div>
                        <h3>0.00000</h3>
                        <p className="text-right">
                          <i className="icon ion-md-lock"></i>{' '}
                            0.0000000
                        </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wallet_ETH"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex">
                        <img src={'img/icon/1.png'} alt="btc" />
                        <div>
                          <h2>ETH</h2>
                          <p>Ethereum</p>
                        </div>
                      </div>
                      <div>
                        <h3>0.00000</h3>
                        <p className="text-right">
                          <i className="icon ion-md-lock"></i>{' '}
                          0.0000000
                        </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wallet_TRX"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex">
                        <img src={'img/icon/6.png'} alt="btc" />
                        <div>
                          <h2>TRX</h2>
                          <p>Tron</p>
                        </div>
                      </div>
                      <div>
                        <h3>0.00000</h3>
                        <p className="text-right">
                          <i className="icon ion-md-lock"></i>{' '}
                                  0.0000000
                                </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wallet_EOS"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex">
                        <img src={'img/icon/2.png'} alt="btc" />
                        <div>
                          <h2>EOS</h2>
                          <p>Eosio</p>
                        </div>
                      </div>
                      <div>
                        <h3>0.00000</h3>
                        <p className="text-right">
                          <i className="icon ion-md-lock"></i>{' '}
                          0.0000000
                        </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wallet_XMR"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex">
                        <img src={'img/icon/7.png'} alt="btc" />
                        <div>
                          <h2>XMR</h2>
                          <p>Monero</p>
                        </div>
                      </div>
                      <div>
                        <h3>0.00000</h3>
                        <p className="text-right">
                          <i className="icon ion-md-lock"></i>{' '}
                          0.0000000
                        </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="wallet_KCS"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex">
                        <img src={'img/icon/4.png'} alt="btc" />
                        <div>
                          <h2>KCS</h2>
                          <p>Kstarcoin</p>
                        </div>
                      </div>
                      <div>
                        <h3>0.00000</h3>
                        <p className="text-right">
                          <i className="icon ion-md-lock"></i>{' '}
                                  0.0000000
                                </p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col lg={9}>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    style={{height:'850px'}}
                    id="coinBTC"
                    role="tabpanel"
                  >
                    <div className="card" style={{height:'880px'}}>
                      <div className="card-body">
                        <h5  className="card-title pb-3">Balances</h5>
                        <ul>
                          <li className="d-flex justify-content-between align-items-center px-2">
                            <div className="d-flex align-items-center">
                              <i className="icon ion-md-cash"></i>
                              <h2>Total Balance</h2>
                            </div>
                            <div>
                              <h3>{balance} USDT</h3>
                            </div>
                          </li>
                        </ul>
                        <Tab.Container defaultActiveKey="deposit">
                          <Row>
                            <Nav.Item>
                              <Nav.Link eventKey="deposit" className="flex">
                                <button className="btn green">Deposit</button>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="withdraw" className="flex">
                                <button className="btn red">Withdraw</button>
                              </Nav.Link>
                            </Nav.Item>
                          </Row>
                          <hr className="myhr" />
                          <Tab.Content>
                            <Tab.Pane eventKey="deposit">
                              <h5 className="card-title ml-2">
                                Deposit
                              </h5>
                              <div className="row wallet-address">
                                <div className="col-md-6 p-4">
                                  <div className="pb-4">
                                    <label htmlFor="depositCoin">Coin</label>
                                    <select
                                      id="depositCoin"
                                      className="custom-select"
                                    >
                                      <option defaultValue>BNB</option>
                                      <option>BTC</option>
                                    </select>
                                  </div>
                                  <div className="flex flex-column">
                                    <label htmlFor="depositAmount">Amount:&nbsp;&nbsp; {depositAmount? `${depositBNB} BNB` : <></>}</label>
                                    <div className="form-inline">
                                      <input
                                        id="depositAmount"
                                        className="custom-select"
                                        style={{width:'80%'}}
                                        value={depositAmount}
                                        onChange={depositHandle}
                                      />
                                      <div className="mx-auto text-white">USDT</div>
                                    </div>
                                  </div>
                                  <button type="submit" className="deposit-button" onClick={()=> {depositMoney()}}>Submit</button>
                                </div>
                                <div className="col-md-6">
                                  <div>
                                    <label htmlFor="addressSelection">Network</label>
                                    <div id="addressSelection">
                                      <button className="address-button">BEP20</button>
                                      <button className="address-button">ERC20</button>
                                    </div>
                                  </div>
                                  <img
                                    src={'img/qr-code-dark.svg'}
                                    alt="qr-code"
                                    style={{ height: '150px', margin: 'auto' }}
                                  />
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={publicAddress}
                                      readOnly
                                    />
                                    <div className="input-group-prepend">
                                      <button className="btn btn-primary">
                                        COPY
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="withdraw">
                              <h5 className="card-title">
                                Withdraw
                              </h5>
                              <div className="row wallet-address">
                                <div className="col-md-6 p-4">
                                  <div>
                                    <label htmlFor="depositCoin">Coin</label>
                                    <select
                                      id="depositCoin"
                                      className="custom-select"
                                    >
                                      <option defaultValue>BNB</option>
                                      <option>BTC</option>
                                    </select>
                                  </div>
                                  <div className="mt-3">
                                    <label htmlFor="addressSelection-withdraw">Network</label>
                                    <div id="addressSelection-withdraw">
                                      <button className="address-button">BEP20</button>
                                    </div>
                                  </div>
                                  <div className="mt-3">
                                    <label htmlFor="addresss-withdraw">Address</label>
                                    <input
                                      id="addresss-withdraw"
                                      className="custom-select text-white"
                                      value={publicAddress}
                                      readOnly
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6 p-4">
                                  <div className="flex flex-column">
                                    <label htmlFor="depositAmount">Amount:&nbsp;&nbsp; {withdrawAmount? `${withdrawBNB} BNB` : <></>}</label>
                                    <div className="form-inline">
                                      <input
                                        id="withdrawAmount"
                                        className="custom-select"
                                        style={{width:'80%'}}
                                        value={withdrawAmount}
                                        onChange={withdrawHanlde}
                                      />
                                      <div className="mx-auto text-white">USDT</div>
                                    </div>
                                  </div>
                                  <div className="mt-4 mb-2">
                                    <label htmlFor="fee-withdraw" className={withdrawAlert? "text-danger mb-3": "text-white mb-3"}>Caution</label>
                                    <div className={withdrawAlert? "text-danger": "text-white"}>You are not allowed to withdraw less than 10 USDT.</div>
                                  </div>
                                  <button type="submit" className="withdraw-button" onClick={()=> {withdrawMoney()}}>Submit</button>     
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

Wallet.propTypes = {
  auth: PropTypes.object.isRequired,
  loadBalance: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {loadBalance})(Wallet);