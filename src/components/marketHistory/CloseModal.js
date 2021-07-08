import React, { useState, useEffect } from 'react';
import { Modal, Button, Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { closeContract } from '../../redux/actions/contractAction';
import { getContractHistory } from '../../redux/actions/contractAction';

function CloseModal({ show, onHide, btc, eth, xrp, doge, link, ltc, closeContract, getContractHistory, contract: {contract, loading}}) {

  const [currentRate, setCurrentRate] = useState(null);

  useEffect(() => {
    if(contract !== null){
      switch (contract.symbol) {
        case 'BINANCE:BTCUSDT':
          setCurrentRate(btc.askPrice);
          break;
        case 'BINANCE:ETHUSDT':
          setCurrentRate(eth.askPrice);
          break;
        case 'BINANCE:XRPUSDT':
          setCurrentRate(xrp.askPrice);
          break;
        case 'BINANCE:DOGEUSDT':
          setCurrentRate(doge.askPrice);
          break;
        case 'BINANCE:LINKUSDT':
          setCurrentRate(link.askPrice);
          break;    
        default:
          setCurrentRate(ltc.askPrice);
          break;
      }
    }
  }, [contract, btc, eth, xrp, doge, link, ltc]);

  const confirmClose = (data) => {
    setTimeout(() => {
      closeContract({id:data.id, orderValue:data.orderValue, closingPrice:data.closingPrice, profitLoss:data.profitLoss});
      getContractHistory();
      onHide();
    }, 1000);
  }
  return loading? (
    <Spinner />
  ) : (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      className="closeModal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Close
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row className="mb-2">
              <Col xs={12} md={8}>
                  {contract && contract.symbol.split(':')[1]}
              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={12} md={8}>
                  Unrealize PL Amount:
              </Col>
              <Col xs={6} md={4}>
                  {contract && currentRate && contract?.contractType === "BUY" ? ((currentRate - contract?.openingPrice)/contract?.openingPrice*contract?.margin).toFixed(2) : ((contract?.openingPrice - currentRate)/contract?.openingPrice*contract?.margin).toFixed(2)}
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={12} md={8}>
                  Opening Price:
              </Col>
              <Col xs={6} md={4}>
                  {contract && contract.openingPrice}
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                  Est. Closing Price:
              </Col>
              <Col xs={6} md={4}>
                  {currentRate}
              </Col>             
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} className="closeButton">Cancel</Button>
          <Button
            onClick={() => {contract && currentRate && contract.contractType === "BUY" ?
            confirmClose({id:contract._id, orderValue:contract.margin, closingPrice:currentRate, profitLoss:((currentRate - contract.openingPrice)/contract.openingPrice*contract.margin).toFixed(2)}) :
            confirmClose({id:contract._id, orderValue:contract.margin, closingPrice:currentRate, profitLoss:((contract.openingPrice - currentRate)/contract.openingPrice*contract.margin).toFixed(2)})
          }}>
            Confirm
          </Button>
        </Modal.Footer>
    </Modal>
  );
}

CloseModal.propTypes = {
    contract: PropTypes.object.isRequired
};
  
const mapStateToProps = (state) => ({
    contract: state.contract
});

export default connect(mapStateToProps, {closeContract, getContractHistory})(CloseModal);