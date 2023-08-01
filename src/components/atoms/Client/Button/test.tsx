import { render, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button Component", () => {
  const mockOnClickHandler = jest.fn();

  const buttonProps = {
    onClickHandler: mockOnClickHandler,
    title: "Click Me",
    variant: "primary",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Button component correctly", () => {
    const { getByRole } = render(<Button {...buttonProps} />);
    const button = getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveTextContent("Click Me");
  });

  it("calls onClickHandler when the button is clicked", () => {
    const { getByRole } = render(<Button {...buttonProps} />);
    const button = getByRole("button");

    fireEvent.click(button);

    expect(mockOnClickHandler).toHaveBeenCalledTimes(1);
  });

  it("disables the button when isDisable is true", () => {
    const { getByRole } = render(<Button {...buttonProps} isDisable={true} />);
    const button = getByRole("button") as HTMLButtonElement;
    expect(button).toBeDisabled();
  });

  it("applies custom styles to the button", () => {
    const customStyles = "custom-btn-style";
    const { getByRole } = render(
      <Button {...buttonProps} styles={customStyles} />
    );
    const button = getByRole("button");

    expect(button).toHaveClass(customStyles);
  });
});
