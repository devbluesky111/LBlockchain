import React from 'react';
import { Modal, Button, Container, Col, Row } from 'react-bootstrap';

function DepositModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      className="depositModal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Depoist
          </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>

              <h4>Coin</h4>
              <p>
                Processing...
                </p>
            </Col>
            <Col xs={6} md={4}>
              Network
              </Col>
          </Row>
          <Row>
            <span>● Operation Reminder</span><br />
            <span>
              1. Only USDT is accepted with this address, please do not transfer any non- USDT assets into this address; otherwise your assets will not be able to retrieved.<br />
                2. The Min. deposit amount is 1.00USDT; transfers less than this amount will be invalid and cannot be retrieved.<br />
                3. Deposit needs to be confirmed by the entire blocks; the deposit will be credited after confirmed over 2 blocks; withdrawal will be available after confirmed over 6 blocks; (SMS) notification of transfer status will be sent to your phone/email.
              </span>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DepositModal;