import React from "react";
import { render, screen } from "@utils/testUtils";
import ScrollSync from "@pages/scroll-sync";

describe("Scroll sync page", () => {
  it("should render text inside of scroll sync", () => {
    render(<ScrollSync />);

    const text = screen.getByText(/SCREEN 2/i);

    expect(text).toBeInTheDocument();
  });
});
