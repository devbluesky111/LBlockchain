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
              <li>
                <button className="order-clear" disabled>Clear All</button>
              </li>
            </ul>
          </Tab>
          <Tab eventKey="closed-orders" title="Open Orders">
            <ul className="d-flex justify-content-between market-order-item">
              <li>Time</li>
              <li>All pairs</li>
              <li>All Types</li>
              <li>Buy/Sell</li>
              <li>Price</li>
              <li>Amount</li>
              <li>Executed</li>
              <li>Unexecuted</li>
            </ul>
            <span className="no-data">
              <i className="icon ion-md-document"></i>
              No data
            </span>
          </Tab>
          <Tab eventKey="order-history" title="Closed Order">
            <ul className="d-flex justify-content-between market-order-item">
              <li>Time</li>
              <li>All pairs</li>
              <li>All Types</li>
              <li>Buy/Sell</li>
              <li>Price</li>
              <li>Amount</li>
              <li>Executed</li>
              <li>Unexecuted</li>
            </ul>
            <span className="no-data">
              <i className="icon ion-md-document"></i>
              No data
            </span>
          </Tab>
          <Tab eventKey="balance" title="Order History">
            <ul className="d-flex justify-content-between market-order-item">
              <li>Time</li>
              <li>All pairs</li>
              <li>All Types</li>
              <li>Buy/Sell</li>
              <li>Price</li>
              <li>Amount</li>
              <li>Executed</li>
              <li>Unexecuted</li>
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
