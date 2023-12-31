import React from "react";
import { Form } from "react-bootstrap";

interface InputProps {
  label: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: (value: string) => void;
  isInvalid?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  type,
  placeholder,
  onChange,
  isInvalid,
}) => {
  return (
    <Form.Group className="mb-3" controlId={`formBasic${label}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        isInvalid={isInvalid}
      />
      <Form.Control.Feedback type="invalid">
        Please enter a valid {label.toLowerCase()}.
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default Input;
