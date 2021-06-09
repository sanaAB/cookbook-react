import React from "react";
import "./Contact.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default function Contact(){
  const useStyles = makeStyles((theme) => ({
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
      flexGrow: 1,
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
  }));

  const classes = useStyles();
  console.log("from contact");


  return (
    <div>
    <Grid>
      <form className={classes.root}>
        <TextField label="Full Name" fullWidth autocomplete="none" />
        TEST
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
    </div>
  );}
