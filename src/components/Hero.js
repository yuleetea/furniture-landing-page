import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HeroImage from "../images/hero_image7.jpg";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    fontFamily: "Nunito",
  },

  heroText: {
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: "2px",
    height: "100vh",
    fontSize: "2.45rem",
    paddingBottom: "100px",
  },

  heroSpanOne: {
    color: "#00695F",
  },

  heroSpanTwo: {
    color: "#f50057",
  },

  border: {
    height: "auto",
    width: "1000px",
    border: "2px solid white",
  },

  ctaBtn: {
    borderRadius: "5px",
    fontFamily: "Nunito",
    marginBottom: "50px",
    letterSpacing: "3px",
  },
});
function Hero() {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.root}>
      <div className={classes.heroText}>
        <div className={classes.border}>
          <h2>
            TAKE <span className={classes.heroSpanOne}>YOUR</span> LIVING
            <br /> TO THE NEXT
            <span className={classes.heroSpanTwo}> LEVEL</span>
          </h2>
          <Button
            variant="contained"
            color="primary"
            className={classes.ctaBtn}
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
