import React from "react";
import { Modal } from "react-bootstrap";

interface PopUpProps {
  show: boolean;
  hide: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const PopUp: React.FC<PopUpProps> = ({ show, hide, title, message }) => {
  return (
    <Modal show={show} onHide={() => hide()} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default PopUp;
