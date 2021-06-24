import React from 'react';
import { Modal, Button, Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { closeContract } from '../../redux/actions/contractAction';

function CloseModal({ show, onHide, closeContract, contract: {contract, loading}}) {
  const confirmClose = () => {
    setTimeout(() => {
      closeContract(contract._id);
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
                {contract && contract.openingPrice}
            </Col>             
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} className="closeButton">Cancel</Button>
        <Button onClick={() => {confirmClose()}}>Confirm</Button>
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

export default connect(mapStateToProps, {closeContract})(CloseModal);