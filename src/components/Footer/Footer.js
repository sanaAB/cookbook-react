import React from "react";
import "./Footer.css";
import { makeStyles, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import ScrollToTop from "react-scroll-to-top";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Image from "./food5.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "static",
    top: "auto",
    bottom: "0px",
    width: "100%",
    left: "0px",
    [theme.breakpoints.up(380)]: {
      position: "fixed",
    },
  },
  item: {
    fontSize: 15,
    fontFamily: "Cookie, cursive",
    letterSpacing: "1px",
    [theme.breakpoints.up(470)]: {
      text: "none",
    },
    [theme.breakpoints.down(320)]: {
      display: "none",
    },
  },
  appBar: {
    color: "black",
    position: "static",
    backgroundImage: `url(${Image})`,
    backgroundSize: "130%",
    [theme.breakpoints.up(600)]: {
      backgroundImage: `url(${Image})`,
      backgroundSize: "110%",
    },
    [theme.breakpoints.up(800)]: {
      backgroundImage: `url(${Image})`,
      backgroundSize: "300%",
    },
  },
  socialIcons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up(350)]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  socialIcon: {
    marginLeft: "5px",
    zIndex: 1,
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.2)",
    },
    [theme.breakpoints.down(320)]: {
      height: 30,
      width: 30,
    },
  },
  about: {
    flexGrow: 1,
    fontFamily: "Cookie, cursive",
    fontSize: "15px",
    fontWeight: "bold",
    letterSpacing: "1px",
    cursor: "pointer",
    [theme.breakpoints.down(320)]: {
      fontSize: "10px",
    },
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <AppBar position="inherit" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Grid item xs={4} sm={4} xl={5} className={classes.item}>
            <div>Follow us on</div>
          </Grid>
          <Grid item xs={4} sm={4} xl={2} className={classes.socialIcons}>
            <FacebookIcon
              href=""
              className={classes.socialIcon}
              fontSize="large"
            />
            <InstagramIcon
              href=""
              className={classes.socialIcon}
              fontSize="large"
            />
            <TwitterIcon
              href=""
              className={classes.socialIcon}
              fontSize="large"
            />
          </Grid>

          <ScrollToTop smooth id="scroll" className={classes.scroll} />
          <Grid item xs={4} sm={4} xl={5}>
            <Link to="/About">
              <Button size="small" variant="text" type="submit">
                <span className={classes.about}>About</span>
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
