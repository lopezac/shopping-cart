import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Product from "../components/Product";

it("creates the product div with product className", () => {
  const fakeProps = jest.fn();
});

const increaseQuantity = jest.fn();
const decreaseQuantity = jest.fn();
