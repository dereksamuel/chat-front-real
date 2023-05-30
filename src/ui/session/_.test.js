import { render, screen } from "@testing-library/react";

import { LoginForm } from "./LoginForm.jsx";

describe("Login", () => {
  it("should render Login", () => {
    render(<LoginForm />)
    const loginForm = screen.getByTestId("login-form");
    expect(loginForm).toBeInTheDocument();
  })

  it("should has 2 inputs", () => {
    render(<LoginForm />)
    const inputs = screen.getAllByTestId("input");
    expect(inputs.length).toEqual(2);
  })
});
