import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Products from "../components/Products";
import CartProducts from "../components/CartProducts";

function getItemsMock() {
  return [
    {
      title: "watch-1",
      img: "watch-1.png",
      price: 120,
      quantity: 1,
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

describe("TopNavbar cart quantity", () => {
  const setTotalQuantityMock = jest.fn();

  it("Products call setTotalQuantity on change", () => {
    render(
      <Products
        getItems={getItemsMock}
        setTotalQuantity={setTotalQuantityMock}
      />
    );
    const increaseBtn1 = screen.getAllByTestId("increase-btn")[0];
    const increaseBtn2 = screen.getAllByTestId("increase-btn")[1];

    userEvent.click(increaseBtn1);
    userEvent.click(increaseBtn2);

    expect(setTotalQuantityMock).toBeCalledTimes(2);
  });

  it("CartProducts call setTotalQuantity on change", () => {
    render(
      <CartProducts
        getItems={getItemsMock}
        setTotalQuantity={setTotalQuantityMock}
      />
    );
    const increaseBtn1 = screen.getAllByTestId("increase-btn")[0];
    const increaseBtn2 = screen.getAllByTestId("increase-btn")[1];

    userEvent.click(increaseBtn1);
    userEvent.click(increaseBtn2);

    expect(setTotalQuantityMock).toBeCalledTimes(2);
  });
});
