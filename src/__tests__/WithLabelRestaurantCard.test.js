import { render, screen } from "@testing-library/react";
import WithLabelComponent from "../Components/WithLable";
import RestrauntCard from "../Components/RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCard.json";
import "@testing-library/jest-dom";

const LabelAddedComponent = WithLabelComponent(RestrauntCard);

describe("With Label HOC test", () => {
  it("Should Render HOC component", () => {
    render(<LabelAddedComponent {...MOCK_DATA} />);
    const labelAddedComponent = screen.getByTestId("label-resto-card");
    expect(labelAddedComponent).toBeInTheDocument();
  });

  it("Should Render HOC component label", () => {
    render(<LabelAddedComponent {...MOCK_DATA} />);
    const labelAddedComponent = screen.getByLabelText("ITEMS AT ₹199");
    expect(labelAddedComponent).toBeInTheDocument();
  });
});
