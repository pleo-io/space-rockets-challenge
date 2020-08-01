import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@chakra-ui/core";

const customRender = (ui, { route = "/", store, ...options } = {}) => {
  const AppProviders = ({ children }) => {
    return (
      <ThemeProvider>
        <Router initialEntries={[route]}>{children}</Router>
      </ThemeProvider>
    );
  };

  return render(ui, {
    wrapper: AppProviders,
    ...options,
  });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
