import { ChannelsMenu } from "./index.jsx";
import { render, screen } from "@testing-library/react";

describe("ChannelsMenu", () => {
  it("should render channelsMenu", () => {
    render(<ChannelsMenu />)
    const channelsMenu = screen.getByTestId("channels-menu");
    expect(channelsMenu).toBeInTheDocument();
  });

  it("should have three children components", () => {
    render(<ChannelsMenu />)
    const channelsMenuItem = screen.getAllByTestId("channels-menu-item");
    const inputSearch = screen.getByTestId("channels-menu-input-search");
    const header = screen.getByTestId("channels-menu-header");

    expect(channelsMenuItem.length).toBeGreaterThan(0);
    expect(inputSearch).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });
});
