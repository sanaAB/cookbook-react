import React from "react";
import "./Footer.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import ScrollToTop from "react-scroll-to-top";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    maxHeight: 60,
    // background: "linear-gradient(45deg, #f9da9f 5%, #ffedcb 60%)",
    color: "black",
  },
  socialIcon: {
    marginLeft: "5px",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="none" color="inherit" className={classes.appBar}>
      <Toolbar>
        <div className="socialIcons">
          Follow us on
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
        </div>
        <ScrollToTop smooth id="scroll" />
      </Toolbar>
    </AppBar>
  );
}
