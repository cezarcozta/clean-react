import { render } from "@testing-library/react";
import React from "react";
import { Login } from "./login";
describe("Login Component", () => {
  test("Should render the login component", () => render(<Login />));
});
