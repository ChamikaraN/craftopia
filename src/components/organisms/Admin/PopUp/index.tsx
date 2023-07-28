import React, { ReactNode } from "react";
import { Modal } from "react-bootstrap";
import Button from "@atoms/Client/Button";

interface PopUpProps {
  show: boolean;
  hide: () => void;
  onConfirm: () => void;
  action: string;
  title: string;
  content: ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({
  show,
  hide,
  onConfirm,
  action,
  title,
  content,
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
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          title="Cancel"
          onClickHandler={hide}
          size="sm"
        />
        <Button
          variant="primary"
          title={action}
          onClickHandler={onConfirm}
          size="sm"
          styles={"float-left"}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;
