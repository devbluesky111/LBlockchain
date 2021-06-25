import React from 'react';
import { Modal, Button, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import Spinner from './layout/Spinner';
import { connect } from 'react-redux';
import { disconnect } from '../redux/actions/authAction';

function DisconnectModal({ show, onHide, disconnect, auth : {publicAddress} }) {
  const confirmDisconnect = () => {
    setTimeout(() => {
      disconnect();
      onHide();
    }, 1000);
  }
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
          Your Wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row className="justify-content-center align-items-center">
            {publicAddress}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button onClick={() => {confirmDisconnect()}}>Logout</Button>
      </Modal.Footer>
    </Modal>
  );
}

DisconnectModal.propTypes = {
    auth: PropTypes.object.isRequired
};
  
const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {disconnect})(DisconnectModal);