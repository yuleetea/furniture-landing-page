import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import FooterImage from "../images/footer_image.jpeg";

const useStyles = makeStyles({
  mapsContainer: {
    display: "flex",
    alignItems: "center",
  },

  grid: {
    width: "100%",
    margin: "0px",
    height: "100%",
    marginTop: "30px",
  },

  footerImage: {
    backgroundImage: `url(${FooterImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "700px",
    width: "100%",
  },
});

function GoogleMaps() {
  const classes = useStyles();
  return (
    <div className={classes.mapsContainer}>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={1} />
        <Grid item xs={3}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.365826416994!2d-83.1350146843088!3d42.29205894738544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b33ba07a078af%3A0x35d3a115e4dc0de9!2s9895%20Barron%20St%2C%20Detroit%2C%20MI%2048209!5e0!3m2!1sen!2sus!4v1612794222568!5m2!1sen!2sus"
            width="800"
            height="650"
            frameborder="1"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </Grid>
        <Grid item xs={8} className={classes.footerImage}></Grid>
      </Grid>
    </div>
  );
}

export default GoogleMaps;
