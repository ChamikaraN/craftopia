import React, { ReactNode, MouseEventHandler } from "react";
import { Button as BsButton } from "react-bootstrap";
import "./style.css";

interface ButtonProps {
  type?: "button" | "reset" | "submit";
  variant?: string;
  onClickHandler: MouseEventHandler<HTMLButtonElement>; // Update type to React.MouseEventHandler<HTMLButtonElement>
  size: "sm" | "lg";
  isDisable?: boolean;
  title: ReactNode;
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
}): JSX.Element => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
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
