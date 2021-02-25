import React, { useEffect, useState } from 'react';
import {Tabs, Tab, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { getContracts } from '../../redux/actions/action';
import { getContract } from '../../redux/actions/action';
import CloseModal from './CloseModal';
import Spinner from '../layout/Spinner';

const HistoryOrder = ({btc, eth, xrp, doge, link, ltc, getContract, getContracts, contract: { contracts, loading } }) => {
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
  }, [getContracts]);

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
              <Table responsive="md">
                <thead>
                  <tr>
                    <th>Contract</th>
                    <th>Margin</th>
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
                      if(contract.symbol === 'BINANCE:BTCUSD') {
                        new_contract.currentPrice = btc.askPrice;
                        new_contract.unrealizedPL_percent = (btc.askPrice-contract.openingPrice)/contract.openingPrice*100;
                        new_contract.unrealizedPL_amount = (contract.margin*new_contract.unrealizedPL_percent/100).toFixed(2);
                      } else if(contract.symbol === 'BINANCE:ETHUSD') {
                        new_contract.currentPrice = eth.askPrice;
                        new_contract.unrealizedPL_percent = (eth.askPrice-contract.openingPrice)/contract.openingPrice*100;
                        new_contract.unrealizedPL_amount = (contract.margin*new_contract.unrealizedPL_percent/100).toFixed(2);
                      } else if(contract.symbol === 'BINANCE:XRPUSD') {
                        new_contract.currentPrice = xrp.askPrice;
                        new_contract.unrealizedPL_percent = (xrp.askPrice-contract.openingPrice)/contract.openingPrice*100;
                        new_contract.unrealizedPL_amount = (contract.margin*new_contract.unrealizedPL_percent/100).toFixed(2);
                      } else if(contract.symbol === 'BINANCE:DOGEUSD') {
                        new_contract.currentPrice = doge.askPrice;
                        new_contract.unrealizedPL_percent = (doge.askPrice-contract.openingPrice)/contract.openingPrice*100;
                        new_contract.unrealizedPL_amount = (contract.margin*new_contract.unrealizedPL_percent/100).toFixed(2);
                      } else if(contract.symbol === 'BINANCE:LINKUSD') {
                        new_contract.currentPrice = link.askPrice;
                        new_contract.unrealizedPL_percent = (link.askPrice-contract.openingPrice)/contract.openingPrice*100;
                        new_contract.unrealizedPL_amount = (contract.margin*new_contract.unrealizedPL_percent/100).toFixed(2);
                      } else {
                        new_contract.currentPrice = ltc.askPrice;
                        new_contract.unrealizedPL_percent = (ltc.askPrice-contract.openingPrice)/contract.openingPrice*100;
                        new_contract.unrealizedPL_amount = (contract.margin*new_contract.unrealizedPL_percent/100).toFixed(2);
                      }
                      new_contract.openingTime = moment(contract.openingTime).format('YYYY/MM/DD hh:mm:ss');
                      new_contract.orderTime = contract.orderTime;
                      new_contract.closingTime = moment(contract.closingTime).format('YYYY/MM/DD hh:mm:ss');

                      return (
                        <tr key={new_contract.id}>
                          <td>{new_contract.contractType + ":" + new_contract.symbol}</td>
                          <td>{new_contract.margin}</td>
                          <td>{new_contract.openingPrice}</td>
                          <td>{new_contract.unrealizedPL_amount}</td>
                          <td>{new_contract.currentPrice}</td>
                          <td>{new_contract.openingTime}</td>
                          <td>{new_contract.orderTime}</td>
                          <td>{new_contract.closingTime}</td>
                          <td>{new_contract.id}</td>
                          <td>
                            <button className="order-clear"  onClick={() => {closeContract(contract._id)}}>Close</button>
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
          <Tab eventKey="closed-orders" title="Trigger Order">
            <ul className="d-flex justify-content-between market-order-item">
              <li>Contract</li>
              <li>Order Time</li>
              <li>Margin</li>
              <li>Trigger Price</li>
              <li>Closing Price</li>
              <li>Current Price</li>
              <li>Order Number</li>
              <li>Operation</li>
            </ul>
          </Tab>
          <Tab eventKey="order-history" title="History">
            <ul className="d-flex justify-content-between market-order-item">
              <li>Contract</li>
              <li>Margin</li>
              <li>Closing Time</li>
              <li>Closing Type</li>
              <li>Closing Price</li>
              <li>Trading Fee</li>
              <li>Funding Fee</li>
              <li>Opening Time</li>
              <li>Opening Price</li>
              <li>Opening Type</li>
              <li>Order Number</li>
            </ul>
            <span className="no-data">
              <i className="icon ion-md-document"></i>
              No data
            </span>
          </Tab>
          <Tab eventKey="balance" title="Trigger History">
            <ul className="d-flex justify-content-between market-order-item">
              <li>Contract</li>
              <li>Order Time</li>
              <li>Trigger Time</li>
              <li>Margin</li>
              <li>Trigger Price</li>
              <li>Closing Fee</li>
              <li>Status</li>
              <li>Order Number</li>
            </ul>
            <span className="no-data">
              <i className="icon ion-md-document"></i>
              No data
            </span>
          </Tab>
        </Tabs>
      </div>
      <CloseModal
      show={closeModalShow}
      onHide={() => setCloseModalShow(false)}
      />
    </>
  );
}

HistoryOrder.propTypes = {
  getContracts: PropTypes.func.isRequired,
  contract: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  contract: state.contract
});

export default connect(mapStateToProps, { getContract, getContracts })(HistoryOrder);