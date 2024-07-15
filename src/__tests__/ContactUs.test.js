import { render, screen } from "@testing-library/react";
import ContactUs from "../Components/ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us tests", () => {
  test("Contact Us Page to be rendered", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should show Button on the screen", () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
