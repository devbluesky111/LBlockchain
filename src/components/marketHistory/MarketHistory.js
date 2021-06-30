import React, { useEffect } from 'react';
import { Tabs, Tab, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getContractHistory } from '../../redux/actions/contractAction';

const MarketHistory = ({contract: {history}, getContractHistory}) => {

  useEffect(() => {
    getContractHistory();
  }, [getContractHistory]);

  console.log('history-->', history)
  return (
    <>
      <div className="market-history mt15">
        <Tabs defaultActiveKey="recent-trades">
          <Tab eventKey="recent-trades" title="Recent Trades">
            <Table responsive style={{overflowX: 'auto'}}>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Contract</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {history && history.slice(0,5).map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{moment(item.date).format('YYYY/MM/DD hh:mm:ss')}</td>
                      <td >{item.contractType + ' : ' + item.symbol.split(':')[1]}</td>
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