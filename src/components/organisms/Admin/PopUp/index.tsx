import React, { ReactNode } from "react";
import { Modal } from "react-bootstrap";
import Button from "@atoms/Client/Button";

interface PopUpProps {
  show: boolean;
  hide: () => void;
  onConfirm: () => void;
  title: string;
  message: ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({
  show,
  hide,
  onConfirm,
  title,
  message,
}) => {
  return (
    <Modal
      show={show}
      onHide={() => hide()}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant={"danger"} onClickHandler={hide} title={"Cancel"} />
        <Button
          variant={"primary"}
          onClickHandler={onConfirm}
          title={"Delete"}
          styles={"float-left"}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;
