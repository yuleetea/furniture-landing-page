import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import FurnitureImage from "../images/furniture_services1.jpg";
import FurnitureImageTwo from "../images/furniture_services2.jpg";
import FurnitureImageThree from "../images/furniture_services3.jpg";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
    height: "100%",
  },

  servicesImage: {
    backgroundImage: `url(${FurnitureImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "700px",
    width: "100%",
  },

  servicesText: {
    textAlign: "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    fontFamily: "Raleway",
    letterSpacing: "2px",
  },

  servicesImageTwo: {
    backgroundImage: `url(${FurnitureImageTwo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "700px",
    width: "100%",
  },

  servicesImageThree: {
    backgroundImage: `url(${FurnitureImageThree})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "700px",
    width: "100%",
  },
}));

function ServicesOne() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={1} />
        <Grid item xs={4} className={classes.servicesText}>
          <h3>
            Officia eiusmod irure ullamco non irure sint ut consectetur sit non
            officia irure labore pariatur. Mollit do cillum cupidatat nisi Lorem
            non duis aliquip non quis commodo. Dolore qui velit commodo laborum
            eiusmod in quis dolor. Consequat et officia Lorem excepteur
            consectetur do adipisicing tempor irure mollit. Esse laboris esse
            commodo pariatur consectetur cillum consequat nisi Lorem laborum
            enim magna sit minim.
          </h3>
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={6} className={classes.servicesImage}></Grid>

        <Grid item xs={6} className={classes.servicesImageTwo}></Grid>

        <Grid item xs={1} />
        <Grid item xs={4} className={classes.servicesText}>
          <h3>
            Amet officia qui et adipisicing. Voluptate deserunt nulla cupidatat
            amet aliquip reprehenderit nostrud consequat ullamco. Duis est
            dolore veniam veniam ex. Sunt quis sit excepteur in voluptate esse
            quis excepteur officia dolor. Laborum mollit tempor ex eu laborum
            consectetur dolor ut in. Eiusmod duis duis ex qui elit id esse in.
            Lorem occaecat sit dolore id. Est minim duis consectetur enim.
          </h3>
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={4} className={classes.servicesText}>
          <h3>
            Labore consequat sint deserunt sit nostrud velit ullamco sint
            eiusmod sunt cillum proident amet ipsum. Non fugiat sint aliquip
            anim. Velit nulla duis aute proident cupidatat. Cillum sit fugiat
            aute pariatur. Dolor aliqua qui id voluptate proident deserunt sint
            laboris. Lorem proident et elit mollit quis deserunt minim irure
            fugiat adipisicing nulla. Sint consectetur officia ipsum ad ea ut ex
            proident pariatur elit veniam nostrud sint. Pariatur magna
            reprehenderit ad ipsum proident nulla quis.
          </h3>
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={6} className={classes.servicesImageThree}></Grid>
      </Grid>
    </div>
  );
}

// spacing={2} how much spacing between our grid items

export default ServicesOne;
