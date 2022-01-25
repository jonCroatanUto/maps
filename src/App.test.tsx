import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

test("renders the two main links : Theorical challence and Practical challence", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const theorical = screen.getByText("Theorical challence");
  const practical = screen.getByText("Practical challence");
  expect(theorical).toBeInTheDocument();
  expect(practical).toBeInTheDocument();
});
