import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CartProducts from "../components/CartProducts";

function getItemsMock() {
  return [
    {
      title: "watch-1",
      img: "watch-1.png",
      price: 120,
      quantity: 5,
      id: 0,
    },
    {
      title: "watch-2",
      img: "watch-2.png",
      price: 129,
      quantity: 3,
      id: 1,
    },
    {
      title: "watch-3",
      img: "watch-3.png",
      price: 129,
      quantity: 0,
      id: 2,
    },
  ];
}

describe("CartProducts", () => {
  it("getPickedItems renders items with a quantity greater than 0", () => {
    render(<CartProducts getItems={getItemsMock} />);

    const quantity1 = screen.getAllByTestId("quantity")[0];
    const quantity2 = screen.getAllByTestId("quantity")[1];
    const quantity3 = screen.getAllByTestId("quantity")[2];

    expect(quantity1).toHaveTextContent("5");
    expect(quantity2).toHaveTextContent("3");
    expect(quantity3).toBeFalsy();
  });

  it("getTotalPrice total price of items with different quantities", () => {
    render(<CartProducts getItems={getItemsMock} />);

    const priceTotal1 = screen.getAllByTestId("price")[0];
    const priceTotal2 = screen.getAllByTestId("price")[1];
    const priceTotal3 = screen.getAllByTestId("price")[2];

    expect(priceTotal1).toHaveTextContent("600");
    expect(priceTotal2).toHaveTextContent("387");
    expect(priceTotal3).toBeFalsy();
  });

  it("remove item when quantity is zero", () => {
    render(<CartProducts getItems={getItemsMock} />);
    const product1 = screen.getAllByTestId("product")[0];
    const decreaseBtn = screen.getAllByTestId("decrease-btn")[1];

    userEvent.click(decreaseBtn);
    userEvent.click(decreaseBtn);
    userEvent.click(decreaseBtn);

    expect(screen.getAllByTestId("product")[0]).toBe(product1);
    expect(screen.queryAllByTestId("product")[1]).toBeFalsy();
  });
});
