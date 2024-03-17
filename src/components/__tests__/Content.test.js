import React from "react";
import { render, screen } from "@testing-library/react";
import Content from "../Content";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
    render(<Content />);
    const heading = screen.getByRole("heading"); // Assuming the heading text is "Contact Us"
    expect(heading).toBeInTheDocument();
});
// test or it both are same
it("Should load button us component", () => {
    render(<Content />);
    const button = screen.getByRole("button"); // Assuming the heading text is "Contact Us"
    expect(button).toBeInTheDocument();
});
test("Should load button us component", () => {
    render(<Content />);
    const message = screen.getByPlaceholderText("message"); // Assuming the heading text is "Contact Us"
    expect(message).toBeInTheDocument();
});
test("Should load button us component", () => {
    render(<Content />);
    const message = screen.getByText("Submit"); // Assuming the heading text is "Contact Us"
    expect(message).toBeInTheDocument();
});





