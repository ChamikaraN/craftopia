import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Select from "../components/atoms/Client/Select";

test("renders Select component correctly", () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const label = "Select an option";
  const value = "option2"; // The initial selected value
  const onChange = jest.fn();

  render(
    <Select label={label} value={value} onChange={onChange} options={options} />
  );

  // Verify if the label and options are rendered correctly
  const selectLabelElement = screen.getByText(label);
  expect(selectLabelElement).toBeInTheDocument();

  const option1Element = screen.getByText("Option 1");
  const option2Element = screen.getByText("Option 2");
  const option3Element = screen.getByText("Option 3");

  expect(option1Element).toBeInTheDocument();
  expect(option2Element).toBeInTheDocument();
  expect(option3Element).toBeInTheDocument();

  // Verify if the correct option is selected based on the initial value
  const selectElement = screen.getByRole("combobox");
  expect(selectElement).toHaveValue("option2");

  // Simulate changing the select value and verify if onChange is called
  fireEvent.change(selectElement, { target: { value: "option3" } });
  expect(onChange).toHaveBeenCalledWith("option3");
});
