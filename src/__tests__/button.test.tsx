import React from "react";
import Button from "../components/atoms/Client/Button";
import { render, screen } from "@testing-library/react";

const clickHandler = jest.fn();

test("renders a button with correct variant and text", () => {
  const component = render(
    <Button onClickHandler={clickHandler} title="Click me" />
  );

  const buttonElement = screen.getByText("Click me");

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("btn");
  expect(component).toMatchSnapshot();
});

test("renders a button with custom class", () => {
  const component = render(
    <Button
      onClickHandler={clickHandler}
      title="Click me"
      styles={"custom-button"}
    />
  );

  const buttonElement = screen.getByText("Click me");

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("custom-button");
  expect(component).toMatchSnapshot();
});
