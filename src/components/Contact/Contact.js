import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Image from "./pancakes.jpg";
import Popper from "@material-ui/core/Popper";

export default function Contact() {
  const useStyles = makeStyles((theme) => ({
    root: {
      border: 0,
      color: "white",
      minHeight: 700,
      padding: "0 30px",
      flexGrow: 1,
      backgroundColor: "rgba(224, 222, 218, 1)",
      backgroundImage: `url(${Image})`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      [theme.breakpoints.up(650)]: {
        backgroundColor: "rgba(224, 222, 218, 1)",
        backgroundImage: "none",
        minHeight: 1250,
      },
    },
    paper: {
      border: "1px solid",
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const classes = useStyles();
  console.log("from contact");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

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
        <div>
          <Button aria-describedby={id} type="button" onClick={handleClick}>
            Submit
          </Button>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <div className={classes.paper}>
              We received your message. Thank you!
            </div>
          </Popper>
        </div>
      </form>
    </Grid>
  );
}
