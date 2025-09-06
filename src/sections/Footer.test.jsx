// Footer.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom"; // for better matchers

describe("Footer component", () => {
  it("renders the current year and copyright", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(
      new RegExp(`©${currentYear}.*Code Info`, "i")
    );

    expect(copyright).toBeInTheDocument();
  });
});
