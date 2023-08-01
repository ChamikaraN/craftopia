import React from "react";
import { Button as BsButton } from "react-bootstrap";

interface ButtonProps {
  type?: "button" | "reset" | "submit";
  variant?: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "sm" | "lg";
  isDisable?: boolean;
  title: React.ReactNode;
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  variant,
  onClickHandler,
  size = "sm",
  isDisable = false,
  title,
  styles = "",
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClickHandler(e);
  };

  return (
    <BsButton
      type={type}
      variant={variant}
      onClick={handleClick}
      size={size}
      disabled={isDisable}
      className={styles}
    >
      {title}
    </BsButton>
  );
};

export default Button;
