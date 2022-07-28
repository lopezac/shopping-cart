import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Products from "../components/Products";
import userEvent from "@testing-library/user-event";

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

describe("products", () => {
  it("call getItems", () => {
    const getItemsMock = jest.fn();

    render(<Products getItems={getItemsMock} />);

    expect(getItemsMock).toBeCalled();
  });

  it("creates div with products className", () => {
    render(<Products getItems={getItemsMock} />);

    const productsDiv = screen.getByTestId("products");

    expect(productsDiv).toHaveClass("products");
  });

  it("quantity doesn't decrease below 0", () => {
    render(<Products getItems={getItemsMock} />);
    const decreaseBtn = screen.getAllByTestId("decrease-btn")[2];
    const quantity = screen.getAllByTestId("quantity")[2];

    userEvent.click(decreaseBtn);
    userEvent.click(decreaseBtn);

    expect(quantity).toHaveTextContent("0");
  });
});
