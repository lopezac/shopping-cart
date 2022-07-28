import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import IncreaseBtn from "../components/IncreaseBtn";

describe("Increase Button", () => {
  it("calls increaseQuantity on click", () => {
    const increaseQuantityMock = jest.fn();
    render(<IncreaseBtn increaseQuantity={increaseQuantityMock} />);
    const increaseBtn = screen.getByRole("button");

    userEvent.click(increaseBtn);

    expect(increaseQuantityMock).toBeCalled();
  });
});
