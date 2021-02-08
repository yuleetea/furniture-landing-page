import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  headerText: {
    fontSize: "2.5rem",
    fontFamily: "Nunito",
    color: "#00695F",
  },
});

function LocationHeader() {
  const classes = useStyles();
  return (
    <div className={classes.headerText}>
      <h2> Our Location 🏘 </h2>
    </div>
  );
}

export default LocationHeader;
