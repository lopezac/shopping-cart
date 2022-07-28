import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Product from "../components/Product";

let watch = {
  title: "BGD565KRS-7",
  img: "watch-1.png",
  price: 120,
  quantity: 0,
  id: 0,
};

const increaseQuantityMock = jest.fn();
const decreaseQuantityMock = jest.fn();

describe("product", () => {
  it("render the correct title", () => {
    render(
      <Product
        title="a title"
        quantity={1}
        price={100}
        img="some/img"
        increaseQuantity={increaseQuantityMock}
        decreaseQuantity={decreaseQuantityMock}
      />
    );

    const productTitle = screen.getAllByRole("listitem")[0];

    expect(productTitle).toHaveTextContent("a title");
  });

  it("render the correct price", () => {
    render(
      <Product
        title="a title"
        quantity={1}
        price={500}
        img="some/img"
        increaseQuantity={increaseQuantityMock}
        decreaseQuantity={decreaseQuantityMock}
      />
    );

    const productPrice = screen.getAllByRole("listitem")[1];

    expect(productPrice).toHaveTextContent("500");
  });

  it("render the correct quantity", () => {
    render(
      <Product
        title="a title"
        quantity={13}
        price={500}
        img="some/img"
        increaseQuantity={increaseQuantityMock}
        decreaseQuantity={decreaseQuantityMock}
      />
    );

    const productQuantity = screen.getAllByRole("listitem")[2];

    expect(productQuantity).toHaveTextContent("13");
  });

  it("render img", () => {
    render(
      <Product
        title="a title"
        quantity={13}
        price={500}
        img="some/img"
        increaseQuantity={increaseQuantityMock}
        decreaseQuantity={decreaseQuantityMock}
      />
    );

    const productImg = screen.getByRole("img");

    expect(productImg).toBeTruthy();
  });
});
