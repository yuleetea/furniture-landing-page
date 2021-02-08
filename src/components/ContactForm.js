import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Input, TextField, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
    width: "100%",
    margin: "0px",
    height: "100%",
  },

  formText: {
    fontFamily: "Nunito",
    fontSize: "1.5rem",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    fontSize: "1.5rem",
    margin: "20px",
  },

  contactUs: {
    fontFamily: "Nunito",
    fontSize: "2.5rem",
    color: "#00695F",
    textDecoration: "underline",
  },

  btn: {
    backgroundColor: "#00C5BE",
    color: "#ffffff",
    margin: "0 auto",
    width: "25%",
    borderRadius: "8px",
  },

  connectWithUs: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    fontSize: "1.5rem",
    margin: "20px",
    fontFamily: "Raleway",
  },

  span: {
    color: "#00C5BE",
    cursor: "pointer",
  },
});

function ContactForm() {
  const classes = useStyles();

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={2} />
      <Grid item xs={4} className={classes.contactForm}>
        <h2 className={classes.contactUs}> Contact Us </h2>
        <h4 className={classes.formText}>
          We respond to every inquiry within 24 hours 🙋!
        </h4>
        <form onSubmit={onSubmitHandler} className={classes.form}>
          <label className={classes.formText}>Name</label>
          <Input placeholder="Name"></Input>
          <label className={classes.formText}>Email</label>
          <Input placeholder="Email"></Input>
          <label className={classes.formText}>Message</label>
          <TextField
            placeholder="Message"
            multiline
            rows={2}
            rowsMax={4}
          ></TextField>
          <br />
          <Button
            className={classes.btn}
            color="primary"
            style={{ backgroundColor: "#00C5BE" }}
          >
            Submit
          </Button>
        </form>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={4} className={classes.connectWithUs}>
        <h3> Support and Email: </h3>

        <p>
          In the event you need support or have any questions: Email us at
          <span className={classes.span}> support@lorem.com</span>
        </p>

        <h3>
          <strong>Address and Phone Number: </strong>
        </h3>

        <p> 861 Abner Road, Detroit MI 48209</p>
        <p> 715-386-9422</p>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}

export default ContactForm;
