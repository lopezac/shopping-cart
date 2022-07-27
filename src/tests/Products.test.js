import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Products from "../components/Products";

it("call getItems", () => {
  const getItemsMock = jest.fn();

  render(<Products getItems={getItemsMock} />);

  expect(getItemsMock).toBeCalled();
});

it("creates div with products className", () => {
  const getItemsMock = jest.fn();
  render(<Products getItems={getItemsMock} />);

  const productsDiv = screen.getByTestId("products");

  expect(productsDiv).toHaveClass("products");
});
