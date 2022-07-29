import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import React from "react";

import CartProducts from "../components/CartProducts";
import TotalPrice from "../components/TotalPrice";

function getItemsMock() {
  return [
    {
      title: "watch-1",
      img: "watch-1.png",
      price: 120,
      quantity: 2,
      id: 0,
    },
    {
      title: "watch-2",
      img: "watch-2.png",
      price: 129,
      quantity: 1,
      id: 1,
    },
  ];
}

describe("TotalPrice", () => {
  it("displays correct value when 3 items in cart", () => {
    render(<CartProducts getItems={getItemsMock} />);
    const totalPrice = screen.getByTestId("total-price");

    expect(totalPrice).toHaveTextContent("369");
  });

  it("displays none if no items", () => {
    render(<CartProducts getItems={getItemsMock} />);
    const totalPrice = screen.getByTestId("total-price");

    userEvent.click(screen.getAllByTestId("decrease-btn")[0]);
    userEvent.click(screen.getAllByTestId("decrease-btn")[0]);
    userEvent.click(screen.getAllByTestId("decrease-btn")[0]);

    expect(totalPrice).toHaveTextContent("0");
  });
});
