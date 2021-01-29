import React from "react";
import { render, screen } from "@utils/testUtils";
import Landing from "@pages/index";

describe("Landing page", () => {
  it("should render text inside of landing", () => {
    render(<Landing />);

    const text = screen.getByText(/SCREEN 1/i);
    const text2 = screen.getByText(/View/i);

    expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });

  it("should render Button inside of landing", () => {
    render(<Landing />);

    expect(screen.getByRole('button', {name: /View/i}))
  });
});
