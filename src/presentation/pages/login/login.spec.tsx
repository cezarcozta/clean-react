import { render } from "@testing-library/react";
import React from "react";
import { Login } from "./login";
describe("Login Component Screen", () => {
  test("Should not render the spinner and error component on start", () => {
    const { getByTestId } = render(<Login />);
    const errorWrap = getByTestId("error-wrap");
    expect(errorWrap.childElementCount).toBe(0);
  });
});
