import { render, screen } from "@testing-library/react";
import RestrauntCard from "../Components/RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCard.json";
import "@testing-library/jest-dom";

describe("Restaurant Card tests", () => {
  it("Should render Restaurant Card", () => {
    render(<RestrauntCard {...MOCK_DATA} />);

    const restaurantCard = screen.getByTestId("restaurantCard");
    expect(restaurantCard).toBeInTheDocument();
  });

  it("Should render Restaurant Card", () => {
    render(<RestrauntCard {...MOCK_DATA} />);
    const restaurantCardName = screen.getByRole("heading", {
      name: "Chinese Wok",
    });
    expect(restaurantCardName).toBeInTheDocument();
  });
});
