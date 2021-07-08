import React, { useEffect, useState } from 'react';
import {Tabs, Tab, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { getContracts } from '../../redux/actions/contractAction';
import { getContract } from '../../redux/actions/contractAction';
import { getContractHistory } from '../../redux/actions/contractAction';
import CloseModal from './CloseModal';
import Spinner from '../layout/Spinner';

const HistoryOrder = ({btc, eth, xrp, doge, link, ltc, getContract, getContracts, getContractHistory, contract: { contracts, loading, history } }) => {
  const [closeModalShow, setCloseModalShow] = useState(false);
  const [clearStatus, setClearStatus] = useState(true);

  const closeContract = (id) => {
      getContract(id);
      setCloseModalShow(true);
  }
  const closeAllContracts = () => {
    console.log('all contracts cancelled')
  }
  
  useEffect(() => {
    getContracts();
    getContractHistory();
  }, [getContracts, getContractHistory]);

  useEffect(() => {
    if(contracts === []) {
      setClearStatus(true);
    } else {
      setClearStatus(false);
    }
  }, [contracts]);

  return loading || contracts === null ? (
    <Spinner />
  ) : (
    <>
      <div className="history-order mt15">
        <Tabs defaultActiveKey="open-orders">
          <Tab eventKey="open-orders" title="My Positions">
              <Table responsive style={{overflowX:'scroll'}}>
                <thead>
                  <tr>
                    <th>Contract</th>
                    <th>Order Value</th>
                    <th>Opening Price</th>
                    <th>Unrealized P/L</th>
                    <th>Current Price</th>
                    <th>Opening Time</th>
                    <th>Order Time</th>
                    <th>Closing Time</th>
                    <th>Order Id</th>
                    <th><button className="order-clear" disabled={clearStatus}  onClick={() => {closeAllContracts()}}>Clear All</button></th>
                  </tr>
                </thead>
                <tbody>
                {
                  contracts &&
                  (contracts.length > 0 ? (<>
                    {contracts.map((contract) => {
                      let new_contract = {};
                      new_contract.id = contract._id;
                      new_contract.contractType = contract.contractType;
                      new_contract.symbol = contract.symbol.split(':')[1];
                      new_contract.margin = contract.margin;
                      new_contract.openingPrice = contract.openingPrice;
                      if(contract.symbol === 'BINANCE:BTCUSDT') {
                        new_contract.currentPrice = btc.askPrice;
                        new_contract.unrealizedPL_percent = ((btc.askPrice-contract.openingPrice)/contract.openingPrice*100).toFixed(2);
                        new_contract.unrealizedPL_amount = (contract.margin*new_contract.unrealizedPL_percent/100).toFixed(2);
                      } else if(contract.symbol === 'BINANCE:ETHUSDT') {
                        new_contract.currentPrice = eth.askPrice;
                        new_contract.unrealizedPL_percent = ((eth.askPrice-contract.openingPrice)/contract.openingPrice*100).toFixed(2);
                        new_contract.unrealizedPL_amount = (contract.margin*new_contract.unrealizedPL_percent/100).toFixed(2);
                      } else if(contract.symbol === 'BINANCE:XRPUSDT') {
                        new_contract.currentPrice = xrp.askPrice;
                        new_contract.unrealizedPL_percent = ((xrp.askPrice-contract.openingPrice)/contract.openingPrice*100).toFixed(2);
                        new_contract.unrealizedPL_amount = (contract.margin*new_contract.unrealizedPL_percent/100).toFixed(2);
                      } else if(contract.symbol === 'BINANCE:DOGEUSDT') {
                        new_contract.currentPrice = doge.askPrice;
                        new_contract.unrealizedPL_percent = ((doge.askPrice-contract.openingPrice)/contract.openingPrice*100).toFixed(2);
                        new_contract.unrealizedPL_amount = (contract.margin*new_contract.unrealizedPL_percent/100).toFixed(2);
                      } else if(contract.symbol === 'BINANCE:LINKUSDT') {
                        new_contract.currentPrice = link.askPrice;
                        new_contract.unrealizedPL_percent = ((link.askPrice-contract.openingPrice)/contract.openingPrice*100).toFixed(2);
                        new_contract.unrealizedPL_amount = (contract.margin*new_contract.unrealizedPL_percent/100).toFixed(2);
                      } else {
                        new_contract.currentPrice = ltc.askPrice;
                        new_contract.unrealizedPL_percent = ((ltc.askPrice-contract.openingPrice)/contract.openingPrice*100).toFixed(2);
                        new_contract.unrealizedPL_amount = (contract.margin*new_contract.unrealizedPL_percent/100).toFixed(2);
                      }
                      new_contract.openingTime = moment(contract.openingTime).format('MM/DD hh:mm:ss');
                      new_contract.orderTime = contract.orderTime;
                      new_contract.closingTime = moment(contract.closingTime).format('MM/DD hh:mm:ss');

                      return (
                        <tr key={new_contract.id}>
                          <td className={new_contract.contractType === "BUY" ? "text-success":"text-danger"}>{new_contract.contractType + " : " + new_contract.symbol}</td>
                          <td>{new_contract.margin}</td>
                          <td>{new_contract.openingPrice}</td>
                          {new_contract.contractType === "BUY" ?
                          <td className={(new_contract.unrealizedPL_amount > 0) ? "text-success" : "text-danger"}>{new_contract.unrealizedPL_amount + "(" + new_contract.unrealizedPL_percent + "%)"}</td>:
                          <td className={(-new_contract.unrealizedPL_amount > 0) ? "text-success" : "text-danger"}>{(-new_contract.unrealizedPL_amount) + "(" + (-new_contract.unrealizedPL_percent) + "%)"}</td>
                          }
                          <td>{new_contract.currentPrice}</td>
                          <td>{new_contract.openingTime}</td>
                          <td>{new_contract.orderTime}</td>
                          <td>{new_contract.closingTime}</td>
                          <td>{new_contract.id}</td>
                          <td>
                            <button className="order-clear"  onClick={() => {closeContract(new_contract.id)}}>Close</button>
                          </td>
                        </tr>
                      )
                    })}
                  </>) : (
                    <span className="no-data">
                      <i className="icon ion-md-document"></i>
                      No data
                    </span>
                  ))
                }
                </tbody>
              </Table>
          </Tab>
          <Tab eventKey="order-history" title="History">
            <Table responsive style={{overflowX:'scroll'}}>
              <thead>
                <tr>
                  <th>Contract</th>
                  <th>Order Value</th>
                  <th>Opening Price</th>
                  <th>Opening Time</th>
                  <th>Closing Time</th>
                  <th>Order Time</th>
                  <th>Order Id</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {history && history.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td className={item.contractType === "BUY" ? "text-success":"text-danger"}>{item.contractType + ' : ' + item.symbol.split(':')[1]}</td>
                      <td>{item.margin}</td>
                      <td>{item.openingPrice}</td>
                      <td>{item.openingTime}</td>
                      <td>{item.closingTime}</td>
                      <td>{item.orderTime}</td>
                      <td>{item._id}</td>
                      <td>{moment(item.date).format('MM/DD hh:mm:ss')}</td>
                    </tr>
                  )                  
                })}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </div>
      <CloseModal
        show={closeModalShow}
        onHide={() => setCloseModalShow(false)}
        eth={eth} btc={btc} xrp={xrp} doge={doge} link={link} ltc={ltc}
      />
    </>
  );
}

HistoryOrder.propTypes = {
  getContracts: PropTypes.func.isRequired,
  getContract: PropTypes.func.isRequired,
  getContractHistory: PropTypes.func.isRequired,
  contract: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  contract: state.contract
});

export default connect(mapStateToProps, { getContract, getContracts, getContractHistory })(HistoryOrder);