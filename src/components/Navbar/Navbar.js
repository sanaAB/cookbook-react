import React from "react";
import "./Navbar.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img className="logo" src="/jls-logo3.PNG" alt="logo" />
          <Typography className={classes.title} variant="h6" noWrap>
            COOKBOOK
          </Typography>
          <Link to="/">
            <HomeIcon />
          </Link>
          <Link to="/contact-us">
            <ContactPhoneIcon />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

/*const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  export default function ButtonAppBar() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <Button color="inherit">Logo</Button>
            <Typography variant="h6" className={classes.title}>
              COOKBOOK
            </Typography>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"></IconButton>
            <MenuIcon />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  */
/*<IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>*/
