import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./context/theme";

import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    <CssBaseline />
  </ThemeProvider>,

  document.getElementById("root")
);
