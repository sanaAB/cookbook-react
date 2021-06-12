import React from "react";
import "./Contact.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Contact() {
  const useStyles = makeStyles((theme) => ({
    root: {
      border: 0,
      color: "white",
      height: 400,
      padding: "0 30px",
      flexGrow: 1,
      background: "linear-gradient(45deg, #f9f6f1 5%, #fcf0e4 60%)",

      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
  }));

  const classes = useStyles();
  console.log("from contact");

  return (
    <Grid>
      <form className={classes.root}>
        <TextField label="Full Name" fullWidth autocomplete="none" />

        <TextField label="Email" fullWidth autocomplete="none" />
        <TextField
          label="Message"
          fullWidth
          multiline
          rows={5}
          autocomplete="none"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Grid>
  );
}
