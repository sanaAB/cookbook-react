import React from "react";
import "./Navbar.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    top: 0,
    bottom: "auto",
    // background: "linear-gradient(45deg, #f9da9f 5%, #ffedcb 60%)",
  },
  title: {
    flexGrow: 30,
    fontFamily: "Cookie, cursive",
    fontSize: 23,
    color: "black",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  icons: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    color: "black",
    height: 40,
    width: 40,
    padding: 5,
    // boxShadow:
    // "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.navbar} position="static">
        <Toolbar>
          <Link to="/">
            <img className="logo" src="/jls-logo3.PNG" alt="logo" edge="start" />
          </Link>
          <span className={classes.title}>
            “I cook with wine, sometimes I even add it to the food.” ― W.C.
            Fields
          </span>
          <div className={classes.icons}>
            <Link to="/">
              <IconButton color="inherit" edge="end">
                <HomeIcon className={classes.icon} />
              </IconButton>
            </Link>
            <Link to="/contact-us">
              <IconButton color="inherit" edge="end">
                <ContactPhoneIcon className={classes.icon} />
              </IconButton>
            </Link>
            <Link to="/order">
              <IconButton color="inherit" edge="end">
                <ShoppingBasketIcon className={classes.icon} />
              </IconButton>
            </Link>
            
          </div>
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
