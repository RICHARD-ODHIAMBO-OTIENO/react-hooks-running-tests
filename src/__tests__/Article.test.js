import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'hello from the Header!'", () => {
  render(<Article />);
  expect(screen.getByText("hello from the Header!")).toBeInTheDocument();
});

 
