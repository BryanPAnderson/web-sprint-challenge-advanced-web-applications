import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  const { getAllByTestId, queryAllByTestId, rerender } = render(
    <BubblePage colorList={[]}/>
  )
});
