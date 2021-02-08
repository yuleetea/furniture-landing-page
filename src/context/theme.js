import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

// theme so that we can overwrite default material UI theme

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00695f",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
