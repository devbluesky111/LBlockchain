import React, { useEffect } from 'react';
import { Tabs, Tab, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getContractHistory } from '../../redux/actions/contractAction';

const MarketHistory = ({symbol, contract: {history}, getContractHistory}) => {

  const index = symbol.split(':')[1].slice(-10,-4)
  useEffect(() => {
    getContractHistory();
  }, [getContractHistory]);

  return (
    <>
      <div className="market-history mt15">
        <Tabs defaultActiveKey="recent-trades">
          <Tab eventKey="recent-trades" title="Recent Trades">
            <Table responsive style={{overflowX: 'auto'}}>
              <thead>
                <tr>
                  <th>Closing Time</th>
                  <th>Direction</th>
                  <th>Closing Price</th>
                  <th>USD Amount({index})</th>
                </tr>
              </thead>
              <tbody>
                {history && history.filter(index => index.symbol === symbol).map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{moment(item.closingTime).format('MM/DD hh:mm:ss')}</td>
                      <td className={item.contractType === "BUY" ? 'text-success':'text-danger'}>{item.contractType}</td>
                      <td>{item.closingPrice}</td>
                      <td>{item.margin}</td>
                    </tr>
                  )                  
                })}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

MarketHistory.propTypes = {
  getContractHistory: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  contract: state.contract
});

export default connect(mapStateToProps, {getContractHistory})(MarketHistory);