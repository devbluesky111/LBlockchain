import React from 'react';
import { Modal, Button, Container, Row } from 'react-bootstrap';

function MetamaskSettingModal({ show, onHide }) {
  return  (
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
          Setting up Metamask for BSC
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row className="justify-content-center align-items-center">
            <div className="text-center">
              https://stakingbits.com/setting-up-metamask-for-binance-smart-chain-bsc-921d9a2625fd
            </div>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button onClick={onHide}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MetamaskSettingModal;