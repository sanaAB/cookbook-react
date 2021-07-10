import React from "react";
import "./Contact.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Image from "./pancakes.jpg";

export default function Contact() {
  const useStyles = makeStyles((theme) => ({
    root: {
      border: 0,
      color: "white",
      minHeight: 650,
      padding: "0 30px",
      flexGrow: 1,
      backgroundColor: "lightgrey",
      backgroundImage: `url(${Image})`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      [theme.breakpoints.down(370)]: {
        backgroundSize: "100%",
        minHeight: 590,
        flexGrow: 0,
      },
      [theme.breakpoints.up(370)]: {
        backgroundSize: "100%",
        minHeight: 570,
        flexGrow: 0,
      },
      [theme.breakpoints.up(400)]: {
        backgroundSize: "100%",
        minHeight: 590,
        flexGrow: 0,
      },
      [theme.breakpoints.up(650)]: {
        backgroundSize: "100%",
        minHeight: 600,
        flexGrow: 0,
      },
      [theme.breakpoints.up(800)]: {
        backgroundSize: "100%",
        minHeight: 600,
        flexGrow: 0,
      },
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
