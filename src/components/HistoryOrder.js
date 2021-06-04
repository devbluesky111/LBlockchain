import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
export default function HistoryOrder() {
  return (
    <>
      <div className="market-history market-order mt15">
        <Tabs defaultActiveKey="open-orders">
          <Tab eventKey="open-orders" title="My Positions">
            <ul className="d-flex justify-content-between market-order-item">
              <li>Contract</li>
              <li>Margin</li>
              <li>Opening Price</li>
              <li>Unrealized P/L</li>
              <li>Liquidation Price</li>
              <li>Current Price</li>
              <li>Open Type</li>
              <li>Est.Trading Fee</li>
              <li>Funding Fee</li>
              <li>Opening Time</li>
              <li>Order Number</li>
              <li>
                <button className="order-clear" disabled>Clear All</button>
              </li>
            </ul>
            <ul className="d-flex justify-content-between market-order-item">
              <li>Buy</li>
              <li>1934.41 VST</li>
              <li>30.004</li>
              <li>-10.62</li>
              <li>0.5883</li>
              <li>29.7856</li>
              <li>Market Order</li>
              <li>0.870</li>
              <li>0</li>
              <li>Opening Time</li>
              <li>11111</li>
              <li>
                <button className="order-clear">Cancel</button>
              </li>
            </ul>
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
    </>
  );
}
