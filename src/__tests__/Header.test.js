import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Components/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { UserContext } from "../utils/contexts";

const setUser = jest.fn();

describe("Header Test cases", () => {
  it("should render Header Component", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  it("should render Logout text when clicked", () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ setUser }}>
          <Header />
        </UserContext.Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logOutButton = screen.getByRole("button", { name: "Logout" });
    expect(logOutButton).toBeInTheDocument();
  });
});
