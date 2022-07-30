import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import DecreaseBtn from "../components/DecreaseBtn";

describe("decreaseBtn", () => {
  it("calls decreaseQuantity on click", () => {
    const decreaseQuantityMock = jest.fn();
    render(<DecreaseBtn decreaseQuantity={decreaseQuantityMock} />);
    const decreaseBtn = screen.getByTestId("decrease-btn");

    userEvent.click(decreaseBtn);

    expect(decreaseQuantityMock).toBeCalled();
  });
});
