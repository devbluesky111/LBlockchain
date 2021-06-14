import React, { useEffect, useState } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import Backend from './../@utils/BackendUrl';
import axios from 'axios';

const Wallet = () => {
  const [chargeAddress, setChargeAddress] = useState();
  const [withdrawAmount, setWithdrawAmount] = useState();

  const init = async () => {
    console.log('wallet page loaded');
		const res = await axios.get(Backend.URL + '/api/wallets', { withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
		setChargeAddress(res.data);
	}

	useEffect(() => {
		init();
	}, []);

  const depositMoney = async () => {
    const deposit_money = 1000;
    const res = await axios.post(Backend.URL + '/api/wallets/deposit', {data: deposit_money}, {withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
    console.log('deposit==>', res);
  }

  const withdrawMoney = async () => {
    console.log('withdraw amount==>', withdrawAmount);
    const res = await axios.post(Backend.URL + '/api/wallets/withdraw', {data: withdrawAmount}, {withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
    console.log('withdraw==>', res);
  }

  console.log('charge_address===>',chargeAddress);
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
                        <h3>35.4842458</h3>
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
                        <h3>4.5484254</h3>
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
                        <h3>13.454845</h3>
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
                        <h3>4.458941</h3>
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
                        <h3>33.478951</h3>
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
                      <div className="d-flex" onClick={()=>{depositMoney()}}>
                        <img src={'img/icon/7.png'} alt="btc" />
                        <div>
                          <h2>XMR</h2>
                          <p>Monero</p>
                        </div>
                      </div>
                      <div>
                        <h3>99.465975</h3>
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
                        <h3>114.57564</h3>
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
                        <h5 className="card-title">Balances</h5>
                        <ul>
                          <li className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <i className="icon ion-md-cash"></i>
                              <h2>Total Equity</h2>
                            </div>
                            <div>
                              <h3>5.5894 BNB</h3>
                            </div>
                          </li>
                          <li className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <i className="icon ion-md-checkmark"></i>
                              <h2>Available Margin</h2>
                            </div>
                            <div>
                              <h3>2.480 BNB</h3>
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
                                    <label htmlFor="fundaccount">Deposit</label>
                                    <select
                                      id="fundaccount"
                                      className="custom-select"
                                    >
                                      <option defaultValue>Fund Account</option>
                                      <option>something...</option>
                                    </select>
                                  </div>  
                                  <p className="text-white mt-3 ml-1">Top up BNB will be credited to Fund account<br/>
                                  (the accounts can be transferred at any time)</p>
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
                                      value="Ad87deD4gEe8dG57Ede4eEg5dREs4d5e8f4e"
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
                                      value="Ad87deD4gEe8dG57Ede4eEg5dREs4d5e8f4e"
                                      readOnly
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <label htmlFor="amount-withdraw">Amount</label>
                                    <input
                                      id="amount-withdraw"
                                      className="custom-select"
                                      value={withdrawAmount}
                                      onChange={(e)=> {setWithdrawAmount(e.target.value)}}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mt-3">
                                    <label htmlFor="remark-withdraw">Remarks</label>
                                    <input
                                      id="remark-withdraw"
                                      className="custom-select"
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <label htmlFor="fee-withdraw">Fee</label>
                                    <input
                                      id="fee-withdraw"
                                      className="custom-select"
                                      value="1 USD"
                                      readOnly
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <label htmlFor="arrival-withdraw">Actual Arrival</label>
                                    <input
                                      id="arrival-withdraw"
                                      className="custom-select"
                                      value="0 USD"
                                      readOnly
                                    />
                                  </div>
                                  <button type="submit" className="withdraw-button" onClick={()=> {withdrawMoney()}}>Submit</button>     
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </div>
                    {/* <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">
                          Latest Transactions
                                </h5>
                        <div className="wallet-history">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>No.</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>25-04-2019</td>
                                <td>
                                  <i className="icon ion-md-checkmark-circle-outline green"></i>
                                </td>
                                <td>4.5454334</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>25-05-2019</td>
                                <td>
                                  <i className="icon ion-md-checkmark-circle-outline green"></i>
                                </td>
                                <td>0.5484468</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>25-06-2019</td>
                                <td>
                                  <i className="icon ion-md-close-circle-outline red"></i>
                                </td>
                                <td>2.5454545</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>25-07-2019</td>
                                <td>
                                  <i className="icon ion-md-checkmark-circle-outline green"></i>
                                </td>
                                <td>1.45894147</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>25-08-2019</td>
                                <td>
                                  <i className="icon ion-md-close-circle-outline red"></i>
                                </td>
                                <td>2.5454545</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div> */}
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

export default Wallet;