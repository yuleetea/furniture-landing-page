import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "../App.css";
import NavLinks from "../components/NavLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Nunito",
    fontSize: "1.6rem",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={() => setShowLinks(!showLinks)} />
            {showLinks ? <NavLinks /> : null}
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            LOGO
          </Typography>
          <Button color="inherit">SHOP</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
