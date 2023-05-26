import { Menu } from "./index.jsx";
import { render, screen } from "@testing-library/react";

describe("MenuIndex", () => {
  it("should render menu", () => {
    render(<Menu />)
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });

  it("should have two children components", () => {
    render(<Menu />)
    const channelsMenu = screen.getByTestId("channels-menu");
    const sessionMenu = screen.getByTestId("session-menu");

    expect(channelsMenu).toBeInTheDocument();
    expect(sessionMenu).toBeInTheDocument();
  });
});
